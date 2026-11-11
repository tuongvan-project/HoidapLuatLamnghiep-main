// ============================================================================
// BỘ CÂU HỎI TRẮC NGHIỆM ĐÃ RÀ SOÁT, ĐỐI CHIẾU VÀ CHUẨN HÓA PHÁP LÝ (BẢN V2 - NÂNG CAO ĐỘ KHÓ)
// Gói dữ liệu: Pháp luật và nghiệp vụ Kiểm lâm (115 câu)
// Đã điều chỉnh: Tăng độ khó bằng cách thay thế 1 phương án sai lộ liễu thành phương án nhiễu tinh vi (plausible distractor)
// Bảo toàn: 100% câu hỏi, đáp án đúng và trích dẫn giải thích pháp lý nguyên vẹn
// ============================================================================

const questions_KL = [
  {
    "id": "KL_001",
    "question": "Khi phát hiện hành vi vi phạm hành chính trong lĩnh vực lâm nghiệp, Kiểm lâm viên đang thi hành công vụ có quyền áp dụng các hình thức xử phạt và biện pháp nào sau đây theo Nghị định 146/2026/NĐ-CP?",
    "options": [
      "Phạt cảnh cáo; Phạt tiền đến 25.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 50.000.000 đồng (02 lần mức tiền phạt thẩm quyền)",
      "Phạt cảnh cáo; Phạt tiền đến 25.000.000 đồng; Tịch thu toàn bộ tang vật, phương tiện VPHC không giới hạn giá trị",
      "Phạt cảnh cáo; Phạt tiền đến 50.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 100.000.000 đồng",
      "Phạt cảnh cáo; Phạt tiền đến 25.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 25.000.000 đồng (bằng mức tiền phạt thẩm quyền)"
    ],
    "correct": "Phạt cảnh cáo; Phạt tiền đến 25.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 50.000.000 đồng (02 lần mức tiền phạt thẩm quyền)",
    "explanation": "Khoản 1 Điều 29 Nghị định 146/2026/NĐ-CP: Kiểm lâm viên được phạt cảnh cáo; phạt tiền đến 25.000.000 đồng; tịch thu tang vật, phương tiện có giá trị không vượt quá 02 lần mức tiền phạt thẩm quyền (tức đến 50.000.000 đồng)."
  },
  {
    "id": "KL_002",
    "question": "Theo Nghị định 146/2026/NĐ-CP, Trạm trưởng Trạm Kiểm lâm có thẩm quyền xử phạt và tịch thu tang vật đối với cá nhân vi phạm như thế nào?",
    "options": [
      "Phạt tiền đến 100.000.000 đồng; tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 200.000.000 đồng (02 lần mức tiền phạt thẩm quyền)",
      "Phạt tiền đến 100.000.000 đồng; tịch thu tang vật, phương tiện VPHC không giới hạn giá trị",
      "Phạt tiền đến 50.000.000 đồng; tịch thu tang vật có giá trị không quá 100.000.000 đồng",
      "Phạt tiền đến 100.000.000 đồng; tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 100.000.000 đồng (bằng mức tiền phạt thẩm quyền)"
    ],
    "correct": "Phạt tiền đến 100.000.000 đồng; tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 200.000.000 đồng (02 lần mức tiền phạt thẩm quyền)",
    "explanation": "Điểm b, Điểm c Khoản 2 Điều 29 Nghị định 146/2026/NĐ-CP quy định Trạm trưởng Trạm Kiểm lâm có quyền phạt tiền đến 100.000.000 đồng và tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 02 lần mức tiền phạt thẩm quyền (đến 200.000.000 đồng)."
  },
  {
    "id": "KL_003",
    "question": "Thẩm quyền xử phạt của Hạt trưởng Hạt Kiểm lâm và Đội trưởng Đội Kiểm lâm cơ động và PCCCR theo Nghị định 146/2026/NĐ-CP được quy định như thế nào đối với cá nhân?",
    "options": [
      "Phạt tiền đến 150.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 300.000.000 đồng (02 lần mức tiền phạt thẩm quyền)",
      "Phạt tiền đến 150.000.000 đồng; Tịch thu tang vật không giới hạn giá trị; Tước quyền sử dụng chứng chỉ hành nghề/giấy phép có thời hạn",
      "Phạt tiền đến 150.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 150.000.000 đồng (bằng mức tiền phạt thẩm quyền)",
      "Phạt tiền đến 100.000.000 đồng; Tịch thu tang vật có giá trị không vượt quá 200.000.000 đồng"
    ],
    "correct": "Phạt tiền đến 150.000.000 đồng; Tịch thu tang vật, phương tiện VPHC có giá trị không vượt quá 300.000.000 đồng (02 lần mức tiền phạt thẩm quyền)",
    "explanation": "Khoản 3 Điều 29 Nghị định 146/2026/NĐ-CP: Hạt trưởng Hạt Kiểm lâm, Đội trưởng Đội Kiểm lâm cơ động và PCCCR được phạt tiền đến 150.000.000 đồng; tịch thu tang vật, phương tiện có giá trị không vượt quá 02 lần mức tiền phạt (đến 300.000.000 đồng); áp dụng biện pháp khắc phục hậu quả; không có quyền tước giấy phép/chứng chỉ hành nghề."
  },
  {
    "id": "KL_004",
    "question": "Thẩm quyền xử phạt của Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh theo Nghị định 146/2026/NĐ-CP đối với cá nhân và tổ chức được quy định như thế nào?",
    "options": [
      "Phạt tiền đến 250.000.000 đồng đối với cá nhân (đến 500.000.000 đồng đối với tổ chức); Tịch thu tang vật, phương tiện VPHC; Đình chỉ hoạt động khai thác rừng hoặc cơ sở chế biến lâm sản có thời hạn tối đa đến 12 tháng",
      "Phạt tiền đến 500.000.000 đồng đối với cá nhân (đến 1.000.000.000 đồng đối với tổ chức); Tịch thu toàn bộ tang vật, phương tiện VPHC",
      "Phạt tiền đến 250.000.000 đồng đối với cá nhân (đến 500.000.000 đồng đối với tổ chức); Tịch thu tang vật có giá trị dưới 1 tỷ đồng; Đình chỉ hoạt động có thời hạn đến 24 tháng",
      "Phạt tiền đến 200.000.000 đồng đối với cá nhân; Chỉ được tịch thu tang vật có giá trị dưới 500 triệu đồng"
    ],
    "correct": "Phạt tiền đến 250.000.000 đồng đối với cá nhân (đến 500.000.000 đồng đối với tổ chức); Tịch thu tang vật, phương tiện VPHC; Đình chỉ hoạt động khai thác rừng hoặc cơ sở chế biến lâm sản có thời hạn tối đa đến 12 tháng",
    "explanation": "Khoản 4 Điều 29 Nghị định 146/2026/NĐ-CP: Chi cục trưởng có quyền phạt tiền đến 250.000.000 đồng đối với cá nhân (500.000.000 đồng đối với tổ chức); tịch thu tang vật, phương tiện VPHC; đình chỉ hoạt động khai thác rừng hoặc cơ sở chế biến lâm sản có thời hạn tối đa đến 12 tháng; áp dụng biện pháp khắc phục hậu quả."
  },
  {
    "id": "KL_005",
    "question": "Theo Nghị định 146/2026/NĐ-CP, Chủ tịch Ủy ban nhân dân cấp xã có thẩm quyền phạt tiền đối với cá nhân vi phạm trong lĩnh vực lâm nghiệp tối đa là bao nhiêu?",
    "options": [
      "Phạt tiền đến 250.000.000 đồng và tịch thu tang vật, phương tiện vi phạm hành chính",
      "Phạt tiền đến 5.000.000 đồng theo quy định chung của Luật Xử lý vi phạm hành chính",
      "Phạt tiền đến 50.000.000 đồng và không có quyền tịch thu tang vật có giá trị lớn",
      "Phạt tiền đến 150.000.000 đồng và tịch thu tang vật có giá trị không vượt quá 300.000.000 đồng"
    ],
    "correct": "Phạt tiền đến 250.000.000 đồng và tịch thu tang vật, phương tiện vi phạm hành chính",
    "explanation": "Khoản 1 Điều 31 Nghị định 146/2026/NĐ-CP quy định Chủ tịch UBND cấp xã có quyền phạt tiền đến 250.000.000 đồng đối với cá nhân và tịch thu tang vật, phương tiện VPHC trong lĩnh vực lâm nghiệp."
  },
  {
    "id": "KL_006",
    "question": "Trường hợp một cá nhân thực hiện nhiều hành vi vi phạm hành chính trong lĩnh vực lâm nghiệp thì thẩm quyền xử phạt được xác định theo nguyên tắc nào?",
    "options": [
      "Nếu hình thức, mức xử phạt của từng hành vi đều thuộc thẩm quyền thì vẫn thuộc thẩm quyền xử phạt của người đó; nếu có hành vi vượt quá thẩm quyền thì phải chuyển toàn bộ hồ sơ cho người có thẩm quyền cao hơn",
      "Người phát hiện đầu tiên có quyền xử phạt tất cả các hành vi bất kể tổng mức tiền phạt vượt thẩm quyền",
      "Phải tách riêng từng hành vi để từng cấp ra từng quyết định xử phạt độc lập nhau",
      "Người có thẩm quyền xử phạt các hành vi thuộc thẩm quyền của mình; phần hành vi vượt thẩm quyền mới chuyển cho cấp có thẩm quyền xử phạt độc lập"
    ],
    "correct": "Nếu hình thức, mức xử phạt của từng hành vi đều thuộc thẩm quyền thì vẫn thuộc thẩm quyền xử phạt của người đó; nếu có hành vi vượt quá thẩm quyền thì phải chuyển toàn bộ hồ sơ cho người có thẩm quyền cao hơn",
    "explanation": "Điều 52 Luật Xử lý vi phạm hành chính quy định nguyên tắc xác định thẩm quyền khi xử phạt một người thực hiện nhiều hành vi vi phạm."
  },
  {
    "id": "KL_007",
    "question": "Thời hạn ra quyết định xử phạt vi phạm hành chính kể từ ngày lập biên bản VPHC trong lĩnh vực lâm nghiệp được quy định như thế nào?",
    "options": [
      "07 ngày làm việc; vụ việc có giải trình hoặc có nhiều tình tiết phức tạp thì tối đa không quá 01 tháng (trường hợp đặc biệt phức tạp gia hạn tối đa 02 tháng)",
      "05 ngày làm việc đối với mọi vụ việc và không được phép gia hạn trong bất kỳ trường hợp nào",
      "10 ngày làm việc; vụ việc có giải trình hoặc có nhiều tình tiết phức tạp thì tối đa không quá 45 ngày (trường hợp đặc biệt phức tạp gia hạn tối đa 03 tháng)",
      "30 ngày làm việc kể từ ngày lập biên bản vi phạm hành chính"
    ],
    "correct": "07 ngày làm việc; vụ việc có giải trình hoặc có nhiều tình tiết phức tạp thì tối đa không quá 01 tháng (trường hợp đặc biệt phức tạp gia hạn tối đa 02 tháng)",
    "explanation": "Khoản 1 Điều 66 Luật Xử lý vi phạm hành chính (sửa đổi, bổ sung 2020) quy định thời hạn ra quyết định xử phạt là 07 ngày làm việc; vụ việc phức tạp/giải trình không quá 01 tháng, đặc biệt phức tạp gia hạn không quá 02 tháng."
  },
  {
    "id": "KL_008",
    "question": "Trường hợp vụ vi phạm hành chính vượt quá thẩm quyền xử phạt của người lập biên bản thì thời hạn chuyển hồ sơ cho người có thẩm quyền xử phạt là bao lâu?",
    "options": [
      "Trong thời hạn 02 ngày làm việc kể từ ngày lập biên bản vi phạm hành chính",
      "Trong thời hạn 05 ngày làm việc kể từ ngày lập biên bản vi phạm hành chính",
      "Trong thời hạn 24 giờ kể từ thời điểm phát hiện hành vi vi phạm",
      "Trong thời hạn 03 ngày làm việc kể từ ngày lập biên bản vi phạm hành chính"
    ],
    "correct": "Trong thời hạn 02 ngày làm việc kể từ ngày lập biên bản vi phạm hành chính",
    "explanation": "Điểm a Khoản 9 Điều 12 Nghị định số 118/2021/NĐ-CP: Việc chuyển biên bản vi phạm hành chính và các tài liệu khác cho người có thẩm quyền để xử phạt phải được thực hiện trong thời hạn 02 ngày làm việc, kể từ ngày lập biên bản (trường hợp biên bản được lập tại vùng sâu, vùng xa, biên giới, miền núi, hải đảo mà việc đi lại gặp khó khăn thì thời hạn chuyển không quá 05 ngày làm việc)."
  },
  {
    "id": "KL_009",
    "question": "Theo Điều 164 Bộ luật Tố tụng hình sự, khi phát hiện tội phạm lâm nghiệp quả tang thuộc tội ít nghiêm trọng, Hạt trưởng Hạt Kiểm lâm có thẩm quyền tố tụng như thế nào?",
    "options": [
      "Quyết định khởi tố vụ án hình sự, lấy lời khai, khám nghiệm hiện trường, tạm giữ tài liệu tang vật và chuyển hồ sơ cho Viện kiểm sát có thẩm quyền trong thời hạn 07 ngày",
      "Khởi tố bị can, bắt tạm giam người phạm tội trong thời hạn 03 tháng để điều tra độc lập",
      "Chỉ được lập biên bản vi phạm rồi chuyển ngay cho Công an cấp xã, cấp tỉnh trong 24 giờ mà không được khởi tố vụ án",
      "Quyết định khởi tố vụ án hình sự, lấy lời khai, khám nghiệm hiện trường và chuyển hồ sơ cho Cơ quan điều tra Công an có thẩm quyền trong thời hạn 15 ngày"
    ],
    "correct": "Quyết định khởi tố vụ án hình sự, lấy lời khai, khám nghiệm hiện trường, tạm giữ tài liệu tang vật và chuyển hồ sơ cho Viện kiểm sát có thẩm quyền trong thời hạn 07 ngày",
    "explanation": "Theo Khoản 1 Điều 164 Bộ luật Tố tụng hình sự năm 2015, Cục Kiểm lâm, Chi cục Kiểm lâm, Hạt Kiểm lâm có quyền khởi tố vụ án hình sự đối với tội ít nghiêm trọng quả tang, thực hiện hoạt động điều tra ban đầu và chuyển hồ sơ cho Viện kiểm sát có thẩm quyền trong thời hạn 07 ngày."
  },
  {
    "id": "KL_010",
    "question": "Việc tạm giữ tang vật, phương tiện vi phạm hành chính theo thủ tục hành chính trong lĩnh vực lâm nghiệp chỉ được áp dụng trong những trường hợp nào?",
    "options": [
      "Để xác minh tình tiết mà nếu không tạm giữ thì không có căn cứ ra quyết định xử phạt, hoặc để ngăn chặn ngay hành vi, hoặc bảo đảm thi hành quyết định phạt tiền",
      "Áp dụng bắt buộc đối với tất cả các vụ việc vi phạm hành chính bất kể mức phạt nặng hay nhẹ",
      "Chỉ áp dụng khi đối tượng vi phạm không chịu ký vào biên bản vi phạm hành chính",
      "Chỉ được áp dụng khi đối tượng không có nơi cư trú rõ ràng hoặc không có khả năng nộp tiền phạt tại kho bạc"
    ],
    "correct": "Để xác minh tình tiết mà nếu không tạm giữ thì không có căn cứ ra quyết định xử phạt, hoặc để ngăn chặn ngay hành vi, hoặc bảo đảm thi hành quyết định phạt tiền",
    "explanation": "Khoản 1 Điều 125 Luật Xử lý vi phạm hành chính quy định chặt chẽ các trường hợp được phép tạm giữ tang vật, phương tiện nhằm tránh lạm quyền xâm phạm tài sản công dân."
  },
  {
    "id": "KL_011",
    "question": "Khi tiến hành đo tính thể tích gỗ tròn bị rỗng ruột theo quy định tại Phụ lục I Thông tư 26/2025/TT-BNNMT, Kiểm lâm viên phải thực hiện phương pháp nào?",
    "options": [
      "Tính tổng thể tích toàn bộ khúc gỗ tròn theo công thức hình trụ, sau đó trừ đi thể tích phần ruột rỗng (tính theo đường kính và chiều sâu của phần rỗng)",
      "Chỉ đo phần gỗ đặc bên ngoài và nhân đôi kết quả tính toán",
      "Tính thể tích toàn bộ khúc gỗ theo công thức hình trụ, sau đó giảm trừ cố định 15% tổng thể tích coi như hao hụt tự nhiên",
      "Quy đổi toàn bộ khúc gỗ sang đơn vị ster (khối xếp gióng) để tính thể tích thương phẩm"
    ],
    "correct": "Tính tổng thể tích toàn bộ khúc gỗ tròn theo công thức hình trụ, sau đó trừ đi thể tích phần ruột rỗng (tính theo đường kính và chiều sâu của phần rỗng)",
    "explanation": "Khoản 2 Điều 4 và Phụ lục I Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư 84/2025/TT-BNNMT): Ghi nhận khối lượng phần rỗng ruột, mục để xác định và khấu trừ thể tích phần rỗng ruột khỏi thể tích khúc gỗ nguyên."
  },
  {
    "id": "KL_012",
    "question": "Khi kiểm tra lâm sản trên phương tiện giao thông đường bộ đang lưu thông, tổ công tác Kiểm lâm phải tuân thủ điều kiện pháp lý nào sau đây?",
    "options": [
      "Phải có Quyết định dừng phương tiện/Kế hoạch tuần tra được cấp có thẩm quyền phê duyệt; công chức mặc trang phục, đeo số hiệu Kiểm lâm và xuất trình thẻ",
      "Kiểm lâm viên đi tuần một mình có quyền tự ý ra hiệu lệnh dừng mọi loại xe tải để kiểm tra bất kỳ lúc nào",
      "Chỉ được kiểm tra khi có tin báo của người dân và phải có mặt của Viện kiểm sát nhân dân",
      "Phải có sự chứng kiến và ký biên bản liên ngành của lực lượng Cảnh sát giao thông đang làm nhiệm vụ trên tuyến đường"
    ],
    "correct": "Phải có Quyết định dừng phương tiện/Kế hoạch tuần tra được cấp có thẩm quyền phê duyệt; công chức mặc trang phục, đeo số hiệu Kiểm lâm và xuất trình thẻ",
    "explanation": "Khoản 2 Điều 104 Luật Lâm nghiệp 2017 và Nghị định số 01/2019/NĐ-CP (sửa đổi bởi Nghị định số 42/2026/NĐ-CP): Việc dừng phương tiện kiểm tra lâm sản phải có quyết định/kế hoạch tuần tra được người có thẩm quyền phê duyệt, thực hiện đúng lễ tiết tác phong, trang phục, số hiệu Kiểm lâm."
  },
  {
    "id": "KL_013",
    "question": "Thời hạn hoàn thành việc kiểm tra thực tế lâm sản và xác nhận Bảng kê lâm sản của Cơ quan Kiểm lâm sở tại (trường hợp phải kiểm tra thực tế) là bao lâu?",
    "options": [
      "Không quá 03 ngày làm việc kể từ ngày nhận được hồ sơ đề nghị hợp lệ",
      "Không quá 02 ngày làm việc kể từ ngày nhận được hồ sơ đề nghị hợp lệ",
      "Không quá 05 ngày làm việc để phối hợp với công an địa phương",
      "Không quá 04 ngày làm việc kể từ ngày nhận được hồ sơ đề nghị hợp lệ"
    ],
    "correct": "Không quá 03 ngày làm việc kể từ ngày nhận được hồ sơ đề nghị hợp lệ",
    "explanation": "Điểm c Khoản 7 Điều 5 Thông tư số 26/2025/TT-BNNMT (sửa đổi, bổ sung bởi Thông tư 84/2025/TT-BNNMT, hợp nhất tại VBHN 04/VBHN-BNNMT): Trường hợp cần xác minh nguồn gốc lâm sản có nhiều nội dung phức tạp, thời hạn hoàn thành xác minh và xác nhận tối đa không quá 03 ngày làm việc."
  },
  {
    "id": "KL_014",
    "question": "Để được cơ quan Kiểm lâm xếp loại Doanh nghiệp chế biến và xuất khẩu gỗ Nhóm I theo Nghị định 102/2020/NĐ-CP, doanh nghiệp phải đáp ứng tiêu chuẩn cốt lõi nào?",
    "options": [
      "Tuân thủ đầy đủ quy định pháp luật trong hoạt động ít nhất 01 năm kể từ ngày đăng ký thành lập, thiết lập và vận hành hệ thống bảo đảm gỗ hợp pháp (DDS) và lưu trữ hồ sơ đầy đủ",
      "Có vốn điều lệ đăng ký kinh doanh từ 50 tỷ đồng trở lên và sở hữu tối thiểu 03 nhà máy cưa xẻ gỗ",
      "Chỉ cần có hợp đồng xuất khẩu gỗ sang thị trường Hoa Kỳ hoặc Châu Âu trong năm hiện tại",
      "Tuân thủ đầy đủ quy định pháp luật ít nhất 06 tháng kể từ ngày thành lập, có chứng chỉ chuỗi hành trình sản phẩm FSC-CoC và xuất khẩu sang EU"
    ],
    "correct": "Tuân thủ đầy đủ quy định pháp luật trong hoạt động ít nhất 01 năm kể từ ngày đăng ký thành lập, thiết lập và vận hành hệ thống bảo đảm gỗ hợp pháp (DDS) và lưu trữ hồ sơ đầy đủ",
    "explanation": "Điểm a Khoản 1 Điều 12 Nghị định số 102/2020/NĐ-CP (sửa đổi, bổ sung bởi Nghị định số 120/2024/NĐ-CP): Tiêu chí Doanh nghiệp Nhóm I là tuân thủ đầy đủ quy định pháp luật, hoạt động ít nhất 01 năm kể từ ngày đăng ký thành lập doanh nghiệp, vận hành hệ thống bảo đảm gỗ hợp pháp (DDS) và lưu trữ hồ sơ đầy đủ."
  },
  {
    "id": "KL_015",
    "question": "Theo Nghị định 156/2018/NĐ-CP (sửa đổi bởi Nghị định 91/2024/NĐ-CP và Nghị định 42/2026/NĐ-CP), Phương án phòng cháy và chữa cháy rừng do chủ rừng là tổ chức lập phải gửi đến cơ quan nào để tham gia ý kiến?",
    "options": [
      "Cơ quan Kiểm lâm sở tại và Công an cấp xã",
      "Cơ quan Cảnh sát PCCC&CNCH cấp tỉnh và UBND cấp tỉnh",
      "Sở Tài chính và Sở Kế hoạch và Đầu tư",
      "Chi cục Kiểm lâm cấp tỉnh và Ủy ban nhân dân cấp xã"
    ],
    "correct": "Cơ quan Kiểm lâm sở tại và Công an cấp xã",
    "explanation": "Khoản 2 Điều 45 Nghị định số 156/2018/NĐ-CP (sửa đổi, bổ sung bởi Nghị định 91/2024/NĐ-CP và Nghị định 42/2026/NĐ-CP): Phương án phòng cháy và chữa cháy rừng do tổ chức lập phải gửi đến cơ quan Kiểm lâm sở tại, Công an cấp xã tham gia ý kiến; chủ rừng tự phê duyệt và tổ chức thực hiện phương án."
  },
  {
    "id": "KL_016",
    "question": "Khi phát hiện hành vi phá rừng tự nhiên với quy mô diện tích lớn, trách nhiệm đầu tiên của Kiểm lâm địa bàn là gì?",
    "options": [
      "Báo cáo ngay Chủ tịch UBND cấp xã và Hạt trưởng Hạt Kiểm lâm; lập biên bản kiểm tra ban đầu, bảo vệ hiện trường và phối hợp các lực lượng liên quan ngăn chặn ngay hành vi",
      "Tự mình truy đuổi các đối tượng khả nghi vào sâu trong rừng mà không báo cho ai biết",
      "Chỉ đạo kiểm tra đo đếm sơ bộ rồi chờ đến kỳ giao ban tháng của Hạt Kiểm lâm mới tổng hợp gửi báo cáo",
      "Tự ý phát dọn hiện trường để kiểm tra xem cây rừng bị chặt hạ có mọc lại chồi non hay không"
    ],
    "correct": "Báo cáo ngay Chủ tịch UBND cấp xã và Hạt trưởng Hạt Kiểm lâm; lập biên bản kiểm tra ban đầu, bảo vệ hiện trường và phối hợp các lực lượng liên quan ngăn chặn ngay hành vi",
    "explanation": "Căn cứ Điều 104 Luật Lâm nghiệp năm 2017, Nghị định số 01/2019/NĐ-CP (sửa đổi bởi Nghị định số 42/2026/NĐ-CP) và Quy chế Kiểm lâm địa bàn: Khi phát hiện vi phạm, Kiểm lâm địa bàn phải lập tức báo cáo Chủ tịch UBND cấp xã và lãnh đạo Hạt Kiểm lâm, lập hồ sơ ban đầu và bảo vệ hiện trường."
  },
  {
    "id": "KL_017",
    "question": "Biên bản vi phạm hành chính trong lĩnh vực lâm nghiệp lập không có sự chứng kiến hoặc không có chữ ký của người vi phạm có giá trị pháp lý không?",
    "options": [
      "Có giá trị pháp lý nếu có chữ ký của đại diện chính quyền cấp xã hoặc chữ ký của ít nhất 01 người chứng kiến xác nhận việc người vi phạm từ chối ký/vắng mặt",
      "Chỉ có giá trị nếu cơ quan Kiểm lâm tiến hành niêm yết công khai biên bản tại trụ sở UBND cấp xã trong thời hạn 03 ngày",
      "Vẫn có giá trị tuyệt đối mà không cần chữ ký của bất kỳ ai khác ngoài Kiểm lâm viên",
      "Chỉ có giá trị nếu người vi phạm gửi văn bản xin lỗi cơ quan Kiểm lâm sau đó"
    ],
    "correct": "Có giá trị pháp lý nếu có chữ ký của đại diện chính quyền cấp xã hoặc chữ ký của ít nhất 01 người chứng kiến xác nhận việc người vi phạm từ chối ký/vắng mặt",
    "explanation": "Khoản 2 Điều 58 Luật Xử lý vi phạm hành chính: Nếu người vi phạm không ký, biên bản phải có chữ ký đại diện chính quyền cấp xã hoặc ít nhất 01 người chứng kiến xác nhận."
  },
  {
    "id": "KL_018",
    "question": "Thời điểm chốt số liệu theo dõi diễn biến rừng hàng năm và thời hạn Ủy ban nhân dân cấp tỉnh công bố hiện trạng rừng là khi nào?",
    "options": [
      "Chốt số liệu vào ngày 31 tháng 12 hàng năm; Chủ tịch UBND cấp tỉnh công bố hiện trạng rừng trước ngày 28 tháng 02 năm sau",
      "Chốt số liệu vào ngày 31 tháng 12 hàng năm; Chủ tịch UBND cấp tỉnh công bố hiện trạng rừng trước ngày 31 tháng 3 năm sau",
      "Chốt số liệu vào ngày 30 tháng 6 hàng năm; Chủ tịch UBND cấp tỉnh công bố hiện trạng rừng trước ngày 31 tháng 8",
      "Chốt số liệu vào ngày 31 tháng 12 hàng năm; Chủ tịch UBND cấp tỉnh công bố hiện trạng rừng trước ngày 31 tháng 01 năm sau"
    ],
    "correct": "Chốt số liệu vào ngày 31 tháng 12 hàng năm; Chủ tịch UBND cấp tỉnh công bố hiện trạng rừng trước ngày 28 tháng 02 năm sau",
    "explanation": "Điểm d Khoản 4 Điều 19 Thông tư số 16/2025/TT-BNNMT quy định thời điểm chốt số liệu diễn biến rừng là 31/12 và Chủ tịch UBND cấp tỉnh quyết định công bố hiện trạng rừng cấp tỉnh trước ngày 28 tháng 02 năm sau (hạn trước 31/3 là thời hạn Bộ NN&MT công bố toàn quốc)."
  },
  {
    "id": "KL_019",
    "question": "Xử lý tang vật là cá thể động vật rừng còn sống tạm giữ trong các vụ vi phạm hành chính phải tuân thủ nguyên tắc cấp bách nào?",
    "options": [
      "Phải bàn giao ngay cho cơ quan Thú y hoặc Trung tâm cứu hộ động vật hoang dã để chăm sóc, cứu hộ kịp thời; lập biên bản bàn giao chặt chẽ",
      "Nhốt tại trụ sở Hạt Kiểm lâm cho đến khi có quyết định xử phạt vi phạm hành chính có hiệu lực",
      "Đấu giá bán ngay cho người dân địa phương để nộp tiền vào kho bạc nhà nước",
      "Tạm lưu giữ tại kho tang vật của Hạt Kiểm lâm tối đa 15 ngày để chờ xác minh chủ sở hữu trước khi chuyển giao cứu hộ"
    ],
    "correct": "Phải bàn giao ngay cho cơ quan Thú y hoặc Trung tâm cứu hộ động vật hoang dã để chăm sóc, cứu hộ kịp thời; lập biên bản bàn giao chặt chẽ",
    "explanation": "Khoản 1, Khoản 2 Điều 22 Thông tư số 26/2025/TT-BNNMT (sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT): Động vật rừng sống là tang vật trong quá trình tạm giữ phải được nuôi dưỡng, chăm sóc, bảo đảm vệ sinh, an toàn. Trường hợp cơ quan tạm giữ không đủ điều kiện thì tạm giao cho cơ quan chuyên ngành hoặc cơ sở cứu hộ, cơ sở có đủ điều kiện để nuôi dưỡng, bảo quản và lập Biên bản theo Mẫu số 22 Phụ lục II."
  },
  {
    "id": "KL_020",
    "question": "Theo hướng dẫn điều tra, dự tính dự báo sâu bệnh hại rừng (Mục III.3.4 Văn bản số 230/SNNMT-KL ngày 15/01/2026), mức độ bị hại 'Nặng' của lâm phần được xác định khi Chỉ số sâu, bệnh hại R (%) (hoặc tỷ lệ bộ phận tán lá bị hại) nằm trong khoảng nào?",
    "options": [
      "Chỉ số sâu, bệnh hại R (%) từ 10% đến dưới 25%",
      "Chỉ số sâu, bệnh hại R (%) từ 25% đến dưới 50%",
      "Chỉ số sâu, bệnh hại R (%) trên 50% đến dưới 75% (50% < R < 75%)",
      "Chỉ số sâu, bệnh hại R (%) từ 75% trở lên (R >= 75%)"
    ],
    "correct": "Chỉ số sâu, bệnh hại R (%) trên 50% đến dưới 75% (50% < R < 75%)",
    "explanation": "Căn cứ Điều 40 Luật Lâm nghiệp năm 2017, Mục III.3.4 Văn bản số 230/SNNMT-KL ngày 15/01/2026 của Sở Nông nghiệp và Môi trường tỉnh Tuyên Quang và Tiêu chuẩn quốc gia về điều tra sâu bệnh hại lâm nghiệp: Tỷ lệ cây bị hại ký hiệu là P (%), còn phân cấp mức độ bị hại của lâm phần được xác định theo Chỉ số sâu, bệnh hại R (%): Hại nhẹ khi R <= 25%; Hại trung bình khi 25% < R <= 50%; Hại nặng khi 50% < R < 75%; Hại rất nặng khi R >= 75%."
  },
  {
    "id": "KL_021",
    "question": "Công chức Kiểm lâm khi thực hiện nhiệm vụ tuần tra rừng được sử dụng vũ khí quân dụng và công cụ hỗ trợ trong trường hợp nào?",
    "options": [
      "Đã được tập huấn, cấp Giấy phép sử dụng vũ khí/chứng chỉ chuyên môn và chỉ nổ súng phòng vệ chính đáng theo đúng quy định của Luật Quản lý, sử dụng vũ khí, vật liệu nổ",
      "Được quyền nổ súng vào bất kỳ đối tượng nào bỏ chạy khi thấy bóng dáng lực lượng Kiểm lâm",
      "Được quyền nổ súng cảnh cáo đối với mọi hành vi không chấp hành hiệu lệnh dừng phương tiện của tổ tuần tra Kiểm lâm",
      "Chỉ cần có thẻ công chức Kiểm lâm là được toàn quyền sử dụng súng không cần giấy phép"
    ],
    "correct": "Đã được tập huấn, cấp Giấy phép sử dụng vũ khí/chứng chỉ chuyên môn và chỉ nổ súng phòng vệ chính đáng theo đúng quy định của Luật Quản lý, sử dụng vũ khí, vật liệu nổ",
    "explanation": "Căn cứ Điều 22, Điều 23 Luật Quản lý, sử dụng vũ khí, vật liệu nổ và công cụ hỗ trợ năm 2024 (Luật số 42/2024/QH15) (sửa đổi, bổ sung năm 2024), Điểm c Khoản 2 Điều 104 và Điểm a Khoản 1 Điều 106 Luật Lâm nghiệp năm 2017: Kiểm lâm được trang bị, sử dụng vũ khí, công cụ hỗ trợ khi thi hành công vụ theo đúng quy định."
  },
  {
    "id": "KL_022",
    "question": "Thời hạn và hình thức yêu cầu giải trình trực tiếp đối với cá nhân, tổ chức vi phạm hành chính có mức phạt tiền lớn trong lâm nghiệp được quy định ra sao?",
    "options": [
      "Văn bản yêu cầu giải trình phải gửi trong thời hạn 02 ngày làm việc kể từ ngày lập biên bản; việc giải trình tổ chức trong thời hạn không quá 05 ngày làm việc",
      "Văn bản yêu cầu giải trình phải gửi trong thời hạn 03 ngày làm việc kể từ ngày lập biên bản; việc giải trình tổ chức trong thời hạn không quá 07 ngày làm việc",
      "Phải gửi đơn giải trình lên Bộ Nông nghiệp và Môi trường trong vòng 24 giờ",
      "Chỉ được giải trình bằng văn bản qua đường bưu điện và không có hình thức giải trình trực tiếp"
    ],
    "correct": "Văn bản yêu cầu giải trình phải gửi trong thời hạn 02 ngày làm việc kể từ ngày lập biên bản; việc giải trình tổ chức trong thời hạn không quá 05 ngày làm việc",
    "explanation": "Điều 61 Luật Xử lý vi phạm hành chính: Văn bản yêu cầu giải trình gửi trong 02 ngày làm việc; người có thẩm quyền tổ chức phiên giải trình trong 05 ngày làm việc."
  },
  {
    "id": "KL_023",
    "question": "Phương tiện vận tải của bên thứ ba bị người khác thuê để chở lâm sản trái pháp luật sẽ bị xử lý như thế nào theo Luật XLVPHC?",
    "options": [
      "Không tịch thu phương tiện nếu chủ sở hữu chứng minh được mình không có lỗi (không biết và không thể biết phương tiện bị sử dụng để vi phạm); người vi phạm phải nộp số tiền tương đương giá trị phương tiện",
      "Tịch thu ngay lập tức phương tiện mà không cần xem xét chủ sở hữu có biết hay không",
      "Tạm giữ phương tiện trong thời hạn 06 tháng và xử phạt chủ phương tiện số tiền tương đương 50% giá trị phương tiện",
      "Trả lại xe vô điều kiện mà không yêu cầu người có hành vi vi phạm bồi hoàn bất kỳ khoản tiền nào"
    ],
    "correct": "Không tịch thu phương tiện nếu chủ sở hữu chứng minh được mình không có lỗi (không biết và không thể biết phương tiện bị sử dụng để vi phạm); người vi phạm phải nộp số tiền tương đương giá trị phương tiện",
    "explanation": "Khoản 1 Điều 126 Luật XLVPHC: Phương tiện bị chiếm đoạt, sử dụng trái phép không bị tịch thu nếu chủ sở hữu không có lỗi; người vi phạm phải nộp khoản tiền tương đương giá trị phương tiện."
  },
  {
    "id": "KL_024",
    "question": "Thời hiệu xử phạt vi phạm hành chính đối với các hành vi vi phạm trong lĩnh vực lâm nghiệp được quy định như thế nào?",
    "options": [
      "Thời hiệu xử phạt vi phạm hành chính trong lĩnh vực lâm nghiệp là 02 năm đối với mọi hành vi vi phạm",
      "Thời hiệu là 01 năm đối với mọi hành vi vi phạm hành chính trong lâm nghiệp",
      "Thời hiệu là 06 tháng kể từ ngày lập biên bản vi phạm hành chính",
      "Thời hiệu là 01 năm đối với vi phạm thủ tục hồ sơ lâm sản; 02 năm đối với hành vi khai thác, phá rừng, mua bán lâm sản trái pháp luật"
    ],
    "correct": "Thời hiệu xử phạt vi phạm hành chính trong lĩnh vực lâm nghiệp là 02 năm đối với mọi hành vi vi phạm",
    "explanation": "Khoản 1 Điều 5 Nghị định số 146/2026/NĐ-CP và Điểm a Khoản 1 Điều 6 Luật Xử lý vi phạm hành chính (sửa đổi, bổ sung năm 2020): Thời hiệu xử phạt vi phạm hành chính trong lĩnh vực lâm nghiệp là 02 năm."
  },
  {
    "id": "KL_025",
    "question": "Hành vi khai thác gỗ rừng tự nhiên vượt quá 10% chỉ tiêu sản lượng ghi trong Giấy phép khai thác hợp pháp bị xử lý về hành vi nào?",
    "options": [
      "Hành vi khai thác rừng trái quy định của pháp luật (vi phạm quy chế khai thác) đối với phần sản lượng vượt chỉ tiêu",
      "Hành vi trộm cắp tài sản của tổ chức, cá nhân",
      "Không bị xử lý vì đã có giấy phép khai thác ban đầu",
      "Hành vi vi phạm quy định về quản lý hồ sơ lâm sản trong khai thác rừng và chỉ bị phạt cảnh cáo"
    ],
    "correct": "Hành vi khai thác rừng trái quy định của pháp luật (vi phạm quy chế khai thác) đối với phần sản lượng vượt chỉ tiêu",
    "explanation": "Khai thác vượt chỉ tiêu, sản lượng cho phép cấu thành hành vi khai thác rừng tự nhiên trái pháp luật theo Điều 16 (hoặc Điều 14, 15) Nghị định số 146/2026/NĐ-CP đối với phần sản lượng khai thác vượt chỉ tiêu."
  },
  {
    "id": "KL_026",
    "question": "Quy định về thẩm quyền điều động lực lượng Kiểm lâm phối hợp liên khu vực trong phạm vi một tỉnh thuộc về ai?",
    "options": [
      "Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh",
      "Hạt trưởng Hạt Kiểm lâm nơi xảy ra vụ việc phức tạp",
      "Giám đốc Sở Nông nghiệp và Môi trường",
      "Đội trưởng Đội Kiểm lâm cơ động và PCCCR"
    ],
    "correct": "Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh",
    "explanation": "Căn cứ Điều 105 Luật Lâm nghiệp năm 2017, Nghị định số 01/2019/NĐ-CP (sửa đổi bởi Nghị định số 42/2026/NĐ-CP) và Quyết định số 1334/QĐ-SNNMT: Chi cục trưởng Chi cục Kiểm lâm tỉnh có thẩm quyền điều động nhân lực, phương tiện giữa các Hạt Kiểm lâm và Đội cơ động trên phạm vi toàn tỉnh."
  },
  {
    "id": "KL_027",
    "question": "Khi lập hồ sơ xử phạt vi phạm hành chính, việc xác định giá trị tang vật vi phạm để làm căn cứ xác định khung tiền phạt và thẩm quyền xử phạt do ai thực hiện?",
    "options": [
      "Người có thẩm quyền đang giải quyết vụ việc tự xác định căn cứ vào giá niêm yết/thị trường hoặc thành lập Hội đồng định giá tang vật theo quy định",
      "Chủ lâm sản vi phạm tự kê khai giá mua trên hóa đơn bán lẻ",
      "Chỉ do Tòa án nhân dân cấp tỉnh ra quyết định định giá tài sản",
      "Cơ quan thuế khu vực ra văn bản xác định giá trị tang vật tính theo bảng giá tính thuế tài nguyên hiện hành"
    ],
    "correct": "Người có thẩm quyền đang giải quyết vụ việc tự xác định căn cứ vào giá niêm yết/thị trường hoặc thành lập Hội đồng định giá tang vật theo quy định",
    "explanation": "Điều 60 Luật Xử lý vi phạm hành chính quy định các nguyên tắc và trình tự định giá tang vật vi phạm hành chính làm căn cứ xác định khung tiền phạt và thẩm quyền xử phạt."
  },
  {
    "id": "KL_028",
    "question": "Trường hợp người bị xử phạt vi phạm hành chính không đồng ý với Quyết định xử phạt của Hạt trưởng Hạt Kiểm lâm thì quyền khiếu nại, khởi kiện được thực hiện thế nào?",
    "options": [
      "Khiếu nại lần đầu đến Hạt trưởng Hạt Kiểm lâm hoặc khởi kiện vụ án hành chính tại Tòa án nhân dân theo Luật Tố tụng hành chính",
      "Bắt buộc phải gửi đơn khiếu nại lên Bộ Nông nghiệp và Môi trường trước khi kiện ra Tòa",
      "Không có quyền khiếu nại nếu quyết định xử phạt đã đóng dấu đỏ của Hạt Kiểm lâm",
      "Bắt buộc phải nộp đủ số tiền phạt vào Kho bạc trước rồi mới được quyền làm đơn khiếu nại"
    ],
    "correct": "Khiếu nại lần đầu đến Hạt trưởng Hạt Kiểm lâm hoặc khởi kiện vụ án hành chính tại Tòa án nhân dân theo Luật Tố tụng hành chính",
    "explanation": "Căn cứ Điều 7 Luật Khiếu nại năm 2011 và Điều 31 Luật Tố tụng hành chính năm 2015: Người bị xử phạt có quyền khiếu nại lần đầu đến người đã ra quyết định hoặc khởi kiện vụ án hành chính tại Tòa án nhân dân có thẩm quyền."
  },
  {
    "id": "KL_029",
    "question": "Trách nhiệm của công chức Kiểm lâm khi phát hiện dấu hiệu tội phạm hình sự trong quá trình thi hành công vụ kiểm tra lâm luật là gì?",
    "options": [
      "Phải chuyển ngay hồ sơ, tài liệu, tang vật cho Cơ quan điều tra có thẩm quyền để giải quyết theo quy định tố tụng hình sự, không được giữ lại để xử phạt hành chính",
      "Tự ý thương lượng với người vi phạm để nộp phạt hành chính mức tối đa rồi cho qua",
      "Tịch thu toàn bộ tang vật bán thanh lý trước khi báo công an",
      "Tiến hành xử phạt vi phạm hành chính mức cao nhất, nếu đối tượng tái phạm mới chuyển hồ sơ sang Cơ quan điều tra"
    ],
    "correct": "Phải chuyển ngay hồ sơ, tài liệu, tang vật cho Cơ quan điều tra có thẩm quyền để giải quyết theo quy định tố tụng hình sự, không được giữ lại để xử phạt hành chính",
    "explanation": "Điều 62 Luật XLVPHC nghiêm cấm việc giữ lại vụ vi phạm có dấu hiệu tội phạm để xử lý vi phạm hành chính; phải chuyển ngay cho cơ quan tiến hành tố tụng hình sự."
  },
  {
    "id": "KL_030",
    "question": "Trong trường hợp nào công chức Kiểm lâm đang thi hành nhiệm vụ bị coi là có hành vi tiêu cực, vi phạm pháp luật nghiêm trọng?",
    "options": [
      "Bao che, hợp thức hóa hồ sơ lâm sản bất hợp pháp, dung túng người phá rừng hoặc nhận tiền/lợi ích vật chất của đối tượng kiểm tra",
      "Yêu cầu lái xe xuất trình đầy đủ bảng kê lâm sản hợp lệ trước khi cho xe tiếp tục lưu thông",
      "Lập biên bản vi phạm hành chính đối với hành vi vi phạm pháp luật lâm nghiệp",
      "Từ chối ký xác nhận Bảng kê lâm sản khi chủ lâm sản chưa nộp đủ giấy tờ chứng minh nguồn gốc theo quy định"
    ],
    "correct": "Bao che, hợp thức hóa hồ sơ lâm sản bất hợp pháp, dung túng người phá rừng hoặc nhận tiền/lợi ích vật chất của đối tượng kiểm tra",
    "explanation": "Căn cứ Luật Cán bộ, công chức năm 2025 (Luật số 80/2025/QH15 có hiệu lực từ ngày 01/7/2025, thay thế Luật Cán bộ, công chức năm 2008), Khoản 8 Điều 9 Luật Lâm nghiệp năm 2017 và Điều 20 Luật Phòng, chống tham nhũng năm 2018: Nghiêm cấm công chức Kiểm lâm lợi dụng chức vụ, quyền hạn để bao che, hợp thức hóa hồ sơ lâm sản bất hợp pháp, dung túng hành vi phá rừng hoặc nhận tiền, tài sản, lợi ích vật chất trái phép từ đối tượng kiểm tra."
  },
  {
    "id": "KL_031",
    "question": "Cơ quan nào có thẩm quyền quyết định chủ trương chuyển mục đích sử dụng rừng sang mục đích khác đối với dự án trên địa bàn tỉnh?",
    "options": [
      "Hội đồng nhân dân cấp tỉnh",
      "Chi cục Kiểm lâm cấp tỉnh",
      "Giám đốc Sở Nông nghiệp và Môi trường",
      "Ủy ban nhân dân cấp tỉnh"
    ],
    "correct": "Hội đồng nhân dân cấp tỉnh",
    "explanation": "Điều 20 Luật Lâm nghiệp (sửa đổi) và Nghị định 156/2018/NĐ-CP (hợp nhất) quy định HĐND cấp tỉnh có thẩm quyền quyết định chủ trương chuyển mục đích sử dụng rừng sang mục đích khác trên địa bàn."
  },
  {
    "id": "KL_032",
    "question": "Cơ quan nào chủ trì tiếp nhận và tổ chức thẩm định hồ sơ đề nghị quyết định chủ trương chuyển mục đích sử dụng rừng sang mục đích khác?",
    "options": [
      "Sở Nông nghiệp và Môi trường",
      "Sở Kế hoạch và Đầu tư",
      "Văn phòng Ủy ban nhân dân cấp tỉnh phối hợp với Sở Kế hoạch và Đầu tư",
      "Hạt Kiểm lâm sở tại"
    ],
    "correct": "Sở Nông nghiệp và Môi trường",
    "explanation": "Khoản 1 Điều 41 Nghị định 156/2018/NĐ-CP (hợp nhất) quy định Sở Nông nghiệp và Môi trường chủ trì tiếp nhận và phối hợp với các cơ quan liên quan thẩm định hồ sơ trình UBND tỉnh, HĐND tỉnh."
  },
  {
    "id": "KL_033",
    "question": "Cơ quan nào có thẩm quyền thực hiện việc đánh giá và phân loại doanh nghiệp chế biến và xuất khẩu gỗ (Nhóm I, Nhóm II)?",
    "options": [
      "Cơ quan Kiểm lâm cấp tỉnh (Chi cục Kiểm lâm)",
      "Hạt Kiểm lâm sở tại",
      "Cục Thuế tỉnh",
      "Chi cục Hải quan khu vực phối hợp với Hiệp hội Gỗ và Lâm sản"
    ],
    "correct": "Cơ quan Kiểm lâm cấp tỉnh (Chi cục Kiểm lâm)",
    "explanation": "Điều 13 Nghị định 102/2020/NĐ-CP (hợp nhất) quy định cơ quan Kiểm lâm cấp tỉnh có trách nhiệm tiếp nhận hồ sơ, đánh giá và quyết định phân loại doanh nghiệp chế biến, xuất khẩu gỗ."
  },
  {
    "id": "KL_034",
    "question": "Theo Luật Lâm nghiệp, Kiểm lâm được quyền dừng phương tiện giao thông vận tải đường bộ khi nào?",
    "options": [
      "Khi có dấu hiệu phương tiện vận chuyển lâm sản trái pháp luật",
      "Kiểm lâm được quyền dừng bất kỳ phương tiện nào để kiểm tra định kỳ",
      "Chỉ được dừng khi có lực lượng Cảnh sát giao thông đi cùng",
      "Chỉ được dừng phương tiện khi có sự phối hợp trực tiếp của lực lượng Cảnh sát giao thông"
    ],
    "correct": "Khi có dấu hiệu phương tiện vận chuyển lâm sản trái pháp luật",
    "explanation": "Khoản 2 Điều 104 Luật Lâm nghiệp năm 2017 và Nghị định số 01/2019/NĐ-CP: Kiểm lâm có quyền dừng, kiểm tra phương tiện giao thông vận tải khi có căn cứ, dấu hiệu vận chuyển lâm sản trái pháp luật để kiểm tra, xử lý theo quy định."
  },
  {
    "id": "KL_035",
    "question": "Kiểm lâm được trang bị, quản lý và sử dụng vũ khí, công cụ hỗ trợ theo quy định của văn bản nào?",
    "options": [
      "Luật Quản lý, sử dụng vũ khí, vật liệu nổ và công cụ hỗ trợ",
      "Quy chế quản lý chuyên môn về trang bị vũ khí do Bộ Nông nghiệp và Môi trường ban hành",
      "Theo sự phân công miệng của Ủy ban nhân dân xã",
      "Kiểm lâm không thuộc đối tượng được trang bị vũ khí"
    ],
    "correct": "Luật Quản lý, sử dụng vũ khí, vật liệu nổ và công cụ hỗ trợ",
    "explanation": "Điểm c Khoản 2 Điều 104 Luật Lâm nghiệp và Điều 12 Nghị định 01/2019/NĐ-CP quy định Kiểm lâm được trang bị, sử dụng vũ khí, CCHT theo quy định của Luật Quản lý, sử dụng vũ khí, VLN và CCHT."
  },
  {
    "id": "KL_036",
    "question": "Theo Quyết định 1334/QĐ-SNNMT, phòng nào của Chi cục Kiểm lâm Tuyên Quang chủ trì tham mưu quản lý giống cây trồng và quản lý rừng bền vững?",
    "options": [
      "Phòng Sử dụng và Phát triển rừng",
      "Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên",
      "Phòng Tổ chức - Hành chính",
      "Phòng Kế hoạch - Tài chính (Sở Nông nghiệp và Môi trường)"
    ],
    "correct": "Phòng Sử dụng và Phát triển rừng",
    "explanation": "Điều 4 Quyết định số 1334/QĐ-SNNMT ngày 24/8/2025 của Sở NN&MT Tuyên Quang quy định Phòng Sử dụng và Phát triển rừng chủ trì tham mưu về phát triển rừng, giống cây trồng, quản lý rừng bền vững."
  },
  {
    "id": "KL_037",
    "question": "Theo Quyết định 1334/QĐ-SNNMT, phòng nào của Chi cục Kiểm lâm Tuyên Quang chủ trì tham mưu xử lý vi phạm hành chính và tố tụng hình sự?",
    "options": [
      "Phòng Điều tra, xử lý vi phạm về lâm nghiệp",
      "Phòng Sử dụng và Phát triển rừng phối hợp với Đội KLCĐ",
      "Phòng Tổ chức - Hành chính",
      "Hạt Kiểm lâm địa bàn"
    ],
    "correct": "Phòng Điều tra, xử lý vi phạm về lâm nghiệp",
    "explanation": "Điều 5 Quyết định số 1334/QĐ-SNNMT quy định Phòng Điều tra, xử lý vi phạm về lâm nghiệp tham mưu công tác pháp chế, điều tra, xử lý VPHC và áp dụng pháp luật tố tụng hình sự thuộc thẩm quyền."
  },
  {
    "id": "KL_038",
    "question": "Theo Quyết định 1334/QĐ-SNNMT, phòng chuyên môn nào thuộc Chi cục Kiểm lâm Tuyên Quang chủ trì tham mưu công tác PCCCR?",
    "options": [
      "Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên",
      "Phòng Sử dụng và Phát triển rừng",
      "Thanh tra Sở Nông nghiệp và Môi trường",
      "Bộ phận Văn thư Chi cục"
    ],
    "correct": "Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên",
    "explanation": "Điều 3 Quyết định số 1334/QĐ-SNNMT quy định Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên chủ trì tham mưu thực hiện công tác quản lý, bảo vệ rừng, bảo tồn đa dạng sinh học và PCCCR."
  },
  {
    "id": "KL_039",
    "question": "Hành vi vận chuyển lâm sản trái pháp luật (gỗ tròn, gỗ xẻ không có hồ sơ hợp pháp) bị xử phạt mức tiền tối đa đối với cá nhân lên tới bao nhiêu theo Nghị định số 146/2026/NĐ-CP?",
    "options": [
      "Lên đến 500.000.000 đồng",
      "Lên đến 250.000.000 đồng",
      "Lên đến 100.000.000 đồng",
      "Lên đến 50.000.000 đồng"
    ],
    "correct": "Lên đến 500.000.000 đồng",
    "explanation": "Căn cứ Khoản 20 Điều 25 Nghị định số 146/2026/NĐ-CP: Mức phạt tiền tối đa đối với hành vi vận chuyển lâm sản trái pháp luật của cá nhân lên đến 500.000.000 đồng (đối với tổ chức vi phạm gấp 02 lần là 1.000.000.000 đồng)."
  },
  {
    "id": "KL_040",
    "question": "Theo Nghị định số 146/2026/NĐ-CP, hành vi vi phạm quy định về phòng cháy và chữa cháy rừng gây cháy rừng bị áp dụng mức phạt tiền tối đa đối với cá nhân là bao nhiêu?",
    "options": [
      "Phạt tiền tối đa đến 500.000.000 đồng",
      "Phạt tiền tối đa đến 250.000.000 đồng",
      "Phạt tiền tối đa đến 100.000.000 đồng",
      "Phạt tiền tối đa đến 150.000.000 đồng"
    ],
    "correct": "Phạt tiền tối đa đến 500.000.000 đồng",
    "explanation": "Căn cứ Khoản 11 Điều 20 Nghị định số 146/2026/NĐ-CP: Mức phạt tiền cao nhất đối với cá nhân có hành vi vi phạm quy định về PCCC rừng gây cháy rừng lên đến 500.000.000 đồng (tổ chức vi phạm là 1.000.000.000 đồng)."
  },
  {
    "id": "KL_041",
    "question": "Khai thác trái phép rừng sản xuất là rừng tự nhiên đối với gỗ thông thường từ khối lượng bao nhiêu m3 thì bị truy cứu TNHS theo Điều 232 BLHS?",
    "options": [
      "Từ 08 m3 trở lên",
      "Từ 10 m3 trở lên",
      "Từ 15 m3 trở lên",
      "Từ 20 m3 trở lên"
    ],
    "correct": "Từ 10 m3 trở lên",
    "explanation": "Điểm b Khoản 1 Điều 232 Bộ luật Hình sự quy định khai thác trái phép rừng sản xuất là rừng tự nhiên từ 10 m3 đến dưới 20 m3 gỗ loài thông thường thì bị truy cứu trách nhiệm hình sự."
  },
  {
    "id": "KL_042",
    "question": "Khai thác trái phép rừng sản xuất là rừng trồng đối với gỗ thông thường từ khối lượng bao nhiêu m3 thì bị truy cứu TNHS theo Điều 232 BLHS?",
    "options": [
      "Từ 25 m3 trở lên",
      "Từ 15 m3 trở lên",
      "Từ 20 m3 trở lên",
      "Từ 30 m3 trở lên"
    ],
    "correct": "Từ 20 m3 trở lên",
    "explanation": "Điểm a Khoản 1 Điều 232 Bộ luật Hình sự quy định khai thác trái phép rừng sản xuất là rừng trồng từ 20 m3 đến dưới 40 m3 gỗ loài thông thường thì cấu thành tội phạm hình sự."
  },
  {
    "id": "KL_043",
    "question": "Khai thác trái phép gỗ loài nguy cấp, quý, hiếm Nhóm IA tại rừng đặc dụng từ bao nhiêu m3 thì bị truy cứu TNHS theo Điều 232 BLHS?",
    "options": [
      "Từ 0,3 m3 trở lên",
      "Từ 0,5 m3 trở lên",
      "Từ 1,0 m3 trở lên",
      "Từ 1,5 m3 trở lên"
    ],
    "correct": "Từ 0,5 m3 trở lên",
    "explanation": "Điểm h Khoản 1 Điều 232 Bộ luật Hình sự quy định khai thác trái phép gỗ Nhóm IA hoặc ưu tiên bảo vệ từ 0,5 m3 đến dưới 01 m3 tại rừng đặc dụng thì bị phạt tù hoặc phạt tiền hình sự."
  },
  {
    "id": "KL_044",
    "question": "Tàng trữ, vận chuyển, mua bán trái phép gỗ thuộc Danh mục Nhóm IA từ khối lượng bao nhiêu m3 thì bị khởi tố theo Điều 232 BLHS?",
    "options": [
      "Từ 2,5 m3 trở lên",
      "Từ 1,0 m3 trở lên",
      "Từ 1,5 m3 trở lên",
      "Từ 2,0 m3 trở lên"
    ],
    "correct": "Từ 1,5 m3 trở lên",
    "explanation": "Điểm k Khoản 1 Điều 232 Bộ luật Hình sự quy định tàng trữ, vận chuyển, chế biến, mua bán trái phép từ 1,5 m3 đến dưới 03 m3 gỗ thuộc Danh mục Nhóm IA hoặc ưu tiên bảo vệ thì bị xử lý hình sự."
  },
  {
    "id": "KL_045",
    "question": "Hành vi săn bắt, giết, nuôi nhốt, vận chuyển động vật hoang dã thuộc Danh mục loài nguy cấp, quý, hiếm được ưu tiên bảo vệ bị truy cứu trách nhiệm hình sự về tội danh nào sau đây?",
    "options": [
      "Tội vi phạm quy định về bảo vệ động vật nguy cấp, quý, hiếm",
      "Tội vi phạm quy định về bảo vệ động vật hoang dã",
      "Tội vi phạm quy định về khai thác, bảo vệ rừng và quản lý lâm sản",
      "Tội vi phạm quy định về quản lý, bảo vệ động vật hoang dã nguy cấp theo Luật Đa dạng sinh học"
    ],
    "correct": "Tội vi phạm quy định về bảo vệ động vật nguy cấp, quý, hiếm",
    "explanation": "Căn cứ Điều 244 Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung năm 2017) quy định về Tội vi phạm quy định về bảo vệ động vật nguy cấp, quý, hiếm (loài ưu tiên bảo vệ hoặc Nhóm IB)."
  },
  {
    "id": "KL_046",
    "question": "Hành vi săn bắt, nuôi nhốt trái phép cá thể động vật thuộc lớp thú thuộc Danh mục Nhóm IB từ bao nhiêu cá thể thì bị khởi tố theo Điều 244 BLHS?",
    "options": [
      "Từ 03 cá thể trở lên",
      "Từ 01 cá thể trở lên",
      "Từ 05 cá thể trở lên",
      "Từ 02 cá thể trở lên"
    ],
    "correct": "Từ 03 cá thể trở lên",
    "explanation": "Điểm d Khoản 1 Điều 244 Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung năm 2017) quy định hành vi săn bắt, giết, nuôi, nhốt, vận chuyển, buôn bán trái phép động vật thuộc Danh mục Nhóm IB (không thuộc loài ưu tiên bảo vệ) với số lượng từ 03 cá thể đến 07 cá thể lớp thú thì bị truy cứu trách nhiệm hình sự (mức từ 01 cá thể áp dụng đối với loài thuộc Danh mục loài nguy cấp, quý, hiếm được ưu tiên bảo vệ theo Điểm a Khoản 1 Điều 244)."
  },
  {
    "id": "KL_047",
    "question": "Theo Bộ luật Tố tụng hình sự, cơ quan Kiểm lâm có thẩm quyền khởi tố vụ án hình sự trong trường hợp nào?",
    "options": [
      "Khi phát hiện hành vi có dấu hiệu tội phạm trong lĩnh vực và địa bàn quản lý của mình (trực tiếp điều tra tội phạm ít nghiêm trọng quả tang, chứng cứ rõ ràng hoặc khởi tố vụ án và chuyển hồ sơ cho Cơ quan điều tra trong 07 ngày đối với tội phạm nghiêm trọng trở lên)",
      "Kiểm lâm không có quyền khởi tố, chỉ được chuyển hồ sơ sang Viện kiểm sát",
      "Chỉ Tòa án mới có thẩm quyền khởi tố vụ án hình sự",
      "Chỉ được khởi tố vụ án hình sự sau khi đã có văn bản phê duyệt trước của Thủ trưởng Cơ quan Cảnh sát điều tra Công an cấp tỉnh"
    ],
    "correct": "Khi phát hiện hành vi có dấu hiệu tội phạm trong lĩnh vực và địa bàn quản lý của mình (trực tiếp điều tra tội phạm ít nghiêm trọng quả tang, chứng cứ rõ ràng hoặc khởi tố vụ án và chuyển hồ sơ cho Cơ quan điều tra trong 07 ngày đối với tội phạm nghiêm trọng trở lên)",
    "explanation": "Căn cứ Khoản 1 Điều 164 Bộ luật Tố tụng hình sự năm 2015 (được sửa đổi, bổ sung năm 2021, 2025) và Điều 34 Luật Tổ chức cơ quan điều tra hình sự: Khi phát hiện hành vi có dấu hiệu tội phạm trong lĩnh vực và địa bàn quản lý của mình, cơ quan Kiểm lâm có thẩm quyền ra quyết định khởi tố vụ án hình sự (nếu là tội phạm ít nghiêm trọng trong trường hợp phạm tội quả tang, chứng cứ và lý lịch người phạm tội rõ ràng thì quyết định khởi tố vụ án, khởi tố bị can, tiến hành điều tra và chuyển hồ sơ cho Viện kiểm sát có thẩm quyền trong thời hạn 07 ngày; nếu là tội phạm nghiêm trọng, rất nghiêm trọng, đặc biệt nghiêm trọng hoặc tội phạm ít nghiêm trọng nhưng phức tạp thì quyết định khởi tố vụ án hình sự và chuyển hồ sơ vụ án cho Cơ quan điều tra có thẩm quyền trong thời hạn 07 ngày)."
  },
  {
    "id": "KL_048",
    "question": "Theo Luật Xử lý VPHC, cá nhân vi phạm có quyền giải trình trực tiếp hoặc bằng văn bản khi mức phạt tiền tối đa của khung phạt là bao nhiêu?",
    "options": [
      "Từ 20.000.000 đồng trở lên",
      "Từ 10.000.000 đồng trở lên",
      "Từ 15.000.000 đồng trở lên",
      "Từ 25.000.000 đồng trở lên"
    ],
    "correct": "Từ 15.000.000 đồng trở lên",
    "explanation": "Khoản 1 Điều 61 Luật Xử lý VPHC quy định cá nhân vi phạm có quyền giải trình đối với hành vi vi phạm hành chính mà pháp luật quy định áp dụng mức phạt tiền tối đa từ 15.000.000 đồng trở lên."
  },
  {
    "id": "KL_049",
    "question": "Thời hạn cá nhân, tổ chức vi phạm gửi văn bản yêu cầu giải trình trực tiếp kể từ ngày lập biên bản vi phạm hành chính là bao lâu?",
    "options": [
      "Không quá 02 ngày làm việc",
      "Không quá 05 ngày làm việc",
      "Không quá 07 ngày làm việc",
      "Không quá 03 ngày làm việc kể từ ngày lập biên bản"
    ],
    "correct": "Không quá 02 ngày làm việc",
    "explanation": "Điểm a Khoản 2 Điều 61 Luật Xử lý VPHC quy định đối với trường hợp giải trình trực tiếp, cá nhân, tổ chức vi phạm phải gửi văn bản yêu cầu trong thời hạn không quá 02 ngày làm việc kể từ ngày lập biên bản."
  },
  {
    "id": "KL_050",
    "question": "Theo Nghị định 146/2026/NĐ-CP, việc xử phạt vi phạm hành chính trên môi trường điện tử được thực hiện thông qua hệ thống nào?",
    "options": [
      "Cổng Dịch vụ công Quốc gia hoặc Cổng dịch vụ công cấp tỉnh",
      "Nhắn tin qua ứng dụng Zalo cá nhân của Kiểm lâm viên",
      "Gửi tin nhắn SMS không có chữ ký số xác thực",
      "Hệ thống thư điện tử công vụ của Chi cục Kiểm lâm cấp tỉnh"
    ],
    "correct": "Cổng Dịch vụ công Quốc gia hoặc Cổng dịch vụ công cấp tỉnh",
    "explanation": "Điều 9 Nghị định 146/2026/NĐ-CP quy định việc xử phạt VPHC trên môi trường điện tử được thực hiện thông qua Cổng Dịch vụ công Quốc gia hoặc Cổng dịch vụ công của bộ, cơ quan ngang bộ, UBND cấp tỉnh."
  },
  {
    "id": "KL_051",
    "question": "Ủy ban nhân dân cấp xã có trách nhiệm quản lý nhà nước đối với diện tích rừng nào trên địa bàn?",
    "options": [
      "Chỉ rừng đặc dụng trên địa bàn xã",
      "Diện tích rừng thuộc sở hữu toàn dân chưa giao, chưa cho thuê trên địa bàn",
      "Chỉ rừng sản xuất của các hộ gia đình",
      "Toàn bộ diện tích rừng sản xuất và rừng phòng hộ trên địa bàn xã"
    ],
    "correct": "Diện tích rừng thuộc sở hữu toàn dân chưa giao, chưa cho thuê trên địa bàn",
    "explanation": "Khoản 3 Điều 102 Luật Lâm nghiệp 2017 quy định UBND cấp xã có trách nhiệm quản lý diện tích rừng thuộc sở hữu toàn dân chưa giao, chưa cho thuê trên địa bàn xã."
  },
  {
    "id": "KL_052",
    "question": "Ai giữ chức vụ Trưởng ban Ban Chỉ huy Phòng cháy, chữa cháy rừng cấp xã?",
    "options": [
      "Chủ tịch Ủy ban nhân dân cấp xã",
      "Trưởng Công an cấp xã",
      "Kiểm lâm địa bàn phụ trách xã",
      "Phó Chủ tịch Ủy ban nhân dân cấp xã phụ trách khối kinh tế - nông nghiệp"
    ],
    "correct": "Chủ tịch Ủy ban nhân dân cấp xã",
    "explanation": "Căn cứ Điều 49, 51 Nghị định số 156/2018/NĐ-CP và Hướng dẫn số 230/HD-CCKL: Chủ tịch UBND cấp xã là Trưởng ban Ban Chỉ huy PCCCR cấp xã, chịu trách nhiệm toàn diện về chỉ đạo công tác PCCCR trên địa bàn."
  },
  {
    "id": "KL_053",
    "question": "Trong Ban Chỉ huy PCCCR cấp xã, Kiểm lâm địa bàn thường đảm nhiệm vai trò gì?",
    "options": [
      "Trưởng ban Chỉ huy",
      "Phó Trưởng ban Thường trực hoặc ủy viên tham mưu nghiệp vụ",
      "Chỉ tham gia với vai trò quan sát viên",
      "Ủy viên kiêm Thư ký tổng hợp của Ban Chỉ huy"
    ],
    "correct": "Phó Trưởng ban Thường trực hoặc ủy viên tham mưu nghiệp vụ",
    "explanation": "Căn cứ Điều 49, 51 Nghị định số 156/2018/NĐ-CP và Hướng dẫn số 230/HD-CCKL của Chi cục Kiểm lâm: Kiểm lâm địa bàn tham gia Ban Chỉ huy cấp xã với vai trò Phó ban hoặc ủy viên thường trực tham mưu kỹ thuật, nghiệp vụ BVR và PCCCR."
  },
  {
    "id": "KL_054",
    "question": "Khi xảy ra cháy rừng trên địa bàn xã, Chủ tịch UBND cấp xã có thẩm quyền huy động lực lượng nào?",
    "options": [
      "Chỉ lực lượng Kiểm lâm địa bàn",
      "Lực lượng dân quân, công an xã, nhân dân và phương tiện trên địa bàn",
      "Chỉ huy động cán bộ, công chức xã",
      "Chỉ được huy động lực lượng công an xã và dân quân tự vệ; không được huy động nhân dân"
    ],
    "correct": "Lực lượng dân quân, công an xã, nhân dân và phương tiện trên địa bàn",
    "explanation": "Căn cứ Khoản 5 Điều 51, Khoản 3 Điều 51a Nghị định số 156/2018/NĐ-CP (hợp nhất tại Văn bản hợp nhất số 13/VBHN-BNNMT) và Luật Phòng cháy, chữa cháy và cứu nạn, cứu hộ năm 2024 (Luật số 55/2024/QH15 có hiệu lực từ ngày 01/7/2025): Chủ tịch Ủy ban nhân dân cấp xã có thẩm quyền huy động lực lượng dân quân, công an xã, nhân dân và phương tiện của các cơ quan, tổ chức, hộ gia đình, cá nhân trên địa bàn để kịp thời chữa cháy rừng."
  },
  {
    "id": "KL_055",
    "question": "Phương châm '4 tại chỗ' trong công tác phòng cháy, chữa cháy rừng cấp xã gồm những yếu tố nào?",
    "options": [
      "Chỉ huy tại chỗ, lực lượng tại chỗ, phương tiện tại chỗ, hậu cần tại chỗ",
      "Kế hoạch tại chỗ, con người tại chỗ, nguồn vốn tại chỗ, nước tại chỗ",
      "Chủ rừng tại chỗ, công an tại chỗ, quân đội tại chỗ, y tế tại chỗ",
      "Kế hoạch tại chỗ, lực lượng tại chỗ, trang thiết bị tại chỗ, hậu cần tại chỗ"
    ],
    "correct": "Chỉ huy tại chỗ, lực lượng tại chỗ, phương tiện tại chỗ, hậu cần tại chỗ",
    "explanation": "Căn cứ Điều 39 Luật Lâm nghiệp năm 2017, Chương IV Nghị định số 156/2018/NĐ-CP và Mục II Hướng dẫn số 230/SNNMT-KL: Phương châm '4 tại chỗ' trong công tác phòng cháy và chữa cháy rừng gồm: Chỉ huy tại chỗ, lực lượng tại chỗ, phương tiện tại chỗ và hậu cần tại chỗ."
  },
  {
    "id": "KL_056",
    "question": "Diễn tập phòng cháy, chữa cháy rừng cấp xã theo hướng dẫn nghiệp vụ gồm những nội dung nào?",
    "options": [
      "Chỉ tập luyện dập lửa tại hiện trường",
      "Diễn tập vận hành cơ chế tại hội trường và diễn tập thực binh tại hiện trường",
      "Chỉ họp phân công nhiệm vụ trên văn bản",
      "Diễn tập huy động nhân dân phát đường băng cản lửa và chữa cháy thực tế tại hiện trường rừng trồng"
    ],
    "correct": "Diễn tập vận hành cơ chế tại hội trường và diễn tập thực binh tại hiện trường",
    "explanation": "Căn cứ Điều 49 Nghị định số 156/2018/NĐ-CP và Mục II Hướng dẫn số 230/HD-CCKL của Chi cục Kiểm lâm Tuyên Quang: Diễn tập PCCCR cấp xã gồm 2 phần: Diễn tập vận hành cơ chế tại hội trường và Diễn tập thực binh tại hiện trường."
  },
  {
    "id": "KL_057",
    "question": "Trách nhiệm của UBND cấp xã trong công tác theo dõi diễn biến rừng hàng năm là gì?",
    "options": [
      "Tự phân tích ảnh vệ tinh độc lập không cần kiểm tra thực địa",
      "Tiếp nhận thông tin biến động từ chủ rừng, phối hợp Kiểm lâm xác minh và xác nhận hồ sơ",
      "Định kỳ hàng quý tổng hợp báo cáo biến động rừng gửi trực tiếp về Chi cục Kiểm lâm cấp tỉnh",
      "Chỉ thống kê diện tích rừng trồng mới"
    ],
    "correct": "Tiếp nhận thông tin biến động từ chủ rừng, phối hợp Kiểm lâm xác minh và xác nhận hồ sơ",
    "explanation": "Căn cứ Khoản 4 Điều 19 Thông tư số 16/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại Văn bản hợp nhất số 06/VBHN-BNNMT): Hạt Kiểm lâm tiếp nhận thông tin, kiểm tra, xác minh biến động rừng, cập nhật vào cơ sở dữ liệu theo dõi diễn biến rừng và lập hồ sơ trình Chủ tịch Ủy ban nhân dân cấp xã quyết định công bố hiện trạng rừng cấp xã trước ngày 31 tháng 01 năm sau."
  },
  {
    "id": "KL_058",
    "question": "Khi tiếp nhận thông tin về động vật hoang dã đi lạc, bị thương, UBND cấp xã phải lập biên bản trong thời hạn bao lâu?",
    "options": [
      "Trong thời hạn 01 ngày làm việc kể từ khi nhận được thông tin",
      "Trong thời hạn 03 ngày làm việc",
      "Trong thời hạn 05 ngày làm việc",
      "Trong thời hạn 02 ngày làm việc kể từ khi nhận được thông tin"
    ],
    "correct": "Trong thời hạn 01 ngày làm việc kể từ khi nhận được thông tin",
    "explanation": "Điểm b Khoản 3 Điều 15 Thông tư số 85/2025/TT-BNNMT quy định trong thời hạn 01 ngày làm việc kể từ khi nhận được thông tin, UBND cấp xã tổ chức kiểm tra, tiếp nhận và lập Biên bản giao nhận động vật."
  },
  {
    "id": "KL_059",
    "question": "Thời hạn UBND cấp xã thông báo công khai để xác minh chủ sở hữu hợp pháp của động vật đi lạc là bao lâu?",
    "options": [
      "03 ngày làm việc",
      "05 ngày làm việc",
      "10 ngày làm việc",
      "07 ngày làm việc"
    ],
    "correct": "05 ngày làm việc",
    "explanation": "Điểm b Khoản 3 Điều 15 Thông tư số 85/2025/TT-BNNMT quy định thời hạn thông báo công khai tại trụ sở cơ quan và trên phương tiện thông tin đại chúng để xác minh chủ sở hữu hợp pháp là 05 ngày làm việc."
  },
  {
    "id": "KL_060",
    "question": "Chủ tịch UBND cấp xã có thẩm quyền phê duyệt Phương án khai thác rừng trong trường hợp nào?",
    "options": [
      "Khai thác gỗ rừng tự nhiên của các công ty lâm nghiệp",
      "Khai thác chính, khai thác tận dụng, khai thác tận thu rừng phòng hộ là rừng trồng, rừng trồng do Nhà nước đại diện chủ sở hữu hoặc khai thác tận dụng, tận thu gỗ rừng tự nhiên của hộ gia đình, cá nhân, cộng đồng dân cư trên địa bàn (theo Khoản 2 và Điểm c Khoản 3 Điều 6 Thông tư số 26/2025/TT-BNNMT)",
      "Khai thác rừng đặc dụng của Ban Quản lý vườn quốc gia",
      "Chỉ phê duyệt phương án khai thác đối với rừng đặc dụng thuộc quyền quản lý của các Vườn quốc gia trực thuộc Bộ Nông nghiệp và Môi trường"
    ],
    "correct": "Khai thác chính, khai thác tận dụng, khai thác tận thu rừng phòng hộ là rừng trồng, rừng trồng do Nhà nước đại diện chủ sở hữu hoặc khai thác tận dụng, tận thu gỗ rừng tự nhiên của hộ gia đình, cá nhân, cộng đồng dân cư trên địa bàn (theo Khoản 2 và Điểm c Khoản 3 Điều 6 Thông tư số 26/2025/TT-BNNMT)",
    "explanation": "Căn cứ Khoản 2, Điểm c Khoản 3 và Khoản 7 Điều 6 Thông tư số 26/2025/TT-BNNMT (Văn bản hợp nhất số 04/VBHN-BNNMT): Đối với rừng sản xuất là rừng trồng do chủ rừng tự đầu tư thì chủ rừng tự lập Phương án khai thác gửi Kiểm lâm sở tại giám sát mà không phải trình phê duyệt; Chủ tịch Ủy ban nhân dân cấp xã có thẩm quyền phê duyệt Phương án khai thác đối với các trường hợp quy định tại Khoản 2 Điều 6 mà chủ rừng hoặc chủ lâm sản là hộ gia đình, cá nhân, cộng đồng dân cư (bao gồm khai thác rừng phòng hộ là rừng trồng, rừng trồng do Nhà nước đại diện chủ sở hữu, khai thác tận dụng/tận thu gỗ rừng tự nhiên...)."
  },
  {
    "id": "KL_061",
    "question": "Kiểm lâm địa bàn có trách nhiệm tham mưu cho UBND cấp xã nội dung nào sau đây?",
    "options": [
      "Phê duyệt dự toán ngân sách chi thường xuyên của xã",
      "Xây dựng kế hoạch bảo vệ rừng, phương án PCCCR và tổ chức lực lượng quần chúng BVR",
      "Quyết định xử phạt vi phạm giao thông đường bộ",
      "Phê duyệt kế hoạch sử dụng đất lâm nghiệp và chuyển nhượng quyền sử dụng rừng"
    ],
    "correct": "Xây dựng kế hoạch bảo vệ rừng, phương án PCCCR và tổ chức lực lượng quần chúng BVR",
    "explanation": "Điều 104 Luật Lâm nghiệp và Nghị định 01/2019/NĐ-CP quy định Kiểm lâm địa bàn tham mưu UBND cấp xã thực hiện chức năng QLNN về lâm nghiệp, lập kế hoạch BVR, PCCCR cơ sở."
  },
  {
    "id": "KL_062",
    "question": "Khi phát hiện hành vi lấn chiếm đất rừng trái phép trên địa bàn, UBND cấp xã phải xử lý như thế nào?",
    "options": [
      "Đình chỉ ngay hành vi vi phạm, lập biên bản hoặc chuyển cơ quan có thẩm quyền xử lý",
      "Chỉ nhắc nhở bằng miệng và cho phép người lấn chiếm tiếp tục canh tác hết vụ mùa",
      "Không thuộc thẩm quyền của xã nên không can thiệp",
      "Hợp thức hóa cho người vi phạm thuê lại đất rừng"
    ],
    "correct": "Đình chỉ ngay hành vi vi phạm, lập biên bản hoặc chuyển cơ quan có thẩm quyền xử lý",
    "explanation": "Điều 102 Luật Lâm nghiệp và Nghị định 146/2026/NĐ-CP quy định Chủ tịch UBND cấp xã có trách nhiệm phát hiện, ngăn chặn, đình chỉ kịp thời hành vi lấn chiếm đất rừng và lập biên bản xử lý theo thẩm quyền."
  },
  {
    "id": "KL_063",
    "question": "Hồ sơ quản lý rừng ở cấp xã do UBND xã và Kiểm lâm địa bàn theo dõi bắt buộc phải có tài liệu nào?",
    "options": [
      "Bản đồ hiện trạng rừng, sổ theo dõi diễn biến rừng và danh sách các chủ rừng trên địa bàn",
      "Sổ hộ khẩu gốc của toàn bộ các hộ gia đình sinh sống trên địa bàn xã",
      "Chỉ cần danh sách cán bộ xã",
      "Hóa đơn mua sắm trang thiết bị văn phòng xã"
    ],
    "correct": "Bản đồ hiện trạng rừng, sổ theo dõi diễn biến rừng và danh sách các chủ rừng trên địa bàn",
    "explanation": "Căn cứ Điểm c Khoản 5 Điều 19 Thông tư số 16/2025/TT-BNNMT quy định dữ liệu, kết quả theo dõi diễn biến rừng dạng giấy của cấp xã được quản lý, lưu trữ tại UBND cấp xã và Hạt Kiểm lâm."
  },
  {
    "id": "KL_064",
    "question": "Chủ tịch UBND cấp xã có thẩm quyền áp dụng biện pháp khắc phục hậu quả nào theo NĐ 146/2026/NĐ-CP?",
    "options": [
      "Buộc khôi phục lại tình trạng ban đầu của rừng và buộc trồng lại rừng",
      "Tịch thu nhà ở của người vi phạm",
      "Tước quyền công dân của người vi phạm",
      "Buộc người vi phạm phải chuyển hộ khẩu thường trú sang địa phương khác"
    ],
    "correct": "Buộc khôi phục lại tình trạng ban đầu của rừng và buộc trồng lại rừng",
    "explanation": "Điểm đ Khoản 1 Điều 31 Nghị định 146/2026/NĐ-CP quy định Chủ tịch UBND cấp xã có quyền áp dụng biện pháp buộc khôi phục tình trạng ban đầu, buộc nộp lại số lợi bất hợp pháp và trồng lại rừng."
  },
  {
    "id": "KL_065",
    "question": "Chủ thể nào chịu trách nhiệm chỉ đạo hòa giải các vụ tranh chấp về quyền sử dụng rừng ở cơ sở?",
    "options": [
      "Ủy ban nhân dân cấp xã nơi có rừng tranh chấp",
      "Chi nhánh Văn phòng đăng ký đất đai khu vực",
      "Đội Cảnh sát hình sự",
      "Ban Quản lý dự án lâm nghiệp"
    ],
    "correct": "Ủy ban nhân dân cấp xã nơi có rừng tranh chấp",
    "explanation": "Căn cứ Khoản 2 Điều 102 Luật Lâm nghiệp năm 2017 và Điều 235 Luật Đất đai năm 2024: Ủy ban nhân dân cấp xã có trách nhiệm chủ trì, phối hợp với Ủy ban Mặt trận Tổ quốc Việt Nam và các tổ chức thành viên tổ chức hòa giải tranh chấp đất đai, tranh chấp rừng trên địa bàn xã."
  },
  {
    "id": "KL_066",
    "question": "Nguyên tắc cơ bản trong công tác phòng, chống sâu bệnh hại rừng theo Hướng dẫn 230/HD-CCKL là gì?",
    "options": [
      "Diệt trừ là chính, phun thuốc hóa học trên diện rộng ngay khi phát hiện",
      "Phòng là chính, diệt trừ kịp thời; ưu tiên biện pháp sinh học, hạn chế thuốc hóa học độc hại",
      "Chờ khi sâu bệnh phát triển thành dịch lớn trên toàn xã mới bắt đầu can thiệp bằng thuốc hóa học",
      "Đốt dọn toàn bộ diện tích rừng bị sâu bệnh tấn công"
    ],
    "correct": "Phòng là chính, diệt trừ kịp thời; ưu tiên biện pháp sinh học, hạn chế thuốc hóa học độc hại",
    "explanation": "Căn cứ Điều 40 Luật Lâm nghiệp năm 2017 và Mục I.2 Hướng dẫn số 230/SNNMT-KL: Nguyên tắc phòng, trừ sinh vật gây hại rừng là 'phòng là chính, phát hiện sớm, diệt trừ kịp thời; ưu tiên biện pháp sinh học, hạn chế sử dụng thuốc bảo vệ thực vật hóa học độc hại'."
  },
  {
    "id": "KL_067",
    "question": "Công thức tính tỷ lệ cây bị sâu, bệnh hại (P%) trong điều tra rừng theo Hướng dẫn 230/HD-CCKL là gì?",
    "options": [
      "P% = (n / N) x 100 (với n: số cây bị hại; N: tổng số cây điều tra)",
      "P% = (N / n) x 100 (với N: tổng số cây điều tra; n: số cây bị hại)",
      "P% = n x N / 100",
      "P% = (n + N) / 2"
    ],
    "correct": "P% = (n / N) x 100 (với n: số cây bị hại; N: tổng số cây điều tra)",
    "explanation": "Căn cứ Mục 4 Hướng dẫn số 230/HD-CCKL của Chi cục Kiểm lâm Tuyên Quang và Tiêu chuẩn quốc gia TCVN 8927:2023, TCVN 13268-7:2023: Công thức tính tỷ lệ cây bị hại P% = (n / N) x 100, trong đó n là số cây bị hại trên ô tiêu chuẩn, N là tổng số cây điều tra."
  },
  {
    "id": "KL_068",
    "question": "Trong công tác theo dõi sinh vật gây hại rừng (Mục III.3.4 Văn bản số 230/SNNMT-KL ngày 15/01/2026), khi điều tra phát hiện Chỉ số sâu, bệnh hại R (%) (hoặc tỷ lệ bộ phận tán lá bị hại) trên 50% đến dưới 75%, Kiểm lâm địa bàn xác định lâm phần đó thuộc cấp độ hại nào?",
    "options": [
      "Mức độ hại nhẹ (Chỉ số sâu, bệnh hại R <= 25%)",
      "Mức độ hại trung bình (25% < R <= 50%)",
      "Mức độ hại nặng (50% < R < 75%)",
      "Mức độ hại rất nặng (R >= 75%)"
    ],
    "correct": "Mức độ hại nặng (50% < R < 75%)",
    "explanation": "Căn cứ Điều 40 Luật Lâm nghiệp năm 2017 và Mục III.3.4 Văn bản số 230/SNNMT-KL ngày 15/01/2026 của Sở Nông nghiệp và Môi trường tỉnh Tuyên Quang: Phân cấp mức độ hại của lâm phần theo Chỉ số sâu, bệnh hại R (%) gồm: Hại nhẹ (R <= 25%); Hại trung bình/vừa (25% < R <= 50%); Hại nặng (50% < R < 75%); Hại rất nặng (R >= 75%). Khi Chỉ số sâu, bệnh hại R (%) trên 50% đến dưới 75% thì thuộc mức độ hại nặng."
  },
  {
    "id": "KL_069",
    "question": "Khi phát hiện dịch sâu bệnh hại rừng bùng phát có nguy cơ lây lan diện rộng, cơ quan Kiểm lâm phải làm gì?",
    "options": [
      "Báo cáo ngay cho Sở NN&MT, UBND cấp xã/tỉnh và cơ quan bảo vệ thực vật chuyên ngành",
      "Giấu kín thông tin dịch bệnh để tránh ảnh hưởng đến chỉ tiêu thi đua bảo vệ rừng của địa phương",
      "Chờ dịch bệnh tự thoái trào sau mùa mưa",
      "Yêu cầu chủ rừng chặt trắng toàn bộ diện tích rừng xung quanh"
    ],
    "correct": "Báo cáo ngay cho Sở NN&MT, UBND cấp xã/tỉnh và cơ quan bảo vệ thực vật chuyên ngành",
    "explanation": "Căn cứ Điều 40 Luật Lâm nghiệp năm 2017 và Mục I.5 Hướng dẫn số 230/SNNMT-KL: Khi dịch sâu, bệnh hại rừng bùng phát có nguy cơ lây lan diện rộng, cơ quan Kiểm lâm phải báo cáo ngay cho Sở Nông nghiệp và Môi trường, Ủy ban nhân dân cấp xã/cấp tỉnh và cơ quan chuyên ngành bảo vệ và kiểm dịch thực vật để phối hợp khoanh vùng, công bố dịch và tổ chức dập dịch kịp thời."
  },
  {
    "id": "KL_070",
    "question": "Thời kỳ điều tra định kỳ sâu bệnh hại rừng trong năm thường được bố trí vào giai đoạn nào?",
    "options": [
      "Vào các giai đoạn sinh trưởng nhạy cảm của cây rừng và thời kỳ cao điểm phát sinh sâu bệnh",
      "Vào những ngày mưa bão ngập lụt kéo dài",
      "Chỉ điều tra một lần duy nhất vào ngày cuối cùng của năm dương lịch",
      "Chỉ điều tra khi cây rừng đã bị trụi hoàn toàn lá"
    ],
    "correct": "Vào các giai đoạn sinh trưởng nhạy cảm của cây rừng và thời kỳ cao điểm phát sinh sâu bệnh",
    "explanation": "Căn cứ Tiêu chuẩn quốc gia TCVN 11570:2016 và Hướng dẫn số 230/HD-CCKL: Thời kỳ điều tra sâu bệnh hại rừng bố trí vào các giai đoạn sinh trưởng nhạy cảm của cây và cao điểm dịch bệnh."
  },
  {
    "id": "KL_071",
    "question": "Hồ sơ nghiệm thu kết quả công tác tuyên truyền bảo vệ rừng cấp xã bắt buộc phải có tài liệu nào?",
    "options": [
      "Kế hoạch tuyên truyền, biên bản họp thôn và danh sách ký cam kết bảo vệ rừng của các hộ gia đình",
      "Biên lai nộp tiền thuế sử dụng đất phi nông nghiệp",
      "Hợp đồng cung ứng thiết bị PCCC giữa UBND xã và đơn vị cung cấp thiết bị",
      "Bản photocopy căn cước công dân của toàn bộ người dân trong thôn"
    ],
    "correct": "Kế hoạch tuyên truyền, biên bản họp thôn và danh sách ký cam kết bảo vệ rừng của các hộ gia đình",
    "explanation": "Căn cứ Mục II.4 Hướng dẫn số 230/HD-CCKL của Chi cục Kiểm lâm Tuyên Quang: Hồ sơ nghiệm thu công tác tuyên truyền bảo vệ rừng gồm Dự toán chi tiết kinh phí, Biểu tổng hợp khối lượng giá trị, Kế hoạch tuyên truyền, Biên bản tuyên truyền và danh sách ký cam kết (nếu có)."
  },
  {
    "id": "KL_072",
    "question": "Hình thức tuyên truyền pháp luật lâm nghiệp nào sau đây mang lại hiệu quả trực tiếp nhất tại thôn bản?",
    "options": [
      "Họp thôn, tuyên truyền miệng kết hợp hệ thống loa truyền thanh cơ sở và ký cam kết trực tiếp từng hộ gia đình",
      "Đăng tải toàn văn các văn bản quy phạm pháp luật lên cổng thông tin điện tử của tỉnh",
      "Gửi công văn hành chính qua đường bưu điện đến từng gia đình",
      "Phát tờ rơi tuyên truyền pháp luật kèm phiếu khảo sát ý kiến nhân dân tại chợ phiên xã"
    ],
    "correct": "Họp thôn, tuyên truyền miệng kết hợp hệ thống loa truyền thanh cơ sở và ký cam kết trực tiếp từng hộ gia đình",
    "explanation": "Căn cứ Điều 102 Luật Lâm nghiệp năm 2017 và Hướng dẫn số 230/HD-CCKL: Hình thức tuyên truyền hiệu quả nhất là họp thôn, tuyên truyền miệng kết hợp loa truyền thanh và ký cam kết trực tiếp."
  },
  {
    "id": "KL_073",
    "question": "Văn bản chỉ đạo quan trọng của Ban Bí thư về tăng cường lãnh đạo đối với công tác QLBV&PTR là văn bản nào?",
    "options": [
      "Chỉ thị số 13-CT/TW và Kết luận số 61-KL/TW của Ban Bí thư",
      "Chỉ thị số 01 của Bộ Nông nghiệp",
      "Quyết định số 10 của Chi cục Kiểm lâm",
      "Nghị quyết số 08 của Hội đồng nhân dân tỉnh về công tác bảo vệ và phát triển rừng"
    ],
    "correct": "Chỉ thị số 13-CT/TW và Kết luận số 61-KL/TW của Ban Bí thư",
    "explanation": "Căn cứ Điều 102 Luật Lâm nghiệp năm 2017, Chỉ thị số 13-CT/TW ngày 12/01/2017 và Kết luận số 61-KL/TW ngày 17/8/2023 của Ban Bí thư Trung ương Đảng về tăng cường sự lãnh đạo của Đảng đối với công tác QLBV&PTR."
  },
  {
    "id": "KL_074",
    "question": "Nội dung quy ước, hương ước bảo vệ rừng của thôn, bản do cộng đồng dân cư xây dựng không được trái với điều gì?",
    "options": [
      "Quy định của pháp luật và chuẩn mực đạo đức, phong tục tập quán tốt đẹp",
      "Ý kiến chủ quan của Trưởng thôn",
      "Quy định của các nước trong khu vực ASEAN",
      "Các quy định về quản lý đất đai và bảo vệ môi trường của Ủy ban nhân dân cấp xã"
    ],
    "correct": "Quy định của pháp luật và chuẩn mực đạo đức, phong tục tập quán tốt đẹp",
    "explanation": "Căn cứ Điểm b Khoản 2 Điều 86 và Điểm d Khoản 3 Điều 102 Luật Lâm nghiệp năm 2017 quy định hương ước, quy ước bảo vệ và phát triển rừng do cộng đồng xây dựng, không được trái với quy định của pháp luật và đạo đức xã hội."
  },
  {
    "id": "KL_075",
    "question": "Trách nhiệm của Kiểm lâm địa bàn đối với quy ước bảo vệ rừng thôn, bản là gì?",
    "options": [
      "Tham mưu UBND xã hướng dẫn thôn bản xây dựng, rà soát và giám sát thực hiện quy ước BVR",
      "Trực tiếp ban hành quy ước và gửi báo cáo về Chi cục Kiểm lâm theo dõi",
      "Không can thiệp vì đó là việc nội bộ của thôn bản",
      "Ký duyệt ban hành quy ước thay cho Ủy ban nhân dân xã"
    ],
    "correct": "Tham mưu UBND xã hướng dẫn thôn bản xây dựng, rà soát và giám sát thực hiện quy ước BVR",
    "explanation": "Căn cứ Điều 104 Luật Lâm nghiệp năm 2017 và Quy chế Kiểm lâm địa bàn: Kiểm lâm địa bàn có nhiệm vụ hướng dẫn cộng đồng dân cư rà soát, lồng ghép nội dung bảo vệ rừng, PCCCR vào quy ước thôn bản đúng quy định pháp luật."
  },
  {
    "id": "KL_076",
    "question": "Khi đo chiều dài lóng gỗ tròn theo Phụ lục I Thông tư số 26/2025/TT-BNNMT, vị trí đo được xác định như thế nào?",
    "options": [
      "Đo khoảng cách ngắn nhất giữa mặt cắt ngang ở hai đầu của lóng gỗ",
      "Đo khoảng cách dài nhất bao gồm cả phần dập nát",
      "Đo từ tâm đầu lớn đến mép ngoài của đầu nhỏ",
      "Đo theo đường cong tự nhiên của lóng gỗ từ đầu lớn đến đầu nhỏ"
    ],
    "correct": "Đo khoảng cách ngắn nhất giữa mặt cắt ngang ở hai đầu của lóng gỗ",
    "explanation": "Điểm a Khoản 1 Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định: Chiều dài là khoảng cách ngắn nhất giữa mặt cắt ngang ở hai đầu của lóng gỗ; đơn vị tính là mét, lấy 2 số thập phân."
  },
  {
    "id": "KL_077",
    "question": "Phương pháp xác định đường kính mỗi đầu lóng gỗ tròn được quy định như thế nào?",
    "options": [
      "Đo ở 2 vị trí lớn nhất và nhỏ nhất (trừ vỏ cây), sau đó tính trung bình cộng",
      "Chỉ cần đo 1 lần duy nhất tại tâm mặt cắt ngang của đầu lóng gỗ",
      "Đo vòng tròn chu vi đầu lóng gỗ bao gồm cả vỏ rồi chia cho số Pi (3,14)",
      "Đo đường kính ngoài vỏ ở 2 vị trí vuông góc rồi trừ đi độ dày ước tính của vỏ cây"
    ],
    "correct": "Đo ở 2 vị trí lớn nhất và nhỏ nhất (trừ vỏ cây), sau đó tính trung bình cộng",
    "explanation": "Điểm b Khoản 1 Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định: mỗi đầu lóng gỗ đo ở 2 vị trí có đường kính lớn nhất và nhỏ nhất (trừ phần vỏ cây), tính trị số trung bình cộng để xác định đường kính đầu đó."
  },
  {
    "id": "KL_078",
    "question": "Công thức tính thể tích (V) của lóng gỗ tròn, gỗ đẽo hình trụ tròn theo Thông tư số 26/2025/TT-BNNMT là gì?",
    "options": [
      "V = (π / 4) x (Dtb)^2 x l",
      "V = π x Dtb x l",
      "V = (Dtb)^2 x l",
      "V = (π / 4) x Dtb x l"
    ],
    "correct": "V = (π / 4) x (Dtb)^2 x l",
    "explanation": "Điểm c Khoản 1 Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định thể tích gỗ tròn tính theo công thức: V = (π / 4) * (Dtb)^2 * l; thể tích V tính bằng m3, lấy số nguyên và 3 số thập phân."
  },
  {
    "id": "KL_079",
    "question": "Đơn vị tính và số chữ số thập phân khi ghi nhận thể tích mét khối (m3) gỗ trong Bảng kê lâm sản là gì?",
    "options": [
      "Đơn vị m3, lấy số nguyên và ba (03) số hàng thập phân",
      "Đơn vị m3, lấy số nguyên và một (01) số hàng thập phân",
      "Đơn vị m3, làm tròn thành số nguyên",
      "Đơn vị m3, lấy số nguyên và hai (02) số hàng thập phân"
    ],
    "correct": "Đơn vị m3, lấy số nguyên và ba (03) số hàng thập phân",
    "explanation": "Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định thể tích gỗ V tính bằng mét khối (m3), lấy số nguyên và ba (03) số hàng thập phân sau số hàng đơn vị."
  },
  {
    "id": "KL_080",
    "question": "Sai số cho phép khi đo tính thể tích đối với từng khúc, lóng gỗ tròn, gỗ khối trụ tròn là bao nhiêu?",
    "options": [
      "Cộng trừ 5% (±5%)",
      "Cộng trừ 10% (±10%)",
      "Cộng trừ 15% (±15%)",
      "Cộng trừ 8% (±8%)"
    ],
    "correct": "Cộng trừ 10% (±10%)",
    "explanation": "Điểm d Khoản 1 Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định sai số tính thể tích gỗ trong mỗi lần đo đối với từng khúc, lóng gỗ tròn, gỗ khối trụ tròn là mười phần trăm (±10%)."
  },
  {
    "id": "KL_081",
    "question": "Sai số cho phép khi tính thể tích đối với từng thanh, tấm, hộp gỗ xẻ, gỗ đẽo hình hộp là bao nhiêu?",
    "options": [
      "Cộng trừ 2% (±2%)",
      "Cộng trừ 5% (±5%)",
      "Cộng trừ 10% (±10%)",
      "Cộng trừ 8% (±8%)"
    ],
    "correct": "Cộng trừ 5% (±5%)",
    "explanation": "Điểm d Khoản 2 Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định sai số tính thể tích gỗ trong mỗi lần đo đối với từng thanh, tấm, hộp gỗ xẻ, gỗ đẽo là năm phần trăm (±5%)."
  },
  {
    "id": "KL_082",
    "question": "Công thức tính thể tích hộp gỗ xẻ hình hộp chữ nhật (chiều dài l, chiều rộng a, chiều dày b) là gì?",
    "options": [
      "V = l x a x b",
      "V = (l + a + b) / 3",
      "V = (l x a) / b",
      "V = (l x a x b) / 2"
    ],
    "correct": "V = l x a x b",
    "explanation": "Điểm c Khoản 2 Phụ lục I Thông tư số 26/2025/TT-BNNMT quy định thể tích hộp gỗ xẻ hình hộp chữ nhật: V = l * a * b (trong đó l, a, b đổi ra đơn vị mét, V lấy 3 số thập phân)."
  },
  {
    "id": "KL_083",
    "question": "Trường hợp gỗ có hình thù phức tạp, gốc rễ, gỗ dăm không thể đo được kích thước thì xác định khối lượng như thế nào?",
    "options": [
      "Thực hiện cân (kg) hoặc tính theo ster để quy đổi sang m3 gỗ tròn",
      "Đo kích thước bao ngoài lớn nhất rồi áp dụng hệ số suy giảm thể tích 0,5",
      "Bỏ qua không cần thống kê vào Bảng kê lâm sản",
      "Bắt buộc phải xẻ vuông vắn rồi mới đo"
    ],
    "correct": "Thực hiện cân (kg) hoặc tính theo ster để quy đổi sang m3 gỗ tròn",
    "explanation": "Khoản 3 Điều 4 Thông tư số 26/2025/TT-BNNMT quy định gỗ có hình thù phức tạp, gốc, rễ, dăm gỗ không thể đo kích thước thì thực hiện cân (kg) hoặc tính theo ster để quy đổi sang m3 gỗ tròn."
  },
  {
    "id": "KL_084",
    "question": "Tỷ lệ quy đổi khối lượng cân (kg) sang thể tích mét khối (m3) gỗ tròn theo Thông tư số 26/2025/TT-BNNMT là bao nhiêu?",
    "options": [
      "900 kg quy đổi bằng 01 m3 gỗ tròn",
      "800 kg quy đổi bằng 01 m3 gỗ tròn",
      "1.000 kg quy đổi bằng 01 m3 gỗ tròn",
      "1.200 kg quy đổi bằng 01 m3 gỗ tròn"
    ],
    "correct": "1.000 kg quy đổi bằng 01 m3 gỗ tròn",
    "explanation": "Khoản 3 Điều 4 Thông tư số 26/2025/TT-BNNMT quy định rõ: quy đổi 1.000 kg bằng 01 m3 gỗ tròn."
  },
  {
    "id": "KL_085",
    "question": "Tỷ lệ quy đổi từ đơn vị ster (củi, gỗ xếp khối) sang mét khối (m3) gỗ tròn theo Thông tư số 26/2025/TT-BNNMT là bao nhiêu?",
    "options": [
      "01 ster quy đổi bằng 0,5 m3 gỗ tròn",
      "01 ster quy đổi bằng 0,7 m3 gỗ tròn",
      "01 ster quy đổi bằng 1,0 m3 gỗ tròn",
      "01 ster quy đổi bằng 0,8 m3 gỗ tròn"
    ],
    "correct": "01 ster quy đổi bằng 0,7 m3 gỗ tròn",
    "explanation": "Khoản 3 Điều 4 Thông tư số 26/2025/TT-BNNMT quy định rõ: quy đổi 01 ster bằng 0,7 m3 gỗ tròn."
  },
  {
    "id": "KL_086",
    "question": "Việc đánh số hiệu đầu lóng gỗ tròn sau khi đo tính được thực hiện như thế nào?",
    "options": [
      "Ghi bằng chữ số Ả Rập vào mặt cắt ngang 2 đầu lóng gỗ, dùng sơn khác màu gỗ",
      "Chỉ cần dùng phấn trắng viết một đầu lóng gỗ",
      "Đóng đinh sắt vào giữa thân cây",
      "Đóng dấu búa kiểm lâm vào giữa thân cây kèm số thứ tự"
    ],
    "correct": "Ghi bằng chữ số Ả Rập vào mặt cắt ngang 2 đầu lóng gỗ, dùng sơn khác màu gỗ",
    "explanation": "Khoản 7 Điều 4 Thông tư số 26/2025/TT-BNNMT quy định số hiệu gỗ đánh bằng chữ số Ả Rập, ghi vào mặt cắt ngang hai đầu lóng gỗ, sử dụng sơn có màu sắc khác với màu của gỗ."
  },
  {
    "id": "KL_087",
    "question": "Đối với gỗ thuộc loài nguy cấp, quý, hiếm hoặc Phụ lục CITES, quy định đánh số hiệu đầu lóng như thế nào?",
    "options": [
      "Chỉ đánh số hiệu đối với lóng gỗ có đường kính trên 40 cm",
      "Phải đánh số hiệu không phân biệt kích thước lớn hay nhỏ",
      "Chỉ đánh số hiệu khi vận chuyển ra khỏi địa bàn tỉnh",
      "Chỉ đánh số hiệu khi vận chuyển ra khỏi địa bàn xã"
    ],
    "correct": "Phải đánh số hiệu không phân biệt kích thước lớn hay nhỏ",
    "explanation": "Khoản 7 Điều 4 Thông tư số 26/2025/TT-BNNMT quy định đối với gỗ thuộc loài nguy cấp, quý, hiếm hoặc gỗ thuộc Phụ lục CITES thì phải đánh số hiệu không phân biệt kích thước."
  },
  {
    "id": "KL_088",
    "question": "Trong biên bản kiểm tra lâm sản, nếu phát hiện lóng gỗ bị rỗng ruột thì khối lượng tính toán được xử lý thế nào?",
    "options": [
      "Tính nguyên thể tích cả vỏ không trừ phần rỗng",
      "Xác định và ghi rõ khối lượng phần rỗng ruột, mục để khấu trừ khỏi thể tích toàn bộ",
      "Hủy bỏ toàn bộ lóng gỗ không tính thể tích",
      "Quy đổi phần rỗng ruột sang thể tích ster để bù trừ vào thể tích chung"
    ],
    "correct": "Xác định và ghi rõ khối lượng phần rỗng ruột, mục để khấu trừ khỏi thể tích toàn bộ",
    "explanation": "Khoản 2 Điều 4 Thông tư số 26/2025/TT-BNNMT quy định: Ghi khối lượng rỗng ruột, khối lượng mục trong khi thực hiện lập Bảng kê lâm sản để xác định chính xác thể tích thực tế của lâm sản."
  },
  {
    "id": "KL_089",
    "question": "Khi kiểm tra chuồng trại cơ sở nuôi động vật rừng, nội dung kỹ thuật quan trọng hàng đầu cần kiểm tra là gì?",
    "options": [
      "Màu sơn trang trí chuồng trại",
      "Quy cách chuồng trại bảo đảm an toàn cho người và ngăn ngừa động vật thoát ra ngoài",
      "Khoảng cách đến trung tâm thương mại gần nhất",
      "Hệ thống camera giám sát kết nối trực tiếp với cơ quan Kiểm lâm sở tại"
    ],
    "correct": "Quy cách chuồng trại bảo đảm an toàn cho người và ngăn ngừa động vật thoát ra ngoài",
    "explanation": "Căn cứ Khoản 1 Điều 24 Thông tư số 85/2025/TT-BNNMT quy định chuồng trại nuôi động vật rừng phải phù hợp đặc tính sinh học của loài, bảo đảm an toàn tuyệt đối cho con người và ngăn ngừa động vật thoát ra môi trường tự nhiên."
  },
  {
    "id": "KL_090",
    "question": "Chủ cơ sở nuôi động vật rừng bắt buộc phải lập và lưu giữ loại sổ theo dõi nào?",
    "options": [
      "Sổ theo dõi hoạt động nuôi động vật hoang dã theo Mẫu số 10 Phụ lục II",
      "Sổ thu chi tài chính nội bộ của gia đình",
      "Sổ hộ khẩu điện tử trên ứng dụng di động",
      "Sổ nhật ký chăm sóc thú y có xác nhận của Chi cục Chăn nuôi và Thú y"
    ],
    "correct": "Sổ theo dõi hoạt động nuôi động vật hoang dã theo Mẫu số 10 Phụ lục II",
    "explanation": "Căn cứ Khoản 2 Điều 24 Thông tư số 85/2025/TT-BNNMT quy định: Tổ chức, cá nhân nuôi động vật rừng thông thường phải thực hiện việc ghi chép Sổ theo dõi theo Mẫu số 10 Phụ lục II ban hành kèm theo Thông tư."
  },
  {
    "id": "KL_091",
    "question": "Khi cá thể động vật rừng nguy cấp, quý, hiếm trong trại nuôi bị chết, chủ cơ sở phải xử lý thế nào?",
    "options": [
      "Tự ý đem bán cho nhà hàng kinh doanh",
      "Vứt xác động vật ra sông suối tự nhiên",
      "Lập biên bản và thông báo cho cơ quan Kiểm lâm sở tại hoặc UBND xã để phối hợp xử lý",
      "Báo cáo cơ quan Thú y địa phương trong thời hạn 07 ngày để xử lý tiêu hủy"
    ],
    "correct": "Lập biên bản và thông báo cho cơ quan Kiểm lâm sở tại hoặc UBND xã để phối hợp xử lý",
    "explanation": "Căn cứ Khoản 5 Điều 15, Điều 24, Điều 25 Thông tư số 85/2025/TT-BNNMT và Điểm c Khoản 2 Điều 25, Điều 30 Thông tư số 26/2025/TT-BNNMT: Khi cá thể động vật rừng nguy cấp, quý, hiếm trong cơ sở nuôi hoặc cứu hộ bị chết, chủ cơ sở phải lập biên bản xác nhận, thông báo cho cơ quan Kiểm lâm sở tại hoặc Ủy ban nhân dân cấp xã để phối hợp kiểm tra, xử lý (chuyển giao làm mẫu vật nghiên cứu khoa học hoặc tiêu hủy theo quy định) và cập nhật vào sổ theo dõi."
  },
  {
    "id": "KL_092",
    "question": "Biện pháp đánh dấu mẫu vật nào thường được áp dụng đối với cá thể động vật rừng nguy cấp, quý, hiếm lớp thú?",
    "options": [
      "Cấy chip vi điện tử hoặc gắn thẻ tai, vòng chân có mã số nhận dạng",
      "Dùng bút mực viết lên lông động vật",
      "Chỉ cần chụp ảnh cá thể động vật lưu trong điện thoại cá nhân của chủ trại nuôi",
      "Buộc dây nylon màu đỏ vào cổ động vật"
    ],
    "correct": "Cấy chip vi điện tử hoặc gắn thẻ tai, vòng chân có mã số nhận dạng",
    "explanation": "Căn cứ Điều 14 Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại Văn bản hợp nhất số 04/VBHN-BNNMT): Mẫu vật động vật rừng thuộc Danh mục loài nguy cấp, quý, hiếm hoặc Phụ lục CITES nuôi tại cơ sở phải thực hiện đánh dấu mẫu vật bằng chíp điện tử, vòng nhận dạng, thẻ tai hoặc biện pháp phù hợp với đặc điểm loài, ghi Sổ theo dõi đánh dấu mẫu vật (Mẫu số 13) và gửi Thông báo đánh dấu mẫu vật (Mẫu số 14) đến cơ quan Kiểm lâm sở tại."
  },
  {
    "id": "KL_093",
    "question": "Cơ sở nuôi sinh sản động vật hoang dã muốn xuất bán con giống phải đáp ứng điều kiện nào?",
    "options": [
      "Chỉ cần chủ cơ sở cam kết con giống khỏe mạnh",
      "Có mã số cơ sở nuôi hợp pháp, con giống có nguồn gốc F2 trở đi và lập bảng kê lâm sản theo quy định",
      "Được phép xuất bán tự do cả các cá thể bố mẹ săn bắt trực tiếp từ rừng tự nhiên không cần mã số trại nuôi",
      "Chỉ cần giấy xác nhận của Hội Nông dân xã"
    ],
    "correct": "Có mã số cơ sở nuôi hợp pháp, con giống có nguồn gốc F2 trở đi và lập bảng kê lâm sản theo quy định",
    "explanation": "Căn cứ Điều 14 Thông tư số 26/2025/TT-BNNMT (sửa đổi bởi Thông tư số 84/2025/TT-BNNMT) và Điều 25, Điều 27 Thông tư số 85/2025/TT-BNNMT: Xuất bán, thương mại động vật rừng thuộc loài nguy cấp, quý, hiếm hoặc Phụ lục CITES phải từ cơ sở nuôi được cấp mã số hợp pháp, có nguồn gốc nuôi sinh sản từ thế hệ F2 trở về sau, thực hiện đánh dấu mẫu vật và lập Bảng kê lâm sản theo quy định."
  },
  {
    "id": "KL_094",
    "question": "Cơ sở dữ liệu gốc để thực hiện theo dõi diễn biến rừng hàng năm là nguồn dữ liệu nào?",
    "options": [
      "Bản đồ địa chính phân lô đất ở của xã",
      "Kết quả kiểm kê rừng tích hợp trên Cơ sở dữ liệu trung tâm và dữ liệu công bố năm trước liền kề",
      "Số liệu diện tích rừng tự kê khai bằng miệng của các chủ rừng mà không qua kiểm tra thực địa",
      "Số liệu ước tính của Ban Quản lý rừng"
    ],
    "correct": "Kết quả kiểm kê rừng tích hợp trên Cơ sở dữ liệu trung tâm và dữ liệu công bố năm trước liền kề",
    "explanation": "Căn cứ Điểm a Khoản 2 Điều 19 Thông tư số 16/2025/TT-BNNMT và Mục V.1.2 Hướng dẫn số 230/HD-CCKL: Sử dụng kết quả kiểm kê rừng tích hợp tại cơ sở dữ liệu trung tâm và dữ liệu công bố năm trước liền kề làm dữ liệu gốc theo dõi diễn biến rừng hàng năm."
  },
  {
    "id": "KL_095",
    "question": "Phần mềm chuẩn được ngành Kiểm lâm sử dụng để cập nhật diễn biến diện tích rừng là phần mềm nào?",
    "options": [
      "Phần mềm FRMS (Forest Resource Monitoring System) do Cục Lâm nghiệp và Kiểm lâm ban hành",
      "Phần mềm Microsoft Excel thông thường",
      "Phần mềm AutoCAD thiết kế xây dựng",
      "Phần mềm kế toán hành chính sự nghiệp MISA"
    ],
    "correct": "Phần mềm FRMS (Forest Resource Monitoring System) do Cục Lâm nghiệp và Kiểm lâm ban hành",
    "explanation": "Căn cứ Điểm b Khoản 2 Điều 19 Thông tư số 16/2025/TT-BNNMT và Hướng dẫn số 230/HD-CCKL: Ngành Kiểm lâm thống nhất ứng dụng phần mềm Cập nhật diễn biến rừng (FRMS) do Cục Lâm nghiệp và Kiểm lâm ban hành."
  },
  {
    "id": "KL_096",
    "question": "Thiết bị kỹ thuật nào sau đây là công cụ chính của Kiểm lâm địa bàn khi điều tra biến động rừng ngoài thực địa?",
    "options": [
      "Máy định vị vệ tinh GPS hoặc máy tính bảng chuyên dụng cài đặt phần mềm bản đồ định vị",
      "Thước cuộn may mặc 1,5 mét",
      "Ống nhòm du lịch thông thường không có chức năng đo đạc bản đồ",
      "La bàn cầm tay không có chức năng lưu tọa độ"
    ],
    "correct": "Máy định vị vệ tinh GPS hoặc máy tính bảng chuyên dụng cài đặt phần mềm bản đồ định vị",
    "explanation": "Căn cứ Điểm c Khoản 2 Điều 19 Thông tư số 16/2025/TT-BNNMT và Hướng dẫn số 230/HD-CCKL: Thiết bị phục vụ theo dõi diễn biến rừng gồm máy vi tính, máy định vị vệ tinh GPS, máy tính bảng và tàu bay không người lái (UAV)."
  },
  {
    "id": "KL_097",
    "question": "Nguyên nhân nào sau đây làm TĂNG diện tích rừng trong công tác theo dõi diễn biến rừng hàng năm?",
    "options": [
      "Trồng mới rừng trên đất chưa có rừng hoặc khoanh nuôi tái sinh đạt tiêu chí thành rừng",
      "Khai thác trắng rừng trồng đến tuổi khai thác",
      "Chuyển mục đích sử dụng rừng sang xây dựng công trình hạ tầng giao thông, thủy điện",
      "Cháy rừng gây thiệt hại hoàn toàn thảm thực vật"
    ],
    "correct": "Trồng mới rừng trên đất chưa có rừng hoặc khoanh nuôi tái sinh đạt tiêu chí thành rừng",
    "explanation": "Căn cứ Điểm d Khoản 3 Điều 19 Thông tư số 16/2025/TT-BNNMT và Mục V.2 Hướng dẫn số 230/HD-CCKL: Nguyên nhân tăng diện tích rừng gồm trồng rừng, rừng trồng đủ tiêu chí thành rừng, khoanh nuôi tái sinh đủ tiêu chí thành rừng và các nguyên nhân khác."
  },
  {
    "id": "KL_098",
    "question": "Chủ rừng có trách nhiệm gì khi diện tích rừng của mình có biến động (do khai thác, trồng mới, cháy rừng)?",
    "options": [
      "Báo cáo bằng văn bản hoặc trực tiếp cho Kiểm lâm địa bàn hoặc UBND cấp xã để kiểm tra cập nhật",
      "Tự chỉnh sửa số liệu trên phần mềm quản lý quốc gia",
      "Không cần thông báo cho cơ quan nào nếu diện tích rừng biến động nằm trong sổ đỏ của gia đình",
      "Chỉ báo cáo khi chuẩn bị bán đất rừng"
    ],
    "correct": "Báo cáo bằng văn bản hoặc trực tiếp cho Kiểm lâm địa bàn hoặc UBND cấp xã để kiểm tra cập nhật",
    "explanation": "Căn cứ Điểm a Khoản 4 Điều 19 Thông tư số 16/2025/TT-BNNMT: Trong thời hạn 15 ngày kể từ ngày có biến động về diện tích rừng, chủ rừng nhóm II có trách nhiệm báo cáo Hạt Kiểm lâm, chủ rừng nhóm I có trách nhiệm báo cáo Kiểm lâm địa bàn để tiếp nhận, xác minh thông tin biến động theo Biểu số 01 Phụ lục IX."
  },
  {
    "id": "KL_099",
    "question": "Ai có thẩm quyền phê duyệt và công bố số liệu hiện trạng rừng cấp tỉnh hàng năm?",
    "options": [
      "Chi cục trưởng Chi cục Kiểm lâm",
      "Chủ tịch Ủy ban nhân dân cấp tỉnh",
      "Giám đốc Văn phòng Đăng ký đất đai cấp tỉnh",
      "Cục trưởng Cục Thống kê tỉnh"
    ],
    "correct": "Chủ tịch Ủy ban nhân dân cấp tỉnh",
    "explanation": "Căn cứ Điểm d Khoản 4 Điều 19 Thông tư số 16/2025/TT-BNNMT: Chi cục Kiểm lâm lập hồ sơ báo cáo Sở Nông nghiệp và Môi trường trình Chủ tịch UBND cấp tỉnh quyết định công bố hiện trạng rừng cấp tỉnh hàng năm."
  },
  {
    "id": "KL_100",
    "question": "Thời hạn Chủ tịch UBND cấp tỉnh công bố số liệu hiện trạng rừng hàng năm chậm nhất là ngày nào?",
    "options": [
      "Trước ngày 28 tháng 02 năm sau liền kề",
      "Trước ngày 31 tháng 01 năm sau liền kề",
      "Trước ngày 31 tháng 03 năm sau liền kề",
      "Trước ngày 30 tháng 6 năm sau liền kề"
    ],
    "correct": "Trước ngày 28 tháng 02 năm sau liền kề",
    "explanation": "Căn cứ Điểm d Khoản 4 Điều 19 Thông tư số 16/2025/TT-BNNMT: Chi cục Kiểm lâm cấp tỉnh lập hồ sơ báo cáo Sở Nông nghiệp và Môi trường trình Chủ tịch UBND cấp tỉnh quyết định công bố hiện trạng rừng trước ngày 28 tháng 02 năm sau (thời hạn trước 31 tháng 3 năm sau là của Bộ Nông nghiệp và Môi trường công bố hiện trạng rừng toàn quốc)."
  },
  {
    "id": "KL_101",
    "question": "Theo Nghị định số 58/2024/NĐ-CP (sửa đổi, bổ sung bởi Nghị định 42/2026/NĐ-CP), mức cấp kinh phí bảo vệ rừng đặc dụng bình quân hàng năm cho Ban quản lý rừng đặc dụng là bao nhiêu?",
    "options": [
      "500.000 đồng/ha/năm",
      "200.000 đồng/ha/năm",
      "700.000 đồng/ha/năm",
      "1.000.000 đồng/ha/năm"
    ],
    "correct": "500.000 đồng/ha/năm",
    "explanation": "Điểm a Khoản 2 Điều 5 Nghị định số 58/2024/NĐ-CP (sửa đổi bởi Nghị định số 42/2026/NĐ-CP): Ban quản lý rừng đặc dụng, Ban quản lý rừng phòng hộ được Nhà nước cấp kinh phí bảo vệ rừng bình quân 500.000 đồng/ha/năm trên tổng diện tích được giao ngoài kinh phí sự nghiệp thường xuyên của các đơn vị."
  },
  {
    "id": "KL_102",
    "question": "Theo Nghị định số 58/2024/NĐ-CP (sửa đổi, bổ sung bởi Nghị định 42/2026/NĐ-CP), cộng đồng dân cư được Nhà nước giao rừng đặc dụng được cấp kinh phí bảo vệ rừng bình quân hàng năm là bao nhiêu?",
    "options": [
      "1.000.000 đồng/ha/năm",
      "500.000 đồng/ha/năm",
      "800.000 đồng/ha/năm",
      "600.000 đồng/ha/năm"
    ],
    "correct": "1.000.000 đồng/ha/năm",
    "explanation": "Điểm b Khoản 2 Điều 5 Nghị định số 58/2024/NĐ-CP (sửa đổi bởi Nghị định số 42/2026/NĐ-CP): Cộng đồng dân cư được giao rừng đặc dụng được Nhà nước cấp kinh phí bảo vệ rừng bình quân 1.000.000 đồng/ha/năm trên tổng diện tích rừng đặc dụng được giao."
  },
  {
    "id": "KL_103",
    "question": "Theo Nghị định số 58/2024/NĐ-CP, mức kinh phí cấp cho hoạt động khoanh nuôi xúc tiến tái sinh tự nhiên thuộc quy hoạch rừng đặc dụng được quy định như thế nào?",
    "options": [
      "Bình quân 2.500.000 đồng/ha/năm trong thời gian 6 năm (vùng đất ven biển bằng 1,5 lần mức bình quân)",
      "Bình quân 1.500.000 đồng/ha/năm trong thời gian 3 năm",
      "Bình quân 500.000 đồng/ha/năm trong thời gian 02 năm",
      "Bình quân 2.000.000 đồng/ha/năm trong thời gian 4 năm"
    ],
    "correct": "Bình quân 2.500.000 đồng/ha/năm trong thời gian 6 năm (vùng đất ven biển bằng 1,5 lần mức bình quân)",
    "explanation": "Điểm a Khoản 2 Điều 6 Nghị định số 58/2024/NĐ-CP: Khoanh nuôi xúc tiến tái sinh tự nhiên thuộc quy hoạch rừng đặc dụng có mức kinh phí bình quân 2.500.000 đồng/ha/năm trong thời gian 6 năm. Đối với vùng đất ven biển bằng 1,5 lần mức bình quân."
  },
  {
    "id": "KL_104",
    "question": "Theo Nghị định số 58/2024/NĐ-CP, cộng đồng dân cư thôn thuộc vùng đệm của các khu rừng đặc dụng được hỗ trợ kinh phí phát triển sinh kế bình quân là bao nhiêu?",
    "options": [
      "100.000.000 đồng/cộng đồng dân cư/năm",
      "50.000.000 đồng/cộng đồng dân cư/năm",
      "10.000.000 đồng/cộng đồng dân cư/năm",
      "200.000.000 đồng/cộng đồng dân cư/năm"
    ],
    "correct": "100.000.000 đồng/cộng đồng dân cư/năm",
    "explanation": "Khoản 1 Điều 8 Nghị định số 58/2024/NĐ-CP: Cộng đồng dân cư thuộc vùng đệm của khu rừng đặc dụng được hỗ trợ bình quân là 100.000.000 đồng/cộng đồng dân cư/năm để phát triển sinh kế, cải thiện đời sống."
  },
  {
    "id": "KL_105",
    "question": "Theo Nghị định số 58/2024/NĐ-CP, hộ gia đình, cá nhân, cộng đồng dân cư được giao rừng phòng hộ được cấp kinh phí bảo vệ rừng bình quân hàng năm là bao nhiêu?",
    "options": [
      "1.000.000 đồng/ha/năm",
      "500.000 đồng/ha/năm",
      "200.000 đồng/ha/năm",
      "400.000 đồng/ha/năm"
    ],
    "correct": "1.000.000 đồng/ha/năm",
    "explanation": "Điểm b Khoản 2 Điều 9 Nghị định số 58/2024/NĐ-CP dẫn chiếu Điểm b Khoản 2 Điều 5: Hộ gia đình, cá nhân, cộng đồng dân cư được Nhà nước cấp kinh phí bảo vệ rừng phòng hộ bình quân 1.000.000 đồng/ha/năm."
  },
  {
    "id": "KL_106",
    "question": "Theo Nghị định số 58/2024/NĐ-CP, Ban quản lý rừng đặc dụng, Ban quản lý rừng phòng hộ quản lý rừng sản xuất là rừng tự nhiên trong thời gian đóng cửa rừng được Nhà nước cấp kinh phí bảo vệ rừng bình quân bao nhiêu?",
    "options": [
      "500.000 đồng/ha/năm",
      "300.000 đồng/ha/năm",
      "400.000 đồng/ha/năm",
      "1.000.000 đồng/ha/năm"
    ],
    "correct": "500.000 đồng/ha/năm",
    "explanation": "Điểm a Khoản 2 Điều 12 Nghị định số 58/2024/NĐ-CP dẫn chiếu Điểm a Khoản 2 Điều 5: Ban quản lý rừng đặc dụng, Ban quản lý rừng phòng hộ được cấp kinh phí bảo vệ rừng sản xuất là rừng tự nhiên trong thời gian đóng cửa rừng bình quân 500.000 đồng/ha/năm."
  },
  {
    "id": "KL_107",
    "question": "Theo Nghị định số 58/2024/NĐ-CP, mức hỗ trợ một lần đối với hộ gia đình, cá nhân trồng rừng sản xuất lấy gỗ, cây lâm sản ngoài gỗ tại vùng đồng bào dân tộc thiểu số và miền núi là bao nhiêu?",
    "options": [
      "Bình quân 15.000.000 đồng/ha/chu kỳ",
      "Bình quân 10.000.000 đồng/ha/chu kỳ",
      "Bình quân 20.000.000 đồng/ha/chu kỳ",
      "Bình quân 12.000.000 đồng/ha/chu kỳ"
    ],
    "correct": "Bình quân 15.000.000 đồng/ha/chu kỳ",
    "explanation": "Điểm a Khoản 2 Điều 14 Nghị định số 58/2024/NĐ-CP: Hỗ trợ một lần bình quân 15.000.000 đồng/ha/chu kỳ để mua cây giống, vật tư, phân bón đối với trồng cây lấy gỗ, cây lâm sản ngoài gỗ theo chu kỳ kinh doanh của loài cây trồng."
  },
  {
    "id": "KL_108",
    "question": "Theo Nghị định số 58/2024/NĐ-CP, thời gian hỗ trợ lãi suất vốn vay thương mại tối đa đối với hộ gia đình, cá nhân trồng rừng gỗ lớn là bao lâu?",
    "options": [
      "Tối đa 12 năm tính từ ngày bắt đầu giải ngân theo hợp đồng tín dụng",
      "Tối đa 10 năm tính từ ngày ký hợp đồng",
      "Tối đa 15 năm tính từ ngày trồng rừng",
      "Tối đa 08 năm tính từ ngày giải ngân vốn vay"
    ],
    "correct": "Tối đa 12 năm tính từ ngày bắt đầu giải ngân theo hợp đồng tín dụng",
    "explanation": "Điểm b Khoản 2 Điều 15 Nghị định số 58/2024/NĐ-CP: Thời gian hỗ trợ lãi suất tính từ ngày bắt đầu giải ngân theo hợp đồng tín dụng đầu tư với ngân hàng thương mại, tối đa 12 năm; số vốn vay được hỗ trợ không quá 70% tổng vốn vay."
  },
  {
    "id": "KL_109",
    "question": "Theo Nghị định số 58/2024/NĐ-CP, mức hỗ trợ kinh phí xây dựng phương án quản lý rừng bền vững và cấp chứng chỉ quản lý rừng bền vững là bao nhiêu?",
    "options": [
      "Hỗ trợ sau đầu tư một lần tối đa 400.000 đồng/ha",
      "Hỗ trợ trực tiếp trước đầu tư 200.000 đồng/ha",
      "Hỗ trợ hàng năm tối đa 500.000 đồng/ha",
      "Hỗ trợ sau đầu tư một lần tối đa 300.000 đồng/ha"
    ],
    "correct": "Hỗ trợ sau đầu tư một lần tối đa 400.000 đồng/ha",
    "explanation": "Khoản 2 Điều 16 Nghị định số 58/2024/NĐ-CP: Mức hỗ trợ một lần xây dựng phương án quản lý rừng bền vững và cấp chứng chỉ quản lý rừng bền vững tối đa 400.000 đồng/ha theo hình thức hỗ trợ sau đầu tư."
  },
  {
    "id": "KL_110",
    "question": "Theo Nghị định số 58/2024/NĐ-CP, mức hỗ trợ đầu tư xây dựng đường lâm nghiệp tại khu vực trồng rừng sản xuất tập trung từ 500 ha trở lên tối đa là bao nhiêu?",
    "options": [
      "Tối đa 450.000.000 đồng/km",
      "Tối đa 300.000.000 đồng/km",
      "Tối đa 500.000.000 đồng/km",
      "Tối đa 400.000.000 đồng/km"
    ],
    "correct": "Tối đa 450.000.000 đồng/km",
    "explanation": "Điểm b Khoản 1 Điều 17 Nghị định số 58/2024/NĐ-CP: Mức hỗ trợ đầu tư xây dựng đường lâm nghiệp tối đa 450.000.000 đồng/km tại khu vực trồng rừng sản xuất có quy mô tập trung từ 500 ha trở lên."
  },
  {
    "id": "KL_111",
    "question": "Theo Nghị định số 58/2024/NĐ-CP, mức hỗ trợ đầu tư xây dựng đường băng cản lửa tại khu vực rừng sản xuất tập trung từ 500 ha trở lên tối đa là bao nhiêu?",
    "options": [
      "Tối đa 100.000.000 đồng/km",
      "Tối đa 50.000.000 đồng/km",
      "Tối đa 150.000.000 đồng/km",
      "Tối đa 80.000.000 đồng/km"
    ],
    "correct": "Tối đa 100.000.000 đồng/km",
    "explanation": "Điểm b Khoản 2 Điều 17 Nghị định số 58/2024/NĐ-CP: Mức hỗ trợ đầu tư xây dựng đường băng cản lửa tối đa 100.000.000 đồng/km tại khu rừng sản xuất có quy mô tập trung từ 500 ha trở lên."
  },
  {
    "id": "KL_112",
    "question": "Theo Nghị định số 58/2024/NĐ-CP, mức chi tiền ăn tối đa cho lực lượng tham gia chữa cháy rừng theo lệnh điều động, huy động được quy định như thế nào?",
    "options": [
      "Tối đa bằng 0,4 ngày lương tối thiểu vùng/suất ăn",
      "Tối đa bằng 0,2 ngày lương tối thiểu vùng/suất ăn",
      "Tối đa bằng 0,3 ngày lương tối thiểu vùng/suất ăn",
      "Cố định 100.000 đồng/suất ăn đối với mọi địa bàn"
    ],
    "correct": "Tối đa bằng 0,4 ngày lương tối thiểu vùng/suất ăn",
    "explanation": "Điểm a Khoản 2 Điều 20 Nghị định số 58/2024/NĐ-CP: Chi tiền ăn đối với các lực lượng và những người tham gia chữa cháy rừng theo lệnh điều động, huy động tối đa bằng 0,4 ngày lương tối thiểu vùng/suất ăn."
  },
  {
    "id": "KL_113",
    "question": "Theo Nghị định số 58/2024/NĐ-CP, mức trợ cấp gạo bảo vệ và phát triển rừng cho hộ gia đình nghèo, đồng bào dân tộc thiểu số tại xã khu vực II, III là bao nhiêu?",
    "options": [
      "15 kg gạo/khẩu/tháng, thời gian trợ cấp tối đa 7 năm",
      "10 kg gạo/khẩu/tháng, thời gian trợ cấp tối đa 5 năm",
      "20 kg gạo/khẩu/tháng, thời gian trợ cấp tối đa 3 năm",
      "15 kg gạo/khẩu/tháng, thời gian trợ cấp tối đa 5 năm"
    ],
    "correct": "15 kg gạo/khẩu/tháng, thời gian trợ cấp tối đa 7 năm",
    "explanation": "Khoản 2 Điều 21 Nghị định số 58/2024/NĐ-CP: Mức trợ cấp 15 kg gạo/khẩu/tháng; Chủ tịch UBND cấp tỉnh quyết định đối tượng, mức và hình thức cụ thể, thời gian trợ cấp tối đa 7 năm."
  },
  {
    "id": "KL_114",
    "question": "Theo Nghị định số 58/2024/NĐ-CP, mức hỗ trợ trồng cây phân tán (quy đổi 1.000 cây/ha) bình quân là bao nhiêu?",
    "options": [
      "Bình quân 15.000.000 đồng/ha",
      "Bình quân 10.000.000 đồng/ha",
      "Bình quân 20.000.000 đồng/ha",
      "Bình quân 12.000.000 đồng/ha"
    ],
    "correct": "Bình quân 15.000.000 đồng/ha",
    "explanation": "Khoản 2 Điều 23 Nghị định số 58/2024/NĐ-CP: Mức hỗ trợ bình quân 15.000.000 đồng/ha trồng cây phân tán (quy đổi 1.000 cây/ha) để hỗ trợ mua cây giống, phân bón và chi phí một phần nhân công trồng, chăm sóc, quản lý, giám sát."
  },
  {
    "id": "KL_115",
    "question": "Theo Nghị định số 58/2024/NĐ-CP (sửa đổi, bổ sung bởi Nghị định 42/2026/NĐ-CP), cơ quan nào chủ trì thẩm định thiết kế, dự toán công trình lâm sinh đối với các dự án do Chủ tịch Ủy ban nhân dân cấp tỉnh quyết định đầu tư?",
    "options": [
      "Sở Nông nghiệp và Môi trường",
      "Sở Tài chính",
      "Sở Kế hoạch và Đầu tư",
      "Chi cục Kiểm lâm cấp tỉnh"
    ],
    "correct": "Sở Nông nghiệp và Môi trường",
    "explanation": "Điểm c Khoản 1 Điều 31 Nghị định số 58/2024/NĐ-CP (sửa đổi bởi Nghị định số 42/2026/NĐ-CP): Đối với các dự án do Chủ tịch Ủy ban nhân dân cấp tỉnh quyết định đầu tư, Sở Nông nghiệp và Môi trường chủ trì thẩm định thiết kế, dự toán công trình lâm sinh."
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions_KL;
}
