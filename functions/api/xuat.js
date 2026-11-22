// GET /api/xuat?loai=ngay|che-do|cau-hoi|loi|su-kien — tải toàn bộ số liệu dạng CSV (mở được bằng Excel).
// Được khóa bằng mật khẩu (functions/_middleware.js).
import { ensureSchema, vnDay } from './_db.js';

const LOAI = {
  'ngay': {
    ten: 'theo-ngay',
    sql: `SELECT day AS "Ngày", SUM(kind='open') AS "Lượt mở game",
            COUNT(DISTINCT CASE WHEN kind='open' THEN cid END) AS "Người dùng (ước tính)",
            SUM(kind='game') AS "Lượt chơi", SUM(kind='game' AND done=1) AS "Chơi hết lượt",
            SUM(CASE WHEN kind='game' THEN answered ELSE 0 END) AS "Câu đã trả lời",
            SUM(CASE WHEN kind='game' THEN correct ELSE 0 END) AS "Câu đúng"
          FROM events GROUP BY day ORDER BY day`
  },
  'che-do': {
    ten: 'theo-che-do-va-thang',
    sql: `SELECT substr(day,1,7) AS "Tháng", COALESCE(mode,'không rõ') AS "Chế độ", COUNT(*) AS "Lượt chơi",
            SUM(done=1) AS "Chơi hết lượt", ROUND(AVG(CASE WHEN done=1 THEN correct END),2) AS "Điểm TB (hết lượt)"
          FROM events WHERE kind='game' GROUP BY 1, 2 ORDER BY 1, 3 DESC`
  },
  'khu-vuc': {
    ten: 'theo-khu-vuc-va-thang',
    sql: `SELECT substr(day,1,7) AS "Tháng", COALESCE(region, country, 'Không rõ') AS "Khu vực", COUNT(*) AS "Lượt mở game"
          FROM events WHERE kind='open' GROUP BY 1, 2 ORDER BY 1, 3 DESC`
  },
  'cau-hoi': {
    ten: 'theo-cau-hoi',
    sql: `SELECT qid AS "Mã câu", shown AS "Lượt gặp", wrong AS "Lượt trả lời sai",
            ROUND(100.0*wrong/shown,1) AS "Tỉ lệ sai (%)" FROM qstats ORDER BY qid`
  },
  'loi': {
    ten: 'loi-tren-may-nguoi-choi',
    sql: `SELECT day AS "Ngày", v AS "Phiên bản", msg AS "Lỗi", src AS "Vị trí", device AS "Thiết bị",
            browser AS "Trình duyệt", COUNT(*) AS "Số lần" FROM errors GROUP BY 1,2,3,4,5,6 ORDER BY 1 DESC`
  },
  'su-kien': {
    ten: 'tung-su-kien',
    sql: `SELECT id, ts, day AS "Ngày", kind AS "Loại", cid AS "Mã ẩn danh", mode AS "Chế độ", n AS "Số câu",
            answered AS "Đã trả lời", correct AS "Đúng", dur AS "Giây", done AS "Hết lượt", device AS "Thiết bị",
            region AS "Khu vực", country AS "Quốc gia", ref AS "Nguồn", v AS "Phiên bản"
          FROM events WHERE substr(day,1,7) = ?1 ORDER BY id`,
    theoThang: true
  },
};

function csvCell(v) {
  if (v === null || v === undefined) return '';
  let s = String(v);
  // Chống Excel hiểu nhầm thành công thức (nội dung lỗi, nguồn truy cập do máy người dùng gửi lên)
  if (typeof v === 'string' && /^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

export async function onRequestGet({ request, env }) {
  if (!env.DB) return new Response('Chưa có kho số liệu', { status: 503 });
  const loai = new URL(request.url).searchParams.get('loai') || 'ngay';
  const def = LOAI[loai];
  if (!def) return new Response('Loại không hợp lệ. Dùng: ' + Object.keys(LOAI).join(', '), { status: 400 });

  await ensureSchema(env.DB);
  let stmt = env.DB.prepare(def.sql);
  let thang = '';
  if (def.theoThang) {
    thang = new URL(request.url).searchParams.get('thang') || vnDay(Date.now()).slice(0, 7);
    if (!/^\d{4}-\d{2}$/.test(thang)) return new Response('Tháng không hợp lệ (YYYY-MM)', { status: 400 });
    stmt = stmt.bind(thang);
  }
  const { results } = await stmt.all();
  const cols = results.length ? Object.keys(results[0]) : [];
  const lines = [cols.map(csvCell).join(',')];
  for (const r of results) lines.push(cols.map((c) => csvCell(r[c])).join(','));
  const body = '\ufeff' + lines.join('\r\n'); // BOM để Excel đọc đúng tiếng Việt
  const file = `hoidap-${def.ten}-${thang || vnDay(Date.now())}.csv`;
  return new Response(body, {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': `attachment; filename="${file}"`,
      'cache-control': 'private, no-store',
    },
  });
}
