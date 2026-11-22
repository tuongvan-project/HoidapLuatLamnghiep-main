/* Bộ đếm lượt truy cập, lượt chơi — Hỏi đáp pháp luật lâm nghiệp.
 * - Ẩn danh: chỉ dùng mã ngẫu nhiên lưu trong trình duyệt, không thu tên, số điện thoại, vị trí.
 * - Chịu mất mạng: sự kiện được xếp hàng trong bộ nhớ máy, có mạng thì gửi bù.
 * - Không bao giờ làm hỏng game: mọi lỗi ở đây đều bị bỏ qua.
 */
(function () {
  'use strict';
  var API = '/api/su-kien';
  var QKEY = 'hdtk_hang_doi';
  var CKEY = 'hdtk_cid';
  var MAX_QUEUE = 200;
  var VERSION = (window.GAME_VERSION || '').toString();

  function safe(fn) { return function () { try { return fn.apply(this, arguments); } catch (e) { /* bỏ qua */ } }; }

  var store = (function () {
    try { var k = '__t'; localStorage.setItem(k, '1'); localStorage.removeItem(k); return localStorage; }
    catch (e) { var m = {}; return { getItem: function (k) { return m[k] || null; }, setItem: function (k, v) { m[k] = String(v); } }; }
  })();

  function uid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'x' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
  }
  var cid = store.getItem(CKEY);
  if (!cid) { cid = uid(); store.setItem(CKEY, cid); }

  function device() {
    var w = Math.min(screen.width || 0, screen.height || 0) || window.innerWidth;
    var touch = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
    if (!touch) return 'desktop';
    return w >= 600 ? 'tablet' : 'mobile';
  }

  // Nguồn vào: ?src=qr (in trên mã QR, áp phích) hoặc suy ra từ trang dẫn tới.
  function source() {
    try {
      var p = new URLSearchParams(location.search).get('src');
      if (p) return p.slice(0, 40);
      if (!document.referrer) return null;
      var h = new URL(document.referrer).hostname;
      if (h === location.hostname) return null;
      if (/facebook|fb\./.test(h)) return 'facebook';
      if (/zalo/.test(h)) return 'zalo';
      if (/google\./.test(h)) return 'google';
      if (/tuyenquang\.gov\.vn/.test(h)) return 'cong-thong-tin';
      return h.slice(0, 40);
    } catch (e) { return null; }
  }

  function readQueue() { try { return JSON.parse(store.getItem(QKEY) || '[]') || []; } catch (e) { return []; } }
  function writeQueue(q) { try { store.setItem(QKEY, JSON.stringify(q.slice(-MAX_QUEUE))); } catch (e) { } }
  function push(ev) { var q = readQueue(); q.push(ev); writeQueue(q); }

  var sending = false;
  var flush = safe(function (useBeacon) {
    var q = readQueue();
    if (!q.length || sending) return;
    if (navigator.onLine === false) return;
    // Gói tối đa 50 sự kiện và ~16 KB (máy chủ nhận ≤ 64 KB; sendBeacon/keepalive giới hạn 64 KB),
    // để không có gói nào bị từ chối vì quá lớn làm mất cả lô.
    var batch = [];
    var size = 40;
    for (var i = 0; i < q.length && batch.length < 50; i++) {
      var s = JSON.stringify(q[i]).length + 1;
      if (batch.length && size + s > 16000) break;
      batch.push(q[i]); size += s;
    }
    var body = JSON.stringify({ cid: cid, events: batch });
    if (useBeacon && navigator.sendBeacon) {
      var blob = new Blob([body], { type: 'application/json' });
      if (navigator.sendBeacon(API, blob)) writeQueue(q.slice(batch.length));
      return;
    }
    if (!window.fetch) return;
    sending = true;
    fetch(API, { method: 'POST', headers: { 'content-type': 'application/json' }, body: body, keepalive: true })
      .then(function (r) {
        // 4xx: dữ liệu hỏng, bỏ đi để không kẹt hàng đợi. 5xx/không có máy chủ: giữ lại gửi sau.
        if (r.ok || (r.status >= 400 && r.status < 500)) {
          writeQueue(readQueue().slice(batch.length));
          if (r.ok && readQueue().length) setTimeout(flush, 1000);
        }
      })
      .catch(function () { })
      .then(function () { sending = false; });
  });

  // ---- Lượt chơi đang diễn ra ----
  var game = null;

  function closeGame(done) {
    if (!game) return;
    var g = game; game = null;
    if (!g.answers.length && !done) return; // vào rồi thoát ngay, chưa trả lời câu nào: không tính lượt chơi
    push({
      kind: 'game', ts: g.ts, mode: g.mode, n: g.n, answered: g.answers.length,
      correct: g.answers.filter(function (a) { return a[1]; }).length,
      dur: Math.round(g.dur), done: !!done, answers: g.answers,
      device: device(), v: VERSION
    });
  }

  var api = {
    start: safe(function (mode, n) {
      closeGame(false);
      game = { ts: Date.now(), mode: String(mode || ''), n: n | 0, answers: [], dur: 0 };
    }),
    answer: safe(function (qid, ok, seconds) {
      if (!game || !qid) return;
      game.answers.push([String(qid), ok ? 1 : 0]);
      if (seconds > 0) game.dur += Math.min(600, seconds);
    }),
    finish: safe(function (totalSeconds) {
      if (!game) return;
      if (totalSeconds > 0) game.dur = totalSeconds;
      closeGame(true);
      flush();
    }),
    abandon: safe(function () { closeGame(false); flush(); }),
    flush: function () { flush(); }
  };
  window.HDTK = api;

  // Một lượt "mở game" cho mỗi lần tải trang.
  safe(function () {
    push({ kind: 'open', ts: Date.now(), device: device(), ref: source(), v: VERSION });
  })();

  // ---- Ghi lỗi JavaScript trên máy người chơi ----
  // Chỉ lỗi mã (không ghi lỗi tải ảnh/âm thanh khi mất mạng); tối đa 5 lỗi khác nhau mỗi lần mở trang.
  var errSeen = {};
  var errCount = 0;
  function browserName() {
    var u = navigator.userAgent || '';
    var os = /Android/.test(u) ? 'Android' : /iPhone|iPad|iPod/.test(u) ? 'iOS' : /Windows/.test(u) ? 'Windows'
      : /Mac OS X/.test(u) ? 'macOS' : /Linux/.test(u) ? 'Linux' : 'khác';
    // Xét lần lượt theo ưu tiên (Edge, Cốc Cốc, Zalo… đều có chữ "Chrome" trong chuỗi nhận dạng)
    var ds = [['Edg', 'Edge'], ['CocCoc', 'Cốc Cốc'], ['coc_coc_browser', 'Cốc Cốc'], ['Zalo', 'Zalo'], ['FBAV', 'Facebook'],
      ['SamsungBrowser', 'Samsung'], ['OPR', 'Opera'], ['FxiOS', 'Firefox'], ['Firefox', 'Firefox'], ['CriOS', 'Chrome'],
      ['Chrome', 'Chrome'], ['Version', 'Safari']];
    var b = 'khác';
    for (var k = 0; k < ds.length; k++) {
      var m = u.match(new RegExp(ds[k][0] + '\\D{0,12}(\\d+)'));
      if (m) { b = ds[k][1] + ' ' + m[1]; break; }
    }
    return (b + ' / ' + os).slice(0, 60);
  }
  var reportError = safe(function (msg, src) {
    msg = String(msg || '').slice(0, 300);
    if (!msg) return;
    var key = msg + '|' + src;
    if (errSeen[key] || errCount >= 5) return;
    errSeen[key] = 1; errCount++;
    push({ kind: 'loi', ts: Date.now(), msg: msg, src: String(src || '').slice(0, 200), device: device(), browser: browserName(), v: VERSION });
    setTimeout(flush, 2000);
  });
  window.addEventListener('error', function (e) {
    if (!e || (e.target && e.target !== window)) return; // lỗi tải tài nguyên: bỏ qua
    var file = (e.filename || '').split('/').pop().split('?')[0];
    reportError(e.message || (e.error && e.error.message), file + ':' + (e.lineno || 0) + ':' + (e.colno || 0));
  }, true);
  window.addEventListener('unhandledrejection', function (e) {
    var r = e && e.reason;
    if (e.defaultPrevented) return; // game đã tự xử lý (vd trình duyệt chặn tự phát âm thanh)
    if (r && (r.name === 'NotAllowedError' || r.name === 'NotSupportedError' || r.name === 'AbortError')) return;
    reportError('Promise: ' + (r && (r.message || r.name) || String(r)), 'promise');
  });
  api.reportError = reportError;

  window.addEventListener('online', function () { flush(); });
  window.addEventListener('pagehide', function () { closeGame(false); flush(true); });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') flush(true);
  });
  // Gửi sau khi trang đã tải xong để không tranh băng thông với hình ảnh của game.
  if (document.readyState === 'complete') setTimeout(flush, 3000);
  else window.addEventListener('load', function () { setTimeout(flush, 3000); });
})();
