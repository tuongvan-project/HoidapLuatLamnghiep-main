// Tầng C (và E) của kế hoạch kiểm thử — thử game trên trình duyệt thật (Edge/Chrome) điều khiển tự động.
//
// Cài một lần, NGOÀI thư mục Google Drive (Drive đồng bộ dở làm hỏng gói cài):
//   npm install --prefix "%USERPROFILE%\.hoidap-thu" playwright-core
//   (hoặc đặt biến HOIDAP_THU_DEPS trỏ tới thư mục đã cài)
// Chạy:   node thu-trinh-duyet.mjs <địa chỉ> [ca1,ca2,...]
//   vd:   node thu-trinh-duyet.mjs https://vanhanh.hoidapluatlamnghiep.pages.dev
//         node thu-trinh-duyet.mjs https://hoidapluatlamnghiep.pages.dev van-nhanh,menu-i
// Các ca:
//   van         chơi trọn 20 câu cả 5 chế độ (máy tính, điện thoại đứng, điện thoại ngang) ~ 5 phút, chạy song song
//   van-nhanh   chơi trọn 20 câu 1 chế độ (điện thoại đứng)
//   mang-cham   3G chậm (50 KB/s, trễ 400 ms): màn hình đầu ≤ 20 giây, ≤ 700 KB
//   mat-mang    vào 1 lần, ngắt mạng, mở lại, chơi được, không ảnh hỏng
//   menu-i      bấm Menu → "i" trong ván không làm treo (lỗi đã sửa ở 1.3.0)
//   ghi-loi     bắn 21 lỗi → chỉ gửi tối đa 5
//   nang-cap-chuan-bi / nang-cap-kiem   (dùng quanh lần phát hành: chuẩn bị TRƯỚC khi đẩy bản mới, kiểm SAU khi lên)
// Mặc định (không ghi ca): van-nhanh, mang-cham, mat-mang, menu-i, ghi-loi.
// Mọi lượt thử gắn ?src=kiem-thu để tách khỏi số liệu thật. Mã thoát 0 = ĐẠT hết.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';

const DEPS = process.env.HOIDAP_THU_DEPS || path.join(os.homedir(), '.hoidap-thu');
let chromium;
try {
  ({ chromium } = createRequire(path.join(DEPS, 'package.json'))('playwright-core'));
} catch {
  console.error(`Chưa cài công cụ điều khiển trình duyệt. Chạy một lần:\n  npm install --prefix "${DEPS}" playwright-core`);
  process.exit(2);
}

const BASE = (process.argv[2] || '').replace(/\/+$/, '');
if (!/^https?:\/\//.test(BASE)) {
  console.error('Thiếu địa chỉ. Vd: node thu-trinh-duyet.mjs https://vanhanh.hoidapluatlamnghiep.pages.dev');
  process.exit(2);
}
const CA = (process.argv[3] || 'van-nhanh,mang-cham,mat-mang,menu-i,ghi-loi').split(',');
const URL_THU = BASE + '/?src=kiem-thu';
const HO_SO_CU = path.join(os.tmpdir(), 'hoidap-ho-so-ban-cu');

function timTrinhDuyet() {
  const ds = [process.env.EDGE_PATH, process.env.CHROME_PATH,
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/microsoft-edge', '/usr/bin/google-chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'].filter(Boolean);
  const f = ds.find((p) => fs.existsSync(p));
  if (!f) { console.error('Không tìm thấy Edge/Chrome. Đặt biến EDGE_PATH tới tệp msedge.exe.'); process.exit(2); }
  return f;
}
const EXE = timTrinhDuyet();
const moTrinhDuyet = () => chromium.launch({ executablePath: EXE, headless: true, args: ['--autoplay-policy=no-user-gesture-required'] });
const LOI_BO_QUA = /cloudflareinsights|\/rum|ERR_FAILED|ERR_INTERNET_DISCONNECTED|status of 504|status of 501/;
function ghiLoiTrang(page, errs) {
  page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !LOI_BO_QUA.test(m.text())) errs.push('console: ' + m.text().slice(0, 140)); });
}

// ---------- Chơi trọn 1 ván trong trang ----------
async function choiVan(page, mode, coHetGio) {
  return page.evaluate(async ({ mode, coHetGio }) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const until = async (fn, ms = 20000) => { const e = Date.now() + ms; while (Date.now() < e) { const v = fn(); if (v) return v; await wait(100); } return null; };
    document.getElementById('start-screen').classList.add('hidden');
    document.querySelector('main.container').style.display = 'flex';
    startQuiz(mode); // eslint-disable-line no-undef
    await wait(50);
    const ids = shuffledQuestions.map((q) => q.id); // eslint-disable-line no-undef
    let chonDung = 0;
    for (let i = 0; i < ids.length; i++) {
      const btns = await until(() => {
        const b = [...document.querySelectorAll('.answers > *')];
        return b.length === 4 && b.every((x) => x.classList.contains('show')) && !b[0].classList.contains('disabled') ? b : null;
      });
      if (!btns) return { loi: `câu ${i + 1}: không hiện đủ 4 đáp án` };
      const q = shuffledQuestions[currentQuestionIndex]; // eslint-disable-line no-undef
      if (q.id !== ids[i]) return { loi: `câu ${i + 1}: sai thứ tự câu` };
      if (coHetGio && i === 2) { stopTimer(); handleAnswerTimeout(); } // eslint-disable-line no-undef
      else {
        const pick = Math.random() < 0.6 ? (btns.find((b) => b.textContent.includes(q.correct)) || btns[0]) : btns[Math.floor(Math.random() * 4)];
        if (pick.textContent.includes(q.correct)) chonDung++;
        pick.click();
      }
      const next = await until(() => { const n = document.getElementById('next-button'); return n && getComputedStyle(n).display !== 'none' ? n : null; }, 25000);
      if (!next) return { loi: `câu ${i + 1}: không hiện nút sang câu` };
      next.click();
    }
    const end = await until(() => { const e = document.getElementById('end-screen-overlay') || document.querySelector('.end-screen-overlay'); return e && getComputedStyle(e).display !== 'none' ? e : null; }, 15000);
    return { soCau: ids.length, khongLap: new Set(ids).size === ids.length, chonDung, diem: correctAnswers, ketThuc: !!end }; // eslint-disable-line no-undef
  }, { mode, coHetGio });
}

async function caVan(mode, vp, coHetGio = false) {
  const b = await moTrinhDuyet();
  const ctx = await b.newContext({ viewport: { width: vp[0], height: vp[1] }, isMobile: vp[0] < 600, hasTouch: vp[0] < 600 });
  const p = await ctx.newPage(); const errs = []; ghiLoiTrang(p, errs);
  await p.goto(URL_THU, { waitUntil: 'load' }); await p.waitForTimeout(1500);
  const r = await choiVan(p, mode, coHetGio);
  await b.close();
  const dat = !r.loi && r.soCau === 20 && r.khongLap && r.diem === r.chonDung && r.ketThuc && !errs.length;
  return { dat, chiTiet: `${mode} ${vp.join('x')}: ` + (r.loi || `${r.soCau} câu, không lặp=${r.khongLap}, điểm ${r.diem}/${r.chonDung}`) + (errs.length ? ' | lỗi: ' + errs.slice(0, 3).join('; ') : '') };
}

// ---------- Các ca ----------
const CAC_CA = {
  async 'van-nhanh'() { return caVan('dan_churung', [390, 844]); },

  async van() {
    const kq = await Promise.all([
      caVan('kiemlam', [1280, 720]), caVan('dan_tonghop', [1280, 720], true), caVan('dan_churung', [390, 844]),
      caVan('dan_cbls', [390, 844]), caVan('dan_dvr', [844, 390]),
    ]);
    return { dat: kq.every((x) => x.dat), chiTiet: kq.map((x) => (x.dat ? '✓ ' : '✗ ') + x.chiTiet).join('\n      ') };
  },

  async 'mang-cham'() {
    const b = await moTrinhDuyet();
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const p = await ctx.newPage(); const cdp = await ctx.newCDPSession(p);
    await cdp.send('Network.enable'); let bytes = 0;
    cdp.on('Network.loadingFinished', (e) => { bytes += e.encodedDataLength || 0; });
    await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 400, downloadThroughput: 50 * 1024, uploadThroughput: 20 * 1024 });
    const t0 = Date.now();
    await p.goto(BASE + '/', { waitUntil: 'domcontentloaded', timeout: 180000 });
    await p.waitForFunction(() => { const i = document.querySelector('.game-title-img'); return i && i.complete && i.naturalWidth > 0 && document.getElementById('start-button'); }, null, { timeout: 180000 });
    const giay = (Date.now() - t0) / 1000, kb = Math.round(bytes / 1024);
    await b.close();
    return { dat: giay <= 20 && kb <= 700, chiTiet: `màn hình đầu ${giay.toFixed(1)} giây, ${kb} KB (ngưỡng 20 giây, 700 KB)` };
  },

  async 'mat-mang'() {
    const b = await moTrinhDuyet();
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const p = await ctx.newPage(); const errs = []; ghiLoiTrang(p, errs);
    await p.goto(URL_THU, { waitUntil: 'load' });
    const cat = await p.evaluate(async () => {
      await navigator.serviceWorker.ready;
      for (let i = 0; i < 60; i++) { let n = 0; for (const k of await caches.keys()) n += (await (await caches.open(k)).keys()).length; if (n >= 60) return n; await new Promise((r) => setTimeout(r, 1000)); }
      return 0;
    });
    await ctx.setOffline(true);
    await p.reload({ waitUntil: 'load', timeout: 60000 });
    const v = await p.evaluate(() => window.GAME_VERSION);
    const r = await choiVan(p, 'dan_tonghop', false);
    const anhHong = await p.evaluate(() => [...document.images].filter((i) => i.complete && i.naturalWidth === 0 && i.offsetParent).map((i) => i.getAttribute('src')));
    const hang = await p.evaluate(() => JSON.parse(localStorage.getItem('hdtk_hang_doi') || '[]').length);
    await b.close();
    const dat = cat >= 60 && !!v && !r.loi && r.soCau === 20 && r.diem === r.chonDung && !anhHong.length && hang >= 1;
    return { dat, chiTiet: `đã cất ${cat} tệp; mất mạng mở được bản ${v}; ` + (r.loi || `chơi ${r.soCau} câu, điểm ${r.diem}/${r.chonDung}`) + `; ảnh hỏng ${anhHong.length}; số liệu chờ gửi ${hang}` };
  },

  async 'menu-i'() {
    const b = await moTrinhDuyet();
    const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const errs = []; ghiLoiTrang(p, errs);
    await p.goto(URL_THU, { waitUntil: 'load' }); await p.waitForTimeout(1500);
    await p.click('#menu-button'); await p.waitForTimeout(400);
    await p.click('#info-button'); await p.waitForTimeout(1500);
    const moThu = await p.evaluate(() => document.getElementById('about-me-overlay').classList.contains('active'));
    await p.click('#menu-button'); await p.waitForTimeout(500);
    const r = await p.evaluate(async () => {
      const wait = (ms) => new Promise((r) => setTimeout(r, ms));
      document.getElementById('start-screen').classList.add('hidden');
      document.querySelector('main.container').style.display = 'flex';
      startQuiz('dan_tonghop'); await wait(700); // eslint-disable-line no-undef
      document.getElementById('menu-button').click(); await wait(300);
      const iHien = getComputedStyle(document.getElementById('info-button')).display;
      document.getElementById('info-button').click(); await wait(9000);
      const b = [...document.querySelectorAll('.answers > *')];
      return { iHien, du4: b.length === 4 && b.every((x) => x.classList.contains('show')) };
    });
    await b.close();
    return { dat: moThu && r.iHien === 'none' && r.du4 && !errs.length, chiTiet: `màn đầu mở thư=${moThu}; trong ván nút i ${r.iHien === 'none' ? 'ẩn' : 'HIỆN'}; sau khi bấm vẫn đủ 4 đáp án=${r.du4}` };
  },

  async 'ghi-loi'() {
    // Không bắn lỗi giả vào trang chính để khỏi làm bẩn mục "Lỗi" của số liệu thật.
    if (/^https:\/\/hoidapluatlamnghiep\.pages\.dev$/.test(BASE)) return { dat: true, chiTiet: 'bỏ qua trên trang chính (chỉ chạy trên bản xem trước)' };
    const b = await moTrinhDuyet();
    const p = await (await b.newContext()).newPage(); const goi = [];
    p.on('request', (r) => { if (r.url().includes('/api/su-kien')) { try { goi.push(JSON.parse(r.postData() || '{}')); } catch { /* bỏ qua */ } } });
    await p.goto(URL_THU, { waitUntil: 'load' }); await p.waitForTimeout(4000);
    await p.evaluate(() => { for (let i = 0; i < 20; i++) setTimeout(() => { throw new Error('kiem-thu-loi-' + i); }, i * 10); Promise.reject(new Error('kiem-thu-promise')); });
    await p.waitForTimeout(6000);
    const loi = goi.flatMap((g) => g.events || []).filter((e) => e.kind === 'loi');
    await b.close();
    return { dat: loi.length === 5, chiTiet: `bắn 21 lỗi → gửi ${loi.length} (phải đúng 5)` };
  },

  async 'nang-cap-chuan-bi'() {
    fs.rmSync(HO_SO_CU, { recursive: true, force: true });
    const ctx = await chromium.launchPersistentContext(HO_SO_CU, { executablePath: EXE, headless: true });
    const p = ctx.pages()[0] || await ctx.newPage();
    await p.goto(URL_THU, { waitUntil: 'load' }); await p.waitForTimeout(6000);
    const v = await p.evaluate(async () => ({ v: window.GAME_VERSION, c: await caches.keys() }));
    await ctx.close();
    return { dat: !!v.v, chiTiet: `đã lưu máy giữ bản ${v.v} (${v.c.join(', ')}) tại ${HO_SO_CU}. Phát hành xong thì chạy ca nang-cap-kiem.` };
  },

  async 'nang-cap-kiem'() {
    if (!fs.existsSync(HO_SO_CU)) return { dat: false, chiTiet: 'chưa chạy ca nang-cap-chuan-bi trước khi phát hành' };
    const ctx = await chromium.launchPersistentContext(HO_SO_CU, { executablePath: EXE, headless: true });
    const p = ctx.pages()[0] || await ctx.newPage();
    await p.goto(URL_THU, { waitUntil: 'load' }); await p.waitForTimeout(6000);
    const r = await p.evaluate(async () => ({ v: window.GAME_VERSION, sw: (await navigator.serviceWorker.getRegistration())?.active?.scriptURL.split('?v=')[1], c: await caches.keys() }));
    await ctx.close();
    const core = r.c.filter((k) => k.startsWith('hoidap-core-'));
    const dat = r.v && decodeURIComponent(r.sw || '') === r.v && core.length === 1 && core[0] === 'hoidap-core-' + r.v;
    return { dat, chiTiet: `máy cũ vào lại: bản ${r.v}, bộ lưu ngoại tuyến ${r.sw}, kho đệm ${core.join(', ')}` };
  },
};

// ---------- Chạy ----------
console.log(`=== THỬ TRÊN TRÌNH DUYỆT — ${BASE} — ${path.basename(EXE)} ===`);
let hong = 0;
for (const ten of CA) {
  const f = CAC_CA[ten.trim()];
  if (!f) { console.log(`  ? Không có ca "${ten}". Các ca: ${Object.keys(CAC_CA).join(', ')}`); hong++; continue; }
  const t0 = Date.now();
  let kq;
  try { kq = await f(); } catch (e) { kq = { dat: false, chiTiet: 'lỗi khi chạy: ' + e.message.split('\n')[0] }; }
  if (!kq.dat) hong++;
  console.log(`  ${kq.dat ? '✓' : '✗'} ${ten} (${Math.round((Date.now() - t0) / 1000)} giây): ${kq.chiTiet}`);
}
console.log(hong ? `\nKHÔNG ĐẠT: ${hong} ca.` : '\nĐẠT tất cả.');
process.exit(hong ? 1 : 0);
