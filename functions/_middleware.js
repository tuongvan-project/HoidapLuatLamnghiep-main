// Khóa trang thống kê và các API số liệu bằng mật khẩu (chỉ người quản trị xem).
// Mật khẩu đặt trong Cloudflare: dự án Pages → Settings → Variables and secrets → biến bí mật THONGKE_MATKHAU.
// Chưa đặt mật khẩu → luôn từ chối (không bao giờ mở toang).
// Game và API ghi sự kiện (/api/su-kien) KHÔNG bị khóa.
const KHOA = [/^\/thongke(\.html)?\/?$/, /^\/api\/thong-ke\/?$/, /^\/api\/xuat\/?$/];

function canKhoa(pathname) {
  return KHOA.some((re) => re.test(pathname));
}

function tuChoi(msg) {
  return new Response(msg, {
    status: 401,
    headers: {
      'www-authenticate': 'Basic realm="Thong ke Hoi dap Lam nghiep", charset="UTF-8"',
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

// So sánh không lộ thời gian (tránh dò mật khẩu theo tốc độ phản hồi).
async function bangNhau(a, b) {
  const enc = new TextEncoder();
  const [ha, hb] = await Promise.all([
    crypto.subtle.digest('SHA-256', enc.encode(a)),
    crypto.subtle.digest('SHA-256', enc.encode(b)),
  ]);
  const x = new Uint8Array(ha), y = new Uint8Array(hb);
  let d = 0;
  for (let i = 0; i < x.length; i++) d |= x[i] ^ y[i];
  return d === 0;
}

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);
  if (!canKhoa(url.pathname)) return next();

  const matKhau = env.THONGKE_MATKHAU;
  if (!matKhau) {
    return new Response('Trang thống kê đang bị khóa: chưa đặt mật khẩu quản trị.', {
      status: 503, headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' },
    });
  }
  const auth = request.headers.get('authorization') || '';
  if (!auth.startsWith('Basic ')) return tuChoi('Cần đăng nhập để xem thống kê.');
  let pass = '';
  try {
    const raw = atob(auth.slice(6));
    const bytes = Uint8Array.from(raw, (c) => c.charCodeAt(0));
    const s = new TextDecoder().decode(bytes);
    pass = s.slice(s.indexOf(':') + 1); // tên đăng nhập tùy ý, chỉ kiểm mật khẩu
  } catch {
    return tuChoi('Sai thông tin đăng nhập.');
  }
  if (!(await bangNhau(pass, matKhau))) return tuChoi('Sai mật khẩu.');

  const res = await next();
  const out = new Response(res.body, res);
  out.headers.set('cache-control', 'private, no-store');
  out.headers.set('x-robots-tag', 'noindex');
  return out;
}
