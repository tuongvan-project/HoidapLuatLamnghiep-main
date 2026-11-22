// POST /api/su-kien — nhận một gói sự kiện từ game (gửi theo lô, có thể gửi bù khi có mạng lại).
import { ensureSchema, vnDay, json, str, int } from './_db.js';

const MAX_BODY = 32 * 1024;
const MAX_EVENTS = 50;
const QID = /^[A-Za-z]{1,10}_\d{1,4}$/;
const MODES = new Set(['kiemlam', 'dan_tonghop', 'dan_churung', 'dan_cbls', 'dan_dvr']);
const DEVICES = new Set(['mobile', 'tablet', 'desktop']);

export async function onRequestPost({ request, env }) {
  if (!env.DB) return json({ ok: false, error: 'no-db' }, 503);
  const len = Number(request.headers.get('content-length') || 0);
  if (len > MAX_BODY) return json({ ok: false, error: 'too-large' }, 413);

  let body;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY) return json({ ok: false, error: 'too-large' }, 413);
    body = JSON.parse(text);
  } catch {
    return json({ ok: false, error: 'bad-json' }, 400);
  }
  const list = Array.isArray(body?.events) ? body.events.slice(0, MAX_EVENTS) : [];
  if (!list.length) return json({ ok: true, saved: 0 });

  const cid = str(body.cid, 40);
  const cf = request.cf || {};
  const region = str(cf.region, 60);
  const country = str(cf.country, 4);
  const now = Date.now();

  await ensureSchema(env.DB);
  const stmts = [];
  const qCount = new Map(); // qid -> [shown, wrong]

  for (const e of list) {
    const kind = e?.kind === 'game' ? 'game' : e?.kind === 'open' ? 'open' : null;
    if (!kind) continue;
    // Sự kiện gửi bù: chấp nhận thời điểm do máy gửi trong vòng 30 ngày, không nhận thời điểm tương lai.
    let ts = int(e.ts, 0, now);
    if (!ts || ts < now - 30 * 86400000) ts = now;
    const mode = MODES.has(e.mode) ? e.mode : null;
    const device = DEVICES.has(e.device) ? e.device : null;
    // Số câu trả lời / đúng: ưu tiên tự đếm từ danh sách câu trả lời.
    const answers = kind === 'game' && Array.isArray(e.answers) ? e.answers.slice(0, 100) : null;
    const answered = answers ? answers.length : int(e.answered, 0, 100);
    const correct = answers ? answers.filter(a => Array.isArray(a) && a[1]).length : int(e.correct, 0, 100);

    stmts.push(env.DB.prepare(
      `INSERT INTO events (ts, day, kind, cid, mode, n, answered, correct, dur, done, device, region, country, ref, v)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      ts, vnDay(ts), kind, cid, mode,
      kind === 'game' ? int(e.n, 0, 100) : null,
      kind === 'game' ? answered : null,
      kind === 'game' ? correct : null,
      kind === 'game' ? int(e.dur, 0, 36000) : null,
      kind === 'game' ? (e.done ? 1 : 0) : null,
      device, region, country, str(e.ref, 40), str(e.v, 20)
    ));

    if (answers) {
      for (const a of answers) {
        const qid = Array.isArray(a) ? a[0] : null;
        if (typeof qid !== 'string' || !QID.test(qid)) continue;
        const c = qCount.get(qid) || [0, 0];
        c[0] += 1;
        if (!a[1]) c[1] += 1;
        qCount.set(qid, c);
      }
    }
  }

  for (const [qid, [shown, wrong]] of qCount) {
    stmts.push(env.DB.prepare(
      `INSERT INTO qstats (qid, shown, wrong) VALUES (?, ?, ?)
       ON CONFLICT(qid) DO UPDATE SET shown = shown + excluded.shown, wrong = wrong + excluded.wrong`
    ).bind(qid, shown, wrong));
  }

  if (stmts.length) await env.DB.batch(stmts);
  return json({ ok: true, saved: stmts.length });
}
