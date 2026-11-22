// Bộ tự kiểm trước khi phát hành — chạy: node kiemtra/kiemtra.mjs
// Chạy tự động ở bước dựng trên Cloudflare Pages: có LỖI → dựng thất bại → trang chính giữ nguyên bản cũ.
// Không cần cài thêm gói nào (chỉ dùng Node.js có sẵn).
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const loi = [];
const canhBao = [];
const ok = [];
const doc = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
// Danh sách tệp THẬT SỰ được đưa lên web = tệp git đang theo dõi (Cloudflare dựng từ git).
// Windows không phân biệt hoa/thường nên tên trên đĩa có thể khác tên trong git (vd click.mp3 / Click.mp3).
let gitFiles = null;
try {
  gitFiles = new Set(execFileSync('git', ['ls-files'], { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] })
    .toString().split('\n').filter(Boolean));
  if (!gitFiles.size) gitFiles = null;
} catch { gitFiles = null; }
const coTep = (f) => {
  f = f.replace(/\\/g, '/').replace(/^\.\//, '');
  // Tệp mới chưa "git add" sẽ bị báo thiếu: đúng ý, vì Cloudflare chỉ nhận tệp có trong git.
  if (gitFiles) return gitFiles.has(f) || [...gitFiles].some((g) => g.startsWith(f + '/'));
  // Phân biệt hoa/thường như máy chủ web (Windows thì không phân biệt nên phải tự so)
  const full = path.join(ROOT, f);
  if (!fs.existsSync(full)) return false;
  const dir = path.dirname(full);
  return fs.readdirSync(dir).includes(path.basename(full));
};

// ---------- A1. Cú pháp mọi tệp .js ----------
const jsFiles = [];
(function walk(d) {
  for (const f of fs.readdirSync(path.join(ROOT, d))) {
    if (f.startsWith('.') || f === 'node_modules' || f.startsWith('backup')) continue;
    const rel = path.join(d, f);
    const st = fs.statSync(path.join(ROOT, rel));
    if (st.isDirectory()) walk(rel);
    else if (/\.(m?js)$/.test(f)) jsFiles.push(rel);
  }
})('.');
for (const f of jsFiles) {
  try {
    execFileSync(process.execPath, ['--check', path.join(ROOT, f)], { stdio: 'pipe' });
  } catch (e) {
    loi.push(`A1 Cú pháp hỏng: ${f}: ${String(e.stderr || e.message).split('\n').slice(0, 4).join(' ')}`);
  }
}
// Mã viết thẳng trong trang HTML
let inline = 0;
for (const f of ['index.html', 'thongke.html']) {
  if (!coTep(f)) continue;
  for (const m of doc(f).matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
    inline++;
    try { new vm.Script(m[1], { filename: f }); } catch (e) { loi.push(`A1 Mã trong ${f} hỏng: ${e.message}`); }
  }
}
// Tệp cấu hình JSON
for (const f of ['_routes.json', 'manifest.webmanifest']) {
  try { JSON.parse(doc(f)); } catch (e) { loi.push(`A1 ${f} không phải JSON hợp lệ: ${e.message}`); }
}
ok.push(`A1 Cú pháp: ${jsFiles.length} tệp .js, ${inline} đoạn mã trong trang, 2 tệp cấu hình`);

// ---------- A2. Bộ câu hỏi ----------
const BO = { 'questions_KL.js': 'KL_', 'question_ChuRung.js': 'ChuRung_', 'question_CBLS.js': 'CBLS_', 'question_DVR.js': 'DVR_' };
const MIN = { 'questions_KL.js': 115, 'question_ChuRung.js': 130, 'question_CBLS.js': 92, 'question_DVR.js': 85 }; // số câu tối thiểu đã nghiệm thu
const allIds = new Set();
for (const [f, prefix] of Object.entries(BO)) {
  if (!coTep(f)) { loi.push(`A2 Thiếu bộ câu hỏi ${f}`); continue; }
  let qs;
  try {
    const src = doc(f);
    const name = (src.match(/const\s+(\w+)\s*=/) || [])[1];
    qs = vm.runInNewContext(src + `;${name}`, {}, { timeout: 5000 });
  } catch (e) { loi.push(`A2 Không đọc được ${f}: ${e.message}`); continue; }
  if (!Array.isArray(qs)) { loi.push(`A2 ${f} không phải danh sách câu hỏi`); continue; }
  if (qs.length < MIN[f]) canhBao.push(`A2 ${f} có ${qs.length} câu, ít hơn ${MIN[f]} câu đã nghiệm thu`);
  const texts = new Set();
  qs.forEach((q, i) => {
    const id = q && q.id;
    const where = `${f} câu #${i + 1}${id ? ' (' + id + ')' : ''}`;
    if (!id || typeof id !== 'string') loi.push(`A2 ${where}: thiếu mã câu (id)`);
    else {
      if (!id.startsWith(prefix)) canhBao.push(`A2 ${where}: mã câu không bắt đầu bằng ${prefix}`);
      if (allIds.has(id)) loi.push(`A2 ${where}: trùng mã câu`);
      allIds.add(id);
    }
    if (!q.question || !String(q.question).trim()) loi.push(`A2 ${where}: thiếu nội dung câu hỏi`);
    const t = String(q.question || '').trim().toLowerCase();
    if (t && texts.has(t)) loi.push(`A2 ${where}: trùng nguyên văn câu hỏi khác trong bộ`);
    texts.add(t);
    const o = q.options;
    if (!Array.isArray(o) || o.length !== 4) loi.push(`A2 ${where}: phải có đúng 4 phương án`);
    else {
      if (new Set(o.map((x) => String(x).trim())).size !== 4) loi.push(`A2 ${where}: có phương án trùng nhau`);
      if (o.some((x) => !String(x).trim())) loi.push(`A2 ${where}: có phương án rỗng`);
      if (!o.includes(q.correct)) loi.push(`A2 ${where}: đáp án đúng không khớp nguyên văn phương án nào`);
    }
    if (!q.explanation || !String(q.explanation).trim()) loi.push(`A2 ${where}: thiếu giải thích`);
  });
  ok.push(`A2 ${f}: ${qs.length} câu`);
}

// ---------- A3. Tham chiếu tệp ----------
const html = doc('index.html'), css = doc('style.css'), game = doc('game.js');
const refs = new Set();
const add = (r) => { r = r.split('#')[0].split('?')[0].replace(/%20/g, ' '); if (r && !/^(https?:|data:|\/\/|\$\{)/.test(r)) refs.add(r.replace(/^\.?\//, '')); };
for (const m of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) add(m[1]);
for (const m of css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) add(m[1]);
for (const m of game.matchAll(/['"`]([A-Za-z0-9_ .-]+\.(?:mp3|mp4|webp|png|jpg|jpeg|gif|svg|woff2))(?:\?v=\d+)?['"`]/g)) add(m[1]);
refs.delete('');
for (const r of refs) if (!coTep(r)) loi.push(`A3 Tệp được gọi nhưng không có (hoặc sai hoa/thường): ${r}`);
ok.push(`A3 Tham chiếu: ${refs.size} tệp`);

// ---------- A4. Danh sách lưu ngoại tuyến (sw.js) ----------
const sw = doc('sw.js');
const assetV = (sw.match(/const ASSET_V = '(\d+)'/) || [])[1];
const coreBlock = (sw.match(/const CORE = \[([\s\S]*?)\];/) || [])[1] || '';
const core = [...coreBlock.matchAll(/'([^']+)'(?:\s*\+\s*ASSET_V)?/g)].map((m) => m[1]);
if (!assetV) loi.push('A4 Không tìm thấy ASSET_V trong sw.js');
if (!core.length) loi.push('A4 Không đọc được danh sách CORE trong sw.js');
for (const c of core) {
  const f = c.split('?')[0];
  if (f === './' || f === '') continue;
  if (!coTep(f)) loi.push(`A4 sw.js cất tệp không có: ${c}`);
}
const coreFiles = new Set(core.map((c) => c.split('?')[0]));
for (const r of refs) {
  if (/\.(mp4)$/.test(r) || r === 'Theme.mp3') continue; // video, nhạc nền: cất khi phát
  if (/\.(js|css|webp|png|jpg|woff2|mp3|webmanifest)$/.test(r) && !coreFiles.has(r)) {
    loi.push(`A4 Tệp lõi chưa có trong danh sách lưu ngoại tuyến (sw.js CORE): ${r}`);
  }
}
ok.push(`A4 Lưu ngoại tuyến: ${core.length} mục`);

// ---------- A5. Phiên bản thống nhất ----------
const gv = (html.match(/window\.GAME_VERSION = '([\d.]+)'/) || [])[1];
const cl = doc('CHANGELOG.md');
const clv = (cl.match(/^## \[(\d+\.\d+\.\d+)\]/m) || [])[1];
if (!gv) loi.push('A5 Không tìm thấy window.GAME_VERSION trong index.html');
if (gv && clv && gv !== clv) loi.push(`A5 Phiên bản trong index.html (${gv}) khác mục mới nhất của CHANGELOG.md (${clv})`);
const vs = new Set([...html.matchAll(/\?v=(\d+)/g), ...game.matchAll(/\?v=(\d+)/g)].map((m) => m[1]));
if (vs.size > 1) loi.push(`A5 Tham số ?v= không thống nhất: ${[...vs].join(', ')}`);
if (assetV && vs.size === 1 && !vs.has(assetV)) loi.push(`A5 ?v=${[...vs][0]} khác ASSET_V=${assetV} trong sw.js`);
ok.push(`A5 Phiên bản ${gv} · ?v=${[...vs].join(',')} · ASSET_V=${assetV}`);

// ---------- A6. Không lọt tệp nội bộ ----------
let tracked = null;
try { tracked = execFileSync('git', ['ls-files'], { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().split('\n').filter(Boolean); } catch { /* không có git */ }
const files = tracked || fs.readdirSync(ROOT);
for (const f of files) {
  if (/\.(docx?|xlsx?|pdf|zip|rar)$/i.test(f) || /^backup/i.test(f) || /(^|\/)(tmp_|test_)/.test(f)) {
    loi.push(`A6 Tệp nội bộ có thể bị đưa lên web: ${f}`);
  }
}
ok.push('A6 Tệp nội bộ: đã rà');

// ---------- Kết quả ----------
console.log('=== BỘ TỰ KIỂM — Hỏi đáp Pháp luật Lâm nghiệp ===');
ok.forEach((x) => console.log('  ✓ ' + x));
canhBao.forEach((x) => console.log('  ! CẢNH BÁO ' + x));
loi.slice(0, 60).forEach((x) => console.log('  ✗ LỖI ' + x));
if (loi.length > 60) console.log(`  … và ${loi.length - 60} lỗi khác`);
console.log(loi.length ? `\nKHÔNG ĐẠT: ${loi.length} lỗi. Không phát hành.` : `\nĐẠT (${canhBao.length} cảnh báo).`);
process.exit(loi.length ? 1 : 0);
