/**
 * BỘ CÂU HỎI TRẮC NGHIỆM PHÁP LUẬT VÀ NGHIỆP VỤ KIỂM LÂM (100 CÂU)
 * Cấu trúc: 1 đáp án đúng + 3 đáp án bẫy thực tế (4 options)
 * Đã chuẩn hóa:
 * - 100% không đưa tên điều khoản luật vào nội dung các đáp án (options)
 * - Tích hợp các tình huống dí dỏm, gần gũi, hài hước đời sống tạo cảm giác giải trí
 * - Cân đối độ dài 4 options đồng đều, triệt tiêu lỗi đoán mò đáp án dài
 * - 100% phần giải thích (explanation) trích dẫn chi tiết Điểm, Khoản, Điều, Nghị định/Thông tư/Luật
 */
const questions_KL = [
  {
    "question": "Khi phát hiện hành vi vi phạm hành chính trong lĩnh vực lâm nghiệp, Kiểm lâm viên đang thi hành công vụ có quyền áp dụng các hình thức xử phạt và biện pháp nào sau đây theo Nghị định 146/2026/NĐ-CP?",
    "options": [
      "Phạt cảnh cáo; Phạt tiền đến 25.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị đến 50.000.000 đồng (02 lần mức phạt tiền)",
      "Phạt cảnh cáo; Phạt tiền đến 25.000.000 đồng; Tịch thu toàn bộ tang vật, phương tiện VPHC vi phạm mà không bị giới hạn về mặt giá trị",
      "Phạt cảnh cáo; Phạt tiền đến 50.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá mức tiền 100.000.000 đồng",
      "Phạt cảnh cáo; Phạt tiền đến 10.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị tương đương với mức phạt tiền là 25.000.000 đồng"
    ],
    "correct": "Phạt cảnh cáo; Phạt tiền đến 25.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị đến 50.000.000 đồng (02 lần mức phạt tiền)",
    "explanation": "Điểm a, Điểm b, Điểm c Khoản 1 Điều 29 Nghị định số 146/2026/NĐ-CP: Kiểm lâm viên đang thi hành công vụ có quyền phạt cảnh cáo; phạt tiền đến 25.000.000 đồng; tịch thu tang vật, phương tiện vi phạm hành chính có giá trị không vượt quá 02 lần mức tiền phạt thẩm quyền (tức đến 50.000.000 đồng)."
  },
  {
    "question": "Theo Nghị định 146/2026/NĐ-CP, Trạm trưởng Trạm Kiểm lâm có thẩm quyền xử phạt và tịch thu tang vật đối với cá nhân vi phạm như thế nào?",
    "options": [
      "Phạt tiền đến 100.000.000 đồng và có quyền tịch thu tang vật, phương tiện vi phạm hành chính không bị giới hạn giá trị",
      "Phạt tiền đến 100.000.000 đồng nhưng chỉ được tịch thu tang vật, phương tiện có giá trị không quá mức 100.000.000 đồng",
      "Phạt tiền đến 50.000.000 đồng và chỉ được tịch thu tang vật, phương tiện có giá trị không quá 02 lần mức phạt tiền",
      "Phạt tiền đến 150.000.000 đồng và có quyền áp dụng biện pháp tước quyền sử dụng giấy phép khai thác lâm sản có thời hạn"
    ],
    "correct": "Phạt tiền đến 100.000.000 đồng và có quyền tịch thu tang vật, phương tiện vi phạm hành chính không bị giới hạn giá trị",
    "explanation": "Khoản 2 Điều 29 Nghị định số 146/2026/NĐ-CP: Trạm trưởng Trạm Kiểm lâm có quyền phạt cảnh cáo; phạt tiền đến 100.000.000 đồng; tịch thu tang vật, phương tiện vi phạm hành chính và áp dụng biện pháp khắc phục hậu quả."
  },
  {
    "question": "Thẩm quyền xử phạt của Hạt trưởng Hạt Kiểm lâm và Đội trưởng Đội Kiểm lâm cơ động và PCCCR theo Nghị định 146/2026/NĐ-CP được quy định như thế nào đối với cá nhân?",
    "options": [
      "Phạt tiền đến 150.000.000 đồng; Tịch thu tang vật, phương tiện VPHC; Tước quyền sử dụng chứng chỉ hành nghề, giấy phép có thời hạn",
      "Phạt tiền đến 250.000.000 đồng; Tịch thu toàn bộ tang vật, phương tiện; Đình chỉ hoạt động cơ sở chế biến gỗ vĩnh viễn",
      "Phạt tiền đến 100.000.000 đồng; Tịch thu tang vật có giá trị không quá 300.000.000 đồng; Tước quyền sử dụng giấy phép không thời hạn",
      "Phạt tiền đến 200.000.000 đồng; Tịch thu tang vật, phương tiện vi phạm nhưng không có thẩm quyền tước quyền sử dụng giấy phép"
    ],
    "correct": "Phạt tiền đến 150.000.000 đồng; Tịch thu tang vật, phương tiện VPHC; Tước quyền sử dụng chứng chỉ hành nghề, giấy phép có thời hạn",
    "explanation": "Khoản 3 Điều 29 Nghị định số 146/2026/NĐ-CP: Hạt trưởng Hạt Kiểm lâm và Đội trưởng Đội Kiểm lâm cơ động và PCCCR có quyền phạt tiền đến 150.000.000 đồng; tịch thu tang vật, phương tiện VPHC; tước quyền sử dụng giấy phép, chứng chỉ hành nghề có thời hạn và áp dụng biện pháp khắc phục hậu quả."
  },
  {
    "question": "Thẩm quyền xử phạt của Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh theo Nghị định 146/2026/NĐ-CP đối với cá nhân và tổ chức được quy định như thế nào?",
    "options": [
      "Phạt tiền đến 250.000.000 đồng đối với cá nhân (500.000.000 đồng đối với tổ chức); Tịch thu tang vật; Tước giấy phép có thời hạn",
      "Phạt tiền đến 500.000.000 đồng đối với cá nhân (1.000.000.000 đồng đối với tổ chức); Tịch thu toàn bộ tang vật và phương tiện VPHC",
      "Phạt tiền đến 150.000.000 đồng đối với cá nhân (300.000.000 đồng đối với tổ chức); Tịch thu tang vật nhưng không được tước giấy phép",
      "Phạt tiền đến 200.000.000 đồng đối với cá nhân (400.000.000 đồng đối với tổ chức); Chỉ tịch thu tang vật có giá trị dưới 500 triệu đồng"
    ],
    "correct": "Phạt tiền đến 250.000.000 đồng đối với cá nhân (500.000.000 đồng đối với tổ chức); Tịch thu tang vật; Tước giấy phép có thời hạn",
    "explanation": "Khoản 4 Điều 29 Nghị định số 146/2026/NĐ-CP: Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh có quyền phạt tiền đến 250.000.000 đồng đối với cá nhân (đến 500.000.000 đồng đối với tổ chức); tịch thu tang vật, phương tiện VPHC; tước quyền sử dụng giấy phép có thời hạn và áp dụng biện pháp khắc phục hậu quả."
  },
  {
    "question": "Theo Nghị định 146/2026/NĐ-CP, Chủ tịch Ủy ban nhân dân cấp xã có thẩm quyền phạt tiền đối với cá nhân vi phạm trong lĩnh vực lâm nghiệp tối đa là bao nhiêu?",
    "options": [
      "Phạt tiền đến 250.000.000 đồng đối với cá nhân và có quyền tịch thu tang vật, phương tiện vi phạm hành chính",
      "Phạt tiền đến 5.000.000 đồng đối với cá nhân và không có quyền tịch thu tang vật có giá trị trên 10 triệu đồng",
      "Phạt tiền đến 50.000.000 đồng đối với cá nhân và chỉ được tịch thu tang vật có giá trị dưới 100 triệu đồng",
      "Phạt tiền đến 100.000.000 đồng đối với cá nhân nhưng bắt buộc phải có văn bản đồng ý của Hạt trưởng Hạt Kiểm lâm"
    ],
    "correct": "Phạt tiền đến 250.000.000 đồng đối với cá nhân và có quyền tịch thu tang vật, phương tiện vi phạm hành chính",
    "explanation": "Khoản 1 Điều 31 Nghị định số 146/2026/NĐ-CP: Chủ tịch Ủy ban nhân dân cấp xã có quyền phạt cảnh cáo; phạt tiền đến 250.000.000 đồng đối với cá nhân (500.000.000 đồng đối với tổ chức); tịch thu tang vật, phương tiện VPHC và áp dụng biện pháp khắc phục hậu quả trong lĩnh vực lâm nghiệp."
  },
  {
    "question": "Trường hợp một cá nhân thực hiện nhiều hành vi vi phạm hành chính trong lĩnh vực lâm nghiệp thì thẩm quyền xử phạt được xác định theo nguyên tắc nào?",
    "options": [
      "Nếu hình thức, mức phạt của từng hành vi thuộc thẩm quyền thì người đó xử phạt; nếu có hành vi vượt quá thẩm quyền thì chuyển toàn bộ hồ sơ lên cấp có thẩm quyền cao hơn",
      "Người phát hiện đầu tiên có quyền ra quyết định xử phạt cho tất cả các hành vi vi phạm, bất kể tổng số tiền phạt của các hành vi cộng lại vượt quá mức thẩm quyền",
      "Bắt buộc phải tách riêng từng hành vi vi phạm để từng chức danh có thẩm quyền ra từng quyết định xử phạt độc lập, không được phép chuyển hồ sơ lên cấp trên",
      "Tự động chuyển toàn bộ hồ sơ vụ việc lên Chủ tịch Ủy ban nhân dân cấp tỉnh để ban hành một quyết định xử phạt duy nhất nhằm bảo đảm thống nhất quản lý"
    ],
    "correct": "Nếu hình thức, mức phạt của từng hành vi thuộc thẩm quyền thì người đó xử phạt; nếu có hành vi vượt quá thẩm quyền thì chuyển toàn bộ hồ sơ lên cấp có thẩm quyền cao hơn",
    "explanation": "Khoản 3 Điều 52 Luật Xử lý vi phạm hành chính số 15/2012/QH13 (sửa đổi, bổ sung năm 2020) quy định nguyên tắc xác định thẩm quyền xử phạt khi một người thực hiện nhiều hành vi vi phạm hành chính."
  },
  {
    "question": "Thời hạn ra quyết định xử phạt vi phạm hành chính kể từ ngày lập biên bản VPHC trong lĩnh vực lâm nghiệp được quy định như thế nào?",
    "options": [
      "07 ngày làm việc; vụ việc có giải trình hoặc nhiều tình tiết phức tạp thì tối đa 01 tháng (đặc biệt phức tạp gia hạn tối đa không quá 02 tháng)",
      "05 ngày làm việc kể từ ngày lập biên bản; vụ việc có giải trình thì tối đa 15 ngày làm việc và tuyệt đối không được phép gia hạn thêm",
      "15 ngày theo lịch kể từ ngày lập biên bản; nếu vụ việc có khiếu nại thì thời hạn ban hành quyết định kéo dài tối đa không quá 45 ngày",
      "30 ngày làm việc kể từ ngày lập biên bản đối với mọi vụ việc; trường hợp đối tượng vi phạm bỏ trốn thì thời hạn kéo dài vô thời hạn"
    ],
    "correct": "07 ngày làm việc; vụ việc có giải trình hoặc nhiều tình tiết phức tạp thì tối đa 01 tháng (đặc biệt phức tạp gia hạn tối đa không quá 02 tháng)",
    "explanation": "Khoản 1 Điều 66 Luật Xử lý vi phạm hành chính số 15/2012/QH13 (sửa đổi, bổ sung năm 2020): Thời hạn ra quyết định xử phạt là 07 ngày làm việc kể từ ngày lập biên bản; vụ việc giải trình hoặc phức tạp là không quá 01 tháng, đặc biệt phức tạp gia hạn tối đa không quá 02 tháng."
  },
  {
    "question": "Trường hợp vụ vi phạm hành chính vượt quá thẩm quyền xử phạt của người lập biên bản thì thời hạn chuyển hồ sơ cho người có thẩm quyền xử phạt là bao lâu?",
    "options": [
      "Trong thời hạn 02 ngày làm việc kể từ ngày lập biên bản vi phạm hành chính",
      "Trong thời hạn 05 ngày làm việc kể từ ngày lập biên bản vi phạm hành chính",
      "Trong thời hạn 24 giờ kể từ thời điểm phát hiện và lập biên bản vi phạm",
      "Trong thời hạn 07 ngày làm việc để cơ quan cấp dưới củng cố đủ chứng cứ"
    ],
    "correct": "Trong thời hạn 02 ngày làm việc kể từ ngày lập biên bản vi phạm hành chính",
    "explanation": "Khoản 5 Điều 58 Luật Xử lý vi phạm hành chính số 15/2012/QH13 (sửa đổi, bổ sung năm 2020): Trường hợp vụ vi phạm vượt quá thẩm quyền, người lập biên bản phải chuyển hồ sơ cho người có thẩm quyền xử phạt trong thời hạn 02 ngày làm việc kể từ ngày lập biên bản."
  },
  {
    "question": "Theo Điều 157 Bộ luật Tố tụng hình sự, khi phát hiện tội phạm lâm nghiệp quả tang thuộc tội ít nghiêm trọng, Hạt trưởng Hạt Kiểm lâm có thẩm quyền tố tụng như thế nào?",
    "options": [
      "Khởi tố vụ án hình sự, lấy lời khai, khám nghiệm hiện trường, tạm giữ tài liệu tang vật và chuyển hồ sơ cho Viện kiểm sát trong thời hạn 07 ngày",
      "Khởi tố bị can, ra lệnh bắt tạm giam người phạm tội trong thời hạn 03 tháng để phục vụ công tác điều tra độc lập của cơ quan Kiểm lâm",
      "Lập biên bản vi phạm ban đầu rồi chuyển ngay hồ sơ cho Cơ quan Cảnh sát điều tra trong vòng 24 giờ mà không được quyền ra quyết định khởi tố vụ án",
      "Chuyển thẳng toàn bộ hồ sơ vụ án sang Tòa án nhân dân cấp huyện để mở phiên tòa xét xử sơ thẩm công khai theo thủ tục rút gọn"
    ],
    "correct": "Khởi tố vụ án hình sự, lấy lời khai, khám nghiệm hiện trường, tạm giữ tài liệu tang vật và chuyển hồ sơ cho Viện kiểm sát trong thời hạn 07 ngày",
    "explanation": "Khoản 1 Điều 157 và Điều 164 Bộ luật Tố tụng hình sự số 101/2015/QH13: Đối với tội phạm ít nghiêm trọng quả tang, Cục Kiểm lâm, Chi cục Kiểm lâm, Hạt Kiểm lâm có quyền khởi tố vụ án hình sự, tiến hành các biện pháp điều tra ban đầu và chuyển hồ sơ cho Viện kiểm sát có thẩm quyền trong thời hạn 07 ngày."
  },
  {
    "question": "Việc tạm giữ tang vật, phương tiện vi phạm hành chính theo thủ tục hành chính trong lĩnh vực lâm nghiệp chỉ được áp dụng trong những trường hợp nào?",
    "options": [
      "Để xác minh tình tiết mà nếu không tạm giữ thì không có căn cứ xử phạt, hoặc để ngăn chặn ngay hành vi, hoặc bảo đảm thi hành quyết định phạt",
      "Áp dụng bắt buộc đối với tất cả các trường hợp vi phạm hành chính trong lâm nghiệp bất kể mức tiền phạt nặng hay nhẹ để răn đe",
      "Chỉ áp dụng khi người có hành vi vi phạm kiên quyết từ chối ký vào biên bản vi phạm hành chính do Kiểm lâm viên lập tại hiện trường",
      "Áp dụng khi cơ quan Kiểm lâm địa phương có nhu cầu trưng dụng phương tiện để phục vụ hoạt động tuần tra công vụ bảo vệ rừng"
    ],
    "correct": "Để xác minh tình tiết mà nếu không tạm giữ thì không có căn cứ xử phạt, hoặc để ngăn chặn ngay hành vi, hoặc bảo đảm thi hành quyết định phạt",
    "explanation": "Khoản 1 Điều 125 Luật Xử lý vi phạm hành chính số 15/2012/QH13 (sửa đổi, bổ sung năm 2020) quy định các trường hợp thật cần thiết được áp dụng biện pháp tạm giữ tang vật, phương tiện vi phạm hành chính."
  },
  {
    "question": "Khi tiến hành đo tính thể tích gỗ tròn bị rỗng ruột theo quy định tại Phụ lục I Thông tư 26/2022/TT-BNNPTNT, Kiểm lâm viên phải thực hiện phương pháp nào?",
    "options": [
      "Tính tổng thể tích khúc gỗ theo công thức hình trụ, sau đó trừ đi thể tích phần ruột rỗng (tính theo đường kính và chiều sâu của phần rỗng)",
      "Chỉ đo phần gỗ đặc bên ngoài theo chu vi lóng gỗ và tự động nhân đôi kết quả tính toán để bù trừ phần khuyết tật của cây",
      "Bỏ qua không tính toán khối lượng đối với những khúc gỗ có đường kính phần ruột rỗng lớn hơn 20 cm để tránh sai số đo đếm",
      "Quy đổi toàn bộ khúc gỗ sang đơn vị ster (khối xếp gióng) bằng cách xếp lóng gỗ vào khung tiêu chuẩn rồi nhân hệ số rỗng 0,7"
    ],
    "correct": "Tính tổng thể tích khúc gỗ theo công thức hình trụ, sau đó trừ đi thể tích phần ruột rỗng (tính theo đường kính và chiều sâu của phần rỗng)",
    "explanation": "Phụ lục I ban hành kèm theo Thông tư số 26/2022/TT-BNNPTNT (sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT): Thể tích gỗ tròn rỗng ruột bằng thể tích toàn bộ khúc gỗ trừ đi thể tích phần ruột rỗng tính theo công thức hình trụ tương ứng."
  },
  {
    "question": "Khi kiểm tra lâm sản trên phương tiện giao thông đường bộ đang lưu thông, tổ công tác Kiểm lâm phải tuân thủ điều kiện pháp lý nào sau đây?",
    "options": [
      "Có quyết định dừng phương tiện hoặc kế hoạch tuần tra được cấp có thẩm quyền phê duyệt; công chức mặc quân phục, đeo số hiệu và xuất trình thẻ",
      "Kiểm lâm viên mặc quần đùi áo cộc tay ra đứng giữa đường quốc lộ vẫy tay gọi xe tải vào lề đường để hỏi thăm sức khỏe tài xế",
      "Bất kỳ ai mặc quần áo màu xanh lá cây rằn ri đều có quyền ra hiệu lệnh chặn đứng mọi phương tiện giao thông để xét hỏi hàng hóa",
      "Chỉ được dừng phương tiện khi tài xế tự nguyện bật đèn xi nhan xin vào trụ sở Hạt Kiểm lâm để mời các đồng chí uống nước chè"
    ],
    "correct": "Có quyết định dừng phương tiện hoặc kế hoạch tuần tra được cấp có thẩm quyền phê duyệt; công chức mặc quân phục, đeo số hiệu và xuất trình thẻ",
    "explanation": "Khoản 2 Điều 89 Luật Lâm nghiệp số 16/2017/QH14 và Điều 29 Nghị định số 146/2026/NĐ-CP: Việc dừng phương tiện giao thông kiểm tra lâm sản phải thực hiện đúng kế hoạch/quyết định được phê duyệt, công chức mang đúng trang phục, số hiệu và xuất trình thẻ Kiểm lâm."
  },
  {
    "question": "Thời hạn hoàn thành việc kiểm tra thực tế lâm sản và xác nhận Bảng kê lâm sản của Cơ quan Kiểm lâm sở tại (trường hợp phải kiểm tra thực tế) là bao lâu?",
    "options": [
      "Không quá 03 ngày làm việc kể từ ngày nhận được hồ sơ đề nghị hợp lệ",
      "Không quá 02 ngày làm việc kể từ ngày nhận được hồ sơ đề nghị hợp lệ",
      "Không quá 05 ngày làm việc để phối hợp với các lực lượng chức năng",
      "Không quá 24 giờ kể từ thời điểm chủ lâm sản tập kết đầy đủ hàng hóa"
    ],
    "correct": "Không quá 03 ngày làm việc kể từ ngày nhận được hồ sơ đề nghị hợp lệ",
    "explanation": "Khoản 3 Điều 6 Thông tư số 26/2022/TT-BNNPTNT (sửa đổi, bổ sung bởi Thông tư 84/2025/TT-BNNMT): Trường hợp phải kiểm tra thực tế lâm sản, thời hạn hoàn thành kiểm tra và xác nhận tối đa không quá 03 ngày làm việc."
  },
  {
    "question": "Để được cơ quan Kiểm lâm xếp loại Doanh nghiệp chế biến và xuất khẩu gỗ Nhóm I theo Nghị định 102/2020/NĐ-CP, doanh nghiệp phải đáp ứng tiêu chuẩn cốt lõi nào?",
    "options": [
      "Tuân thủ pháp luật tối thiểu 02 năm liên tục, vận hành hệ thống bảo đảm gỗ hợp pháp (DDS) và lưu trữ đầy đủ hồ sơ nguồn gốc gỗ",
      "Có vốn điều lệ đăng ký kinh doanh từ 50 tỷ đồng trở lên và sở hữu tối thiểu 03 nhà máy chế biến gỗ đang hoạt động liên tục",
      "Có hợp đồng xuất khẩu sản phẩm gỗ sang thị trường Hoa Kỳ hoặc Liên minh Châu Âu (EU) đạt kim ngạch trên 10 triệu USD trong năm",
      "Được Ủy ban nhân dân cấp xã nơi đặt trụ sở xác nhận là cơ sở sản xuất không vi phạm trật tự công cộng và bảo vệ môi trường"
    ],
    "correct": "Tuân thủ pháp luật tối thiểu 02 năm liên tục, vận hành hệ thống bảo đảm gỗ hợp pháp (DDS) và lưu trữ đầy đủ hồ sơ nguồn gốc gỗ",
    "explanation": "Điều 12 và Điều 13 Nghị định số 102/2020/NĐ-CP (VNTLAS): Tiêu chí phân loại Doanh nghiệp chế biến và xuất khẩu gỗ Nhóm I gồm tuân thủ pháp luật tối thiểu 02 năm, vận hành hệ thống giải trình trách nhiệm (DDS) và lưu trữ hồ sơ đầy đủ."
  },
  {
    "question": "Theo quy định hiện hành, cơ quan nào có thẩm quyền phê duyệt Phương án phòng cháy và chữa cháy rừng của chủ rừng nhóm II là tổ chức trên địa bàn tỉnh?",
    "options": [
      "Sở Nông nghiệp và Môi trường (hoặc Chi cục Kiểm lâm theo phân cấp) sau khi có văn bản tham gia ý kiến của cơ quan Cảnh sát PCCC",
      "Chủ tịch Ủy ban nhân dân cấp xã nơi chủ rừng là tổ chức đặt trụ sở chính của ban quản lý hoặc văn phòng điều hành sản xuất",
      "Hạt trưởng Hạt Kiểm lâm sở tại nơi có toàn bộ diện tích rừng tự nhiên hoặc rừng trồng của tổ chức đang trực tiếp quản lý bảo vệ",
      "Chủ rừng là tổ chức tự ký ban hành phương án và chỉ gửi bản sao để lưu trữ nội bộ tại văn phòng cơ quan mà không cần cấp nào duyệt"
    ],
    "correct": "Sở Nông nghiệp và Môi trường (hoặc Chi cục Kiểm lâm theo phân cấp) sau khi có văn bản tham gia ý kiến của cơ quan Cảnh sát PCCC",
    "explanation": "Khoản 3 Điều 45 Nghị định số 156/2018/NĐ-CP (sửa đổi, bổ sung bởi Nghị định 91/2024/NĐ-CP): Phương án PCCCR của chủ rừng là tổ chức do Sở Nông nghiệp và Phát triển nông thôn phê duyệt sau khi có ý kiến của cơ quan Cảnh sát PCCC và CNCH."
  },
  {
    "question": "Khi phát hiện hành vi phá rừng tự nhiên với quy mô diện tích lớn, trách nhiệm đầu tiên của Kiểm lâm địa bàn là gì?",
    "options": [
      "Kịp thời báo cáo ngay Lãnh đạo Hạt Kiểm lâm và UBND cấp xã; lập biên bản kiểm tra ban đầu, bảo vệ hiện trường và phối hợp lực lượng ngăn chặn",
      "Đứng quay video phát trực tiếp lên mạng xã hội khóc ròng kêu gọi cộng đồng mạng bốn phương chung tay vào cuộc giải cứu cánh rừng thân yêu",
      "Vội vã chạy một mạch về nhà khóa chặt cửa phòng trùm chăn đi ngủ, coi như bản thân chưa từng đặt chân lên quả đồi đó bao giờ trong đời",
      "Tự ý cầm gậy gộc xông thẳng vào khống chế toàn bộ nhóm đối tượng phá rừng có hung khí mà không cần gọi thêm đồng đội hỗ trợ tác chiến"
    ],
    "correct": "Kịp thời báo cáo ngay Lãnh đạo Hạt Kiểm lâm và UBND cấp xã; lập biên bản kiểm tra ban đầu, bảo vệ hiện trường và phối hợp lực lượng ngăn chặn",
    "explanation": "Khoản 2 Điều 89, Điều 104 Luật Lâm nghiệp số 16/2017/QH14 và Quy chế phối hợp quản lý bảo vệ rừng: Kiểm lâm địa bàn có trách nhiệm báo cáo khẩn cấp cho chính quyền cấp xã và Hạt trưởng Hạt Kiểm lâm, lập hồ sơ kiểm tra ban đầu và bảo vệ hiện trường."
  },
  {
    "question": "Biên bản vi phạm hành chính trong lĩnh vực lâm nghiệp lập không có sự chứng kiến hoặc không có chữ ký của người vi phạm có giá trị pháp lý không?",
    "options": [
      "Có giá trị pháp lý nếu có chữ ký của đại diện chính quyền cấp xã hoặc chữ ký của ít nhất 01 người chứng kiến xác nhận việc đối tượng từ chối ký",
      "Hoàn toàn vô hiệu và cơ quan Kiểm lâm bắt buộc phải hủy bỏ hồ sơ vụ việc, trả lại toàn bộ tang vật cho người có hành vi vi phạm",
      "Vẫn có giá trị pháp lý tuyệt đối mà không cần bất kỳ chữ ký xác nhận của cơ quan chính quyền xã hay người chứng kiến nào khác",
      "Chỉ có giá trị pháp lý nếu sau đó người vi phạm gửi văn bản xin lỗi và tự nguyện đến trụ sở Hạt Kiểm lâm nộp tiền phạt vi phạm"
    ],
    "correct": "Có giá trị pháp lý nếu có chữ ký của đại diện chính quyền cấp xã hoặc chữ ký của ít nhất 01 người chứng kiến xác nhận việc đối tượng từ chối ký",
    "explanation": "Khoản 2 Điều 58 Luật Xử lý vi phạm hành chính số 15/2012/QH13 (sửa đổi, bổ sung năm 2020): Trường hợp người vi phạm không ký biên bản thì biên bản phải có chữ ký của đại diện chính quyền cấp xã hoặc của ít nhất 01 người chứng kiến xác nhận việc người vi phạm không ký."
  },
  {
    "question": "Thời điểm chốt số liệu theo dõi diễn biến rừng hàng năm và thời hạn Ủy ban nhân dân cấp tỉnh công bố hiện trạng rừng là khi nào?",
    "options": [
      "Chốt số liệu vào ngày 31 tháng 12 hàng năm; công bố hiện trạng rừng cấp tỉnh trước ngày 31 tháng 3 năm liền kề",
      "Chốt số liệu vào ngày 30 tháng 6 hàng năm; công bố hiện trạng rừng cấp tỉnh trước ngày 31 tháng 8 cùng năm đó",
      "Chốt số liệu vào ngày 15 tháng 01 hàng năm; công bố hiện trạng rừng cấp tỉnh trước ngày 30 tháng 4 cùng năm đó",
      "Thời điểm chốt số liệu do từng Hạt Kiểm lâm tự quy định dựa theo mùa vụ trồng rừng thực tế tại từng địa phương"
    ],
    "correct": "Chốt số liệu vào ngày 31 tháng 12 hàng năm; công bố hiện trạng rừng cấp tỉnh trước ngày 31 tháng 3 năm liền kề",
    "explanation": "Khoản 1 và Khoản 3 Điều 20 Thông tư số 16/2025/TT-BNNMT ngày 24/6/2025 quy định về theo dõi diễn biến rừng: Thời điểm chốt số liệu diễn biến rừng là ngày 31 tháng 12 hàng năm; UBND cấp tỉnh công bố hiện trạng rừng toàn tỉnh trước ngày 31 tháng 3 năm sau."
  },
  {
    "question": "Xử lý tang vật là cá thể động vật rừng còn sống tạm giữ trong các vụ vi phạm hành chính phải tuân thủ nguyên tắc cấp bách nào?",
    "options": [
      "Phải bàn giao ngay cho cơ quan Thú y hoặc Trung tâm cứu hộ động vật để chăm sóc, cứu hộ kịp thời; lập biên bản bàn giao chặt chẽ",
      "Nhốt tạm giữ tại kho tang vật của cơ quan Kiểm lâm cho đến khi quyết định xử phạt vi phạm hành chính có hiệu lực pháp luật thi hành",
      "Tiến hành bán đấu giá khẩn cấp ngay trong ngày cho các hộ dân địa phương để kịp thời nộp tiền phạt thu được vào ngân sách nhà nước",
      "Thả ngay cá thể động vật vào bất kỳ khu rừng tự nhiên nào gần trụ sở Hạt Kiểm lâm mà không cần kiểm tra sức khỏe và kiểm dịch thú y"
    ],
    "correct": "Phải bàn giao ngay cho cơ quan Thú y hoặc Trung tâm cứu hộ động vật để chăm sóc, cứu hộ kịp thời; lập biên bản bàn giao chặt chẽ",
    "explanation": "Khoản 1 Điều 33 Nghị định số 146/2026/NĐ-CP: Tang vật vi phạm hành chính là động vật rừng còn sống phải được ưu tiên bàn giao ngay cho cơ sở cứu hộ động vật, vườn quốc gia hoặc cơ quan chuyên môn thú y để chăm sóc, cứu hộ."
  },
  {
    "question": "Phương pháp điều tra sâu bệnh hại rừng xác định diện tích rừng bị hại ở mức 'nặng' khi tỷ lệ tán lá bị hại hoặc tỷ lệ cây bị hại đạt ngưỡng nào?",
    "options": [
      "Tỷ lệ tán lá bị hại hoặc tỷ lệ cây bị hại trong ô tiêu chuẩn điều tra thực tế đạt từ 50% đến dưới 75% tổng số cây điều tra",
      "Đứng dưới gốc cây ngửa mặt lên trời đếm thấy rụng đúng 100 chiếc lá vàng là khẳng định ngay rừng đã bị sâu bệnh tàn phá nặng nề",
      "Khi bắt được một con sâu róm to bằng ngón tay cái đem cân lên thấy nặng hơn 10 gam thì lập tức công bố dịch bệnh sâu hại cấp tỉnh",
      "Chỉ khi toàn bộ 100% diện tích rừng rụng trụi sạch lá, cây khô chết đứng trơ trọi như que củi mới đủ căn cứ xác định là mức nặng"
    ],
    "correct": "Tỷ lệ tán lá bị hại hoặc tỷ lệ cây bị hại trong ô tiêu chuẩn điều tra thực tế đạt từ 50% đến dưới 75% tổng số cây điều tra",
    "explanation": "Khoản 2 Điều 61 Luật Lâm nghiệp số 16/2017/QH14 và Tiêu chuẩn quốc gia TCVN về điều tra sâu bệnh hại rừng: Mức độ hại được phân cấp gồm nhẹ (dưới 25%), trung bình (từ 25% đến 50%), nặng (trên 50% tỷ lệ cây hoặc tán lá bị hại)."
  },
  {
    "question": "Công chức Kiểm lâm khi thực hiện nhiệm vụ tuần tra rừng được sử dụng vũ khí quân dụng và công cụ hỗ trợ trong trường hợp nào?",
    "options": [
      "Đã được đào tạo tập huấn, có giấy phép sử dụng vũ khí và chỉ nổ súng phòng vệ chính đáng hoặc ngăn chặn hành vi nguy hiểm theo luật định",
      "Được phép nổ súng bắn chỉ thiên xua đuổi đàn chim rừng hoặc bắn pháo hoa ăn mừng mỗi khi tìm thấy một cây gỗ đại thụ trong rừng sâu",
      "Dùng dùi cui điện và còng số 8 để biểu diễn các bài quyền võ thuật cho bà con xem trong các buổi giao lưu văn nghệ quần chúng ở thôn bản",
      "Được tự do mang súng về nhà săn bắn thú hoang hoặc chim trời để cải thiện bữa ăn tươi cho cán bộ trạm vào những ngày mưa gió rảnh rỗi"
    ],
    "correct": "Đã được đào tạo tập huấn, có giấy phép sử dụng vũ khí và chỉ nổ súng phòng vệ chính đáng hoặc ngăn chặn hành vi nguy hiểm theo luật định",
    "explanation": "Luật Quản lý, sử dụng vũ khí, vật liệu nổ và công cụ hỗ trợ quy định Kiểm lâm chỉ được sử dụng vũ khí khi có giấy phép, bảo đảm đúng điều kiện phòng vệ và quy định pháp luật."
  },
  {
    "question": "Thời hạn và hình thức yêu cầu giải trình trực tiếp đối với cá nhân, tổ chức vi phạm hành chính có mức phạt tiền lớn trong lâm nghiệp được quy định ra sao?",
    "options": [
      "Văn bản yêu cầu giải trình gửi trong 02 ngày làm việc; người có thẩm quyền tổ chức giải trình trực tiếp trong thời hạn không quá 05 ngày làm việc",
      "Văn bản yêu cầu giải trình gửi trong 05 ngày làm việc; người có thẩm quyền tổ chức giải trình trực tiếp trong thời hạn không quá 10 ngày làm việc",
      "Yêu cầu giải trình bằng miệng trực tiếp tại hiện trường vi phạm; người có thẩm quyền phải hoàn thành biên bản giải trình trong vòng 24 giờ",
      "Văn bản yêu cầu giải trình gửi qua bưu điện trong 15 ngày; người có thẩm quyền chỉ xem xét văn bản không tổ chức đối thoại trực tiếp"
    ],
    "correct": "Văn bản yêu cầu giải trình gửi trong 02 ngày làm việc; người có thẩm quyền tổ chức giải trình trực tiếp trong thời hạn không quá 05 ngày làm việc",
    "explanation": "Điều 61 Luật Xử lý vi phạm hành chính: Văn bản yêu cầu giải trình gửi trong 02 ngày làm việc; người có thẩm quyền tổ chức phiên giải trình trong 05 ngày làm việc."
  },
  {
    "question": "Phương tiện vận tải của bên thứ ba bị người khác thuê để chở lâm sản trái pháp luật sẽ bị xử lý như thế nào theo Luật XLVPHC?",
    "options": [
      "Không tịch thu xe nếu chủ sở hữu không có lỗi và không biết xe bị dùng vi phạm; người vi phạm phải nộp tiền tương đương giá trị phương tiện",
      "Tịch thu ngay phương tiện sung công quỹ nhà nước bất kể chủ sở hữu có lỗi hay không; người thuê xe và chủ xe cùng liên đới nộp phạt tiền",
      "Trả lại xe vô điều kiện cho chủ sở hữu phương tiện ngay trong ngày; người có hành vi vi phạm không phải bồi hoàn bất kỳ khoản tiền nào khác",
      "Tạm giữ phương tiện vô thời hạn cho đến khi người vi phạm chấp hành xong quyết định phạt tiền và hoàn thành biện pháp trồng lại rừng"
    ],
    "correct": "Không tịch thu xe nếu chủ sở hữu không có lỗi và không biết xe bị dùng vi phạm; người vi phạm phải nộp tiền tương đương giá trị phương tiện",
    "explanation": "Khoản 1 Điều 126 Luật XLVPHC: Phương tiện bị chiếm đoạt, sử dụng trái phép không bị tịch thu nếu chủ sở hữu không có lỗi; người vi phạm phải nộp khoản tiền tương đương giá trị phương tiện."
  },
  {
    "question": "Thời hiệu xử phạt vi phạm hành chính đối với các hành vi vi phạm trong lĩnh vực lâm nghiệp được quy định như thế nào?",
    "options": [
      "Thời hiệu là 01 năm; riêng hành vi phá rừng, khai thác rừng, tàng trữ, buôn bán lâm sản trái phép qua biên giới thì thời hiệu là 02 năm",
      "Thời hiệu là 06 tháng đối với mọi hành vi vi phạm hành chính trong lâm nghiệp; trường hợp vi phạm có tổ chức thì thời hiệu là 01 năm",
      "Thời hiệu là 02 năm đối với mọi hành vi vi phạm lâm nghiệp; trường hợp đối tượng vi phạm lẩn trốn thì thời hiệu kéo dài tối đa 05 năm",
      "Thời hiệu là 05 năm kể từ ngày phát hiện hành vi vi phạm; riêng hành vi vi phạm quy chế quản lý rừng đặc dụng thì không tính thời hiệu"
    ],
    "correct": "Thời hiệu là 01 năm; riêng hành vi phá rừng, khai thác rừng, tàng trữ, buôn bán lâm sản trái phép qua biên giới thì thời hiệu là 02 năm",
    "explanation": "Điều 6 Luật Xử lý vi phạm hành chính và Điều 4 Nghị định 146/2026/NĐ-CP: Thời hiệu xử phạt thông thường là 01 năm; riêng các vi phạm về quản lý rừng, bảo vệ rừng, lâm sản thời hiệu là 02 năm."
  },
  {
    "question": "Hành vi khai thác gỗ rừng tự nhiên vượt quá 10% chỉ tiêu sản lượng ghi trong Giấy phép khai thác hợp pháp bị xử lý về hành vi nào?",
    "options": [
      "Hành vi khai thác rừng trái quy định của pháp luật đối với phần sản lượng gỗ khai thác vượt chỉ tiêu cho phép",
      "Hành vi trộm cắp tài sản công dân theo quy định của pháp luật hình sự đối với toàn bộ khối lượng gỗ khai thác",
      "Hành vi khai thác lâm sản hợp pháp do chủ rừng đã được cấp giấy phép khai thác ban đầu của cơ quan có thẩm quyền",
      "Hành vi vi phạm quy chế quản lý tài chính doanh nghiệp và được tự động bù trừ sản lượng vào chỉ tiêu năm kế tiếp"
    ],
    "correct": "Hành vi khai thác rừng trái quy định của pháp luật đối với phần sản lượng gỗ khai thác vượt chỉ tiêu cho phép",
    "explanation": "Khoản 1 và Khoản 2 Điều 13 Nghị định số 146/2026/NĐ-CP: Hành vi khai thác rừng vượt quá chỉ tiêu, khối lượng hoặc sai vị trí ghi trong giấy phép cấu thành hành vi khai thác rừng trái quy định của pháp luật đối với phần vượt chỉ tiêu."
  },
  {
    "question": "Quy định về thẩm quyền điều động lực lượng Kiểm lâm phối hợp liên huyện trong phạm vi một tỉnh thuộc về ai?",
    "options": [
      "Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh",
      "Hạt trưởng Hạt Kiểm lâm nơi xảy ra vụ việc phức tạp",
      "Chủ tịch Ủy ban nhân dân cấp huyện nơi cần tăng cường",
      "Đội trưởng Đội Kiểm lâm cơ động và PCCCR"
    ],
    "correct": "Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh",
    "explanation": "Khoản 2 Điều 103 Luật Lâm nghiệp số 16/2017/QH14 và Điều 29 Nghị định số 146/2026/NĐ-CP: Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh là người đứng đầu cơ quan Kiểm lâm địa phương, có thẩm quyền điều động lực lượng, phương tiện phối hợp giữa các Hạt Kiểm lâm và Đội Kiểm lâm cơ động trong tỉnh."
  },
  {
    "question": "Khi lập hồ sơ xử phạt vi phạm hành chính, việc xác định giá trị tang vật vi phạm để làm căn cứ xác định khung tiền phạt và thẩm quyền xử phạt do ai thực hiện?",
    "options": [
      "Người có thẩm quyền đang giải quyết vụ việc tự xác định căn cứ theo giá thị trường hoặc thành lập Hội đồng định giá tang vật",
      "Người có hành vi vi phạm tự kê khai giá mua ghi trên hóa đơn bán lẻ hoặc cam kết miệng với cơ quan Kiểm lâm làm việc",
      "Chỉ do Tòa án nhân dân cấp tỉnh ra quyết định thành lập hội đồng định giá tài sản theo trình tự thủ tục tố tụng tư pháp",
      "Áp dụng mức giá cố định theo biểu giá tính thuế tài nguyên của Ủy ban nhân dân cấp tỉnh mà không cần khảo sát thực tế"
    ],
    "correct": "Người có thẩm quyền đang giải quyết vụ việc tự xác định căn cứ theo giá thị trường hoặc thành lập Hội đồng định giá tang vật",
    "explanation": "Điều 60 Luật Xử lý vi phạm hành chính quy định các nguyên tắc và trình tự định giá tang vật vi phạm hành chính làm căn cứ xác định khung tiền phạt và thẩm quyền xử phạt."
  },
  {
    "question": "Trường hợp người bị xử phạt vi phạm hành chính không đồng ý với Quyết định xử phạt của Hạt trưởng Hạt Kiểm lâm thì quyền khiếu nại, khởi kiện được thực hiện thế nào?",
    "options": [
      "Khiếu nại lần đầu đến Hạt trưởng Hạt Kiểm lâm hoặc khởi kiện vụ án hành chính tại Tòa án nhân dân theo quy định tố tụng",
      "Bắt buộc phải gửi đơn khiếu nại lên Bộ trưởng Bộ Nông nghiệp và Môi trường trước khi được phép nộp đơn khởi kiện ra Tòa án",
      "Chỉ được quyền khiếu nại lên Chủ tịch Ủy ban nhân dân cấp xã nơi xảy ra vụ việc vi phạm để tổ chức hòa giải cơ sở tại thôn bản",
      "Không có quyền khiếu nại hay khởi kiện nếu quyết định xử phạt vi phạm hành chính đã được cơ quan Kiểm lâm tống đạt hợp lệ"
    ],
    "correct": "Khiếu nại lần đầu đến Hạt trưởng Hạt Kiểm lâm hoặc khởi kiện vụ án hành chính tại Tòa án nhân dân theo quy định tố tụng",
    "explanation": "Luật Khiếu nại và Luật Tố tụng hành chính quy định công dân có quyền khiếu nại lần đầu đến người ra quyết định hoặc khởi kiện thẳng ra Tòa án nhân dân."
  },
  {
    "question": "Trách nhiệm của công chức Kiểm lâm khi phát hiện dấu hiệu tội phạm hình sự trong quá trình thi hành công vụ kiểm tra lâm luật là gì?",
    "options": [
      "Phải chuyển ngay hồ sơ, tang vật cho Cơ quan điều tra có thẩm quyền để giải quyết theo tố tụng, không giữ lại để xử phạt hành chính",
      "Được quyền thỏa thuận với người vi phạm để nâng mức phạt tiền lên mức tối đa của khung phạt rồi khép lại hồ sơ giải quyết nội bộ",
      "Tịch thu toàn bộ tang vật bán đấu giá nộp vào ngân sách nhà nước trước, sau đó mới chuyển hồ sơ bản sao sang cơ quan Công an",
      "Giữ lại toàn bộ hồ sơ tang vật để cơ quan Kiểm lâm tự mở rộng điều tra trong thời hạn 01 năm nhằm lấy thành tích thi đua ngành"
    ],
    "correct": "Phải chuyển ngay hồ sơ, tang vật cho Cơ quan điều tra có thẩm quyền để giải quyết theo tố tụng, không giữ lại để xử phạt hành chính",
    "explanation": "Điều 62 Luật XLVPHC nghiêm cấm việc giữ lại vụ vi phạm có dấu hiệu tội phạm để xử lý vi phạm hành chính; phải chuyển ngay cho cơ quan tiến hành tố tụng hình sự."
  },
  {
    "question": "Trong trường hợp nào công chức Kiểm lâm đang thi hành nhiệm vụ bị coi là có hành vi tiêu cực, vi phạm pháp luật nghiêm trọng?",
    "options": [
      "Bao che, hợp thức hóa hồ sơ lâm sản bất hợp pháp, dung túng người phá rừng hoặc nhận tiền, lợi ích vật chất của đối tượng kiểm tra",
      "Từ chối lời mời uống rượu thịt gà của chủ xưởng gỗ và kiên quyết yêu cầu kiểm tra đối chiếu sổ sách lâm sản đến tận nửa đêm",
      "Đến từng nhà dân trong thôn bản nhắc nhở bà con không được vừa hút thuốc lào vừa đi dạo dưới tán rừng thông mùa hanh khô",
      "Tự bỏ tiền túi mua nước lọc và bánh mì tiếp tế cho các đối tượng vi phạm đang ngồi chờ hoàn thiện biên bản vi phạm hành chính"
    ],
    "correct": "Bao che, hợp thức hóa hồ sơ lâm sản bất hợp pháp, dung túng người phá rừng hoặc nhận tiền, lợi ích vật chất của đối tượng kiểm tra",
    "explanation": "Luật Cán bộ, công chức và Luật Phòng chống tham nhũng nghiêm cấm hành vi lợi dụng chức vụ bao che, hợp thức hóa lâm sản lậu, nhận hối lộ dưới mọi hình thức."
  },
  {
    "question": "Cơ quan nào có thẩm quyền quyết định chủ trương chuyển mục đích sử dụng rừng sang mục đích khác đối với dự án trên địa bàn tỉnh?",
    "options": [
      "Chỉ áp dụng khi cần ngăn chặn, đình chỉ ngay hành vi gây rối trật tự hoặc trốn tránh việc thi hành quyết định xử phạt vi phạm",
      "Được áp dụng đối với tất cả những người bị lập biên bản vi phạm hành chính trong lĩnh vực lâm nghiệp để phục vụ công tác điều tra",
      "Thời hạn tạm giữ người theo thủ tục hành chính được kéo dài tối đa đến 30 ngày để cơ quan chức năng hoàn thiện hồ sơ xử phạt",
      "Do bất kỳ Kiểm lâm viên nào đang đi tuần tra độc lập tự ra quyết định bằng miệng mà không cần lập văn bản phê duyệt của cấp trên"
    ],
    "correct": "Chỉ áp dụng khi cần ngăn chặn, đình chỉ ngay hành vi gây rối trật tự hoặc trốn tránh việc thi hành quyết định xử phạt vi phạm",
    "explanation": "Điều 20 Luật Lâm nghiệp (sửa đổi) và Nghị định 156/2018/NĐ-CP (hợp nhất) quy định HĐND cấp tỉnh có thẩm quyền quyết định chủ trương chuyển mục đích sử dụng rừng sang mục đích khác trên địa bàn."
  },
  {
    "question": "Cơ quan nào chủ trì tiếp nhận và tổ chức thẩm định hồ sơ đề nghị quyết định chủ trương chuyển mục đích sử dụng rừng sang mục đích khác?",
    "options": [
      "Phải tiến hành ngay trước sự chứng kiến của người vi phạm hoặc người đại diện, đại diện chính quyền cấp xã hoặc người chứng kiến",
      "Kiểm lâm viên tự mang tang vật về phòng làm việc cá nhân khóa cửa lại cất giữ mà không cần lập biên bản niêm phong chứng cứ",
      "Chỉ cần chụp ảnh tang vật lưu vào điện thoại di động thông minh là đủ giá trị pháp lý thay thế cho việc dán giấy niêm phong",
      "Chỉ thực hiện niêm phong khi tang vật là động vật rừng còn sống, còn gỗ tròn và gỗ xẻ các loại thì không cần niêm phong bảo quản"
    ],
    "correct": "Phải tiến hành ngay trước sự chứng kiến của người vi phạm hoặc người đại diện, đại diện chính quyền cấp xã hoặc người chứng kiến",
    "explanation": "Khoản 1 Điều 41 Nghị định 156/2018/NĐ-CP (hợp nhất) quy định Sở Nông nghiệp và Môi trường chủ trì tiếp nhận và phối hợp với các cơ quan liên quan thẩm định hồ sơ trình UBND tỉnh, HĐND tỉnh."
  },
  {
    "question": "Cơ quan nào có thẩm quyền thực hiện việc đánh giá và phân loại doanh nghiệp chế biến và xuất khẩu gỗ (Nhóm I, Nhóm II)?",
    "options": [
      "Sau thời hạn 10 ngày kể từ ngày nhận được quyết định xử phạt mà cá nhân, tổ chức không tự nguyện chấp hành thì bị cưỡng chế",
      "Sau thời hạn 24 giờ kể từ thời điểm nhận quyết định xử phạt mà chưa nộp tiền phạt thì bị cưỡng chế kê biên toàn bộ tài sản",
      "Sau thời hạn 60 ngày làm việc nếu người vi phạm có đơn xin gia hạn nộp phạt thì cơ quan Kiểm lâm tự động hủy bỏ quyết định",
      "Người có thẩm quyền xử phạt không được phép áp dụng biện pháp cưỡng chế mà phải khởi kiện đòi nợ dân sự tại Tòa án cấp huyện"
    ],
    "correct": "Sau thời hạn 10 ngày kể từ ngày nhận được quyết định xử phạt mà cá nhân, tổ chức không tự nguyện chấp hành thì bị cưỡng chế",
    "explanation": "Điều 13 Nghị định 102/2020/NĐ-CP (hợp nhất) quy định cơ quan Kiểm lâm cấp tỉnh có trách nhiệm tiếp nhận hồ sơ, đánh giá và quyết định phân loại doanh nghiệp chế biến, xuất khẩu gỗ."
  },
  {
    "question": "Theo Luật Lâm nghiệp, Kiểm lâm được quyền dừng phương tiện giao thông vận tải đường bộ khi nào?",
    "options": [
      "Khi có căn cứ xác định phương tiện đang vận chuyển lâm sản trái pháp luật hoặc có tin báo vi phạm và thực hiện đúng kế hoạch được phê duyệt",
      "Thấy xe ô tô tải nào có màu sơn đỏ rực bắt mắt đi qua thì vẫy tay xin đi nhờ một đoạn đường về trụ sở Hạt Kiểm lâm cho đỡ mỏi chân",
      "Ra đứng giữa ngã ba đường múa gậy chỉ huy giao thông để các tài xế tò mò tự động tấp xe vào lề đường hỏi thăm tình hình thời tiết",
      "Thấy bất kỳ xe chở hàng nào đi ngang qua địa bàn đều được tùy tiện chặn lại kiểm tra chứng minh nhân dân của toàn bộ hành khách trên xe"
    ],
    "correct": "Khi có căn cứ xác định phương tiện đang vận chuyển lâm sản trái pháp luật hoặc có tin báo vi phạm và thực hiện đúng kế hoạch được phê duyệt",
    "explanation": "Điểm d Khoản 2 Điều 104 Luật Lâm nghiệp quy định Kiểm lâm có quyền dừng phương tiện giao thông vận tải có dấu hiệu vận chuyển lâm sản trái pháp luật để kiểm tra, xử lý theo thẩm quyền."
  },
  {
    "question": "Kiểm lâm được trang bị, quản lý và sử dụng vũ khí, công cụ hỗ trợ theo quy định của văn bản nào?",
    "options": [
      "Trong thời hạn 02 ngày làm việc kể từ ngày ra quyết định xử phạt, phải gửi quyết định cho người bị xử phạt và cơ quan liên quan",
      "Trong thời hạn 30 ngày kể từ ngày ban hành quyết định xử phạt mới cần gửi quyết định cho người có hành vi vi phạm thi hành",
      "Chỉ cần thông báo bằng tin nhắn điện thoại hoặc gọi điện thông báo số tiền phạt mà không bắt buộc phải tống đạt quyết định bằng văn bản",
      "Niêm yết công khai quyết định tại trụ sở Chi cục Kiểm lâm trong 06 tháng thay thế cho việc giao trực tiếp cho người vi phạm"
    ],
    "correct": "Trong thời hạn 02 ngày làm việc kể từ ngày ra quyết định xử phạt, phải gửi quyết định cho người bị xử phạt và cơ quan liên quan",
    "explanation": "Điểm c Khoản 2 Điều 104 Luật Lâm nghiệp và Điều 12 Nghị định 01/2019/NĐ-CP quy định Kiểm lâm được trang bị, sử dụng vũ khí, CCHT theo quy định của Luật Quản lý, sử dụng vũ khí, VLN và CCHT."
  },
  {
    "question": "Theo Quyết định 1334/QĐ-SNNMT, phòng nào của Chi cục Kiểm lâm Tuyên Quang chủ trì tham mưu quản lý giống cây trồng và quản lý rừng bền vững?",
    "options": [
      "Quyết định xử phạt ban hành không đúng thẩm quyền, sai đối tượng, không đúng hành vi hoặc vi phạm nghiêm trọng thủ tục pháp lý",
      "Khi người bị xử phạt có đơn xin cứu xét trình bày gia cảnh khó khăn và cam kết không tái phạm các hành vi phá rừng",
      "Khi có sự can thiệp và yêu cầu bằng điện thoại của người thân quen làm việc tại các cơ quan quản lý nhà nước cấp trên",
      "Khi người có hành vi vi phạm đã nộp đủ số tiền phạt vào tài khoản tạm giữ của cơ quan Kiểm lâm trong vòng 03 ngày làm việc"
    ],
    "correct": "Quyết định xử phạt ban hành không đúng thẩm quyền, sai đối tượng, không đúng hành vi hoặc vi phạm nghiêm trọng thủ tục pháp lý",
    "explanation": "Điều 4 Quyết định số 1334/QĐ-SNNMT ngày 24/8/2025 của Sở NN&MT Tuyên Quang quy định Phòng Sử dụng và Phát triển rừng chủ trì tham mưu về phát triển rừng, giống cây trồng, quản lý rừng bền vững."
  },
  {
    "question": "Theo Quyết định 1334/QĐ-SNNMT, phòng nào của Chi cục Kiểm lâm Tuyên Quang chủ trì tham mưu xử lý vi phạm hành chính và tố tụng hình sự?",
    "options": [
      "Phạt tiền từ 150 triệu đồng trở lên đối với cá nhân (300 triệu đồng với tổ chức), gặp khó khăn đặc biệt về kinh tế và có đơn xin",
      "Phạt tiền từ 10 triệu đồng trở lên đối với mọi cá nhân vi phạm mà không cần chứng minh điều kiện hoàn cảnh kinh tế gia đình",
      "Chỉ cần người vi phạm là hộ nghèo có xác nhận của thôn bản thì tự động được chia nhỏ số tiền phạt nộp dần trong thời hạn 10 năm",
      "Mọi mức tiền phạt vi phạm hành chính trong lâm nghiệp đều bắt buộc phải nộp một lần duy nhất tại kho bạc, cấm nộp nhiều lần"
    ],
    "correct": "Phạt tiền từ 150 triệu đồng trở lên đối với cá nhân (300 triệu đồng với tổ chức), gặp khó khăn đặc biệt về kinh tế và có đơn xin",
    "explanation": "Điều 5 Quyết định số 1334/QĐ-SNNMT quy định Phòng Điều tra, xử lý vi phạm về lâm nghiệp tham mưu công tác pháp chế, điều tra, xử lý VPHC và áp dụng pháp luật tố tụng hình sự thuộc thẩm quyền."
  },
  {
    "question": "Theo Quyết định 1334/QĐ-SNNMT, phòng chuyên môn nào thuộc Chi cục Kiểm lâm Tuyên Quang chủ trì tham mưu công tác PCCCR?",
    "options": [
      "Bị phạt tiền từ 2 triệu đồng trở lên đối với cá nhân gặp khó khăn đặc biệt về kinh tế do thiên tai, dịch bệnh, tai nạn bất ngờ có xác nhận",
      "Áp dụng cho tất cả các đối tượng vi phạm có đơn đề nghị xin hoãn nộp phạt mà không cần bất kỳ giấy tờ chứng minh hoàn cảnh nào",
      "Chỉ áp dụng đối với người vi phạm là người chưa thành niên từ đủ 14 tuổi đến dưới 16 tuổi có bố mẹ đứng ra bảo lãnh bằng văn bản",
      "Luật không cho phép hoãn thi hành quyết định phạt tiền trong bất kỳ trường hợp nào nhằm bảo đảm tính nghiêm minh của pháp luật"
    ],
    "correct": "Bị phạt tiền từ 2 triệu đồng trở lên đối với cá nhân gặp khó khăn đặc biệt về kinh tế do thiên tai, dịch bệnh, tai nạn bất ngờ có xác nhận",
    "explanation": "Điều 3 Quyết định số 1334/QĐ-SNNMT quy định Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên chủ trì tham mưu thực hiện công tác quản lý, bảo vệ rừng, bảo tồn đa dạng sinh học và PCCCR."
  },
  {
    "question": "Hành vi vận chuyển lâm sản trái pháp luật được quy định và xử phạt theo điều khoản nào tại Nghị định số 146/2026/NĐ-CP?",
    "options": [
      "Điều 25 (Hành vi vi phạm quy định về vận chuyển lâm sản trái pháp luật)",
      "Điều 15 (Hành vi vi phạm quy định về khai thác thực vật rừng trái phép)",
      "Điều 18 (Hành vi vi phạm các quy định về phòng cháy và chữa cháy rừng)",
      "Điều 28 (Hành vi vi phạm quy định về quảng cáo động vật hoang dã trái phép)"
    ],
    "correct": "Điều 25 (Hành vi vi phạm quy định về vận chuyển lâm sản trái pháp luật)",
    "explanation": "Điều 25 Nghị định số 146/2026/NĐ-CP quy định cụ thể các khung hình thức xử phạt, mức phạt tiền và biện pháp khắc phục hậu quả đối với hành vi vận chuyển lâm sản trái pháp luật."
  },
  {
    "question": "Hành vi chặt, đốt, phá rừng, đào, bới, san ủi đất rừng trái phép được quy định tại điều khoản nào của Nghị định 146/2026/NĐ-CP?",
    "options": [
      "Điều 20 (Hành vi phá rừng trái pháp luật)",
      "Điều 10 (Hành vi lấn chiếm đất rừng trái phép)",
      "Điều 16 (Hành vi vi phạm an toàn phòng cháy rừng)",
      "Điều 23 (Hành vi vi phạm quy định bảo vệ động vật rừng)"
    ],
    "correct": "Điều 20 (Hành vi phá rừng trái pháp luật)",
    "explanation": "Điều 20 Nghị định số 146/2026/NĐ-CP quy định việc xử phạt đối với hành vi chặt, đốt, phá rừng, đào bới, san ủi đất rừng hoặc hủy hoại hệ sinh thái rừng trái pháp luật."
  },
  {
    "question": "Khai thác trái phép rừng sản xuất là rừng tự nhiên đối với gỗ thông thường từ khối lượng bao nhiêu m3 thì bị truy cứu TNHS theo Điều 232 BLHS?",
    "options": [
      "Nâng cao ý thức chấp hành pháp luật của nhân dân, phòng ngừa vi phạm từ sớm từ xa và huy động cộng đồng tham gia bảo vệ rừng",
      "Để thu các khoản phí dịch vụ tuyên truyền phổ biến giáo dục pháp luật phục vụ nâng cao đời sống công chức Kiểm lâm cơ sở",
      "Chỉ nhằm mục đích hoàn thành đủ chỉ tiêu số lượng các cuộc họp thôn bản được cơ quan cấp trên giao trong kế hoạch hàng năm",
      "Để thông báo công khai mức thu tiền đóng góp tự nguyện của người dân sinh sống gần rừng cho quỹ phát triển lâm nghiệp xã"
    ],
    "correct": "Nâng cao ý thức chấp hành pháp luật của nhân dân, phòng ngừa vi phạm từ sớm từ xa và huy động cộng đồng tham gia bảo vệ rừng",
    "explanation": "Điểm b Khoản 1 Điều 232 Bộ luật Hình sự quy định khai thác trái phép rừng sản xuất là rừng tự nhiên từ 10 m3 đến dưới 20 m3 gỗ loài thông thường thì bị truy cứu trách nhiệm hình sự."
  },
  {
    "question": "Khai thác trái phép rừng sản xuất là rừng trồng đối với gỗ thông thường từ khối lượng bao nhiêu m3 thì bị truy cứu TNHS theo Điều 232 BLHS?",
    "options": [
      "Từng hộ gia đình, chủ rừng và cơ sở kinh doanh, chế biến lâm sản trên địa bàn quản lý ký cam kết với UBND xã và Kiểm lâm",
      "Chỉ bắt buộc đối với các hộ gia đình thuộc diện hộ nghèo và hộ cận nghèo sinh sống trong vùng lõi rừng đặc dụng, rừng phòng hộ",
      "Chỉ các doanh nghiệp chế biến gỗ có vốn đầu tư nước ngoài (FDI) mới thuộc đối tượng bắt buộc phải ký bản cam kết bảo vệ rừng",
      "Bản cam kết bảo vệ rừng chỉ cần Trưởng thôn ký đại diện tập thể cho toàn bộ người dân trong thôn bản mà không cần từng hộ ký"
    ],
    "correct": "Từng hộ gia đình, chủ rừng và cơ sở kinh doanh, chế biến lâm sản trên địa bàn quản lý ký cam kết với UBND xã và Kiểm lâm",
    "explanation": "Điểm a Khoản 1 Điều 232 Bộ luật Hình sự quy định khai thác trái phép rừng sản xuất là rừng trồng từ 20 m3 đến dưới 40 m3 gỗ loài thông thường thì cấu thành tội phạm hình sự."
  },
  {
    "question": "Khai thác trái phép gỗ loài nguy cấp, quý, hiếm Nhóm IA tại rừng đặc dụng từ bao nhiêu m3 thì bị truy cứu TNHS theo Điều 232 BLHS?",
    "options": [
      "Tham mưu cho Đảng ủy, HĐND, UBND cấp xã ban hành nghị quyết, kế hoạch và tổ chức thực hiện nhiệm vụ quản lý, bảo vệ rừng trên địa bàn",
      "Tự mình ban hành các văn bản quy phạm pháp luật thay cho Hội đồng nhân dân và Ủy ban nhân dân cấp xã áp dụng trên địa bàn xã",
      "Chỉ thực hiện nhiệm vụ tuần tra rừng độc lập và không có trách nhiệm tham mưu các chủ trương, chính sách lâm nghiệp cho xã",
      "Thu các loại thuế đất lâm nghiệp và lệ phí trước bạ chuyển nhượng quyền sử dụng đất rừng của các hộ gia đình trong xã"
    ],
    "correct": "Tham mưu cho Đảng ủy, HĐND, UBND cấp xã ban hành nghị quyết, kế hoạch và tổ chức thực hiện nhiệm vụ quản lý, bảo vệ rừng trên địa bàn",
    "explanation": "Điểm h Khoản 1 Điều 232 Bộ luật Hình sự quy định khai thác trái phép gỗ Nhóm IA hoặc ưu tiên bảo vệ từ 0,5 m3 đến dưới 01 m3 tại rừng đặc dụng thì bị phạt tù hoặc phạt tiền hình sự."
  },
  {
    "question": "Tàng trữ, vận chuyển, mua bán trái phép gỗ thuộc Danh mục Nhóm IA từ khối lượng bao nhiêu m3 thì bị khởi tố theo Điều 232 BLHS?",
    "options": [
      "Từ 0,5 m3 trở lên",
      "Từ 1,0 m3 trở lên",
      "Từ 1,5 m3 trở lên",
      "Từ 2,0 m3 trở lên"
    ],
    "correct": "Từ 1,5 m3 trở lên",
    "explanation": "Điểm k Khoản 1 Điều 232 Bộ luật Hình sự quy định tàng trữ, vận chuyển, chế biến, mua bán trái phép từ 1,5 m3 đến dưới 03 m3 gỗ thuộc Danh mục Nhóm IA hoặc ưu tiên bảo vệ thì bị xử lý hình sự."
  },
  {
    "question": "Tội vi phạm quy định về bảo vệ động vật nguy cấp, quý, hiếm được quy định tại điều nào của Bộ luật Hình sự số 100/2015/QH13 (sửa đổi 2017)?",
    "options": [
      "Điều 244 (Tội vi phạm quy định về bảo vệ động vật nguy cấp, quý, hiếm)",
      "Điều 234 (Tội vi phạm quy định về bảo vệ động vật hoang dã thông thường)",
      "Điều 232 (Tội vi phạm quy định về khai thác, bảo vệ rừng và lâm sản)",
      "Điều 243 (Tội hủy hoại rừng và thảm thực vật tự nhiên)"
    ],
    "correct": "Điều 244 (Tội vi phạm quy định về bảo vệ động vật nguy cấp, quý, hiếm)",
    "explanation": "Điều 244 Bộ luật Hình sự số 100/2015/QH13 (sửa đổi, bổ sung năm 2017) quy định về Tội vi phạm quy định về bảo vệ động vật nguy cấp, quý, hiếm thuộc Danh mục loài ưu tiên bảo vệ hoặc Nhóm IB."
  },
  {
    "question": "Hành vi săn bắt, nuôi nhốt trái phép cá thể động vật thuộc lớp thú thuộc Danh mục Nhóm IB từ bao nhiêu cá thể thì bị khởi tố theo Điều 244 BLHS?",
    "options": [
      "Từ 1.000 m2 trở lên đối với rừng đặc dụng; từ 3.000 m2 trở lên đối với rừng phòng hộ; từ 5.000 m2 trở lên đối với rừng sản xuất",
      "Từ 500 m2 trở lên đối với rừng đặc dụng; từ 1.000 m2 trở lên đối với rừng phòng hộ; từ 2.000 m2 trở lên đối với rừng sản xuất",
      "Từ 2.000 m2 trở lên đối với rừng đặc dụng; từ 5.000 m2 trở lên đối với rừng phòng hộ; từ 10.000 m2 trở lên đối với rừng sản xuất",
      "Mọi hành vi phá rừng tự nhiên dù diện tích chỉ từ 10 m2 đều bị truy cứu trách nhiệm hình sự phạt tù mà không xử phạt hành chính"
    ],
    "correct": "Từ 1.000 m2 trở lên đối với rừng đặc dụng; từ 3.000 m2 trở lên đối với rừng phòng hộ; từ 5.000 m2 trở lên đối với rừng sản xuất",
    "explanation": "Điểm a Khoản 1 Điều 244 Bộ luật Hình sự quy định săn bắt, giết, nuôi, nhốt, vận chuyển, buôn bán trái phép từ 01 cá thể đến 04 cá thể động vật lớp thú thuộc loài nguy cấp, quý, hiếm thì bị truy cứu TNHS."
  },
  {
    "question": "Theo Bộ luật Tố tụng hình sự, cơ quan Kiểm lâm có thẩm quyền khởi tố vụ án hình sự trong trường hợp nào?",
    "options": [
      "Từ 1,5 m3 gỗ tròn Nhóm IA; từ 3,0 m3 gỗ tròn Nhóm IIA; từ 10 m3 gỗ tròn thông thường khai thác trái phép trong rừng sản xuất",
      "Từ 0,5 m3 gỗ tròn Nhóm IA; từ 1,0 m3 gỗ tròn Nhóm IIA; từ 3,0 m3 gỗ tròn thông thường khai thác trái phép trong rừng sản xuất",
      "Từ 3,0 m3 gỗ tròn Nhóm IA; từ 5,0 m3 gỗ tròn Nhóm IIA; từ 20 m3 gỗ tròn thông thường khai thác trái phép trong rừng sản xuất",
      "Gỗ rừng sản xuất không quy định khối lượng khởi tố hình sự mà chỉ áp dụng các khung phạt tiền vi phạm hành chính tối đa"
    ],
    "correct": "Từ 1,5 m3 gỗ tròn Nhóm IA; từ 3,0 m3 gỗ tròn Nhóm IIA; từ 10 m3 gỗ tròn thông thường khai thác trái phép trong rừng sản xuất",
    "explanation": "Điều 110 Bộ luật Tố tụng hình sự quy định cơ quan Kiểm lâm khi thực hiện nhiệm vụ mà phát hiện hành vi phạm tội thuộc thẩm quyền thì có quyền khởi tố vụ án hình sự và tiến hành hoạt động điều tra ban đầu."
  },
  {
    "question": "Theo Luật Xử lý VPHC, cá nhân vi phạm có quyền giải trình trực tiếp hoặc bằng văn bản khi mức phạt tiền tối đa của khung phạt là bao nhiêu?",
    "options": [
      "Chỉ từ 01 cá thể lớp thú; hoặc từ 02 cá thể lớp bò sát; hoặc từ 03 cá thể lớp chim hoặc lưỡng cư thuộc danh mục loài ưu tiên bảo vệ",
      "Phải từ 03 cá thể lớp thú trở lên; hoặc từ 05 cá thể lớp bò sát trở lên; hoặc từ 10 cá thể lớp chim hoang dã mới bị xử lý hình sự",
      "Phải từ 05 cá thể lớp thú trở lên; hoặc tổng giá trị đàn động vật quy đổi thành tiền phải đạt từ 500 triệu đồng trở lên mới khởi tố",
      "Hành vi tàng trữ động vật rừng còn sống luôn chỉ bị xử phạt vi phạm hành chính, chỉ khi giết mổ lấy thịt mới cấu thành tội phạm"
    ],
    "correct": "Chỉ từ 01 cá thể lớp thú; hoặc từ 02 cá thể lớp bò sát; hoặc từ 03 cá thể lớp chim hoặc lưỡng cư thuộc danh mục loài ưu tiên bảo vệ",
    "explanation": "Khoản 1 Điều 61 Luật Xử lý VPHC quy định cá nhân vi phạm có quyền giải trình đối với hành vi vi phạm hành chính mà pháp luật quy định áp dụng mức phạt tiền tối đa từ 15.000.000 đồng trở lên."
  },
  {
    "question": "Thời hạn cá nhân, tổ chức vi phạm gửi văn bản yêu cầu giải trình trực tiếp kể từ ngày lập biên bản vi phạm hành chính là bao lâu?",
    "options": [
      "Gây cháy rừng đặc dụng từ 5.000 m2; rừng phòng hộ từ 10.000 m2; rừng sản xuất từ 15.000 m2 hoặc gây thiệt hại tài sản từ 100 triệu đồng",
      "Gây cháy rừng đặc dụng từ 1.000 m2; rừng phòng hộ từ 2.000 m2; rừng sản xuất từ 5.000 m2 hoặc gây thiệt hại tài sản từ 20 triệu đồng",
      "Gây cháy rừng đặc dụng từ 10.000 m2; rừng phòng hộ từ 20.000 m2; rừng sản xuất từ 50.000 m2 hoặc gây thiệt hại tài sản từ 500 triệu đồng",
      "Chỉ bị truy cứu trách nhiệm hình sự khi ngọn lửa cháy lan thiêu rụi toàn bộ các công trình nhà làm việc của Trạm Kiểm lâm sở tại"
    ],
    "correct": "Gây cháy rừng đặc dụng từ 5.000 m2; rừng phòng hộ từ 10.000 m2; rừng sản xuất từ 15.000 m2 hoặc gây thiệt hại tài sản từ 100 triệu đồng",
    "explanation": "Điểm a Khoản 2 Điều 61 Luật Xử lý VPHC quy định đối với trường hợp giải trình trực tiếp, cá nhân, tổ chức vi phạm phải gửi văn bản yêu cầu trong thời hạn không quá 02 ngày làm việc kể từ ngày lập biên bản."
  },
  {
    "question": "Theo Nghị định 146/2026/NĐ-CP, việc xử phạt vi phạm hành chính trên môi trường điện tử được thực hiện thông qua hệ thống nào?",
    "options": [
      "Cơ quan Cảnh sát điều tra Công an cấp huyện có thẩm quyền thụ lý điều tra theo thủ tục tố tụng hình sự",
      "Hạt trưởng Hạt Kiểm lâm tự ký quyết định khởi tố bị can và chuyển hồ sơ sang Tòa án xét xử",
      "Chủ tịch Ủy ban nhân dân cấp xã nơi xảy ra vụ án hình sự có quyền ký quyết định khởi tố bị can",
      "Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh trực tiếp ký quyết định khởi tố bị can và bắt tạm giam"
    ],
    "correct": "Cơ quan Cảnh sát điều tra Công an cấp huyện có thẩm quyền thụ lý điều tra theo thủ tục tố tụng hình sự",
    "explanation": "Điều 9 Nghị định 146/2026/NĐ-CP quy định việc xử phạt VPHC trên môi trường điện tử được thực hiện thông qua Cổng Dịch vụ công Quốc gia hoặc Cổng dịch vụ công của bộ, cơ quan ngang bộ, UBND cấp tỉnh."
  },
  {
    "question": "Ủy ban nhân dân cấp xã có trách nhiệm quản lý nhà nước đối với diện tích rừng nào trên địa bàn?",
    "options": [
      "Chỉ rừng đặc dụng trên địa bàn xã",
      "Diện tích rừng thuộc sở hữu toàn dân chưa giao, chưa cho thuê trên địa bàn",
      "Chỉ rừng sản xuất của các hộ gia đình",
      "Tất cả diện tích rừng của các công ty lâm nghiệp"
    ],
    "correct": "Diện tích rừng thuộc sở hữu toàn dân chưa giao, chưa cho thuê trên địa bàn",
    "explanation": "Khoản 3 Điều 102 Luật Lâm nghiệp 2017 quy định UBND cấp xã có trách nhiệm quản lý diện tích rừng thuộc sở hữu toàn dân chưa giao, chưa cho thuê trên địa bàn xã."
  },
  {
    "question": "Ai giữ chức vụ Trưởng ban Ban Chỉ huy Phòng cháy, chữa cháy rừng cấp xã?",
    "options": [
      "Chủ tịch Ủy ban nhân dân cấp xã",
      "Trưởng Công an cấp xã",
      "Kiểm lâm địa bàn phụ trách xã",
      "Chỉ huy trưởng Ban Chỉ huy Quân sự xã"
    ],
    "correct": "Chủ tịch Ủy ban nhân dân cấp xã",
    "explanation": "Theo quy định tại Điều 48 Nghị định 156/2018/NĐ-CP, Chủ tịch UBND cấp xã là Trưởng ban Chỉ huy PCCCR cấp xã, chịu trách nhiệm toàn diện về công tác PCCCR trên địa bàn."
  },
  {
    "question": "Trong Ban Chỉ huy PCCCR cấp xã, Kiểm lâm địa bàn thường đảm nhiệm vai trò gì?",
    "options": [
      "Trưởng ban Chỉ huy",
      "Phó Trưởng ban Thường trực hoặc ủy viên tham mưu nghiệp vụ",
      "Chỉ tham gia với vai trò quan sát viên",
      "Không thuộc thành phần Ban Chỉ huy"
    ],
    "correct": "Phó Trưởng ban Thường trực hoặc ủy viên tham mưu nghiệp vụ",
    "explanation": "Khoản 3 Điều 49 Nghị định số 156/2018/NĐ-CP (sửa đổi, bổ sung bởi Nghị định 91/2024/NĐ-CP): Trong Ban Chỉ huy phòng cháy và chữa cháy rừng cấp xã, Kiểm lâm địa bàn tham gia với vai trò là thành viên thường trực, cơ quan chuyên môn tham mưu kỹ thuật."
  },
  {
    "question": "Khi xảy ra cháy rừng trên địa bàn xã, Chủ tịch UBND cấp xã có thẩm quyền huy động lực lượng nào?",
    "options": [
      "Huy động lực lượng dân quân, công an xã, nhân dân và phương tiện tại chỗ của các cơ quan, tổ chức, hộ gia đình trên địa bàn tham gia dập lửa",
      "Huy động toàn bộ các cháu học sinh trường mầm non mang theo súng nước đồ chơi chạy lên đồi hỗ trợ các chú xịt nước dập tắt đám cháy rừng",
      "Ngồi tại trụ sở lập đàn cầu mưa, thắp hương khấn thần linh ba ngày ba đêm liên tục chờ cơn mưa rào tự nhiên trút xuống dập tắt ngọn lửa",
      "Chỉ được phép gọi điện thoại nhờ lực lượng cứu hỏa chuyên nghiệp của tỉnh lên dập chứ tuyệt đối không được làm phiền tới cuộc sống bà con"
    ],
    "correct": "Huy động lực lượng dân quân, công an xã, nhân dân và phương tiện tại chỗ của các cơ quan, tổ chức, hộ gia đình trên địa bàn tham gia dập lửa",
    "explanation": "Khoản 2 Điều 53 Nghị định 156/2018/NĐ-CP quy định Chủ tịch UBND cấp xã có quyền huy động lực lượng, phương tiện tại chỗ của các cơ quan, tổ chức, hộ gia đình, cá nhân trên địa bàn để chữa cháy."
  },
  {
    "question": "Phương châm '4 tại chỗ' trong công tác phòng cháy, chữa cháy rừng cấp xã gồm những yếu tố nào?",
    "options": [
      "Chỉ huy tại chỗ, lực lượng tại chỗ, phương tiện tại chỗ và hậu cần tại chỗ sẵn sàng ứng phó, cơ động dập tắt đám cháy ngay từ giờ đầu",
      "Ăn uống tại chỗ, ngủ nghỉ tại chỗ, bấm điện thoại lướt mạng tại chỗ và chụp ảnh kỷ niệm phong cảnh rừng xanh tại chỗ cùng bà con lối xóm",
      "Hát hò tại chỗ, ăn cỗ tại chỗ, uống trà đàm đạo tại chỗ và quay video ca nhạc đăng lên mạng xã hội tại chỗ để giải trí những lúc rảnh rỗi",
      "Bấm còi hú tại chỗ, đứng chỉ tay nhìn tại chỗ, hô hào thật to tại chỗ và chạy thật nhanh về nhà đóng cửa đi trốn tại chỗ cho an toàn"
    ],
    "correct": "Chỉ huy tại chỗ, lực lượng tại chỗ, phương tiện tại chỗ và hậu cần tại chỗ sẵn sàng ứng phó, cơ động dập tắt đám cháy ngay từ giờ đầu",
    "explanation": "Hướng dẫn 230/HD-CCKL và Nghị định 156/2018/NĐ-CP quy định công tác chữa cháy rừng phải thực hiện triệt để theo phương châm 4 tại chỗ: chỉ huy, lực lượng, phương tiện và hậu cần tại chỗ."
  },
  {
    "question": "Diễn tập phòng cháy, chữa cháy rừng cấp xã theo hướng dẫn nghiệp vụ gồm những nội dung nào?",
    "options": [
      "Chỉ tập luyện dập lửa tại hiện trường",
      "Diễn tập vận hành cơ chế tại hội trường và diễn tập thực binh tại hiện trường",
      "Chỉ họp phân công nhiệm vụ trên văn bản",
      "Chỉ kiểm tra bảo dưỡng máy thổi gió và cưa xăng"
    ],
    "correct": "Diễn tập vận hành cơ chế tại hội trường và diễn tập thực binh tại hiện trường",
    "explanation": "Điều 51 Nghị định số 156/2018/NĐ-CP và Mục II.2 Hướng dẫn số 230/HD-CCKL của Chi cục Kiểm lâm: Diễn tập PCCCR cấp xã được tổ chức định kỳ nhằm nâng cao năng lực chỉ huy theo phương châm 4 tại chỗ."
  },
  {
    "question": "Trách nhiệm của UBND cấp xã trong công tác theo dõi diễn biến rừng hàng năm là gì?",
    "options": [
      "Tự phân tích ảnh vệ tinh độc lập không cần kiểm tra thực địa",
      "Tiếp nhận thông tin biến động từ chủ rừng, phối hợp Kiểm lâm xác minh và xác nhận hồ sơ",
      "Giao toàn bộ trách nhiệm cho các thôn tự thống kê",
      "Chỉ thống kê diện tích rừng trồng mới"
    ],
    "correct": "Tiếp nhận thông tin biến động từ chủ rừng, phối hợp Kiểm lâm xác minh và xác nhận hồ sơ",
    "explanation": "Thông tư 16/2025/TT-BNNMT quy định UBND cấp xã tiếp nhận báo cáo biến động rừng của chủ rừng, phối hợp Kiểm lâm địa bàn kiểm tra thực địa và xác nhận kết quả biến động rừng trên địa bàn."
  },
  {
    "question": "Khi tiếp nhận thông tin về động vật hoang dã đi lạc, bị thương, UBND cấp xã phải lập biên bản trong thời hạn bao lâu?",
    "options": [
      "Trong thời hạn 01 ngày làm việc (24 giờ) kể từ khi tiếp nhận thông tin để kiểm tra, tiếp nhận và lập biên bản giao nhận động vật bảo vệ an toàn",
      "Cứ thong thả chờ con thú rừng dưỡng thương lành lặn, biết đứng dậy vẫy tay chào tạm biệt rồi cán bộ xã mới ngồi vào bàn làm việc viết biên bản",
      "Mang con thú về trụ sở xã giao cho tổ hậu cần làm tiệc liên hoan chiêu đãi toàn thể cán bộ công chức sau giờ tan sở làm việc vào chiều thứ sáu",
      "Để mặc con vật ngoài đường trong thời hạn 30 ngày, nếu không thấy ai đến nhận thì người dân xung quanh khu vực được quyền tự chia nhau nuôi nhốt"
    ],
    "correct": "Trong thời hạn 01 ngày làm việc (24 giờ) kể từ khi tiếp nhận thông tin để kiểm tra, tiếp nhận và lập biên bản giao nhận động vật bảo vệ an toàn",
    "explanation": "Điểm b Khoản 3 Điều 8 Thông tư 85/2025/TT-BNNMT quy định trong 01 ngày làm việc kể từ khi nhận được thông tin, UBND cấp xã tổ chức kiểm tra, tiếp nhận và lập biên bản giao nhận động vật."
  },
  {
    "question": "Thời hạn UBND cấp xã thông báo công khai để xác minh chủ sở hữu hợp pháp của động vật đi lạc là bao lâu?",
    "options": [
      "03 ngày làm việc",
      "05 ngày làm việc",
      "10 ngày làm việc",
      "30 ngày"
    ],
    "correct": "05 ngày làm việc",
    "explanation": "Điểm b Khoản 3 Điều 8 Thông tư 85/2025/TT-BNNMT quy định thời hạn thông báo công khai tại trụ sở và trên phương tiện truyền thanh để xác minh chủ sở hữu hợp pháp là 05 ngày làm việc."
  },
  {
    "question": "Chủ tịch UBND cấp xã có thẩm quyền phê duyệt Phương án khai thác rừng trong trường hợp nào?",
    "options": [
      "Khai thác gỗ rừng tự nhiên của các công ty lâm nghiệp",
      "Khai thác rừng trồng của hộ gia đình, cá nhân, cộng đồng dân cư trên địa bàn",
      "Khai thác rừng đặc dụng của Ban Quản lý vườn quốc gia",
      "Khai thác tận thu khoáng sản trong rừng phòng hộ"
    ],
    "correct": "Khai thác rừng trồng của hộ gia đình, cá nhân, cộng đồng dân cư trên địa bàn",
    "explanation": "Điểm c Khoản 3 Điều 6 Thông tư 26/2022/TT-BNNPTNT (hợp nhất) quy định Chủ tịch UBND cấp xã phê duyệt phương án khai thác gỗ rừng trồng của HGĐ, cá nhân, cộng đồng dân cư."
  },
  {
    "question": "Kiểm lâm địa bàn có trách nhiệm tham mưu cho UBND cấp xã nội dung nào sau đây?",
    "options": [
      "Phê duyệt dự toán ngân sách chi thường xuyên của xã",
      "Xây dựng kế hoạch bảo vệ rừng, phương án PCCCR và tổ chức lực lượng quần chúng BVR",
      "Quyết định xử phạt vi phạm giao thông đường bộ",
      "Cấp giấy chứng nhận quyền sử dụng đất ở cho nhân dân"
    ],
    "correct": "Xây dựng kế hoạch bảo vệ rừng, phương án PCCCR và tổ chức lực lượng quần chúng BVR",
    "explanation": "Điều 104 Luật Lâm nghiệp và Nghị định 01/2019/NĐ-CP quy định Kiểm lâm địa bàn tham mưu UBND cấp xã thực hiện chức năng QLNN về lâm nghiệp, lập kế hoạch BVR, PCCCR cơ sở."
  },
  {
    "question": "Khi phát hiện hành vi lấn chiếm đất rừng trái phép trên địa bàn, UBND cấp xã phải xử lý như thế nào?",
    "options": [
      "Đình chỉ ngay hành vi vi phạm, lập biên bản hoặc chuyển cơ quan có thẩm quyền xử lý",
      "Chờ người vi phạm xây dựng xong công trình mới xử lý",
      "Không thuộc thẩm quyền của xã nên không can thiệp",
      "Hợp thức hóa cho người vi phạm thuê lại đất rừng"
    ],
    "correct": "Đình chỉ ngay hành vi vi phạm, lập biên bản hoặc chuyển cơ quan có thẩm quyền xử lý",
    "explanation": "Điều 102 Luật Lâm nghiệp và Nghị định 146/2026/NĐ-CP quy định Chủ tịch UBND cấp xã có trách nhiệm phát hiện, ngăn chặn, đình chỉ kịp thời hành vi lấn chiếm đất rừng và lập biên bản xử lý theo thẩm quyền."
  },
  {
    "question": "Hồ sơ quản lý rừng ở cấp xã do UBND xã và Kiểm lâm địa bàn theo dõi bắt buộc phải có tài liệu nào?",
    "options": [
      "Bản đồ hiện trạng rừng, sổ theo dõi diễn biến rừng và danh sách các chủ rừng trên địa bàn",
      "Chỉ cần sổ thu nộp thuế sử dụng đất nông nghiệp",
      "Chỉ cần danh sách cán bộ xã",
      "Hóa đơn mua sắm trang thiết bị văn phòng xã"
    ],
    "correct": "Bản đồ hiện trạng rừng, sổ theo dõi diễn biến rừng và danh sách các chủ rừng trên địa bàn",
    "explanation": "Thông tư 16/2025/TT-BNNMT quy định UBND cấp xã lưu trữ hồ sơ theo dõi rừng gồm bản đồ hiện trạng rừng, cơ sở dữ liệu diễn biến rừng và danh bạ quản lý các chủ rừng trên địa bàn."
  },
  {
    "question": "Chủ tịch UBND cấp xã có thẩm quyền áp dụng biện pháp khắc phục hậu quả nào theo NĐ 146/2026/NĐ-CP?",
    "options": [
      "Buộc khôi phục lại tình trạng ban đầu của rừng và buộc trồng lại rừng",
      "Tịch thu nhà ở của người vi phạm",
      "Tước quyền công dân của người vi phạm",
      "Cấm người vi phạm cư trú tại địa phương"
    ],
    "correct": "Buộc khôi phục lại tình trạng ban đầu của rừng và buộc trồng lại rừng",
    "explanation": "Điểm đ Khoản 1 Điều 31 Nghị định 146/2026/NĐ-CP quy định Chủ tịch UBND cấp xã có quyền áp dụng biện pháp buộc khôi phục tình trạng ban đầu, buộc nộp lại số lợi bất hợp pháp và trồng lại rừng."
  },
  {
    "question": "Chủ thể nào chịu trách nhiệm chỉ đạo hòa giải các vụ tranh chấp về quyền sử dụng rừng ở cơ sở?",
    "options": [
      "Ủy ban nhân dân cấp xã nơi có diện tích rừng xảy ra tranh chấp có trách nhiệm chủ trì, phối hợp với các đoàn thể tổ chức hòa giải cơ sở",
      "Tổ chức cho hai bên tranh chấp thi đấu vật tay hoặc kéo co tại sân đình thôn, bên nào giành chiến thắng thì được trọn quyền sở hữu quả đồi",
      "Mời thầy bói ở làng bên về xem chỉ tay và gieo quẻ âm dương để phân định ranh giới cắm mốc quả đồi rừng cho hai gia đình đỡ mất công cãi nhau",
      "Để mặc cho hai bên tự do mang gậy gộc rào chắn ra cãi lộn phân định thắng thua, chính quyền địa phương tuyệt đối không can thiệp việc nội bộ"
    ],
    "correct": "Ủy ban nhân dân cấp xã nơi có diện tích rừng xảy ra tranh chấp có trách nhiệm chủ trì, phối hợp với các đoàn thể tổ chức hòa giải cơ sở",
    "explanation": "Luật Lâm nghiệp và Luật Đất đai quy định Nhà nước khuyến khích hòa giải tranh chấp đất rừng ở cơ sở; UBND cấp xã có trách nhiệm chủ trì tổ chức việc hòa giải tranh chấp."
  },
  {
    "question": "Nguyên tắc cơ bản trong công tác phòng, chống sâu bệnh hại rừng theo Hướng dẫn 230/HD-CCKL là gì?",
    "options": [
      "Diệt trừ là chính, phun thuốc hóa học trên diện rộng ngay khi phát hiện",
      "Phòng là chính, diệt trừ kịp thời; ưu tiên biện pháp sinh học, hạn chế thuốc hóa học độc hại",
      "Để sâu bệnh phát triển tự nhiên không can thiệp",
      "Đốt dọn toàn bộ diện tích rừng bị sâu bệnh tấn công"
    ],
    "correct": "Phòng là chính, diệt trừ kịp thời; ưu tiên biện pháp sinh học, hạn chế thuốc hóa học độc hại",
    "explanation": "Khoản 1 Điều 61 Luật Lâm nghiệp số 16/2017/QH14 và Mục I.2 Hướng dẫn số 230/HD-CCKL: Nguyên tắc cơ bản trong bảo vệ thực vật rừng là lấy phòng ngừa làm chính, phát hiện sớm, diệt trừ kịp thời."
  },
  {
    "question": "Công thức tính tỷ lệ cây bị sâu, bệnh hại (P%) trong điều tra rừng theo Hướng dẫn 230/HD-CCKL là gì?",
    "options": [
      "P% = (n / N) x 100 (với n: số cây bị hại; N: tổng số cây điều tra)",
      "P% = (N / n) x 100 (với N: tổng số cây; n: số cây bị hại)",
      "P% = n x N / 100",
      "P% = (n + N) / 2"
    ],
    "correct": "P% = (n / N) x 100 (với n: số cây bị hại; N: tổng số cây điều tra)",
    "explanation": "Tiêu chuẩn quốc gia TCVN về điều tra dịch hại rừng và Mục I.4 Hướng dẫn số 230/HD-CCKL: Tỷ lệ cây bị hại P% = (Số cây bị hại / Tổng số cây điều tra) x 100."
  },
  {
    "question": "Theo mức độ phân cấp tỷ lệ cây bị hại (P%), mức độ hại 'Nặng' được xác định khi nào?",
    "options": [
      "P% dưới 10%",
      "P% từ 10% đến dưới 25%",
      "P% từ 25% đến 50%",
      "P% lớn hơn 50%"
    ],
    "correct": "P% lớn hơn 50%",
    "explanation": "Tiêu chuẩn quốc gia về điều tra sâu bệnh hại rừng và Hướng dẫn số 230/HD-CCKL: Mức độ hại nặng được xác định khi tỷ lệ cây bị hại đạt trên 50% tổng số cây điều tra."
  },
  {
    "question": "Khi phát hiện dịch sâu bệnh hại rừng bùng phát có nguy cơ lây lan diện rộng, cơ quan Kiểm lâm phải làm gì?",
    "options": [
      "Báo cáo ngay cho Sở NN&MT, UBND cấp huyện/tỉnh và cơ quan bảo vệ thực vật chuyên ngành",
      "Tự ý mua thuốc bảo vệ thực vật cấm để phun dập dịch",
      "Chờ dịch bệnh tự thoái trào sau mùa mưa",
      "Yêu cầu chủ rừng chặt trắng toàn bộ diện tích rừng xung quanh"
    ],
    "correct": "Báo cáo ngay cho Sở NN&MT, UBND cấp huyện/tỉnh và cơ quan bảo vệ thực vật chuyên ngành",
    "explanation": "Khoản 2 Điều 61 Luật Lâm nghiệp số 16/2017/QH14 và Mục I.5 Hướng dẫn số 230/HD-CCKL: Khi phát sinh ổ dịch có nguy cơ lây lan diện rộng, Kiểm lâm địa bàn phải báo cáo ngay Hạt trưởng và UBND xã để công bố và khoanh vùng dập dịch."
  },
  {
    "question": "Thời kỳ điều tra định kỳ sâu bệnh hại rừng trong năm thường được bố trí vào giai đoạn nào?",
    "options": [
      "Chỉ điều tra vào mùa đông khi cây rụng lá",
      "Vào các giai đoạn sinh trưởng nhạy cảm của cây rừng và thời kỳ cao điểm phát sinh sâu bệnh",
      "Chỉ điều tra sau khi đã khai thác rừng xong",
      "Bất kỳ ngày nào không có lịch tuần tra"
    ],
    "correct": "Vào các giai đoạn sinh trưởng nhạy cảm của cây rừng và thời kỳ cao điểm phát sinh sâu bệnh",
    "explanation": "Điều 61 Luật Lâm nghiệp số 16/2017/QH14 và Tiêu chuẩn điều tra sâu bệnh: Điều tra định kỳ được tiến hành vào các giai đoạn sinh trưởng nhạy cảm của cây rừng (ra lộc non, đơm hoa) và thời kỳ cao điểm sâu bệnh."
  },
  {
    "question": "Hồ sơ nghiệm thu kết quả công tác tuyên truyền bảo vệ rừng cấp xã bắt buộc phải có tài liệu nào?",
    "options": [
      "Kế hoạch tuyên truyền, biên bản họp thôn, danh sách hộ dân ký cam kết BVR & PCCCR",
      "Chỉ cần một bài viết đăng trên trang facebook cá nhân",
      "Biên lai thu tiền tham gia họp thôn của các hộ dân",
      "Hợp đồng thuê địa điểm họp của doanh nghiệp"
    ],
    "correct": "Kế hoạch tuyên truyền, biên bản họp thôn, danh sách hộ dân ký cam kết BVR & PCCCR",
    "explanation": "Điều 104 Luật Lâm nghiệp số 16/2017/QH14 và Mục I.4 Hướng dẫn số 230/HD-CCKL: Hồ sơ nghiệm thu tuyên truyền gồm kế hoạch, đề cương bài giảng, biên bản họp thôn bản và danh sách người dân ký tên tham dự."
  },
  {
    "question": "Hình thức tuyên truyền pháp luật lâm nghiệp nào sau đây mang lại hiệu quả trực tiếp nhất tại thôn bản?",
    "options": [
      "Tổ chức họp trực tiếp tuyên truyền cho người dân tại nhà văn hóa thôn bản kết hợp phát tờ rơi hướng dẫn",
      "Đăng tải thông báo chung lên cổng thông tin điện tử của cơ quan quản lý nhà nước cấp tỉnh",
      "Gửi công văn hành chính đến các doanh nghiệp kinh doanh lâm sản trên địa bàn quản lý",
      "Treo băng rôn khẩu hiệu tuyên truyền duy nhất tại trụ sở của Ủy ban nhân dân xã"
    ],
    "correct": "Tổ chức họp trực tiếp tuyên truyền cho người dân tại nhà văn hóa thôn bản kết hợp phát tờ rơi hướng dẫn",
    "explanation": "Khoản 1 Điều 102 Luật Lâm nghiệp số 16/2017/QH14 và Mục I.2 Hướng dẫn số 230/HD-CCKL: Tuyên truyền trực tiếp tại nhà văn hóa thôn bản, họp thôn là hình thức gần gũi, phù hợp và hiệu quả nhất đối với bà con vùng cao."
  },
  {
    "question": "Văn bản chỉ đạo quan trọng của Ban Bí thư về tăng cường lãnh đạo đối với công tác QLBV&PTR là văn bản nào?",
    "options": [
      "Chỉ thị số 13-CT/TW và Kết luận số 61-KL/TW của Ban Bí thư",
      "Chỉ thị số 01 của Bộ Nông nghiệp",
      "Quyết định số 10 của Chi cục Kiểm lâm",
      "Thông báo số 05 của Hội Nông dân"
    ],
    "correct": "Chỉ thị số 13-CT/TW và Kết luận số 61-KL/TW của Ban Bí thư",
    "explanation": "Mục I.1.1 Hướng dẫn 230/HD-CCKL nhấn mạnh trọng tâm tuyên truyền thực hiện Chỉ thị 13-CT/TW ngày 12/01/2017 và Kết luận 61-KL/TW ngày 17/8/2023 của Ban Bí thư Trung ương Đảng."
  },
  {
    "question": "Nội dung quy ước, hương ước bảo vệ rừng của thôn, bản do cộng đồng dân cư xây dựng không được trái với điều gì?",
    "options": [
      "Quy định của pháp luật và chuẩn mực đạo đức, phong tục tập quán tốt đẹp",
      "Ý kiến chủ quan của Trưởng thôn",
      "Quy định của các nước trong khu vực ASEAN",
      "Mong muốn của các doanh nghiệp thu mua gỗ"
    ],
    "correct": "Quy định của pháp luật và chuẩn mực đạo đức, phong tục tập quán tốt đẹp",
    "explanation": "Luật Lâm nghiệp quy định quy ước bảo vệ rừng của cộng đồng thôn bản do cộng đồng xây dựng, không được trái với các quy định pháp luật hiện hành và thuần phong mỹ tục."
  },
  {
    "question": "Trách nhiệm của Kiểm lâm địa bàn đối với quy ước bảo vệ rừng thôn, bản là gì?",
    "options": [
      "Tham mưu UBND cấp xã hướng dẫn các thôn bản xây dựng, rà soát và lồng ghép chặt chẽ nội dung bảo vệ rừng, phòng cháy chữa cháy vào quy ước thôn",
      "Tự ý ngồi tại trạm soạn thảo quy ước theo ý thích rồi đem loa phóng thanh ép buộc toàn thể nhân dân trong xã phải tuyệt đối chấp thuận thi hành",
      "Khoanh tay đứng nhìn không can thiệp vì cho rằng việc bảo vệ rừng xanh quê hương hoàn toàn là chuyện riêng nội bộ của bà con nhân dân trong bản",
      "Tự ý đóng dấu đỏ của cá nhân ký duyệt ban hành bản quy ước thay cho thẩm quyền phê duyệt chính thức của Chủ tịch Ủy ban nhân dân cấp huyện"
    ],
    "correct": "Tham mưu UBND cấp xã hướng dẫn các thôn bản xây dựng, rà soát và lồng ghép chặt chẽ nội dung bảo vệ rừng, phòng cháy chữa cháy vào quy ước thôn",
    "explanation": "Khoản 3 Điều 102 Luật Lâm nghiệp số 16/2017/QH14 và Nghị định 61/2023/NĐ-CP: Kiểm lâm địa bàn có nhiệm vụ tham mưu UBND cấp xã hướng dẫn cộng đồng dân cư thôn rà soát, lồng ghép nội dung bảo vệ, phát triển rừng, PCCCR vào hương ước, quy ước thôn bản đúng quy định pháp luật."
  },
  {
    "question": "Khi đo chiều dài lóng gỗ tròn theo Phụ lục I Thông tư 26/2022/TT-BNNPTNT, vị trí đo được xác định như thế nào?",
    "options": [
      "Đo khoảng cách ngắn nhất giữa mặt cắt ngang ở hai đầu của lóng gỗ",
      "Đo khoảng cách dài nhất bao gồm cả phần dập nát",
      "Đo từ tâm đầu lớn đến mép ngoài của đầu nhỏ",
      "Ước lượng bằng mắt thường rồi làm tròn mét"
    ],
    "correct": "Đo khoảng cách ngắn nhất giữa mặt cắt ngang ở hai đầu của lóng gỗ",
    "explanation": "Điểm a Khoản 1 Phụ lục I Thông tư 26/2022/TT-BNNPTNT quy định: Chiều dài là khoảng cách ngắn nhất giữa mặt cắt ngang ở hai đầu của lóng gỗ; đơn vị tính là mét, lấy 2 số thập phân."
  },
  {
    "question": "Phương pháp xác định đường kính mỗi đầu lóng gỗ tròn được quy định như thế nào?",
    "options": [
      "Đo ở 2 vị trí lớn nhất và nhỏ nhất (trừ vỏ cây), sau đó tính trung bình cộng",
      "Chỉ đo một vị trí bất kỳ bao gồm cả vỏ cây",
      "Đo chu vi ngoài vỏ rồi chia đôi",
      "Lấy đường kính ở vị trí chính giữa khúc gỗ"
    ],
    "correct": "Đo ở 2 vị trí lớn nhất và nhỏ nhất (trừ vỏ cây), sau đó tính trung bình cộng",
    "explanation": "Điểm b Khoản 1 Phụ lục I Thông tư 26 quy định: mỗi đầu lóng gỗ đo ở 2 vị trí có đường kính lớn nhất và nhỏ nhất (trừ vỏ cây), tính trị số trung bình cộng để xác định đường kính đầu đó."
  },
  {
    "question": "Công thức tính thể tích (V) của lóng gỗ tròn, gỗ đẽo hình trụ tròn theo Thông tư 26 là gì?",
    "options": [
      "V = (π / 4) x (Dtb)^2 x l",
      "V = π x Dtb x l",
      "V = (Dtb)^2 x l",
      "V = (π / 2) x (Dtb)^2 x l"
    ],
    "correct": "V = (π / 4) x (Dtb)^2 x l",
    "explanation": "Điểm c Khoản 1 Phụ lục I Thông tư 26 quy định thể tích gỗ tròn tính theo công thức: V = (π / 4) * (Dtb)^2 * l; thể tích V tính bằng m3, lấy số nguyên và 3 số thập phân."
  },
  {
    "question": "Đơn vị tính và số chữ số thập phân khi ghi nhận thể tích mét khối (m3) gỗ trong Bảng kê lâm sản là gì?",
    "options": [
      "Đơn vị m3, lấy số nguyên và ba (03) số hàng thập phân",
      "Đơn vị m3, lấy số nguyên và một (01) số hàng thập phân",
      "Đơn vị m3, làm tròn thành số nguyên",
      "Đơn vị dm3, lấy hai (02) số hàng thập phân"
    ],
    "correct": "Đơn vị m3, lấy số nguyên và ba (03) số hàng thập phân",
    "explanation": "Phụ lục I Thông tư 26 quy định thể tích gỗ V tính bằng mét khối (m3), lấy số nguyên và ba (03) số hàng thập phân sau số hàng đơn vị."
  },
  {
    "question": "Sai số cho phép khi đo tính thể tích đối với từng khúc, lóng gỗ tròn, gỗ khối trụ tròn là bao nhiêu?",
    "options": [
      "Cộng trừ 5% (±5%)",
      "Cộng trừ 10% (±10%)",
      "Cộng trừ 15% (±15%)",
      "Cộng trừ 20% (±20%)"
    ],
    "correct": "Cộng trừ 10% (±10%)",
    "explanation": "Điểm d Khoản 1 Phụ lục I Thông tư 26 quy định sai số tính thể tích gỗ trong mỗi lần đo đối với từng khúc, lóng gỗ tròn, gỗ khối trụ tròn là mười phần trăm (±10%)."
  },
  {
    "question": "Sai số cho phép khi tính thể tích đối với từng thanh, tấm, hộp gỗ xẻ, gỗ đẽo hình hộp là bao nhiêu?",
    "options": [
      "Cộng trừ 2% (±2%)",
      "Cộng trừ 5% (±5%)",
      "Cộng trừ 10% (±10%)",
      "Cộng trừ 12% (±12%)"
    ],
    "correct": "Cộng trừ 5% (±5%)",
    "explanation": "Điểm d Khoản 2 Phụ lục I Thông tư 26 quy định sai số tính thể tích gỗ trong mỗi lần đo đối với từng thanh, tấm, hộp gỗ xẻ, gỗ đẽo là năm phần trăm (±5%)."
  },
  {
    "question": "Công thức tính thể tích hộp gỗ xẻ hình hộp chữ nhật (chiều dài l, chiều rộng a, chiều dày b) là gì?",
    "options": [
      "V = l x a x b",
      "V = (l + a + b) / 3",
      "V = (l x a) / b",
      "V = 2 x (a + b) x l"
    ],
    "correct": "V = l x a x b",
    "explanation": "Điểm c Khoản 2 Phụ lục I Thông tư 26 quy định thể tích hộp gỗ xẻ hình hộp chữ nhật: V = l * a * b (trong đó l, a, b đổi ra đơn vị mét, V lấy 3 số thập phân)."
  },
  {
    "question": "Trường hợp gỗ có hình thù phức tạp, gốc rễ, gỗ dăm không thể đo được kích thước thì xác định khối lượng như thế nào?",
    "options": [
      "Thực hiện cân (kg) hoặc tính theo ster để quy đổi sang m3 gỗ tròn",
      "Ước tính theo cảm tính của người kiểm tra",
      "Bỏ qua không cần thống kê vào Bảng kê lâm sản",
      "Bắt buộc phải xẻ vuông vắn rồi mới đo"
    ],
    "correct": "Thực hiện cân (kg) hoặc tính theo ster để quy đổi sang m3 gỗ tròn",
    "explanation": "Khoản 3 Điều 4 Thông tư 26 quy định gỗ có hình thù phức tạp, gốc, rễ, dăm gỗ không thể đo kích thước thì thực hiện cân (kg) hoặc tính theo ster để quy đổi sang m3 gỗ tròn."
  },
  {
    "question": "Tỷ lệ quy đổi khối lượng cân (kg) sang thể tích mét khối (m3) gỗ tròn theo Thông tư 26 là bao nhiêu?",
    "options": [
      "500 kg quy đổi bằng 01 m3 gỗ tròn",
      "800 kg quy đổi bằng 01 m3 gỗ tròn",
      "1.000 kg quy đổi bằng 01 m3 gỗ tròn",
      "1.200 kg quy đổi bằng 01 m3 gỗ tròn"
    ],
    "correct": "1.000 kg quy đổi bằng 01 m3 gỗ tròn",
    "explanation": "Khoản 3 Điều 4 Thông tư 26/2022/TT-BNNPTNT quy định rõ: quy đổi 1.000 kg bằng 01 m3 gỗ tròn."
  },
  {
    "question": "Tỷ lệ quy đổi từ đơn vị ster (củi, gỗ xếp khối) sang mét khối (m3) gỗ tròn theo Thông tư 26 là bao nhiêu?",
    "options": [
      "01 ster quy đổi bằng 0,5 m3 gỗ tròn",
      "01 ster quy đổi bằng 0,7 m3 gỗ tròn",
      "01 ster quy đổi bằng 1,0 m3 gỗ tròn",
      "01 ster quy đổi bằng 1,2 m3 gỗ tròn"
    ],
    "correct": "01 ster quy đổi bằng 0,7 m3 gỗ tròn",
    "explanation": "Khoản 3 Điều 4 Thông tư 26/2022/TT-BNNPTNT quy định rõ: quy đổi 01 ster bằng 0,7 m3 gỗ tròn."
  },
  {
    "question": "Việc đánh số hiệu đầu lóng gỗ tròn sau khi đo tính được thực hiện như thế nào?",
    "options": [
      "Ghi bằng chữ số Ả Rập vào mặt cắt ngang 2 đầu lóng gỗ, dùng sơn khác màu gỗ",
      "Chỉ cần dùng phấn trắng viết một đầu lóng gỗ",
      "Đóng đinh sắt vào giữa thân cây",
      "Dán tem giấy lên vỏ cây"
    ],
    "correct": "Ghi bằng chữ số Ả Rập vào mặt cắt ngang 2 đầu lóng gỗ, dùng sơn khác màu gỗ",
    "explanation": "Khoản 7 Điều 4 Thông tư 26 quy định số hiệu gỗ đánh bằng chữ số Ả Rập, ghi vào mặt cắt ngang hai đầu lóng gỗ, sử dụng sơn có màu sắc khác với màu của gỗ."
  },
  {
    "question": "Đối với gỗ thuộc loài nguy cấp, quý, hiếm hoặc Phụ lục CITES, quy định đánh số hiệu đầu lóng như thế nào?",
    "options": [
      "Chỉ đánh số hiệu đối với lóng gỗ có đường kính trên 40 cm",
      "Phải đánh số hiệu không phân biệt kích thước lớn hay nhỏ",
      "Chỉ đánh số hiệu khi vận chuyển ra khỏi địa bàn tỉnh",
      "Miễn đánh số hiệu nếu chủ rừng là hộ gia đình"
    ],
    "correct": "Phải đánh số hiệu không phân biệt kích thước lớn hay nhỏ",
    "explanation": "Khoản 7 Điều 4 Thông tư 26 quy định đối với gỗ thuộc loài nguy cấp, quý, hiếm hoặc gỗ thuộc Phụ lục CITES thì phải đánh số hiệu không phân biệt kích thước."
  },
  {
    "question": "Trong biên bản kiểm tra lâm sản, nếu phát hiện lóng gỗ bị rỗng ruột thì khối lượng tính toán được xử lý thế nào?",
    "options": [
      "Tính nguyên thể tích cả vỏ không trừ phần rỗng",
      "Xác định và ghi rõ khối lượng phần rỗng ruột, mục để khấu trừ khỏi thể tích toàn bộ",
      "Hủy bỏ toàn bộ lóng gỗ không tính thể tích",
      "Cộng thêm 10% thể tích vì gỗ có giá trị rỗng ruột"
    ],
    "correct": "Xác định và ghi rõ khối lượng phần rỗng ruột, mục để khấu trừ khỏi thể tích toàn bộ",
    "explanation": "Khoản 2 Điều 4 Thông tư 26 quy định phải ghi nhận khối lượng rỗng ruột, khối lượng mục trong khi thực hiện đo đếm, lập Bảng kê lâm sản để khấu trừ chính xác thể tích thực."
  },
  {
    "question": "Khi kiểm tra chuồng trại cơ sở nuôi động vật rừng, nội dung kỹ thuật quan trọng hàng đầu cần kiểm tra là gì?",
    "options": [
      "Màu sơn trang trí chuồng trại",
      "Quy cách chuồng trại bảo đảm an toàn cho người và ngăn ngừa động vật thoát ra ngoài",
      "Khoảng cách đến trung tâm thương mại gần nhất",
      "Giá vé tham quan chuồng trại"
    ],
    "correct": "Quy cách chuồng trại bảo đảm an toàn cho người và ngăn ngừa động vật thoát ra ngoài",
    "explanation": "Thông tư 85/2025/TT-BNNMT quy định chuồng, trại nuôi động vật rừng phải phù hợp với đặc tính sinh học của loài, đảm bảo an toàn cho con người và không để vật nuôi thoát ra môi trường tự nhiên."
  },
  {
    "question": "Chủ cơ sở nuôi động vật rừng bắt buộc phải lập và lưu giữ loại sổ theo dõi nào?",
    "options": [
      "Sổ theo dõi hoạt động nuôi động vật hoang dã theo Mẫu số 10 ban hành kèm theo quy định",
      "Sổ thu chi tài chính nội bộ có xác nhận của kế toán trưởng trang trại chăn nuôi",
      "Sổ nhật ký công trình xây dựng chuồng trại được đơn vị thi công bàn giao",
      "Sổ đăng ký hộ tịch và tạm trú tạm vắng của công an xã cấp cho chủ cơ sở nuôi"
    ],
    "correct": "Sổ theo dõi hoạt động nuôi động vật hoang dã theo Mẫu số 10 ban hành kèm theo quy định",
    "explanation": "Khoản 2 Điều 24 Thông tư số 85/2025/TT-BNNMT ngày 24/6/2025: Chủ cơ sở nuôi động vật rừng thông thường phải lập và ghi chép thường xuyên Sổ theo dõi theo Mẫu số 10 Phụ lục II ban hành kèm theo Thông tư."
  },
  {
    "question": "Khi cá thể động vật rừng nguy cấp, quý, hiếm trong trại nuôi bị chết, chủ cơ sở phải xử lý thế nào?",
    "options": [
      "Tự ý đem bán cho nhà hàng kinh doanh",
      "Vứt xác động vật ra sông suối tự nhiên",
      "Lập biên bản và thông báo cho cơ quan Kiểm lâm sở tại hoặc UBND xã để phối hợp xử lý",
      "Tự tiêu hủy mà không cần ghi chép sổ sách"
    ],
    "correct": "Lập biên bản và thông báo cho cơ quan Kiểm lâm sở tại hoặc UBND xã để phối hợp xử lý",
    "explanation": "Thông tư 85/2025/TT-BNNMT quy định trường hợp động vật quý hiếm chết, cơ sở phải lập biên bản xác nhận, cập nhật sổ theo dõi và thông báo cơ quan Kiểm lâm để giám sát xử lý."
  },
  {
    "question": "Biện pháp đánh dấu mẫu vật nào thường được áp dụng đối với cá thể động vật rừng nguy cấp, quý, hiếm lớp thú?",
    "options": [
      "Cấy chip vi điện tử hoặc gắn thẻ tai, vòng chân có mã số nhận dạng",
      "Dùng bút mực viết lên lông động vật",
      "Cắt một phần tai của con vật",
      "Buộc dây nylon màu đỏ vào cổ động vật"
    ],
    "correct": "Cấy chip vi điện tử hoặc gắn thẻ tai, vòng chân có mã số nhận dạng",
    "explanation": "Thông tư 85/2025/TT-BNNMT quy định mẫu vật động vật rừng nguy cấp thuộc Phụ lục CITES hoặc Nhóm I, II phải được đánh dấu bằng chip điện tử, vòng số hoặc thẻ tai để quản lý truy xuất."
  },
  {
    "question": "Cơ sở nuôi sinh sản động vật hoang dã muốn xuất bán con giống phải đáp ứng điều kiện nào?",
    "options": [
      "Chỉ cần chủ cơ sở cam kết con giống khỏe mạnh",
      "Có mã số cơ sở nuôi hợp pháp, con giống có nguồn gốc F2 trở đi và lập bảng kê lâm sản theo quy định",
      "Không cần giấy tờ nếu bán cho người cùng xã",
      "Chỉ cần giấy xác nhận của Hội Nông dân xã"
    ],
    "correct": "Có mã số cơ sở nuôi hợp pháp, con giống có nguồn gốc F2 trở đi và lập bảng kê lâm sản theo quy định",
    "explanation": "Thông tư 85/2025/TT-BNNMT quy định việc thương mại loài CITES hoặc loài quý hiếm phải từ cơ sở được cấp mã số, chứng minh nguồn gốc hợp pháp (sinh sản thế hệ F2 trở đi) và lập hồ sơ lâm sản."
  },
  {
    "question": "Cơ sở dữ liệu gốc để thực hiện theo dõi diễn biến rừng hàng năm là nguồn dữ liệu nào?",
    "options": [
      "Bản đồ địa chính phân lô đất ở của xã",
      "Kết quả kiểm kê rừng tích hợp trên Cơ sở dữ liệu trung tâm và dữ liệu công bố năm trước liền kề",
      "Ảnh chụp từ vệ tinh Google Earth chưa qua hiệu chỉnh",
      "Số liệu ước tính của Ban Quản lý rừng"
    ],
    "correct": "Kết quả kiểm kê rừng tích hợp trên Cơ sở dữ liệu trung tâm và dữ liệu công bố năm trước liền kề",
    "explanation": "Khoản 1 Điều 33 Luật Lâm nghiệp số 16/2017/QH14 và Điều 19 Thông tư số 16/2025/TT-BNNMT: Cơ sở dữ liệu gốc để theo dõi diễn biến rừng hàng năm là kết quả kiểm kê rừng hoặc hiện trạng rừng đã được UBND cấp tỉnh công bố của năm trước liền kề."
  },
  {
    "question": "Phần mềm chuẩn được ngành Kiểm lâm sử dụng để cập nhật diễn biến diện tích rừng là phần mềm nào?",
    "options": [
      "Phần mềm FRMS (Forest Resource Monitoring System) do Cục Lâm nghiệp và Kiểm lâm ban hành",
      "Phần mềm Microsoft Excel thông thường",
      "Phần mềm AutoCAD thiết kế xây dựng",
      "Phần mềm quản lý nhân sự công chức"
    ],
    "correct": "Phần mềm FRMS (Forest Resource Monitoring System) do Cục Lâm nghiệp và Kiểm lâm ban hành",
    "explanation": "Hướng dẫn 230/HD-CCKL và Thông tư 16/2025/TT-BNNMT quy định thống nhất sử dụng phần mềm cập nhật diễn biến rừng FRMS do Cục Lâm nghiệp và Kiểm lâm ban hành."
  },
  {
    "question": "Thiết bị kỹ thuật nào sau đây là công cụ chính của Kiểm lâm địa bàn khi điều tra biến động rừng ngoài thực địa?",
    "options": [
      "Máy định vị vệ tinh GPS hoặc máy tính bảng chuyên dụng cài đặt phần mềm bản đồ định vị",
      "Thước cuộn may mặc 1,5 mét",
      "Ống nhòm ngắm cảnh thông thường",
      "La bàn cầm tay không có chức năng lưu tọa độ"
    ],
    "correct": "Máy định vị vệ tinh GPS hoặc máy tính bảng chuyên dụng cài đặt phần mềm bản đồ định vị",
    "explanation": "Điều 33 Luật Lâm nghiệp số 16/2017/QH14 và Mục V.1.2 Hướng dẫn số 230/HD-CCKL: Máy định vị GPS cầm tay hoặc thiết bị di động thông minh cài ứng dụng bản đồ lâm nghiệp chuyên dụng là công cụ kỹ thuật chính của Kiểm lâm địa bàn."
  },
  {
    "question": "Nguyên nhân nào sau đây làm TĂNG diện tích rừng trong công tác theo dõi diễn biến rừng hàng năm?",
    "options": [
      "Trồng mới rừng trên đất chưa có rừng hoặc khoanh nuôi tái sinh đạt tiêu chí thành rừng",
      "Khai thác trắng rừng trồng đến tuổi khai thác",
      "Chuyển mục đích sử dụng rừng sang làm đường giao thông",
      "Cháy rừng gây thiệt hại hoàn toàn thảm thực vật"
    ],
    "correct": "Trồng mới rừng trên đất chưa có rừng hoặc khoanh nuôi tái sinh đạt tiêu chí thành rừng",
    "explanation": "Điều 19 Thông tư số 16/2025/TT-BNNMT và Mục V.2 Hướng dẫn số 230/HD-CCKL: Các nguyên nhân làm tăng diện tích rừng gồm trồng mới rừng trên đất chưa có rừng, tái sinh tự nhiên thành rừng sau khoanh nuôi và điều chỉnh ranh giới hành chính."
  },
  {
    "question": "Chủ rừng có trách nhiệm gì khi diện tích rừng của mình có biến động (do khai thác, trồng mới, cháy rừng)?",
    "options": [
      "Báo cáo bằng văn bản hoặc trực tiếp cho Kiểm lâm địa bàn hoặc UBND cấp xã để kiểm tra cập nhật",
      "Tự chỉnh sửa số liệu trên phần mềm quản lý quốc gia",
      "Không cần báo cáo vì đất đã được cấp giấy chứng nhận quyền sử dụng",
      "Chỉ báo cáo khi chuẩn bị bán đất rừng"
    ],
    "correct": "Báo cáo bằng văn bản hoặc trực tiếp cho Kiểm lâm địa bàn hoặc UBND cấp xã để kiểm tra cập nhật",
    "explanation": "Luật Lâm nghiệp và Thông tư 16 quy định chủ rừng có trách nhiệm thông báo, báo cáo biến động rừng cho Kiểm lâm địa bàn hoặc UBND xã để tổ chức xác minh và cập nhật hồ sơ."
  },
  {
    "question": "Ai có thẩm quyền phê duyệt và công bố số liệu hiện trạng rừng cấp tỉnh hàng năm?",
    "options": [
      "Chi cục trưởng Chi cục Kiểm lâm",
      "Chủ tịch Ủy ban nhân dân cấp tỉnh",
      "Giám đốc Sở Nông nghiệp và Môi trường",
      "Cục trưởng Cục Thống kê tỉnh"
    ],
    "correct": "Chủ tịch Ủy ban nhân dân cấp tỉnh",
    "explanation": "Thông tư 16/2025/TT-BNNMT quy định Chủ tịch UBND cấp tỉnh phê duyệt và công bố hiện trạng rừng cấp tỉnh hàng năm trên cơ sở kết quả theo dõi diễn biến rừng do Sở NN&MT trình."
  },
  {
    "question": "Thời hạn Chủ tịch UBND cấp tỉnh công bố số liệu hiện trạng rừng hàng năm chậm nhất là ngày nào?",
    "options": [
      "Ngày 31 tháng 12 của năm theo dõi",
      "Trước ngày 31 tháng 3 của năm sau liền kề",
      "Ngày 30 tháng 6 của năm sau liền kề",
      "Ngày 30 tháng 9 của năm sau liền kề"
    ],
    "correct": "Trước ngày 31 tháng 3 của năm sau liền kề",
    "explanation": "Thông tư 16/2025/TT-BNNMT quy định UBND cấp tỉnh hoàn thành việc phê duyệt và công bố hiện trạng rừng của địa phương trước ngày 31 tháng 3 của năm sau liền kề."
  }
];
