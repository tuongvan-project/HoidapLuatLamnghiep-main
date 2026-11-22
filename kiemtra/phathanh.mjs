// Công cụ chuẩn bị phát hành — đổi số phiên bản ở MỌI chỗ cùng lúc, thêm mục nhật ký, rồi chạy bộ tự kiểm.
// Dùng: node kiemtra/phathanh.mjs 1.3.1 "Mô tả ngắn thay đổi"
// Công cụ KHÔNG lưu (commit) và KHÔNG đẩy lên mạng: sau khi chạy, xem lại thay đổi rồi tự làm theo quy trình
// (nhánh riêng → bản xem trước → kiểm theo kế hoạch → người dùng duyệt → gộp vào main + gắn nhãn).
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [ver, ...moTa] = process.argv.slice(2);
if (!/^\d+\.\d+\.\d+$/.test(ver || '')) {
  console.error('Dùng: node kiemtra/phathanh.mjs <CHÍNH.PHỤ.SỬA> "mô tả"   (vd 1.3.1 "Sửa lỗi âm thanh")');
  process.exit(2);
}
const p = (f) => path.join(ROOT, f);
const doc = (f) => fs.readFileSync(p(f), 'utf8');
const ghi = (f, s) => fs.writeFileSync(p(f), s);

// Kiểm số phiên bản mới lớn hơn bản hiện tại
let html = doc('index.html');
const cu = (html.match(/window\.GAME_VERSION = '([\d.]+)'/) || [])[1];
const so = (v) => v.split('.').map(Number);
const lon = (a, b) => { const x = so(a), y = so(b); for (let i = 0; i < 3; i++) { if (x[i] !== y[i]) return x[i] > y[i]; } return false; };
if (!cu) { console.error('Không tìm thấy GAME_VERSION trong index.html'); process.exit(1); }
if (!lon(ver, cu)) { console.error(`Phiên bản mới ${ver} phải lớn hơn bản hiện tại ${cu}`); process.exit(1); }

// Tham số làm mới bộ nhớ đệm ?v= : tăng 1
const sw0 = doc('sw.js');
const vCu = Number((sw0.match(/const ASSET_V = '(\d+)'/) || [])[1]);
if (!vCu) { console.error('Không tìm thấy ASSET_V trong sw.js'); process.exit(1); }
const vMoi = vCu + 1;

html = html.replace(`window.GAME_VERSION = '${cu}'`, `window.GAME_VERSION = '${ver}'`).replace(new RegExp(`\\?v=${vCu}\\b`, 'g'), `?v=${vMoi}`);
ghi('index.html', html);
ghi('game.js', doc('game.js').replace(new RegExp(`\\?v=${vCu}\\b`, 'g'), `?v=${vMoi}`));
ghi('sw.js', sw0.replace(`const ASSET_V = '${vCu}'`, `const ASSET_V = '${vMoi}'`));

// Mục nhật ký mới
const ngay = new Date(Date.now() + 7 * 3600e3).toISOString().slice(0, 10).split('-').reverse().join('/');
let cl = doc('CHANGELOG.md');
const muc = `## [${ver}] — ${ngay}${moTa.length ? ' — ' + moTa.join(' ') : ''}\n### Đổi\n- (ghi rõ thay đổi)\n- Tham số làm mới \`?v=${vCu}\` → \`?v=${vMoi}\`.\n\n`;
const i = cl.search(/^## \[/m);
cl = i >= 0 ? cl.slice(0, i) + muc + cl.slice(i) : cl + '\n' + muc;
ghi('CHANGELOG.md', cl);

console.log(`Đã đổi phiên bản ${cu} → ${ver}; ?v=${vCu} → ?v=${vMoi} (index.html, game.js, sw.js); thêm mục CHANGELOG.md.`);
console.log('Việc còn lại: ghi rõ thay đổi trong CHANGELOG.md, rồi chạy lại bộ tự kiểm.\n');
try {
  execFileSync(process.execPath, [p('kiemtra/kiemtra.mjs')], { stdio: 'inherit' });
} catch {
  console.error('\nBộ tự kiểm CHƯA ĐẠT — sửa trước khi đẩy lên.');
  process.exit(1);
}
