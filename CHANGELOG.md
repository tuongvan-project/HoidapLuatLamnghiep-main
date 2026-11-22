# Nhật ký phiên bản — Hỏi đáp Pháp luật Lâm nghiệp

Ghi theo dạng [Keep a Changelog](https://keepachangelog.com/vi/1.1.0/); số phiên bản theo quy ước `CHÍNH.PHỤ.SỬA`:
- **CHÍNH**: thay đổi lớn về cách chơi hoặc giao diện;
- **PHỤ**: thêm tính năng, thêm/sửa bộ câu hỏi;
- **SỬA**: sửa lỗi nhỏ.

Số phiên bản đang chạy được khai ở `index.html` (`window.GAME_VERSION`), và gửi kèm mỗi bản ghi thống kê.

## [1.3.0] — 22/11/2026 — Vận hành chuyên nghiệp
### Thêm
- **Tự ghi lỗi trên máy người chơi** (`dem.js` → `/api/su-kien`, bảng `errors`):
  - Chỉ ghi lỗi mã, không ghi lỗi tải ảnh khi mất mạng. Tối đa 5 lỗi khác nhau mỗi lần mở trang; máy chủ nhận tối đa 10 lỗi mỗi gói.
  - Trang thống kê có mục "Lỗi phát sinh trên máy người chơi".
- **Khóa trang thống kê bằng mật khẩu** (`functions/_middleware.js`): khóa `/thongke`, `/api/thong-ke`, `/api/xuat`.
  - Mật khẩu là biến bí mật `THONGKE_MATKHAU` trên Cloudflare; chưa đặt thì luôn từ chối.
  - Game và API ghi sự kiện không bị khóa.
- **Tải toàn bộ số liệu dạng CSV** (`/api/xuat`): theo ngày, theo chế độ + tháng, theo khu vực + tháng, theo câu hỏi, lỗi, từng lượt của một tháng.
  - Có chống Excel hiểu nhầm nội dung thành công thức.
- **Bộ tự kiểm** `kiemtra/kiemtra.mjs`, chạy ở bước dựng Cloudflare; có lỗi thì không phát hành. Kiểm:
  - cú pháp; bộ câu hỏi;
  - tham chiếu tệp, so đúng hoa/thường theo git;
  - danh sách lưu ngoại tuyến; phiên bản thống nhất; tệp nội bộ.
- **Bộ thử phần máy chủ** `kiemtra/thu-may-chu.mjs`: 27 phép thử bằng kho số liệu giả.
- **Theo dõi trang hằng giờ** `.github/workflows/theo-doi.yml`: kiểm trang, mã, API, khóa thống kê; lỗi thì GitHub gửi thư.
- **Công cụ phát hành** `kiemtra/phathanh.mjs`: đổi số phiên bản ở mọi chỗ, thêm mục nhật ký, chạy bộ tự kiểm.
### Sửa
- **Âm thanh bấm nút không phát trên trang chính** (có từ 21/11): kho mã lưu tên `click.mp3`, game gọi `Click.mp3`. Máy chủ phân biệt hoa/thường nên trả trang chủ thay cho tệp. Đã đổi tên trong git.
- Bộ lưu ngoại tuyến không còn cất trang chủ thay cho tệp ảnh/âm thanh khi máy chủ trả nhầm.
- Gói số liệu gửi về được chia nhỏ (≤ 16 KB), máy chủ nhận tối đa 64 KB → không còn nguy cơ mất cả lô lượt chơi khi gửi bù nhiều lượt sau thời gian dài mất mạng.
- API thống kê không còn cho lưu đệm công khai.
### Đổi
- Tham số làm mới `?v=31` → `?v=32`.

## [1.2.0] — 22/11/2026 — Nhẹ hơn, chơi được khi mất mạng
### Thêm
- **Chơi khi mất mạng** (`sw.js`):
  - Sau lần vào đầu, trò chơi được cất vào máy: mã, bộ câu hỏi, ảnh, phông, âm thanh hiệu ứng.
  - Video nhân vật được cất khi đã phát một lần. Nhạc nền 3 MB không cất trước.
  - Vào lại trên mạng yếu: trang lấy bản mới trong tối đa 5 giây, quá thì dùng bản đã cất.
- **Cài như ứng dụng** (`manifest.webmanifest`, `ungdung.js`, biểu tượng `icon-192/512.png`, `apple-touch-icon.png`, `favicon-32.png`):
  - Có nút "⬇ Cài vào máy" trên Android/Chrome/Edge.
  - Có thông báo nhỏ khi đã lưu xong vào máy và khi mất mạng.
- `_headers`: ảnh, âm thanh, video giữ trong bộ nhớ đệm 7 ngày; phông 30 ngày.
### Đổi
- **Ảnh** thu nhỏ về đúng cỡ hiển thị, chuyển sang WebP: tổng 4,6 MB → 1,5 MB.
  - Ví dụ: đồng hồ 2675 px → 420 px; thư "Về tác giả" 4096 px → 1400 px; nền màn hình bắt đầu 3072 px → 1920 px.
  - Ảnh khung nhân vật giữ nguyên kích thước điểm ảnh (vì mã vẽ dùng tọa độ).
- **Phông chữ** lọc còn bảng chữ Latinh và tiếng Việt: 586 KB → 350 KB (đủ toàn bộ chữ tiếng Việt).
- **Màn hình bắt đầu** chỉ tải những gì cần ngay. Ảnh các màn sau tải ngầm lúc rảnh.
- **Nhạc, âm thanh**: không tải khi mới mở trang.
  - Âm thanh hiệu ứng nạp ở lần chạm đầu tiên.
  - Nhạc nền chỉ tải khi phát.
  - Video nhân vật tải khi vào màn chơi.
- Google Fonts tải không chặn hiển thị trang.
- Tham số làm mới `?v=29` → `?v=31`.
### Ghi chú bảo trì
- Thêm, đổi tên tệp ảnh, phông, mã → cập nhật danh sách `CORE` trong `sw.js`, và `ASSET_V` nếu đổi tham số `?v=`.

## [1.1.1] — 22/11/2026
### Đổi
- Hiện số phiên bản nho nhỏ ở cuối màn hình bắt đầu: "Phiên bản 1.1.1 · Game Design & Development by PTV". Chữ lấy tự động từ `window.GAME_VERSION`.
- Bỏ dòng "Non-commercial & Education only © 2026 by PTV" trên màn chơi; xóa các quy tắc CSS không còn dùng.
- Tham số làm mới bộ nhớ đệm `?v=28` → `?v=29`.

## [1.1.0] — 22/11/2026
### Thêm
- **Thống kê lượt truy cập, lượt chơi** (ẩn danh, không thu thông tin cá nhân):
  - `dem.js` ghi lượt mở game; lượt chơi theo chế độ; số câu trả lời, số câu đúng; câu hay sai; loại thiết bị; nguồn vào (`?src=qr`…).
  - Mất mạng thì xếp hàng trên máy, có mạng gửi bù.
  - Lỗi ở bộ đếm không ảnh hưởng tới game.
  - `functions/api/su-kien.js`: nhận dữ liệu, kiểm và lọc đầu vào, lưu vào Cloudflare D1.
  - `functions/api/thong-ke.js`: trả số liệu tổng hợp theo khoảng ngày.
  - `thongke.html`: trang thống kê cho Chi cục, gồm ô số liệu, biểu đồ theo ngày, bảng theo chế độ/thiết bị/khu vực/nguồn, câu hay sai. Tải CSV, in/lưu PDF được.
  - `_routes.json`: chỉ đường dẫn `/api/*` chạy mã máy chủ; mọi tệp khác vẫn phục vụ tĩnh, miễn phí.
- `CHANGELOG.md` (tệp này).
### Đổi
- `game.js`: gắn 5 điểm gọi bộ đếm — bắt đầu lượt, trả lời, hết giờ, kết thúc, về màn hình chính.
- Tham số làm mới bộ nhớ đệm `?v=27` → `?v=28`.

## [1.0.0] — 21/11/2026 (mốc trước khi lập nhật ký, `?v=27`)
- Đủ 4 bộ câu hỏi đã rà soát, đối chiếu lần hai với nguyên văn văn bản pháp luật: Kiểm lâm 115, Chủ rừng 130, Kinh doanh – chế biến lâm sản 92, Cơ sở nuôi động vật rừng 85.
- Đã sửa các lỗi giao diện phát hiện khi chạy thử ngày 21/11.
- Lịch sử trước đó: xem `git log`.
