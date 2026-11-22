/* Chế độ ứng dụng: chơi khi mất mạng (service worker), nút "Cài vào máy", thông báo nhỏ.
 * Mọi lỗi ở đây đều bị bỏ qua để không ảnh hưởng tới game. */
(function () {
  'use strict';
  if (!('serviceWorker' in navigator)) return;
  var VERSION = String(window.GAME_VERSION || 'dev');

  function toast(text, ms) {
    try {
      var el = document.createElement('div');
      el.className = 'ud-toast';
      el.setAttribute('role', 'status');
      el.textContent = text;
      document.body.appendChild(el);
      requestAnimationFrame(function () { el.classList.add('hien'); });
      setTimeout(function () {
        el.classList.remove('hien');
        setTimeout(function () { el.remove(); }, 400);
      }, ms || 4500);
    } catch (e) { }
  }

  var firstInstall = !navigator.serviceWorker.controller;
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js?v=' + encodeURIComponent(VERSION)).then(function (reg) {
      if (!firstInstall) return;
      var sw = reg.installing || reg.waiting;
      if (!sw) return;
      sw.addEventListener('statechange', function () {
        if (sw.state === 'activated') toast('Đã lưu trò chơi vào máy — lần sau chơi được cả khi mất mạng.');
      });
    }).catch(function () { });
  });

  window.addEventListener('offline', function () { toast('Đang mất mạng — vẫn chơi bình thường được.', 3500); });

  // Nút cài như ứng dụng (Android/Chrome/Edge). iPhone: dùng "Thêm vào MH chính" của Safari.
  var deferred = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    var start = document.getElementById('start-screen');
    if (!start || document.getElementById('ud-cai')) return;
    var b = document.createElement('button');
    b.id = 'ud-cai';
    b.type = 'button';
    b.className = 'ud-cai';
    b.textContent = '⬇ Cài vào máy';
    b.addEventListener('click', function (ev) {
      ev.stopPropagation();
      if (!deferred) return;
      deferred.prompt();
      deferred.userChoice.finally(function () { deferred = null; b.remove(); });
    });
    start.appendChild(b);
  });
  window.addEventListener('appinstalled', function () {
    var b = document.getElementById('ud-cai');
    if (b) b.remove();
  });
})();
