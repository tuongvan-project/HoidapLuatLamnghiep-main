/* Service worker — Hỏi đáp Pháp luật Lâm nghiệp
 * Mục tiêu: chơi được khi mất mạng sau lần vào đầu tiên; vào lại nhanh trên mạng yếu.
 * - Phiên bản lấy từ tham số ?v= khi đăng ký (index.html dùng window.GAME_VERSION) → mỗi bản mới có kho đệm mới.
 * - Trang chính: lấy mạng trước (để luôn có bản mới), mất mạng thì dùng bản đã cất.
 * - Tệp tĩnh: trả ngay bản đã cất, đồng thời cập nhật ngầm.
 * - Video/âm thanh: cất khi đã tải đủ; nhạc nền (3 MB) không cất trước để đỡ tốn dung lượng.
 * - /api/*, trang thống kê: luôn đi mạng.
 * KHI THÊM/ĐỔI TÊN TỆP ẢNH, PHÔNG, MÃ: cập nhật danh sách CORE bên dưới.
 */
const VERSION = new URL(self.location.href).searchParams.get('v') || 'dev';
const CORE_CACHE = 'hoidap-core-' + VERSION;
const MEDIA_CACHE = 'hoidap-media-v1';
const FONT_CACHE = 'hoidap-fonts-v1';
const KEEP = [CORE_CACHE, MEDIA_CACHE, FONT_CACHE];

const ASSET_V = '31'; // khớp tham số ?v= của style.css, game.js, dem.js trong index.html
const CORE = [
  './',
  'style.css?v=' + ASSET_V, 'game.js?v=' + ASSET_V, 'dem.js?v=' + ASSET_V, 'ungdung.js?v=' + ASSET_V,
  'questions_KL.js', 'question_ChuRung.js', 'question_CBLS.js', 'question_DVR.js',
  'Viettay.woff2', 'ViettayBold.woff2', 'End.woff2', 'Result.woff2',
  'favicon-32.png', 'apple-touch-icon.png', 'icon-192.png', 'manifest.webmanifest',
  '0.webp', '1.webp', '2-modes.webp', 'Aboutme.webp', 'Arrow.webp', 'Background.webp', 'Background0.webp',
  'Backgroundv.webp', 'Cauhoi.webp', 'Clock.webp', 'Dapan.webp', 'Dungchoi.webp', 'End.webp', 'Gametitle.webp',
  'Hanging Wooden Board.webp', 'Home.webp', 'Khay.webp', 'LogoKiemlam.webp', 'Menu.webp', 'Mute.webp',
  'Replay.webp', 'Sc.webp', 'Textbox.png', 'Textbox_Correct.png', 'Textbox_Incorrect.png', 'V.webp',
  'Volume.webp', 'X.webp', 'bubblechat.webp', 'chibi_eyes_closed.webp', 'chibi_mouth_smile.webp',
  'chibi_rig_arms.webp?v=' + ASSET_V, 'chibi_rig_base.webp?v=' + ASSET_V, 'chibi_rig_faces.webp?v=' + ASSET_V,
  'chibi_rig_mouths.webp?v=' + ASSET_V, 'guide_chibi.webp', 'guide_chibi_hair.webp', 'i.webp', 'instruction.webp',
  // Âm thanh hiệu ứng nhỏ: cần để chơi khi mất mạng có tiếng
  'Click.mp3', 'Right.mp3', 'False.mp3', '10s.mp3', 'Latgiay.mp3'
];
const MEDIA_RE = /\.(mp3|mp4)$/i;
const MEDIA_MAX_BACKGROUND = 1.5 * 1024 * 1024; // tệp lớn hơn (nhạc nền) không tải ngầm để cất

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CORE_CACHE);
    // Tải từng tệp, một tệp lỗi không làm hỏng cả lần cài.
    await Promise.all(CORE.map(async (u) => {
      try {
        const res = await fetch(u, { cache: 'no-cache' });
        if (res.ok && !res.redirected) await cache.put(u, res);
      } catch (_) { /* thử lại ở lần sau */ }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((n) => n.startsWith('hoidap-') && !KEEP.includes(n)).map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(staleWhileRevalidate(req, FONT_CACHE));
    return;
  }
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/cdn-cgi/')) return;

  if (req.mode === 'navigate') {
    // Chỉ phục vụ trang game; trang khác (vd /thongke) đi mạng bình thường.
    if (url.pathname === '/' || url.pathname === '/index.html') event.respondWith(networkFirstPage(req));
    return;
  }
  if (MEDIA_RE.test(url.pathname)) {
    event.respondWith(media(req, url));
    return;
  }
  event.respondWith(staleWhileRevalidate(req, CORE_CACHE));
});

async function networkFirstPage(req) {
  const cache = await caches.open(CORE_CACHE);
  try {
    const res = await withTimeout(fetch(req), 5000);
    if (res.ok && !res.redirected) cache.put('./', res.clone());
    return res;
  } catch (_) {
    return (await cache.match('./')) || (await caches.match('./')) || new Response(
      '<meta charset="utf-8"><p style="font-family:sans-serif;padding:2em">Chưa có kết nối mạng. Hãy mở trò chơi một lần khi có mạng để có thể chơi khi mất mạng.</p>',
      { headers: { 'content-type': 'text/html; charset=utf-8' } });
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req, { ignoreVary: true }) ||
    (cacheName === CORE_CACHE ? await caches.match(req, { ignoreVary: true }) : undefined);
  const network = fetch(req).then((res) => {
    if (res && (res.ok || res.type === 'opaque') && !res.redirected) cache.put(req, res.clone()).catch(() => { });
    return res;
  }).catch(() => undefined);
  if (cached) return cached;
  const res = await network;
  return res || new Response('', { status: 504, statusText: 'Offline' });
}

// Âm thanh, video: trình duyệt hay xin từng đoạn (Range) → tự cắt đoạn từ bản đã cất.
async function media(req, url) {
  const key = url.pathname;
  const cache = await caches.open(MEDIA_CACHE);
  let full = await cache.match(key);
  if (!full) {
    const core = await caches.match(url.pathname.slice(1));
    if (core) full = core;
  }
  if (full) return rangeFrom(full, req.headers.get('range'));

  try {
    const res = await fetch(req);
    // Lưu lại nếu nhận được trọn tệp (200, hoặc 206 phủ từ đầu đến cuối).
    if (res.status === 200) {
      cache.put(key, res.clone()).catch(() => { });
    } else if (res.status === 206) {
      const cr = res.headers.get('content-range') || '';
      const m = cr.match(/bytes (\d+)-(\d+)\/(\d+)/);
      if (m && m[1] === '0' && Number(m[2]) + 1 === Number(m[3])) {
        res.clone().blob().then((b) => cache.put(key, new Response(b, {
          status: 200, headers: { 'content-type': res.headers.get('content-type') || '', 'content-length': String(b.size) }
        }))).catch(() => { });
      } else if (m && Number(m[3]) <= MEDIA_MAX_BACKGROUND) {
        fetch(key).then((r) => r.ok && cache.put(key, r)).catch(() => { });
      }
    }
    return res;
  } catch (_) {
    return new Response('', { status: 504, statusText: 'Offline' });
  }
}

async function rangeFrom(res, range) {
  if (!range) return res;
  const buf = await res.clone().arrayBuffer();
  const m = /bytes=(\d*)-(\d*)/.exec(range);
  const size = buf.byteLength;
  let start = m && m[1] !== '' ? Number(m[1]) : 0;
  let end = m && m[2] !== '' ? Number(m[2]) : size - 1;
  if (m && m[1] === '' && m[2] !== '') { start = Math.max(0, size - Number(m[2])); end = size - 1; }
  if (start >= size) return new Response('', { status: 416, headers: { 'content-range': `bytes */${size}` } });
  end = Math.min(end, size - 1);
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      'content-type': res.headers.get('content-type') || 'application/octet-stream',
      'content-range': `bytes ${start}-${end}/${size}`,
      'content-length': String(end - start + 1),
      'accept-ranges': 'bytes'
    }
  });
}

function withTimeout(p, ms) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), ms);
    p.then((v) => { clearTimeout(t); resolve(v); }, (e) => { clearTimeout(t); reject(e); });
  });
}
