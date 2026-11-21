// ============================================================================
// BỘ CÂU HỎI TRẮC NGHIỆM ĐÃ RÀ SOÁT, ĐỐI CHIẾU VÀ CHUẨN HÓA PHÁP LÝ (BẢN V2 - NÂNG CAO ĐỘ KHÓ)
// Gói dữ liệu: Kinh doanh, chế biến lâm sản (92 câu)
// Đã điều chỉnh: Tăng độ khó bằng cách thay thế 1 phương án sai lộ liễu thành phương án nhiễu tinh vi (plausible distractor)
// Đã rà soát đối chiếu nguyên văn QPPL ngày 20/11/2026
// ============================================================================

const question_CBLS = [
  {
    "id": "CBLS_001",
    "question": "Theo Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT), trường hợp nào sau đây chủ lâm sản KHÔNG phải xác nhận Bảng kê lâm sản?",
    "options": [
      "Gỗ nguyên liệu của doanh nghiệp Nhóm I theo quy định của Hệ thống bảo đảm gỗ hợp pháp Việt Nam; sản phẩm gỗ (trừ trường hợp chủ lâm sản đề nghị xác nhận)",
      "Gỗ loài thông thường khai thác từ rừng tự nhiên trong nước",
      "Động vật rừng nguy cấp, quý, hiếm và sản phẩm của chúng khi xuất bán",
      "Gỗ nguyên liệu, thực vật ngoài gỗ thuộc loài nguy cấp, quý, hiếm hoặc Phụ lục CITES"
    ],
    "correct": "Gỗ nguyên liệu của doanh nghiệp Nhóm I theo quy định của Hệ thống bảo đảm gỗ hợp pháp Việt Nam; sản phẩm gỗ (trừ trường hợp chủ lâm sản đề nghị xác nhận)",
    "explanation": "Căn cứ Khoản 4 Điều 5 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Lâm sản không phải xác nhận Bảng kê lâm sản gồm gỗ nguyên liệu của doanh nghiệp Nhóm I theo quy định của Hệ thống bảo đảm gỗ hợp pháp Việt Nam; sản phẩm gỗ, trừ trường hợp quy định tại điểm đ khoản 3 Điều 5 (chủ lâm sản đề nghị xác nhận)."
  },
  {
    "id": "CBLS_002",
    "question": "Thời hạn cơ quan Kiểm lâm sở tại thực hiện việc xác nhận Bảng kê lâm sản đối với trường hợp KHÔNG PHẢI kiểm tra thực tế lâm sản là bao lâu?",
    "options": [
      "Trong thời hạn 02 ngày làm việc kể từ ngày nhận đủ hồ sơ đề nghị hợp lệ",
      "Trong thời hạn 24 giờ kể từ thời điểm tiếp nhận hồ sơ",
      "Trong thời hạn 05 ngày làm việc theo quy chế một cửa liên thông",
      "Trong thời hạn 03 ngày làm việc kể từ ngày nhận đủ hồ sơ đề nghị hợp lệ"
    ],
    "correct": "Trong thời hạn 02 ngày làm việc kể từ ngày nhận đủ hồ sơ đề nghị hợp lệ",
    "explanation": "Điểm c Khoản 7 Điều 5 Thông tư số 26/2025/TT-BNNMT (được sửa đổi bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT) quy định: Trong thời hạn 02 ngày làm việc kể từ ngày nhận được hồ sơ hợp lệ (đối với trường hợp nộp bằng bản giấy và không phải kiểm tra, xác minh thực tế lâm sản), cơ quan Kiểm lâm sở tại hoàn thành xác nhận Bảng kê lâm sản."
  },
  {
    "id": "CBLS_003",
    "question": "Theo Điểm c Khoản 7 Điều 5 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT), trường hợp cần xác minh nguồn gốc lâm sản trước khi xác nhận Bảng kê lâm sản, cơ quan Kiểm lâm sở tại thực hiện trình tự, thời hạn nào?",
    "options": [
      "Thông báo trong 01 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ; tiến hành xác minh, lập Biên bản xác minh theo Mẫu số 05 Phụ lục II và hoàn thành xác nhận trong 02 ngày làm việc kể từ ngày thông báo (phức tạp không quá 03 ngày làm việc)",
      "Tiến hành xác minh đột xuất không cần thông báo và hoàn thành xác nhận trong thời hạn 05 ngày làm việc",
      "Chỉ thông báo bằng văn bản cho Ủy ban nhân dân cấp xã và kéo dài thời hạn xác nhận tối đa 10 ngày làm việc",
      "Bắt buộc giữ lại toàn bộ hồ sơ trong 07 ngày làm việc để chờ ý kiến của Chi cục Kiểm lâm cấp tỉnh trước khi xác minh"
    ],
    "correct": "Thông báo trong 01 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ; tiến hành xác minh, lập Biên bản xác minh theo Mẫu số 05 Phụ lục II và hoàn thành xác nhận trong 02 ngày làm việc kể từ ngày thông báo (phức tạp không quá 03 ngày làm việc)",
    "explanation": "Căn cứ Điểm c Khoản 7 Điều 5 Thông tư số 26/2025/TT-BNNMT (được sửa đổi bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT): Trường hợp cần xác minh nguồn gốc lâm sản, trong thời hạn 01 ngày làm việc kể từ ngày nhận được hồ sơ hợp lệ, cơ quan Kiểm lâm sở tại thông báo cho chủ lâm sản; trong 02 ngày làm việc kể từ ngày thông báo tiến hành xác minh, lập Biên bản xác minh theo Mẫu số 05 Phụ lục II và hoàn thành xác nhận (nhiều nội dung phức tạp không quá 03 ngày làm việc)."
  },
  {
    "id": "CBLS_004",
    "question": "Sổ theo dõi nhập, xuất lâm sản (theo Mẫu số 04 ban hành kèm Thông tư 26/2025/TT-BNNMT) tại các cơ sở chế biến, kinh doanh gỗ phải được cập nhật như thế nào?",
    "options": [
      "Cập nhật đầy đủ, kịp thời tình hình nhập xuất lâm sản và xuất trình khi có yêu cầu kiểm tra của cơ quan có thẩm quyền",
      "Chỉ cần ghi dồn số liệu một lần vào ngày cuối cùng của mỗi tháng",
      "Cập nhật định kỳ vào ngày 25 hàng tháng và gửi bản sao sổ về Hạt Kiểm lâm sở tại để lưu hồ sơ",
      "Không bắt buộc phải ghi chép nếu cơ sở đã lưu trữ đầy đủ hóa đơn giá trị gia tăng"
    ],
    "correct": "Cập nhật đầy đủ, kịp thời tình hình nhập xuất lâm sản và xuất trình khi có yêu cầu kiểm tra của cơ quan có thẩm quyền",
    "explanation": "Căn cứ Điểm c Khoản 7 Điều 32 Thông tư số 26/2025/TT-BNNMT (được sửa đổi bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT): Tổ chức, hộ kinh doanh phải lập Sổ theo dõi nhập, xuất lâm sản theo Mẫu số 04 Phụ lục II; cập nhật đầy đủ, kịp thời tình hình nhập xuất lâm sản và xuất trình khi có yêu cầu kiểm tra của cơ quan có thẩm quyền."
  },
  {
    "id": "CBLS_005",
    "question": "Theo Nghị định số 102/2020/NĐ-CP (được sửa đổi, bổ sung bởi Nghị định số 120/2024/NĐ-CP và Nghị định số 42/2026/NĐ-CP), khi làm thủ tục hải quan nhập khẩu lô gỗ không thuộc Phụ lục CITES, ngoài bộ hồ sơ hải quan, chủ gỗ phải xuất trình tài liệu nào (và kê khai ra sao nếu gỗ không thuộc loài rủi ro, nhập từ vùng địa lý tích cực)?",
    "options": [
      "Bản chính Bảng kê gỗ nhập khẩu theo Mẫu số 01 Phụ lục I (đánh dấu Mục B1: không yêu cầu tài liệu bổ sung và không kê khai Mục C, kê khai Mục D); bản sao giấy phép FLEGT xuất khẩu nếu từ quốc gia đang vận hành hệ thống cấp phép FLEGT",
      "Chỉ cần giấy cam kết của người lái xe chở gỗ từ cảng về xưởng mộc",
      "Bản chính Bảng kê lâm sản có xác nhận của Chi cục Kiểm lâm cấp tỉnh và Giấy chứng nhận nguồn gốc C/O",
      "Bắt buộc phải có Giấy phép CITES nhập khẩu đối với mọi loài gỗ nhập khẩu"
    ],
    "correct": "Bản chính Bảng kê gỗ nhập khẩu theo Mẫu số 01 Phụ lục I (đánh dấu Mục B1: không yêu cầu tài liệu bổ sung và không kê khai Mục C, kê khai Mục D); bản sao giấy phép FLEGT xuất khẩu nếu từ quốc gia đang vận hành hệ thống cấp phép FLEGT",
    "explanation": "Căn cứ Điều 7 và Mục B Mẫu số 01 Phụ lục I Nghị định số 102/2020/NĐ-CP (được sửa đổi bởi Nghị định số 120/2024/NĐ-CP, hợp nhất tại VBHN số 14/VBHN-BNNMT): Ngoài bộ hồ sơ hải quan, chủ gỗ xuất trình Bản chính Bảng kê gỗ nhập khẩu theo Mẫu số 01 Phụ lục I (và bản sao giấy phép FLEGT xuất khẩu nếu nhập từ nước có hệ thống cấp phép FLEGT); nếu gỗ không thuộc loài rủi ro và từ vùng địa lý tích cực thì tại Mục B1 Mẫu số 01 không yêu cầu tài liệu bổ sung và không kê khai Mục C, chỉ kê khai Mục D."
  },
  {
    "id": "CBLS_006",
    "question": "Theo Nghị định số 102/2020/NĐ-CP (sửa đổi bởi Nghị định số 120/2024/NĐ-CP và Nghị định số 42/2026/NĐ-CP), trường hợp gỗ nhập khẩu thuộc loài rủi ro hoặc từ vùng địa lý không tích cực, chủ gỗ phải thực hiện kê khai và xuất trình bổ sung tài liệu nào tại Bảng kê gỗ nhập khẩu (Mẫu số 01 Phụ lục I)?",
    "options": [
      "Kê khai theo Mục C và Mục D tại Mẫu số 01 Phụ lục I, đồng thời xuất trình một trong các tài liệu truy xuất nguồn gốc hợp pháp (như Chứng chỉ quản lý rừng bền vững, giấy phép hoặc tài liệu chứng minh được phép khai thác gỗ hoặc tài liệu thay thế hợp pháp)",
      "Chỉ cần bản cam kết tự nguyện tuân thủ tiêu chí gỗ hợp pháp có xác nhận của Hiệp hội Gỗ và Lâm sản",
      "Bản cam kết không bán gỗ cho các hộ gia đình đóng đồ dùng cá nhân",
      "Phiếu siêu âm kiểm tra độ ẩm bên trong giác lõi của từng lóng gỗ"
    ],
    "correct": "Kê khai theo Mục C và Mục D tại Mẫu số 01 Phụ lục I, đồng thời xuất trình một trong các tài liệu truy xuất nguồn gốc hợp pháp (như Chứng chỉ quản lý rừng bền vững, giấy phép hoặc tài liệu chứng minh được phép khai thác gỗ hoặc tài liệu thay thế hợp pháp)",
    "explanation": "Căn cứ Khoản 4 Điều 4, Điều 7 và Mục B2, Mục C Mẫu số 01 Phụ lục I Nghị định số 102/2020/NĐ-CP (được sửa đổi bởi Nghị định số 120/2024/NĐ-CP, đã bãi bỏ Mẫu số 02 và Mẫu số 03 cũ): Gỗ thuộc loài rủi ro hoặc từ vùng địa lý không tích cực phải đánh dấu Mục B2, kê khai Mục C và Mục D trên Bảng kê gỗ nhập khẩu (Mẫu số 01), xuất trình chứng chỉ quản lý rừng bền vững hoặc giấy phép/tài liệu chứng minh được phép khai thác (hoặc tài liệu bổ sung, thay thế hợp pháp)."
  },
  {
    "id": "CBLS_007",
    "question": "Hành vi vận chuyển gỗ rừng trồng có nguồn gốc hợp pháp nhưng người điều khiển phương tiện hoặc chủ lâm sản không xuất trình được hồ sơ lâm sản tại thời điểm kiểm tra bị xử phạt về hành vi nào?",
    "options": [
      "Hành vi vi phạm quy định về quản lý hồ sơ lâm sản trong vận chuyển, mua bán, cất giữ, chế biến lâm sản",
      "Tự động bị coi là hành vi buôn lậu gỗ tự nhiên và bị tịch thu toàn bộ xe ô tô",
      "Hành vi vi phạm quy tắc an toàn giao thông đường bộ",
      "Hành vi vận chuyển hàng hóa thương mại thiếu hóa đơn GTGT thuộc thẩm quyền xử phạt của cơ quan Thuế"
    ],
    "correct": "Hành vi vi phạm quy định về quản lý hồ sơ lâm sản trong vận chuyển, mua bán, cất giữ, chế biến lâm sản",
    "explanation": "Căn cứ Khoản 23 Điều 25 và Điểm b, Điểm c Khoản 1 Điều 27 Nghị định số 146/2026/NĐ-CP: Trường hợp vận chuyển lâm sản đã được xác định có nguồn gốc hợp pháp nhưng hồ sơ lâm sản không thực hiện đúng quy định hoặc người điều khiển phương tiện, chủ lâm sản không xuất trình được hồ sơ lâm sản tại thời điểm kiểm tra thì bị xử phạt theo Điều 27 (phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng đối với cá nhân) về quản lý hồ sơ lâm sản."
  },
  {
    "id": "CBLS_008",
    "question": "Hành vi tàng trữ gỗ quý hiếm Nhóm IA không có hồ sơ nguồn gốc hợp pháp tại kho xưởng cưa xẻ với khối lượng tối thiểu bao nhiêu thì bị truy cứu trách nhiệm hình sự theo Khoản 1 Điều 232 Bộ luật Hình sự (trường hợp chưa bị xử phạt vi phạm hành chính hoặc kết án về tội này)?",
    "options": [
      "Từ 1,5 m³ gỗ trở lên (khung hình phạt tiền từ 50.000.000 đồng đến 300.000.000 đồng, cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm)",
      "Từ 10 m³ gỗ tròn trở lên mới cấu thành tội phạm hình sự",
      "Từ 50 m³ gỗ tròn trở lên mới bị xử lý hình sự",
      "Từ 5,0 m³ gỗ trở lên (khung hình phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm)"
    ],
    "correct": "Từ 1,5 m³ gỗ trở lên (khung hình phạt tiền từ 50.000.000 đồng đến 300.000.000 đồng, cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm)",
    "explanation": "Căn cứ Khoản 1 và Điểm k Khoản 1 Điều 232 Bộ luật Hình sự: Hành vi tàng trữ, vận chuyển, chế biến hoặc mua bán trái phép từ 1,5 mét khối (m³) đến dưới 03 mét khối (m³) gỗ thuộc Danh mục loài nguy cấp, quý, hiếm được ưu tiên bảo vệ hoặc Danh mục thực vật rừng, động vật rừng nguy cấp, quý, hiếm Nhóm IA bị phạt tiền từ 50.000.000 đồng đến 300.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm."
  },
  {
    "id": "CBLS_009",
    "question": "Đối với gỗ loài thực vật rừng thông thường, hành vi vận chuyển trái phép đạt khối lượng tối thiểu bao nhiêu thì bị truy cứu trách nhiệm hình sự theo Khoản 1 Điều 232 Bộ luật Hình sự (trường hợp chưa từng bị xử phạt vi phạm hành chính hoặc kết án về tội này)?",
    "options": [
      "Từ 20 m³ gỗ trở lên",
      "Từ 2 m³ gỗ tròn trở lên trong mọi trường hợp",
      "Phải từ 100 m³ gỗ tròn trở lên mới cấu thành tội phạm",
      "Từ 10 m³ gỗ trở lên đối với gỗ tròn thông thường khai thác từ rừng tự nhiên"
    ],
    "correct": "Từ 20 m³ gỗ trở lên",
    "explanation": "Căn cứ Khoản 1 và Điểm k Khoản 1 Điều 232 Bộ luật Hình sự: Hành vi tàng trữ, vận chuyển, chế biến hoặc mua bán trái phép từ 20 mét khối (m³) đến dưới 40 mét khối (m³) gỗ loài thực vật rừng thông thường bị phạt tiền từ 50.000.000 đồng đến 300.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm (trường hợp đã bị xử phạt vi phạm hành chính hoặc kết án chưa xóa án tích mà còn vi phạm thì dưới mức này vẫn bị truy cứu theo Điểm m Khoản 1)."
  },
  {
    "id": "CBLS_010",
    "question": "Chủ cơ sở chế biến gỗ thu mua gỗ không có hồ sơ hợp pháp (hoặc lập hồ sơ nhưng lâm sản thực tế không đúng với nội dung hồ sơ đó) đưa về xưởng cưa xẻ thì bị xử lý về hành vi nào theo Nghị định số 146/2026/NĐ-CP?",
    "options": [
      "Hành vi tàng trữ, mua bán, chế biến lâm sản trái pháp luật (bị phạt tiền, tịch thu tang vật và có thể bị đình chỉ hoạt động cơ sở chế biến từ 06 đến 12 tháng hoặc truy cứu trách nhiệm hình sự nếu đủ định lượng)",
      "Chỉ bị nhắc nhở hành chính và cho phép bổ sung Bảng kê lâm sản tự lập",
      "Không bị xử phạt nếu chủ cơ sở chứng minh chỉ nhận cưa xẻ thuê lấy tiền công",
      "Chỉ bị xử phạt theo quy định về quản lý hồ sơ lâm sản với mức phạt tối đa 5.000.000 đồng"
    ],
    "correct": "Hành vi tàng trữ, mua bán, chế biến lâm sản trái pháp luật (bị phạt tiền, tịch thu tang vật và có thể bị đình chỉ hoạt động cơ sở chế biến từ 06 đến 12 tháng hoặc truy cứu trách nhiệm hình sự nếu đủ định lượng)",
    "explanation": "Căn cứ Khoản 6, Khoản 9 Điều 9 Luật Lâm nghiệp năm 2017; Điều 26 (Điểm a, Điểm b Khoản 21) Nghị định số 146/2026/NĐ-CP và Điều 232 Bộ luật Hình sự: Hành vi tàng trữ, mua bán, chế biến lâm sản không có hồ sơ hợp pháp hoặc có hồ sơ hợp pháp nhưng lâm sản không đúng với nội dung hồ sơ đó bị xử phạt về hành vi tàng trữ, mua bán, chế biến lâm sản trái pháp luật, tịch thu tang vật vi phạm và có thể bị đình chỉ hoạt động cơ sở chế biến 06 đến 12 tháng (từ khoản 5 Điều 26 trở lên) hoặc truy cứu trách nhiệm hình sự nếu đủ định lượng."
  },
  {
    "id": "CBLS_011",
    "question": "Phương pháp đo kích thước và tính thể tích gỗ tròn (bao gồm gỗ rừng trồng có đường kính đầu nhỏ từ 06 cm trở lên và chiều dài từ 01 m trở lên, hoặc gỗ khác có đường kính đầu nhỏ từ 10 cm đến dưới 20 cm và chiều dài từ 01 m trở lên) theo Phụ lục I Thông tư số 26/2025/TT-BNNMT là gì?",
    "options": [
      "Đo chiều dài ngắn nhất giữa hai mặt cắt (l) và đo đường kính ở hai đầu lóng gỗ (trừ phần vỏ cây) để tính đường kính trung bình (Dtb), tính thể tích theo công thức V = π/4 × (Dtb)² × l (với π = 3,14)",
      "Chỉ cân trọng lượng tấn rồi quy đổi tương đương 1 tấn bằng 1 mét khối gỗ",
      "Đo chu vi của cả bó củi rồi chia đều cho số lượng cây trong bó",
      "Đo chu vi tại vị trí giữa lóng gỗ (cả phần vỏ cây) rồi tính thể tích với hằng số π = 3,1416"
    ],
    "correct": "Đo chiều dài ngắn nhất giữa hai mặt cắt (l) và đo đường kính ở hai đầu lóng gỗ (trừ phần vỏ cây) để tính đường kính trung bình (Dtb), tính thể tích theo công thức V = π/4 × (Dtb)² × l (với π = 3,14)",
    "explanation": "Căn cứ Điểm a, Điểm c Khoản 2 Điều 3 và Khoản 1 Phụ lục I Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Gỗ tròn đo khoảng cách ngắn nhất giữa hai mặt cắt ngang ở hai đầu (l) và đo đường kính ở hai đầu lóng gỗ (trừ phần vỏ cây) để tính Dtb, xác định thể tích theo công thức V = π/4 × (Dtb)² × l với hằng số π = 3,14."
  },
  {
    "id": "CBLS_012",
    "question": "Theo Điểm d Khoản 2 Phụ lục I Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT), sai số tính thể tích gỗ cho phép trong mỗi lần đo đối với từng thanh, tấm, hộp gỗ xẻ, đẽo là bao nhiêu?",
    "options": [
      "Năm phần trăm (±5%) đối với từng thanh, tấm, hộp gỗ xẻ, đẽo",
      "Mười phần trăm (±10%) đối với từng thanh, tấm, hộp gỗ xẻ, đẽo",
      "Tuyệt đối không được phép có sai số đo đếm dù chỉ 0,001 m³",
      "Hai mươi phần trăm (±20%) nếu là gỗ rừng trồng thông thường"
    ],
    "correct": "Năm phần trăm (±5%) đối với từng thanh, tấm, hộp gỗ xẻ, đẽo",
    "explanation": "Căn cứ Điểm d Khoản 2 Phụ lục I ban hành kèm theo Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Sai số tính thể tích gỗ trong mỗi lần đo đối với từng thanh, tấm, hộp gỗ xẻ, đẽo là năm phần trăm (±5%) (trong khi gỗ tròn, gỗ khối trụ tròn là ±10%)."
  },
  {
    "id": "CBLS_013",
    "question": "Theo Nghị định số 102/2020/NĐ-CP (hợp nhất tại VBHN số 14/VBHN-BNNMT), tổ chức, cá nhân hoạt động chế biến, kinh doanh gỗ phải lưu giữ hồ sơ gỗ trong thời hạn bao lâu?",
    "options": [
      "Trong thời hạn 05 năm kể từ ngày xuất bán gỗ",
      "Tối thiểu 06 tháng kể từ ngày hoàn thành hợp đồng mua bán",
      "Chỉ cần lưu đến khi kết thúc năm tài chính hiện hành",
      "Trong thời hạn 03 năm kể từ ngày xuất bán gỗ"
    ],
    "correct": "Trong thời hạn 05 năm kể từ ngày xuất bán gỗ",
    "explanation": "Căn cứ Điểm b Khoản 5 Điều 27 Nghị định số 102/2020/NĐ-CP (hợp nhất tại VBHN số 14/VBHN-BNNMT) và Điểm a Khoản 7 Điều 32 Thông tư số 26/2025/TT-BNNMT: Tổ chức, cá nhân có trách nhiệm lưu giữ hồ sơ gỗ trong thời hạn 05 năm kể từ ngày xuất bán gỗ và lưu giữ đầy đủ hồ sơ lâm sản theo quy định."
  },
  {
    "id": "CBLS_014",
    "question": "Theo Nghị định số 102/2020/NĐ-CP (được sửa đổi bởi Nghị định số 120/2024/NĐ-CP, hợp nhất tại VBHN số 14/VBHN-BNNMT), khi nghi ngờ doanh nghiệp chế biến gỗ sử dụng tài liệu giả mạo hoặc thông tin tự kê khai không chính xác để đăng ký phân loại doanh nghiệp Nhóm I, cơ quan tiếp nhận xử lý như thế nào?",
    "options": [
      "Thông báo bằng văn bản cho doanh nghiệp trong 02 ngày làm việc kể từ ngày Hệ thống tự động phân loại Nhóm I và phối hợp xác minh làm rõ trong 03 ngày làm việc kể từ ngày thông báo",
      "Tự động công nhận doanh nghiệp Nhóm I trước rồi chờ báo cáo định kỳ cuối năm để đối chiếu sau",
      "Chỉ yêu cầu doanh nghiệp viết giấy cam kết lại mà không cần xác minh thực tế",
      "Chuyển hồ sơ cho Ủy ban nhân dân cấp xã quyết định hình thức xử lý trong thời hạn 30 ngày"
    ],
    "correct": "Thông báo bằng văn bản cho doanh nghiệp trong 02 ngày làm việc kể từ ngày Hệ thống tự động phân loại Nhóm I và phối hợp xác minh làm rõ trong 03 ngày làm việc kể từ ngày thông báo",
    "explanation": "Căn cứ Điểm b Khoản 3 Điều 13 Nghị định số 102/2020/NĐ-CP (được sửa đổi, bổ sung bởi Nghị định số 120/2024/NĐ-CP, hợp nhất tại VBHN số 14/VBHN-BNNMT): Trường hợp nghi ngờ thông tin doanh nghiệp tự kê khai hoặc nghi ngờ doanh nghiệp sử dụng tài liệu giả mạo, trong 02 ngày làm việc kể từ ngày Hệ thống tự động phân loại Nhóm I, cơ quan tiếp nhận thông báo bằng văn bản nêu rõ thời gian, nội dung cần xác minh; trong 03 ngày làm việc kể từ ngày thông báo, phối hợp xác minh làm rõ và thông báo kết quả."
  },
  {
    "id": "CBLS_015",
    "question": "Trường hợp gỗ thành phẩm được chế biến từ gỗ có nguồn gốc hợp pháp, khi vận chuyển xuất bán cho người tiêu dùng nội tỉnh cần hồ sơ gì?",
    "options": [
      "Bản chính Bảng kê lâm sản do cơ sở chế biến lập (hoặc có xác nhận của cơ quan Kiểm lâm sở tại nếu chủ lâm sản có đề nghị xác nhận)",
      "Bắt buộc phải có Giấy xác nhận của Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh",
      "Phải có Giấy kiểm dịch thực vật của Cục Bảo vệ thực vật",
      "Bắt buộc phải có Bảng kê lâm sản có xác nhận của Hạt Kiểm lâm sở tại nơi đặt xưởng chế biến"
    ],
    "correct": "Bản chính Bảng kê lâm sản do cơ sở chế biến lập (hoặc có xác nhận của cơ quan Kiểm lâm sở tại nếu chủ lâm sản có đề nghị xác nhận)",
    "explanation": "Căn cứ Khoản 1, Khoản 4 Điều 5 và Khoản 6 Điều 11 Thông tư số 26/2025/TT-BNNMT (Văn bản hợp nhất số 04/VBHN-BNNMT): Thông tư số 26/2025/TT-BNNMT đã bỏ Hóa đơn tài chính khỏi thành phần hồ sơ lâm sản bắt buộc; hồ sơ lâm sản đối với sản phẩm gỗ hoàn chỉnh khi mua bán, chuyển giao quyền sở hữu, vận chuyển trong nước là Bản chính Bảng kê lâm sản do chủ lâm sản lập (hoặc có xác nhận của cơ quan Kiểm lâm sở tại trong trường hợp chủ lâm sản đề nghị xác nhận theo Khoản 4 Điều 5)."
  },
  {
    "id": "CBLS_016",
    "question": "Cơ sở cưa xẻ gỗ thực hiện chế biến lâm sản không có hồ sơ hợp pháp hoặc có nguồn gốc hợp pháp nhưng hồ sơ lâm sản không thực hiện đúng quy định pháp luật thì bị xử phạt như thế nào theo Nghị định số 146/2026/NĐ-CP?",
    "options": [
      "Bị xử phạt về hành vi chế biến lâm sản trái pháp luật (theo Điều 26 nếu không có hồ sơ hợp pháp hoặc lâm sản không đúng nội dung hồ sơ) hoặc vi phạm quy định về quản lý hồ sơ lâm sản (theo Điều 27 nếu có nguồn gốc hợp pháp nhưng hồ sơ không đúng quy định)",
      "Do là xưởng cưa xẻ gia công thuê nên không bị xử phạt, chỉ xử phạt đối với chủ gỗ",
      "Chỉ bị đình chỉ hoạt động cưa xẻ nếu khối lượng gỗ không rõ nguồn gốc từ 10 m³ trở lên",
      "Không bị kiểm tra vì nằm trên đất thổ cư thuộc quyền sử dụng hợp pháp của chủ cơ sở"
    ],
    "correct": "Bị xử phạt về hành vi chế biến lâm sản trái pháp luật (theo Điều 26 nếu không có hồ sơ hợp pháp hoặc lâm sản không đúng nội dung hồ sơ) hoặc vi phạm quy định về quản lý hồ sơ lâm sản (theo Điều 27 nếu có nguồn gốc hợp pháp nhưng hồ sơ không đúng quy định)",
    "explanation": "Căn cứ Điều 26 (và Khoản 23 Điều 26) và Điều 27 Nghị định số 146/2026/NĐ-CP: Hành vi chế biến lâm sản không có hồ sơ hợp pháp hoặc có hồ sơ hợp pháp nhưng lâm sản không đúng nội dung hồ sơ bị xử phạt theo Điều 26 (phạt tiền, tịch thu tang vật, có thể đình chỉ hoạt động cơ sở 06–12 tháng từ khoản 5 trở lên); trường hợp lâm sản đã xác định có nguồn gốc hợp pháp nhưng hồ sơ không thực hiện đúng quy định bị xử phạt theo Điều 27."
  },
  {
    "id": "CBLS_017",
    "question": "Theo Khoản 1 Điều 67 Luật Lâm nghiệp năm 2017, cơ sở chế biến và hoạt động chế biến mẫu vật các loài thực vật rừng, động vật rừng phải tuân thủ quy định nào liên quan đến kiểm dịch và điều ước quốc tế?",
    "options": [
      "Phải tuân thủ quy định của Luật Lâm nghiệp, pháp luật về đầu tư, doanh nghiệp, bảo vệ môi trường, bảo vệ và kiểm dịch thực vật, thú y, chất lượng sản phẩm, hàng hóa, an toàn thực phẩm và phù hợp với Công ước CITES",
      "Chỉ cần tuân thủ quy định của Luật Lâm nghiệp và hợp đồng dân sự với người bán gỗ",
      "Chỉ phải tuân thủ pháp luật về bảo vệ và kiểm dịch thực vật khi chế biến gỗ tự nhiên trong nước",
      "Không bắt buộc tuân thủ quy định về CITES nếu sản phẩm chỉ tiêu thụ nội địa"
    ],
    "correct": "Phải tuân thủ quy định của Luật Lâm nghiệp, pháp luật về đầu tư, doanh nghiệp, bảo vệ môi trường, bảo vệ và kiểm dịch thực vật, thú y, chất lượng sản phẩm, hàng hóa, an toàn thực phẩm và phù hợp với Công ước CITES",
    "explanation": "Căn cứ Khoản 1 Điều 67 Luật Lâm nghiệp năm 2017 (VBHN số 68/VBHN-VPQH): Cơ sở chế biến và hoạt động chế biến mẫu vật các loài thực vật rừng, động vật rừng phải tuân thủ quy định của Luật Lâm nghiệp, pháp luật về đầu tư, doanh nghiệp, bảo vệ môi trường, bảo vệ và kiểm dịch thực vật, thú y, chất lượng sản phẩm, hàng hóa, an toàn thực phẩm và phù hợp với Công ước về buôn bán quốc tế các loài động vật, thực vật hoang dã nguy cấp (CITES)."
  },
  {
    "id": "CBLS_018",
    "question": "Cơ sở chế biến, mua bán gỗ rừng trồng có nguồn gốc hợp pháp của người dân nhưng không chấp hành đầy đủ các quy định pháp luật về hồ sơ lâm sản hợp pháp (như không lập Bảng kê lâm sản khi mua bán) thì bị xử phạt mức tiền nào đối với cá nhân theo Nghị định số 146/2026/NĐ-CP?",
    "options": [
      "Phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng về hành vi vi phạm quy định về quản lý hồ sơ lâm sản",
      "Được miễn xử phạt nếu gỗ rừng trồng đã khai thác đúng tuổi thành thục",
      "Chỉ bị phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng nếu người mua khiếu nại",
      "Chỉ bị lập biên bản nhắc nhở nếu gỗ rừng trồng mua bán trong cùng phạm vi địa bàn xã"
    ],
    "correct": "Phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng về hành vi vi phạm quy định về quản lý hồ sơ lâm sản",
    "explanation": "Căn cứ Điểm b Khoản 1 Điều 27 Nghị định số 146/2026/NĐ-CP: Chủ lâm sản vận chuyển, mua bán, cất giữ, chế biến gỗ rừng trồng, gỗ vườn nhà, cây trồng phân tán có nguồn gốc hợp pháp nhưng không chấp hành đầy đủ các quy định pháp luật về hồ sơ lâm sản hợp pháp bị phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng đối với cá nhân (tổ chức gấp 02 lần). Nếu không chứng minh được nguồn gốc hợp pháp thì bị xử phạt theo Điều 25 hoặc Điều 26."
  },
  {
    "id": "CBLS_019",
    "question": "Hành vi cố ý kê khai sai tên loài gỗ trong Bảng kê lâm sản (ví dụ trong Bảng kê ghi gỗ keo rừng trồng nhưng lâm sản thực tế tại xưởng là gỗ khai thác trái phép từ rừng tự nhiên) bị xử lý như thế nào?",
    "options": [
      "Bị xử phạt về hành vi tàng trữ, mua bán, chế biến lâm sản trái pháp luật (lâm sản không đúng với nội dung hồ sơ hợp pháp), tịch thu toàn bộ tang vật vi phạm hoặc truy cứu trách nhiệm hình sự nếu đủ định lượng",
      "Được coi là sai sót kỹ thuật thông thường và chỉ cần tự gạch sửa lại tên loài gỗ trên Bảng kê",
      "Chỉ bị phạt cảnh cáo nếu chủ cơ sở đồng ý nộp lại phần gỗ chênh lệch",
      "Chỉ bị xử phạt về hành vi không ghi chép đầy đủ vào sổ nhập, xuất lâm sản"
    ],
    "correct": "Bị xử phạt về hành vi tàng trữ, mua bán, chế biến lâm sản trái pháp luật (lâm sản không đúng với nội dung hồ sơ hợp pháp), tịch thu toàn bộ tang vật vi phạm hoặc truy cứu trách nhiệm hình sự nếu đủ định lượng",
    "explanation": "Căn cứ Điều 26 (và Điểm a Khoản 21 Điều 26) Nghị định số 146/2026/NĐ-CP và Điều 232 Bộ luật Hình sự: Hành vi tàng trữ, mua bán, chế biến lâm sản có hồ sơ hợp pháp nhưng lâm sản không đúng với nội dung hồ sơ đó bị xử phạt vi phạm hành chính về tàng trữ, mua bán, chế biến lâm sản trái pháp luật, bị tịch thu tang vật vi phạm (hoặc bị đình chỉ hoạt động cơ sở 06–12 tháng từ khoản 5 trở lên) và có thể bị truy cứu trách nhiệm hình sự theo Điều 232 BLHS nếu đạt định lượng."
  },
  {
    "id": "CBLS_020",
    "question": "Khi gỗ tròn tự nhiên khai thác tận thu từ công trình giải phóng mặt bằng được bán đấu giá tài sản công, hồ sơ lưu thông gồm những gì?",
    "options": [
      "Bản sao phương án xử lý tài sản được xác lập quyền sở hữu toàn dân được phê duyệt, Quyết định phê duyệt phương án xử lý tài sản và Bản chính Bảng kê lâm sản do cơ quan được giao xử lý tài sản lập",
      "Chỉ cần biên lai thu tiền của người trúng đấu giá",
      "Chỉ cần hợp đồng đặt cọc giữa bên mua và bên bán đấu giá",
      "Hóa đơn thương mại kèm Biên bản giao nhận tài sản và Giấy phép vận chuyển do Sở Tài chính cấp"
    ],
    "correct": "Bản sao phương án xử lý tài sản được xác lập quyền sở hữu toàn dân được phê duyệt, Quyết định phê duyệt phương án xử lý tài sản và Bản chính Bảng kê lâm sản do cơ quan được giao xử lý tài sản lập",
    "explanation": "Căn cứ Điều 10 và Khoản 5 Điều 11 Thông tư số 26/2025/TT-BNNMT (Văn bản hợp nhất số 04/VBHN-BNNMT): Hồ sơ gốc lâm sản có nguồn gốc sau xử lý tài sản công/tịch thu (và hồ sơ khi mua trực tiếp từ cơ quan được giao xử lý tài sản vận chuyển về kho hàng) gồm: Bản sao phương án xử lý tài sản được xác lập quyền sở hữu toàn dân do cấp có thẩm quyền phê duyệt, Quyết định phê duyệt phương án xử lý tài sản và Bản chính Bảng kê lâm sản do cơ quan được giao xử lý tài sản lập (khi cơ sở xuất bán hoặc vận chuyển các lần tiếp theo mới lập Bảng kê lâm sản mới và đề nghị Kiểm lâm sở tại xác nhận nếu thuộc Khoản 3 Điều 5)."
  },
  {
    "id": "CBLS_021",
    "question": "Theo Điểm a Khoản 2 Điều 68 Luật Lâm nghiệp năm 2017, cơ sở chế biến lâm sản có nghĩa vụ tuân thủ các quy định pháp luật nào sau đây?",
    "options": [
      "Tuân thủ quy định của pháp luật về đầu tư, doanh nghiệp, bảo vệ môi trường, lao động, tài chính; quy định về hồ sơ lâm sản hợp pháp và kiểm tra nguồn gốc lâm sản",
      "Chỉ cần tuân thủ quy định về nộp thuế môn bài và thỏa thuận dân sự với chủ rừng",
      "Được miễn nghĩa vụ về bảo vệ môi trường nếu cơ sở chế biến đặt xa khu dân cư",
      "Chỉ phải kiểm tra nguồn gốc lâm sản đối với gỗ tự nhiên, không áp dụng với gỗ rừng trồng"
    ],
    "correct": "Tuân thủ quy định của pháp luật về đầu tư, doanh nghiệp, bảo vệ môi trường, lao động, tài chính; quy định về hồ sơ lâm sản hợp pháp và kiểm tra nguồn gốc lâm sản",
    "explanation": "Căn cứ Điểm a Khoản 2 Điều 68 Luật Lâm nghiệp năm 2017 (VBHN số 68/VBHN-VPQH): Cơ sở chế biến lâm sản có nghĩa vụ tuân thủ quy định của pháp luật về đầu tư, doanh nghiệp, bảo vệ môi trường, lao động, tài chính; quy định về hồ sơ lâm sản hợp pháp và kiểm tra nguồn gốc lâm sản."
  },
  {
    "id": "CBLS_022",
    "question": "Khi vận chuyển gỗ tròn, gỗ xẻ mua bán trong nước trên đường bộ, chủ lâm sản hoặc người điều khiển phương tiện phải mang theo hồ sơ lâm sản nào (trừ trường hợp sau khai thác, nhập khẩu, mua từ Hội đồng đấu giá theo quy định riêng)?",
    "options": [
      "Bản chính Bảng kê lâm sản do chủ lâm sản bán lập (hoặc có xác nhận của cơ quan Kiểm lâm sở tại nếu thuộc đối tượng phải xác nhận tại Khoản 3 Điều 5) kèm bản sao hồ sơ mua bán, chuyển giao quyền sở hữu liền kề trước đó hoặc mã QR chứa đựng hồ sơ",
      "Chỉ cần mang theo sổ đăng kiểm xe ô tô và hợp đồng thuê vận tải",
      "Bắt buộc phải có Giấy phép lưu thông lâm sản đường bộ do Chi cục Kiểm lâm cấp",
      "Chỉ cần xuất trình hóa đơn giá trị gia tăng mà không cần Bảng kê lâm sản"
    ],
    "correct": "Bản chính Bảng kê lâm sản do chủ lâm sản bán lập (hoặc có xác nhận của cơ quan Kiểm lâm sở tại nếu thuộc đối tượng phải xác nhận tại Khoản 3 Điều 5) kèm bản sao hồ sơ mua bán, chuyển giao quyền sở hữu liền kề trước đó hoặc mã QR chứa đựng hồ sơ",
    "explanation": "Căn cứ Khoản 1, Khoản 2 Điều 11 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT) và Điểm c Khoản 1 Điều 27 Nghị định số 146/2026/NĐ-CP: Khi mua bán, chuyển giao quyền sở hữu, vận chuyển trong nước, hồ sơ lâm sản gồm bản chính Bảng kê lâm sản (có xác nhận của Kiểm lâm sở tại nếu thuộc đối tượng tại điểm a, b, c, d khoản 3 Điều 5; nếu không thuộc đối tượng phải xác nhận thì kèm bản sao hồ sơ mua bán, chuyển giao quyền sở hữu liền kề trước đó hoặc mã QR chứa đựng hồ sơ trên Bảng kê lâm sản)."
  },
  {
    "id": "CBLS_023",
    "question": "Theo Mục I.1 Phụ lục II ban hành kèm theo Nghị định số 102/2020/NĐ-CP (hợp nhất tại VBHN số 14/VBHN-BNNMT), để đáp ứng tiêu chí tuân thủ quy định của pháp luật trong việc thành lập doanh nghiệp chế biến, xuất khẩu gỗ (Doanh nghiệp Nhóm I), doanh nghiệp phải có tài liệu nào?",
    "options": [
      "Giấy chứng nhận đăng ký kinh doanh phù hợp với quy định pháp luật",
      "Chỉ cần đơn xin mở xưởng có xác nhận của Trưởng thôn",
      "Chỉ cần hợp đồng thuê mặt bằng xưởng cưa xẻ gỗ",
      "Giấy chứng nhận hội viên của Hiệp hội Gỗ địa phương"
    ],
    "correct": "Giấy chứng nhận đăng ký kinh doanh phù hợp với quy định pháp luật",
    "explanation": "Căn cứ Khoản 1 Điều 12 và Mục I.1 Phụ lục II Nghị định số 102/2020/NĐ-CP (được sửa đổi bởi Nghị định số 120/2024/NĐ-CP, hợp nhất tại VBHN số 14/VBHN-BNNMT): Tiêu chí tuân thủ quy định của pháp luật về thành lập doanh nghiệp đòi hỏi doanh nghiệp phải có Giấy chứng nhận đăng ký kinh doanh phù hợp với quy định pháp luật (cùng thời gian hoạt động ít nhất 01 năm kể từ ngày đăng ký thành lập doanh nghiệp)."
  },
  {
    "id": "CBLS_024",
    "question": "Cơ quan nào có thẩm quyền tiếp nhận đăng ký và thực hiện phân loại Doanh nghiệp trồng, khai thác và cung cấp gỗ rừng trồng, chế biến, nhập khẩu, xuất khẩu gỗ (Nhóm I, Nhóm II)?",
    "options": [
      "Cơ quan Kiểm lâm cấp tỉnh hoặc Sở Nông nghiệp và Môi trường ở địa phương không có cơ quan Kiểm lâm cấp tỉnh",
      "Ủy ban nhân dân cấp xã nơi doanh nghiệp đặt trụ sở",
      "Hiệp hội Gỗ và Lâm sản Việt Nam",
      "Ủy ban nhân dân cấp tỉnh phối hợp với Sở Công Thương"
    ],
    "correct": "Cơ quan Kiểm lâm cấp tỉnh hoặc Sở Nông nghiệp và Môi trường ở địa phương không có cơ quan Kiểm lâm cấp tỉnh",
    "explanation": "Căn cứ Khoản 4 Điều 11 và Khoản 2 Điều 13 Nghị định số 102/2020/NĐ-CP (được sửa đổi bởi Nghị định số 120/2024/NĐ-CP và Nghị định số 42/2026/NĐ-CP, hợp nhất tại VBHN số 14/VBHN-BNNMT): Cơ quan tiếp nhận đăng ký và thực hiện phân loại doanh nghiệp là Cơ quan Kiểm lâm cấp tỉnh hoặc Sở Nông nghiệp và Môi trường ở địa phương không có cơ quan Kiểm lâm cấp tỉnh nơi doanh nghiệp có trụ sở chính hoặc nơi có cơ sở chế biến gỗ của doanh nghiệp."
  },
  {
    "id": "CBLS_025",
    "question": "Khi lâm sản vận chuyển mà không thay đổi chủ sở hữu và không đổi khối lượng thì có được dùng chung 1 Bảng kê không?",
    "options": [
      "Được sử dụng cùng một Bảng kê lâm sản đi suốt tuyến đường vận chuyển",
      "Chỉ được dùng chung trong phạm vi một tỉnh; khi vận chuyển qua ranh giới tỉnh khác phải lập lại Bảng kê mới",
      "Cứ mỗi 10 km phải lập lại Bảng kê mới",
      "Không được phép dùng chung"
    ],
    "correct": "Được sử dụng cùng một Bảng kê lâm sản đi suốt tuyến đường vận chuyển",
    "explanation": "Căn cứ Khoản 2 Điều 5 Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT): Trường hợp lâm sản được vận chuyển mà không có thay đổi về chủ sở hữu và khối lượng, số lượng trong Bảng kê lâm sản thì được sử dụng cùng một Bảng kê lâm sản."
  },
  {
    "id": "CBLS_026",
    "question": "Chủ lâm sản chịu trách nhiệm như thế nào về những nội dung kê khai trong Bảng kê lâm sản?",
    "options": [
      "Không phải chịu trách nhiệm vì do lái xe khai hộ",
      "Chịu trách nhiệm hoàn toàn trước pháp luật về tính chính xác và tính hợp pháp của nội dung kê khai",
      "Nếu khai sai thì Kiểm lâm phải chịu trách nhiệm thay",
      "Chỉ chịu trách nhiệm về số lượng cây; trách nhiệm về chủng loại và khối lượng thuộc về cơ quan Kiểm lâm sở tại"
    ],
    "correct": "Chịu trách nhiệm hoàn toàn trước pháp luật về tính chính xác và tính hợp pháp của nội dung kê khai",
    "explanation": "Căn cứ Khoản 2 Điều 5 Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT): Chủ lâm sản chịu trách nhiệm trước pháp luật về tính hợp pháp và tính chính xác của những nội dung kê khai tại Bảng kê lâm sản."
  },
  {
    "id": "CBLS_027",
    "question": "Cơ sở cưa xẻ gỗ có trách nhiệm báo cáo tình hình nhập, xuất lâm sản định kỳ cho ai?",
    "options": [
      "Báo cáo định kỳ bằng văn bản cho cơ quan Kiểm lâm sở tại (Hạt Kiểm lâm)",
      "Báo cáo định kỳ hàng quý bằng văn bản cho Ủy ban nhân dân cấp xã nơi đặt cơ sở chế biến",
      "Chỉ báo cáo khi có Kiểm lâm đến kiểm tra",
      "Không phải báo cáo định kỳ"
    ],
    "correct": "Báo cáo định kỳ bằng văn bản cho cơ quan Kiểm lâm sở tại (Hạt Kiểm lâm)",
    "explanation": "Căn cứ Điểm c Khoản 7 Điều 32 Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT): Cơ sở cưa xẻ, chế biến gỗ có trách nhiệm báo cáo tình hình nhập, xuất lâm sản cho cơ quan Kiểm lâm sở tại theo Mẫu số 29 định kỳ hằng năm trước ngày 15 tháng 01."
  },
  {
    "id": "CBLS_028",
    "question": "Đối với lô gỗ nhập khẩu mua lại từ doanh nghiệp khác, cơ sở chế biến cần lưu giữ chứng từ gì?",
    "options": [
      "Bản chính Bảng kê lâm sản do doanh nghiệp bán lập (có xác nhận của Kiểm lâm sở tại nếu thuộc đối tượng phải xác nhận) kèm bản sao hồ sơ lâm sản nhập khẩu hoặc chuyển giao quyền sở hữu liền kề trước đó (hoặc mã QR)",
      "Chỉ cần tờ giấy ghi nợ tiền gỗ",
      "Hóa đơn GTGT kèm Bảng kê lâm sản có xác nhận của cơ quan Hải quan nơi làm thủ tục thông quan",
      "Không cần chứng từ gì nếu đã trả đủ tiền"
    ],
    "correct": "Bản chính Bảng kê lâm sản do doanh nghiệp bán lập (có xác nhận của Kiểm lâm sở tại nếu thuộc đối tượng phải xác nhận) kèm bản sao hồ sơ lâm sản nhập khẩu hoặc chuyển giao quyền sở hữu liền kề trước đó (hoặc mã QR)",
    "explanation": "Căn cứ Khoản 6 Điều 5, Điều 9, Khoản 1, Khoản 2 Điều 11 và Điểm b Khoản 1 Điều 13 Thông tư số 26/2025/TT-BNNMT (Văn bản hợp nhất số 04/VBHN-BNNMT): Khi mua lại gỗ nhập khẩu từ một doanh nghiệp khác trong nước, hồ sơ lâm sản lưu giữ gồm Bản chính Bảng kê lâm sản do chủ lâm sản bán lập (có xác nhận của cơ quan Kiểm lâm sở tại nếu thuộc đối tượng phải xác nhận tại Khoản 3 Điều 5) kèm theo bản sao hồ sơ lâm sản nhập khẩu/chuyển giao quyền sở hữu liền kề trước đó (hoặc mã QR chứa thông tin hồ sơ)."
  },
  {
    "id": "CBLS_029",
    "question": "Trường hợp nào doanh nghiệp chế biến, xuất khẩu gỗ bị xếp vào (hoặc chuyển loại sang) Doanh nghiệp Nhóm II theo Nghị định số 102/2020/NĐ-CP (hợp nhất tại VBHN số 14/VBHN-BNNMT)?",
    "options": [
      "Doanh nghiệp chưa đáp ứng đầy đủ các tiêu chí của Doanh nghiệp Nhóm I hoặc đang là Nhóm I nhưng bị xử lý hình sự theo Điều 232 BLHS hoặc xử phạt VPHC lâm nghiệp từ 25.000.000 đồng trở lên hoặc không tuân thủ nghĩa vụ báo cáo, lưu giữ hồ sơ",
      "Doanh nghiệp có quy mô chế biến dưới 500 m³ gỗ/năm và chưa xuất khẩu sản phẩm ra thị trường EU",
      "Doanh nghiệp có nhiều công nhân tay nghề cao",
      "Doanh nghiệp mở thêm kho chứa nguyên liệu gỗ rừng trồng hợp pháp"
    ],
    "correct": "Doanh nghiệp chưa đáp ứng đầy đủ các tiêu chí của Doanh nghiệp Nhóm I hoặc đang là Nhóm I nhưng bị xử lý hình sự theo Điều 232 BLHS hoặc xử phạt VPHC lâm nghiệp từ 25.000.000 đồng trở lên hoặc không tuân thủ nghĩa vụ báo cáo, lưu giữ hồ sơ",
    "explanation": "Căn cứ Khoản 2 Điều 12 và Khoản 4 Điều 13 Nghị định số 102/2020/NĐ-CP (hợp nhất tại VBHN số 14/VBHN-BNNMT): Doanh nghiệp Nhóm II là doanh nghiệp chưa đáp ứng một trong các tiêu chí tại khoản 1 Điều 12; doanh nghiệp Nhóm I bị chuyển loại sang Nhóm II nếu doanh nghiệp hoặc người đại diện hợp pháp bị xử lý hình sự theo Điều 232 BLHS, hoặc bị xử phạt VPHC về khai thác, phá rừng, vận chuyển, tàng trữ, mua bán, xuất nhập khẩu, chế biến lâm sản trái pháp luật từ 25.000.000 đồng trở lên, hoặc không tuân thủ điểm b, c khoản 1 Điều 12 hay không kê khai phân loại lại theo khoản 4a Điều 13."
  },
  {
    "id": "CBLS_030",
    "question": "Khi bán lẻ gỗ rừng trồng thông thường khai thác hợp pháp trong nước cho người dân làm nhà ở, cơ sở kinh doanh gỗ phải lập và giao hồ sơ lâm sản gì cho người mua?",
    "options": [
      "Bản chính Bảng kê lâm sản do bên bán lập (không bắt buộc xác nhận của Kiểm lâm, trừ trường hợp chủ lâm sản đề nghị) kèm bản sao hồ sơ mua bán, chuyển giao quyền sở hữu liền kề trước đó hoặc mã QR chứa đựng hồ sơ trên Bảng kê lâm sản",
      "Chỉ cần viết giấy tay biên nhận tiền không cần Bảng kê lâm sản",
      "Không cần giao bất kỳ giấy tờ gì vì người dân mua về dùng cho gia đình",
      "Chỉ cần xuất hóa đơn bán lẻ kèm phiếu xuất kho nội bộ mà không cần lập Bảng kê lâm sản"
    ],
    "correct": "Bản chính Bảng kê lâm sản do bên bán lập (không bắt buộc xác nhận của Kiểm lâm, trừ trường hợp chủ lâm sản đề nghị) kèm bản sao hồ sơ mua bán, chuyển giao quyền sở hữu liền kề trước đó hoặc mã QR chứa đựng hồ sơ trên Bảng kê lâm sản",
    "explanation": "Căn cứ Điểm đ Khoản 3, Khoản 4 Điều 5, Khoản 3 Điều 8 và Khoản 2 Điều 11 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Gỗ loài thông thường khai thác từ rừng sản xuất là rừng trồng trong nước không bắt buộc phải xác nhận Bảng kê lâm sản (trừ khi chủ lâm sản đề nghị); khi mua bán, chuyển giao quyền sở hữu trong nước, hồ sơ gồm bản chính Bảng kê lâm sản do chủ lâm sản bán lập kèm bản sao hồ sơ mua bán, chuyển giao quyền sở hữu liền kề trước đó hoặc mã QR chứa đựng hồ sơ trên Bảng kê lâm sản."
  },
  {
    "id": "CBLS_031",
    "question": "Theo Điểm a Khoản 7 Điều 5 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT), khi nộp hồ sơ đề nghị xác nhận Bảng kê lâm sản, nếu chủ lâm sản tạo mã phản hồi nhanh (QR) chứa đựng hồ sơ lâm sản trong Bảng kê lâm sản thì được giảm thủ tục nào?",
    "options": [
      "Không phải nộp các bản sao hồ sơ nguồn gốc quy định tại các điểm c, d, đ, e và g Khoản 6 Điều 5 (như bản sao phương án khai thác, hồ sơ nhập khẩu, hồ sơ sau xử lý tịch thu, Bảng kê lâm sản liền kề trước đó, hồ sơ nguồn gốc)",
      "Được miễn luôn việc lập Bản chính Đơn đề nghị xác nhận và Bản chính Bảng kê lâm sản",
      "Được miễn kiểm tra, xác minh nguồn gốc lâm sản trong mọi trường hợp",
      "Không cần xuất trình Sổ theo dõi nhập, xuất lâm sản khi xuất bán lâm sản"
    ],
    "correct": "Không phải nộp các bản sao hồ sơ nguồn gốc quy định tại các điểm c, d, đ, e và g Khoản 6 Điều 5 (như bản sao phương án khai thác, hồ sơ nhập khẩu, hồ sơ sau xử lý tịch thu, Bảng kê lâm sản liền kề trước đó, hồ sơ nguồn gốc)",
    "explanation": "Căn cứ Điểm a Khoản 7 Điều 5 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Chủ lâm sản có thể nộp hồ sơ trực tiếp, qua dịch vụ bưu chính hoặc qua môi trường điện tử; trường hợp chủ lâm sản tạo mã phản hồi nhanh (QR) chứa đựng hồ sơ lâm sản trong Bảng kê lâm sản thì không phải nộp các bản sao hồ sơ quy định tại các điểm c, điểm d, điểm đ, điểm e và điểm g khoản 6 Điều 5 Thông tư này."
  },
  {
    "id": "CBLS_032",
    "question": "Thủ tục đề nghị cấp giấy phép CITES xuất khẩu gỗ quý hiếm được nộp tại cơ quan nào?",
    "options": [
      "Cơ quan quản lý CITES Việt Nam (thuộc Cục Lâm nghiệp và Kiểm lâm)",
      "Ủy ban nhân dân cấp xã nơi đặt xưởng gỗ",
      "Hạt Kiểm lâm khu vực",
      "Chi cục Kiểm lâm cấp tỉnh nơi doanh nghiệp đăng ký trụ sở chính"
    ],
    "correct": "Cơ quan quản lý CITES Việt Nam (thuộc Cục Lâm nghiệp và Kiểm lâm)",
    "explanation": "Căn cứ Điều 28, Điều 29 và Điều 34 Thông tư số 85/2025/TT-BNNMT: Cơ quan có thẩm quyền cấp Giấy phép CITES xuất khẩu mẫu vật động vật, thực vật hoang dã nguy cấp là Cơ quan thẩm quyền quản lý CITES Việt Nam (thuộc Cục Lâm nghiệp và Kiểm lâm)."
  },
  {
    "id": "CBLS_033",
    "question": "Chủ cơ sở chế biến gỗ có nghĩa vụ gì khi cơ quan Kiểm lâm đến kiểm tra định kỳ hoặc đột xuất?",
    "options": [
      "Chỉ có nghĩa vụ xuất trình hồ sơ khi có văn bản thông báo trước ít nhất 05 ngày làm việc",
      "Xuất trình đầy đủ hồ sơ nguồn gốc lâm sản, sổ theo dõi và tạo điều kiện cho đoàn kiểm tra",
      "Chỉ tiếp đoàn kiểm tra nếu có báo trước 1 tháng",
      "Yêu cầu đoàn kiểm tra phải nộp phí kiểm tra"
    ],
    "correct": "Xuất trình đầy đủ hồ sơ nguồn gốc lâm sản, sổ theo dõi và tạo điều kiện cho đoàn kiểm tra",
    "explanation": "Căn cứ Điểm c Khoản 2 Điều 68 Luật Lâm nghiệp năm 2017 (VBHN số 68/VBHN-VPQH) (và Điểm b Khoản 2 Điều 71 đối với cơ sở thương mại lâm sản), Điểm e Khoản 8 Điều 16 và Điểm b, Điểm c Khoản 7 Điều 32 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Cơ sở chế biến lâm sản có nghĩa vụ chấp hành sự quản lý, kiểm tra, thanh tra của cơ quan nhà nước có thẩm quyền trong quá trình sản xuất; chấp hành yêu cầu kiểm tra của Tổ kiểm tra, xuất trình ngay hồ sơ lâm sản, cập nhật và xuất trình Sổ theo dõi nhập, xuất lâm sản (đối với tổ chức, hộ kinh doanh) và chịu trách nhiệm về tính chính xác của thông tin, hồ sơ."
  },
  {
    "id": "CBLS_034",
    "question": "Theo Mục I.3 Phụ lục II Nghị định số 102/2020/NĐ-CP (hợp nhất tại VBHN số 14/VBHN-BNNMT), để đáp ứng tiêu chí tuân thủ pháp luật về phòng cháy, chữa cháy khi phân loại Doanh nghiệp Nhóm I, doanh nghiệp chế biến, xuất khẩu gỗ phải có tài liệu nào?",
    "options": [
      "Tài liệu chứng minh đã tuân thủ quy định phòng cháy, chữa cháy theo quy định của pháp luật về phòng cháy, chữa cháy",
      "Chỉ cần dán khẩu hiệu phòng cháy trên tường nhà xưởng",
      "Chỉ cần ký hợp đồng bảo hiểm tài sản tự nguyện mà không cần tài liệu tuân thủ PCCC",
      "Giấy xác nhận của Trưởng thôn về việc xưởng gỗ chưa từng để xảy ra cháy"
    ],
    "correct": "Tài liệu chứng minh đã tuân thủ quy định phòng cháy, chữa cháy theo quy định của pháp luật về phòng cháy, chữa cháy",
    "explanation": "Căn cứ Điểm a, Điểm đ Khoản 1 Điều 12 và Mục I.3 Phụ lục II Nghị định số 102/2020/NĐ-CP (được sửa đổi bởi Nghị định số 120/2024/NĐ-CP, hợp nhất tại VBHN số 14/VBHN-BNNMT): Trong nhóm tiêu chí tuân thủ pháp luật về thành lập và hoạt động để phân loại Doanh nghiệp Nhóm I, doanh nghiệp chế biến, xuất khẩu gỗ phải có tài liệu chứng minh đã tuân thủ quy định phòng cháy, chữa cháy theo quy định của pháp luật về phòng cháy, chữa cháy."
  },
  {
    "id": "CBLS_035",
    "question": "Theo Khoản 2 Điều 9 Luật Lâm nghiệp năm 2017 và Nghị định số 146/2026/NĐ-CP, việc cơ sở hoặc cá nhân tự ý mang, đổ chất thải vào rừng bị pháp luật quy định thế nào?",
    "options": [
      "Là hành vi bị nghiêm cấm trong hoạt động lâm nghiệp; bị xử phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng nếu mang chất thải trên diện tích mới trồng rừng, đang trong thời kỳ chăm sóc đối với rừng sản xuất, rừng phòng hộ, phân khu phục hồi sinh thái rừng đặc dụng; hoặc từ 3.000.000 đồng đến 5.000.000 đồng nếu đưa chất thải vào phân khu bảo vệ nghiêm ngặt của rừng đặc dụng, rừng mới trồng đang trong thời kỳ chăm sóc đối với rừng đặc dụng",
      "Được phép đổ chất thải gỗ và vỏ cây vào rừng sản xuất để làm phân bón tự nhiên",
      "Chỉ bị nhắc nhở nếu lượng chất thải chưa gây cháy rừng",
      "Chỉ bị xử lý nếu chất thải là hóa chất độc hại trong danh mục cấm tuyệt đối"
    ],
    "correct": "Là hành vi bị nghiêm cấm trong hoạt động lâm nghiệp; bị xử phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng nếu mang chất thải trên diện tích mới trồng rừng, đang trong thời kỳ chăm sóc đối với rừng sản xuất, rừng phòng hộ, phân khu phục hồi sinh thái rừng đặc dụng; hoặc từ 3.000.000 đồng đến 5.000.000 đồng nếu đưa chất thải vào phân khu bảo vệ nghiêm ngặt của rừng đặc dụng, rừng mới trồng đang trong thời kỳ chăm sóc đối với rừng đặc dụng",
    "explanation": "Căn cứ Khoản 2 Điều 9 Luật Lâm nghiệp năm 2017 (VBHN số 68/VBHN-VPQH) và Điểm e Khoản 2, Điểm e Khoản 3, Điểm b Khoản 9 Điều 19 Nghị định số 146/2026/NĐ-CP: Luật Lâm nghiệp nghiêm cấm đưa chất thải, hóa chất độc, chất nổ, chất cháy, chất dễ cháy vào rừng trái quy định của pháp luật. Theo Điều 19 Nghị định số 146/2026/NĐ-CP (mức phạt đối với cá nhân): Điểm e Khoản 2 phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng đối với hành vi mang chất thải trên diện tích mới trồng rừng, đang trong thời kỳ chăm sóc đối với rừng sản xuất, rừng phòng hộ, phân khu phục hồi sinh thái rừng đặc dụng; Điểm e Khoản 3 phạt tiền từ 3.000.000 đồng đến 5.000.000 đồng đối với hành vi đưa chất thải vào phân khu bảo vệ nghiêm ngặt của rừng đặc dụng, rừng mới trồng đang trong thời kỳ chăm sóc đối với rừng đặc dụng; đồng thời buộc đưa chất thải ra khỏi rừng theo Điểm b Khoản 9."
  },
  {
    "id": "CBLS_036",
    "question": "Khi phát hiện gỗ mua vào có dấu hiệu là gỗ khai thác trái pháp luật từ rừng tự nhiên, cách xử sự phù hợp nhất của chủ xưởng gỗ là gì?",
    "options": [
      "Nhanh chóng cưa xẻ nhỏ để phi tang tang vật",
      "Từ chối thu mua và báo ngay cho cơ quan Kiểm lâm hoặc Công an sở tại để xử lý",
      "Lập biên bản tạm giữ gỗ và yêu cầu người bán phải bổ sung hồ sơ chứng minh trong thời hạn 15 ngày",
      "Đem đi bán lại cho xưởng gỗ khác"
    ],
    "correct": "Từ chối thu mua và báo ngay cho cơ quan Kiểm lâm hoặc Công an sở tại để xử lý",
    "explanation": "Căn cứ Khoản 6, Khoản 9 Điều 9 Luật Lâm nghiệp năm 2017 (VBHN số 68/VBHN-VPQH) và Điều 26 Nghị định số 146/2026/NĐ-CP: Pháp luật nghiêm cấm hành vi tàng trữ, mua bán, chế biến lâm sản và sử dụng nguyên liệu trong chế biến lâm sản trái quy định của pháp luật; hành vi tàng trữ, mua bán, chế biến lâm sản không có hồ sơ hợp pháp bị xử phạt theo Điều 26 Nghị định số 146/2026/NĐ-CP. Chủ xưởng cần từ chối thu mua để không vi phạm các điều cấm nêu trên; việc thông báo cho cơ quan Kiểm lâm hoặc Công an sở tại là cách xử sự phù hợp được khuyến khích nhằm kịp thời ngăn chặn hành vi vi phạm, không phải nghĩa vụ pháp lý bắt buộc có chế tài riêng đối với chủ cơ sở trong các văn bản nêu trên."
  },
  {
    "id": "CBLS_037",
    "question": "Người điều khiển, chủ phương tiện vận tải cần kiểm tra gì trước khi nhận chở một chuyến gỗ trên đường để tránh bị xử phạt theo Nghị định số 146/2026/NĐ-CP?",
    "options": [
      "Chỉ cần quan tâm người thuê trả bao nhiêu tiền cước",
      "Kiểm tra sự phù hợp của Bảng kê lâm sản và hồ sơ nguồn gốc lâm sản kèm theo đối với số lượng, chủng loại gỗ thực tế xếp lên xe",
      "Cứ chở bừa, bị bắt thì đổ hết trách nhiệm cho chủ hàng",
      "Chỉ cần kiểm tra hợp đồng vận chuyển và phiếu điều xe nội bộ"
    ],
    "correct": "Kiểm tra sự phù hợp của Bảng kê lâm sản và hồ sơ nguồn gốc lâm sản kèm theo đối với số lượng, chủng loại gỗ thực tế xếp lên xe",
    "explanation": "Căn cứ Điều 25, Khoản 26 Điều 25 và Điểm c Khoản 1 Điều 27 Nghị định số 146/2026/NĐ-CP: Hành vi vận chuyển lâm sản không có hồ sơ hợp pháp hoặc hồ sơ không phù hợp với lâm sản thực tế trên xe bị xử phạt nặng và có thể bị tịch thu phương tiện (chủ phương tiện cố ý cho sử dụng phương tiện chở lâm sản trái phép cũng bị xử phạt như người vận chuyển); trường hợp có nguồn gốc hợp pháp nhưng không xuất trình được hồ sơ tại thời điểm kiểm tra bị xử phạt theo Điều 27."
  },
  {
    "id": "CBLS_038",
    "question": "Theo Mục I.2 Phụ lục II Nghị định số 102/2020/NĐ-CP (hợp nhất tại VBHN số 14/VBHN-BNNMT), để đáp ứng tiêu chí tuân thủ pháp luật về môi trường trong phân loại Doanh nghiệp Nhóm I, cơ sở chế biến gỗ phải có tài liệu nào (tùy theo quy mô, công suất hoạt động)?",
    "options": [
      "Quyết định phê duyệt kết quả thẩm định báo cáo đánh giá tác động môi trường (nếu có); Giấy phép môi trường hoặc đăng ký môi trường (nếu có) hoặc tài liệu chứng minh tuân thủ quy định của pháp luật về môi trường",
      "Chỉ cần nộp phí vệ sinh rác thải sinh hoạt hàng tháng cho Ủy ban nhân dân cấp xã",
      "Chỉ cần lắp đặt quạt thông gió tự nhiên trong xưởng mà không cần hồ sơ môi trường",
      "Giấy xác nhận của hàng xóm xung quanh về việc xưởng gỗ ít gây bụi"
    ],
    "correct": "Quyết định phê duyệt kết quả thẩm định báo cáo đánh giá tác động môi trường (nếu có); Giấy phép môi trường hoặc đăng ký môi trường (nếu có) hoặc tài liệu chứng minh tuân thủ quy định của pháp luật về môi trường",
    "explanation": "Căn cứ Khoản 1 Điều 12 và Mục I.2 Phụ lục II Nghị định số 102/2020/NĐ-CP (sửa đổi bởi Nghị định số 120/2024/NĐ-CP, hợp nhất tại VBHN số 14/VBHN-BNNMT): Tuân thủ pháp luật về môi trường đòi hỏi doanh nghiệp phải có Quyết định phê duyệt kết quả thẩm định báo cáo đánh giá tác động môi trường (nếu có) và Giấy phép môi trường hoặc đăng ký môi trường (nếu có) hoặc tài liệu chứng minh tuân thủ pháp luật về môi trường tùy theo quy mô, công suất hoạt động và ngành nghề kinh doanh."
  },
  {
    "id": "CBLS_039",
    "question": "Việc cất giữ gỗ trong xưởng mộc, cơ sở chế biến có bắt buộc phải lưu giữ hồ sơ nguồn gốc hợp pháp không?",
    "options": [
      "Chỉ bắt buộc có hồ sơ đối với gỗ có nguồn gốc tự nhiên; gỗ rừng trồng trong xưởng được miễn hoàn toàn hồ sơ",
      "Bắt buộc phải có và lưu giữ đầy đủ hồ sơ lâm sản hợp pháp chứng minh nguồn gốc của số gỗ đang cất giữ",
      "Chỉ cần người bán gỗ viết cam đoan miệng",
      "Chỉ cần xưởng gỗ có treo biển hiệu"
    ],
    "correct": "Bắt buộc phải có và lưu giữ đầy đủ hồ sơ lâm sản hợp pháp chứng minh nguồn gốc của số gỗ đang cất giữ",
    "explanation": "Căn cứ Điều 13 (Khoản 1) và Điểm a Khoản 7 Điều 32 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Chủ lâm sản tại cơ sở chế biến, kinh doanh, cất giữ gỗ có trách nhiệm lưu giữ đầy đủ hồ sơ lâm sản tương ứng với từng giai đoạn của chuỗi cung ứng (sau khai thác, nhập khẩu, mua bán chuyển giao quyền sở hữu...) và ghi chép đầy đủ vào Sổ theo dõi nhập, xuất lâm sản (đối với tổ chức, hộ kinh doanh)."
  },
  {
    "id": "CBLS_040",
    "question": "Khi cưa xẻ gia công gỗ thuê cho người dân làm nhà, chủ xưởng cưa cần yêu cầu và kiểm tra giấy tờ gì để tránh vi phạm pháp luật lâm nghiệp?",
    "options": [
      "Không cần kiểm tra gì",
      "Hồ sơ lâm sản hợp pháp của người thuê cưa (Bảng kê lâm sản và tài liệu chứng minh nguồn gốc gỗ hợp pháp theo quy định)",
      "Chỉ cần kiểm tra tiền công trả trước",
      "Bắt buộc phải có Giấy phép gia công cưa xẻ gỗ do Ủy ban nhân dân cấp xã cấp trước khi nhận gỗ vào xưởng"
    ],
    "correct": "Hồ sơ lâm sản hợp pháp của người thuê cưa (Bảng kê lâm sản và tài liệu chứng minh nguồn gốc gỗ hợp pháp theo quy định)",
    "explanation": "Căn cứ Điều 67, Khoản 2 Điều 68 Luật Lâm nghiệp năm 2017; Điều 13 Thông tư số 26/2025/TT-BNNMT và Điều 26, Điều 27 Nghị định số 146/2026/NĐ-CP: Cơ sở chế biến gỗ có nghĩa vụ tuân thủ quy định về hồ sơ lâm sản hợp pháp và kiểm tra nguồn gốc lâm sản; hành vi chế biến lâm sản không có hồ sơ hợp pháp bị xử phạt theo Điều 26 (hoặc theo Điều 27 nếu có nguồn gốc hợp pháp nhưng hồ sơ chưa đúng quy định)."
  },
  {
    "id": "CBLS_041",
    "question": "Theo Khoản 1 Điều 9 và Điểm b Khoản 2 Điều 10 Nghị định số 102/2020/NĐ-CP (hợp nhất tại VBHN số 14/VBHN-BNNMT), khi xuất khẩu lô hàng gỗ không thuộc Phụ lục CITES sang thị trường ngoài EU, chủ gỗ KHÔNG PHẢI là doanh nghiệp Nhóm I phải xuất trình chứng từ gì cho cơ quan Hải quan?",
    "options": [
      "Bản chính bảng kê gỗ xuất khẩu do chủ gỗ lập có xác nhận của cơ quan Kiểm lâm sở tại",
      "Bản chính bảng kê gỗ xuất khẩu do chủ gỗ tự lập mà không cần xác nhận của cơ quan Kiểm lâm sở tại",
      "Chỉ cần Giấy phép FLEGT hoặc Giấy chứng nhận hội viên Hiệp hội Gỗ",
      "Chỉ cần Tờ khai hải quan điện tử và hợp đồng ngoại thương"
    ],
    "correct": "Bản chính bảng kê gỗ xuất khẩu do chủ gỗ lập có xác nhận của cơ quan Kiểm lâm sở tại",
    "explanation": "Căn cứ Khoản 1 Điều 9 và Điểm b Khoản 2 Điều 10 Nghị định số 102/2020/NĐ-CP (được sửa đổi bởi Nghị định số 120/2024/NĐ-CP, hợp nhất tại VBHN số 14/VBHN-BNNMT): Khi xuất khẩu gỗ không thuộc Phụ lục CITES sang thị trường ngoài EU, doanh nghiệp Nhóm I chỉ xuất trình Bản chính bảng kê gỗ xuất khẩu do chủ gỗ lập; trường hợp chủ gỗ không phải là doanh nghiệp Nhóm I thì bắt buộc phải có Bản chính bảng kê gỗ xuất khẩu do chủ gỗ lập có xác nhận của cơ quan Kiểm lâm sở tại (sau khi kiểm tra thực tế 20% lô hàng theo Điều 9)."
  },
  {
    "id": "CBLS_042",
    "question": "Theo Điểm c Khoản 4 Điều 19 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT), trường hợp doanh nghiệp chế biến, xuất khẩu gỗ đã phân loại nhưng có thay đổi loại hình và tên gọi thì doanh nghiệp phải thực hiện thủ tục gì?",
    "options": [
      "Thực hiện kê khai phân loại doanh nghiệp lại như quy định tại Điều 17 Thông tư số 26/2025/TT-BNNMT",
      "Tự động giữ nguyên kết quả phân loại cũ cho đến hết chu kỳ 05 năm mà không cần kê khai lại",
      "Chỉ cần gửi thông báo bằng miệng cho Kiểm lâm địa bàn",
      "Nộp hồ sơ đề nghị phân loại lại tại Ủy ban nhân dân cấp xã"
    ],
    "correct": "Thực hiện kê khai phân loại doanh nghiệp lại như quy định tại Điều 17 Thông tư số 26/2025/TT-BNNMT",
    "explanation": "Căn cứ Điểm c Khoản 4 Điều 19 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Trường hợp doanh nghiệp thay đổi loại hình và tên gọi thì doanh nghiệp thực hiện kê khai phân loại doanh nghiệp lại như quy định tại Điều 17 Thông tư này với cơ quan tiếp nhận (Cơ quan Kiểm lâm cấp tỉnh hoặc Sở Nông nghiệp và Môi trường ở địa phương không có cơ quan Kiểm lâm cấp tỉnh)."
  },
  {
    "id": "CBLS_043",
    "question": "Theo Mục I.4 Phụ lục II Nghị định số 102/2020/NĐ-CP (hợp nhất tại VBHN số 14/VBHN-BNNMT), để đáp ứng tiêu chí tuân thủ pháp luật về lao động trong phân loại Doanh nghiệp Nhóm I, doanh nghiệp chế biến gỗ phải bảo đảm các điều kiện nào sau đây?",
    "options": [
      "Có kế hoạch vệ sinh an toàn lao động; người lao động có tên trong bảng lương; niêm yết công khai thông tin đóng bảo hiểm xã hội và người lao động là thành viên tổ chức đại diện người lao động tại cơ sở",
      "Chỉ cần trả công lao động theo ngày bằng tiền mặt không cần lập bảng lương",
      "Chỉ cần trang bị mũ bảo hộ lao động mà không cần kế hoạch vệ sinh an toàn lao động",
      "Không bắt buộc thực hiện nghĩa vụ về bảo hiểm xã hội nếu là doanh nghiệp tư nhân quy mô vừa"
    ],
    "correct": "Có kế hoạch vệ sinh an toàn lao động; người lao động có tên trong bảng lương; niêm yết công khai thông tin đóng bảo hiểm xã hội và người lao động là thành viên tổ chức đại diện người lao động tại cơ sở",
    "explanation": "Căn cứ Khoản 1 Điều 12 và Điểm b, c, d, đ Mục I.4 Phụ lục II Nghị định số 102/2020/NĐ-CP (sửa đổi bởi Nghị định số 120/2024/NĐ-CP, hợp nhất tại VBHN số 14/VBHN-BNNMT): Tiêu chí tuân thủ pháp luật về thuế, lao động đối với Doanh nghiệp Nhóm I gồm: không vi phạm thuế bị công khai; có kế hoạch vệ sinh an toàn lao động; người lao động có tên trong bảng lương; niêm yết công khai thông tin đóng bảo hiểm xã hội và là thành viên tổ chức đại diện người lao động tại cơ sở."
  },
  {
    "id": "CBLS_044",
    "question": "Theo Khoản 4 Điều 47 Nghị định số 156/2018/NĐ-CP (hợp nhất tại VBHN số 13/VBHN-BNNMT), việc sử dụng lửa tại các cơ sở, công trình, công trường và nhà ở được phép bố trí ở trong rừng phải bảo đảm yêu cầu gì?",
    "options": [
      "Phải bảo đảm không để cháy lan vào rừng; sau khi sử dụng lửa phải dập tắt hết tàn lửa",
      "Được sử dụng lửa tự do nếu bố trí trong khoảng sân đất trống rộng từ 02 mét trở lên",
      "Chỉ cần bố trí người trông coi vào mùa khô, mùa mưa không cần dập tắt tàn lửa",
      "Chỉ bị xử lý khi lửa đã gây thiệt hại từ 01 héc-ta rừng trở lên"
    ],
    "correct": "Phải bảo đảm không để cháy lan vào rừng; sau khi sử dụng lửa phải dập tắt hết tàn lửa",
    "explanation": "Căn cứ Khoản 4 Điều 47 Nghị định số 156/2018/NĐ-CP (hợp nhất tại VBHN số 13/VBHN-BNNMT) và Điểm g Khoản 4 Điều 19 Nghị định số 146/2026/NĐ-CP: Sử dụng lửa ở những cơ sở, công trình, công trường và nhà ở được phép bố trí ở trong rừng phải bảo đảm không để cháy lan vào rừng; sau khi sử dụng lửa phải dập tắt hết tàn lửa; hành vi không bảo đảm an toàn PCCC rừng khi sử dụng nguồn lửa, nguồn nhiệt tại các cơ sở, công trình này bị phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng."
  },
  {
    "id": "CBLS_045",
    "question": "Đối với gỗ thuộc trường hợp phải đánh số hiệu đầu lóng, khúc, hộp, thanh, tấm gỗ theo Khoản 7 Điều 4 Thông tư số 26/2025/TT-BNNMT, việc đánh số hiệu gỗ thực hiện để bảo đảm yêu cầu gì?",
    "options": [
      "Chỉ nhằm mục đích tính thuế tài nguyên lâm sản đối với cơ sở kinh doanh thương mại",
      "Định danh từng lóng, khúc, hộp gỗ bằng chữ Ả Rập với sơn khác màu gỗ ở mặt cắt ngang hai đầu, phù hợp với số hiệu trong bảng kê chi tiết kèm theo Bảng kê lâm sản để quản lý, kiểm tra nguồn gốc",
      "Làm giảm giá bán của khúc gỗ",
      "Không có tác dụng pháp lý trong truy xuất nguồn gốc"
    ],
    "correct": "Định danh từng lóng, khúc, hộp gỗ bằng chữ Ả Rập với sơn khác màu gỗ ở mặt cắt ngang hai đầu, phù hợp với số hiệu trong bảng kê chi tiết kèm theo Bảng kê lâm sản để quản lý, kiểm tra nguồn gốc",
    "explanation": "Căn cứ Khoản 7 Điều 4 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Sau khi đo đếm, xác định khối lượng, chủ lâm sản hoặc cơ quan chức năng phải đánh số hiệu bằng chữ Ả Rập vào mặt cắt ngang hai đầu lóng gỗ, hộp gỗ bằng sơn có màu khác màu gỗ và bảo đảm số hiệu gỗ phù hợp với số hiệu trong bảng kê chi tiết kèm theo Bảng kê lâm sản."
  },
  {
    "id": "CBLS_046",
    "question": "Theo Luật Lâm nghiệp năm 2017, cơ sở chế biến, thương mại lâm sản hoạt động hợp pháp và sử dụng nguồn gỗ có đầy đủ hồ sơ lâm sản hợp pháp có quyền nào sau đây?",
    "options": [
      "Được sản xuất, kinh doanh những mặt hàng lâm sản Nhà nước không cấm; được Nhà nước bảo đảm quyền và lợi ích hợp pháp; hỗ trợ liên kết chuỗi sản xuất, chế biến, kinh doanh",
      "Bị Kiểm lâm xử phạt tương tự cơ sở sử dụng gỗ không rõ nguồn gốc",
      "Không được phép bán lâm sản hợp pháp ra ngoài phạm vi cấp tỉnh",
      "Được miễn hoàn toàn việc kiểm tra, thanh tra chuyên ngành của cơ quan nhà nước"
    ],
    "correct": "Được sản xuất, kinh doanh những mặt hàng lâm sản Nhà nước không cấm; được Nhà nước bảo đảm quyền và lợi ích hợp pháp; hỗ trợ liên kết chuỗi sản xuất, chế biến, kinh doanh",
    "explanation": "Căn cứ Khoản 1 Điều 68 và Khoản 1 Điều 71 Luật Lâm nghiệp năm 2017 (VBHN số 68/VBHN-VPQH): Cơ sở chế biến, thương mại lâm sản có quyền sản xuất, kinh doanh những mặt hàng lâm sản Nhà nước không cấm; được Nhà nước bảo đảm quyền và lợi ích hợp pháp; được hỗ trợ liên kết chuỗi sản xuất, chế biến, kinh doanh và áp dụng các chính sách hỗ trợ theo quy định."
  },
  {
    "id": "CBLS_047",
    "question": "Hành vi nào sau đây bị coi là 'Vận chuyển lâm sản trái pháp luật' theo Nghị định số 146/2026/NĐ-CP?",
    "options": [
      "Chở gỗ có Bảng kê lâm sản hợp pháp đầy đủ",
      "Vận chuyển gỗ, lâm sản mà không có hồ sơ hợp pháp hoặc có hồ sơ hợp pháp nhưng lâm sản thực tế vận chuyển không phù hợp với hồ sơ đó",
      "Chở sản phẩm bàn ghế gỗ hoàn chỉnh có Bảng kê lâm sản do chủ lâm sản lập đúng quy định",
      "Vận chuyển lâm sản có Bảng kê lâm sản hợp lệ nhưng đến nơi giao hàng chậm giờ so với dự kiến"
    ],
    "correct": "Vận chuyển gỗ, lâm sản mà không có hồ sơ hợp pháp hoặc có hồ sơ hợp pháp nhưng lâm sản thực tế vận chuyển không phù hợp với hồ sơ đó",
    "explanation": "Căn cứ Điều 25 Nghị định số 146/2026/NĐ-CP: Hành vi vận chuyển lâm sản (tính từ thời điểm lâm sản đã được xếp lên phương tiện vận chuyển) không có hồ sơ hợp pháp hoặc có hồ sơ hợp pháp nhưng lâm sản thực tế vận chuyển không phù hợp với hồ sơ đó là hành vi vận chuyển lâm sản trái pháp luật."
  },
  {
    "id": "CBLS_048",
    "question": "Hành vi 'quay vòng hồ sơ' (dùng 1 bộ Bảng kê lâm sản cũ để hợp thức hóa việc chở gỗ lậu nhiều chuyến) bị xử lý như thế nào theo Nghị định số 146/2026/NĐ-CP?",
    "options": [
      "Chỉ bị xử phạt về hành vi không bảo quản hồ sơ và buộc nộp lại lệ phí xác nhận",
      "Bị xử phạt về hành vi vận chuyển lâm sản trái pháp luật (tịch thu tang vật, nộp lại số lợi bất hợp pháp và tịch thu phương tiện cơ giới nếu vi phạm nhiều lần, tái phạm hoặc đạt ngưỡng khối lượng, trị giá quy định)",
      "Chỉ bị phạt nộp lệ phí cấp lại Bảng kê lâm sản mới",
      "Không vi phạm nếu Bảng kê lâm sản cũ lập chưa quá 01 năm"
    ],
    "correct": "Bị xử phạt về hành vi vận chuyển lâm sản trái pháp luật (tịch thu tang vật, nộp lại số lợi bất hợp pháp và tịch thu phương tiện cơ giới nếu vi phạm nhiều lần, tái phạm hoặc đạt ngưỡng khối lượng, trị giá quy định)",
    "explanation": "Căn cứ Điều 25, Điểm a, c Khoản 21 và Điểm b Khoản 22 Điều 25 Nghị định số 146/2026/NĐ-CP: Lâm sản thực tế vận chuyển không đúng hồ sơ hợp pháp (dùng hồ sơ cũ quay vòng chở gỗ lậu) là hành vi vận chuyển lâm sản trái pháp luật; người vi phạm bị phạt tiền, tịch thu tang vật, buộc nộp lại số lợi bất hợp pháp và bị tịch thu phương tiện cơ giới nếu vi phạm nhiều lần, tái phạm, có tổ chức hoặc đạt ngưỡng khối lượng/trị giá quy định (nếu đủ định lượng thì truy cứu theo Điều 232 BLHS)."
  },
  {
    "id": "CBLS_049",
    "question": "Hành vi cất giấu gỗ lậu dưới thùng xe tải rồi phủ rau củ quả hoặc cát đá lên trên nhằm trốn tránh, che giấu khi bị Kiểm lâm kiểm tra bị coi là gì theo Luật Xử lý vi phạm hành chính?",
    "options": [
      "Tình tiết tăng nặng: sau khi vi phạm đã có hành vi trốn tránh, che giấu vi phạm hành chính",
      "Hành vi vi phạm quy tắc xếp dỡ hàng hóa trên thùng xe ô tô tải",
      "Hành vi hoàn toàn bình thường không bị xem xét tăng nặng",
      "Được giảm nhẹ mức phạt vì có chở kèm hàng nông sản"
    ],
    "correct": "Tình tiết tăng nặng: sau khi vi phạm đã có hành vi trốn tránh, che giấu vi phạm hành chính",
    "explanation": "Căn cứ Điểm k Khoản 1 Điều 10 Luật Xử lý vi phạm hành chính (VBHN số 90/VBHN-VPQH): Hành vi 'Sau khi vi phạm đã có hành vi trốn tránh, che giấu vi phạm hành chính' là một trong các tình tiết tăng nặng khi xem xét quyết định xử phạt vi phạm hành chính."
  },
  {
    "id": "CBLS_050",
    "question": "Hành vi cưa xẻ gỗ tròn có nguồn gốc từ việc chặt trộm trong rừng đặc dụng tại xưởng gỗ bị xử lý thế nào?",
    "options": [
      "Chỉ phạt người đi chặt trộm, chủ xưởng xẻ không bị sao",
      "Xử phạt hành vi chế biến lâm sản trái pháp luật, tịch thu toàn bộ gỗ và có thể bị đình chỉ hoạt động xưởng",
      "Được miễn phạt nếu xẻ gỗ vào ban ngày",
      "Chỉ bị xử phạt cảnh cáo nếu chủ xưởng chứng minh được việc cưa xẻ chỉ nhằm mục đích lấy tiền công gia công"
    ],
    "correct": "Xử phạt hành vi chế biến lâm sản trái pháp luật, tịch thu toàn bộ gỗ và có thể bị đình chỉ hoạt động xưởng",
    "explanation": "Căn cứ Điều 26 (Điểm a, Điểm b Khoản 21) Nghị định số 146/2026/NĐ-CP và Điều 232 Bộ luật Hình sự: Chế biến lâm sản không có hồ sơ hợp pháp bị phạt tiền, tịch thu tang vật vi phạm và bị đình chỉ hoạt động cơ sở chế biến lâm sản từ 06 tháng đến 12 tháng nếu thuộc các trường hợp từ Khoản 5 đến Khoản 20 Điều 26 (hoặc bị truy cứu trách nhiệm hình sự nếu đủ định lượng theo Điều 232 BLHS)."
  },
  {
    "id": "CBLS_051",
    "question": "Theo Điểm a Khoản 1 Điều 18 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT), trường hợp tài liệu kê khai đăng ký phân loại doanh nghiệp có dấu hiệu sửa chữa, tẩy xóa, làm giả hoặc nội dung mâu thuẫn, không thống nhất thì cơ quan tiếp nhận thực hiện biện pháp gì?",
    "options": [
      "Tổ chức xác minh thông tin kê khai của doanh nghiệp theo trình tự quy định",
      "Cho phép doanh nghiệp tự ký nháy lên chỗ tẩy xóa và xếp ngay vào Doanh nghiệp Nhóm I",
      "Bỏ qua dấu hiệu sửa chữa nếu doanh nghiệp đã hoạt động trên 01 năm",
      "Yêu cầu Ủy ban nhân dân cấp xã xác nhận lại toàn bộ tài liệu kê khai"
    ],
    "correct": "Tổ chức xác minh thông tin kê khai của doanh nghiệp theo trình tự quy định",
    "explanation": "Căn cứ Điểm a Khoản 1 Điều 18 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Các trường hợp phải xác minh thông tin đăng ký phân loại doanh nghiệp gồm: tài liệu kê khai của doanh nghiệp có dấu hiệu sửa chữa, tẩy xóa, làm giả; nội dung tài liệu kê khai mâu thuẫn, không thống nhất; hoặc có thông tin về việc doanh nghiệp kê khai không trung thực một trong các tiêu chí phân loại doanh nghiệp."
  },
  {
    "id": "CBLS_052",
    "question": "Hành vi thu mua gỗ quý hiếm Nhóm IA (gỗ sưa, mun, trắc...) trôi nổi không rõ nguồn gốc bị xử lý thế nào?",
    "options": [
      "Không bị phạt nếu mua giá đắt",
      "Bị xử phạt nặng về hành vi tàng trữ lâm sản trái pháp luật và có thể bị khởi tố hình sự nếu khối lượng lớn",
      "Chỉ bị xử phạt tiền và được giữ lại gỗ nếu chủ cơ sở tự nguyện đóng bổ sung thuế tài nguyên rừng",
      "Chỉ bị phạt nếu đem bán ra nước ngoài"
    ],
    "correct": "Bị xử phạt nặng về hành vi tàng trữ lâm sản trái pháp luật và có thể bị khởi tố hình sự nếu khối lượng lớn",
    "explanation": "Căn cứ Điểm a Khoản 1 Điều 4 Thông tư số 85/2025/TT-BNNMT, Điều 26 Nghị định số 146/2026/NĐ-CP và Điều 232 Bộ luật Hình sự: Loài Nhóm IA nghiêm cấm khai thác và sử dụng mẫu vật khai thác từ tự nhiên tại Việt Nam vì mục đích thương mại; hành vi tàng trữ, mua bán trái pháp luật bị phạt tiền từ 1.000.000 đồng đến 500.000.000 đồng đối với cá nhân (tổ chức gấp 02 lần) tùy khối lượng/trị giá, tịch thu toàn bộ tang vật vi phạm hoặc truy cứu trách nhiệm hình sự từ 1,5 m³ trở lên."
  },
  {
    "id": "CBLS_053",
    "question": "Chủ cơ sở chế biến không mở Sổ theo dõi nhập, xuất lâm sản hoặc không ghi chép sổ thì bị xử phạt không?",
    "options": [
      "Chỉ bị xử phạt nếu để xảy ra thất thoát khối lượng lâm sản thực tế so với hóa đơn mua vào",
      "Bị xử phạt vi phạm hành chính về hành vi vi phạm quy định về quản lý hồ sơ lâm sản",
      "Chỉ bị phạt nếu cơ sở bị lỗ vốn",
      "Chỉ bị nhắc nhở bằng lời nói"
    ],
    "correct": "Bị xử phạt vi phạm hành chính về hành vi vi phạm quy định về quản lý hồ sơ lâm sản",
    "explanation": "Căn cứ Điểm a Khoản 2 và Điểm a Khoản 5 Điều 27 Nghị định số 146/2026/NĐ-CP: Chủ cơ sở chế biến, mua bán lâm sản không lập sổ theo dõi hoặc lập sổ theo dõi không đúng mẫu; không ghi chép hoặc ghi chép không đầy đủ, không đúng thực tế vào sổ nhập, xuất lâm sản bị phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng (đối với cá nhân) và buộc lập sổ theo dõi, ghi chép đầy đủ, đúng thực tế."
  },
  {
    "id": "CBLS_054",
    "question": "Theo Khoản 4 Điều 27 Nghị định số 146/2026/NĐ-CP, doanh nghiệp chế biến, xuất khẩu gỗ có hành vi kê khai không đúng thực tế các tiêu chí phân loại doanh nghiệp theo quy định về Hệ thống bảo đảm gỗ hợp pháp Việt Nam bị phạt tiền ở khung mức nào (áp dụng cho tổ chức)?",
    "options": [
      "Phạt tiền từ 40.000.000 đồng đến 60.000.000 đồng (theo quy định riêng cho doanh nghiệp tại Khoản 4 Điều 27)",
      "Phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng",
      "Chỉ bị phạt cảnh cáo và tự kê khai lại",
      "Phạt tiền từ 200.000.000 đồng đến 300.000.000 đồng"
    ],
    "correct": "Phạt tiền từ 40.000.000 đồng đến 60.000.000 đồng (theo quy định riêng cho doanh nghiệp tại Khoản 4 Điều 27)",
    "explanation": "Căn cứ Khoản 4 Điều 27 Nghị định số 146/2026/NĐ-CP: Phạt tiền từ 40.000.000 đồng đến 60.000.000 đồng đối với doanh nghiệp kê khai không đúng thực tế các tiêu chí phân loại doanh nghiệp theo quy định về Hệ thống bảo đảm gỗ hợp pháp Việt Nam (đồng thời có thể bị xác minh và chuyển loại sang Nhóm II nếu đang là Nhóm I)."
  },
  {
    "id": "CBLS_055",
    "question": "Chủ xưởng gỗ cố tình cưa xẻ gỗ vào ban đêm để che giấu hành vi chế biến gỗ lậu thì bị đánh giá thế nào theo Luật Xử lý vi phạm hành chính?",
    "options": [
      "Chỉ là hành vi vi phạm quy chế an ninh trật tự và tiếng ồn khu dân cư về đêm",
      "Là tình tiết tăng nặng (sau khi vi phạm đã có hành vi trốn tránh, che giấu vi phạm hành chính)",
      "Được miễn các loại thuế đêm",
      "Không ai có quyền can thiệp ban đêm"
    ],
    "correct": "Là tình tiết tăng nặng (sau khi vi phạm đã có hành vi trốn tránh, che giấu vi phạm hành chính)",
    "explanation": "Căn cứ Điểm k Khoản 1 Điều 10 Luật Xử lý vi phạm hành chính (VBHN số 90/VBHN-VPQH): Hành vi 'Sau khi vi phạm đã có hành vi trốn tránh, che giấu vi phạm hành chính' là tình tiết tăng nặng khi xem xét quyết định xử phạt vi phạm hành chính."
  },
  {
    "id": "CBLS_056",
    "question": "Việc mua bán gỗ qua mạng Internet không có hồ sơ lâm sản hợp pháp, giao nhận hàng lén lút tại bìa rừng tiềm ẩn rủi ro pháp lý gì cho người mua?",
    "options": [
      "Được pháp luật công nhận là giao dịch hợp pháp nếu có chứng từ chuyển khoản qua ngân hàng",
      "Rủi ro rất cao: mua phải lâm sản trái pháp luật, bị tịch thu toàn bộ tang vật vi phạm, bị phạt tiền và buộc nộp lại số lợi bất hợp pháp nếu bán lại",
      "Được miễn trừ trách nhiệm pháp lý vì giao dịch thực hiện trên mạng",
      "Được cơ quan chức năng hoàn trả toàn bộ số gỗ sau khi nộp phạt"
    ],
    "correct": "Rủi ro rất cao: mua phải lâm sản trái pháp luật, bị tịch thu toàn bộ tang vật vi phạm, bị phạt tiền và buộc nộp lại số lợi bất hợp pháp nếu bán lại",
    "explanation": "Căn cứ Điều 26 (Điểm a Khoản 21 và Điểm b Khoản 22 Điều 26) Nghị định số 146/2026/NĐ-CP: Mua bán, tàng trữ lâm sản không có hồ sơ hợp pháp là hành vi mua bán, tàng trữ lâm sản trái pháp luật; người vi phạm bị phạt tiền, bị tịch thu tang vật vi phạm (toàn bộ lâm sản) và buộc nộp lại số lợi bất hợp pháp có được do thực hiện vi phạm hành chính."
  },
  {
    "id": "CBLS_057",
    "question": "Mức phạt tiền thấp nhất đối với hành vi vận chuyển lâm sản trái pháp luật khởi điểm từ bao nhiêu?",
    "options": [
      "Từ 500.000 đồng trở lên",
      "Từ 1.000.000 đồng trở lên (tùy theo khối lượng, chủng loại lâm sản)",
      "Chỉ phạt nhắc nhở không phạt tiền",
      "Tối thiểu phải từ 50 triệu đồng"
    ],
    "correct": "Từ 1.000.000 đồng trở lên (tùy theo khối lượng, chủng loại lâm sản)",
    "explanation": "Căn cứ Khoản 1 Điều 25 Nghị định số 146/2026/NĐ-CP: Mức phạt tiền thấp nhất đối với hành vi vận chuyển lâm sản trái pháp luật là từ 1.000.000 đồng đến 5.000.000 đồng (áp dụng với gỗ thông thường dưới 01 m³, gỗ Nhóm IIA dưới 0,5 m³, gỗ Nhóm IA dưới 0,1 m³...) và tăng dần theo khối lượng lâm sản vi phạm."
  },
  {
    "id": "CBLS_058",
    "question": "Mức phạt tiền tối đa đối với một cá nhân có hành vi tàng trữ, mua bán, chế biến lâm sản trái phép là bao nhiêu?",
    "options": [
      "250.000.000 đồng",
      "200.000.000 đồng",
      "300.000.000 đồng",
      "500.000.000 đồng (nửa tỷ đồng)"
    ],
    "correct": "500.000.000 đồng (nửa tỷ đồng)",
    "explanation": "Căn cứ Điểm b, Điểm c Khoản 1 Điều 4 và Khoản 20 Điều 26 Nghị định số 146/2026/NĐ-CP: Mức phạt tiền tối đa đối với cá nhân có hành vi vi phạm hành chính trong lĩnh vực lâm nghiệp (bao gồm tàng trữ, mua bán, chế biến lâm sản trái pháp luật tại Khoản 20 Điều 26) là 500.000.000 đồng (đối với tổ chức gấp 02 lần, tối đa 1.000.000.000 đồng)."
  },
  {
    "id": "CBLS_059",
    "question": "Toàn bộ tang vật lâm sản không có hồ sơ hợp pháp bị bắt giữ sẽ bị xử lý như thế nào theo Nghị định số 146/2026/NĐ-CP?",
    "options": [
      "Trả lại cho chủ cơ sở sau khi nộp phạt",
      "Bị tịch thu tang vật vi phạm và xử lý theo quy định về tài sản được xác lập quyền sở hữu toàn dân",
      "Cho phép chủ gỗ tự đem đi bán lấy tiền nộp phạt",
      "Cho phép chủ cơ sở nộp phạt bổ sung bằng tiền tương đương trị giá lâm sản để chuộc lại tang vật"
    ],
    "correct": "Bị tịch thu tang vật vi phạm và xử lý theo quy định về tài sản được xác lập quyền sở hữu toàn dân",
    "explanation": "Căn cứ Điểm a Khoản 21 Điều 25, Điểm a Khoản 21 Điều 26 Nghị định số 146/2026/NĐ-CP và Điều 23, Điều 25 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Hình thức xử phạt bổ sung đối với hành vi vận chuyển, tàng trữ, mua bán, chế biến lâm sản không có hồ sơ hợp pháp là tịch thu tang vật vi phạm; tang vật sau khi tịch thu được xử lý theo trình tự tài sản được xác lập quyền sở hữu toàn dân."
  },
  {
    "id": "CBLS_060",
    "question": "Phương tiện giao thông dùng để vận chuyển lâm sản trái pháp luật bị tịch thu trong trường hợp nào theo Nghị định số 146/2026/NĐ-CP?",
    "options": [
      "Chỉ giữ giấy phép lái xe, trả phương tiện ngay",
      "Bị tịch thu phương tiện thô sơ, xe mô tô trong mọi trường hợp; đối với phương tiện cơ giới khác bị tịch thu khi vi phạm có tổ chức, nhiều lần, tái phạm hoặc đạt ngưỡng khối lượng, trị giá quy định",
      "Không bao giờ bị tịch thu phương tiện giao thông",
      "Chỉ bị tạm giữ phương tiện tối đa 30 ngày rồi trả lại cho chủ xe trong mọi trường hợp"
    ],
    "correct": "Bị tịch thu phương tiện thô sơ, xe mô tô trong mọi trường hợp; đối với phương tiện cơ giới khác bị tịch thu khi vi phạm có tổ chức, nhiều lần, tái phạm hoặc đạt ngưỡng khối lượng, trị giá quy định",
    "explanation": "Căn cứ Điểm b, Điểm c Khoản 21 Điều 25 Nghị định số 146/2026/NĐ-CP: Tịch thu phương tiện thô sơ, xe mô tô đối với mọi hành vi tại khoản 1 đến khoản 20 Điều 25; tịch thu phương tiện cơ giới khác khi vi phạm có tổ chức, nhiều lần, tái phạm hoặc vận chuyển gỗ thông thường từ 05 m³ trở lên, gỗ Nhóm IIA từ 2,5 m³ trở lên, gỗ Nhóm IA từ 0,4 m³ trở lên (hoặc các mức trị giá/chủng loại khác theo điểm c khoản 21)."
  },
  {
    "id": "CBLS_061",
    "question": "Tàng trữ, vận chuyển, buôn bán gỗ loài thực vật rừng thông thường trái phép từ bao nhiêu m³ thì bị TRUY CỨU TRÁCH NHIỆM HÌNH SỰ theo Khoản 1 Điều 232 Bộ luật Hình sự (trường hợp chưa từng bị xử phạt vi phạm hành chính hoặc kết án về tội này)?",
    "options": [
      "Từ 5 m³ trở lên (gỗ tròn) trong mọi trường hợp",
      "Từ 20 m³ trở lên (khung phạt tù từ 06 tháng đến 03 năm)",
      "Phải từ 100 m³ trở lên mới cấu thành tội phạm hình sự",
      "Từ 15 m³ trở lên đối với gỗ tròn có đường kính đầu nhỏ từ 25 cm"
    ],
    "correct": "Từ 20 m³ trở lên (khung phạt tù từ 06 tháng đến 03 năm)",
    "explanation": "Căn cứ Khoản 1 và Điểm k Khoản 1 Điều 232 Bộ luật Hình sự: Hành vi tàng trữ, vận chuyển, chế biến hoặc mua bán trái phép từ 20 mét khối (m³) đến dưới 40 mét khối (m³) gỗ loài thực vật rừng thông thường bị phạt tiền từ 50.000.000 đồng đến 300.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm (trường hợp đã bị xử phạt vi phạm hành chính hoặc kết án chưa xóa án tích mà còn vi phạm thì dưới mức này vẫn bị truy cứu theo Điểm m Khoản 1)."
  },
  {
    "id": "CBLS_062",
    "question": "Theo Nghị định số 146/2026/NĐ-CP, chủ cơ sở chế biến, mua bán lâm sản có hành vi không lập sổ theo dõi hoặc lập sổ không đúng mẫu; không ghi chép hoặc ghi chép không đầy đủ, không đúng thực tế vào sổ nhập, xuất lâm sản thì bị phạt tiền ở khung mức nào?",
    "options": [
      "Phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng",
      "Phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng",
      "Phạt tiền từ 20.000.000 đồng đến 30.000.000 đồng",
      "Phạt tiền từ 15.000.000 đồng đến 25.000.000 đồng"
    ],
    "correct": "Phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng",
    "explanation": "Căn cứ Điểm a Khoản 2 Điều 27 Nghị định số 146/2026/NĐ-CP: Phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng đối với hành vi chủ cơ sở chế biến, mua bán lâm sản không lập sổ theo dõi hoặc lập sổ theo dõi không đúng mẫu theo quy định; không ghi chép hoặc ghi chép không đầy đủ, không đúng thực tế vào sổ nhập, xuất lâm sản."
  },
  {
    "id": "CBLS_063",
    "question": "Theo Bộ luật Hình sự, hành vi tàng trữ, vận chuyển, chế biến hoặc mua bán trái phép gỗ thuộc Danh mục thực vật rừng, động vật rừng nguy cấp, quý, hiếm Nhóm IIA với khối lượng tối thiểu bao nhiêu thì bị truy cứu trách nhiệm hình sự theo Khoản 1 Điều 232 (trường hợp chưa từng bị xử phạt vi phạm hành chính hoặc kết án về tội này)?",
    "options": [
      "Từ 10 mét khối (m³) trở lên",
      "Từ 1,5 mét khối (m³) trở lên",
      "Từ 20 mét khối (m³) trở lên",
      "Từ 5 mét khối (m³) trở lên"
    ],
    "correct": "Từ 10 mét khối (m³) trở lên",
    "explanation": "Căn cứ Khoản 1 và Điểm k Khoản 1 Điều 232 Bộ luật Hình sự: Hành vi tàng trữ, vận chuyển, chế biến hoặc mua bán trái phép từ 10 mét khối (m³) đến dưới 20 mét khối (m³) gỗ thuộc Danh mục thực vật rừng, động vật rừng nguy cấp, quý, hiếm Nhóm IIA bị phạt tiền từ 50.000.000 đồng đến 300.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm (trường hợp đã bị xử phạt VPHC hoặc kết án chưa xóa án tích thì áp dụng Điểm m Khoản 1)."
  },
  {
    "id": "CBLS_064",
    "question": "Ngoài phạt tiền và tịch thu gỗ, cơ sở chế biến gỗ lậu còn có thể bị áp dụng hình thức xử phạt bổ sung nào theo Nghị định số 146/2026/NĐ-CP?",
    "options": [
      "Tước quyền sử dụng Giấy chứng nhận đăng ký kinh doanh không có thời hạn",
      "Đình chỉ hoạt động của cơ sở chế biến lâm sản có thời hạn từ 06 tháng đến 12 tháng",
      "Cấm đi khỏi nơi cư trú vĩnh viễn",
      "Buộc phải chuyển nghề sang làm nông nghiệp"
    ],
    "correct": "Đình chỉ hoạt động của cơ sở chế biến lâm sản có thời hạn từ 06 tháng đến 12 tháng",
    "explanation": "Căn cứ Điểm c Khoản 2 Điều 4 và Điểm b Khoản 21 Điều 26 Nghị định số 146/2026/NĐ-CP: Hình thức xử phạt bổ sung đình chỉ hoạt động của cơ sở chế biến lâm sản có thời hạn từ 06 tháng đến 12 tháng được áp dụng đối với các hành vi vi phạm quy định tại các khoản từ Khoản 5 đến Khoản 20 Điều 26."
  },
  {
    "id": "CBLS_065",
    "question": "Tổ chức (doanh nghiệp, công ty) có hành vi buôn bán gỗ lậu thì mức phạt tiền như thế nào so với cá nhân?",
    "options": [
      "Bằng mức phạt đối với cá nhân",
      "Gấp 02 lần mức phạt tiền đối với cá nhân có cùng hành vi vi phạm",
      "Chỉ bằng 50% mức phạt của cá nhân",
      "Gấp 1,5 lần mức phạt tiền đối với cá nhân có cùng hành vi vi phạm"
    ],
    "correct": "Gấp 02 lần mức phạt tiền đối với cá nhân có cùng hành vi vi phạm",
    "explanation": "Điểm b Khoản 1 Điều 4 Nghị định 146/2026/NĐ-CP quy định mức phạt tiền đối với tổ chức vi phạm hành chính gấp 02 lần mức phạt tiền đối với cá nhân có cùng hành vi vi phạm."
  },
  {
    "id": "CBLS_066",
    "question": "Người mua bán lâm sản lậu có bị tịch thu số tiền bất hợp pháp kiếm được từ việc bán gỗ lậu không?",
    "options": [
      "Được giữ lại toàn bộ số tiền đó",
      "Bắt buộc áp dụng biện pháp khắc phục hậu quả: Buộc nộp lại toàn bộ số lợi bất hợp pháp có được do vi phạm",
      "Chỉ nộp lại 10% tiền lãi",
      "Chỉ nộp lại 50% số tiền thu được sau khi đã trừ chi phí mua gỗ và công vận chuyển"
    ],
    "correct": "Bắt buộc áp dụng biện pháp khắc phục hậu quả: Buộc nộp lại toàn bộ số lợi bất hợp pháp có được do vi phạm",
    "explanation": "Căn cứ Điểm b Khoản 22 Điều 25 và Điểm b Khoản 22 Điều 26 Nghị định số 146/2026/NĐ-CP: Người có hành vi mua bán lâm sản trái pháp luật buộc phải nộp lại toàn bộ số lợi bất hợp pháp có được vào ngân sách nhà nước."
  },
  {
    "id": "CBLS_067",
    "question": "Trường hợp nào người vi phạm trong hoạt động chế biến, kinh doanh lâm sản được coi là có tình tiết giảm nhẹ khi cơ quan chức năng xử phạt vi phạm hành chính?",
    "options": [
      "Đã có hành vi ngăn chặn, làm giảm bớt hậu quả hoặc tự nguyện khắc phục hậu quả; tự nguyện khai báo, thành thật hối lỗi; tích cực giúp đỡ cơ quan chức năng phát hiện, xử lý vi phạm",
      "Xuất trình hợp đồng mua bán viết tay của người bán gỗ dù không có Bảng kê lâm sản",
      "Mang cất giấu nhanh số gỗ còn lại",
      "Bỏ trốn khỏi địa phương"
    ],
    "correct": "Đã có hành vi ngăn chặn, làm giảm bớt hậu quả hoặc tự nguyện khắc phục hậu quả; tự nguyện khai báo, thành thật hối lỗi; tích cực giúp đỡ cơ quan chức năng phát hiện, xử lý vi phạm",
    "explanation": "Căn cứ Khoản 1 và Khoản 2 Điều 9 Luật Xử lý vi phạm hành chính (VBHN số 90/VBHN-VPQH): Người vi phạm hành chính đã có hành vi ngăn chặn, làm giảm bớt hậu quả hoặc tự nguyện khắc phục hậu quả, bồi thường thiệt hại; đã tự nguyện khai báo, thành thật hối lỗi; tích cực giúp đỡ cơ quan chức năng phát hiện, xử lý vi phạm hành chính là các tình tiết giảm nhẹ."
  },
  {
    "id": "CBLS_068",
    "question": "Nguyên tắc cốt lõi giúp các cơ sở chế biến, vận tải lâm sản tuân thủ pháp luật và hoạt động ổn định, không bị xử phạt là gì?",
    "options": [
      "Chỉ mua gỗ giá rẻ không cần hỏi giấy tờ",
      "Luôn tuân thủ pháp luật, mua bán gỗ có hồ sơ lâm sản hợp pháp (Bảng kê lâm sản đúng quy định) và lập, ghi chép Sổ theo dõi nhập, xuất lâm sản đầy đủ",
      "Đăng ký hộ kinh doanh cá thể quy mô nhỏ để được miễn các đoàn kiểm tra chuyên ngành",
      "Chỉ chế biến gỗ vào ban đêm để tránh sự kiểm tra"
    ],
    "correct": "Luôn tuân thủ pháp luật, mua bán gỗ có hồ sơ lâm sản hợp pháp (Bảng kê lâm sản đúng quy định) và lập, ghi chép Sổ theo dõi nhập, xuất lâm sản đầy đủ",
    "explanation": "Căn cứ Khoản 2 Điều 68, Khoản 2 Điều 71 Luật Lâm nghiệp năm 2017; Điều 12 Nghị định số 102/2020/NĐ-CP; Điều 13 và Khoản 7 Điều 32 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Cơ sở chế biến, thương mại lâm sản phải tuân thủ quy định về bảo đảm gỗ hợp pháp, lưu giữ đầy đủ hồ sơ lâm sản, lập và cập nhật Sổ theo dõi nhập, xuất lâm sản (Mẫu số 04) và chấp hành kiểm tra của cơ quan có thẩm quyền."
  },
  {
    "id": "CBLS_069",
    "question": "Pháp luật lâm nghiệp hiện hành có quy định một bộ hồ sơ thủ tục riêng biệt mang tên 'Hồ sơ cây cổ thụ' hay 'Hồ sơ cây có tuổi thọ cao' không?",
    "options": [
      "KHÔNG quy định riêng đối với 'cây cổ thụ'; việc xác định hồ sơ nguồn gốc căn cứ vào nhóm loài (thông thường hay nguy cấp, quý, hiếm/CITES) và nguồn gốc hình thành thực tế (rừng tự nhiên, rừng trồng, cây phân tán, cây vườn nhà, tận dụng)",
      "Có quy định một bộ thủ tục đặc biệt riêng do Bộ Xây dựng ban hành",
      "Mọi cây có tuổi thọ trên 50 năm đều bắt buộc phải đăng ký cây di sản quốc gia mới được mua bán",
      "Mọi cây cổ thụ trồng phân tán đều bắt buộc phải có Giấy xác nhận cây di sản của Sở Văn hóa, Thể thao và Du lịch"
    ],
    "correct": "KHÔNG quy định riêng đối với 'cây cổ thụ'; việc xác định hồ sơ nguồn gốc căn cứ vào nhóm loài (thông thường hay nguy cấp, quý, hiếm/CITES) và nguồn gốc hình thành thực tế (rừng tự nhiên, rừng trồng, cây phân tán, cây vườn nhà, tận dụng)",
    "explanation": "Căn cứ Điều 3 và Điều 8 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Thông tư không tách riêng khái niệm 'hồ sơ cây cổ thụ', mà quản lý nguồn gốc khai thác trong nước theo từng nhóm đối tượng: gỗ khai thác từ rừng tự nhiên, rừng trồng, cây trồng phân tán, cây vườn nhà loài thông thường hoặc loài nguy cấp, quý, hiếm, Phụ lục CITES."
  },
  {
    "id": "CBLS_070",
    "question": "Trường hợp khai thác tận dụng cây gỗ loài thông thường trên diện tích giải phóng mặt bằng khi chuyển mục đích sử dụng rừng sang mục đích khác (thực hiện dự án, công trình), hồ sơ đề nghị phê duyệt phương án khai thác tận dụng theo Điểm a Khoản 5 Điều 6 Thông tư số 26/2025/TT-BNNMT cần có tài liệu nền tảng nào kèm theo?",
    "options": [
      "Quyết định chuyển mục đích sử dụng rừng sang mục đích khác được cấp có thẩm quyền phê duyệt (kèm bản chính Đề nghị theo Mẫu số 09 và Phương án khai thác theo Mẫu số 07 hoặc Mẫu số 08)",
      "Chỉ cần hợp đồng san lấp mặt bằng của nhà thầu thi công xây dựng",
      "Biên bản họp của ban chỉ huy công trường xây dựng",
      "Biên bản thỏa thuận đền bù giải phóng mặt bằng kèm Giấy xác nhận của Trưởng thôn nơi thực hiện dự án"
    ],
    "correct": "Quyết định chuyển mục đích sử dụng rừng sang mục đích khác được cấp có thẩm quyền phê duyệt (kèm bản chính Đề nghị theo Mẫu số 09 và Phương án khai thác theo Mẫu số 07 hoặc Mẫu số 08)",
    "explanation": "Căn cứ Điểm a Khoản 5 Điều 6 (và Khoản 4 Điều 6) Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Hồ sơ phê duyệt phương án khai thác tận dụng trên diện tích giải phóng mặt bằng khi chuyển mục đích sử dụng rừng sang mục đích khác gồm Đề nghị theo Mẫu số 09, Phương án khai thác theo Mẫu số 07 (tổ chức) hoặc Mẫu số 08 (hộ gia đình, cá nhân, cộng đồng dân cư) và bản sao quyết định chuyển mục đích sử dụng rừng sang mục đích khác được cấp có thẩm quyền phê duyệt."
  },
  {
    "id": "CBLS_071",
    "question": "Trường hợp cây trồng phân tán, cây vườn nhà loài thông thường do tổ chức, cá nhân, hộ gia đình tự đầu tư khi khai thác trong nước thì hồ sơ nguồn gốc theo Khoản 3 Điều 8 Thông tư số 26/2025/TT-BNNMT gồm những tài liệu nào?",
    "options": [
      "Bản chính Bảng kê lâm sản do chủ lâm sản lập (hoặc Bản chính Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm sở tại đối với trường hợp chủ lâm sản đề nghị xác nhận)",
      "Biên bản nghiệm thu bàn giao mặt bằng của Ban Quản lý dự án xây dựng đô thị",
      "Quy chuẩn kiểm toán tài chính nội bộ của chủ công trình",
      "Không cần bất kỳ hồ sơ nào vì cây trồng phân tán, cây vườn nhà nằm ngoài quy hoạch rừng"
    ],
    "correct": "Bản chính Bảng kê lâm sản do chủ lâm sản lập (hoặc Bản chính Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm sở tại đối với trường hợp chủ lâm sản đề nghị xác nhận)",
    "explanation": "Căn cứ Khoản 3 Điều 8 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Gỗ loài thông thường khai thác từ rừng sản xuất là rừng trồng, gỗ có tên trùng với cây gỗ rừng tự nhiên, cây trồng phân tán, cây vườn nhà do tổ chức, cá nhân, hộ gia đình, cộng đồng dân cư tự đầu tư có hồ sơ nguồn gốc là bản chính Bảng kê lâm sản do chủ lâm sản lập hoặc Bản chính Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm sở tại nếu chủ lâm sản đề nghị xác nhận theo điểm đ khoản 3 Điều 5."
  },
  {
    "id": "CBLS_072",
    "question": "Cây cảnh cổ thụ (không thuộc đối tượng phải xác nhận Bảng kê lâm sản) khi mua bán, chuyển nhượng qua nhiều chủ sở hữu trong nước thì hồ sơ nguồn gốc hợp pháp khi lưu thông được xác lập như thế nào?",
    "options": [
      "Được kế thừa theo chuỗi: gồm Bản chính Bảng kê lâm sản do chủ sở hữu bán, chuyển giao quyền sở hữu lập kèm bản sao hồ sơ mua bán, chuyển giao quyền sở hữu liền kề trước đó (hoặc mã QR chứa đựng hồ sơ)",
      "Tự động mất hiệu lực pháp lý và chủ mới phải làm lại từ đầu từ Ủy ban nhân dân tỉnh",
      "Chỉ cần một bản photocopy căn cước công dân của người chủ đầu tiên",
      "Bắt buộc phải lập lại Bảng kê lâm sản mới và xin xác nhận của Ủy ban nhân dân cấp xã nơi mua bán"
    ],
    "correct": "Được kế thừa theo chuỗi: gồm Bản chính Bảng kê lâm sản do chủ sở hữu bán, chuyển giao quyền sở hữu lập kèm bản sao hồ sơ mua bán, chuyển giao quyền sở hữu liền kề trước đó (hoặc mã QR chứa đựng hồ sơ)",
    "explanation": "Căn cứ Khoản 2 Điều 11 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Đối với lâm sản không thuộc đối tượng bắt buộc xác nhận Bảng kê lâm sản theo điểm a, b, c, d khoản 3 Điều 5, hồ sơ mua bán, chuyển giao quyền sở hữu, vận chuyển trong nước gồm bản chính Bảng kê lâm sản do chủ lâm sản bán lập kèm bản sao hồ sơ mua bán, chuyển giao quyền sở hữu liền kề trước đó hoặc sử dụng mã QR chứa đựng hồ sơ này trên Bảng kê lâm sản."
  },
  {
    "id": "CBLS_073",
    "question": "Đối với cây thân gỗ hoặc thực vật ngoài gỗ thuộc loài nguy cấp, quý, hiếm hoặc Phụ lục CITES khai thác hợp pháp trong nước, khi khai thác, mua bán, vận chuyển trong nước bắt buộc phải có hồ sơ nào?",
    "options": [
      "Bản chính Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm sở tại",
      "Chỉ cần bản cam kết miệng của người khai thác với người mua",
      "Không cần xác nhận Kiểm lâm nếu cây đã được trồng vào chậu",
      "Chỉ cần có Hợp đồng mua bán có công chứng mà không cần cơ quan Kiểm lâm sở tại xác nhận"
    ],
    "correct": "Bản chính Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm sở tại",
    "explanation": "Căn cứ Điểm c Khoản 3 Điều 5, Khoản 4 Điều 8, Điểm a Khoản 5 Điều 8 và Khoản 1 Điều 11 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT) và Điều 10 Thông tư số 85/2025/TT-BNNMT: Gỗ và thực vật ngoài gỗ thuộc loài nguy cấp, quý, hiếm hoặc Phụ lục CITES khai thác trong nước, mua bán, vận chuyển bắt buộc phải có Bản chính Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm sở tại."
  },
  {
    "id": "CBLS_074",
    "question": "Đối với thực vật rừng, gỗ có nguồn gốc nhập khẩu hợp pháp từ nước ngoài khi vận chuyển từ cửa khẩu về kho hàng và mua bán tiếp trong nước cần hồ sơ gì theo Thông tư số 26/2025/TT-BNNMT?",
    "options": [
      "Vận chuyển từ cửa khẩu về kho theo hồ sơ nhập khẩu tại Điều 9 (hoặc Điều 7 NĐ 102 đối với gỗ); khi bán, chuyển giao quyền sở hữu trong nước tiếp tục lập Bảng kê lâm sản (kèm bản sao hồ sơ liền kề/QR, hoặc có xác nhận Kiểm lâm nếu thuộc Khoản 3 Điều 5)",
      "Chỉ cần nhãn mác chữ nước ngoài dán trên thân cây",
      "Chỉ cần Giấy chứng nhận nguồn gốc xuất xứ C/O và Giấy kiểm dịch thực vật nhập khẩu",
      "Không cần giấy tờ gì nếu cây đã đưa về vườn ươm tại Việt Nam trên 1 năm"
    ],
    "correct": "Vận chuyển từ cửa khẩu về kho theo hồ sơ nhập khẩu tại Điều 9 (hoặc Điều 7 NĐ 102 đối với gỗ); khi bán, chuyển giao quyền sở hữu trong nước tiếp tục lập Bảng kê lâm sản (kèm bản sao hồ sơ liền kề/QR, hoặc có xác nhận Kiểm lâm nếu thuộc Khoản 3 Điều 5)",
    "explanation": "Căn cứ Điều 9, Khoản 1, Khoản 2 và Khoản 4 Điều 11, Khoản 9 Điều 5 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Lâm sản nhập khẩu vận chuyển từ cửa khẩu đến kho hàng của người nhập khẩu thực hiện theo Điều 9 (gỗ theo Điều 7 NĐ 102/2020; thực vật ngoài gỗ CITES có tờ khai hải quan và giấy phép CITES; ngoài gỗ không CITES có tờ khai hải quan và Bảng kê lâm sản/packing-list); khi mua bán tiếp trong nước lập Bảng kê lâm sản theo Khoản 1, Khoản 2 Điều 11 (lưu ý động vật, thực vật nhập khẩu trùng tên loài nguy cấp, quý, hiếm thực hiện như loài nguy cấp, quý, hiếm theo Khoản 9 Điều 5)."
  },
  {
    "id": "CBLS_075",
    "question": "Theo Chú thích (11) Mẫu số 01 Phụ lục II ban hành kèm theo Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT), trường hợp sản phẩm gỗ sử dụng gỗ nguyên liệu hỗn hợp hoặc chế biến từ nhiều loài thì ghi tên khoa học của loài trên Bảng kê lâm sản theo thứ tự ưu tiên nào?",
    "options": [
      "Ghi lần lượt tên khoa học theo thứ tự ưu tiên: loài thuộc Phụ lục CITES; loài thuộc loài nguy cấp, quý, hiếm; loài rừng thông thường (trong cùng nhóm ghi loài chiếm tỉ lệ cao nhất trước)",
      "Chỉ cần ghi tên gọi phổ thông bằng tiếng Việt của một loài gỗ có giá trị cao nhất",
      "Ghi theo thứ tự bảng chữ cái tên thương mại tiếng Anh",
      "Không cần ghi tên khoa học nếu sản phẩm gỗ chế biến từ từ 02 loài trở lên"
    ],
    "correct": "Ghi lần lượt tên khoa học theo thứ tự ưu tiên: loài thuộc Phụ lục CITES; loài thuộc loài nguy cấp, quý, hiếm; loài rừng thông thường (trong cùng nhóm ghi loài chiếm tỉ lệ cao nhất trước)",
    "explanation": "Căn cứ Chú thích (11) Mẫu số 01 Phụ lục II Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT; mẫu thay thế tại Phụ lục VIII Thông tư số 84/2025/TT-BNNMT): Trường hợp sản phẩm gỗ sử dụng gỗ nguyên liệu hỗn hợp hoặc chế biến từ nhiều loài thì ghi lần lượt tên khoa học của loài theo thứ tự ưu tiên: tên loài gỗ thuộc Phụ lục CITES; tên loài gỗ thuộc loài nguy cấp, quý, hiếm; tên loài gỗ thông thường; trong cùng nhóm ghi loài chiếm tỉ lệ cao nhất trước."
  },
  {
    "id": "CBLS_076",
    "question": "Theo Khoản 1 và Điểm b Khoản 3 Điều 10 Thông tư số 85/2025/TT-BNNMT, việc khai thác mẫu vật loài nguy cấp, quý, hiếm từ tự nhiên (như phục vụ nghiên cứu khoa học cấp quốc gia, cấp bộ, cấp tỉnh hoặc công tác đối ngoại theo quyết định của Thủ tướng Chính phủ) phải lập Phương án khai thác theo mẫu nào?",
    "options": [
      "Bản chính phương án khai thác lập theo Mẫu số 07 Phụ lục II ban hành kèm theo Thông tư số 85/2025/TT-BNNMT (kèm Đề nghị khai thác theo Mẫu số 06)",
      "Bản chính phương án khai thác lập theo Mẫu số 08 Phụ lục II Thông tư số 26/2025/TT-BNNMT",
      "Không cần lập phương án khai thác nếu chỉ khai thác phục vụ nghiên cứu khoa học",
      "Chỉ cần bản cam kết tự lập có xác nhận của Ủy ban nhân dân cấp xã"
    ],
    "correct": "Bản chính phương án khai thác lập theo Mẫu số 07 Phụ lục II ban hành kèm theo Thông tư số 85/2025/TT-BNNMT (kèm Đề nghị khai thác theo Mẫu số 06)",
    "explanation": "Căn cứ Khoản 1 và Điểm b Khoản 3 Điều 10 Thông tư số 85/2025/TT-BNNMT: Khai thác mẫu vật loài nguy cấp, quý, hiếm từ tự nhiên chỉ được thực hiện để phục vụ đề tài nghiên cứu khoa học cấp quốc gia/bộ/tỉnh đã phê duyệt, công tác đối ngoại theo quyết định của Thủ tướng Chính phủ hoặc khai thác tận dụng, tận thu được phê duyệt; hồ sơ đề nghị khai thác phục vụ nghiên cứu khoa học, đối ngoại gồm Đề nghị theo Mẫu số 06 và Phương án khai thác theo Mẫu số 07 Phụ lục II Thông tư số 85/2025/TT-BNNMT (Điều 6 Thông tư số 26/2025/TT-BNNMT chỉ áp dụng cho loài thông thường)."
  },
  {
    "id": "CBLS_077",
    "question": "Tình huống: Doanh nghiệp X thi công giải tỏa mặt bằng trên diện tích rừng đã được cấp có thẩm quyền quyết định chuyển mục đích sử dụng rừng sang mục đích khác để xây dựng hồ chứa nước; trên diện tích này có 5 cây gỗ loài thông thường được khai thác tận dụng. Khi bán và vận chuyển số cây này, hồ sơ cần có những gì theo Thông tư số 26/2025/TT-BNNMT?",
    "options": [
      "Quyết định chuyển mục đích sử dụng rừng sang mục đích khác và Phương án khai thác tận dụng được cấp có thẩm quyền phê duyệt, kèm Bản chính Bảng kê lâm sản hợp lệ khi bán, vận chuyển (có xác nhận Kiểm lâm nếu là gỗ rừng tự nhiên)",
      "Chỉ cần hợp đồng trúng thầu thi công xây lắp hồ chứa nước",
      "Bản hợp đồng thi công nạo vét lòng hồ kèm Biên bản kiểm kê hiện trạng cây của đơn vị tư vấn giám sát",
      "Không cần giấy tờ gì vì cây nằm trong lòng hồ sắp bị ngập nước"
    ],
    "correct": "Quyết định chuyển mục đích sử dụng rừng sang mục đích khác và Phương án khai thác tận dụng được cấp có thẩm quyền phê duyệt, kèm Bản chính Bảng kê lâm sản hợp lệ khi bán, vận chuyển (có xác nhận Kiểm lâm nếu là gỗ rừng tự nhiên)",
    "explanation": "Căn cứ Điểm a Khoản 5 Điều 6, Điều 8 và Điều 11 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Khai thác tận dụng trên diện tích giải phóng mặt bằng khi chuyển mục đích sử dụng rừng sang mục đích khác phải có Quyết định chuyển mục đích sử dụng rừng và Phương án khai thác được cơ quan có thẩm quyền phê duyệt; sau khai thác lập Bảng kê lâm sản theo Điều 8 (xác nhận Kiểm lâm sở tại nếu là gỗ rừng tự nhiên) và hồ sơ lưu thông theo Điều 11."
  },
  {
    "id": "CBLS_078",
    "question": "Tình huống: Anh B mua một cây si cổ thụ (thuộc loài thông thường) trồng trong vườn nhà do hộ gia đình ông H tự đầu tư mang về vườn ươm. Theo Thông tư số 26/2025/TT-BNNMT, anh B cần lưu giữ hồ sơ lâm sản gì để chứng minh nguồn gốc hợp pháp?",
    "options": [
      "Bản chính Bảng kê lâm sản do ông H lập (hoặc có xác nhận của cơ quan Kiểm lâm sở tại nếu ông H đề nghị) kèm bản sao hồ sơ mua bán, chuyển giao quyền sở hữu liền kề trước đó (nếu có) hoặc mã QR",
      "Bản cam kết về nguồn gốc cây trồng vườn nhà có xác nhận của Hội Nông dân cấp xã kèm biên lai thu tiền",
      "Bản photocopy sổ hộ khẩu của ông H có đóng dấu giáp lai",
      "Chỉ cần giấy biên nhận cọc tiền có chữ ký của người làm chứng"
    ],
    "correct": "Bản chính Bảng kê lâm sản do ông H lập (hoặc có xác nhận của cơ quan Kiểm lâm sở tại nếu ông H đề nghị) kèm bản sao hồ sơ mua bán, chuyển giao quyền sở hữu liền kề trước đó (nếu có) hoặc mã QR",
    "explanation": "Căn cứ Khoản 3 Điều 8, Khoản 2 Điều 11 và Điểm b Khoản 1 Điều 13 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Cây trồng phân tán, cây vườn nhà loài thông thường do hộ gia đình tự đầu tư có hồ sơ nguồn gốc là bản chính Bảng kê lâm sản do chủ lâm sản lập (hoặc có xác nhận của Kiểm lâm nếu đề nghị); tại cơ sở kinh doanh lưu giữ bản chính Bảng kê lâm sản và bản sao hồ sơ chuyển giao quyền sở hữu từ cá nhân liền kề trước đó."
  },
  {
    "id": "CBLS_079",
    "question": "Tổ chức, hộ kinh doanh cây cảnh thuộc loài thực vật rừng thông thường hoặc gỗ chế biến phải lập và ghi chép Sổ theo dõi nhập, xuất lâm sản theo mẫu nào và xuất trình khi nào?",
    "options": [
      "Lập Sổ theo dõi nhập, xuất lâm sản (Mẫu số 04 Phụ lục II), cập nhật đầy đủ, kịp thời và xuất trình khi có yêu cầu kiểm tra của cơ quan có thẩm quyền",
      "Chỉ cần mở Sổ theo dõi tài chính nội bộ và hóa đơn giá trị gia tăng mua bán hàng tháng",
      "Không phải lập sổ nếu đã nộp thuế khoán hàng tháng cho cơ quan thuế",
      "Chỉ cần lập sổ nếu có quy mô vốn kinh doanh trên 10 tỷ đồng"
    ],
    "correct": "Lập Sổ theo dõi nhập, xuất lâm sản (Mẫu số 04 Phụ lục II), cập nhật đầy đủ, kịp thời và xuất trình khi có yêu cầu kiểm tra của cơ quan có thẩm quyền",
    "explanation": "Căn cứ Điểm d Khoản 1 Điều 13 và Điểm c Khoản 7 Điều 32 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Tổ chức, hộ kinh doanh phải lập Sổ theo dõi nhập, xuất lâm sản theo Mẫu số 04 Phụ lục II (đối với trường hợp lâm sản là thực vật rừng thông thường), cập nhật đầy đủ, kịp thời tình hình nhập, xuất lâm sản và xuất trình khi có yêu cầu kiểm tra của cơ quan có thẩm quyền (riêng loài nguy cấp, quý, hiếm hoặc Phụ lục CITES thực hiện các loại sổ theo Thông tư số 85/2025/TT-BNNMT)."
  },
  {
    "id": "CBLS_080",
    "question": "Theo Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT), trường hợp cần xác minh nguồn gốc lâm sản trước khi xác nhận Bảng kê lâm sản mà vụ việc có nhiều nội dung phức tạp thì thời hạn xác minh và xác nhận tối đa là bao lâu?",
    "options": [
      "Không quá 03 ngày làm việc kể từ ngày thông báo",
      "Không quá 02 ngày làm việc kể từ ngày thông báo",
      "Không quá 05 ngày làm việc kể từ ngày tiếp nhận hồ sơ",
      "Không quá 07 ngày làm việc kể từ ngày nhận được hồ sơ đề nghị"
    ],
    "correct": "Không quá 03 ngày làm việc kể từ ngày thông báo",
    "explanation": "Căn cứ Điểm c Khoản 7 Điều 5 Thông tư số 26/2025/TT-BNNMT (được sửa đổi bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT): Khi cần xác minh nguồn gốc lâm sản, Kiểm lâm tiến hành xác minh trong thời hạn 02 ngày làm việc kể từ ngày thông báo; trường hợp có nhiều nội dung phức tạp, việc xác minh và xác nhận được thực hiện không quá 03 ngày làm việc."
  },
  {
    "id": "CBLS_081",
    "question": "Hành vi khai thác trái phép cây gỗ trên núi đá thuộc rừng phòng hộ, rừng đặc dụng đem về bán cho các khu nghỉ dưỡng bị xử lý như thế nào?",
    "options": [
      "Bị xử lý nghiêm khắc về hành vi khai thác, tàng trữ, mua bán lâm sản trái pháp luật (xử phạt hành chính và tịch thu tang vật, hoặc bị truy cứu trách nhiệm hình sự theo Điều 232 Bộ luật Hình sự nếu đủ định lượng)",
      "Được coi là hoạt động khai hoang tôn tạo cảnh quan thiên nhiên",
      "Chỉ bị phạt vi phạm hành chính 200.000 đồng nếu cây trồng lại vẫn sống tốt",
      "Chỉ bị áp dụng biện pháp khắc phục hậu quả là buộc đem cây trồng lại đúng vị trí cũ mà không bị tịch thu"
    ],
    "correct": "Bị xử lý nghiêm khắc về hành vi khai thác, tàng trữ, mua bán lâm sản trái pháp luật (xử phạt hành chính và tịch thu tang vật, hoặc bị truy cứu trách nhiệm hình sự theo Điều 232 Bộ luật Hình sự nếu đủ định lượng)",
    "explanation": "Căn cứ Điều 15, Điều 16, Điều 25, Điều 26 Nghị định số 146/2026/NĐ-CP và Điều 232 Bộ luật Hình sự: Hành vi khai thác, vận chuyển, tàng trữ, mua bán trái phép lâm sản từ rừng phòng hộ, rừng đặc dụng bị xử phạt vi phạm hành chính và tịch thu tang vật theo Nghị định số 146/2026/NĐ-CP, hoặc bị truy cứu trách nhiệm hình sự theo Điều 232 BLHS nếu đạt định lượng về khối lượng, trị giá hoặc tái phạm."
  },
  {
    "id": "CBLS_082",
    "question": "Thời hạn lưu giữ hồ sơ gỗ tại các cơ sở chế biến, kinh doanh lâm sản theo Nghị định số 102/2020/NĐ-CP (hợp nhất tại VBHN số 14/VBHN-BNNMT) là bao lâu?",
    "options": [
      "Trong thời hạn 05 năm kể từ ngày xuất bán gỗ",
      "Chỉ cần lưu giữ trong thời gian 06 tháng kể từ ngày giao hàng",
      "Hết năm tài chính được phép tiêu hủy toàn bộ hồ sơ sổ sách",
      "Trong thời hạn 03 năm kể từ ngày xuất bán gỗ"
    ],
    "correct": "Trong thời hạn 05 năm kể từ ngày xuất bán gỗ",
    "explanation": "Căn cứ Điểm b Khoản 5 Điều 27 Nghị định số 102/2020/NĐ-CP (hợp nhất tại VBHN số 14/VBHN-BNNMT) kết hợp Điểm a Khoản 7 Điều 32 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Tổ chức, cá nhân có trách nhiệm lưu giữ hồ sơ gỗ trong thời hạn 05 năm kể từ ngày xuất bán gỗ."
  },
  {
    "id": "CBLS_083",
    "question": "Theo Nghị định số 102/2020/NĐ-CP (được sửa đổi, bổ sung bởi Nghị định số 120/2024/NĐ-CP), doanh nghiệp chế biến, xuất khẩu gỗ phải đáp ứng tiêu chí hoạt động liên tục trong thời gian tối thiểu bao lâu kể từ ngày đăng ký thành lập để được xem xét phân loại là Doanh nghiệp Nhóm I?",
    "options": [
      "Ít nhất 01 năm kể từ ngày đăng ký thành lập doanh nghiệp",
      "Ít nhất 02 năm kể từ ngày đăng ký thành lập doanh nghiệp",
      "Ít nhất 06 tháng kể từ ngày bắt đầu hoạt động sản xuất kinh doanh",
      "Ít nhất 18 tháng kể từ ngày chính thức đi vào hoạt động chế biến gỗ"
    ],
    "correct": "Ít nhất 01 năm kể từ ngày đăng ký thành lập doanh nghiệp",
    "explanation": "Căn cứ Điểm a Khoản 1 Điều 12 Nghị định số 102/2020/NĐ-CP (được sửa đổi, bổ sung bởi Nghị định số 120/2024/NĐ-CP và Nghị định số 42/2026/NĐ-CP): Doanh nghiệp Nhóm I là doanh nghiệp tuân thủ đầy đủ quy định của pháp luật trong việc thành lập và hoạt động ít nhất 01 năm kể từ ngày đăng ký thành lập doanh nghiệp, tuân thủ quy định bảo đảm gỗ hợp pháp và chế độ báo cáo, lưu giữ hồ sơ."
  },
  {
    "id": "CBLS_084",
    "question": "Tình huống: Cơ sở mỹ nghệ của anh K mua gốc cây gỗ lũa thuộc loài thông thường có nguồn gốc hợp pháp về chế tác thành tượng gỗ (sản phẩm gỗ hoàn chỉnh). Khi vận chuyển sản phẩm gỗ hoàn chỉnh này đi giao cho khách trong nước, anh K cần xuất trình hồ sơ lâm sản gì theo Thông tư số 26/2025/TT-BNNMT?",
    "options": [
      "Bản chính Bảng kê lâm sản do cơ sở của anh K lập (hoặc có xác nhận của cơ quan Kiểm lâm sở tại nếu anh K đề nghị xác nhận)",
      "Chỉ cần bản vẽ thiết kế tác phẩm mỹ nghệ của anh K",
      "Bắt buộc phải có Bảng kê lâm sản có xác nhận của Hạt Kiểm lâm sở tại trong mọi trường hợp",
      "Không cần giấy tờ gì vì gỗ lũa đã được đục thành tác phẩm nghệ thuật"
    ],
    "correct": "Bản chính Bảng kê lâm sản do cơ sở của anh K lập (hoặc có xác nhận của cơ quan Kiểm lâm sở tại nếu anh K đề nghị xác nhận)",
    "explanation": "Căn cứ Điểm đ Khoản 3, Khoản 4 Điều 5 và Khoản 6 Điều 11 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Đối với sản phẩm gỗ, hồ sơ khi mua bán, chuyển giao quyền sở hữu, vận chuyển trong nước là bản chính Bảng kê lâm sản do chủ lâm sản lập hoặc có xác nhận của cơ quan Kiểm lâm sở tại nếu chủ lâm sản đề nghị xác nhận (đồng thời cơ sở phải lưu giữ hồ sơ nguồn gốc gỗ đầu vào tại cơ sở theo Điều 13)."
  },
  {
    "id": "CBLS_085",
    "question": "Theo Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT), thời gian chốt số liệu báo cáo định kỳ hằng năm về tình hình nhập, xuất lâm sản của tổ chức, hộ kinh doanh gửi cơ quan Kiểm lâm sở tại được tính như thế nào?",
    "options": [
      "Tính từ ngày 15 tháng 12 năm trước kỳ báo cáo đến ngày 14 tháng 12 của kỳ báo cáo",
      "Tính từ ngày 01 tháng 01 đến ngày 31 tháng 12 của năm thực hiện báo cáo",
      "Tính từ ngày 15 tháng 01 năm trước kỳ báo cáo đến ngày 14 tháng 01 của kỳ báo cáo",
      "Tính từ ngày 25 tháng 12 năm trước kỳ báo cáo đến ngày 24 tháng 12 của kỳ báo cáo"
    ],
    "correct": "Tính từ ngày 15 tháng 12 năm trước kỳ báo cáo đến ngày 14 tháng 12 của kỳ báo cáo",
    "explanation": "Căn cứ Điểm c Khoản 7 Điều 32 Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT): Tổ chức, hộ kinh doanh báo cáo tình hình nhập, xuất lâm sản cho cơ quan Kiểm lâm sở tại theo Mẫu số 29 Phụ lục II định kỳ hằng năm trước ngày 15 tháng 01. Thời gian chốt số liệu báo cáo được tính từ ngày 15 tháng 12 năm trước kỳ báo cáo đến ngày 14 tháng 12 của kỳ báo cáo (trừ trường hợp đã cập nhật trên hệ thống quản lý, truy xuất nguồn gốc lâm sản điện tử)."
  },
  {
    "id": "CBLS_086",
    "question": "Tình huống: Ông A khai thác vườn keo sản xuất do gia đình tự trồng, có các lóng gỗ đã cắt khúc dài từ 1 mét trở lên. Theo Thông tư số 26/2025/TT-BNNMT (sửa đổi bởi TT 84/2025/TT-BNNMT), những lóng gỗ keo có đường kính đầu nhỏ từ bao nhiêu centimét (cm) trở lên thì được xác định là gỗ tròn?",
    "options": [
      "Từ 06 cm trở lên",
      "Từ 10 cm trở lên",
      "Từ 20 cm trở lên",
      "Từ 08 cm trở lên"
    ],
    "correct": "Từ 06 cm trở lên",
    "explanation": "Căn cứ Điểm c Khoản 2 Điều 3 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Gỗ tròn là gỗ nguyên khai, còn nguyên hình dạng sau khai thác chưa cắt khúc hoặc đã cắt khúc, gỗ bóc vỏ, gỗ lóc lõi có kích thước: 'Gỗ rừng trồng, rừng tràm, rừng ngập mặn có đường kính đầu nhỏ từ 06 cm trở lên và chiều dài từ 01 m trở lên'."
  },
  {
    "id": "CBLS_087",
    "question": "Tình huống: Hộ gia đình bà B tận thu gốc, rễ cây keo và cành ngọn sau khai thác rừng trồng của gia đình để bán cho xưởng băm dăm. Do gỗ có hình thù phức tạp, không đo được kích thước nên bà B cân được 3.000 kg. Theo Thông tư số 26/2025/TT-BNNMT, khối lượng này được quy đổi tương đương bằng bao nhiêu mét khối (m³) gỗ tròn?",
    "options": [
      "Quy đổi bằng 03 m³ gỗ tròn (1.000 kg bằng 01 m³ gỗ tròn)",
      "Quy đổi bằng 2,1 m³ gỗ tròn (áp dụng hệ số quy đổi 0,7)",
      "Quy đổi bằng 1,5 m³ gỗ tròn (áp dụng tỷ lệ 2.000 kg bằng 01 m³)",
      "Quy đổi bằng 2,5 m³ gỗ tròn (áp dụng hệ số quy đổi 1.200 kg bằng 01 m³)"
    ],
    "correct": "Quy đổi bằng 03 m³ gỗ tròn (1.000 kg bằng 01 m³ gỗ tròn)",
    "explanation": "Căn cứ Khoản 3 Điều 4 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Đối với gỗ gốc, rễ; gỗ có hình thù phức tạp, không đồng nhất; gỗ không thể đo được kích thước thì thực hiện cân, đơn vị tính là kilôgam (kg) hoặc tính theo ster; quy đổi 1000 kg bằng 01 m³ gỗ tròn hoặc quy đổi 01 ster bằng 0,7 m³ gỗ tròn."
  },
  {
    "id": "CBLS_088",
    "question": "Tình huống: Anh C là chủ xưởng mộc gia đình cưa xẻ gỗ hộp loài thông thường để bán cho người dân làm nhà. Theo Thông tư số 26/2025/TT-BNNMT (sửa đổi bởi TT 84/2025/TT-BNNMT), hộp gỗ xẻ có kích thước như thế nào thì anh C bắt buộc phải đánh số hiệu gỗ bằng sơn vào mặt cắt ngang hai đầu hộp gỗ?",
    "options": [
      "Chiều dài từ 01 m trở lên, chiều rộng từ 20 cm trở lên và chiều dày từ 05 cm trở lên",
      "Chiều dài từ 02 m trở lên, chiều rộng từ 30 cm trở lên và chiều dày từ 10 cm trở lên",
      "Chiều dài từ 01 m trở lên, chiều rộng từ 15 cm trở lên và chiều dày từ 03 cm trở lên",
      "Chỉ bắt buộc đánh số hiệu đối với gỗ hộp có chiều dài từ 03 m trở lên"
    ],
    "correct": "Chiều dài từ 01 m trở lên, chiều rộng từ 20 cm trở lên và chiều dày từ 05 cm trở lên",
    "explanation": "Căn cứ Khoản 7 Điều 4 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Chủ lâm sản hoặc cơ quan chức năng phải thực hiện đánh số hiệu đầu lóng, khúc, hộp, thanh, tấm gỗ đối với gỗ xẻ, gỗ đẽo có chiều dài từ 1 m trở lên, chiều rộng từ 20 cm trở lên, chiều dày từ 5 cm trở lên; số hiệu gỗ đánh bằng chữ Ả Rập, được ghi vào mặt cắt ngang hai đầu lóng gỗ, hộp gỗ và sử dụng sơn có màu sắc khác với màu của gỗ."
  },
  {
    "id": "CBLS_089",
    "question": "Tình huống: Ông D khai thác xong vườn cây keo do gia đình tự đầu tư và chuẩn bị bốc xếp lên xe ô tô tải xuất bán toàn bộ cho một xưởng chế biến trong một chuyến hàng. Theo Thông tư số 26/2025/TT-BNNMT, ông D phải lập Bảng kê lâm sản khi nào và theo mẫu số mấy?",
    "options": [
      "Lập khi bán, chuyển giao quyền sở hữu, vận chuyển lâm sản trong cùng một lần theo Mẫu số 01 Phụ lục II",
      "Chỉ lập sau khi xưởng chế biến đã cân và thanh toán xong toàn bộ tiền gỗ",
      "Lập theo Mẫu số 02 Phụ lục II áp dụng cho mọi trường hợp gỗ rừng trồng",
      "Lập trước thời điểm chặt hạ cây rừng ít nhất 03 ngày làm việc theo Mẫu số 01 Phụ lục II"
    ],
    "correct": "Lập khi bán, chuyển giao quyền sở hữu, vận chuyển lâm sản trong cùng một lần theo Mẫu số 01 Phụ lục II",
    "explanation": "Căn cứ Điểm b Khoản 1 và Khoản 2 Điều 5 Thông tư số 26/2025/TT-BNNMT (sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT): Chủ lâm sản lập Bảng kê lâm sản khi bán, chuyển giao quyền sở hữu, vận chuyển lâm sản trong cùng một lần theo Mẫu số 01 Phụ lục II ban hành kèm theo Thông tư này."
  },
  {
    "id": "CBLS_090",
    "question": "Tình huống: Hộ gia đình ông M chặt hạ một số cây xoan đào và mít trong vườn nhà do gia đình tự trồng để xuất bán cho thợ mộc đóng đồ gia dụng. Theo Thông tư số 26/2025/TT-BNNMT (sửa đổi bởi TT 84/2025/TT-BNNMT), hồ sơ lâm sản hợp pháp do gia đình ông M lập giao cho người mua gồm tài liệu gì?",
    "options": [
      "Bản chính Bảng kê lâm sản do ông M tự lập (hoặc có xác nhận của Kiểm lâm nếu ông M đề nghị)",
      "Bắt buộc phải có Giấy phép khai thác gỗ vườn nhà do Ủy ban nhân dân cấp xã cấp",
      "Bắt buộc phải có Biên bản kiểm tra thực địa và phê duyệt của Hạt Kiểm lâm trước khi chặt",
      "Hóa đơn bán hàng theo quy định của cơ quan Thuế kèm Giấy xác nhận nguồn gốc cây vườn nhà của UBND cấp xã"
    ],
    "correct": "Bản chính Bảng kê lâm sản do ông M tự lập (hoặc có xác nhận của Kiểm lâm nếu ông M đề nghị)",
    "explanation": "Căn cứ Khoản 3 Điều 8 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Gỗ loài thông thường khai thác từ rừng sản xuất là rừng trồng, gỗ có tên trùng với cây gỗ rừng tự nhiên, cây trồng phân tán, cây vườn nhà do tổ chức, cá nhân, hộ gia đình tự đầu tư: bản chính Bảng kê lâm sản do chủ lâm sản lập hoặc bản chính Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm sở tại đối với trường hợp chủ lâm sản đề nghị xác nhận."
  },
  {
    "id": "CBLS_091",
    "question": "Tình huống: Gia đình anh P khai thác gỗ rừng trồng sản xuất của mình, sau đó tự dùng xe ô tô tải gia đình chở gỗ từ đồi rừng về tập kết tại bãi gỗ cạnh nhà trong cùng một lần và cùng một phương tiện. Theo Thông tư số 26/2025/TT-BNNMT, hồ sơ lâm sản đi đường thực hiện như thế nào?",
    "options": [
      "Thực hiện theo quy định tại Điều 8 Thông tư này (mang theo bản chính Bảng kê lâm sản do anh P tự lập)",
      "Bắt buộc phải xin Giấy phép vận chuyển đặc biệt của cơ quan Kiểm lâm sở tại trước khi chuyển",
      "Bắt buộc phải có hóa đơn giá trị gia tăng kèm theo ngay từ khi chở ra khỏi đồi rừng",
      "Bắt buộc phải có Giấy xác nhận của Trưởng thôn và Biên bản nghiệm thu khai thác của Kiểm lâm địa bàn"
    ],
    "correct": "Thực hiện theo quy định tại Điều 8 Thông tư này (mang theo bản chính Bảng kê lâm sản do anh P tự lập)",
    "explanation": "Căn cứ Khoản 3 Điều 11 Thông tư số 26/2025/TT-BNNMT (hợp nhất tại VBHN số 04/VBHN-BNNMT): Đối với lâm sản sau khai thác do chủ lâm sản vận chuyển về kho, bãi trong cùng một lần và cùng một phương tiện: thực hiện theo quy định tại Điều 8 Thông tư này (bản chính Bảng kê lâm sản do chủ lâm sản lập)."
  },
  {
    "id": "CBLS_092",
    "question": "Tình huống: Hộ kinh doanh xưởng mộc của ông T thu mua gỗ keo tròn từ các hộ dân trồng rừng trên địa bàn xã về xẻ làm cốt pha và đóng đồ mộc dân dụng. Theo Thông tư số 26/2025/TT-BNNMT (sửa đổi bởi TT 84/2025/TT-BNNMT), hồ sơ lâm sản bắt buộc phải có và lưu giữ tại cơ sở chế biến của ông T gồm những gì?",
    "options": [
      "Bản chính Bảng kê lâm sản của người bán giao, Sổ theo dõi nhập xuất lâm sản (Mẫu số 04) và bản sao hồ sơ khi xuất bán",
      "Chỉ cần lưu giữ chứng từ thanh toán tiền mặt qua ngân hàng giữa bên mua và bên bán",
      "Bản sao Bảng kê lâm sản có chứng thực của UBND cấp xã, Sổ theo dõi nhập xuất lâm sản (Mẫu số 04) và hóa đơn bán lẻ",
      "Không phải lưu giữ hồ sơ hay sổ sách nếu chỉ cưa xẻ gỗ cho người dân trong cùng xã"
    ],
    "correct": "Bản chính Bảng kê lâm sản của người bán giao, Sổ theo dõi nhập xuất lâm sản (Mẫu số 04) và bản sao hồ sơ khi xuất bán",
    "explanation": "Căn cứ Điểm b, Điểm c và Điểm d Khoản 1 Điều 13 Thông tư số 26/2025/TT-BNNMT (sửa đổi bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT): Hồ sơ lâm sản tại cơ sở chế biến, kinh doanh gồm: Bản chính Bảng kê lâm sản và bản sao hồ sơ lâm sản chuyển giao quyền sở hữu từ tổ chức, cá nhân liền kề trước đó; Bản sao hồ sơ lâm sản khi xuất bán; Sổ theo dõi nhập, xuất lâm sản đối với tổ chức, hộ kinh doanh theo Mẫu số 04 Phụ lục II."
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = question_CBLS;
}
