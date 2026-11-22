// GET /api/thong-ke?tu=YYYY-MM-DD&den=YYYY-MM-DD — số liệu tổng hợp cho trang thongke.html.
// Chỉ trả số liệu gộp, không có dữ liệu từng người.
import { ensureSchema, vnDay, json } from './_db.js';

const DAY = /^\d{4}-\d{2}-\d{2}$/;

export async function onRequestGet({ request, env }) {
  if (!env.DB) return json({ ok: false, error: 'no-db' }, 503);
  const url = new URL(request.url);
  const today = vnDay(Date.now());
  let den = url.searchParams.get('den');
  let tu = url.searchParams.get('tu');
  if (!DAY.test(den || '')) den = today;
  if (!DAY.test(tu || '')) tu = vnDay(Date.parse(den + 'T00:00:00Z') - 29 * 86400000);
  if (tu > den) [tu, den] = [den, tu];

  await ensureSchema(env.DB);
  const db = env.DB;
  const R = 'day BETWEEN ?1 AND ?2';
  const [tong, theoNgay, theoCheDo, theoThietBi, theoVung, theoNguon, cauSai, toanBo] = await db.batch([
    db.prepare(`SELECT
        SUM(kind='open') AS luot_mo,
        COUNT(DISTINCT CASE WHEN kind='open' THEN cid END) AS khach,
        SUM(kind='game') AS luot_choi,
        SUM(kind='game' AND done=1) AS hoan_thanh,
        SUM(CASE WHEN kind='game' THEN answered ELSE 0 END) AS cau_tra_loi,
        SUM(CASE WHEN kind='game' THEN correct ELSE 0 END) AS cau_dung,
        AVG(CASE WHEN kind='game' AND done=1 THEN correct END) AS diem_tb
      FROM events WHERE ${R}`).bind(tu, den),
    db.prepare(`SELECT day,
        SUM(kind='open') AS luot_mo,
        COUNT(DISTINCT CASE WHEN kind='open' THEN cid END) AS khach,
        SUM(kind='game') AS luot_choi,
        SUM(kind='game' AND done=1) AS hoan_thanh
      FROM events WHERE ${R} GROUP BY day ORDER BY day`).bind(tu, den),
    db.prepare(`SELECT mode, COUNT(*) AS luot_choi, SUM(done=1) AS hoan_thanh,
        AVG(CASE WHEN done=1 THEN correct END) AS diem_tb
      FROM events WHERE ${R} AND kind='game' GROUP BY mode ORDER BY luot_choi DESC`).bind(tu, den),
    db.prepare(`SELECT COALESCE(device,'khác') AS ten, COUNT(*) AS so
      FROM events WHERE ${R} AND kind='open' GROUP BY ten ORDER BY so DESC`).bind(tu, den),
    db.prepare(`SELECT COALESCE(region, country, 'Không rõ') AS ten, COUNT(*) AS so
      FROM events WHERE ${R} AND kind='open' GROUP BY ten ORDER BY so DESC LIMIT 15`).bind(tu, den),
    db.prepare(`SELECT COALESCE(ref,'trực tiếp') AS ten, COUNT(*) AS so
      FROM events WHERE ${R} AND kind='open' GROUP BY ten ORDER BY so DESC LIMIT 10`).bind(tu, den),
    db.prepare(`SELECT qid, shown, wrong, ROUND(100.0*wrong/shown,1) AS ti_le_sai
      FROM qstats WHERE shown >= 5 ORDER BY ti_le_sai DESC, shown DESC LIMIT 20`),
    db.prepare(`SELECT SUM(kind='open') AS luot_mo, SUM(kind='game') AS luot_choi,
        COUNT(DISTINCT cid) AS khach, MIN(day) AS tu_ngay FROM events`),
  ]);

  return json({
    ok: true, tu, den, cap_nhat: new Date().toISOString(),
    tong: tong.results[0], tu_dau: toanBo.results[0],
    theo_ngay: theoNgay.results, theo_che_do: theoCheDo.results,
    theo_thiet_bi: theoThietBi.results, theo_vung: theoVung.results,
    theo_nguon: theoNguon.results, cau_hay_sai: cauSai.results,
  }, 200, { 'cache-control': 'public, max-age=120' });
}
