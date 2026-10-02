/**
 * BỘ CÂU HỎI TRẮC NGHIỆM PHÁP LUẬT VÀ NGHIỆP VỤ KIỂM LÂM (100 CÂU)
 * Đã chuẩn hóa: Loại bỏ điều khoản trong options, bổ sung 100% căn cứ pháp lý trong explanation
 */
const questions_KL = [
  {
    "question": "Khi phát hiện hành vi vi phạm hành chính trong lĩnh vực lâm nghiệp, Kiểm lâm viên đang thi hành công vụ có quyền áp dụng các hình thức xử phạt và biện pháp nào sau đây theo Nghị định 146/2026/NĐ-CP?",
    "options": [
      "Phạt cảnh cáo; Phạt tiền đến 25.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 50.000.000 đồng (02 lần mức tiền phạt thẩm quyền)",
      "Phạt cảnh cáo; Phạt tiền đến 25.000.000 đồng; Tịch thu toàn bộ tang vật, phương tiện VPHC không giới hạn giá trị",
      "Phạt cảnh cáo; Phạt tiền đến 50.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 100.000.000 đồng",
      "Phạt cảnh cáo; Phạt tiền đến 10.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị tương đương mức tiền phạt thẩm quyền (25.000.000 đồng)"
    ],
    "correct": "Phạt cảnh cáo; Phạt tiền đến 25.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 50.000.000 đồng (02 lần mức tiền phạt thẩm quyền)",
    "explanation": "Khoản 1 Điều 29 Nghị định 146/2026/NĐ-CP: Kiểm lâm viên được phạt cảnh cáo; phạt tiền đến 25.000.000 đồng; tịch thu tang vật, phương tiện có giá trị không vượt quá 02 lần mức tiền phạt thẩm quyền (tức đến 50.000.000 đồng)."
  },
  {
    "question": "Theo Nghị định 146/2026/NĐ-CP, Trạm trưởng Trạm Kiểm lâm có thẩm quyền xử phạt và tịch thu tang vật đối với cá nhân vi phạm như thế nào?",
    "options": [
      "Phạt tiền đến 100.000.000 đồng; tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 200.000.000 đồng (02 lần mức tiền phạt thẩm quyền)",
      "Phạt tiền đến 100.000.000 đồng; tịch thu tang vật, phương tiện VPHC không giới hạn giá trị",
      "Phạt tiền đến 50.000.000 đồng; tịch thu tang vật có giá trị không quá 100.000.000 đồng",
      "Phạt tiền đến 150.000.000 đồng; áp dụng biện pháp tước quyền sử dụng giấy phép khai thác"
    ],
    "correct": "Phạt tiền đến 100.000.000 đồng; tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 200.000.000 đồng (02 lần mức tiền phạt thẩm quyền)",
    "explanation": "Điểm b, Điểm c Khoản 2 Điều 29 Nghị định 146/2026/NĐ-CP quy định Trạm trưởng Trạm Kiểm lâm có quyền phạt tiền đến 100.000.000 đồng và tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 02 lần mức tiền phạt thẩm quyền (đến 200.000.000 đồng)."
  },
  {
    "question": "Thẩm quyền xử phạt của Hạt trưởng Hạt Kiểm lâm và Đội trưởng Đội Kiểm lâm cơ động và PCCCR theo Nghị định 146/2026/NĐ-CP được quy định như thế nào đối với cá nhân?",
    "options": [
      "Phạt tiền đến 150.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 300.000.000 đồng (02 lần mức tiền phạt thẩm quyền)",
      "Phạt tiền đến 150.000.000 đồng; Tịch thu tang vật không giới hạn giá trị; Tước quyền sử dụng chứng chỉ hành nghề/giấy phép có thời hạn",
      "Phạt tiền đến 250.000.000 đồng; Tịch thu toàn bộ tang vật; Đình chỉ hoạt động cơ sở chế biến gỗ vĩnh viễn",
      "Phạt tiền đến 100.000.000 đồng; Tịch thu tang vật có giá trị không vượt quá 200.000.000 đồng"
    ],
    "correct": "Phạt tiền đến 150.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 300.000.000 đồng (02 lần mức tiền phạt thẩm quyền)",
    "explanation": "Khoản 3 Điều 29 Nghị định 146/2026/NĐ-CP: Hạt trưởng Hạt Kiểm lâm, Đội trưởng Đội Kiểm lâm cơ động và PCCCR được phạt tiền đến 150.000.000 đồng; tịch thu tang vật, phương tiện có giá trị không vượt quá 02 lần mức tiền phạt (đến 300.000.000 đồng); áp dụng biện pháp khắc phục hậu quả; không có quyền tước giấy phép/chứng chỉ hành nghề."
  },
  {
    "question": "Thẩm quyền xử phạt của Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh theo Nghị định 146/2026/NĐ-CP đối với cá nhân và tổ chức được quy định như thế nào?",
    "options": [
      "Phạt tiền đến 250.000.000 đồng đối với cá nhân (đến 500.000.000 đồng đối với tổ chức); Tịch thu tang vật, phương tiện VPHC; Đình chỉ hoạt động khai thác rừng hoặc cơ sở chế biến lâm sản có thời hạn tối đa đến 12 tháng",
      "Phạt tiền đến 500.000.000 đồng đối với cá nhân (đến 1.000.000.000 đồng đối với tổ chức); Tịch thu toàn bộ tang vật, phương tiện VPHC",
      "Phạt tiền đến 150.000.000 đồng đối với cá nhân (đến 300.000.000 đồng đối với tổ chức); Tước chứng chỉ hành nghề vĩnh viễn",
      "Phạt tiền đến 200.000.000 đồng đối với cá nhân; Chỉ được tịch thu tang vật có giá trị dưới 500 triệu đồng"
    ],
    "correct": "Phạt tiền đến 250.000.000 đồng đối với cá nhân (đến 500.000.000 đồng đối với tổ chức); Tịch thu tang vật, phương tiện VPHC; Đình chỉ hoạt động khai thác rừng hoặc cơ sở chế biến lâm sản có thời hạn tối đa đến 12 tháng",
    "explanation": "Khoản 4 Điều 29 Nghị định 146/2026/NĐ-CP: Chi cục trưởng có quyền phạt tiền đến 250.000.000 đồng đối với cá nhân (500.000.000 đồng đối với tổ chức); tịch thu tang vật, phương tiện VPHC; đình chỉ hoạt động khai thác rừng hoặc cơ sở chế biến lâm sản có thời hạn tối đa đến 12 tháng; áp dụng biện pháp khắc phục hậu quả."
  },
  {
    "question": "Theo Nghị định 146/2026/NĐ-CP, Chủ tịch Ủy ban nhân dân cấp xã có thẩm quyền phạt tiền đối với cá nhân vi phạm trong lĩnh vực lâm nghiệp tối đa là bao nhiêu?",
    "options": [
      "Phạt tiền đến 250.000.000 đồng và tịch thu tang vật, phương tiện vi phạm hành chính",
      "Phạt tiền đến 5.000.000 đồng theo quy định chung của Luật Xử lý vi phạm hành chính",
      "Phạt tiền đến 50.000.000 đồng và không có quyền tịch thu tang vật có giá trị lớn",
      "Phạt tiền đến 100.000.000 đồng nhưng phải có sự đồng ý của Hạt trưởng Hạt Kiểm lâm"
    ],
    "correct": "Phạt tiền đến 250.000.000 đồng và tịch thu tang vật, phương tiện vi phạm hành chính",
    "explanation": "Khoản 1 Điều 31 Nghị định 146/2026/NĐ-CP quy định Chủ tịch UBND cấp xã có quyền phạt tiền đến 250.000.000 đồng đối với cá nhân và tịch thu tang vật, phương tiện VPHC trong lĩnh vực lâm nghiệp."
  },
  {
    "question": "Trường hợp một cá nhân thực hiện nhiều hành vi vi phạm hành chính trong lĩnh vực lâm nghiệp thì thẩm quyền xử phạt được xác định theo nguyên tắc nào?",
    "options": [
      "Nếu hình thức, mức xử phạt của từng hành vi đều thuộc thẩm quyền thì vẫn thuộc thẩm quyền xử phạt của người đó; nếu có hành vi vượt quá thẩm quyền thì phải chuyển toàn bộ hồ sơ cho người có thẩm quyền cao hơn",
      "Người phát hiện đầu tiên có quyền xử phạt tất cả các hành vi bất kể tổng mức tiền phạt vượt thẩm quyền",
      "Phải tách riêng từng hành vi để từng cấp ra từng quyết định xử phạt độc lập nhau",
      "Tự động chuyển toàn bộ hồ sơ lên Chủ tịch UBND cấp tỉnh xử phạt để tránh trùng lặp"
    ],
    "correct": "Nếu hình thức, mức xử phạt của từng hành vi đều thuộc thẩm quyền thì vẫn thuộc thẩm quyền xử phạt của người đó; nếu có hành vi vượt quá thẩm quyền thì phải chuyển toàn bộ hồ sơ cho người có thẩm quyền cao hơn",
    "explanation": "Điều 52 Luật Xử lý vi phạm hành chính quy định nguyên tắc xác định thẩm quyền khi xử phạt một người thực hiện nhiều hành vi vi phạm."
  },
  {
    "question": "Thời hạn ra quyết định xử phạt vi phạm hành chính kể từ ngày lập biên bản VPHC trong lĩnh vực lâm nghiệp được quy định như thế nào?",
    "options": [
      "07 ngày làm việc; vụ việc có giải trình hoặc có nhiều tình tiết phức tạp thì tối đa không quá 01 tháng (trường hợp đặc biệt phức tạp gia hạn tối đa 02 tháng)",
      "05 ngày làm việc đối với mọi vụ việc và không được phép gia hạn trong bất kỳ trường hợp nào",
      "15 ngày theo lịch kể từ ngày lập biên bản; nếu có khiếu nại thì kéo dài tối đa 60 ngày",
      "30 ngày làm việc kể từ ngày lập biên bản vi phạm hành chính"
    ],
    "correct": "07 ngày làm việc; vụ việc có giải trình hoặc có nhiều tình tiết phức tạp thì tối đa không quá 01 tháng (trường hợp đặc biệt phức tạp gia hạn tối đa 02 tháng)",
    "explanation": "Khoản 1 Điều 66 Luật Xử lý vi phạm hành chính (sửa đổi, bổ sung 2020) quy định thời hạn ra quyết định xử phạt là 07 ngày làm việc; vụ việc phức tạp/giải trình không quá 01 tháng, đặc biệt phức tạp gia hạn không quá 02 tháng."
  },
  {
    "question": "Trường hợp vụ vi phạm hành chính vượt quá thẩm quyền xử phạt của người lập biên bản thì thời hạn chuyển hồ sơ cho người có thẩm quyền xử phạt là bao lâu?",
    "options": [
      "Trong thời hạn 02 ngày làm việc kể từ ngày lập biên bản vi phạm hành chính",
      "Trong thời hạn 05 ngày làm việc kể từ ngày lập biên bản vi phạm hành chính",
      "Trong thời hạn 24 giờ kể từ thời điểm phát hiện hành vi vi phạm",
      "Trong thời hạn 07 ngày làm việc để hoàn thiện chứng cứ"
    ],
    "correct": "Trong thời hạn 02 ngày làm việc kể từ ngày lập biên bản vi phạm hành chính",
    "explanation": "Khoản 4 Điều 12 Nghị định số 118/2021/NĐ-CP: Trường hợp vượt thẩm quyền, việc chuyển biên bản vi phạm hành chính và các tài liệu khác cho người có thẩm quyền xử phạt phải được thực hiện trong thời hạn 02 ngày làm việc kể từ ngày lập biên bản (vùng sâu, xa không quá 03 ngày làm việc)."
  },
  {
    "question": "Theo Điều 164 Bộ luật Tố tụng hình sự, khi phát hiện tội phạm lâm nghiệp quả tang thuộc tội ít nghiêm trọng, Hạt trưởng Hạt Kiểm lâm có thẩm quyền tố tụng như thế nào?",
    "options": [
      "Quyết định khởi tố vụ án hình sự, lấy lời khai, khám nghiệm hiện trường, tạm giữ tài liệu tang vật và chuyển hồ sơ cho Viện kiểm sát có thẩm quyền trong thời hạn 07 ngày",
      "Khởi tố bị can, bắt tạm giam người phạm tội trong thời hạn 03 tháng để điều tra độc lập",
      "Chỉ được lập biên bản vi phạm rồi chuyển ngay cho Công an cấp xã, cấp tỉnh trong 24 giờ mà không được khởi tố vụ án",
      "Chuyển thẳng hồ sơ sang Tòa án nhân dân khu vực để mở phiên tòa xét xử sơ thẩm"
    ],
    "correct": "Quyết định khởi tố vụ án hình sự, lấy lời khai, khám nghiệm hiện trường, tạm giữ tài liệu tang vật và chuyển hồ sơ cho Viện kiểm sát có thẩm quyền trong thời hạn 07 ngày",
    "explanation": "Theo Khoản 1 Điều 164 Bộ luật Tố tụng hình sự năm 2015, Cục Kiểm lâm, Chi cục Kiểm lâm, Hạt Kiểm lâm có quyền khởi tố vụ án hình sự đối với tội ít nghiêm trọng quả tang, thực hiện hoạt động điều tra ban đầu và chuyển hồ sơ cho Viện kiểm sát có thẩm quyền trong thời hạn 07 ngày."
  },
  {
    "question": "Việc tạm giữ tang vật, phương tiện vi phạm hành chính theo thủ tục hành chính trong lĩnh vực lâm nghiệp chỉ được áp dụng trong những trường hợp nào?",
    "options": [
      "Để xác minh tình tiết mà nếu không tạm giữ thì không có căn cứ ra quyết định xử phạt, hoặc để ngăn chặn ngay hành vi, hoặc bảo đảm thi hành quyết định phạt tiền",
      "Áp dụng bắt buộc đối với tất cả các vụ việc vi phạm hành chính bất kể mức phạt nặng hay nhẹ",
      "Chỉ áp dụng khi đối tượng vi phạm không chịu ký vào biên bản vi phạm hành chính",
      "Áp dụng khi cơ quan Kiểm lâm có nhu cầu sử dụng phương tiện để phục vụ tuần tra công vụ"
    ],
    "correct": "Để xác minh tình tiết mà nếu không tạm giữ thì không có căn cứ ra quyết định xử phạt, hoặc để ngăn chặn ngay hành vi, hoặc bảo đảm thi hành quyết định phạt tiền",
    "explanation": "Khoản 1 Điều 125 Luật Xử lý vi phạm hành chính quy định chặt chẽ các trường hợp được phép tạm giữ tang vật, phương tiện nhằm tránh lạm quyền xâm phạm tài sản công dân."
  },
  {
    "question": "Khi tiến hành đo tính thể tích gỗ tròn bị rỗng ruột theo quy định tại Phụ lục I Thông tư 26/2025/TT-BNNMT, Kiểm lâm viên phải thực hiện phương pháp nào?",
    "options": [
      "Tính tổng thể tích toàn bộ khúc gỗ tròn theo công thức hình trụ, sau đó trừ đi thể tích phần ruột rỗng (tính theo đường kính và chiều sâu của phần rỗng)",
      "Chỉ đo phần gỗ đặc bên ngoài và nhân đôi kết quả tính toán",
      "Bỏ qua không tính toán đối với những lóng gỗ có ruột rỗng lớn hơn 20 cm",
      "Quy đổi toàn bộ khúc gỗ sang đơn vị ster (khối xếp gióng) để tính thể tích thương phẩm"
    ],
    "correct": "Tính tổng thể tích toàn bộ khúc gỗ tròn theo công thức hình trụ, sau đó trừ đi thể tích phần ruột rỗng (tính theo đường kính và chiều sâu của phần rỗng)",
    "explanation": "Khoản 2 Điều 4 và Phụ lục I Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư 84/2025/TT-BNNMT): Ghi nhận khối lượng phần rỗng ruột, mục để xác định và khấu trừ thể tích phần rỗng ruột khỏi thể tích khúc gỗ nguyên."
  },
  {
    "question": "Khi kiểm tra lâm sản trên phương tiện giao thông đường bộ đang lưu thông, tổ công tác Kiểm lâm phải tuân thủ điều kiện pháp lý nào sau đây?",
    "options": [
      "Phải có Quyết định dừng phương tiện/Kế hoạch tuần tra được cấp có thẩm quyền phê duyệt; công chức mặc trang phục, đeo số hiệu Kiểm lâm và xuất trình thẻ",
      "Kiểm lâm viên đi tuần một mình có quyền tự ý ra hiệu lệnh dừng mọi loại xe tải để kiểm tra bất kỳ lúc nào",
      "Chỉ được kiểm tra khi có tin báo của người dân và phải có mặt của Viện kiểm sát nhân dân",
      "Chỉ được dừng phương tiện khi xe đã đi vào khuôn viên của Hạt Kiểm lâm hoặc Trạm Kiểm lâm"
    ],
    "correct": "Phải có Quyết định dừng phương tiện/Kế hoạch tuần tra được cấp có thẩm quyền phê duyệt; công chức mặc trang phục, đeo số hiệu Kiểm lâm và xuất trình thẻ",
    "explanation": "Khoản 2 Điều 104 Luật Lâm nghiệp 2017 và Nghị định số 01/2019/NĐ-CP (sửa đổi bởi Nghị định số 42/2026/NĐ-CP): Việc dừng phương tiện kiểm tra lâm sản phải có quyết định/kế hoạch tuần tra được người có thẩm quyền phê duyệt, thực hiện đúng lễ tiết tác phong, trang phục, số hiệu Kiểm lâm."
  },
  {
    "question": "Thời hạn hoàn thành việc kiểm tra thực tế lâm sản và xác nhận Bảng kê lâm sản của Cơ quan Kiểm lâm sở tại (trường hợp phải kiểm tra thực tế) là bao lâu?",
    "options": [
      "Không quá 03 ngày làm việc kể từ ngày nhận được hồ sơ đề nghị hợp lệ",
      "Không quá 02 ngày làm việc kể từ ngày nhận được hồ sơ đề nghị hợp lệ",
      "Không quá 05 ngày làm việc để phối hợp với công an địa phương",
      "Trong vòng 24 giờ kể từ thời điểm chủ lâm sản tập kết đủ hàng hóa"
    ],
    "correct": "Không quá 03 ngày làm việc kể từ ngày nhận được hồ sơ đề nghị hợp lệ",
    "explanation": "Điểm c Khoản 7 Điều 5 Thông tư số 26/2025/TT-BNNMT (sửa đổi, bổ sung bởi Thông tư 84/2025/TT-BNNMT, hợp nhất tại VBHN 04/VBHN-BNNMT): Trường hợp cần xác minh nguồn gốc lâm sản có nhiều nội dung phức tạp, thời hạn hoàn thành xác minh và xác nhận tối đa không quá 03 ngày làm việc."
  },
  {
    "question": "Để được cơ quan Kiểm lâm xếp loại Doanh nghiệp chế biến và xuất khẩu gỗ Nhóm I theo Nghị định 102/2020/NĐ-CP, doanh nghiệp phải đáp ứng tiêu chuẩn cốt lõi nào?",
    "options": [
      "Tuân thủ đầy đủ quy định pháp luật trong hoạt động tối thiểu 02 năm liên tục, thiết lập và vận hành hệ thống bảo đảm gỗ hợp pháp (DDS) và lưu trữ hồ sơ đầy đủ",
      "Có vốn điều lệ đăng ký kinh doanh từ 50 tỷ đồng trở lên và sở hữu tối thiểu 03 nhà máy cưa xẻ gỗ",
      "Chỉ cần có hợp đồng xuất khẩu gỗ sang thị trường Hoa Kỳ hoặc Châu Âu trong năm hiện tại",
      "Đã được Ủy ban nhân dân cấp xã cấp giấy khen về công tác bảo vệ môi trường nông thôn"
    ],
    "correct": "Tuân thủ đầy đủ quy định pháp luật trong hoạt động tối thiểu 02 năm liên tục, thiết lập và vận hành hệ thống bảo đảm gỗ hợp pháp (DDS) và lưu trữ hồ sơ đầy đủ",
    "explanation": "Điều 12, 13 Nghị định 102/2020/NĐ-CP quy định tiêu chí Doanh nghiệp Nhóm I: Hoạt động tối thiểu 02 năm, tuân thủ pháp luật, thực hiện trách nhiệm giải trình nguồn gốc gỗ hợp pháp."
  },
  {
    "question": "Theo Nghị định 156/2018/NĐ-CP (sửa đổi bởi Nghị định 91/2024/NĐ-CP và Nghị định 42/2026/NĐ-CP), Phương án phòng cháy và chữa cháy rừng do chủ rừng là tổ chức lập phải gửi đến cơ quan nào để tham gia ý kiến?",
    "options": [
      "Cơ quan Kiểm lâm sở tại và Công an cấp xã",
      "Cơ quan Cảnh sát PCCC&CNCH cấp tỉnh và UBND cấp tỉnh",
      "Sở Tài chính và Sở Kế hoạch và Đầu tư",
      "Ủy ban Mặt trận Tổ quốc xã và Ban Chỉ huy quân sự huyện"
    ],
    "correct": "Cơ quan Kiểm lâm sở tại và Công an cấp xã",
    "explanation": "Khoản 2 Điều 45 Nghị định số 156/2018/NĐ-CP (sửa đổi, bổ sung bởi Nghị định 91/2024/NĐ-CP và Nghị định 42/2026/NĐ-CP): Phương án phòng cháy và chữa cháy rừng do tổ chức lập phải gửi đến cơ quan Kiểm lâm sở tại, Công an cấp xã tham gia ý kiến; chủ rừng tự phê duyệt và tổ chức thực hiện phương án."
  },
  {
    "question": "Khi phát hiện hành vi phá rừng tự nhiên với quy mô diện tích lớn, trách nhiệm đầu tiên của Kiểm lâm địa bàn là gì?",
    "options": [
      "Báo cáo ngay Chủ tịch UBND cấp xã và Hạt trưởng Hạt Kiểm lâm; lập biên bản kiểm tra ban đầu, bảo vệ hiện trường và phối hợp các lực lượng liên quan ngăn chặn ngay hành vi",
      "Tự mình truy đuổi các đối tượng khả nghi vào sâu trong rừng mà không báo cho ai biết",
      "Chờ đến kỳ giao ban cuối tháng của Hạt Kiểm lâm mới tổng hợp đưa vào báo cáo định kỳ",
      "Tự ý phát dọn hiện trường để kiểm tra xem cây rừng bị chặt hạ có mọc lại chồi non hay không"
    ],
    "correct": "Báo cáo ngay Chủ tịch UBND cấp xã và Hạt trưởng Hạt Kiểm lâm; lập biên bản kiểm tra ban đầu, bảo vệ hiện trường và phối hợp các lực lượng liên quan ngăn chặn ngay hành vi",
    "explanation": "Căn cứ Điều 104 Luật Lâm nghiệp năm 2017, Nghị định số 01/2019/NĐ-CP (sửa đổi bởi Nghị định số 42/2026/NĐ-CP) và Quy chế Kiểm lâm địa bàn: Khi phát hiện vi phạm, Kiểm lâm địa bàn phải lập tức báo cáo Chủ tịch UBND cấp xã và lãnh đạo Hạt Kiểm lâm, lập hồ sơ ban đầu và bảo vệ hiện trường."
  },
  {
    "question": "Biên bản vi phạm hành chính trong lĩnh vực lâm nghiệp lập không có sự chứng kiến hoặc không có chữ ký của người vi phạm có giá trị pháp lý không?",
    "options": [
      "Có giá trị pháp lý nếu có chữ ký của đại diện chính quyền cấp xã hoặc chữ ký của ít nhất 01 người chứng kiến xác nhận việc người vi phạm từ chối ký/vắng mặt",
      "Hoàn toàn vô hiệu và cơ quan Kiểm lâm phải hủy bỏ hồ sơ vụ việc",
      "Vẫn có giá trị tuyệt đối mà không cần chữ ký của bất kỳ ai khác ngoài Kiểm lâm viên",
      "Chỉ có giá trị nếu người vi phạm gửi văn bản xin lỗi cơ quan Kiểm lâm sau đó"
    ],
    "correct": "Có giá trị pháp lý nếu có chữ ký của đại diện chính quyền cấp xã hoặc chữ ký của ít nhất 01 người chứng kiến xác nhận việc người vi phạm từ chối ký/vắng mặt",
    "explanation": "Khoản 2 Điều 58 Luật Xử lý vi phạm hành chính: Nếu người vi phạm không ký, biên bản phải có chữ ký đại diện chính quyền cấp xã hoặc ít nhất 01 người chứng kiến xác nhận."
  },
  {
    "question": "Thời điểm chốt số liệu theo dõi diễn biến rừng hàng năm và thời hạn Ủy ban nhân dân cấp tỉnh công bố hiện trạng rừng là khi nào?",
    "options": [
      "Chốt số liệu vào ngày 31 tháng 12 hàng năm; Chủ tịch UBND cấp tỉnh công bố hiện trạng rừng trước ngày 28 tháng 02 năm sau",
      "Chốt số liệu vào ngày 31 tháng 12 hàng năm; Chủ tịch UBND cấp tỉnh công bố hiện trạng rừng trước ngày 31 tháng 3 năm sau",
      "Chốt số liệu vào ngày 30 tháng 6 hàng năm; Chủ tịch UBND cấp tỉnh công bố hiện trạng rừng trước ngày 31 tháng 8",
      "Chốt số liệu vào ngày 15 tháng 01 hàng năm; Chủ tịch UBND cấp tỉnh công bố hiện trạng rừng trước ngày 30 tháng 4"
    ],
    "correct": "Chốt số liệu vào ngày 31 tháng 12 hàng năm; Chủ tịch UBND cấp tỉnh công bố hiện trạng rừng trước ngày 28 tháng 02 năm sau",
    "explanation": "Điểm d Khoản 4 Điều 19 Thông tư số 16/2025/TT-BNNMT quy định thời điểm chốt số liệu diễn biến rừng là 31/12 và Chủ tịch UBND cấp tỉnh quyết định công bố hiện trạng rừng cấp tỉnh trước ngày 28 tháng 02 năm sau (hạn trước 31/3 là thời hạn Bộ NN&MT công bố toàn quốc)."
  },
  {
    "question": "Xử lý tang vật là cá thể động vật rừng còn sống tạm giữ trong các vụ vi phạm hành chính phải tuân thủ nguyên tắc cấp bách nào?",
    "options": [
      "Phải bàn giao ngay cho cơ quan Thú y hoặc Trung tâm cứu hộ động vật hoang dã để chăm sóc, cứu hộ kịp thời; lập biên bản bàn giao chặt chẽ",
      "Nhốt tại trụ sở Hạt Kiểm lâm cho đến khi có quyết định xử phạt vi phạm hành chính có hiệu lực",
      "Đấu giá bán ngay cho người dân địa phương để nộp tiền vào kho bạc nhà nước",
      "Thả ngay vào bất kỳ khu rừng nào gần trụ sở Hạt Kiểm lâm mà không cần kiểm dịch thú y"
    ],
    "correct": "Phải bàn giao ngay cho cơ quan Thú y hoặc Trung tâm cứu hộ động vật hoang dã để chăm sóc, cứu hộ kịp thời; lập biên bản bàn giao chặt chẽ",
    "explanation": "Khoản 2 Điều 6 Nghị định số 146/2026/NĐ-CP và Thông tư số 85/2025/TT-BNNMT: Động vật rừng sống phải được ưu tiên xử lý cứu hộ kịp thời, bàn giao ngay cho cơ sở cứu hộ/thú y hoặc cơ sở nuôi hợp pháp để chăm sóc, tránh bị chết hoặc tổn hại."
  },
  {
    "question": "Phương pháp điều tra sâu bệnh hại rừng xác định diện tích rừng bị hại ở mức 'nặng' khi tỷ lệ tán lá bị hại hoặc tỷ lệ cây bị hại đạt ngưỡng nào?",
    "options": [
      "Tỷ lệ tán lá bị hại hoặc tỷ lệ cây bị hại lớn hơn 50% diện tích lô rừng",
      "Tỷ lệ tán lá bị hại từ 10% đến 25%",
      "Tỷ lệ tán lá bị hại từ 25% đến 50%",
      "Chỉ khi cây rừng đã bị khô chết hoàn toàn trên 100% diện tích"
    ],
    "correct": "Tỷ lệ tán lá bị hại hoặc tỷ lệ cây bị hại lớn hơn 50% diện tích lô rừng",
    "explanation": "Căn cứ Điều 61 Luật Lâm nghiệp năm 2017, Tiêu chuẩn quốc gia TCVN 11570:2016 và Quyết định số 1334/QĐ-SNNMT: Tỷ lệ tán lá hoặc số cây bị hại lớn hơn 50% diện tích lô rừng được phân cấp mức độ hại Nặng."
  },
  {
    "question": "Công chức Kiểm lâm khi thực hiện nhiệm vụ tuần tra rừng được sử dụng vũ khí quân dụng và công cụ hỗ trợ trong trường hợp nào?",
    "options": [
      "Đã được tập huấn, cấp Giấy phép sử dụng vũ khí/chứng chỉ chuyên môn và chỉ nổ súng phòng vệ chính đáng theo đúng quy định của Luật Quản lý, sử dụng vũ khí, vật liệu nổ",
      "Được quyền nổ súng vào bất kỳ đối tượng nào bỏ chạy khi thấy bóng dáng lực lượng Kiểm lâm",
      "Được phép mang súng về nhà riêng để tự bảo vệ tài sản gia đình",
      "Chỉ cần có thẻ công chức Kiểm lâm là được toàn quyền sử dụng súng không cần giấy phép"
    ],
    "correct": "Đã được tập huấn, cấp Giấy phép sử dụng vũ khí/chứng chỉ chuyên môn và chỉ nổ súng phòng vệ chính đáng theo đúng quy định của Luật Quản lý, sử dụng vũ khí, vật liệu nổ",
    "explanation": "Căn cứ Điều 22, Điều 23 Luật Quản lý, sử dụng vũ khí, vật liệu nổ và công cụ hỗ trợ năm 2017 (sửa đổi, bổ sung năm 2024), Điểm c Khoản 2 Điều 104 và Điểm a Khoản 1 Điều 106 Luật Lâm nghiệp năm 2017: Kiểm lâm được trang bị, sử dụng vũ khí, công cụ hỗ trợ khi thi hành công vụ theo đúng quy định."
  },
  {
    "question": "Thời hạn và hình thức yêu cầu giải trình trực tiếp đối với cá nhân, tổ chức vi phạm hành chính có mức phạt tiền lớn trong lâm nghiệp được quy định ra sao?",
    "options": [
      "Văn bản yêu cầu giải trình phải gửi trong thời hạn 02 ngày làm việc kể từ ngày lập biên bản; việc giải trình tổ chức trong thời hạn không quá 05 ngày làm việc",
      "Giải trình bằng miệng bất kỳ lúc nào trong thời hạn 30 ngày kể từ ngày lập biên bản",
      "Phải gửi đơn giải trình lên Bộ Nông nghiệp và Môi trường trong vòng 24 giờ",
      "Chỉ được giải trình bằng văn bản qua đường bưu điện và không có hình thức giải trình trực tiếp"
    ],
    "correct": "Văn bản yêu cầu giải trình phải gửi trong thời hạn 02 ngày làm việc kể từ ngày lập biên bản; việc giải trình tổ chức trong thời hạn không quá 05 ngày làm việc",
    "explanation": "Điều 61 Luật Xử lý vi phạm hành chính: Văn bản yêu cầu giải trình gửi trong 02 ngày làm việc; người có thẩm quyền tổ chức phiên giải trình trong 05 ngày làm việc."
  },
  {
    "question": "Phương tiện vận tải của bên thứ ba bị người khác thuê để chở lâm sản trái pháp luật sẽ bị xử lý như thế nào theo Luật XLVPHC?",
    "options": [
      "Không tịch thu phương tiện nếu chủ sở hữu chứng minh được mình không có lỗi (không biết và không thể biết phương tiện bị sử dụng để vi phạm); người vi phạm phải nộp số tiền tương đương giá trị phương tiện",
      "Tịch thu ngay lập tức phương tiện mà không cần xem xét chủ sở hữu có biết hay không",
      "Bắt buộc người thuê xe và chủ xe cùng phải chịu chung mức phạt tiền và đi tù",
      "Trả lại xe vô điều kiện mà không yêu cầu người có hành vi vi phạm bồi hoàn bất kỳ khoản tiền nào"
    ],
    "correct": "Không tịch thu phương tiện nếu chủ sở hữu chứng minh được mình không có lỗi (không biết và không thể biết phương tiện bị sử dụng để vi phạm); người vi phạm phải nộp số tiền tương đương giá trị phương tiện",
    "explanation": "Khoản 1 Điều 126 Luật XLVPHC: Phương tiện bị chiếm đoạt, sử dụng trái phép không bị tịch thu nếu chủ sở hữu không có lỗi; người vi phạm phải nộp khoản tiền tương đương giá trị phương tiện."
  },
  {
    "question": "Thời hiệu xử phạt vi phạm hành chính đối với các hành vi vi phạm trong lĩnh vực lâm nghiệp được quy định như thế nào?",
    "options": [
      "Thời hiệu là 01 năm; riêng hành vi phá rừng, khai thác rừng, tàng trữ, buôn bán lâm sản trái phép qua biên giới thời hiệu là 02 năm",
      "Thời hiệu là 06 tháng đối với mọi hành vi vi phạm hành chính trong lâm nghiệp",
      "Thời hiệu là 05 năm kể từ ngày chấm dứt hành vi vi phạm",
      "Không áp dụng thời hiệu xử phạt vi phạm hành chính đối với rừng tự nhiên"
    ],
    "correct": "Thời hiệu là 01 năm; riêng hành vi phá rừng, khai thác rừng, tàng trữ, buôn bán lâm sản trái phép qua biên giới thời hiệu là 02 năm",
    "explanation": "Điều 6 Luật Xử lý vi phạm hành chính và Điều 5 Nghị định số 146/2026/NĐ-CP: Thời hiệu xử phạt vi phạm hành chính trong lĩnh vực lâm nghiệp là 01 năm; riêng các hành vi vi phạm về quản lý rừng, phát triển rừng, sử dụng rừng, bảo vệ rừng, lâm sản thì thời hiệu xử phạt là 02 năm."
  },
  {
    "question": "Hành vi khai thác gỗ rừng tự nhiên vượt quá 10% chỉ tiêu sản lượng ghi trong Giấy phép khai thác hợp pháp bị xử lý về hành vi nào?",
    "options": [
      "Hành vi khai thác rừng trái quy định của pháp luật (vi phạm quy chế khai thác) đối với phần sản lượng vượt chỉ tiêu",
      "Hành vi trộm cắp tài sản của tổ chức, cá nhân",
      "Không bị xử lý vì đã có giấy phép khai thác ban đầu",
      "Được tự động cộng dồn sản lượng vào đợt khai thác của năm sau"
    ],
    "correct": "Hành vi khai thác rừng trái quy định của pháp luật (vi phạm quy chế khai thác) đối với phần sản lượng vượt chỉ tiêu",
    "explanation": "Khai thác vượt chỉ tiêu, sản lượng cho phép cấu thành hành vi khai thác rừng tự nhiên trái pháp luật theo Điều 16 (hoặc Điều 14, 15) Nghị định số 146/2026/NĐ-CP đối với phần sản lượng khai thác vượt chỉ tiêu."
  },
  {
    "question": "Quy định về thẩm quyền điều động lực lượng Kiểm lâm phối hợp liên khu vực trong phạm vi một tỉnh thuộc về ai?",
    "options": [
      "Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh",
      "Hạt trưởng Hạt Kiểm lâm nơi xảy ra vụ việc phức tạp",
      "Chủ tịch Ủy ban nhân dân cấp xã nơi cần tăng cường",
      "Đội trưởng Đội Kiểm lâm cơ động và PCCCR"
    ],
    "correct": "Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh",
    "explanation": "Căn cứ Điều 105 Luật Lâm nghiệp năm 2017, Nghị định số 01/2019/NĐ-CP (sửa đổi bởi Nghị định số 42/2026/NĐ-CP) và Quyết định số 1334/QĐ-SNNMT: Chi cục trưởng Chi cục Kiểm lâm tỉnh có thẩm quyền điều động nhân lực, phương tiện giữa các Hạt Kiểm lâm và Đội cơ động trên phạm vi toàn tỉnh."
  },
  {
    "question": "Khi lập hồ sơ xử phạt vi phạm hành chính, việc xác định giá trị tang vật vi phạm để làm căn cứ xác định khung tiền phạt và thẩm quyền xử phạt do ai thực hiện?",
    "options": [
      "Người có thẩm quyền đang giải quyết vụ việc tự xác định căn cứ vào giá niêm yết/thị trường hoặc thành lập Hội đồng định giá tang vật theo quy định",
      "Chủ lâm sản vi phạm tự kê khai giá mua trên hóa đơn bán lẻ",
      "Chỉ do Tòa án nhân dân cấp tỉnh ra quyết định định giá tài sản",
      "Lấy cố định mức 100.000 đồng cho mỗi kilôgam lâm sản bất kể chủng loại"
    ],
    "correct": "Người có thẩm quyền đang giải quyết vụ việc tự xác định căn cứ vào giá niêm yết/thị trường hoặc thành lập Hội đồng định giá tang vật theo quy định",
    "explanation": "Điều 60 Luật Xử lý vi phạm hành chính quy định các nguyên tắc và trình tự định giá tang vật vi phạm hành chính làm căn cứ xác định khung tiền phạt và thẩm quyền xử phạt."
  },
  {
    "question": "Trường hợp người bị xử phạt vi phạm hành chính không đồng ý với Quyết định xử phạt của Hạt trưởng Hạt Kiểm lâm thì quyền khiếu nại, khởi kiện được thực hiện thế nào?",
    "options": [
      "Khiếu nại lần đầu đến Hạt trưởng Hạt Kiểm lâm hoặc khởi kiện vụ án hành chính tại Tòa án nhân dân theo Luật Tố tụng hành chính",
      "Bắt buộc phải gửi đơn khiếu nại lên Bộ Nông nghiệp và Môi trường trước khi kiện ra Tòa",
      "Không có quyền khiếu nại nếu quyết định xử phạt đã đóng dấu đỏ của Hạt Kiểm lâm",
      "Chỉ được quyền làm đơn xin cứu xét gửi Chủ tịch Hội Nông dân tỉnh"
    ],
    "correct": "Khiếu nại lần đầu đến Hạt trưởng Hạt Kiểm lâm hoặc khởi kiện vụ án hành chính tại Tòa án nhân dân theo Luật Tố tụng hành chính",
    "explanation": "Căn cứ Điều 7 Luật Khiếu nại năm 2011 và Điều 31 Luật Tố tụng hành chính năm 2015: Người bị xử phạt có quyền khiếu nại lần đầu đến người đã ra quyết định hoặc khởi kiện vụ án hành chính tại Tòa án nhân dân có thẩm quyền."
  },
  {
    "question": "Trách nhiệm của công chức Kiểm lâm khi phát hiện dấu hiệu tội phạm hình sự trong quá trình thi hành công vụ kiểm tra lâm luật là gì?",
    "options": [
      "Phải chuyển ngay hồ sơ, tài liệu, tang vật cho Cơ quan điều tra có thẩm quyền để giải quyết theo quy định tố tụng hình sự, không được giữ lại để xử phạt hành chính",
      "Tự ý thương lượng với người vi phạm để nộp phạt hành chính mức tối đa rồi cho qua",
      "Tịch thu toàn bộ tang vật bán thanh lý trước khi báo công an",
      "Giữ lại hồ sơ tự điều tra trong thời hạn 01 năm để lấy thành tích thi đua"
    ],
    "correct": "Phải chuyển ngay hồ sơ, tài liệu, tang vật cho Cơ quan điều tra có thẩm quyền để giải quyết theo quy định tố tụng hình sự, không được giữ lại để xử phạt hành chính",
    "explanation": "Điều 62 Luật XLVPHC nghiêm cấm việc giữ lại vụ vi phạm có dấu hiệu tội phạm để xử lý vi phạm hành chính; phải chuyển ngay cho cơ quan tiến hành tố tụng hình sự."
  },
  {
    "question": "Trong trường hợp nào công chức Kiểm lâm đang thi hành nhiệm vụ bị coi là có hành vi tiêu cực, vi phạm pháp luật nghiêm trọng?",
    "options": [
      "Bao che, hợp thức hóa hồ sơ lâm sản bất hợp pháp, dung túng người phá rừng hoặc nhận tiền/lợi ích vật chất của đối tượng kiểm tra",
      "Yêu cầu lái xe xuất trình đầy đủ bảng kê lâm sản hợp lệ trước khi cho xe tiếp tục lưu thông",
      "Lập biên bản vi phạm hành chính đối với hành vi vi phạm pháp luật lâm nghiệp",
      "Báo cáo trung thực số liệu cháy rừng lên cấp ủy và chính quyền địa phương"
    ],
    "correct": "Bao che, hợp thức hóa hồ sơ lâm sản bất hợp pháp, dung túng người phá rừng hoặc nhận tiền/lợi ích vật chất của đối tượng kiểm tra",
    "explanation": "Căn cứ Điều 18 Luật Cán bộ, công chức năm 2008 và Điều 20 Luật Phòng, chống tham nhũng năm 2018: Nghiêm cấm công chức bao che, hợp thức hóa hồ sơ vi phạm, dung túng người phá rừng hoặc nhận tiền, lợi ích vật chất của đối tượng kiểm tra."
  },
  {
    "question": "Cơ quan nào có thẩm quyền quyết định chủ trương chuyển mục đích sử dụng rừng sang mục đích khác đối với dự án trên địa bàn tỉnh?",
    "options": [
      "Hội đồng nhân dân cấp tỉnh",
      "Chi cục Kiểm lâm cấp tỉnh",
      "Giám đốc Sở Nông nghiệp và Môi trường",
      "Chủ tịch UBND cấp xã"
    ],
    "correct": "Hội đồng nhân dân cấp tỉnh",
    "explanation": "Điều 20 Luật Lâm nghiệp (sửa đổi) và Nghị định 156/2018/NĐ-CP (hợp nhất) quy định HĐND cấp tỉnh có thẩm quyền quyết định chủ trương chuyển mục đích sử dụng rừng sang mục đích khác trên địa bàn."
  },
  {
    "question": "Cơ quan nào chủ trì tiếp nhận và tổ chức thẩm định hồ sơ đề nghị quyết định chủ trương chuyển mục đích sử dụng rừng sang mục đích khác?",
    "options": [
      "Sở Nông nghiệp và Môi trường",
      "Sở Kế hoạch và Đầu tư",
      "Văn phòng UBND tỉnh",
      "Hạt Kiểm lâm sở tại"
    ],
    "correct": "Sở Nông nghiệp và Môi trường",
    "explanation": "Khoản 1 Điều 41 Nghị định 156/2018/NĐ-CP (hợp nhất) quy định Sở Nông nghiệp và Môi trường chủ trì tiếp nhận và phối hợp với các cơ quan liên quan thẩm định hồ sơ trình UBND tỉnh, HĐND tỉnh."
  },
  {
    "question": "Cơ quan nào có thẩm quyền thực hiện việc đánh giá và phân loại doanh nghiệp chế biến và xuất khẩu gỗ (Nhóm I, Nhóm II)?",
    "options": [
      "Cơ quan Kiểm lâm cấp tỉnh (Chi cục Kiểm lâm)",
      "Hạt Kiểm lâm sở tại",
      "Cục Thuế tỉnh",
      "Hiệp hội Gỗ và Lâm sản"
    ],
    "correct": "Cơ quan Kiểm lâm cấp tỉnh (Chi cục Kiểm lâm)",
    "explanation": "Điều 13 Nghị định 102/2020/NĐ-CP (hợp nhất) quy định cơ quan Kiểm lâm cấp tỉnh có trách nhiệm tiếp nhận hồ sơ, đánh giá và quyết định phân loại doanh nghiệp chế biến, xuất khẩu gỗ."
  },
  {
    "question": "Theo Luật Lâm nghiệp, Kiểm lâm được quyền dừng phương tiện giao thông vận tải đường bộ khi nào?",
    "options": [
      "Khi có dấu hiệu phương tiện vận chuyển lâm sản trái pháp luật",
      "Kiểm lâm được quyền dừng bất kỳ phương tiện nào để kiểm tra định kỳ",
      "Chỉ được dừng khi có lực lượng Cảnh sát giao thông đi cùng",
      "Chỉ được dừng phương tiện trong phạm vi rừng đặc dụng"
    ],
    "correct": "Khi có dấu hiệu phương tiện vận chuyển lâm sản trái pháp luật",
    "explanation": "Khoản 2 Điều 104 Luật Lâm nghiệp năm 2017 và Nghị định số 01/2019/NĐ-CP: Kiểm lâm có quyền dừng, kiểm tra phương tiện giao thông vận tải khi có căn cứ, dấu hiệu vận chuyển lâm sản trái pháp luật để kiểm tra, xử lý theo quy định."
  },
  {
    "question": "Kiểm lâm được trang bị, quản lý và sử dụng vũ khí, công cụ hỗ trợ theo quy định của văn bản nào?",
    "options": [
      "Luật Quản lý, sử dụng vũ khí, vật liệu nổ và công cụ hỗ trợ",
      "Quy chế nội bộ của Chi cục Kiểm lâm tự ban hành",
      "Theo sự phân công miệng của Ủy ban nhân dân xã",
      "Kiểm lâm không thuộc đối tượng được trang bị vũ khí"
    ],
    "correct": "Luật Quản lý, sử dụng vũ khí, vật liệu nổ và công cụ hỗ trợ",
    "explanation": "Điểm c Khoản 2 Điều 104 Luật Lâm nghiệp và Điều 12 Nghị định 01/2019/NĐ-CP quy định Kiểm lâm được trang bị, sử dụng vũ khí, CCHT theo quy định của Luật Quản lý, sử dụng vũ khí, VLN và CCHT."
  },
  {
    "question": "Theo Quyết định 1334/QĐ-SNNMT, phòng nào của Chi cục Kiểm lâm Tuyên Quang chủ trì tham mưu quản lý giống cây trồng và quản lý rừng bền vững?",
    "options": [
      "Phòng Sử dụng và Phát triển rừng",
      "Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên",
      "Phòng Tổ chức - Hành chính",
      "Đội Kiểm lâm cơ động và PCCCR"
    ],
    "correct": "Phòng Sử dụng và Phát triển rừng",
    "explanation": "Điều 4 Quyết định số 1334/QĐ-SNNMT ngày 24/8/2025 của Sở NN&MT Tuyên Quang quy định Phòng Sử dụng và Phát triển rừng chủ trì tham mưu về phát triển rừng, giống cây trồng, quản lý rừng bền vững."
  },
  {
    "question": "Theo Quyết định 1334/QĐ-SNNMT, phòng nào của Chi cục Kiểm lâm Tuyên Quang chủ trì tham mưu xử lý vi phạm hành chính và tố tụng hình sự?",
    "options": [
      "Phòng Điều tra, xử lý vi phạm về lâm nghiệp",
      "Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên",
      "Phòng Tổ chức - Hành chính",
      "Hạt Kiểm lâm địa bàn"
    ],
    "correct": "Phòng Điều tra, xử lý vi phạm về lâm nghiệp",
    "explanation": "Điều 5 Quyết định số 1334/QĐ-SNNMT quy định Phòng Điều tra, xử lý vi phạm về lâm nghiệp tham mưu công tác pháp chế, điều tra, xử lý VPHC và áp dụng pháp luật tố tụng hình sự thuộc thẩm quyền."
  },
  {
    "question": "Theo Quyết định 1334/QĐ-SNNMT, phòng chuyên môn nào thuộc Chi cục Kiểm lâm Tuyên Quang chủ trì tham mưu công tác PCCCR?",
    "options": [
      "Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên",
      "Phòng Sử dụng và Phát triển rừng",
      "Phòng Tổ chức - Hành chính",
      "Bộ phận Văn thư Chi cục"
    ],
    "correct": "Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên",
    "explanation": "Điều 3 Quyết định số 1334/QĐ-SNNMT quy định Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên chủ trì tham mưu thực hiện công tác quản lý, bảo vệ rừng, bảo tồn đa dạng sinh học và PCCCR."
  },
  {
    "question": "Hành vi vận chuyển lâm sản trái pháp luật (gỗ tròn, gỗ xẻ không có hồ sơ hợp pháp) bị xử phạt mức tiền tối đa đối với cá nhân lên tới bao nhiêu theo Nghị định số 146/2026/NĐ-CP?",
    "options": [
      "Lên đến 500.000.000 đồng",
      "Lên đến 250.000.000 đồng",
      "Lên đến 150.000.000 đồng",
      "Lên đến 50.000.000 đồng"
    ],
    "correct": "Lên đến 500.000.000 đồng",
    "explanation": "Căn cứ Khoản 20 Điều 25 Nghị định số 146/2026/NĐ-CP: Mức phạt tiền tối đa đối với hành vi vận chuyển lâm sản trái pháp luật của cá nhân lên đến 500.000.000 đồng (đối với tổ chức vi phạm gấp 02 lần là 1.000.000.000 đồng)."
  },
  {
    "question": "Theo Nghị định số 146/2026/NĐ-CP, hành vi vi phạm quy định về phòng cháy và chữa cháy rừng gây cháy rừng bị áp dụng mức phạt tiền tối đa đối với cá nhân là bao nhiêu?",
    "options": [
      "Phạt tiền tối đa đến 500.000.000 đồng",
      "Phạt tiền tối đa đến 250.000.000 đồng",
      "Phạt tiền tối đa đến 100.000.000 đồng",
      "Phạt tiền tối đa đến 50.000.000 đồng"
    ],
    "correct": "Phạt tiền tối đa đến 500.000.000 đồng",
    "explanation": "Căn cứ Khoản 11 Điều 20 Nghị định số 146/2026/NĐ-CP: Mức phạt tiền cao nhất đối với cá nhân có hành vi vi phạm quy định về PCCC rừng gây cháy rừng lên đến 500.000.000 đồng (tổ chức vi phạm là 1.000.000.000 đồng)."
  },
  {
    "question": "Khai thác trái phép rừng sản xuất là rừng tự nhiên đối với gỗ thông thường từ khối lượng bao nhiêu m3 thì bị truy cứu TNHS theo Điều 232 BLHS?",
    "options": [
      "Từ 05 m3 trở lên",
      "Từ 10 m3 trở lên",
      "Từ 15 m3 trở lên",
      "Từ 20 m3 trở lên"
    ],
    "correct": "Từ 10 m3 trở lên",
    "explanation": "Điểm b Khoản 1 Điều 232 Bộ luật Hình sự quy định khai thác trái phép rừng sản xuất là rừng tự nhiên từ 10 m3 đến dưới 20 m3 gỗ loài thông thường thì bị truy cứu trách nhiệm hình sự."
  },
  {
    "question": "Khai thác trái phép rừng sản xuất là rừng trồng đối với gỗ thông thường từ khối lượng bao nhiêu m3 thì bị truy cứu TNHS theo Điều 232 BLHS?",
    "options": [
      "Từ 10 m3 trở lên",
      "Từ 15 m3 trở lên",
      "Từ 20 m3 trở lên",
      "Từ 30 m3 trở lên"
    ],
    "correct": "Từ 20 m3 trở lên",
    "explanation": "Điểm a Khoản 1 Điều 232 Bộ luật Hình sự quy định khai thác trái phép rừng sản xuất là rừng trồng từ 20 m3 đến dưới 40 m3 gỗ loài thông thường thì cấu thành tội phạm hình sự."
  },
  {
    "question": "Khai thác trái phép gỗ loài nguy cấp, quý, hiếm Nhóm IA tại rừng đặc dụng từ bao nhiêu m3 thì bị truy cứu TNHS theo Điều 232 BLHS?",
    "options": [
      "Từ 0,1 m3 trở lên",
      "Từ 0,5 m3 trở lên",
      "Từ 1,0 m3 trở lên",
      "Từ 1,5 m3 trở lên"
    ],
    "correct": "Từ 0,5 m3 trở lên",
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
    "question": "Hành vi săn bắt, giết, nuôi nhốt, vận chuyển động vật hoang dã thuộc Danh mục loài nguy cấp, quý, hiếm được ưu tiên bảo vệ bị truy cứu trách nhiệm hình sự về tội danh nào sau đây?",
    "options": [
      "Tội vi phạm quy định về bảo vệ động vật nguy cấp, quý, hiếm",
      "Tội vi phạm quy định về bảo vệ động vật hoang dã",
      "Tội vi phạm quy định về khai thác, bảo vệ rừng và quản lý lâm sản",
      "Tội hủy hoại nguồn lợi thủy sản"
    ],
    "correct": "Tội vi phạm quy định về bảo vệ động vật nguy cấp, quý, hiếm",
    "explanation": "Căn cứ Điều 244 Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung năm 2017) quy định về Tội vi phạm quy định về bảo vệ động vật nguy cấp, quý, hiếm (loài ưu tiên bảo vệ hoặc Nhóm IB)."
  },
  {
    "question": "Hành vi săn bắt, nuôi nhốt trái phép cá thể động vật thuộc lớp thú thuộc Danh mục Nhóm IB từ bao nhiêu cá thể thì bị khởi tố theo Điều 244 BLHS?",
    "options": [
      "Từ 01 cá thể trở lên",
      "Từ 03 cá thể trở lên",
      "Từ 05 cá thể trở lên",
      "Từ 10 cá thể trở lên"
    ],
    "correct": "Từ 01 cá thể trở lên",
    "explanation": "Điểm a Khoản 1 Điều 244 Bộ luật Hình sự quy định săn bắt, giết, nuôi, nhốt, vận chuyển, buôn bán trái phép từ 01 cá thể đến 04 cá thể động vật lớp thú thuộc loài nguy cấp, quý, hiếm thì bị truy cứu TNHS."
  },
  {
    "question": "Theo Bộ luật Tố tụng hình sự, cơ quan Kiểm lâm có thẩm quyền khởi tố vụ án hình sự trong trường hợp nào?",
    "options": [
      "Khi phát hiện hành vi phạm tội quả tang trong phạm vi quản lý của mình",
      "Kiểm lâm không có quyền khởi tố, chỉ được chuyển hồ sơ sang Viện kiểm sát",
      "Chỉ Tòa án mới có thẩm quyền khởi tố vụ án hình sự",
      "Chỉ được khởi tố khi có sự đồng ý của Ủy ban nhân dân xã"
    ],
    "correct": "Khi phát hiện hành vi phạm tội quả tang trong phạm vi quản lý của mình",
    "explanation": "Khoản 1 Điều 164 Bộ luật Tố tụng hình sự năm 2015 quy định cơ quan Kiểm lâm khi phát hiện hành vi phạm tội thuộc thẩm quyền (tội ít nghiêm trọng quả tang, chứng cứ rõ ràng) có quyền khởi tố vụ án hình sự và tiến hành hoạt động điều tra ban đầu trong thời hạn 07 ngày."
  },
  {
    "question": "Theo Luật Xử lý VPHC, cá nhân vi phạm có quyền giải trình trực tiếp hoặc bằng văn bản khi mức phạt tiền tối đa của khung phạt là bao nhiêu?",
    "options": [
      "Từ 5.000.000 đồng trở lên",
      "Từ 10.000.000 đồng trở lên",
      "Từ 15.000.000 đồng trở lên",
      "Từ 25.000.000 đồng trở lên"
    ],
    "correct": "Từ 15.000.000 đồng trở lên",
    "explanation": "Khoản 1 Điều 61 Luật Xử lý VPHC quy định cá nhân vi phạm có quyền giải trình đối với hành vi vi phạm hành chính mà pháp luật quy định áp dụng mức phạt tiền tối đa từ 15.000.000 đồng trở lên."
  },
  {
    "question": "Thời hạn cá nhân, tổ chức vi phạm gửi văn bản yêu cầu giải trình trực tiếp kể từ ngày lập biên bản vi phạm hành chính là bao lâu?",
    "options": [
      "Không quá 02 ngày làm việc",
      "Không quá 05 ngày làm việc",
      "Không quá 07 ngày làm việc",
      "Không quá 10 ngày"
    ],
    "correct": "Không quá 02 ngày làm việc",
    "explanation": "Điểm a Khoản 2 Điều 61 Luật Xử lý VPHC quy định đối với trường hợp giải trình trực tiếp, cá nhân, tổ chức vi phạm phải gửi văn bản yêu cầu trong thời hạn không quá 02 ngày làm việc kể từ ngày lập biên bản."
  },
  {
    "question": "Theo Nghị định 146/2026/NĐ-CP, việc xử phạt vi phạm hành chính trên môi trường điện tử được thực hiện thông qua hệ thống nào?",
    "options": [
      "Cổng Dịch vụ công Quốc gia hoặc Cổng dịch vụ công cấp tỉnh",
      "Nhắn tin qua ứng dụng Zalo cá nhân của Kiểm lâm viên",
      "Gửi tin nhắn SMS không có chữ ký số xác thực",
      "Thông báo bằng hình thức gọi điện thoại trực tiếp"
    ],
    "correct": "Cổng Dịch vụ công Quốc gia hoặc Cổng dịch vụ công cấp tỉnh",
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
    "explanation": "Căn cứ Điều 49, 51 Nghị định số 156/2018/NĐ-CP và Hướng dẫn số 230/HD-CCKL: Chủ tịch UBND cấp xã là Trưởng ban Ban Chỉ huy PCCCR cấp xã, chịu trách nhiệm toàn diện về chỉ đạo công tác PCCCR trên địa bàn."
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
    "explanation": "Căn cứ Điều 49, 51 Nghị định số 156/2018/NĐ-CP và Hướng dẫn số 230/HD-CCKL của Chi cục Kiểm lâm: Kiểm lâm địa bàn tham gia Ban Chỉ huy cấp xã với vai trò Phó ban hoặc ủy viên thường trực tham mưu kỹ thuật, nghiệp vụ BVR và PCCCR."
  },
  {
    "question": "Khi xảy ra cháy rừng trên địa bàn xã, Chủ tịch UBND cấp xã có thẩm quyền huy động lực lượng nào?",
    "options": [
      "Chỉ lực lượng Kiểm lâm địa bàn",
      "Lực lượng dân quân, công an xã, nhân dân và phương tiện trên địa bàn",
      "Chỉ huy động cán bộ, công chức xã",
      "Phải chờ lệnh của Chủ tịch UBND cấp tỉnh mới được huy động"
    ],
    "correct": "Lực lượng dân quân, công an xã, nhân dân và phương tiện trên địa bàn",
    "explanation": "Khoản 5 Điều 51 Nghị định số 156/2018/NĐ-CP và Điều 32 Luật Phòng cháy và chữa cháy: Chủ tịch UBND cấp xã có quyền huy động lực lượng, phương tiện tại chỗ của các cơ quan, tổ chức, hộ gia đình, cá nhân trên địa bàn để chữa cháy rừng."
  },
  {
    "question": "Phương châm '4 tại chỗ' trong công tác phòng cháy, chữa cháy rừng cấp xã gồm những yếu tố nào?",
    "options": [
      "Chỉ huy tại chỗ, lực lượng tại chỗ, phương tiện tại chỗ, hậu cần tại chỗ",
      "Kế hoạch tại chỗ, con người tại chỗ, nguồn vốn tại chỗ, nước tại chỗ",
      "Chủ rừng tại chỗ, công an tại chỗ, quân đội tại chỗ, y tế tại chỗ",
      "Kiểm lâm tại chỗ, phương án tại chỗ, thiết bị tại chỗ, dự toán tại chỗ"
    ],
    "correct": "Chỉ huy tại chỗ, lực lượng tại chỗ, phương tiện tại chỗ, hậu cần tại chỗ",
    "explanation": "Căn cứ Khoản 1 Điều 44 Nghị định số 156/2018/NĐ-CP và Mục II Hướng dẫn số 230/HD-CCKL của Chi cục Kiểm lâm quy định phương châm '4 tại chỗ' gồm: chỉ huy tại chỗ, lực lượng tại chỗ, phương tiện tại chỗ và hậu cần tại chỗ."
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
    "explanation": "Căn cứ Điều 49 Nghị định số 156/2018/NĐ-CP và Mục II Hướng dẫn số 230/HD-CCKL của Chi cục Kiểm lâm Tuyên Quang: Diễn tập PCCCR cấp xã gồm 2 phần: Diễn tập vận hành cơ chế tại hội trường và Diễn tập thực binh tại hiện trường."
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
    "explanation": "Căn cứ Điều 19 Thông tư số 16/2025/TT-BNNMT quy định UBND cấp xã có trách nhiệm tiếp nhận báo cáo biến động rừng của chủ rừng, phối hợp Kiểm lâm địa bàn kiểm tra thực địa và xác nhận kết quả biến động rừng trên địa bàn."
  },
  {
    "question": "Khi tiếp nhận thông tin về động vật hoang dã đi lạc, bị thương, UBND cấp xã phải lập biên bản trong thời hạn bao lâu?",
    "options": [
      "Trong thời hạn 01 ngày làm việc kể từ khi nhận được thông tin",
      "Trong thời hạn 03 ngày làm việc",
      "Trong thời hạn 05 ngày làm việc",
      "Trong thời hạn 07 ngày làm việc"
    ],
    "correct": "Trong thời hạn 01 ngày làm việc kể từ khi nhận được thông tin",
    "explanation": "Điểm b Khoản 3 Điều 15 Thông tư số 85/2025/TT-BNNMT quy định trong thời hạn 01 ngày làm việc kể từ khi nhận được thông tin, UBND cấp xã tổ chức kiểm tra, tiếp nhận và lập Biên bản giao nhận động vật."
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
    "explanation": "Điểm b Khoản 3 Điều 15 Thông tư số 85/2025/TT-BNNMT quy định thời hạn thông báo công khai tại trụ sở cơ quan và trên phương tiện thông tin đại chúng để xác minh chủ sở hữu hợp pháp là 05 ngày làm việc."
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
    "explanation": "Điểm c Khoản 3 Điều 6 Thông tư số 26/2025/TT-BNNMT (hoặc VBHN số 04/VBHN-BNNMT): Chủ tịch UBND cấp xã phê duyệt phương án khai thác của HGĐ, cá nhân, cộng đồng dân cư đối với các trường hợp thuộc Khoản 2 Điều 6 (rừng phòng hộ là rừng trồng hoặc rừng trồng do Nhà nước đại diện chủ sở hữu)."
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
    "explanation": "Căn cứ Điểm c Khoản 5 Điều 19 Thông tư số 16/2025/TT-BNNMT quy định dữ liệu, kết quả theo dõi diễn biến rừng dạng giấy của cấp xã được quản lý, lưu trữ tại UBND cấp xã và Hạt Kiểm lâm."
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
      "Ủy ban nhân dân cấp xã nơi có rừng tranh chấp",
      "Hạt Kiểm lâm địa bàn",
      "Đội Cảnh sát hình sự",
      "Ban Quản lý dự án lâm nghiệp"
    ],
    "correct": "Ủy ban nhân dân cấp xã nơi có rừng tranh chấp",
    "explanation": "Căn cứ Khoản 2 Điều 102 Luật Lâm nghiệp năm 2017 và Điều 202 Luật Đất đai năm 2013 (Điều 235 Luật Đất đai năm 2024): UBND cấp xã có trách nhiệm chủ trì, phối hợp hòa giải các tranh chấp về quyền sử dụng rừng, đất lâm nghiệp ở cơ sở."
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
    "explanation": "Căn cứ Điều 61 Luật Lâm nghiệp năm 2017 và Mục I.2 Hướng dẫn số 230/HD-CCKL: Nguyên tắc phòng trừ sinh vật hại rừng là 'phòng là chính, phát hiện sớm, diệt trừ kịp thời; ưu tiên biện pháp sinh học, hạn chế thuốc hóa học'."
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
    "explanation": "Căn cứ Điều 61 Luật Lâm nghiệp năm 2017, Tiêu chuẩn quốc gia TCVN 11570:2016 và Hướng dẫn số 230/HD-CCKL: Công thức tính tỷ lệ cây bị hại P% = (n/N) * 100, trong đó n là số cây bị hại trên ô tiêu chuẩn, N là tổng số cây điều tra."
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
    "explanation": "Căn cứ Điều 61 Luật Lâm nghiệp năm 2017, Tiêu chuẩn quốc gia TCVN 11570:2016 và Hướng dẫn số 230/HD-CCKL: Phân cấp mức độ bị hại: Nhẹ (P < 25%), Trung bình (25% <= P <= 50%), Nặng (P > 50% số cây hoặc tán lá bị hại)."
  },
  {
    "question": "Khi phát hiện dịch sâu bệnh hại rừng bùng phát có nguy cơ lây lan diện rộng, cơ quan Kiểm lâm phải làm gì?",
    "options": [
      "Báo cáo ngay cho Sở NN&MT, UBND cấp xã/tỉnh và cơ quan bảo vệ thực vật chuyên ngành",
      "Tự ý mua thuốc bảo vệ thực vật cấm để phun dập dịch",
      "Chờ dịch bệnh tự thoái trào sau mùa mưa",
      "Yêu cầu chủ rừng chặt trắng toàn bộ diện tích rừng xung quanh"
    ],
    "correct": "Báo cáo ngay cho Sở NN&MT, UBND cấp xã/tỉnh và cơ quan bảo vệ thực vật chuyên ngành",
    "explanation": "Căn cứ Khoản 3 Điều 61 Luật Lâm nghiệp năm 2017 và Mục I.5 Hướng dẫn số 230/HD-CCKL: Khi dịch bùng phát, cơ quan Kiểm lâm phải báo cáo ngay cơ quan chuyên ngành BVTV và UBND cấp trên để khoanh vùng công bố dịch và xử lý."
  },
  {
    "question": "Thời kỳ điều tra định kỳ sâu bệnh hại rừng trong năm thường được bố trí vào giai đoạn nào?",
    "options": [
      "Vào các giai đoạn sinh trưởng nhạy cảm của cây rừng và thời kỳ cao điểm phát sinh sâu bệnh",
      "Vào những ngày mưa bão ngập lụt kéo dài",
      "Chỉ điều tra vào dịp nghỉ Tết âm lịch",
      "Chỉ điều tra khi cây rừng đã bị trụi hoàn toàn lá"
    ],
    "correct": "Vào các giai đoạn sinh trưởng nhạy cảm của cây rừng và thời kỳ cao điểm phát sinh sâu bệnh",
    "explanation": "Căn cứ Tiêu chuẩn quốc gia TCVN 11570:2016 và Hướng dẫn số 230/HD-CCKL: Thời kỳ điều tra sâu bệnh hại rừng bố trí vào các giai đoạn sinh trưởng nhạy cảm của cây và cao điểm dịch bệnh."
  },
  {
    "question": "Hồ sơ nghiệm thu kết quả công tác tuyên truyền bảo vệ rừng cấp xã bắt buộc phải có tài liệu nào?",
    "options": [
      "Kế hoạch tuyên truyền, biên bản họp thôn và danh sách ký cam kết bảo vệ rừng của các hộ gia đình",
      "Biên lai nộp tiền thuế sử dụng đất phi nông nghiệp",
      "Hợp đồng thuê hội trường của doanh nghiệp",
      "Bản photocopy căn cước công dân của toàn bộ người dân trong thôn"
    ],
    "correct": "Kế hoạch tuyên truyền, biên bản họp thôn và danh sách ký cam kết bảo vệ rừng của các hộ gia đình",
    "explanation": "Căn cứ Điều 102 Luật Lâm nghiệp năm 2017 và Hướng dẫn số 230/HD-CCKL của Chi cục Kiểm lâm: Hồ sơ nghiệm thu công tác tuyên truyền BVR gồm Kế hoạch tuyên truyền, biên bản họp thôn và danh sách ký cam kết BVR&PCCCR."
  },
  {
    "question": "Hình thức tuyên truyền pháp luật lâm nghiệp nào sau đây mang lại hiệu quả trực tiếp nhất tại thôn bản?",
    "options": [
      "Họp thôn, tuyên truyền miệng kết hợp hệ thống loa truyền thanh cơ sở và ký cam kết trực tiếp từng hộ gia đình",
      "Đăng tải toàn văn các văn bản quy phạm pháp luật lên cổng thông tin điện tử của tỉnh",
      "Gửi công văn hành chính qua đường bưu điện đến từng gia đình",
      "Tổ chức hội thảo khoa học quốc tế tại trung tâm tỉnh lỵ"
    ],
    "correct": "Họp thôn, tuyên truyền miệng kết hợp hệ thống loa truyền thanh cơ sở và ký cam kết trực tiếp từng hộ gia đình",
    "explanation": "Căn cứ Điều 102 Luật Lâm nghiệp năm 2017 và Hướng dẫn số 230/HD-CCKL: Hình thức tuyên truyền hiệu quả nhất là họp thôn, tuyên truyền miệng kết hợp loa truyền thanh và ký cam kết trực tiếp."
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
    "explanation": "Căn cứ Điều 102 Luật Lâm nghiệp năm 2017, Chỉ thị số 13-CT/TW ngày 12/01/2017 và Kết luận số 61-KL/TW ngày 17/8/2023 của Ban Bí thư Trung ương Đảng về tăng cường sự lãnh đạo của Đảng đối với công tác QLBV&PTR."
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
    "explanation": "Căn cứ Điểm b Khoản 2 Điều 86 và Điểm d Khoản 3 Điều 102 Luật Lâm nghiệp năm 2017 quy định hương ước, quy ước bảo vệ và phát triển rừng do cộng đồng xây dựng, không được trái với quy định của pháp luật và đạo đức xã hội."
  },
  {
    "question": "Trách nhiệm của Kiểm lâm địa bàn đối với quy ước bảo vệ rừng thôn, bản là gì?",
    "options": [
      "Tham mưu UBND xã hướng dẫn thôn bản xây dựng, rà soát và giám sát thực hiện quy ước BVR",
      "Tự mình soạn thảo và ép buộc nhân dân phải chấp thuận quy ước",
      "Không can thiệp vì đó là việc nội bộ của thôn bản",
      "Ký duyệt ban hành quy ước thay cho Ủy ban nhân dân xã"
    ],
    "correct": "Tham mưu UBND xã hướng dẫn thôn bản xây dựng, rà soát và giám sát thực hiện quy ước BVR",
    "explanation": "Căn cứ Điều 104 Luật Lâm nghiệp năm 2017 và Quy chế Kiểm lâm địa bàn: Kiểm lâm địa bàn có nhiệm vụ hướng dẫn cộng đồng dân cư rà soát, lồng ghép nội dung bảo vệ rừng, PCCCR vào quy ước thôn bản đúng quy định pháp luật."
  },
  {
    "question": "Khi đo chiều dài lóng gỗ tròn theo Phụ lục I Thông tư số 26/2025/TT-BNNMT, vị trí đo được xác định như thế nào?",
    "options": [
      "Đo khoảng cách ngắn nhất giữa mặt cắt ngang ở hai đầu của lóng gỗ",
      "Đo khoảng cách dài nhất bao gồm cả phần dập nát",
      "Đo từ tâm đầu lớn đến mép ngoài của đầu nhỏ",
      "Ước lượng bằng mắt thường rồi làm tròn mét"
    ],
    "correct": "Đo khoảng cách ngắn nhất giữa mặt cắt ngang ở hai đầu của lóng gỗ",
    "explanation": "Điểm a Khoản 1 Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định: Chiều dài là khoảng cách ngắn nhất giữa mặt cắt ngang ở hai đầu của lóng gỗ; đơn vị tính là mét, lấy 2 số thập phân."
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
    "explanation": "Điểm b Khoản 1 Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định: mỗi đầu lóng gỗ đo ở 2 vị trí có đường kính lớn nhất và nhỏ nhất (trừ vỏ cây), tính trị số trung bình cộng để xác định đường kính đầu đó."
  },
  {
    "question": "Công thức tính thể tích (V) của lóng gỗ tròn, gỗ đẽo hình trụ tròn theo Thông tư số 26/2025/TT-BNNMT là gì?",
    "options": [
      "V = (π / 4) x (Dtb)^2 x l",
      "V = π x Dtb x l",
      "V = (Dtb)^2 x l",
      "V = (π / 2) x (Dtb)^2 x l"
    ],
    "correct": "V = (π / 4) x (Dtb)^2 x l",
    "explanation": "Điểm c Khoản 1 Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định thể tích gỗ tròn tính theo công thức: V = (π / 4) * (Dtb)^2 * l; thể tích V tính bằng m3, lấy số nguyên và 3 số thập phân."
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
    "explanation": "Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định thể tích gỗ V tính bằng mét khối (m3), lấy số nguyên và ba (03) số hàng thập phân sau số hàng đơn vị."
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
    "explanation": "Điểm d Khoản 1 Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định sai số tính thể tích gỗ trong mỗi lần đo đối với từng khúc, lóng gỗ tròn, gỗ khối trụ tròn là mười phần trăm (±10%)."
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
    "explanation": "Điểm d Khoản 2 Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định sai số tính thể tích gỗ trong mỗi lần đo đối với từng thanh, tấm, hộp gỗ xẻ, gỗ đẽo là năm phần trăm (±5%)."
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
    "explanation": "Điểm c Khoản 2 Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định thể tích hộp gỗ xẻ hình hộp chữ nhật: V = l * a * b (trong đó l, a, b đổi ra đơn vị mét, V lấy 3 số thập phân)."
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
    "explanation": "Khoản 3 Điều 4 Thông tư số 26/2025/TT-BNNMT quy định gỗ có hình thù phức tạp, gốc, rễ, dăm gỗ không thể đo kích thước thì thực hiện cân (kg) hoặc tính theo ster để quy đổi sang m3 gỗ tròn."
  },
  {
    "question": "Tỷ lệ quy đổi khối lượng cân (kg) sang thể tích mét khối (m3) gỗ tròn theo Thông tư số 26/2025/TT-BNNMT là bao nhiêu?",
    "options": [
      "500 kg quy đổi bằng 01 m3 gỗ tròn",
      "800 kg quy đổi bằng 01 m3 gỗ tròn",
      "1.000 kg quy đổi bằng 01 m3 gỗ tròn",
      "1.200 kg quy đổi bằng 01 m3 gỗ tròn"
    ],
    "correct": "1.000 kg quy đổi bằng 01 m3 gỗ tròn",
    "explanation": "Khoản 3 Điều 4 Thông tư số 26/2025/TT-BNNMT quy định rõ: quy đổi 1.000 kg bằng 01 m3 gỗ tròn."
  },
  {
    "question": "Tỷ lệ quy đổi từ đơn vị ster (củi, gỗ xếp khối) sang mét khối (m3) gỗ tròn theo Thông tư số 26/2025/TT-BNNMT là bao nhiêu?",
    "options": [
      "01 ster quy đổi bằng 0,5 m3 gỗ tròn",
      "01 ster quy đổi bằng 0,7 m3 gỗ tròn",
      "01 ster quy đổi bằng 1,0 m3 gỗ tròn",
      "01 ster quy đổi bằng 1,2 m3 gỗ tròn"
    ],
    "correct": "01 ster quy đổi bằng 0,7 m3 gỗ tròn",
    "explanation": "Khoản 3 Điều 4 Thông tư số 26/2025/TT-BNNMT quy định rõ: quy đổi 01 ster bằng 0,7 m3 gỗ tròn."
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
    "explanation": "Khoản 7 Điều 4 Thông tư số 26/2025/TT-BNNMT quy định số hiệu gỗ đánh bằng chữ số Ả Rập, ghi vào mặt cắt ngang hai đầu lóng gỗ, sử dụng sơn có màu sắc khác với màu của gỗ."
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
    "explanation": "Khoản 7 Điều 4 Thông tư số 26/2025/TT-BNNMT quy định đối với gỗ thuộc loài nguy cấp, quý, hiếm hoặc gỗ thuộc Phụ lục CITES thì phải đánh số hiệu không phân biệt kích thước."
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
    "explanation": "Khoản 2 Điều 4 Thông tư số 26/2025/TT-BNNMT quy định phải ghi nhận khối lượng rỗng ruột, khối lượng mục trong khi thực hiện đo đếm, lập Bảng kê lâm sản để khấu trừ chính xác thể tích thực."
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
    "explanation": "Căn cứ Khoản 1 Điều 24 Thông tư số 85/2025/TT-BNNMT quy định chuồng trại nuôi động vật rừng phải phù hợp đặc tính sinh học của loài, bảo đảm an toàn tuyệt đối cho con người và ngăn ngừa động vật thoát ra môi trường tự nhiên."
  },
  {
    "question": "Chủ cơ sở nuôi động vật rừng bắt buộc phải lập và lưu giữ loại sổ theo dõi nào?",
    "options": [
      "Sổ theo dõi hoạt động nuôi động vật hoang dã theo Mẫu số 10 Phụ lục II",
      "Sổ thu chi tài chính nội bộ của gia đình",
      "Sổ hộ khẩu điện tử trên ứng dụng di động",
      "Sổ chấm công lao động hàng ngày"
    ],
    "correct": "Sổ theo dõi hoạt động nuôi động vật hoang dã theo Mẫu số 10 Phụ lục II",
    "explanation": "Căn cứ Khoản 2 Điều 24 Thông tư số 85/2025/TT-BNNMT quy định: Tổ chức, cá nhân nuôi động vật rừng thông thường phải thực hiện việc ghi chép Sổ theo dõi theo Mẫu số 10 Phụ lục II ban hành kèm theo Thông tư."
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
    "explanation": "Căn cứ Khoản 3 Điều 14 Nghị định số 06/2019/NĐ-CP và Thông tư số 85/2025/TT-BNNMT: Khi động vật quý hiếm chết, cơ sở phải lập biên bản, cập nhật sổ theo dõi và thông báo cơ quan Kiểm lâm sở tại để kiểm tra, giám sát xử lý."
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
    "explanation": "Căn cứ Khoản 2 Điều 14 Nghị định số 06/2019/NĐ-CP (sửa đổi bởi NĐ 84/2021/NĐ-CP) và Thông tư số 85/2025/TT-BNNMT: Xuất bán động vật hoang dã phải từ cơ sở có mã số hợp pháp, nguồn gốc chứng minh sinh sản từ thế hệ F2 trở đi và có Bảng kê lâm sản."
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
    "explanation": "Căn cứ Điểm a Khoản 2 Điều 19 Thông tư số 16/2025/TT-BNNMT và Mục V.1.2 Hướng dẫn số 230/HD-CCKL: Sử dụng kết quả kiểm kê rừng tích hợp tại cơ sở dữ liệu trung tâm và dữ liệu công bố năm trước liền kề làm dữ liệu gốc theo dõi diễn biến rừng hàng năm."
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
    "explanation": "Căn cứ Điểm b Khoản 2 Điều 19 Thông tư số 16/2025/TT-BNNMT và Hướng dẫn số 230/HD-CCKL: Ngành Kiểm lâm thống nhất ứng dụng phần mềm Cập nhật diễn biến rừng (FRMS) do Cục Lâm nghiệp và Kiểm lâm ban hành."
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
    "explanation": "Căn cứ Điểm c Khoản 2 Điều 19 Thông tư số 16/2025/TT-BNNMT và Hướng dẫn số 230/HD-CCKL: Thiết bị phục vụ theo dõi diễn biến rừng gồm máy vi tính, máy định vị vệ tinh GPS, máy tính bảng và tàu bay không người lái (UAV)."
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
    "explanation": "Căn cứ Điểm d Khoản 3 Điều 19 Thông tư số 16/2025/TT-BNNMT và Mục V.2 Hướng dẫn số 230/HD-CCKL: Nguyên nhân tăng diện tích rừng gồm trồng rừng, rừng trồng đủ tiêu chí thành rừng, khoanh nuôi tái sinh đủ tiêu chí thành rừng và các nguyên nhân khác."
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
    "explanation": "Căn cứ Điều 19 Thông tư số 16/2025/TT-BNNMT quy định chủ rừng có trách nhiệm thông báo biến động diện tích rừng (do khai thác, trồng mới, cháy, sâu bệnh) cho Kiểm lâm địa bàn hoặc UBND cấp xã trong thời hạn 15 ngày."
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
    "explanation": "Căn cứ Điểm d Khoản 4 Điều 19 Thông tư số 16/2025/TT-BNNMT: Chi cục Kiểm lâm lập hồ sơ báo cáo Sở Nông nghiệp và Môi trường trình Chủ tịch UBND cấp tỉnh quyết định công bố hiện trạng rừng cấp tỉnh hàng năm."
  },
  {
    "question": "Thời hạn Chủ tịch UBND cấp tỉnh công bố số liệu hiện trạng rừng hàng năm chậm nhất là ngày nào?",
    "options": [
      "Trước ngày 28 tháng 02 của năm sau liền kề (năm nhuận là ngày 29 tháng 02)",
      "Trước ngày 31 tháng 3 của năm sau liền kề",
      "Ngày 30 tháng 6 của năm sau liền kề",
      "Ngày 31 tháng 12 của năm theo dõi"
    ],
    "correct": "Trước ngày 28 tháng 02 của năm sau liền kề (năm nhuận là ngày 29 tháng 02)",
    "explanation": "Căn cứ Điểm d Khoản 4 Điều 19 Thông tư số 16/2025/TT-BNNMT quy định Chủ tịch UBND cấp tỉnh quyết định công bố hiện trạng rừng cấp tỉnh trước ngày 28 tháng 02 năm sau (thời hạn trước ngày 31 tháng 3 năm sau là của Bộ NN&MT công bố hiện trạng rừng toàn quốc)."
  }
];
