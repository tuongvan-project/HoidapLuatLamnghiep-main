/**
 * BỘ CÂU HỎI TRẮC NGHIỆM PHÁP LUẬT VÀ NGHIỆP VỤ KIỂM LÂM (100 CÂU)
 * Cấu trúc: Tương thích hoàn toàn với questions.js trong Game Hỏi đáp Luật Lâm nghiệp
 * Định dạng: 1 đáp án đúng + 3 đáp án sai/bẫy thực tế (4 options)
 * Nguồn: Kho QPPL lâm nghiệp (Luật Lâm nghiệp, Nghị định 146/2026/NĐ-CP, Nghị định 156/91,
 * Thông tư 26/84, Thông tư 85/2025/TT-BNNMT, Thông tư 84/2025/TT-BNNMT, Quyết định 1334/QĐ-SNNMT,
 * Hướng dẫn 230/HD-CCKL của Chi cục Kiểm lâm Tuyên Quang, Bộ luật Hình sự, Luật XLVPHC)
 */

const questions = [
    {
        question: "Theo Nghị định 146/2026/NĐ-CP, Kiểm lâm viên đang thi hành công vụ có quyền phạt tiền tối đa đến bao nhiêu?",
        options: [
            "10.000.000 đồng",
            "25.000.000 đồng",
            "50.000.000 đồng",
            "100.000.000 đồng"
        ],
        correct: "25.000.000 đồng",
        explanation: "Điểm b Khoản 1 Điều 29 Nghị định 146/2026/NĐ-CP quy định Kiểm lâm viên đang thi hành công vụ có quyền phạt tiền đến 25.000.000 đồng đối với hành vi vi phạm hành chính trong lĩnh vực lâm nghiệp."
    },
    {
        question: "Kiểm lâm viên đang thi hành công vụ có quyền tịch thu tang vật, phương tiện VPHC có giá trị tối đa là bao nhiêu?",
        options: [
            "Không quá 25.000.000 đồng",
            "Không quá 02 lần mức phạt tiền thẩm quyền (50.000.000 đồng)",
            "Không quá 100.000.000 đồng",
            "Toàn bộ tang vật không giới hạn giá trị"
        ],
        correct: "Không quá 02 lần mức phạt tiền thẩm quyền (50.000.000 đồng)",
        explanation: "Điểm c Khoản 1 Điều 29 Nghị định 146/2026/NĐ-CP quy định tịch thu tang vật, phương tiện có giá trị không vượt quá 02 lần mức tiền phạt thẩm quyền (tức đến 50.000.000 đồng)."
    },
    {
        question: "Theo Nghị định 146/2026/NĐ-CP, Trạm trưởng Trạm Kiểm lâm có thẩm quyền phạt tiền đối với cá nhân tối đa bao nhiêu?",
        options: [
            "50.000.000 đồng",
            "100.000.000 đồng",
            "150.000.000 đồng",
            "200.000.000 đồng"
        ],
        correct: "100.000.000 đồng",
        explanation: "Điểm b Khoản 2 Điều 29 Nghị định 146/2026/NĐ-CP quy định Trạm trưởng Trạm Kiểm lâm có quyền phạt tiền đến 100.000.000 đồng."
    },
    {
        question: "Theo Nghị định 146/2026/NĐ-CP, Hạt trưởng Hạt Kiểm lâm có quyền phạt tiền đối với cá nhân vi phạm tối đa bao nhiêu?",
        options: [
            "100.000.000 đồng",
            "150.000.000 đồng",
            "200.000.000 đồng",
            "250.000.000 đồng"
        ],
        correct: "150.000.000 đồng",
        explanation: "Điểm b Khoản 3 Điều 29 Nghị định 146/2026/NĐ-CP quy định Hạt trưởng Hạt Kiểm lâm và Đội trưởng Đội Kiểm lâm cơ động và PCCCR có quyền phạt tiền đến 150.000.000 đồng."
    },
    {
        question: "Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh có thẩm quyền xử phạt tiền đối với cá nhân vi phạm tối đa bao nhiêu?",
        options: [
            "150.000.000 đồng",
            "200.000.000 đồng",
            "250.000.000 đồng",
            "500.000.000 đồng"
        ],
        correct: "250.000.000 đồng",
        explanation: "Điểm b Khoản 4 Điều 29 Nghị định 146/2026/NĐ-CP quy định Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh có quyền phạt tiền đến 250.000.000 đồng (đối với tổ chức là 500.000.000 đồng)."
    },
    {
        question: "Theo Nghị định 146/2026/NĐ-CP, Chủ tịch UBND cấp xã có thẩm quyền phạt tiền đối với cá nhân tối đa bao nhiêu?",
        options: [
            "5.000.000 đồng",
            "50.000.000 đồng",
            "100.000.000 đồng",
            "250.000.000 đồng"
        ],
        correct: "250.000.000 đồng",
        explanation: "Điểm b Khoản 1 Điều 31 Nghị định 146/2026/NĐ-CP quy định Chủ tịch UBND cấp xã có quyền phạt tiền đến 250.000.000 đồng và tịch thu toàn bộ tang vật, phương tiện VPHC."
    },
    {
        question: "Mức phạt tiền tối đa mà Chủ tịch UBND cấp tỉnh có quyền áp dụng đối với cá nhân vi phạm trong lĩnh vực lâm nghiệp là bao nhiêu?",
        options: [
            "250.000.000 đồng",
            "300.000.000 đồng",
            "500.000.000 đồng",
            "1.000.000.000 đồng"
        ],
        correct: "500.000.000 đồng",
        explanation: "Điểm b Khoản 2 Điều 31 Nghị định 146/2026/NĐ-CP quy định Chủ tịch UBND cấp tỉnh có quyền phạt tiền đến 500.000.000 đồng (đối với tổ chức là 1.000.000.000 đồng)."
    },
    {
        question: "Mức phạt tiền đối với tổ chức vi phạm hành chính trong lĩnh vực lâm nghiệp được tính như thế nào so với cá nhân?",
        options: [
            "Bằng mức phạt đối với cá nhân",
            "Gấp 02 lần mức phạt đối với cá nhân",
            "Gấp 03 lần mức phạt đối với cá nhân",
            "Gấp 01,5 lần mức phạt đối với cá nhân"
        ],
        correct: "Gấp 02 lần mức phạt đối với cá nhân",
        explanation: "Điểm b Khoản 1 Điều 4 Nghị định 146/2026/NĐ-CP quy định mức phạt tiền đối với tổ chức gấp 02 lần mức phạt tiền đối với cá nhân có cùng hành vi vi phạm."
    },
    {
        question: "Người nào sau đây có thẩm quyền lập biên bản vi phạm hành chính trong lĩnh vực lâm nghiệp?",
        options: [
            "Chỉ Hạt trưởng Hạt Kiểm lâm",
            "Công chức, viên chức đang thi hành công vụ theo nhiệm vụ được giao",
            "Chỉ lực lượng Công an nhân dân",
            "Chủ rừng là tổ chức"
        ],
        correct: "Công chức, viên chức đang thi hành công vụ theo nhiệm vụ được giao",
        explanation: "Khoản 3 Điều 28 Nghị định 146/2026/NĐ-CP quy định công chức, viên chức đang thi hành công vụ, nhiệm vụ theo chức năng, quyền hạn được giao có quyền lập biên bản VPHC."
    },
    {
        question: "Thời hạn người có thẩm quyền phải ra quyết định xử phạt vi phạm hành chính kể từ ngày lập biên bản là bao lâu?",
        options: [
            "05 ngày làm việc",
            "07 ngày làm việc",
            "10 ngày làm việc",
            "15 ngày làm việc"
        ],
        correct: "07 ngày làm việc",
        explanation: "Khoản 1 Điều 66 Luật Xử lý VPHC quy định người có thẩm quyền phải ra quyết định xử phạt trong thời hạn 07 ngày làm việc kể từ ngày lập biên bản vi phạm hành chính."
    },
    {
        question: "Thời hạn tạm giữ tang vật, phương tiện vi phạm hành chính thông thường là bao nhiêu ngày kể từ ngày tạm giữ?",
        options: [
            "03 ngày làm việc",
            "05 ngày làm việc",
            "07 ngày làm việc",
            "10 ngày làm việc"
        ],
        correct: "07 ngày làm việc",
        explanation: "Khoản 8 Điều 125 Luật Xử lý VPHC quy định thời hạn tạm giữ tang vật, phương tiện VPHC thông thường là 07 ngày làm việc kể từ ngày tạm giữ."
    },
    {
        question: "Trường hợp vụ việc VPHC có nhiều tình tiết phức tạp cần xác minh thì thời hạn tạm giữ có thể kéo dài tối đa bao lâu?",
        options: [
            "Không quá 15 ngày",
            "Không quá 30 ngày",
            "Không quá 45 ngày",
            "Không quá 60 ngày"
        ],
        correct: "Không quá 30 ngày",
        explanation: "Khoản 8 Điều 125 Luật Xử lý VPHC quy định trường hợp có nhiều tình tiết phức tạp, cần xác minh thì thời hạn tạm giữ có thể kéo dài tối đa không quá 30 ngày."
    },
    {
        question: "Hành vi bóc vỏ, ken cây, khoan vào thân cây rừng gây ảnh hưởng sinh trưởng cây rừng có đơn vị tính thiệt hại là gì?",
        options: [
            "Tính theo mét khối (m3) gỗ thu hồi",
            "Tính theo diện tích mét vuông (m2) tán lá",
            "Tính theo mỗi cây rừng bị xâm hại",
            "Tính theo tỷ lệ phần trăm độ tàn che"
        ],
        correct: "Tính theo mỗi cây rừng bị xâm hại",
        explanation: "Điểm b Khoản 2 Điều 7 Nghị định 146/2026/NĐ-CP quy định đơn vị tính để xác định thiệt hại đối với hành vi hủy hoại thân cây, gốc rễ là mỗi cây rừng bị xâm hại."
    },
    {
        question: "Đơn vị tính để xác định thiệt hại đối với hành vi phá rừng trái pháp luật dạng chặt phá bề mặt rừng là gì?",
        options: [
            "Mét vuông (m2) diện tích rừng bị phá",
            "Mét khối (m3) gỗ bị chặt hạ",
            "Số lượng cây gỗ lớn trên diện tích phá",
            "Giá trị ước tính bằng tiền đồng"
        ],
        correct: "Mét vuông (m2) diện tích rừng bị phá",
        explanation: "Điểm a Khoản 2 Điều 7 Nghị định 146/2026/NĐ-CP quy định đơn vị tính để xác định thiệt hại do hành vi phá rừng trái pháp luật là mét vuông (m2) diện tích rừng bị thiệt hại."
    },
    {
        question: "Theo quy định hiện hành về quản lý lâm sản, cơ quan nào có thẩm quyền xác nhận Bảng kê lâm sản?",
        options: [
            "Ủy ban nhân dân cấp xã",
            "Cơ quan Kiểm lâm sở tại",
            "Sở Nông nghiệp và Môi trường",
            "Công an giao thông"
        ],
        correct: "Cơ quan Kiểm lâm sở tại",
        explanation: "Khoản 5 Điều 5 Thông tư 26/2022/TT-BNNPTNT (hợp nhất) quy định thẩm quyền xác nhận Bảng kê lâm sản thuộc cơ quan Kiểm lâm sở tại (Hạt Kiểm lâm hoặc Chi cục Kiểm lâm nơi không có Hạt)."
    },
    {
        question: "Thời hạn cơ quan Kiểm lâm sở tại trả kết quả xác nhận Bảng kê lâm sản kể từ khi nhận đủ hồ sơ hợp lệ là bao lâu?",
        options: [
            "01 ngày làm việc",
            "02 ngày làm việc",
            "03 ngày làm việc",
            "05 ngày làm việc"
        ],
        correct: "02 ngày làm việc",
        explanation: "Khoản 7 Điều 5 Thông tư 26/2022/TT-BNNPTNT (hợp nhất) quy định trong thời hạn 02 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ, cơ quan Kiểm lâm sở tại phải trả kết quả xác nhận Bảng kê lâm sản."
    },
    {
        question: "Trường hợp cơ quan Kiểm lâm cần kiểm tra thực tế nguồn gốc lâm sản trước khi xác nhận Bảng kê, thời hạn là bao lâu?",
        options: [
            "03 ngày làm việc",
            "05 ngày làm việc",
            "07 ngày làm việc",
            "10 ngày làm việc"
        ],
        correct: "03 ngày làm việc",
        explanation: "Điểm b Khoản 7 Điều 5 Thông tư 26/2022/TT-BNNPTNT (hợp nhất) quy định trường hợp phải kiểm tra thực tế, thời hạn xác nhận hoàn thành trong 03 ngày làm việc kể từ ngày nhận đủ hồ sơ."
    },
    {
        question: "Trường hợp nào sau đây lâm sản KHÔNG bắt buộc phải xác nhận Bảng kê lâm sản của cơ quan Kiểm lâm?",
        options: [
            "Gỗ tròn khai thác từ rừng tự nhiên",
            "Gỗ nguyên liệu của doanh nghiệp Nhóm I và sản phẩm gỗ hoàn chỉnh",
            "Lâm sản sau xử lý tịch thu bán đấu giá",
            "Động vật rừng nguy cấp, quý, hiếm"
        ],
        correct: "Gỗ nguyên liệu của doanh nghiệp Nhóm I và sản phẩm gỗ hoàn chỉnh",
        explanation: "Khoản 4 Điều 5 Thông tư 26/2022/TT-BNNPTNT (hợp nhất) quy định gỗ nguyên liệu của doanh nghiệp Nhóm I và sản phẩm gỗ hoàn chỉnh không phải xác nhận Bảng kê lâm sản."
    },
    {
        question: "Ai có thẩm quyền phê duyệt Phương án khai thác gỗ rừng trồng của hộ gia đình, cá nhân, cộng đồng dân cư?",
        options: [
            "Chủ tịch Ủy ban nhân dân cấp xã",
            "Hạt trưởng Hạt Kiểm lâm",
            "Chi cục trưởng Chi cục Kiểm lâm",
            "Giám đốc Sở Nông nghiệp và Môi trường"
        ],
        correct: "Chủ tịch Ủy ban nhân dân cấp xã",
        explanation: "Điểm c Khoản 3 Điều 6 Thông tư 26/2022/TT-BNNPTNT (hợp nhất) quy định Chủ tịch UBND cấp xã phê duyệt phương án khai thác của HGĐ, cá nhân, cộng đồng dân cư trên địa bàn."
    },
    {
        question: "Cơ quan nào phê duyệt Phương án khai thác gỗ rừng trồng do Nhà nước làm đại diện chủ sở hữu của tổ chức cấp tỉnh?",
        options: [
            "UBND cấp xã",
            "Cơ quan phê duyệt nguồn vốn trồng rừng hoặc Sở Nông nghiệp và Môi trường",
            "Hạt Kiểm lâm sở tại",
            "Ban quản lý rừng"
        ],
        correct: "Cơ quan phê duyệt nguồn vốn trồng rừng hoặc Sở Nông nghiệp và Môi trường",
        explanation: "Điểm b Khoản 3 Điều 6 Thông tư 26/2022/TT-BNNPTNT (hợp nhất) quy định cơ quan phê duyệt nguồn vốn hoặc Sở NN&MT nơi có rừng phê duyệt phương án khai thác của chủ rừng tổ chức."
    },
    {
        question: "Trường hợp nào sau đây chủ rừng KHÔNG phải trình cơ quan có thẩm quyền phê duyệt phương án khai thác?",
        options: [
            "Khai thác rừng sản xuất là rừng trồng do chủ rừng tự đầu tư",
            "Khai thác rừng phòng hộ là rừng trồng tự đầu tư",
            "Khai thác rừng trồng bằng nguồn vốn ngân sách nhà nước",
            "Khai thác tận thu gỗ từ rừng tự nhiên"
        ],
        correct: "Khai thác rừng sản xuất là rừng trồng do chủ rừng tự đầu tư",
        explanation: "Khoản 7 Điều 6 Thông tư 26/2022/TT-BNNPTNT (hợp nhất) quy định khai thác rừng sản xuất là rừng trồng do chủ rừng tự đầu tư thì chủ rừng tự quyết định khai thác, không phải trình phê duyệt phương án."
    },
    {
        question: "Cơ quan nào có thẩm quyền phê duyệt phương án khai thác động vật rừng thông thường từ tự nhiên?",
        options: [
            "Ủy ban nhân dân cấp xã",
            "Cơ quan Kiểm lâm sở tại",
            "Bộ Nông nghiệp và Môi trường",
            "Sở Tài nguyên và Môi trường"
        ],
        correct: "Cơ quan Kiểm lâm sở tại",
        explanation: "Khoản 1 Điều 7 Thông tư 26/2022/TT-BNNPTNT (hợp nhất) quy định thẩm quyền phê duyệt phương án khai thác động vật rừng thông thường từ tự nhiên thuộc cơ quan Kiểm lâm sở tại."
    },
    {
        question: "Theo Thông tư 84/2025/TT-BNNMT, cơ quan nào có thẩm quyền cấp, cấp lại và hủy mã số vùng trồng rừng sản xuất?",
        options: [
            "Chi cục Kiểm lâm hoặc cơ quan chuyên môn thuộc Sở Nông nghiệp và Môi trường",
            "Hạt Kiểm lâm địa bàn",
            "Ủy ban nhân dân cấp xã",
            "Công ty lâm nghiệp"
        ],
        correct: "Chi cục Kiểm lâm hoặc cơ quan chuyên môn thuộc Sở Nông nghiệp và Môi trường",
        explanation: "Khoản 1 Điều 14 Thông tư 84/2025/TT-BNNMT quy định Chi cục Kiểm lâm hoặc cơ quan chuyên môn thuộc Sở Nông nghiệp và Môi trường có thẩm quyền cấp, cấp lại và hủy mã số vùng trồng rừng sản xuất."
    },
    {
        question: "Thời hạn kiểm tra đối chiếu hệ thống theo dõi diễn biến rừng và cấp mã số vùng trồng rừng sản xuất là bao lâu?",
        options: [
            "03 ngày làm việc",
            "05 ngày làm việc",
            "10 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ",
            "15 ngày làm việc"
        ],
        correct: "10 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ",
        explanation: "Điểm c Khoản 3 Điều 14 Thông tư 84/2025/TT-BNNMT quy định trong 10 ngày làm việc kể từ ngày nhận được hồ sơ hợp lệ, cơ quan cấp mã số kiểm tra, đối chiếu diễn biến rừng và cấp mã số kèm mã QR."
    },
    {
        question: "Cơ quan nào có thẩm quyền cấp mã số cơ sở nuôi, cơ sở trồng loài động vật, thực vật hoang dã thuộc Phụ lục CITES?",
        options: [
            "Cơ quan Kiểm lâm cấp tỉnh",
            "Hạt Kiểm lâm sở tại",
            "Ủy ban nhân dân cấp xã",
            "Ban Quản lý khu bảo tồn thiên nhiên"
        ],
        correct: "Cơ quan Kiểm lâm cấp tỉnh",
        explanation: "Điểm a Khoản 2 Điều 26 Thông tư 85/2025/TT-BNNMT quy định cơ quan Kiểm lâm cấp tỉnh cấp mã số cơ sở nuôi, cơ sở trồng loài động vật, thực vật thuộc Phụ lục CITES."
    },
    {
        question: "Thời hạn cấp mã số cơ sở nuôi loài thuộc Phụ lục CITES khi hồ sơ đầy đủ, hợp lệ và không cần kiểm tra thực tế là bao lâu?",
        options: [
            "01 ngày làm việc",
            "03 ngày làm việc kể từ ngày nhận hồ sơ hợp lệ",
            "05 ngày làm việc",
            "10 ngày làm việc"
        ],
        correct: "03 ngày làm việc kể từ ngày nhận hồ sơ hợp lệ",
        explanation: "Điểm c Khoản 4 Điều 26 Thông tư 85/2025/TT-BNNMT quy định trong thời hạn 03 ngày làm việc kể từ ngày nhận được hồ sơ hợp lệ, cơ quan cấp mã số thực hiện cấp mã số cơ sở nuôi."
    },
    {
        question: "Trường hợp cơ sở nuôi loài thuộc Phụ lục CITES cần kiểm tra thực tế điều kiện chuồng trại, thời hạn cấp mã số là bao lâu?",
        options: [
            "05 ngày làm việc",
            "07 ngày làm việc",
            "10 ngày làm việc",
            "15 ngày làm việc kể từ ngày nhận hồ sơ hợp lệ"
        ],
        correct: "15 ngày làm việc kể từ ngày nhận hồ sơ hợp lệ",
        explanation: "Điểm d Khoản 4 Điều 26 Thông tư 85/2025/TT-BNNMT quy định trường hợp cần kiểm tra thực tế, trong thời hạn 15 ngày làm việc kể từ ngày nhận hồ sơ hợp lệ, cơ quan cấp mã số kiểm tra và cấp mã số."
    },
    {
        question: "Khi đưa động vật rừng thông thường về cơ sở nuôi, chủ cơ sở phải gửi thông báo kèm hồ sơ nguồn gốc đến cơ quan Kiểm lâm trong bao lâu?",
        options: [
            "Trong ngày tiếp nhận",
            "Tối đa 03 ngày làm việc",
            "Tối đa 05 ngày làm việc",
            "Tối đa 10 ngày làm việc"
        ],
        correct: "Tối đa 03 ngày làm việc",
        explanation: "Khoản 2 Điều 24 Thông tư 85/2025/TT-BNNMT quy định trong thời hạn tối đa 03 ngày làm việc kể từ ngày đưa động vật về nuôi, cơ sở phải gửi thông báo kèm hồ sơ nguồn gốc đến cơ quan Kiểm lâm sở tại."
    },
    {
        question: "Khi phát hiện động vật rừng bị thương, mất nơi sinh sống tự nhiên, tổ chức, cá nhân có trách nhiệm thông báo ngay cho cơ quan nào?",
        options: [
            "Ủy ban nhân dân cấp xã nơi phát hiện",
            "Sở Nông nghiệp và Môi trường",
            "Cảnh sát phòng chống tội phạm môi trường",
            "Chi cục Thú y tỉnh"
        ],
        correct: "Ủy ban nhân dân cấp xã nơi phát hiện",
        explanation: "Điểm a Khoản 3 Điều 8 Thông tư 85/2025/TT-BNNMT quy định tổ chức, cá nhân khi phát hiện động vật bị lạc, bị thương có trách nhiệm thông báo ngay cho UBND cấp xã nơi phát hiện để kịp thời cứu hộ."
    },
    {
        question: "Thời hạn thông báo công khai và xác minh chủ sở hữu hợp pháp đối với động vật hoang dã đi lạc do UBND cấp xã thực hiện là bao lâu?",
        options: [
            "03 ngày làm việc",
            "05 ngày làm việc",
            "10 ngày làm việc",
            "30 ngày"
        ],
        correct: "05 ngày làm việc",
        explanation: "Điểm b Khoản 3 Điều 8 Thông tư 85/2025/TT-BNNMT quy định UBND cấp xã thông báo công khai tại trụ sở và trên phương tiện thông tin đại chúng; thời hạn thông báo và xác minh là 05 ngày làm việc."
    },
    {
        question: "Cơ quan nào có thẩm quyền quyết định chủ trương chuyển mục đích sử dụng rừng sang mục đích khác đối với dự án trên địa bàn tỉnh?",
        options: [
            "Hội đồng nhân dân cấp tỉnh",
            "Chi cục Kiểm lâm cấp tỉnh",
            "Giám đốc Sở Nông nghiệp và Môi trường",
            "Chủ tịch UBND cấp huyện"
        ],
        correct: "Hội đồng nhân dân cấp tỉnh",
        explanation: "Điều 20 Luật Lâm nghiệp (sửa đổi) và Nghị định 156/2018/NĐ-CP (hợp nhất) quy định HĐND cấp tỉnh có thẩm quyền quyết định chủ trương chuyển mục đích sử dụng rừng sang mục đích khác trên địa bàn."
    },
    {
        question: "Cơ quan nào chủ trì tiếp nhận và tổ chức thẩm định hồ sơ đề nghị quyết định chủ trương chuyển mục đích sử dụng rừng sang mục đích khác?",
        options: [
            "Sở Nông nghiệp và Môi trường",
            "Sở Kế hoạch và Đầu tư",
            "Văn phòng UBND tỉnh",
            "Hạt Kiểm lâm sở tại"
        ],
        correct: "Sở Nông nghiệp và Môi trường",
        explanation: "Khoản 1 Điều 41 Nghị định 156/2018/NĐ-CP (hợp nhất) quy định Sở Nông nghiệp và Môi trường chủ trì tiếp nhận và phối hợp với các cơ quan liên quan thẩm định hồ sơ trình UBND tỉnh, HĐND tỉnh."
    },
    {
        question: "Cơ quan nào có thẩm quyền thực hiện việc đánh giá và phân loại doanh nghiệp chế biến và xuất khẩu gỗ (Nhóm I, Nhóm II)?",
        options: [
            "Cơ quan Kiểm lâm cấp tỉnh (Chi cục Kiểm lâm)",
            "Hạt Kiểm lâm sở tại",
            "Cục Thuế tỉnh",
            "Hiệp hội Gỗ và Lâm sản"
        ],
        correct: "Cơ quan Kiểm lâm cấp tỉnh (Chi cục Kiểm lâm)",
        explanation: "Điều 13 Nghị định 102/2020/NĐ-CP (hợp nhất) quy định cơ quan Kiểm lâm cấp tỉnh có trách nhiệm tiếp nhận hồ sơ, đánh giá và quyết định phân loại doanh nghiệp chế biến, xuất khẩu gỗ."
    },
    {
        question: "Theo Luật Lâm nghiệp, Kiểm lâm được quyền dừng phương tiện giao thông vận tải đường bộ khi nào?",
        options: [
            "Khi có dấu hiệu phương tiện vận chuyển lâm sản trái pháp luật",
            "Kiểm lâm được quyền dừng bất kỳ phương tiện nào để kiểm tra định kỳ",
            "Chỉ được dừng khi có lực lượng Cảnh sát giao thông đi cùng",
            "Chỉ được dừng phương tiện trong phạm vi rừng đặc dụng"
        ],
        correct: "Khi có dấu hiệu phương tiện vận chuyển lâm sản trái pháp luật",
        explanation: "Điểm d Khoản 2 Điều 104 Luật Lâm nghiệp quy định Kiểm lâm có quyền dừng phương tiện giao thông vận tải có dấu hiệu vận chuyển lâm sản trái pháp luật để kiểm tra, xử lý theo thẩm quyền."
    },
    {
        question: "Kiểm lâm được trang bị, quản lý và sử dụng vũ khí, công cụ hỗ trợ theo quy định của văn bản nào?",
        options: [
            "Luật Quản lý, sử dụng vũ khí, vật liệu nổ và công cụ hỗ trợ",
            "Quy chế nội bộ của Chi cục Kiểm lâm tự ban hành",
            "Theo sự phân công miệng của Ủy ban nhân dân xã",
            "Kiểm lâm không thuộc đối tượng được trang bị vũ khí"
        ],
        correct: "Luật Quản lý, sử dụng vũ khí, vật liệu nổ và công cụ hỗ trợ",
        explanation: "Điểm c Khoản 2 Điều 104 Luật Lâm nghiệp và Điều 12 Nghị định 01/2019/NĐ-CP quy định Kiểm lâm được trang bị, sử dụng vũ khí, CCHT theo quy định của Luật Quản lý, sử dụng vũ khí, VLN và CCHT."
    },
    {
        question: "Theo Quyết định 1334/QĐ-SNNMT, phòng nào của Chi cục Kiểm lâm Tuyên Quang chủ trì tham mưu quản lý giống cây trồng và quản lý rừng bền vững?",
        options: [
            "Phòng Sử dụng và Phát triển rừng",
            "Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên",
            "Phòng Tổ chức - Hành chính",
            "Đội Kiểm lâm cơ động và PCCCR"
        ],
        correct: "Phòng Sử dụng và Phát triển rừng",
        explanation: "Điều 4 Quyết định số 1334/QĐ-SNNMT ngày 24/8/2025 của Sở NN&MT Tuyên Quang quy định Phòng Sử dụng và Phát triển rừng chủ trì tham mưu về phát triển rừng, giống cây trồng, quản lý rừng bền vững."
    },
    {
        question: "Theo Quyết định 1334/QĐ-SNNMT, phòng nào của Chi cục Kiểm lâm Tuyên Quang chủ trì tham mưu xử lý vi phạm hành chính và tố tụng hình sự?",
        options: [
            "Phòng Điều tra, xử lý vi phạm về lâm nghiệp",
            "Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên",
            "Phòng Tổ chức - Hành chính",
            "Hạt Kiểm lâm địa bàn"
        ],
        correct: "Phòng Điều tra, xử lý vi phạm về lâm nghiệp",
        explanation: "Điều 5 Quyết định số 1334/QĐ-SNNMT quy định Phòng Điều tra, xử lý vi phạm về lâm nghiệp tham mưu công tác pháp chế, điều tra, xử lý VPHC và áp dụng pháp luật tố tụng hình sự thuộc thẩm quyền."
    },
    {
        question: "Theo Quyết định 1334/QĐ-SNNMT, phòng chuyên môn nào thuộc Chi cục Kiểm lâm Tuyên Quang chủ trì tham mưu công tác PCCCR?",
        options: [
            "Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên",
            "Phòng Sử dụng và Phát triển rừng",
            "Phòng Tổ chức - Hành chính",
            "Bộ phận Văn thư Chi cục"
        ],
        correct: "Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên",
        explanation: "Điều 3 Quyết định số 1334/QĐ-SNNMT quy định Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên chủ trì tham mưu thực hiện công tác quản lý, bảo vệ rừng, bảo tồn đa dạng sinh học và PCCCR."
    },
    {
        question: "Hành vi vận chuyển lâm sản trái pháp luật bị xử phạt theo điều khoản nào của Nghị định 146/2026/NĐ-CP?",
        options: [
            "Điều 25 Nghị định 146/2026/NĐ-CP",
            "Điều 15 Nghị định 146/2026/NĐ-CP",
            "Điều 18 Nghị định 146/2026/NĐ-CP",
            "Điều 28 Nghị định 146/2026/NĐ-CP"
        ],
        correct: "Điều 25 Nghị định 146/2026/NĐ-CP",
        explanation: "Điều 25 Nghị định 146/2026/NĐ-CP quy định chi tiết về hình thức, mức phạt tiền và biện pháp khắc phục hậu quả đối với hành vi vận chuyển lâm sản trái pháp luật."
    },
    {
        question: "Hành vi vi phạm quy định về phòng cháy và chữa cháy rừng gây cháy rừng bị xử phạt theo điều nào của Nghị định 146/2026/NĐ-CP?",
        options: [
            "Điều 10",
            "Điều 16",
            "Điều 20",
            "Điều 23"
        ],
        correct: "Điều 20",
        explanation: "Điều 20 Nghị định 146/2026/NĐ-CP quy định xử phạt đối với hành vi vi phạm các quy định pháp luật về phòng cháy và chữa cháy rừng gây cháy rừng."
    },
    {
        question: "Khai thác trái phép rừng sản xuất là rừng tự nhiên đối với gỗ thông thường từ khối lượng bao nhiêu m3 thì bị truy cứu TNHS theo Điều 232 BLHS?",
        options: [
            "Từ 05 m3 trở lên",
            "Từ 10 m3 trở lên",
            "Từ 15 m3 trở lên",
            "Từ 20 m3 trở lên"
        ],
        correct: "Từ 10 m3 trở lên",
        explanation: "Điểm b Khoản 1 Điều 232 Bộ luật Hình sự quy định khai thác trái phép rừng sản xuất là rừng tự nhiên từ 10 m3 đến dưới 20 m3 gỗ loài thông thường thì bị truy cứu trách nhiệm hình sự."
    },
    {
        question: "Khai thác trái phép rừng sản xuất là rừng trồng đối với gỗ thông thường từ khối lượng bao nhiêu m3 thì bị truy cứu TNHS theo Điều 232 BLHS?",
        options: [
            "Từ 10 m3 trở lên",
            "Từ 15 m3 trở lên",
            "Từ 20 m3 trở lên",
            "Từ 30 m3 trở lên"
        ],
        correct: "Từ 20 m3 trở lên",
        explanation: "Điểm a Khoản 1 Điều 232 Bộ luật Hình sự quy định khai thác trái phép rừng sản xuất là rừng trồng từ 20 m3 đến dưới 40 m3 gỗ loài thông thường thì cấu thành tội phạm hình sự."
    },
    {
        question: "Khai thác trái phép gỗ loài nguy cấp, quý, hiếm Nhóm IA tại rừng đặc dụng từ bao nhiêu m3 thì bị truy cứu TNHS theo Điều 232 BLHS?",
        options: [
            "Từ 0,1 m3 trở lên",
            "Từ 0,5 m3 trở lên",
            "Từ 1,0 m3 trở lên",
            "Từ 1,5 m3 trở lên"
        ],
        correct: "Từ 0,5 m3 trở lên",
        explanation: "Điểm h Khoản 1 Điều 232 Bộ luật Hình sự quy định khai thác trái phép gỗ Nhóm IA hoặc ưu tiên bảo vệ từ 0,5 m3 đến dưới 01 m3 tại rừng đặc dụng thì bị phạt tù hoặc phạt tiền hình sự."
    },
    {
        question: "Tàng trữ, vận chuyển, mua bán trái phép gỗ thuộc Danh mục Nhóm IA từ khối lượng bao nhiêu m3 thì bị khởi tố theo Điều 232 BLHS?",
        options: [
            "Từ 0,5 m3 trở lên",
            "Từ 1,0 m3 trở lên",
            "Từ 1,5 m3 trở lên",
            "Từ 2,0 m3 trở lên"
        ],
        correct: "Từ 1,5 m3 trở lên",
        explanation: "Điểm k Khoản 1 Điều 232 Bộ luật Hình sự quy định tàng trữ, vận chuyển, chế biến, mua bán trái phép từ 1,5 m3 đến dưới 03 m3 gỗ thuộc Danh mục Nhóm IA hoặc ưu tiên bảo vệ thì bị xử lý hình sự."
    },
    {
        question: "Hành vi săn bắt, giết, nuôi nhốt, vận chuyển động vật hoang dã thuộc Danh mục loài nguy cấp, quý, hiếm ưu tiên bảo vệ bị truy cứu TNHS theo điều nào?",
        options: [
            "Điều 232 Bộ luật Hình sự",
            "Điều 234 Bộ luật Hình sự",
            "Điều 244 Bộ luật Hình sự",
            "Điều 245 Bộ luật Hình sự"
        ],
        correct: "Điều 244 Bộ luật Hình sự",
        explanation: "Điều 244 Bộ luật Hình sự quy định Tội vi phạm quy định về bảo vệ động vật nguy cấp, quý, hiếm (loài ưu tiên bảo vệ hoặc Nhóm IB). Điều 234 áp dụng đối với loài hoang dã thuộc Nhóm IIB hoặc thông thường."
    },
    {
        question: "Hành vi săn bắt, nuôi nhốt trái phép cá thể động vật thuộc lớp thú thuộc Danh mục Nhóm IB từ bao nhiêu cá thể thì bị khởi tố theo Điều 244 BLHS?",
        options: [
            "Từ 01 cá thể trở lên",
            "Từ 03 cá thể trở lên",
            "Từ 05 cá thể trở lên",
            "Từ 10 cá thể trở lên"
        ],
        correct: "Từ 01 cá thể trở lên",
        explanation: "Điểm a Khoản 1 Điều 244 Bộ luật Hình sự quy định săn bắt, giết, nuôi, nhốt, vận chuyển, buôn bán trái phép từ 01 cá thể đến 04 cá thể động vật lớp thú thuộc loài nguy cấp, quý, hiếm thì bị truy cứu TNHS."
    },
    {
        question: "Theo Bộ luật Tố tụng hình sự, cơ quan Kiểm lâm có thẩm quyền khởi tố vụ án hình sự trong trường hợp nào?",
        options: [
            "Khi phát hiện hành vi phạm tội quả tang trong phạm vi quản lý của mình",
            "Kiểm lâm không có quyền khởi tố, chỉ được chuyển hồ sơ sang Viện kiểm sát",
            "Chỉ Tòa án mới có thẩm quyền khởi tố vụ án hình sự",
            "Chỉ được khởi tố khi có sự đồng ý của Ủy ban nhân dân xã"
        ],
        correct: "Khi phát hiện hành vi phạm tội quả tang trong phạm vi quản lý của mình",
        explanation: "Điều 110 Bộ luật Tố tụng hình sự quy định cơ quan Kiểm lâm khi thực hiện nhiệm vụ mà phát hiện hành vi phạm tội thuộc thẩm quyền thì có quyền khởi tố vụ án hình sự và tiến hành hoạt động điều tra ban đầu."
    },
    {
        question: "Theo Luật Xử lý VPHC, cá nhân vi phạm có quyền giải trình trực tiếp hoặc bằng văn bản khi mức phạt tiền tối đa của khung phạt là bao nhiêu?",
        options: [
            "Từ 5.000.000 đồng trở lên",
            "Từ 10.000.000 đồng trở lên",
            "Từ 15.000.000 đồng trở lên",
            "Từ 25.000.000 đồng trở lên"
        ],
        correct: "Từ 15.000.000 đồng trở lên",
        explanation: "Khoản 1 Điều 61 Luật Xử lý VPHC quy định cá nhân vi phạm có quyền giải trình đối với hành vi vi phạm hành chính mà pháp luật quy định áp dụng mức phạt tiền tối đa từ 15.000.000 đồng trở lên."
    },
    {
        question: "Thời hạn cá nhân, tổ chức vi phạm gửi văn bản yêu cầu giải trình trực tiếp kể từ ngày lập biên bản vi phạm hành chính là bao lâu?",
        options: [
            "Không quá 02 ngày làm việc",
            "Không quá 05 ngày làm việc",
            "Không quá 07 ngày làm việc",
            "Không quá 10 ngày"
        ],
        correct: "Không quá 02 ngày làm việc",
        explanation: "Điểm a Khoản 2 Điều 61 Luật Xử lý VPHC quy định đối với trường hợp giải trình trực tiếp, cá nhân, tổ chức vi phạm phải gửi văn bản yêu cầu trong thời hạn không quá 02 ngày làm việc kể từ ngày lập biên bản."
    },
    {
        question: "Theo Nghị định 146/2026/NĐ-CP, việc xử phạt vi phạm hành chính trên môi trường điện tử được thực hiện thông qua hệ thống nào?",
        options: [
            "Cổng Dịch vụ công Quốc gia hoặc Cổng dịch vụ công cấp tỉnh",
            "Nhắn tin qua ứng dụng Zalo cá nhân của Kiểm lâm viên",
            "Gửi tin nhắn SMS không có chữ ký số xác thực",
            "Thông báo bằng hình thức gọi điện thoại trực tiếp"
        ],
        correct: "Cổng Dịch vụ công Quốc gia hoặc Cổng dịch vụ công cấp tỉnh",
        explanation: "Điều 9 Nghị định 146/2026/NĐ-CP quy định việc xử phạt VPHC trên môi trường điện tử được thực hiện thông qua Cổng Dịch vụ công Quốc gia hoặc Cổng dịch vụ công của bộ, cơ quan ngang bộ, UBND cấp tỉnh."
    },
    {
        question: "Ủy ban nhân dân cấp xã có trách nhiệm quản lý nhà nước đối với diện tích rừng nào trên địa bàn?",
        options: [
            "Chỉ rừng đặc dụng trên địa bàn xã",
            "Diện tích rừng thuộc sở hữu toàn dân chưa giao, chưa cho thuê trên địa bàn",
            "Chỉ rừng sản xuất của các hộ gia đình",
            "Tất cả diện tích rừng của các công ty lâm nghiệp"
        ],
        correct: "Diện tích rừng thuộc sở hữu toàn dân chưa giao, chưa cho thuê trên địa bàn",
        explanation: "Khoản 3 Điều 102 Luật Lâm nghiệp 2017 quy định UBND cấp xã có trách nhiệm quản lý diện tích rừng thuộc sở hữu toàn dân chưa giao, chưa cho thuê trên địa bàn xã."
    },
    {
        question: "Ai giữ chức vụ Trưởng ban Ban Chỉ huy Phòng cháy, chữa cháy rừng cấp xã?",
        options: [
            "Chủ tịch Ủy ban nhân dân cấp xã",
            "Trưởng Công an cấp xã",
            "Kiểm lâm địa bàn phụ trách xã",
            "Chỉ huy trưởng Ban Chỉ huy Quân sự xã"
        ],
        correct: "Chủ tịch Ủy ban nhân dân cấp xã",
        explanation: "Theo quy định tại Điều 48 Nghị định 156/2018/NĐ-CP, Chủ tịch UBND cấp xã là Trưởng ban Chỉ huy PCCCR cấp xã, chịu trách nhiệm toàn diện về công tác PCCCR trên địa bàn."
    },
    {
        question: "Trong Ban Chỉ huy PCCCR cấp xã, Kiểm lâm địa bàn thường đảm nhiệm vai trò gì?",
        options: [
            "Trưởng ban Chỉ huy",
            "Phó Trưởng ban Thường trực hoặc ủy viên tham mưu nghiệp vụ",
            "Chỉ tham gia với vai trò quan sát viên",
            "Không thuộc thành phần Ban Chỉ huy"
        ],
        correct: "Phó Trưởng ban Thường trực hoặc ủy viên tham mưu nghiệp vụ",
        explanation: "Quy định tổ chức PCCCR cơ sở nêu rõ Kiểm lâm địa bàn tham gia Ban Chỉ huy cấp xã với vai trò Phó ban hoặc ủy viên thường trực tham mưu kỹ thuật, nghiệp vụ BVR và PCCCR."
    },
    {
        question: "Khi xảy ra cháy rừng trên địa bàn xã, Chủ tịch UBND cấp xã có thẩm quyền huy động lực lượng nào?",
        options: [
            "Chỉ lực lượng Kiểm lâm địa bàn",
            "Lực lượng dân quân, công an xã, nhân dân và phương tiện trên địa bàn",
            "Chỉ huy động cán bộ, công chức xã",
            "Phải chờ lệnh của Chủ tịch UBND cấp tỉnh mới được huy động"
        ],
        correct: "Lực lượng dân quân, công an xã, nhân dân và phương tiện trên địa bàn",
        explanation: "Khoản 2 Điều 53 Nghị định 156/2018/NĐ-CP quy định Chủ tịch UBND cấp xã có quyền huy động lực lượng, phương tiện tại chỗ của các cơ quan, tổ chức, hộ gia đình, cá nhân trên địa bàn để chữa cháy."
    },
    {
        question: "Phương châm '4 tại chỗ' trong công tác phòng cháy, chữa cháy rừng cấp xã gồm những yếu tố nào?",
        options: [
            "Chỉ huy tại chỗ, lực lượng tại chỗ, phương tiện tại chỗ, hậu cần tại chỗ",
            "Kế hoạch tại chỗ, con người tại chỗ, nguồn vốn tại chỗ, nước tại chỗ",
            "Chủ rừng tại chỗ, công an tại chỗ, quân đội tại chỗ, y tế tại chỗ",
            "Kiểm lâm tại chỗ, phương án tại chỗ, thiết bị tại chỗ, dự toán tại chỗ"
        ],
        correct: "Chỉ huy tại chỗ, lực lượng tại chỗ, phương tiện tại chỗ, hậu cần tại chỗ",
        explanation: "Hướng dẫn 230/HD-CCKL và Nghị định 156/2018/NĐ-CP quy định công tác chữa cháy rừng phải thực hiện triệt để theo phương châm 4 tại chỗ: chỉ huy, lực lượng, phương tiện và hậu cần tại chỗ."
    },
    {
        question: "Diễn tập phòng cháy, chữa cháy rừng cấp xã theo hướng dẫn nghiệp vụ gồm những nội dung nào?",
        options: [
            "Chỉ tập luyện dập lửa tại hiện trường",
            "Diễn tập vận hành cơ chế tại hội trường và diễn tập thực binh tại hiện trường",
            "Chỉ họp phân công nhiệm vụ trên văn bản",
            "Chỉ kiểm tra bảo dưỡng máy thổi gió và cưa xăng"
        ],
        correct: "Diễn tập vận hành cơ chế tại hội trường và diễn tập thực binh tại hiện trường",
        explanation: "Mục II.2 Hướng dẫn 230/HD-CCKL quy định diễn tập PCCCR cấp xã gồm 2 phần: Diễn tập vận hành cơ chế (tại hội trường UBND xã) và Diễn tập thực binh (tại khu vực rừng giả định)."
    },
    {
        question: "Trách nhiệm của UBND cấp xã trong công tác theo dõi diễn biến rừng hàng năm là gì?",
        options: [
            "Tự phân tích ảnh vệ tinh độc lập không cần kiểm tra thực địa",
            "Tiếp nhận thông tin biến động từ chủ rừng, phối hợp Kiểm lâm xác minh và xác nhận hồ sơ",
            "Giao toàn bộ trách nhiệm cho các thôn tự thống kê",
            "Chỉ thống kê diện tích rừng trồng mới"
        ],
        correct: "Tiếp nhận thông tin biến động từ chủ rừng, phối hợp Kiểm lâm xác minh và xác nhận hồ sơ",
        explanation: "Thông tư 16/2025/TT-BNNMT quy định UBND cấp xã tiếp nhận báo cáo biến động rừng của chủ rừng, phối hợp Kiểm lâm địa bàn kiểm tra thực địa và xác nhận kết quả biến động rừng trên địa bàn."
    },
    {
        question: "Khi tiếp nhận thông tin về động vật hoang dã đi lạc, bị thương, UBND cấp xã phải lập biên bản trong thời hạn bao lâu?",
        options: [
            "Trong thời hạn 01 ngày làm việc kể từ khi nhận được thông tin",
            "Trong thời hạn 03 ngày làm việc",
            "Trong thời hạn 05 ngày làm việc",
            "Trong thời hạn 07 ngày làm việc"
        ],
        correct: "Trong thời hạn 01 ngày làm việc kể từ khi nhận được thông tin",
        explanation: "Điểm b Khoản 3 Điều 8 Thông tư 85/2025/TT-BNNMT quy định trong 01 ngày làm việc kể từ khi nhận được thông tin, UBND cấp xã tổ chức kiểm tra, tiếp nhận và lập biên bản giao nhận động vật."
    },
    {
        question: "Thời hạn UBND cấp xã thông báo công khai để xác minh chủ sở hữu hợp pháp của động vật đi lạc là bao lâu?",
        options: [
            "03 ngày làm việc",
            "05 ngày làm việc",
            "10 ngày làm việc",
            "30 ngày"
        ],
        correct: "05 ngày làm việc",
        explanation: "Điểm b Khoản 3 Điều 8 Thông tư 85/2025/TT-BNNMT quy định thời hạn thông báo công khai tại trụ sở và trên phương tiện truyền thanh để xác minh chủ sở hữu hợp pháp là 05 ngày làm việc."
    },
    {
        question: "Chủ tịch UBND cấp xã có thẩm quyền phê duyệt Phương án khai thác rừng trong trường hợp nào?",
        options: [
            "Khai thác gỗ rừng tự nhiên của các công ty lâm nghiệp",
            "Khai thác rừng trồng của hộ gia đình, cá nhân, cộng đồng dân cư trên địa bàn",
            "Khai thác rừng đặc dụng của Ban Quản lý vườn quốc gia",
            "Khai thác tận thu khoáng sản trong rừng phòng hộ"
        ],
        correct: "Khai thác rừng trồng của hộ gia đình, cá nhân, cộng đồng dân cư trên địa bàn",
        explanation: "Điểm c Khoản 3 Điều 6 Thông tư 26/2022/TT-BNNPTNT (hợp nhất) quy định Chủ tịch UBND cấp xã phê duyệt phương án khai thác gỗ rừng trồng của HGĐ, cá nhân, cộng đồng dân cư."
    },
    {
        question: "Kiểm lâm địa bàn có trách nhiệm tham mưu cho UBND cấp xã nội dung nào sau đây?",
        options: [
            "Phê duyệt dự toán ngân sách chi thường xuyên của xã",
            "Xây dựng kế hoạch bảo vệ rừng, phương án PCCCR và tổ chức lực lượng quần chúng BVR",
            "Quyết định xử phạt vi phạm giao thông đường bộ",
            "Cấp giấy chứng nhận quyền sử dụng đất ở cho nhân dân"
        ],
        correct: "Xây dựng kế hoạch bảo vệ rừng, phương án PCCCR và tổ chức lực lượng quần chúng BVR",
        explanation: "Điều 104 Luật Lâm nghiệp và Nghị định 01/2019/NĐ-CP quy định Kiểm lâm địa bàn tham mưu UBND cấp xã thực hiện chức năng QLNN về lâm nghiệp, lập kế hoạch BVR, PCCCR cơ sở."
    },
    {
        question: "Khi phát hiện hành vi lấn chiếm đất rừng trái phép trên địa bàn, UBND cấp xã phải xử lý như thế nào?",
        options: [
            "Đình chỉ ngay hành vi vi phạm, lập biên bản hoặc chuyển cơ quan có thẩm quyền xử lý",
            "Chờ người vi phạm xây dựng xong công trình mới xử lý",
            "Không thuộc thẩm quyền của xã nên không can thiệp",
            "Hợp thức hóa cho người vi phạm thuê lại đất rừng"
        ],
        correct: "Đình chỉ ngay hành vi vi phạm, lập biên bản hoặc chuyển cơ quan có thẩm quyền xử lý",
        explanation: "Điều 102 Luật Lâm nghiệp và Nghị định 146/2026/NĐ-CP quy định Chủ tịch UBND cấp xã có trách nhiệm phát hiện, ngăn chặn, đình chỉ kịp thời hành vi lấn chiếm đất rừng và lập biên bản xử lý theo thẩm quyền."
    },
    {
        question: "Hồ sơ quản lý rừng ở cấp xã do UBND xã và Kiểm lâm địa bàn theo dõi bắt buộc phải có tài liệu nào?",
        options: [
            "Bản đồ hiện trạng rừng, sổ theo dõi diễn biến rừng và danh sách các chủ rừng trên địa bàn",
            "Chỉ cần sổ thu nộp thuế sử dụng đất nông nghiệp",
            "Chỉ cần danh sách cán bộ xã",
            "Hóa đơn mua sắm trang thiết bị văn phòng xã"
        ],
        correct: "Bản đồ hiện trạng rừng, sổ theo dõi diễn biến rừng và danh sách các chủ rừng trên địa bàn",
        explanation: "Thông tư 16/2025/TT-BNNMT quy định UBND cấp xã lưu trữ hồ sơ theo dõi rừng gồm bản đồ hiện trạng rừng, cơ sở dữ liệu diễn biến rừng và danh bạ quản lý các chủ rừng trên địa bàn."
    },
    {
        question: "Chủ tịch UBND cấp xã có thẩm quyền áp dụng biện pháp khắc phục hậu quả nào theo NĐ 146/2026/NĐ-CP?",
        options: [
            "Buộc khôi phục lại tình trạng ban đầu của rừng và buộc trồng lại rừng",
            "Tịch thu nhà ở của người vi phạm",
            "Tước quyền công dân của người vi phạm",
            "Cấm người vi phạm cư trú tại địa phương"
        ],
        correct: "Buộc khôi phục lại tình trạng ban đầu của rừng và buộc trồng lại rừng",
        explanation: "Điểm đ Khoản 1 Điều 31 Nghị định 146/2026/NĐ-CP quy định Chủ tịch UBND cấp xã có quyền áp dụng biện pháp buộc khôi phục tình trạng ban đầu, buộc nộp lại số lợi bất hợp pháp và trồng lại rừng."
    },
    {
        question: "Chủ thể nào chịu trách nhiệm chỉ đạo hòa giải các vụ tranh chấp về quyền sử dụng rừng ở cơ sở?",
        options: [
            "Ủy ban nhân dân cấp xã nơi có rừng tranh chấp",
            "Hạt Kiểm lâm địa bàn",
            "Đội Cảnh sát hình sự",
            "Ban Quản lý dự án lâm nghiệp"
        ],
        correct: "Ủy ban nhân dân cấp xã nơi có rừng tranh chấp",
        explanation: "Luật Lâm nghiệp và Luật Đất đai quy định Nhà nước khuyến khích hòa giải tranh chấp đất rừng ở cơ sở; UBND cấp xã có trách nhiệm chủ trì tổ chức việc hòa giải tranh chấp."
    },
    {
        question: "Nguyên tắc cơ bản trong công tác phòng, chống sâu bệnh hại rừng theo Hướng dẫn 230/HD-CCKL là gì?",
        options: [
            "Diệt trừ là chính, phun thuốc hóa học trên diện rộng ngay khi phát hiện",
            "Phòng là chính, diệt trừ kịp thời; ưu tiên biện pháp sinh học, hạn chế thuốc hóa học độc hại",
            "Để sâu bệnh phát triển tự nhiên không can thiệp",
            "Đốt dọn toàn bộ diện tích rừng bị sâu bệnh tấn công"
        ],
        correct: "Phòng là chính, diệt trừ kịp thời; ưu tiên biện pháp sinh học, hạn chế thuốc hóa học độc hại",
        explanation: "Mục I.2 Hướng dẫn 230/HD-CCKL quy định nguyên tắc: Phòng là chính, phát hiện sớm, diệt trừ kịp thời; ưu tiên biện pháp sinh học, cơ giới, hạn chế tối đa sử dụng thuốc hóa học độc hại."
    },
    {
        question: "Công thức tính tỷ lệ cây bị sâu, bệnh hại (P%) trong điều tra rừng theo Hướng dẫn 230/HD-CCKL là gì?",
        options: [
            "P% = (n / N) x 100 (với n: số cây bị hại; N: tổng số cây điều tra)",
            "P% = (N / n) x 100 (với N: tổng số cây; n: số cây bị hại)",
            "P% = n x N / 100",
            "P% = (n + N) / 2"
        ],
        correct: "P% = (n / N) x 100 (với n: số cây bị hại; N: tổng số cây điều tra)",
        explanation: "Mục I.4 Hướng dẫn 230/HD-CCKL quy định tỷ lệ cây bị hại tính theo công thức P% = (n/N) * 100, trong đó n là số cây bị hại trên ô tiêu chuẩn, N là tổng số cây điều tra."
    },
    {
        question: "Theo mức độ phân cấp tỷ lệ cây bị hại (P%), mức độ hại 'Nặng' được xác định khi nào?",
        options: [
            "P% dưới 10%",
            "P% từ 10% đến dưới 25%",
            "P% từ 25% đến 50%",
            "P% lớn hơn 50%"
        ],
        correct: "P% lớn hơn 50%",
        explanation: "Hướng dẫn kỹ thuật điều tra sâu bệnh hại rừng quy định mức độ bị hại: Nhẹ (P < 25%), Trung bình (25% <= P <= 50%), Nặng (P > 50%)."
    },
    {
        question: "Khi phát hiện dịch sâu bệnh hại rừng bùng phát có nguy cơ lây lan diện rộng, cơ quan Kiểm lâm phải làm gì?",
        options: [
            "Báo cáo ngay cho Sở NN&MT, UBND cấp huyện/tỉnh và cơ quan bảo vệ thực vật chuyên ngành",
            "Tự ý mua thuốc bảo vệ thực vật cấm để phun dập dịch",
            "Chờ dịch bệnh tự thoái trào sau mùa mưa",
            "Yêu cầu chủ rừng chặt trắng toàn bộ diện tích rừng xung quanh"
        ],
        correct: "Báo cáo ngay cho Sở NN&MT, UBND cấp huyện/tỉnh và cơ quan bảo vệ thực vật chuyên ngành",
        explanation: "Mục I.5 Hướng dẫn 230/HD-CCKL yêu cầu khi phát sinh ổ dịch có nguy cơ lây lan, đơn vị phải báo cáo ngay cơ quan quản lý cấp trên và cơ quan BVTV chuyên ngành để khoanh vùng xử lý."
    },
    {
        question: "Thời kỳ điều tra định kỳ sâu bệnh hại rừng trong năm thường được bố trí vào giai đoạn nào?",
        options: [
            "Chỉ điều tra vào mùa đông khi cây rụng lá",
            "Vào các giai đoạn sinh trưởng nhạy cảm của cây rừng và thời kỳ cao điểm phát sinh sâu bệnh",
            "Chỉ điều tra sau khi đã khai thác rừng xong",
            "Bất kỳ ngày nào không có lịch tuần tra"
        ],
        correct: "Vào các giai đoạn sinh trưởng nhạy cảm của cây rừng và thời kỳ cao điểm phát sinh sâu bệnh",
        explanation: "Hướng dẫn điều tra sâu bệnh quy định điều tra vào các thời kỳ xung yếu khi cây ra lộc non, thời tiết giao mùa thuận lợi cho sâu bệnh hại phát sinh."
    },
    {
        question: "Hồ sơ nghiệm thu kết quả công tác tuyên truyền bảo vệ rừng cấp xã bắt buộc phải có tài liệu nào?",
        options: [
            "Kế hoạch tuyên truyền, biên bản họp thôn, danh sách hộ dân ký cam kết BVR & PCCCR",
            "Chỉ cần một bài viết đăng trên trang facebook cá nhân",
            "Biên lai thu tiền tham gia họp thôn của các hộ dân",
            "Hợp đồng thuê địa điểm họp của doanh nghiệp"
        ],
        correct: "Kế hoạch tuyên truyền, biên bản họp thôn, danh sách hộ dân ký cam kết BVR & PCCCR",
        explanation: "Mục I.4 (Tuyên truyền) Hướng dẫn 230/HD-CCKL quy định hồ sơ gồm: Kế hoạch tuyên truyền, giấy mời/biên bản họp thôn, danh sách ký cam kết BVR&PCCCR có chữ ký của từng hộ gia đình."
    },
    {
        question: "Hình thức tuyên truyền pháp luật lâm nghiệp nào sau đây mang lại hiệu quả trực tiếp nhất tại thôn bản?",
        options: [
            "Họp trực tiếp người dân tại nhà văn hóa thôn, phát thanh xã và ký cam kết BVR tới từng hộ",
            "Chỉ gửi văn bản quy phạm pháp luật qua đường bưu điện cho Trưởng thôn",
            "Đăng tải toàn văn các Nghị định lên cổng thông tin điện tử của tỉnh",
            "In tờ rơi bằng tiếng nước ngoài rải tại bìa rừng"
        ],
        correct: "Họp trực tiếp người dân tại nhà văn hóa thôn, phát thanh xã và ký cam kết BVR tới từng hộ",
        explanation: "Mục I.2 Hướng dẫn 230/HD-CCKL xác định hình thức tuyên truyền cơ sở hiệu quả nhất là họp thôn, tuyên truyền miệng kết hợp hệ thống loa truyền thanh xã/thôn và ký cam kết trực tiếp."
    },
    {
        question: "Văn bản chỉ đạo quan trọng của Ban Bí thư về tăng cường lãnh đạo đối với công tác QLBV&PTR là văn bản nào?",
        options: [
            "Chỉ thị số 13-CT/TW và Kết luận số 61-KL/TW của Ban Bí thư",
            "Chỉ thị số 01 của Bộ Nông nghiệp",
            "Quyết định số 10 của Chi cục Kiểm lâm",
            "Thông báo số 05 của Hội Nông dân"
        ],
        correct: "Chỉ thị số 13-CT/TW và Kết luận số 61-KL/TW của Ban Bí thư",
        explanation: "Mục I.1.1 Hướng dẫn 230/HD-CCKL nhấn mạnh trọng tâm tuyên truyền thực hiện Chỉ thị 13-CT/TW ngày 12/01/2017 và Kết luận 61-KL/TW ngày 17/8/2023 của Ban Bí thư Trung ương Đảng."
    },
    {
        question: "Nội dung quy ước, hương ước bảo vệ rừng của thôn, bản do cộng đồng dân cư xây dựng không được trái với điều gì?",
        options: [
            "Quy định của pháp luật và chuẩn mực đạo đức, phong tục tập quán tốt đẹp",
            "Ý kiến chủ quan của Trưởng thôn",
            "Quy định của các nước trong khu vực ASEAN",
            "Mong muốn của các doanh nghiệp thu mua gỗ"
        ],
        correct: "Quy định của pháp luật và chuẩn mực đạo đức, phong tục tập quán tốt đẹp",
        explanation: "Luật Lâm nghiệp quy định quy ước bảo vệ rừng của cộng đồng thôn bản do cộng đồng xây dựng, không được trái với các quy định pháp luật hiện hành và thuần phong mỹ tục."
    },
    {
        question: "Trách nhiệm của Kiểm lâm địa bàn đối với quy ước bảo vệ rừng thôn, bản là gì?",
        options: [
            "Tham mưu UBND xã hướng dẫn thôn bản xây dựng, rà soát và giám sát thực hiện quy ước BVR",
            "Tự mình soạn thảo và ép buộc nhân dân phải chấp thuận quy ước",
            "Không can thiệp vì đó là việc nội bộ của thôn bản",
            "Ký duyệt ban hành quy ước thay cho Ủy ban nhân dân xã"
        ],
        correct: "Tham mưu UBND xã hướng dẫn thôn bản xây dựng, rà soát và giám sát thực hiện quy ước BVR",
        explanation: "Kiểm lâm địa bàn có nhiệm vụ hướng dẫn cộng đồng dân cư rà soát, lồng ghép nội dung BVR, PCCCR vào hương ước, quy ước thôn bản đúng quy định pháp luật."
    },
    {
        question: "Khi đo chiều dài lóng gỗ tròn theo Phụ lục I Thông tư 26/2022/TT-BNNPTNT, vị trí đo được xác định như thế nào?",
        options: [
            "Đo khoảng cách ngắn nhất giữa mặt cắt ngang ở hai đầu của lóng gỗ",
            "Đo khoảng cách dài nhất bao gồm cả phần dập nát",
            "Đo từ tâm đầu lớn đến mép ngoài của đầu nhỏ",
            "Ước lượng bằng mắt thường rồi làm tròn mét"
        ],
        correct: "Đo khoảng cách ngắn nhất giữa mặt cắt ngang ở hai đầu của lóng gỗ",
        explanation: "Điểm a Khoản 1 Phụ lục I Thông tư 26/2022/TT-BNNPTNT quy định: Chiều dài là khoảng cách ngắn nhất giữa mặt cắt ngang ở hai đầu của lóng gỗ; đơn vị tính là mét, lấy 2 số thập phân."
    },
    {
        question: "Phương pháp xác định đường kính mỗi đầu lóng gỗ tròn được quy định như thế nào?",
        options: [
            "Đo ở 2 vị trí lớn nhất và nhỏ nhất (trừ vỏ cây), sau đó tính trung bình cộng",
            "Chỉ đo một vị trí bất kỳ bao gồm cả vỏ cây",
            "Đo chu vi ngoài vỏ rồi chia đôi",
            "Lấy đường kính ở vị trí chính giữa khúc gỗ"
        ],
        correct: "Đo ở 2 vị trí lớn nhất và nhỏ nhất (trừ vỏ cây), sau đó tính trung bình cộng",
        explanation: "Điểm b Khoản 1 Phụ lục I Thông tư 26 quy định: mỗi đầu lóng gỗ đo ở 2 vị trí có đường kính lớn nhất và nhỏ nhất (trừ vỏ cây), tính trị số trung bình cộng để xác định đường kính đầu đó."
    },
    {
        question: "Công thức tính thể tích (V) của lóng gỗ tròn, gỗ đẽo hình trụ tròn theo Thông tư 26 là gì?",
        options: [
            "V = (π / 4) x (Dtb)^2 x l",
            "V = π x Dtb x l",
            "V = (Dtb)^2 x l",
            "V = (π / 2) x (Dtb)^2 x l"
        ],
        correct: "V = (π / 4) x (Dtb)^2 x l",
        explanation: "Điểm c Khoản 1 Phụ lục I Thông tư 26 quy định thể tích gỗ tròn tính theo công thức: V = (π / 4) * (Dtb)^2 * l; thể tích V tính bằng m3, lấy số nguyên và 3 số thập phân."
    },
    {
        question: "Đơn vị tính và số chữ số thập phân khi ghi nhận thể tích mét khối (m3) gỗ trong Bảng kê lâm sản là gì?",
        options: [
            "Đơn vị m3, lấy số nguyên và ba (03) số hàng thập phân",
            "Đơn vị m3, lấy số nguyên và một (01) số hàng thập phân",
            "Đơn vị m3, làm tròn thành số nguyên",
            "Đơn vị dm3, lấy hai (02) số hàng thập phân"
        ],
        correct: "Đơn vị m3, lấy số nguyên và ba (03) số hàng thập phân",
        explanation: "Phụ lục I Thông tư 26 quy định thể tích gỗ V tính bằng mét khối (m3), lấy số nguyên và ba (03) số hàng thập phân sau số hàng đơn vị."
    },
    {
        question: "Sai số cho phép khi đo tính thể tích đối với từng khúc, lóng gỗ tròn, gỗ khối trụ tròn là bao nhiêu?",
        options: [
            "Cộng trừ 5% (±5%)",
            "Cộng trừ 10% (±10%)",
            "Cộng trừ 15% (±15%)",
            "Cộng trừ 20% (±20%)"
        ],
        correct: "Cộng trừ 10% (±10%)",
        explanation: "Điểm d Khoản 1 Phụ lục I Thông tư 26 quy định sai số tính thể tích gỗ trong mỗi lần đo đối với từng khúc, lóng gỗ tròn, gỗ khối trụ tròn là mười phần trăm (±10%)."
    },
    {
        question: "Sai số cho phép khi tính thể tích đối với từng thanh, tấm, hộp gỗ xẻ, gỗ đẽo hình hộp là bao nhiêu?",
        options: [
            "Cộng trừ 2% (±2%)",
            "Cộng trừ 5% (±5%)",
            "Cộng trừ 10% (±10%)",
            "Cộng trừ 12% (±12%)"
        ],
        correct: "Cộng trừ 5% (±5%)",
        explanation: "Điểm d Khoản 2 Phụ lục I Thông tư 26 quy định sai số tính thể tích gỗ trong mỗi lần đo đối với từng thanh, tấm, hộp gỗ xẻ, gỗ đẽo là năm phần trăm (±5%)."
    },
    {
        question: "Công thức tính thể tích hộp gỗ xẻ hình hộp chữ nhật (chiều dài l, chiều rộng a, chiều dày b) là gì?",
        options: [
            "V = l x a x b",
            "V = (l + a + b) / 3",
            "V = (l x a) / b",
            "V = 2 x (a + b) x l"
        ],
        correct: "V = l x a x b",
        explanation: "Điểm c Khoản 2 Phụ lục I Thông tư 26 quy định thể tích hộp gỗ xẻ hình hộp chữ nhật: V = l * a * b (trong đó l, a, b đổi ra đơn vị mét, V lấy 3 số thập phân)."
    },
    {
        question: "Trường hợp gỗ có hình thù phức tạp, gốc rễ, gỗ dăm không thể đo được kích thước thì xác định khối lượng như thế nào?",
        options: [
            "Thực hiện cân (kg) hoặc tính theo ster để quy đổi sang m3 gỗ tròn",
            "Ước tính theo cảm tính của người kiểm tra",
            "Bỏ qua không cần thống kê vào Bảng kê lâm sản",
            "Bắt buộc phải xẻ vuông vắn rồi mới đo"
        ],
        correct: "Thực hiện cân (kg) hoặc tính theo ster để quy đổi sang m3 gỗ tròn",
        explanation: "Khoản 3 Điều 4 Thông tư 26 quy định gỗ có hình thù phức tạp, gốc, rễ, dăm gỗ không thể đo kích thước thì thực hiện cân (kg) hoặc tính theo ster để quy đổi sang m3 gỗ tròn."
    },
    {
        question: "Tỷ lệ quy đổi khối lượng cân (kg) sang thể tích mét khối (m3) gỗ tròn theo Thông tư 26 là bao nhiêu?",
        options: [
            "500 kg quy đổi bằng 01 m3 gỗ tròn",
            "800 kg quy đổi bằng 01 m3 gỗ tròn",
            "1.000 kg quy đổi bằng 01 m3 gỗ tròn",
            "1.200 kg quy đổi bằng 01 m3 gỗ tròn"
        ],
        correct: "1.000 kg quy đổi bằng 01 m3 gỗ tròn",
        explanation: "Khoản 3 Điều 4 Thông tư 26/2022/TT-BNNPTNT quy định rõ: quy đổi 1.000 kg bằng 01 m3 gỗ tròn."
    },
    {
        question: "Tỷ lệ quy đổi từ đơn vị ster (củi, gỗ xếp khối) sang mét khối (m3) gỗ tròn theo Thông tư 26 là bao nhiêu?",
        options: [
            "01 ster quy đổi bằng 0,5 m3 gỗ tròn",
            "01 ster quy đổi bằng 0,7 m3 gỗ tròn",
            "01 ster quy đổi bằng 1,0 m3 gỗ tròn",
            "01 ster quy đổi bằng 1,2 m3 gỗ tròn"
        ],
        correct: "01 ster quy đổi bằng 0,7 m3 gỗ tròn",
        explanation: "Khoản 3 Điều 4 Thông tư 26/2022/TT-BNNPTNT quy định rõ: quy đổi 01 ster bằng 0,7 m3 gỗ tròn."
    },
    {
        question: "Việc đánh số hiệu đầu lóng gỗ tròn sau khi đo tính được thực hiện như thế nào?",
        options: [
            "Ghi bằng chữ số Ả Rập vào mặt cắt ngang 2 đầu lóng gỗ, dùng sơn khác màu gỗ",
            "Chỉ cần dùng phấn trắng viết một đầu lóng gỗ",
            "Đóng đinh sắt vào giữa thân cây",
            "Dán tem giấy lên vỏ cây"
        ],
        correct: "Ghi bằng chữ số Ả Rập vào mặt cắt ngang 2 đầu lóng gỗ, dùng sơn khác màu gỗ",
        explanation: "Khoản 7 Điều 4 Thông tư 26 quy định số hiệu gỗ đánh bằng chữ số Ả Rập, ghi vào mặt cắt ngang hai đầu lóng gỗ, sử dụng sơn có màu sắc khác với màu của gỗ."
    },
    {
        question: "Đối với gỗ thuộc loài nguy cấp, quý, hiếm hoặc Phụ lục CITES, quy định đánh số hiệu đầu lóng như thế nào?",
        options: [
            "Chỉ đánh số hiệu đối với lóng gỗ có đường kính trên 40 cm",
            "Phải đánh số hiệu không phân biệt kích thước lớn hay nhỏ",
            "Chỉ đánh số hiệu khi vận chuyển ra khỏi địa bàn tỉnh",
            "Miễn đánh số hiệu nếu chủ rừng là hộ gia đình"
        ],
        correct: "Phải đánh số hiệu không phân biệt kích thước lớn hay nhỏ",
        explanation: "Khoản 7 Điều 4 Thông tư 26 quy định đối với gỗ thuộc loài nguy cấp, quý, hiếm hoặc gỗ thuộc Phụ lục CITES thì phải đánh số hiệu không phân biệt kích thước."
    },
    {
        question: "Trong biên bản kiểm tra lâm sản, nếu phát hiện lóng gỗ bị rỗng ruột thì khối lượng tính toán được xử lý thế nào?",
        options: [
            "Tính nguyên thể tích cả vỏ không trừ phần rỗng",
            "Xác định và ghi rõ khối lượng phần rỗng ruột, mục để khấu trừ khỏi thể tích toàn bộ",
            "Hủy bỏ toàn bộ lóng gỗ không tính thể tích",
            "Cộng thêm 10% thể tích vì gỗ có giá trị rỗng ruột"
        ],
        correct: "Xác định và ghi rõ khối lượng phần rỗng ruột, mục để khấu trừ khỏi thể tích toàn bộ",
        explanation: "Khoản 2 Điều 4 Thông tư 26 quy định phải ghi nhận khối lượng rỗng ruột, khối lượng mục trong khi thực hiện đo đếm, lập Bảng kê lâm sản để khấu trừ chính xác thể tích thực."
    },
    {
        question: "Khi kiểm tra chuồng trại cơ sở nuôi động vật rừng, nội dung kỹ thuật quan trọng hàng đầu cần kiểm tra là gì?",
        options: [
            "Màu sơn trang trí chuồng trại",
            "Quy cách chuồng trại bảo đảm an toàn cho người và ngăn ngừa động vật thoát ra ngoài",
            "Khoảng cách đến trung tâm thương mại gần nhất",
            "Giá vé tham quan chuồng trại"
        ],
        correct: "Quy cách chuồng trại bảo đảm an toàn cho người và ngăn ngừa động vật thoát ra ngoài",
        explanation: "Thông tư 85/2025/TT-BNNMT quy định chuồng, trại nuôi động vật rừng phải phù hợp với đặc tính sinh học của loài, đảm bảo an toàn cho con người và không để vật nuôi thoát ra môi trường tự nhiên."
    },
    {
        question: "Chủ cơ sở nuôi động vật rừng bắt buộc phải lập và lưu giữ loại sổ theo dõi nào?",
        options: [
            "Sổ theo dõi hoạt động nuôi động vật hoang dã theo Mẫu số 10 Phụ lục II Thông tư 85/2025",
            "Sổ thu chi tài chính cá nhân",
            "Sổ chấm công công nhân hàng ngày",
            "Sổ ghi chép ý kiến khách tham quan"
        ],
        correct: "Sổ theo dõi hoạt động nuôi động vật hoang dã theo Mẫu số 10 Phụ lục II Thông tư 85/2025",
        explanation: "Khoản 2 Điều 24 và Điều 25 Thông tư 85/2025/TT-BNNMT quy định chủ cơ sở nuôi phải lập, cập nhật thường xuyên Sổ theo dõi hoạt động nuôi theo Mẫu số 10 Phụ lục II."
    },
    {
        question: "Khi cá thể động vật rừng nguy cấp, quý, hiếm trong trại nuôi bị chết, chủ cơ sở phải xử lý thế nào?",
        options: [
            "Tự ý đem bán cho nhà hàng kinh doanh",
            "Vứt xác động vật ra sông suối tự nhiên",
            "Lập biên bản và thông báo cho cơ quan Kiểm lâm sở tại hoặc UBND xã để phối hợp xử lý",
            "Tự tiêu hủy mà không cần ghi chép sổ sách"
        ],
        correct: "Lập biên bản và thông báo cho cơ quan Kiểm lâm sở tại hoặc UBND xã để phối hợp xử lý",
        explanation: "Thông tư 85/2025/TT-BNNMT quy định trường hợp động vật quý hiếm chết, cơ sở phải lập biên bản xác nhận, cập nhật sổ theo dõi và thông báo cơ quan Kiểm lâm để giám sát xử lý."
    },
    {
        question: "Biện pháp đánh dấu mẫu vật nào thường được áp dụng đối với cá thể động vật rừng nguy cấp, quý, hiếm lớp thú?",
        options: [
            "Cấy chip vi điện tử hoặc gắn thẻ tai, vòng chân có mã số nhận dạng",
            "Dùng bút mực viết lên lông động vật",
            "Cắt một phần tai của con vật",
            "Buộc dây nylon màu đỏ vào cổ động vật"
        ],
        correct: "Cấy chip vi điện tử hoặc gắn thẻ tai, vòng chân có mã số nhận dạng",
        explanation: "Thông tư 85/2025/TT-BNNMT quy định mẫu vật động vật rừng nguy cấp thuộc Phụ lục CITES hoặc Nhóm I, II phải được đánh dấu bằng chip điện tử, vòng số hoặc thẻ tai để quản lý truy xuất."
    },
    {
        question: "Cơ sở nuôi sinh sản động vật hoang dã muốn xuất bán con giống phải đáp ứng điều kiện nào?",
        options: [
            "Chỉ cần chủ cơ sở cam kết con giống khỏe mạnh",
            "Có mã số cơ sở nuôi hợp pháp, con giống có nguồn gốc F2 trở đi và lập bảng kê lâm sản theo quy định",
            "Không cần giấy tờ nếu bán cho người cùng xã",
            "Chỉ cần giấy xác nhận của Hội Nông dân xã"
        ],
        correct: "Có mã số cơ sở nuôi hợp pháp, con giống có nguồn gốc F2 trở đi và lập bảng kê lâm sản theo quy định",
        explanation: "Thông tư 85/2025/TT-BNNMT quy định việc thương mại loài CITES hoặc loài quý hiếm phải từ cơ sở được cấp mã số, chứng minh nguồn gốc hợp pháp (sinh sản thế hệ F2 trở đi) và lập hồ sơ lâm sản."
    },
    {
        question: "Cơ sở dữ liệu gốc để thực hiện theo dõi diễn biến rừng hàng năm là nguồn dữ liệu nào?",
        options: [
            "Bản đồ địa chính phân lô đất ở của xã",
            "Kết quả kiểm kê rừng tích hợp trên Cơ sở dữ liệu trung tâm và dữ liệu công bố năm trước liền kề",
            "Ảnh chụp từ vệ tinh Google Earth chưa qua hiệu chỉnh",
            "Số liệu ước tính của Ban Quản lý rừng"
        ],
        correct: "Kết quả kiểm kê rừng tích hợp trên Cơ sở dữ liệu trung tâm và dữ liệu công bố năm trước liền kề",
        explanation: "Mục V.1.2 Hướng dẫn 230/HD-CCKL quy định: Sử dụng kết quả kiểm kê rừng tích hợp tại Dữ liệu trung tâm làm dữ liệu gốc; dữ liệu công bố năm trước là cơ sở thực hiện theo dõi diễn biến năm sau."
    },
    {
        question: "Phần mềm chuẩn được ngành Kiểm lâm sử dụng để cập nhật diễn biến diện tích rừng là phần mềm nào?",
        options: [
            "Phần mềm FRMS (Forest Resource Monitoring System) do Cục Lâm nghiệp và Kiểm lâm ban hành",
            "Phần mềm Microsoft Excel thông thường",
            "Phần mềm AutoCAD thiết kế xây dựng",
            "Phần mềm quản lý nhân sự công chức"
        ],
        correct: "Phần mềm FRMS (Forest Resource Monitoring System) do Cục Lâm nghiệp và Kiểm lâm ban hành",
        explanation: "Hướng dẫn 230/HD-CCKL và Thông tư 16/2025/TT-BNNMT quy định thống nhất sử dụng phần mềm cập nhật diễn biến rừng FRMS do Cục Lâm nghiệp và Kiểm lâm ban hành."
    },
    {
        question: "Thiết bị kỹ thuật nào sau đây là công cụ chính của Kiểm lâm địa bàn khi điều tra biến động rừng ngoài thực địa?",
        options: [
            "Máy định vị vệ tinh GPS hoặc máy tính bảng chuyên dụng cài đặt phần mềm bản đồ định vị",
            "Thước cuộn may mặc 1,5 mét",
            "Ống nhòm ngắm cảnh thông thường",
            "La bàn cầm tay không có chức năng lưu tọa độ"
        ],
        correct: "Máy định vị vệ tinh GPS hoặc máy tính bảng chuyên dụng cài đặt phần mềm bản đồ định vị",
        explanation: "Mục V.1.2 Hướng dẫn 230/HD-CCKL quy định Kiểm lâm sử dụng thiết bị đo vẽ gồm: máy tính, máy định vị GPS, máy tính bảng, máy bay không người lái (UAV) để khoanh vẽ lô rừng biến động."
    },
    {
        question: "Nguyên nhân nào sau đây làm TĂNG diện tích rừng trong công tác theo dõi diễn biến rừng hàng năm?",
        options: [
            "Trồng mới rừng trên đất chưa có rừng hoặc khoanh nuôi tái sinh đạt tiêu chí thành rừng",
            "Khai thác trắng rừng trồng đến tuổi khai thác",
            "Chuyển mục đích sử dụng rừng sang làm đường giao thông",
            "Cháy rừng gây thiệt hại hoàn toàn thảm thực vật"
        ],
        correct: "Trồng mới rừng trên đất chưa có rừng hoặc khoanh nuôi tái sinh đạt tiêu chí thành rừng",
        explanation: "Mục V.2 Hướng dẫn 230/HD-CCKL phân loại nguyên nhân tăng rừng: do trồng mới rừng, do khoanh nuôi phục hồi tự nhiên đạt tiêu chí rừng, hoặc diện tích rừng điều chỉnh ngoài quy hoạch vào."
    },
    {
        question: "Chủ rừng có trách nhiệm gì khi diện tích rừng của mình có biến động (do khai thác, trồng mới, cháy rừng)?",
        options: [
            "Báo cáo bằng văn bản hoặc trực tiếp cho Kiểm lâm địa bàn hoặc UBND cấp xã để kiểm tra cập nhật",
            "Tự chỉnh sửa số liệu trên phần mềm quản lý quốc gia",
            "Không cần báo cáo vì đất đã được cấp giấy chứng nhận quyền sử dụng",
            "Chỉ báo cáo khi chuẩn bị bán đất rừng"
        ],
        correct: "Báo cáo bằng văn bản hoặc trực tiếp cho Kiểm lâm địa bàn hoặc UBND cấp xã để kiểm tra cập nhật",
        explanation: "Luật Lâm nghiệp và Thông tư 16 quy định chủ rừng có trách nhiệm thông báo, báo cáo biến động rừng cho Kiểm lâm địa bàn hoặc UBND xã để tổ chức xác minh và cập nhật hồ sơ."
    },
    {
        question: "Ai có thẩm quyền phê duyệt và công bố số liệu hiện trạng rừng cấp tỉnh hàng năm?",
        options: [
            "Chi cục trưởng Chi cục Kiểm lâm",
            "Chủ tịch Ủy ban nhân dân cấp tỉnh",
            "Giám đốc Sở Nông nghiệp và Môi trường",
            "Cục trưởng Cục Thống kê tỉnh"
        ],
        correct: "Chủ tịch Ủy ban nhân dân cấp tỉnh",
        explanation: "Thông tư 16/2025/TT-BNNMT quy định Chủ tịch UBND cấp tỉnh phê duyệt và công bố hiện trạng rừng cấp tỉnh hàng năm trên cơ sở kết quả theo dõi diễn biến rừng do Sở NN&MT trình."
    },
    {
        question: "Thời hạn Chủ tịch UBND cấp tỉnh công bố số liệu hiện trạng rừng hàng năm chậm nhất là ngày nào?",
        options: [
            "Ngày 31 tháng 12 của năm theo dõi",
            "Trước ngày 31 tháng 3 của năm sau liền kề",
            "Ngày 30 tháng 6 của năm sau liền kề",
            "Ngày 30 tháng 9 của năm sau liền kề"
        ],
        correct: "Trước ngày 31 tháng 3 của năm sau liền kề",
        explanation: "Thông tư 16/2025/TT-BNNMT quy định UBND cấp tỉnh hoàn thành việc phê duyệt và công bố hiện trạng rừng của địa phương trước ngày 31 tháng 3 của năm sau liền kề."
    }
];
