# Nhật ký phiên bản — Hỏi đáp Pháp luật Lâm nghiệp

Ghi theo dạng [Keep a Changelog](https://keepachangelog.com/vi/1.1.0/); số phiên bản theo quy ước `CHÍNH.PHỤ.SỬA`:
- **CHÍNH**: thay đổi lớn về cách chơi hoặc giao diện;
- **PHỤ**: thêm tính năng, thêm/sửa bộ câu hỏi;
- **SỬA**: sửa lỗi nhỏ.

Số phiên bản đang chạy được khai ở `index.html` (`window.GAME_VERSION`), và gửi kèm mỗi bản ghi thống kê.

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
