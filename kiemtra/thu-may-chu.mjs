// Tầng B — thử phần máy chủ (API, khóa mật khẩu, xuất số liệu) bằng kho số liệu giả trong bộ nhớ.
// Chạy trên máy: node kiemtra/thu-may-chu.mjs   (cần Node.js ≥ 22.13 vì dùng node:sqlite)
// Không chạy ở bước dựng Cloudflare.
import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imp = (p) => import(pathToFileURL(path.join(ROOT, p)).href);
const suKien = await imp('functions/api/su-kien.js');
const thongKe = await imp('functions/api/thong-ke.js');
const xuat = await imp('functions/api/xuat.js');
const mw = await imp('functions/_middleware.js');

// Mô phỏng D1 trên SQLite
const raw = new DatabaseSync(':memory:');
const stmt = (sql) => {
  const st = { sql, args: [], bind(...a) { st.args = a; return st; },
    async all() { return { results: raw.prepare(sql).all(...st.args) }; } };
  return st;
};
const DB = {
  prepare: stmt,
  async batch(list) {
    return list.map((s) => {
      const p = raw.prepare(s.sql);
      return { results: /^\s*SELECT/i.test(s.sql) ? p.all(...s.args) : (p.run(...s.args), []) };
    });
  },
};

let dat = 0, khong = 0;
const kiem = (ten, dieuKien, chiTiet = '') => {
  if (dieuKien) { dat++; console.log('  ✓ ' + ten); }
  else { khong++; console.log('  ✗ ' + ten + (chiTiet ? ' — ' + chiTiet : '')); }
};
const post = (body, raw_ = false) => suKien.onRequestPost({
  env: { DB },
  request: Object.assign(new Request('https://x/api/su-kien', { method: 'POST', body: raw_ ? body : JSON.stringify(body) }),
    { cf: { region: 'Tuyen Quang', country: 'VN' } }),
});

console.log('B1. Ghi sự kiện');
let r = await post({ cid: 'a', events: [
  { kind: 'open', device: 'mobile', ref: 'qr', v: '1.3.0' },
  { kind: 'game', mode: 'dan_churung', n: 20, done: true, dur: 300, answers: [['ChuRung_001', 1], ['ChuRung_002', 0], ['xau id', 0]], device: 'mobile', v: '1.3.0' },
  { kind: 'loi', msg: 'TypeError: x is undefined', src: 'game.js:10:5', device: 'mobile', browser: 'Chrome 120 / Android', v: '1.3.0' },
] });
kiem('gói hợp lệ được nhận (200)', r.status === 200);
kiem('lượt chơi tự đếm câu trả lời/đúng', raw.prepare("SELECT answered, correct FROM events WHERE kind='game'").get()?.answered === 3);
kiem('mã câu xấu bị bỏ qua', !raw.prepare("SELECT 1 FROM qstats WHERE qid='xau id'").get());
kiem('lỗi được ghi', raw.prepare('SELECT COUNT(*) n FROM errors').get().n === 1);
r = await post('{hong', true);
kiem('dữ liệu hỏng → 400', r.status === 400);
r = await post({ cid: 'b', events: Array.from({ length: 30 }, (_, i) => ({ kind: 'loi', msg: 'loi ' + i })) });
kiem('mỗi gói chỉ nhận tối đa 10 lỗi', raw.prepare('SELECT COUNT(*) n FROM errors').get().n === 11);
r = await post({ cid: 'c', events: [{ kind: 'game', mode: 'x;DROP TABLE events', n: 1e9, ts: 9e15, device: '<script>' }] });
const last = raw.prepare("SELECT mode, n, device, ts FROM events ORDER BY id DESC LIMIT 1").get();
kiem('dữ liệu phá hoại bị lọc (chế độ, số câu, thời điểm, thiết bị)', last.mode === null && last.n === 100 && last.device === null && last.ts <= Date.now());
r = await post({ events: [{ kind: 'loi', msg: 'x'.repeat(70000) }] });
kiem('gói quá 64 KB → 413', r.status === 413);

console.log('B2. Tổng hợp');
r = await thongKe.onRequestGet({ env: { DB }, request: new Request('https://x/api/thong-ke') });
const j = await r.json();
kiem('tổng lượt mở = 1, lượt chơi = 2', j.tong.luot_mo === 1 && j.tong.luot_choi === 2, JSON.stringify(j.tong));
kiem('có mục lỗi gần đây', Array.isArray(j.loi_gan_day) && j.loi_gan_day.length >= 1);
kiem('không cho lưu đệm công khai', r.headers.get('cache-control') === 'private, no-store');

console.log('B3. Khóa trang thống kê');
const goi = (p, env, auth) => mw.onRequest({
  request: new Request('https://x' + p, auth ? { headers: { authorization: 'Basic ' + Buffer.from(auth).toString('base64') } } : {}),
  env, next: async () => new Response('NOI DUNG', { status: 200 }),
});
const MK = 'mat-khau-thu-' + Math.random().toString(36).slice(2); // giá trị thử, chỉ dùng trong bộ nhớ
kiem('chưa đặt mật khẩu → từ chối (503)', (await goi('/thongke', {})).status === 503);
kiem('không đăng nhập → 401', (await goi('/thongke', { THONGKE_MATKHAU: MK })).status === 401);
kiem('sai mật khẩu → 401', (await goi('/api/thong-ke', { THONGKE_MATKHAU: MK }, 'a:sai')).status === 401);
const dung = await goi('/api/xuat', { THONGKE_MATKHAU: MK }, 'ai-cung-duoc:' + MK);
kiem('đúng mật khẩu → vào được, không lưu đệm', dung.status === 200 && dung.headers.get('cache-control') === 'private, no-store');
kiem('/thongke.html cũng bị khóa', (await goi('/thongke.html', { THONGKE_MATKHAU: MK })).status === 401);
kiem('API ghi sự kiện KHÔNG bị khóa', (await goi('/api/su-kien', { THONGKE_MATKHAU: MK })).status === 200);
kiem('trang game KHÔNG bị khóa', (await goi('/', { THONGKE_MATKHAU: MK })).status === 200);

console.log('B4. Xuất số liệu');
raw.prepare("INSERT INTO errors (ts, day, msg) VALUES (1, '2026-11-22', '=HYPERLINK(\"x\")')").run();
for (const loai of ['ngay', 'che-do', 'khu-vuc', 'cau-hoi', 'loi', 'su-kien']) {
  const res = await xuat.onRequestGet({ env: { DB }, request: new Request('https://x/api/xuat?loai=' + loai) });
  const b = new Uint8Array(await res.arrayBuffer());
  const t = new TextDecoder().decode(b); // TextDecoder tự bỏ BOM nên kiểm BOM theo byte
  kiem(`xuất "${loai}": 200, có BOM, có tiêu đề cột`,
    res.status === 200 && b[0] === 0xef && b[1] === 0xbb && b[2] === 0xbf && t.split('\r\n')[0].length > 3,
    `mã ${res.status}, đầu tệp: ${t.slice(0, 40)}`);
}
const csvLoi = await (await xuat.onRequestGet({ env: { DB }, request: new Request('https://x/api/xuat?loai=loi') })).text();
kiem('chặn công thức Excel trong nội dung', csvLoi.includes("'=HYPERLINK") && !/(^|,)"?=HYPERLINK/m.test(csvLoi));
kiem('loại sai → 400', (await xuat.onRequestGet({ env: { DB }, request: new Request('https://x/api/xuat?loai=abc') })).status === 400);
kiem('tháng sai → 400', (await xuat.onRequestGet({ env: { DB }, request: new Request('https://x/api/xuat?loai=su-kien&thang=xx') })).status === 400);

console.log(khong ? `\nKHÔNG ĐẠT: ${khong} lỗi / ${dat + khong} phép thử.` : `\nĐẠT: ${dat}/${dat} phép thử.`);
process.exit(khong ? 1 : 0);
