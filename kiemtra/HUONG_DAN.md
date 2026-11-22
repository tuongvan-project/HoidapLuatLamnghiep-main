# Hướng dẫn kiểm thử và phát hành — Hỏi đáp Pháp luật Lâm nghiệp

Kế hoạch đầy đủ (5 tầng A–E, mức lỗi, phần agent Game bổ sung):
`_SUPERVISOR\TASKS\GAME_VANHANH_20261122\KE_HOACH_KIEM_THU.md`.

## Quy trình mỗi lần ra bản mới
1. Tạo nhánh riêng: `git switch -c <tên-nhánh>`.
2. Sửa mã. Đổi số phiên bản ở mọi chỗ bằng một lệnh: `node kiemtra/phathanh.mjs <CHÍNH.PHỤ.SỬA> "mô tả"`. Sau đó ghi rõ thay đổi trong `CHANGELOG.md`.
3. **Tầng A — bộ tự kiểm:** `node kiemtra/kiemtra.mjs`. Bộ này cũng chạy tự động ở bước dựng Cloudflare; có lỗi thì không lên trang.
4. **Tầng B — phần máy chủ:** `node kiemtra/thu-may-chu.mjs`. Cần Node.js ≥ 22.13.
5. `git add -A` (tệp mới chưa add thì bộ tự kiểm báo thiếu, đúng ý), lưu rồi đẩy nhánh. Cloudflare tạo **bản xem trước** tại `https://<tên-nhánh>.hoidapluatlamnghiep.pages.dev`; bản này dùng kho số liệu thử riêng.
6. **Tầng C — trên trình duyệt thật**, chạy trên bản xem trước:
   ```
   cd kiemtra/trinh-duyet
   node thu-trinh-duyet.mjs https://<tên-nhánh>.hoidapluatlamnghiep.pages.dev van,mang-cham,mat-mang,menu-i,ghi-loi
   ```
   - Cài một lần, ngoài Google Drive: `npm install --prefix "%USERPROFILE%\.hoidap-thu" playwright-core`.
   - Máy có sẵn Edge hoặc Chrome là đủ.
7. Khi đổi giao diện hoặc chế độ ngoại tuyến: nhờ người dùng thử trên điện thoại thật (tầng D).
8. **Người dùng duyệt.** Trước khi gộp, chạy `node thu-trinh-duyet.mjs https://hoidapluatlamnghiep.pages.dev nang-cap-chuan-bi`.
9. Gộp vào `main`, gắn nhãn `git tag -a v<phiên bản>`, đẩy `main` và nhãn, xóa nhánh.
10. **Tầng E — trong 10 phút sau khi lên trang:**
    ```
    node thu-trinh-duyet.mjs https://hoidapluatlamnghiep.pages.dev van-nhanh,mat-mang,menu-i,nang-cap-kiem
    ```
    Có lỗi chặn thì quay lại bản trước ngay: Cloudflare → Deployments → bản trước → Rollback, hoặc `git revert`.

## Lưu ý đã gặp
- Windows không phân biệt hoa/thường nhưng máy chủ thì có. Đổi tên tệp chỉ khác hoa/thường phải dùng `git mv -f`.
- Thêm hoặc đổi tên tệp ảnh, phông, mã → cập nhật danh sách `CORE` trong `sw.js`. Bộ tự kiểm sẽ nhắc.
- Trình duyệt trong ứng dụng Claude không chạy bộ phận lưu ngoại tuyến trên localhost → thử ngoại tuyến bằng `thu-trinh-duyet.mjs` trên bản xem trước.
- Ca `ghi-loi` tự bỏ qua ở trang chính để không làm bẩn số liệu lỗi thật.
- Trang thống kê khóa bằng biến bí mật `THONGKE_MATKHAU` trên Cloudflare. Chưa đặt thì luôn từ chối.
