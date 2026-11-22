// Dùng chung cho các API thống kê. Bảng được tự tạo ở lần gọi đầu tiên của mỗi tiến trình.
// Không lưu IP, tên hay bất kỳ thông tin cá nhân nào; "cid" là mã ngẫu nhiên do trình duyệt tự sinh.
let schemaReady = false;

export async function ensureSchema(db) {
  if (schemaReady) return;
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ts INTEGER NOT NULL,          -- thời điểm (ms, giờ máy chủ)
      day TEXT NOT NULL,            -- ngày theo giờ Việt Nam, YYYY-MM-DD
      kind TEXT NOT NULL,           -- 'open' (mở game) | 'game' (một lượt chơi)
      cid TEXT,                     -- mã ẩn danh của trình duyệt
      mode TEXT,                    -- chế độ chơi
      n INTEGER,                    -- số câu của lượt
      answered INTEGER,             -- số câu đã trả lời
      correct INTEGER,              -- số câu đúng
      dur INTEGER,                  -- tổng thời gian trả lời (giây)
      done INTEGER,                 -- 1 = chơi hết lượt
      device TEXT,                  -- mobile | tablet | desktop
      region TEXT,                  -- tỉnh/thành theo mạng (ước lượng của Cloudflare)
      country TEXT,
      ref TEXT,                     -- nguồn vào (qr, cổng thông tin, mạng xã hội...)
      v TEXT                        -- phiên bản game
    )`),
    db.prepare(`CREATE INDEX IF NOT EXISTS idx_events_day ON events(day, kind)`),
    db.prepare(`CREATE TABLE IF NOT EXISTS qstats (
      qid TEXT PRIMARY KEY,
      shown INTEGER NOT NULL DEFAULT 0,
      wrong INTEGER NOT NULL DEFAULT 0
    )`),
  ]);
  schemaReady = true;
}

export function vnDay(ms) {
  return new Date(ms + 7 * 3600 * 1000).toISOString().slice(0, 10);
}

export function json(data, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...extra },
  });
}

export function str(v, max) {
  if (typeof v !== 'string') return null;
  const s = v.trim().slice(0, max);
  return s || null;
}

export function int(v, min, max) {
  const n = Number(v);
  if (!Number.isFinite(n)) return null;
  return Math.max(min, Math.min(max, Math.round(n)));
}
