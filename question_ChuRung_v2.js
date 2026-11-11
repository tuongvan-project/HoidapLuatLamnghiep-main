// ============================================================================
// BỘ CÂU HỎI TRẮC NGHIỆM ĐÃ RÀ SOÁT, ĐỐI CHIẾU VÀ CHUẨN HÓA PHÁP LÝ (BẢN V2 - NÂNG CAO ĐỘ KHÓ)
// Gói dữ liệu: Quyền, nghĩa vụ chủ rừng và chính sách lâm nghiệp (130 câu)
// Đã điều chỉnh: Tăng độ khó bằng cách thay thế 1 phương án sai lộ liễu thành phương án nhiễu tinh vi (plausible distractor)
// Bảo toàn: 100% câu hỏi, đáp án đúng và trích dẫn giải thích pháp lý nguyên vẹn
// ============================================================================

const question_ChuRung = [
  {
    "id": "ChuRung_001",
    "question": "Một khu đất trồng cây lâm nghiệp được công nhận đạt tiêu chí thành rừng khi đồng thời đáp ứng đủ cả 3 điều kiện nào sau đây?",
    "options": [
      "Độ tàn che từ 0,1 trở lên; Diện tích liền vùng từ 0,3 ha trở lên (hoặc dải cây rộng tối thiểu 20m); Chiều cao vút ngọn trung bình từ 5,0m trở lên (đối với đất đồi núi, đồng bằng)",
      "Độ tàn che từ 0,3 trở lên; Diện tích liền vùng từ 0,5 ha trở lên; Chiều cao cây bất kỳ không phân biệt",
      "Độ tàn che từ 0,05 trở lên; Diện tích đất từ 1,0 ha trở lên; Cây trồng đã sống được trên 02 năm",
      "Độ tàn che từ 0,2 trở lên; Diện tích liền vùng từ 0,5 ha trở lên; Chiều cao cây trung bình từ 3,0m trở lên đối với cây gỗ bản địa"
    ],
    "correct": "Độ tàn che từ 0,1 trở lên; Diện tích liền vùng từ 0,3 ha trở lên (hoặc dải cây rộng tối thiểu 20m); Chiều cao vút ngọn trung bình từ 5,0m trở lên (đối với đất đồi núi, đồng bằng)",
    "explanation": "Căn cứ Điều 5 Nghị định số 156/2018/NĐ-CP (được sửa đổi, bổ sung bởi Nghị định số 91/2024/NĐ-CP và Nghị định số 42/2026/NĐ-CP): Tiêu chí xác định rừng gồm 3 điều kiện: độ tàn che từ 0,1 trở lên; diện tích liền vùng từ 0,3 ha trở lên (hoặc dải cây rộng tối thiểu 20m, có từ 03 hàng cây trở lên); chiều cao vút ngọn trung bình từ 5,0m trở lên (đối với đồi núi, đồng bằng)."
  },
  {
    "id": "ChuRung_002",
    "question": "Theo Điều 19 Thông tư số 16/2025/TT-BNNMT, chủ rừng nhóm I (hộ gia đình, cá nhân) có trách nhiệm thông báo biến động diện tích rừng như thế nào?",
    "options": [
      "Thông báo cho Kiểm lâm địa bàn hoặc UBND cấp xã trong thời hạn 15 ngày kể từ ngày có biến động (do khai thác, trồng mới, cháy, sâu bệnh, sạt lở)",
      "Chỉ cần thông báo bằng miệng cho Trưởng thôn vào dịp họp thôn tổng kết cuối năm",
      "Thông báo bằng văn bản cho Phòng Nông nghiệp và Môi trường cấp huyện trong thời hạn 30 ngày kể từ ngày có biến động",
      "Không phải thông báo nếu diện tích rừng bị biến động dưới 01 héc-ta"
    ],
    "correct": "Thông báo cho Kiểm lâm địa bàn hoặc UBND cấp xã trong thời hạn 15 ngày kể từ ngày có biến động (do khai thác, trồng mới, cháy, sâu bệnh, sạt lở)",
    "explanation": "Căn cứ Điểm a Khoản 4 Điều 19 Thông tư số 16/2025/TT-BNNMT: Trong thời hạn 15 ngày kể từ ngày có biến động về diện tích rừng, chủ rừng nhóm I có trách nhiệm báo cáo Kiểm lâm làm việc tại địa bàn."
  },
  {
    "id": "ChuRung_003",
    "question": "Khi người dân đốt dọn thực bì làm nương rẫy giáp ranh với rừng, quy định an toàn phòng cháy chữa cháy rừng bắt buộc phải bảo đảm những yếu tố nào?",
    "options": [
      "Làm đường băng cản lửa rộng tối thiểu 4 - 6m bao quanh bãi đốt; đốt vào sáng sớm hoặc chiều tối khi gió lặng; thông báo cho Trưởng thôn/Kiểm lâm địa bàn; tuyệt đối cấm đốt khi dự báo cháy rừng Cấp IV, Cấp V",
      "Đốt vào buổi trưa nắng gắt để thực bì cháy nhanh và triệt để; không cần làm đường băng cản lửa nếu nương đã có bờ đá bao quanh",
      "Làm đường băng cản lửa rộng 2 - 3m; chỉ cần thông báo cho các chủ rừng liền kề trước 01 ngày mà không cần báo Kiểm lâm",
      "Chỉ cần xin phép bằng miệng của các hộ gia đình có nương liền kề mà không cần làm đường băng cản lửa"
    ],
    "correct": "Làm đường băng cản lửa rộng tối thiểu 4 - 6m bao quanh bãi đốt; đốt vào sáng sớm hoặc chiều tối khi gió lặng; thông báo cho Trưởng thôn/Kiểm lâm địa bàn; tuyệt đối cấm đốt khi dự báo cháy rừng Cấp IV, Cấp V",
    "explanation": "Căn cứ Điều 47 Nghị định số 156/2018/NĐ-CP và Điểm i Khoản 2 Điều 19 Nghị định số 146/2026/NĐ-CP: Phải làm đường băng cản lửa rộng từ 4 m đến 6 m bao quanh bãi đốt; đốt lúc gió nhẹ, vào sáng sớm hoặc chiều tối, có người canh gác đến khi tàn lửa tắt hẳn; tuyệt đối cấm đốt khi dự báo cháy rừng ở Cấp IV, Cấp V. Hành vi không thông báo và không thực hiện đúng quy định về sử dụng lửa khi đốt nương rẫy, đốt thực bì bị phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng."
  },
  {
    "id": "ChuRung_004",
    "question": "Hộ gia đình được giao rừng phòng hộ tự bỏ vốn trồng rừng, khi khai thác cây gỗ phụ trợ hoặc tỉa thưa phải tuân thủ điều kiện nào sau đây?",
    "options": [
      "Khai thác tỉa thưa cây phụ trợ nhưng phải bảo đảm độ tàn che của rừng sau khai thác không dưới 0,6; lập phương án khai thác gửi UBND xã và Kiểm lâm",
      "Được phép chặt trắng toàn bộ diện tích để trồng lại lứa cây mới có năng suất cao hơn",
      "Được khai thác tỉa thưa cây phụ trợ nhưng độ tàn che của rừng sau khai thác không được dưới 0,4",
      "Phải để rừng nguyên vẹn vĩnh viễn, nghiêm cấm khai thác bất kỳ cây gỗ nào dù tự bỏ vốn trồng"
    ],
    "correct": "Khai thác tỉa thưa cây phụ trợ nhưng phải bảo đảm độ tàn che của rừng sau khai thác không dưới 0,6; lập phương án khai thác gửi UBND xã và Kiểm lâm",
    "explanation": "Căn cứ Khoản 1 Điều 55 Luật Lâm nghiệp năm 2017 và Điều 20 Nghị định số 156/2018/NĐ-CP: Khai thác tỉa thưa rừng trồng phòng hộ phải bảo đảm duy trì độ tàn che của rừng sau khai thác không được nhỏ hơn 0,6."
  },
  {
    "id": "ChuRung_005",
    "question": "Hành vi vô ý đốt nương làm rẫy để lửa cháy lan vào rừng tự nhiên gây thiệt hại diện tích từ bao nhiêu héc-ta (ha) thì bị xử lý hình sự về Tội vi phạm quy định về PCCC (Điều 313 BLHS)?",
    "options": [
      "Thiệt hại từ 0,5 ha (5.000m²) rừng đặc dụng, từ 01 ha rừng phòng hộ hoặc từ 1,5 ha rừng sản xuất trở lên",
      "Chỉ khi gây cháy lan từ 10 ha rừng trở lên mới bị xử lý hình sự",
      "Thiệt hại từ 01 ha rừng đặc dụng, từ 02 ha rừng phòng hộ hoặc từ 03 ha rừng sản xuất trở lên",
      "Gây thiệt hại từ 100 ha rừng trở lên mới cấu thành tội phạm"
    ],
    "correct": "Thiệt hại từ 0,5 ha (5.000m²) rừng đặc dụng, từ 01 ha rừng phòng hộ hoặc từ 1,5 ha rừng sản xuất trở lên",
    "explanation": "Điều 313 Bộ luật Hình sự (sửa đổi): Vi phạm quy định về PCCC gây cháy rừng đặc dụng từ 5.000m², rừng phòng hộ từ 10.000m² hoặc rừng sản xuất từ 15.000m² bị truy cứu trách nhiệm hình sự."
  },
  {
    "id": "ChuRung_006",
    "question": "Hành vi chặt phá rừng sản xuất là rừng tự nhiên trái phép đến ngưỡng diện tích tối thiểu bao nhiêu thì bị truy cứu trách nhiệm hình sự theo Điều 243 BLHS?",
    "options": [
      "Diện tích từ 5.000 m² (0,5 ha) trở lên, hoặc từ 2.500 m² nếu đã bị xử phạt VPHC về hành vi này mà còn tái phạm",
      "Diện tích từ 1.000 m² trở lên trong mọi trường hợp",
      "Diện tích từ 3.000 m² (0,3 ha) đối với rừng gỗ lớn và từ 5.000 m² đối với rừng tre nứa",
      "Chỉ bị xử lý hình sự khi chặt hạ các cây gỗ có đường kính trên 01 mét"
    ],
    "correct": "Diện tích từ 5.000 m² (0,5 ha) trở lên, hoặc từ 2.500 m² nếu đã bị xử phạt VPHC về hành vi này mà còn tái phạm",
    "explanation": "Điểm b Khoản 1 Điều 243 Bộ luật Hình sự: Phá rừng sản xuất là rừng tự nhiên từ 5.000 m² đến dưới 10.000 m² (hoặc dưới mức này nhưng đã bị xử phạt VPHC) bị phạt tù từ 1 đến 5 năm."
  },
  {
    "id": "ChuRung_007",
    "question": "Đối với rừng đặc dụng, hành vi chặt phá rừng trái phép với diện tích tối thiểu bao nhiêu thì bị khởi tố hình sự theo Điều 243 BLHS?",
    "options": [
      "Diện tích chỉ từ 1.000 m² (0,1 ha) trở lên đã cấu thành tội phạm hình sự",
      "Diện tích từ 5.000 m² trở lên mới bị truy cứu hình sự",
      "Diện tích từ 2.000 m² (0,2 ha) trở lên đối với phân khu bảo vệ nghiêm ngặt",
      "Rừng đặc dụng không quy định diện tích hình sự mà chỉ phạt tiền"
    ],
    "correct": "Diện tích chỉ từ 1.000 m² (0,1 ha) trở lên đã cấu thành tội phạm hình sự",
    "explanation": "Căn cứ Điểm d Khoản 1 Điều 243 Bộ luật Hình sự: Hành vi hủy hoại rừng đặc dụng có diện tích từ 1.000 m² đến dưới 3.000 m² bị phạt tiền từ 50.000.000 đồng đến 500.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm."
  },
  {
    "id": "ChuRung_008",
    "question": "Hộ gia đình, cá nhân tự ý chặt, phá, san ủi đất rừng để chuyển sang trồng cây nông nghiệp khi chưa được cơ quan có thẩm quyền cho phép sẽ bị xử phạt như thế nào?",
    "options": [
      "Bị phạt tiền từ mức thấp nhất 3.000.000 đồng đến tối đa 250.000.000 đồng (hoặc đến 500.000.000 đồng nếu là rừng tự nhiên) tùy diện tích; buộc khôi phục lại tình trạng ban đầu của rừng",
      "Chỉ bị nhắc nhở và được cơ quan nhà nước tự động hợp thức hóa cấp sổ đỏ sang đất nông nghiệp",
      "Chỉ bị xử phạt vi phạm hành chính về hành vi sử dụng đất sai mục đích theo pháp luật về đất đai mà không bị phạt về lâm nghiệp",
      "Chỉ bị phạt tiền mức cố định 200.000 đồng cho một vụ việc vi phạm"
    ],
    "correct": "Bị phạt tiền từ mức thấp nhất 3.000.000 đồng đến tối đa 250.000.000 đồng (hoặc đến 500.000.000 đồng nếu là rừng tự nhiên) tùy diện tích; buộc khôi phục lại tình trạng ban đầu của rừng",
    "explanation": "Căn cứ Điều 23 Nghị định số 146/2026/NĐ-CP: Hành vi chặt, đốt, phá cây rừng, đào, bới, san ủi đất rừng trái phép cấu thành hành vi Phá rừng; khung phạt tiền khởi điểm từ 3.000.000 đồng đến tối đa 250.000.000 đồng (đối với rừng trồng), trường hợp phá rừng tự nhiên thì áp dụng mức phạt bằng hai lần (lên đến 500.000.000 đồng); đồng thời buộc thực hiện biện pháp khắc phục hậu quả là khôi phục lại tình trạng ban đầu của rừng."
  },
  {
    "id": "ChuRung_009",
    "question": "Khi khai thác gỗ rừng trồng do hộ gia đình tự đầu tư trên đất rừng sản xuất đã được cấp giấy chứng nhận quyền sử dụng đất, thủ tục pháp lý quy định ra sao?",
    "options": [
      "Chủ rừng tự quyết định việc khai thác; trước khi khai thác lập Bảng kê lâm sản và tự chịu trách nhiệm về nguồn gốc lâm sản hợp pháp",
      "Bắt buộc phải làm đơn xin phép và được Chủ tịch UBND tỉnh phê duyệt mới được chặt cây",
      "Phải gửi phương án khai thác lên Ủy ban nhân dân cấp xã để phê duyệt trước khi chặt hạ ít nhất 05 ngày làm việc",
      "Bắt buộc phải bán toàn bộ sản lượng gỗ khai thác cho Công ty lâm nghiệp nhà nước"
    ],
    "correct": "Chủ rừng tự quyết định việc khai thác; trước khi khai thác lập Bảng kê lâm sản và tự chịu trách nhiệm về nguồn gốc lâm sản hợp pháp",
    "explanation": "Căn cứ Điều 59 Luật Lâm nghiệp năm 2017 và Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT): Rừng trồng sản xuất do chủ rừng tự đầu tư thì chủ rừng tự quyết định khai thác, tự lập Bảng kê lâm sản khi xuất bán."
  },
  {
    "id": "ChuRung_010",
    "question": "Hộ gia đình nhận khoán bảo vệ rừng phòng hộ có được phép chăn thả gia súc (trâu, bò, dê) trong phân khu rừng phòng hộ xung yếu không?",
    "options": [
      "Nghiêm cấm chăn thả gia súc ở các khu rừng mới trồng, rừng đang trong thời kỳ tái sinh phục hồi; khu vực rừng đã khép tán chỉ được chăn thả có kiểm soát theo quy định",
      "Được phép thả rông không giới hạn số lượng gia súc ở mọi vị trí trong rừng phòng hộ",
      "Được phép chặt hạ cây rừng để làm hàng rào nhốt đàn bò hàng trăm con",
      "Được phép chăn thả có kiểm soát nếu có sự chấp thuận bằng văn bản của Trưởng thôn nơi có rừng"
    ],
    "correct": "Nghiêm cấm chăn thả gia súc ở các khu rừng mới trồng, rừng đang trong thời kỳ tái sinh phục hồi; khu vực rừng đã khép tán chỉ được chăn thả có kiểm soát theo quy định",
    "explanation": "Căn cứ Khoản 1 Điều 56 Luật Lâm nghiệp năm 2017 và Điểm e Khoản 2 Điều 19 Nghị định số 146/2026/NĐ-CP: Nghiêm cấm chăn thả gia súc, vật nuôi vào rừng phòng hộ mới trồng, đang trong thời kỳ chăm sóc hoặc tái sinh phục hồi; người vi phạm bị xử phạt và buộc đưa vật nuôi ra khỏi rừng."
  },
  {
    "id": "ChuRung_011",
    "question": "Người dân vô tình nhặt được cá thể động vật hoang dã bị thương, kiệt sức trong rừng (như khỉ, cu li, trăn) thì phải xử lý như thế nào là đúng luật?",
    "options": [
      "Báo ngay hoặc mang đến giao nộp cho Cơ quan Kiểm lâm sở tại hoặc UBND cấp xã gần nhất để cứu hộ; tuyệt đối không tự ý giữ nuôi, giết thịt hoặc rao bán",
      "Tự ý mang về nhà nhốt làm cảnh và đăng bài bán lên mạng xã hội lấy tiền bồi dưỡng",
      "Tạm thời nuôi nhốt tại gia đình và làm đơn đề nghị cơ quan Kiểm lâm hỗ trợ kinh phí chăm sóc",
      "Mổ thịt liên hoan cùng bà con lối xóm vì con vật tự bò vào nương của mình"
    ],
    "correct": "Báo ngay hoặc mang đến giao nộp cho Cơ quan Kiểm lâm sở tại hoặc UBND cấp xã gần nhất để cứu hộ; tuyệt đối không tự ý giữ nuôi, giết thịt hoặc rao bán",
    "explanation": "Căn cứ Điều 15 Thông tư số 85/2025/TT-BNNMT và Điều 29 Nghị định số 29/2018/NĐ-CP: Động vật rừng bị lạc, bị thương, bị bệnh, suy kiệt sức khỏe là tài sản công; người dân có trách nhiệm thông báo ngay cho UBND cấp xã nơi phát hiện hoặc cơ quan Kiểm lâm sở tại để kiểm tra, tiếp nhận và tổ chức cứu hộ theo quy định; tự ý nuôi giữ, giết thịt hoặc mua bán là vi phạm pháp luật."
  },
  {
    "id": "ChuRung_012",
    "question": "Hành vi đặt bẫy thú (bẫy kẹp sắt, bẫy thòng lọng, dây phanh) trên đất rừng được giao quản lý bảo vệ để bảo vệ nương rẫy có vi phạm pháp luật không?",
    "options": [
      "Là hành vi vi phạm pháp luật về bảo vệ động vật rừng bị nghiêm cấm; bị xử phạt VPHC, tịch thu toàn bộ bẫy và bồi thường thiệt hại nếu gây chết động vật",
      "Hoàn toàn hợp pháp vì nương rẫy thuộc quyền sở hữu của gia đình",
      "Chỉ bị xử phạt nếu giăng bẫy trong mùa sinh sản của động vật hoang dã",
      "Được khuyến khích để diệt trừ các loài thú hoang phá hoại mùa màng"
    ],
    "correct": "Là hành vi vi phạm pháp luật về bảo vệ động vật rừng bị nghiêm cấm; bị xử phạt VPHC, tịch thu toàn bộ bẫy và bồi thường thiệt hại nếu gây chết động vật",
    "explanation": "Điều 9 Luật Lâm nghiệp và Điều 24 Nghị định 146/2026/NĐ-CP nghiêm cấm mọi hành vi đặt bẫy, săn bắt động vật rừng trái phép trong rừng dưới bất kỳ lý do nào."
  },
  {
    "id": "ChuRung_013",
    "question": "Theo Nghị định số 58/2024/NĐ-CP của Chính phủ, chính sách hỗ trợ khoán bảo vệ rừng đối với hộ gia đình đồng bào dân tộc thiểu số ở xã khu vực III được hỗ trợ mức kinh phí nào?",
    "options": [
      "Mức hỗ trợ tối thiểu từ 500.000 đồng/ha/năm (vùng đặc biệt khó khăn có thể áp dụng mức cao hơn theo quy định)",
      "Chỉ hỗ trợ 50.000 đồng/ha/năm",
      "Không hỗ trợ tiền mặt, chỉ hỗ trợ cây giống ngô lai",
      "Chỉ bị thu hồi nếu diện tích đất rừng bị bỏ hoang liên tục trên 36 tháng"
    ],
    "correct": "Mức hỗ trợ tối thiểu từ 500.000 đồng/ha/năm (vùng đặc biệt khó khăn có thể áp dụng mức cao hơn theo quy định)",
    "explanation": "Căn cứ Điều 5 và Điều 6 Nghị định số 58/2024/NĐ-CP của Chính phủ: Hộ đồng bào DTTS nghèo ở xã khu vực III nhận khoán bảo vệ rừng được ngân sách nhà nước hỗ trợ bình quân tối thiểu từ 500.000 đồng/ha/năm."
  },
  {
    "id": "ChuRung_014",
    "question": "Khi phát hiện một nhóm người lạ mặt mang theo cưa xăng, dao rựa vào chặt phá rừng gần nương nhà mình, người dân cần làm gì?",
    "options": [
      "Kịp thời thông báo ngay cho Kiểm lâm địa bàn, Trưởng thôn hoặc Công an xã; không manh động đơn độc va chạm trực tiếp với các đối tượng",
      "Tự ý cầm hung khí ra đánh nhau với các đối tượng chặt phá rừng",
      "Mặc kệ không quan tâm vì đó không phải là diện tích rừng của nhà mình",
      "Cần có phương án chuyển đổi được Ủy ban nhân dân cấp xã phê duyệt kèm cam kết trồng lại rừng"
    ],
    "correct": "Kịp thời thông báo ngay cho Kiểm lâm địa bàn, Trưởng thôn hoặc Công an xã; không manh động đơn độc va chạm trực tiếp với các đối tượng",
    "explanation": "Căn cứ Điều 102 Luật Lâm nghiệp năm 2017 và Điều 19 Bộ luật Tố tụng hình sự năm 2015: Người dân có quyền và nghĩa vụ tố giác hành vi phá rừng trái pháp luật với cơ quan Kiểm lâm, Công an xã để kịp thời ngăn chặn."
  },
  {
    "id": "ChuRung_015",
    "question": "Hộ gia đình có rừng tự nhiên được giao quản lý bảo vệ có được tự ý chặt hạ các cây gỗ mục, cây khô đổ gãy về làm củi hoặc dựng nhà không?",
    "options": [
      "Không được tự ý chặt hạ; phải làm đơn báo cáo UBND xã và Kiểm lâm kiểm tra, hướng dẫn thủ tục tận thu theo đúng quy định pháp luật",
      "Được toàn quyền chặt hạ bất kỳ lúc nào vì cây đã bị khô đổ",
      "Chỉ cần làm thủ tục xin cấp đổi sổ đỏ tại Chi nhánh Văn phòng đăng ký đất đai cấp huyện",
      "Chỉ cần mời Trưởng thôn đến chứng kiến là được mang về nhà sử dụng"
    ],
    "correct": "Không được tự ý chặt hạ; phải làm đơn báo cáo UBND xã và Kiểm lâm kiểm tra, hướng dẫn thủ tục tận thu theo đúng quy định pháp luật",
    "explanation": "Căn cứ Điều 58 Luật Lâm nghiệp năm 2017 và Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT): Gỗ cây khô đổ, gãy mục trong rừng tự nhiên thuộc sở hữu toàn dân; việc tận thu phải được lập phương án và báo cáo cơ quan có thẩm quyền theo quy định."
  },
  {
    "id": "ChuRung_016",
    "question": "Hành vi lấn, chiếm đất rừng đặc dụng để trồng cây ăn quả, làm nhà tạm sẽ bị xử lý như thế nào theo Nghị định 146/2026/NĐ-CP?",
    "options": [
      "Bị phạt tiền từ 1.000.000 đồng đến tối đa 80.000.000 đồng (đối với rừng trồng) hoặc đến 160.000.000 đồng (đối với rừng tự nhiên); buộc khôi phục lại tình trạng ban đầu và trả lại đất rừng đã lấn chiếm",
      "Được miễn phạt nếu cam kết sau khi thu hoạch hoa quả sẽ trả lại đất",
      "Ủy ban nhân dân cấp xã có thẩm quyền cấp đổi sổ đỏ và điều chỉnh ranh giới đất rừng",
      "Được chính quyền xã cấp phép xây dựng hợp thức hóa nhà ở"
    ],
    "correct": "Bị phạt tiền từ 1.000.000 đồng đến tối đa 80.000.000 đồng (đối với rừng trồng) hoặc đến 160.000.000 đồng (đối với rừng tự nhiên); buộc khôi phục lại tình trạng ban đầu và trả lại đất rừng đã lấn chiếm",
    "explanation": "Căn cứ Điều 10 Nghị định số 146/2026/NĐ-CP: Hành vi lấn, chiếm rừng đặc dụng bị phạt tiền từ 1.000.000 đồng đến tối đa 80.000.000 đồng đối với rừng trồng (từ 10.000 m² trở lên); trường hợp lấn, chiếm rừng tự nhiên thì áp dụng mức phạt bằng hai lần (lên đến 160.000.000 đồng); đồng thời buộc áp dụng biện pháp khắc phục hậu quả khôi phục lại tình trạng ban đầu và trả lại diện tích rừng đã lấn chiếm."
  },
  {
    "id": "ChuRung_017",
    "question": "Cộng đồng dân cư thôn được Nhà nước giao rừng tín ngưỡng thì ai là người đại diện hợp pháp trước pháp luật của cộng đồng trong quản lý khu rừng?",
    "options": [
      "Trưởng thôn (hoặc người đại diện do cộng đồng dân cư thôn họp bầu ra)",
      "Chủ tịch Hội Cựu chiến binh của xã",
      "Bất kỳ người cao tuổi nào sinh sống trong thôn",
      "Được bồi thường 100% bằng diện tích đất lâm nghiệp khác có giá trị tương đương tại địa phương"
    ],
    "correct": "Trưởng thôn (hoặc người đại diện do cộng đồng dân cư thôn họp bầu ra)",
    "explanation": "Căn cứ Điều 86 Luật Lâm nghiệp năm 2017 hoặc khoản 3 Điều 6 Luật Đất đai quy định Người đại diện cho cộng đồng dân cư là trưởng thôn, làng, ấp, bản, bon, buôn, phum, sóc, tổ dân phố và điểm dân cư tương tự hoặc người được cộng đồng dân cư thỏa thuận cử ra."
  },
  {
    "id": "ChuRung_018",
    "question": "Người dân tự ý mang các loại thuốc diệt cỏ, hóa chất cực độc vào rừng phun để dọn thực bì trước khi trồng rừng bị xử lý như thế nào?",
    "options": [
      "Bị nghiêm cấm và bị xử phạt nặng về hành vi hủy hoại sinh thái rừng, gây ô nhiễm môi trường đất, nguồn nước tự nhiên",
      "Được phép sử dụng thoải mái nếu thuốc diệt cỏ mua tại quầy thuốc bảo vệ thực vật",
      "Chỉ bị xử phạt cảnh cáo nếu chỉ chặt hạ các cây bụi, dây leo và lau lách dưới tán rừng",
      "Chỉ bị phạt nếu hóa chất làm chết các cây gỗ to trên 10 năm tuổi"
    ],
    "correct": "Bị nghiêm cấm và bị xử phạt nặng về hành vi hủy hoại sinh thái rừng, gây ô nhiễm môi trường đất, nguồn nước tự nhiên",
    "explanation": "Căn cứ Khoản 6 Điều 9 Luật Lâm nghiệp năm 2017 và Điều 235 Bộ luật Hình sự: Nghiêm cấm đưa hóa chất độc hại, chất diệt cỏ vào rừng hủy hoại hệ sinh thái; hành vi này bị phạt tiền rất nặng hoặc xử lý hình sự về tội gây ô nhiễm môi trường."
  },
  {
    "id": "ChuRung_019",
    "question": "Chủ rừng là hộ gia đình khi phát hiện rừng của mình bị sâu róm hoặc bệnh chết héo xuất hiện lây lan trên diện rộng thì có trách nhiệm gì?",
    "options": [
      "Báo ngay cho Kiểm lâm địa bàn hoặc cán bộ khuyến nông/UBND xã để kiểm tra, hướng dẫn biện pháp kỹ thuật phòng trừ dập dịch kịp thời",
      "Tự ý đốt lửa hun khói khắp cánh rừng để xua đuổi sâu bọ",
      "Mặc kệ cho sâu bệnh tự ăn hết lá cây vì rừng tự nhiên có khả năng tự phục hồi",
      "Tự mua thuốc bảo vệ thực vật hóa học về phun diện rộng mà không cần hướng dẫn của cán bộ chuyên môn"
    ],
    "correct": "Báo ngay cho Kiểm lâm địa bàn hoặc cán bộ khuyến nông/UBND xã để kiểm tra, hướng dẫn biện pháp kỹ thuật phòng trừ dập dịch kịp thời",
    "explanation": "Chủ rừng có nghĩa vụ phòng trừ sinh vật hại rừng; khi dịch hại bùng phát phải thông báo cho cơ quan chuyên môn để phối hợp xử lý dập dịch theo Điều 61 Luật Lâm nghiệp."
  },
  {
    "id": "ChuRung_020",
    "question": "Hộ gia đình có đất rừng sản xuất có được phép tự ý chia lô, phân nền đất rừng để bán cho người khác làm nhà ở không?",
    "options": [
      "Nghiêm cấm tuyệt đối việc tự ý phân lô, bán nền đất rừng; hành vi này vi phạm pháp luật đất đai và lâm nghiệp, giao dịch bị vô hiệu và bị xử phạt nghiêm khắc",
      "Được phép tự do phân lô bán nền nếu có giấy viết tay giữa các bên",
      "Được phép chuyển nhượng một phần diện tích đất rừng sản xuất nếu mảnh đất tách thửa từ 1.000m² trở lên",
      "Chỉ cần nộp thuế sử dụng đất phi nông nghiệp cho cán bộ địa chính xã"
    ],
    "correct": "Nghiêm cấm tuyệt đối việc tự ý phân lô, bán nền đất rừng; hành vi này vi phạm pháp luật đất đai và lâm nghiệp, giao dịch bị vô hiệu và bị xử phạt nghiêm khắc",
    "explanation": "Căn cứ Điều 9 Luật Lâm nghiệp năm 2017 và Điều 31 Luật Đất đai năm 2024: Đất rừng sản xuất bắt buộc phải sử dụng đúng mục đích lâm nghiệp; nghiêm cấm tự ý phân lô, bán nền làm nhà ở trên đất rừng."
  },
  {
    "id": "ChuRung_021",
    "question": "Người dân vào rừng hái các loại phong lan rừng quý hiếm, đào gốc cây cảnh cổ thụ mang về bán kiếm tiền có vi phạm pháp luật không?",
    "options": [
      "Vi phạm quy định về khai thác thực vật rừng trái phép; bị xử phạt vi phạm hành chính, tịch thu toàn bộ phong lan, cây cảnh và công cụ khai thác",
      "Hoàn toàn hợp pháp vì hoa lan và cây cảnh là lâm sản phụ mọc tự nhiên không ai sở hữu",
      "Được phép hái lượm nếu loài hoa lan hoặc cây cảnh không nằm trong Danh mục thực vật rừng nguy cấp, quý, hiếm",
      "Chỉ vi phạm nếu đào cây cảnh to bằng xe cẩu chuyên dụng"
    ],
    "correct": "Vi phạm quy định về khai thác thực vật rừng trái phép; bị xử phạt vi phạm hành chính, tịch thu toàn bộ phong lan, cây cảnh và công cụ khai thác",
    "explanation": "Căn cứ Điều 14 và Điều 16 Nghị định số 146/2026/NĐ-CP: Hành vi khai thác thực vật rừng tự nhiên ngoài gỗ hoặc loài nguy cấp, quý, hiếm (như lan hài, lan hoàng thảo...) trái pháp luật bị phạt tiền theo trị giá lâm sản, tịch thu toàn bộ tang vật vi phạm và buộc nộp lại số lợi bất hợp pháp."
  },
  {
    "id": "ChuRung_022",
    "question": "Theo quy định, tiền chi trả Dịch vụ môi trường rừng (DVMTR) hàng năm mà chủ rừng là hộ gia đình nhận được từ Quỹ Bảo vệ và Phát triển rừng dùng vào mục đích gì?",
    "options": [
      "Dùng phục vụ công tác tuần tra, bảo vệ rừng, phòng cháy chữa cháy rừng và nâng cao thu nhập, cải thiện đời sống của hộ nhận khoán",
      "Bắt buộc phải nộp lại 100% cho Ủy ban nhân dân xã làm quỹ xây dựng nông thôn mới",
      "Phải trích nộp 30% tổng số tiền nhận được vào Quỹ phát triển thôn bản để phục vụ công ích",
      "Tự do sử dụng để tổ chức đánh bạc và uống rượu bia"
    ],
    "correct": "Dùng phục vụ công tác tuần tra, bảo vệ rừng, phòng cháy chữa cháy rừng và nâng cao thu nhập, cải thiện đời sống của hộ nhận khoán",
    "explanation": "Căn cứ Điều 63 và Điều 70 Nghị định số 156/2018/NĐ-CP: Tiền chi trả DVMTR dùng để bù đắp chi phí quản lý, bảo vệ rừng, phòng cháy chữa cháy rừng và đầu tư sinh kế, nâng cao thu nhập cho chủ rừng nhận khoán."
  },
  {
    "id": "ChuRung_023",
    "question": "Hành vi sử dụng kích điện, hóa chất hoặc thuốc nổ để đánh bắt thủy sản trong các khe suối, hồ đập thuộc rừng phòng hộ, rừng đặc dụng bị xử phạt ra sao?",
    "options": [
      "Bị nghiêm cấm tuyệt đối; bị phạt tiền nặng, tịch thu toàn bộ kích điện/hóa chất và có thể bị truy cứu trách nhiệm hình sự về tội hủy hoại nguồn lợi thủy sản",
      "Được phép sử dụng nếu chỉ kích điện bắt cá nhỏ làm mồi nhử",
      "Chỉ bị xử phạt vi phạm hành chính theo pháp luật thủy sản mà không bị xử lý về pháp luật lâm nghiệp",
      "Không bị phạt nếu suối nước không có biển cắm cấm đánh bắt cá"
    ],
    "correct": "Bị nghiêm cấm tuyệt đối; bị phạt tiền nặng, tịch thu toàn bộ kích điện/hóa chất và có thể bị truy cứu trách nhiệm hình sự về tội hủy hoại nguồn lợi thủy sản",
    "explanation": "Luật Thủy sản và Luật Lâm nghiệp nghiêm cấm dùng chất nổ, chất độc, xung điện đánh bắt thủy sản; hành vi này bị xử phạt nặng hoặc phạt tù theo Điều 242 BLHS."
  },
  {
    "id": "ChuRung_024",
    "question": "Người dân tự ý dựng lều quán, tổ chức dịch vụ ăn uống, cắm trại dã ngoại tự phát trong rừng đặc dụng bị xử lý thế nào?",
    "options": [
      "Bị xử phạt vi phạm hành chính về hành vi sử dụng môi trường rừng trái quy định; buộc tháo dỡ công trình lều quán và khôi phục lại tình trạng ban đầu",
      "Được hoan nghênh vì góp phần phát triển du lịch địa phương",
      "Được phép dựng công trình tạm bằng tre nứa, bạt che nếu có hợp đồng liên kết với Ban quản lý rừng",
      "Không bị xử lý nếu đã đóng tiền vệ sinh môi trường cho đội bảo vệ rừng"
    ],
    "correct": "Bị xử phạt vi phạm hành chính về hành vi sử dụng môi trường rừng trái quy định; buộc tháo dỡ công trình lều quán và khôi phục lại tình trạng ban đầu",
    "explanation": "Căn cứ Điều 11 Nghị định số 146/2026/NĐ-CP và Điều 14 Nghị định số 156/2018/NĐ-CP: Tổ chức các dịch vụ du lịch, kinh doanh, cắm trại, nghỉ dưỡng trong rừng đặc dụng mà không được phép của chủ rừng hoặc không có đề án, dự án được phê duyệt bị phạt tiền từ 4.000.000 đồng đến 50.000.000 đồng và buộc khôi phục lại tình trạng ban đầu."
  },
  {
    "id": "ChuRung_025",
    "question": "Khi cây rừng trồng giáp ranh nhà ở bị nghiêng, có nguy cơ gãy đổ đè sập nhà hoặc đường dây điện trong mùa mưa bão, chủ nhà cần làm gì?",
    "options": [
      "Báo cáo ngay Trưởng thôn và UBND cấp xã/Kiểm lâm địa bàn để lập biên bản hiện trạng và tiến hành chặt tỉa hạ thấp độ cao bảo đảm an toàn tính mạng người dân",
      "Mặc kệ chờ cho cây tự đổ vào nhà để yêu cầu cơ quan Kiểm lâm bồi thường thiệt hại",
      "Chủ nhà được tự ý chặt hạ cây đổ nếu cây trồng nằm hoàn toàn trong phạm vi ranh giới đất ở của gia đình",
      "Đốt gốc cây vào ban đêm để cây gãy đổ ra phía đường quốc lộ"
    ],
    "correct": "Báo cáo ngay Trưởng thôn và UBND cấp xã/Kiểm lâm địa bàn để lập biên bản hiện trạng và tiến hành chặt tỉa hạ thấp độ cao bảo đảm an toàn tính mạng người dân",
    "explanation": "Căn cứ Điều 604 Bộ luật Dân sự năm 2015 và quy định về phòng chống thiên tai: Chủ cây có trách nhiệm chặt tỉa cành cây có nguy cơ gãy đổ; trường hợp khẩn cấp thông báo chính quyền địa phương lập biên bản phối hợp xử lý an toàn."
  },
  {
    "id": "ChuRung_026",
    "question": "Việc mua bán đất rừng sản xuất bằng 'giấy viết tay' giữa các cá nhân mà không qua công chứng, chứng thực và không làm thủ tục sang tên có giá trị pháp lý không?",
    "options": [
      "Không có giá trị pháp lý, hợp đồng vô hiệu; người mua đối mặt nguy cơ mất trắng tiền và không được cấp Giấy chứng nhận quyền sử dụng đất",
      "Có giá trị pháp lý tuyệt đối nếu có chữ ký của người bán và người mua",
      "Có giá trị pháp lý nếu hợp đồng mua bán viết tay có chữ ký xác nhận của Trưởng thôn",
      "Chỉ cần đem giấy tay lên nộp cho Trưởng thôn ký xác nhận là hợp pháp"
    ],
    "correct": "Không có giá trị pháp lý, hợp đồng vô hiệu; người mua đối mặt nguy cơ mất trắng tiền và không được cấp Giấy chứng nhận quyền sử dụng đất",
    "explanation": "Căn cứ Điều 502 và Điều 503 Bộ luật Dân sự năm 2015, Điều 27 và Điều 45 Luật Đất đai năm 2024 (số 31/2024/QH15): Hợp đồng chuyển nhượng quyền sử dụng đất phải được công chứng hoặc chứng thực và đăng ký biến động tại cơ quan đăng ký đất đai mới có hiệu lực pháp lý; việc chuyển nhượng bằng giấy viết tay không qua công chứng/chứng thực là vô hiệu."
  },
  {
    "id": "ChuRung_027",
    "question": "Người dân tự ý vào rừng tự nhiên thu nhặt củi khô, nấm hương, mộc nhĩ có cần phải làm đơn xin phép cơ quan Kiểm lâm không?",
    "options": [
      "Được phép thu nhặt lâm sản phụ thông thường (củi khô, nấm, rau rừng) phục vụ sinh hoạt thiết yếu gia đình theo quy chế quản lý rừng, nhưng không được hủy hoại cây rừng và phải bảo đảm PCCC",
      "Bắt buộc phải có Giấy phép khai thác của Giám đốc Sở Nông nghiệp và Môi trường",
      "Bắt buộc phải có Giấy xác nhận của Trưởng thôn và Kiểm lâm địa bàn mới được phép thu lượm lâm sản phụ",
      "Chỉ được thu nhặt nếu trả phí bản quyền cho Trạm Kiểm lâm địa bàn"
    ],
    "correct": "Được phép thu nhặt lâm sản phụ thông thường (củi khô, nấm, rau rừng) phục vụ sinh hoạt thiết yếu gia đình theo quy chế quản lý rừng, nhưng không được hủy hoại cây rừng và phải bảo đảm PCCC",
    "explanation": "Căn cứ Điều 54 và Điều 56 Luật Lâm nghiệp năm 2017: Người dân cư trú hợp pháp trong rừng được phép thu hái lâm sản phụ thông thường (củi khô, nấm, mộc nhĩ) phục vụ đời sống gia đình theo quy chế quản lý rừng."
  },
  {
    "id": "ChuRung_028",
    "question": "Hành vi săn bắn các loài chim hoang dã bằng súng tự chế (súng hơi, súng bắn đạn hoa cải, súng cồn) trong rừng bị pháp luật xử lý như thế nào?",
    "options": [
      "Bị tịch thu súng tự chế, bị xử phạt nặng về hành vi săn bắt động vật hoang dã trái phép VÀ hành vi sử dụng vũ khí tự chế trái phép (có thể bị xử lý hình sự)",
      "Được phép sử dụng nếu súng do cá nhân tự chế tạo bằng ống nước nhựa",
      "Chỉ bị xử phạt vi phạm hành chính về hành vi sử dụng súng tự chế nếu bắn trúng động vật nguy cấp, quý, hiếm",
      "Được Nhà nước cấp giấy chứng nhận thợ săn thiện xạ địa phương"
    ],
    "correct": "Bị tịch thu súng tự chế, bị xử phạt nặng về hành vi săn bắt động vật hoang dã trái phép VÀ hành vi sử dụng vũ khí tự chế trái phép (có thể bị xử lý hình sự)",
    "explanation": "Căn cứ Điều 5 Luật Quản lý, sử dụng vũ khí, vật liệu nổ và công cụ hỗ trợ năm 2024 (số 42/2024/QH15) và Điều 24 Nghị định số 146/2026/NĐ-CP: Nghiêm cấm chế tạo, tàng trữ, sử dụng súng tự chế để săn bắt chim thú rừng; người vi phạm bị tịch thu súng, xử phạt vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự theo Điều 306 Bộ luật Hình sự."
  },
  {
    "id": "ChuRung_029",
    "question": "Cộng đồng dân cư thôn có quyền chuyển nhượng (bán) diện tích rừng tự nhiên do Nhà nước giao cho cộng đồng quản lý cho doanh nghiệp tư nhân không?",
    "options": [
      "Nghiêm cấm tuyệt đối; cộng đồng dân cư không được chuyển đổi, chuyển nhượng, tặng cho, cho thuê, thế chấp hoặc góp vốn bằng quyền sử dụng rừng được Nhà nước giao",
      "Được quyền bán nếu toàn bộ bà con trong thôn cùng đồng ý biểu quyết",
      "Được quyền cho thuê quyền sử dụng rừng nếu có Nghị quyết đồng thuận của trên 80% hộ gia đình trong thôn",
      "Được phép chuyển nhượng nếu doanh nghiệp cam kết tuyển dụng người trong thôn vào làm việc"
    ],
    "correct": "Nghiêm cấm tuyệt đối; cộng đồng dân cư không được chuyển đổi, chuyển nhượng, tặng cho, cho thuê, thế chấp hoặc góp vốn bằng quyền sử dụng rừng được Nhà nước giao",
    "explanation": "Điều 86 Luật Lâm nghiệp: Cộng đồng dân cư được giao rừng không có quyền chuyển đổi, chuyển nhượng, tặng cho, cho thuê, thế chấp hoặc góp vốn bằng quyền sử dụng rừng."
  },
  {
    "id": "ChuRung_030",
    "question": "Trách nhiệm của chủ rừng khi phát hiện diện tích rừng của mình bị cháy do sét đánh hoặc do người khác gây ra là gì?",
    "options": [
      "Phải lập tức triển khai dập lửa bằng lực lượng, phương tiện tại chỗ, đồng thời báo ngay cho chính quyền xã, Kiểm lâm địa bàn hoặc cơ quan Cảnh sát PCCC gần nhất",
      "Ngồi ở nhà chờ khi nào lửa cháy tắt hẳn thì mới đi kiểm tra diện tích bị thiệt hại",
      "Báo cáo cho Trưởng thôn và chờ lực lượng dân quân xã đến hiện trường rồi mới cùng tham gia dập lửa",
      "Bỏ chạy khỏi địa phương để tránh bị cơ quan công an mời lên làm việc"
    ],
    "correct": "Phải lập tức triển khai dập lửa bằng lực lượng, phương tiện tại chỗ, đồng thời báo ngay cho chính quyền xã, Kiểm lâm địa bàn hoặc cơ quan Cảnh sát PCCC gần nhất",
    "explanation": "Căn cứ Khoản 2 Điều 39 Luật Lâm nghiệp năm 2017 và Điều 51 Nghị định số 156/2018/NĐ-CP: Khi xảy ra cháy rừng, chủ rừng có trách nhiệm kịp thời huy động lực lượng, phương tiện tại chỗ để chữa cháy và báo cáo ngay cho cơ quan Kiểm lâm, chính quyền sở tại hỗ trợ."
  },
  {
    "id": "ChuRung_031",
    "question": "Hộ gia đình có được quyền kết hợp chăn nuôi gia súc, trồng nấm, dược liệu dưới tán rừng sản xuất không?",
    "options": [
      "Được khuyến khích phát triển kinh tế dưới tán rừng nhưng không được làm suy thoái rừng",
      "Bị nghiêm cấm hoàn toàn không được thả gia súc",
      "Chỉ được trồng cây dược liệu, nghiêm cấm hoàn toàn việc chăn thả gia súc dưới tán rừng sản xuất",
      "Phải chặt hết cây to mới được trồng dược liệu"
    ],
    "correct": "Được khuyến khích phát triển kinh tế dưới tán rừng nhưng không được làm suy thoái rừng",
    "explanation": "Căn cứ Khoản 1 Điều 56 Luật Lâm nghiệp năm 2017: Chủ rừng sản xuất được kết hợp sản xuất nông nghiệp, lâm nghiệp, thủy sản, trồng cây dược liệu dưới tán rừng nhưng không được làm suy thoái chất lượng rừng."
  },
  {
    "id": "ChuRung_032",
    "question": "Trường hợp nào chủ rừng được tự do tận dụng cây gỗ bị đổ gãy do bão gió trong rừng trồng của mình?",
    "options": [
      "Toàn quyền thu dọn, sử dụng hoặc bán gỗ cây đổ gãy trong rừng trồng tự đầu tư",
      "Bắt buộc phải để cây mục nát không được chạm vào",
      "Phải báo cáo bằng văn bản cho Ủy ban nhân dân cấp xã xác nhận số lượng cây đổ gãy trước khi bán",
      "Bị tịch thu toàn bộ số cây bị đổ"
    ],
    "correct": "Toàn quyền thu dọn, sử dụng hoặc bán gỗ cây đổ gãy trong rừng trồng tự đầu tư",
    "explanation": "Căn cứ Điều 59 Luật Lâm nghiệp năm 2017 và Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT): Cây rừng trồng do chủ rừng tự bỏ vốn đầu tư bị đổ gãy do thiên tai thuộc quyền sở hữu của chủ rừng; chủ rừng tự quyết định việc khai thác tận thu, tận dụng để phục vụ tiêu dùng hoặc lưu thông bán trên thị trường và tự lập Bảng kê lâm sản theo quy định."
  },
  {
    "id": "ChuRung_033",
    "question": "Khi muốn tỉa thưa rừng trồng để cây phát triển tốt hơn, hộ gia đình có phải báo cáo không?",
    "options": [
      "Chủ rừng tự đầu tư tự quyết định việc tỉa thưa mật độ cây rừng của mình",
      "Bắt buộc phải thuê đơn vị tư vấn lập hồ sơ thiết kế",
      "Phải lập phương án tỉa thưa và nộp về Chi cục Kiểm lâm cấp tỉnh để thẩm định trước khi thực hiện",
      "Mỗi hecta chỉ được chặt tỉa đúng 1 cây"
    ],
    "correct": "Chủ rừng tự đầu tư tự quyết định việc tỉa thưa mật độ cây rừng của mình",
    "explanation": "Căn cứ Điều 59 Luật Lâm nghiệp năm 2017: Tỉa thưa rừng trồng tự đầu tư là biện pháp kỹ thuật lâm sinh thông thường; chủ rừng tự chủ động thực hiện mà không phải xin phép cơ quan nhà nước."
  },
  {
    "id": "ChuRung_034",
    "question": "Gỗ khai thác từ rừng trồng của hộ gia đình khi lưu thông trên đường có bắt buộc phải đóng dấu búa Kiểm lâm không?",
    "options": [
      "Gỗ rừng trồng thông thường KHÔNG phải đóng dấu búa Kiểm lâm",
      "Bắt buộc mọi khúc gỗ đều phải đóng dấu búa Kiểm lâm",
      "Hóa đơn giá trị gia tăng kèm theo Bảng kê lâm sản có xác nhận của Chi cục Thuế địa phương",
      "Phải đóng dấu đỏ của Ủy ban nhân dân xã"
    ],
    "correct": "Gỗ rừng trồng thông thường KHÔNG phải đóng dấu búa Kiểm lâm",
    "explanation": "Căn cứ Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT): Gỗ rừng trồng thông thường không phải đóng dấu búa Kiểm lâm; việc quản lý, truy xuất nguồn gốc căn cứ vào Bảng kê lâm sản hợp pháp."
  },
  {
    "id": "ChuRung_035",
    "question": "Người dân có được dùng chất độc, hóa chất hoặc mìn để khai thác lâm sản, thủy sản trong rừng không?",
    "options": [
      "Được dùng nếu không có dụng cụ khác",
      "Tuyệt đối nghiêm cấm; hành vi này nguy hiểm cho môi trường và bị truy cứu trách nhiệm hình sự",
      "Chỉ bị xử phạt vi phạm hành chính nếu sử dụng chất nổ trong phạm vi khu rừng sản xuất",
      "Chỉ cấm ở sông lớn, suối nhỏ trong rừng thì được dùng"
    ],
    "correct": "Tuyệt đối nghiêm cấm; hành vi này nguy hiểm cho môi trường và bị truy cứu trách nhiệm hình sự",
    "explanation": "Căn cứ Khoản 3 Điều 9 Luật Lâm nghiệp năm 2017 và Điều 242 Bộ luật Hình sự: Nghiêm cấm sử dụng chất nổ, chất độc, xung điện đánh bắt sinh vật rừng; hành vi này bị phạt tù từ 1 năm đến 5 năm."
  },
  {
    "id": "ChuRung_036",
    "question": "Trách nhiệm của chủ rừng khi phát hiện sâu hại (như sâu đo ăn lá keo, sâu róm thông) xuất hiện nhiều là gì?",
    "options": [
      "Mặc kệ sâu ăn hết lá cây tự mọc lại",
      "Áp dụng biện pháp phòng trừ kịp thời và báo cho Kiểm lâm địa bàn để được hướng dẫn kỹ thuật",
      "Tự mua thuốc bảo vệ thực vật về phun mà không cần tham khảo ý kiến cán bộ khuyến nông hay Kiểm lâm",
      "Phun thuốc trừ cỏ lên toàn bộ tán cây"
    ],
    "correct": "Áp dụng biện pháp phòng trừ kịp thời và báo cho Kiểm lâm địa bàn để được hướng dẫn kỹ thuật",
    "explanation": "Căn cứ Điều 61 Luật Lâm nghiệp năm 2017: Chủ rừng có nghĩa vụ phòng trừ sinh vật hại rừng; khi phát hiện sâu bệnh hại diện rộng phải thông báo ngay cho Kiểm lâm địa bàn để hướng dẫn biện pháp kỹ thuật."
  },
  {
    "id": "ChuRung_037",
    "question": "Việc chăn thả rông trâu bò vào khu vực rừng mới trồng có bị nghiêm cấm không?",
    "options": [
      "Không bị cấm vì cỏ trong rừng là thức ăn tự nhiên",
      "Nghiêm cấm chăn thả gia súc vào rừng mới trồng vì gây gãy, đổ, chết cây con mới trồng",
      "Được chăn thả nếu mật độ trâu bò không quá 02 con trên mỗi héc-ta rừng mới trồng",
      "Chỉ cấm thả trâu, còn bò thì được thả thoải mái"
    ],
    "correct": "Nghiêm cấm chăn thả gia súc vào rừng mới trồng vì gây gãy, đổ, chết cây con mới trồng",
    "explanation": "Căn cứ Điều 9 Luật Lâm nghiệp năm 2017 và Điểm e Khoản 2 Điều 19 Nghị định số 146/2026/NĐ-CP: Nghiêm cấm chăn, dắt, thả vật nuôi trên diện tích mới trồng rừng, đang trong thời kỳ chăm sóc; người vi phạm bị phạt tiền và buộc đưa vật nuôi ra khỏi rừng."
  },
  {
    "id": "ChuRung_038",
    "question": "Người dân tự ý mang máy múc vào đất rừng phòng hộ để san gạt mặt bằng làm nhà ở thì bị xử lý thế nào?",
    "options": [
      "Được hoan nghênh vì làm đẹp cảnh quan",
      "Bị đình chỉ ngay, xử phạt vi phạm hành chính nặng về hành vi phá rừng và buộc khôi phục tình trạng ban đầu",
      "Chỉ bị xử phạt vi phạm hành chính về trật tự xây dựng nếu công trình nhà ở chưa hoàn thành",
      "Không bị xử lý nếu là hộ gia đình nghèo"
    ],
    "correct": "Bị đình chỉ ngay, xử phạt vi phạm hành chính nặng về hành vi phá rừng và buộc khôi phục tình trạng ban đầu",
    "explanation": "Căn cứ Điều 9 Luật Lâm nghiệp năm 2017 và Điều 23 Nghị định số 146/2026/NĐ-CP: Hành vi tự ý đưa máy móc vào san gạt, hủy hoại diện tích rừng phòng hộ bị xử phạt nghiêm khắc về hành vi Phá rừng trái pháp luật và buộc khôi phục lại tình trạng ban đầu."
  },
  {
    "id": "ChuRung_039",
    "question": "Chủ rừng được hưởng lợi từ nguồn thu dịch vụ môi trường rừng (DVMTR) phải có nghĩa vụ gì?",
    "options": [
      "Không phải làm gì, chỉ việc nhận tiền",
      "Phải bảo vệ tốt diện tích rừng được chi trả DVMTR, không để xảy ra cháy rừng, phá rừng",
      "Phải trích 20% số tiền nhận được nộp về Ban Quản lý rừng phòng hộ để hỗ trợ kinh phí tuần tra",
      "Phải nộp lại toàn bộ tiền cho nhà máy thủy điện"
    ],
    "correct": "Phải bảo vệ tốt diện tích rừng được chi trả DVMTR, không để xảy ra cháy rừng, phá rừng",
    "explanation": "Căn cứ Điểm b và Điểm c Khoản 2 Điều 65 Luật Lâm nghiệp năm 2017: Chủ rừng là bên cung ứng dịch vụ môi trường rừng có nghĩa vụ thực hiện các biện pháp quản lý, bảo vệ và phát triển rừng trên diện tích rừng được chi trả tiền dịch vụ môi trường rừng; sử dụng tiền chi trả dịch vụ môi trường rừng đúng mục đích theo quy định của pháp luật."
  },
  {
    "id": "ChuRung_040",
    "question": "Khi có nhu cầu vay vốn ngân hàng để phát triển trồng rừng, chủ rừng dùng tài sản gì để thế chấp?",
    "options": [
      "Chỉ được thế chấp nhà ở",
      "Được thế chấp giá trị quyền sử dụng đất rừng và giá trị rừng trồng theo quy định pháp luật",
      "Chỉ được thế chấp giá trị cây trồng trên đất mà không được thế chấp giá trị quyền sử dụng đất",
      "Không ngân hàng nào cho vay trồng rừng"
    ],
    "correct": "Được thế chấp giá trị quyền sử dụng đất rừng và giá trị rừng trồng theo quy định pháp luật",
    "explanation": "Căn cứ Điều 73 Luật Lâm nghiệp năm 2017 và Nghị định số 116/2018/NĐ-CP: Chủ rừng sản xuất được quyền thế chấp quyền sử dụng đất rừng và tài sản gắn liền với đất (cây rừng trồng) để vay vốn ngân hàng."
  },
  {
    "id": "ChuRung_041",
    "question": "Trước khi đốt nương làm rẫy hoặc đốt dọn thực bì gần rừng, người dân BẮT BUỘC phải làm gì?",
    "options": [
      "Lén lút châm lửa đốt vào ban đêm để không ai thấy",
      "Làm đường băng cản lửa, thông báo cho Trưởng thôn/Kiểm lâm và canh gác dập tắt tàn lửa",
      "Chỉ cần làm đường băng cản lửa rộng 01 mét và đốt vào lúc trời sắp có mưa",
      "Chỉ cần hô to cho cả làng cùng biết"
    ],
    "correct": "Làm đường băng cản lửa, thông báo cho Trưởng thôn/Kiểm lâm và canh gác dập tắt tàn lửa",
    "explanation": "Điều 47 Nghị định 156/2018/NĐ-CP quy định đốt thực bì phải làm đường băng cản lửa, báo cho Trưởng thôn/Kiểm lâm địa bàn, chọn ngày lặng gió và có người canh gác đến khi lửa tắt hẳn."
  },
  {
    "id": "ChuRung_042",
    "question": "Đường băng cản lửa cô lập khu vực đốt dọn thực bì nương rẫy cần có chiều rộng tối thiểu khoảng bao nhiêu?",
    "options": [
      "Khoảng 0,5 mét",
      "Khoảng từ 1,5 mét đến 2,0 mét",
      "Khoảng từ 4 mét đến 6 mét được dọn sạch cỏ rác, vật liệu cháy",
      "Phải rộng 50 mét"
    ],
    "correct": "Khoảng từ 4 mét đến 6 mét được dọn sạch cỏ rác, vật liệu cháy",
    "explanation": "Căn cứ Điều 47 Nghị định số 156/2018/NĐ-CP: Khi đốt dọn nương rẫy, xử lý thực bì phải làm đường băng cản lửa xung quanh rộng từ 4 m đến 6 m để ngăn lửa cháy lan sang rừng xung quanh."
  },
  {
    "id": "ChuRung_043",
    "question": "Thời điểm nào trong ngày là THUẬN LỢI VÀ AN TOÀN NHẤT để đốt dọn nương rẫy?",
    "options": [
      "Buổi trưa nắng gắt (từ 11 giờ đến 14 giờ) vì cỏ khô dễ cháy",
      "Buổi sáng sớm hoặc chiều muộn khi trời râm mát, độ ẩm cao và gió lặng",
      "Buổi trưa từ 11 giờ đến 13 giờ vì lúc này thực bì khô giòn dễ cháy hết tàn dư",
      "Bất kỳ thời điểm nào chủ nương rảnh rỗi"
    ],
    "correct": "Buổi sáng sớm hoặc chiều muộn khi trời râm mát, độ ẩm cao và gió lặng",
    "explanation": "Căn cứ Điều 47 Nghị định số 156/2018/NĐ-CP: Chỉ được đốt dọn nương rẫy vào sáng sớm hoặc chiều tối khi không khí dịu mát, gió lặng; tuyệt đối không đốt vào buổi trưa nắng gắt."
  },
  {
    "id": "ChuRung_044",
    "question": "Khi dự báo cháy rừng ở Cấp IV (cấp nguy hiểm) và Cấp V (cấp cực kỳ nguy hiểm), người dân có được đốt nương không?",
    "options": [
      "Được đốt nếu có đông người cùng canh",
      "Tuyệt đối NGHIÊM CẤM dùng lửa trong rừng và đốt nương rẫy ven rừng",
      "Được phép đốt nếu có phương án phòng cháy và có sự giám sát trực tiếp của Trưởng thôn",
      "Chỉ được đốt vào buổi trưa"
    ],
    "correct": "Tuyệt đối NGHIÊM CẤM dùng lửa trong rừng và đốt nương rẫy ven rừng",
    "explanation": "Căn cứ Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP: Khi cấp dự báo cháy rừng ở Cấp IV (nguy hiểm) và Cấp V (cực kỳ nguy hiểm), nghiêm cấm mọi hành vi đốt nương rẫy, đốt thực bì trong và ven rừng."
  },
  {
    "id": "ChuRung_045",
    "question": "Người dân sau khi đốt nương rẫy xong được phép ra về khi nào?",
    "options": [
      "Ngay sau khi châm lửa xong",
      "Khi đám cháy đã giảm cường độ và chỉ còn lại khói bốc lên từ các gốc cây to",
      "Chỉ khi ngọn lửa đã tắt hoàn toàn và đã dập tắt hết tàn tro âm ỉ",
      "Khi trời sắp đổ mưa rào"
    ],
    "correct": "Chỉ khi ngọn lửa đã tắt hoàn toàn và đã dập tắt hết tàn tro âm ỉ",
    "explanation": "Căn cứ Khoản 2 Điều 47 Nghị định số 156/2018/NĐ-CP: Người đốt nương rẫy phải trực tiếp canh gác và chỉ được rời khỏi hiện trường khi đám cháy đã tắt hoàn toàn, tàn tro không còn khả năng bùng phát lại."
  },
  {
    "id": "ChuRung_046",
    "question": "Hành vi đốt nương rẫy bất cẩn làm cháy lan vào rừng gây thiệt hại rừng thì người gây cháy bị xử lý thế nào?",
    "options": [
      "Chỉ cần xin lỗi chủ rừng là xong",
      "Bị xử phạt vi phạm hành chính, bồi thường toàn bộ thiệt hại và có thể bị đi tù nếu cháy lớn",
      "Chỉ phải nộp phạt tiền hành chính nếu diện tích rừng bị cháy lan dưới 01 héc-ta",
      "Được Nhà nước thưởng tiền vì giúp dọn rừng"
    ],
    "correct": "Bị xử phạt vi phạm hành chính, bồi thường toàn bộ thiệt hại và có thể bị đi tù nếu cháy lớn",
    "explanation": "Điều 20 Nghị định 146/2026/NĐ-CP và Điều 243 Bộ luật Hình sự quy định người để lửa cháy lan gây cháy rừng phải bồi thường thiệt hại, bị phạt tiền rất nặng hoặc bị truy cứu trách nhiệm hình sự phạt tù."
  },
  {
    "id": "ChuRung_047",
    "question": "Khi phát hiện có đám cháy rừng, người dân có trách nhiệm làm gì đầu tiên?",
    "options": [
      "Đứng quay video phát trực tiếp lên mạng xã hội rồi bỏ đi",
      "Hô hoán, báo ngay cho Trưởng thôn, Kiểm lâm địa bàn hoặc UBND xã và tìm cách chữa cháy ban đầu",
      "Tự mình huy động người nhà đến dập lửa, khi nào không dập được mới báo chính quyền",
      "Đợi khi nào cháy hết rừng thì mới báo"
    ],
    "correct": "Hô hoán, báo ngay cho Trưởng thôn, Kiểm lâm địa bàn hoặc UBND xã và tìm cách chữa cháy ban đầu",
    "explanation": "Căn cứ Khoản 4 Điều 39 Luật Lâm nghiệp năm 2017 và Điều 51 Nghị định số 156/2018/NĐ-CP: Khi xảy ra cháy rừng, người phát hiện phải hô hoán, kịp thời chữa cháy rừng theo khả năng, đồng thời thông báo ngay cho chủ rừng, cơ quan Kiểm lâm sở tại hoặc Ủy ban nhân dân cấp xã nơi gần nhất."
  },
  {
    "id": "ChuRung_048",
    "question": "Khi nhận được lệnh huy động tham gia chữa cháy rừng của Chủ tịch UBND xã hoặc Trưởng thôn, người dân phải làm gì?",
    "options": [
      "Từ chối tham gia vì không phải rừng nhà mình",
      "Nghiêm túc chấp hành, nhanh chóng mang dụng cụ có sẵn đến hiện trường tham gia dập lửa",
      "Chỉ có trách nhiệm tham gia nếu đám cháy đe dọa trực tiếp đến nương rẫy hoặc nhà ở của gia đình",
      "Giả vờ bị ốm để ở nhà"
    ],
    "correct": "Nghiêm túc chấp hành, nhanh chóng mang dụng cụ có sẵn đến hiện trường tham gia dập lửa",
    "explanation": "Căn cứ Khoản 4 Điều 39 Luật Lâm nghiệp năm 2017 và Điều 51 Nghị định số 156/2018/NĐ-CP: Cơ quan, tổ chức, cá nhân có nghĩa vụ chấp hành nghiêm sự chỉ huy, điều động lực lượng, phương tiện tham gia chữa cháy rừng của người có thẩm quyền."
  },
  {
    "id": "ChuRung_049",
    "question": "Những dụng cụ thủ công thông thường nào tại gia đình rất hữu ích khi tham gia dập lửa rừng?",
    "options": [
      "Bàn chải đánh răng và bát ăn cơm",
      "Dao phát, cuốc, cào sắt, cành cây tươi, bình xịt nước, can nước",
      "Máy bơm nước mini và dây dẫn mềm nhưng không cần mang theo dao phát hay cào sắt",
      "Bút viết và giấy trắng"
    ],
    "correct": "Dao phát, cuốc, cào sắt, cành cây tươi, bình xịt nước, can nước",
    "explanation": "Căn cứ Điều 44 Nghị định số 156/2018/NĐ-CP: Thực hiện phương châm 4 tại chỗ, việc sử dụng các dụng cụ thủ công sẵn có (dao phát, cào sắt, cành cây tươi, can nước) giúp khống chế đám cháy ngay từ khi mới phát sinh."
  },
  {
    "id": "ChuRung_050",
    "question": "Hành vi vứt tàn thuốc lá đang cháy dở hoặc đốt lửa sưởi ấm trong rừng vào mùa hanh khô có vi phạm pháp luật không?",
    "options": [
      "Không vi phạm vì tàn thuốc rất nhỏ",
      "Vi phạm nghiêm trọng quy định an toàn PCCCR và bị xử phạt theo luật",
      "Chỉ bị xử phạt nếu để tàn thuốc bùng phát thành ngọn lửa cháy lan ra diện tích rừng xung quanh",
      "Được phép nếu đứng cách cây rừng 1 mét"
    ],
    "correct": "Vi phạm nghiêm trọng quy định an toàn PCCCR và bị xử phạt theo luật",
    "explanation": "Căn cứ Điểm h Khoản 2 và Khoản 3 Điều 19 Nghị định số 146/2026/NĐ-CP: Nghiêm cấm sử dụng lửa tùy tiện, vứt tàn thuốc, que diêm còn than đỏ tại các khu rừng có nguy cơ cháy; vi phạm bị xử phạt vi phạm hành chính từ 1.000.000 đồng đến 5.000.000 đồng."
  },
  {
    "id": "ChuRung_051",
    "question": "Biển cảnh báo cấp dự báo cháy rừng thường được đặt ở đâu để người dân dễ nhận biết?",
    "options": [
      "Cất trong tủ kín của phòng làm việc xã",
      "Đặt tại các cửa rừng, ngã ba đường vào rừng, nhà văn hóa thôn, nơi đông dân cư qua lại",
      "Đặt tại trụ sở Ủy ban nhân dân cấp xã và bảng tin nội bộ của Hạt Kiểm lâm",
      "Đặt trên đỉnh núi cao không có lối đi"
    ],
    "correct": "Đặt tại các cửa rừng, ngã ba đường vào rừng, nhà văn hóa thôn, nơi đông dân cư qua lại",
    "explanation": "Căn cứ Điều 46 Nghị định số 156/2018/NĐ-CP: Bảng cảnh báo cấp dự báo cháy rừng được đặt tại cửa rừng, đầu mối giao thông để thông báo cấp nguy hiểm cho nhân dân biết và chủ động phòng cháy."
  },
  {
    "id": "ChuRung_052",
    "question": "Các tháng nào trong năm ở miền Bắc thường là thời kỳ cao điểm hanh khô, nguy cơ cháy rừng cao nhất?",
    "options": [
      "Các tháng mùa mưa tháng 6, tháng 7, tháng 8",
      "Các tháng mùa khô từ tháng 11 năm trước đến tháng 4 năm sau",
      "Các tháng chuyển mùa từ tháng 8 đến tháng 10 hàng năm",
      "Quanh năm nguy cơ cháy rừng như nhau"
    ],
    "correct": "Các tháng mùa khô từ tháng 11 năm trước đến tháng 4 năm sau",
    "explanation": "Căn cứ Điều 46 Nghị định số 156/2018/NĐ-CP: Mùa khô hanh kéo dài từ tháng 11 đến tháng 4 năm sau ở miền Bắc là thời kỳ thảm thực vật khô nỏ, cấp dự báo cháy rừng cao nhất."
  },
  {
    "id": "ChuRung_053",
    "question": "Hành vi hun khói lấy mật ong rừng bất cẩn để lửa bùng phát gây cháy rừng thì bị xử lý như thế nào?",
    "options": [
      "Được miễn trách nhiệm nếu giao nộp lại mật ong",
      "Bị xử phạt vi phạm hành chính, bồi thường thiệt hại và có thể bị truy cứu trách nhiệm hình sự",
      "Chỉ bị phạt tiền mức 500.000 đồng nếu người lấy mật ong tự giác khắc phục hậu quả ban đầu",
      "Không ai có quyền xử phạt hành vi lấy mật ong"
    ],
    "correct": "Bị xử phạt vi phạm hành chính, bồi thường thiệt hại và có thể bị truy cứu trách nhiệm hình sự",
    "explanation": "Căn cứ Điểm i Khoản 3 Điều 19, Điều 20 Nghị định số 146/2026/NĐ-CP và Điều 243, 313 BLHS: Đốt lửa, dùng lửa lấy mật ong bị phạt từ 3 - 5 triệu đồng; nếu để cháy lan gây cháy rừng sẽ bị xử phạt theo Điều 20 NĐ 146 hoặc bị truy cứu trách nhiệm hình sự."
  },
  {
    "id": "ChuRung_054",
    "question": "Đường băng xanh cản lửa trong phòng cháy rừng thường được trồng bằng các loài cây nào?",
    "options": [
      "Các loài cây có lá chứa nhiều tinh dầu dễ cháy như thông, bạch đàn",
      "Các loài cây có tán rậm rạp, lá dày, mọng nước, khó cháy như vối thuốc, xoan đào, chè mạn",
      "Các loài cây keo lai và bạch đàn mô có tốc độ sinh trưởng nhanh và khép tán sớm",
      "Trồng cây thân rỗng"
    ],
    "correct": "Các loài cây có tán rậm rạp, lá dày, mọng nước, khó cháy như vối thuốc, xoan đào, chè mạn",
    "explanation": "Căn cứ Điều 48 Nghị định số 156/2018/NĐ-CP: Đường băng xanh cản lửa được trồng bằng các loài cây bản địa lá dày, chịu lửa tốt để ngăn chặn tàn lửa bay lan qua đám rừng khác."
  },
  {
    "id": "ChuRung_055",
    "question": "Tổ đội quần chúng bảo vệ rừng và PCCCR ở thôn, bản do ai thành lập và quản lý?",
    "options": [
      "Do Ủy ban nhân dân cấp xã quyết định thành lập theo đề nghị của thôn và Kiểm lâm",
      "Do các cháu thiếu nhi trong thôn tự lập",
      "Do Hạt trưởng Hạt Kiểm lâm sở tại trực tiếp ký quyết định thành lập và phân bổ ngân sách",
      "Do hội người cao tuổi tự quản"
    ],
    "correct": "Do Ủy ban nhân dân cấp xã quyết định thành lập theo đề nghị của thôn và Kiểm lâm",
    "explanation": "Căn cứ Điều 43 Nghị định số 156/2018/NĐ-CP: UBND cấp xã có trách nhiệm thành lập, kiện toàn và chỉ đạo hoạt động của Tổ đội quần chúng bảo vệ rừng và PCCCR tại các thôn bản có rừng."
  },
  {
    "id": "ChuRung_056",
    "question": "Khi tham gia chữa cháy rừng, yêu cầu quan trọng hàng đầu cần bảo đảm là gì?",
    "options": [
      "Phải lấy được thật nhiều gỗ mang về",
      "Tuyệt đối bảo đảm an toàn tính mạng con người, sau đó mới đến bảo vệ tài sản rừng",
      "Phải ưu tiên cứu vãn các lóng gỗ quý và tài sản có giá trị cao trước khi xem xét rút quân",
      "Không cần tuân theo sự chỉ huy của ai"
    ],
    "correct": "Tuyệt đối bảo đảm an toàn tính mạng con người, sau đó mới đến bảo vệ tài sản rừng",
    "explanation": "Căn cứ Điều 50 Nghị định số 156/2018/NĐ-CP: Nguyên tắc chỉ huy chữa cháy rừng hàng đầu là bảo đảm an toàn tính mạng con người; người tham gia phải tuân thủ hướng dẫn và lối thoát hiểm an toàn."
  },
  {
    "id": "ChuRung_057",
    "question": "Người bị thương hoặc hy sinh khi dũng cảm tham gia chữa cháy rừng được Nhà nước giải quyết chế độ gì?",
    "options": [
      "Không được giải quyết bất kỳ chế độ gì",
      "Được xem xét công nhận là thương binh, liệt sĩ và hưởng các chế độ ưu đãi người có công",
      "Chỉ được thanh toán chi phí thuốc men thực tế mà không được hưởng các chế độ trợ cấp lao động",
      "Tự gia đình phải chi trả toàn bộ viện phí"
    ],
    "correct": "Được xem xét công nhận là thương binh, liệt sĩ và hưởng các chế độ ưu đãi người có công",
    "explanation": "Căn cứ Điều 55 Nghị định số 156/2018/NĐ-CP: Người tham gia chữa cháy rừng bị thương hoặc hy sinh thì bản thân hoặc gia đình được xem xét công nhận và hưởng chế độ, chính sách theo quy định của pháp luật về ưu đãi người có công với cách mạng."
  },
  {
    "id": "ChuRung_058",
    "question": "Chủ rừng không chấp hành quy định lập phương án phòng cháy, chữa cháy rừng bị xử phạt như thế nào?",
    "options": [
      "Bị xử phạt cảnh cáo hoặc phạt tiền theo quy định pháp luật xử phạt vi phạm lâm nghiệp",
      "Được Nhà nước làm hộ mà không cần quan tâm",
      "Được bố trí đường băng trắng rộng tối thiểu 02 mét không có thảm thực vật che phủ",
      "Chỉ bị ghi tên vào sổ tay của xã"
    ],
    "correct": "Bị xử phạt cảnh cáo hoặc phạt tiền theo quy định pháp luật xử phạt vi phạm lâm nghiệp",
    "explanation": "Căn cứ Điểm a Khoản 7 Điều 19 Nghị định số 146/2026/NĐ-CP: Chủ rừng không xây dựng phương án phòng cháy và chữa cháy rừng theo quy định bị phạt tiền từ 20.000.000 đồng đến 25.000.000 đồng."
  },
  {
    "id": "ChuRung_059",
    "question": "Hành vi đốt vàng mã, đốt nhang gần rừng hoặc trong khu di tích lịch sử ven rừng cần chú ý điều gì?",
    "options": [
      "Đốt ở bất cứ chỗ nào có bóng mát",
      "Phải đốt đúng nơi quy định có lò đốt an toàn và dập tắt hết tàn lửa trước khi đi",
      "Được phép đốt nếu có người túc trực canh gác trong thời gian 15 phút sau khi thắp hương",
      "Cứ vứt tàn nhang vào đống lá khô"
    ],
    "correct": "Phải đốt đúng nơi quy định có lò đốt an toàn và dập tắt hết tàn lửa trước khi đi",
    "explanation": "Căn cứ Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP: Đốt vàng mã, thắp hương trong và ven rừng phải thực hiện tại nơi quy định, có người trông coi và dập tắt hoàn toàn trước khi rời đi."
  },
  {
    "id": "ChuRung_060",
    "question": "Số điện thoại báo cháy khẩn cấp toàn quốc mà người dân có thể gọi khi phát hiện cháy lớn là số nào?",
    "options": [
      "Số 113",
      "Số 114 (Cảnh sát Phòng cháy, chữa cháy và Cứu nạn, cứu hộ)",
      "Số 113 (Tổng đài Cảnh sát phản ứng nhanh)",
      "Số 1080"
    ],
    "correct": "Số 114 (Cảnh sát Phòng cháy, chữa cháy và Cứu nạn, cứu hộ)",
    "explanation": "Căn cứ Điều 20 Luật PCCC năm 2001 (sửa đổi, bổ sung 2013): Số điện thoại khẩn cấp 114 là số cứu hỏa toàn quốc miễn phí tiếp nhận thông tin báo cháy rừng và cháy dân sự 24/24 giờ."
  },
  {
    "id": "ChuRung_061",
    "question": "Hộ đồng bào dân tộc thiểu số, hộ nghèo nhận khoán bảo vệ rừng tự nhiên được Nhà nước hỗ trợ như thế nào?",
    "options": [
      "Được nhận tiền công khoán bảo vệ rừng hàng năm từ nguồn ngân sách nhà nước và dịch vụ môi trường rừng",
      "Được tự do chặt hạ gỗ rừng tự nhiên để mang đi bán",
      "Được giao quyền tự chủ hoàn toàn trong việc chuyển đổi rừng tự nhiên nghèo kiệt sang rừng trồng",
      "Không được hưởng bất kỳ chính sách hỗ trợ nào của Nhà nước"
    ],
    "correct": "Được nhận tiền công khoán bảo vệ rừng hàng năm từ nguồn ngân sách nhà nước và dịch vụ môi trường rừng",
    "explanation": "Căn cứ Điều 5 Nghị định số 58/2024/NĐ-CP (sửa đổi bởi NĐ 42/2026/NĐ-CP): Hộ đồng bào DTTS nghèo nhận khoán bảo vệ rừng tự nhiên được Nhà nước hỗ trợ tiền công khoán bảo vệ rừng hàng năm."
  },
  {
    "id": "ChuRung_062",
    "question": "Mức hỗ trợ kinh phí khoán bảo vệ rừng cho người dân hiện nay theo chính sách Nhà nước bình quân khoảng bao nhiêu?",
    "options": [
      "Khoảng 50.000 đồng/ha/năm",
      "Khoảng từ 500.000 đồng/ha/năm trở lên (tùy khu vực và nguồn vốn hỗ trợ)",
      "Khoảng 200.000 đồng đến 300.000 đồng/ha/năm",
      "Khoảng 50 triệu đồng/ha/năm"
    ],
    "correct": "Khoảng từ 500.000 đồng/ha/năm trở lên (tùy khu vực và nguồn vốn hỗ trợ)",
    "explanation": "Căn cứ Khoản 1 Điều 6 Nghị định số 58/2024/NĐ-CP: Mức hỗ trợ kinh phí khoán bảo vệ rừng từ ngân sách nhà nước bình quân 500.000 đồng/ha/năm cho các hộ nhận khoán vùng khó khăn."
  },
  {
    "id": "ChuRung_063",
    "question": "Tiền dịch vụ môi trường rừng (DVMTR) chi trả cho người dân trồng, bảo vệ rừng có nguồn gốc từ đâu?",
    "options": [
      "Do nhân dân tự quyên góp với nhau",
      "Từ các cơ sở sử dụng DVMTR như nhà máy thủy điện, nhà máy nước sạch, cơ sở du lịch sinh thái",
      "Trích từ nguồn thu ngân sách chi thường xuyên của Ủy ban nhân dân cấp huyện",
      "Từ tiền cứu trợ của các hội từ thiện"
    ],
    "correct": "Từ các cơ sở sử dụng DVMTR như nhà máy thủy điện, nhà máy nước sạch, cơ sở du lịch sinh thái",
    "explanation": "Điều 63 Luật Lâm nghiệp quy định các nhà máy thủy điện, nước sạch, dịch vụ du lịch... phải trả tiền dịch vụ môi trường rừng cho các chủ rừng có công bảo vệ nguồn nước và chống bồi lắng lòng hồ."
  },
  {
    "id": "ChuRung_064",
    "question": "Hộ gia đình nhận tiền dịch vụ môi trường rừng bằng hình thức nào là an toàn và thuận tiện nhất?",
    "options": [
      "Nhận qua tài khoản ngân hàng hoặc qua hệ thống bưu điện cơ sở",
      "Chỉ nhận bằng hiện vật là ngô khoai",
      "Chỉ nhận tiền mặt trực tiếp tại trụ sở Chi cục Kiểm lâm cấp tỉnh vào cuối mỗi quý",
      "Đến nhà riêng của Trưởng thôn vào ban đêm"
    ],
    "correct": "Nhận qua tài khoản ngân hàng hoặc qua hệ thống bưu điện cơ sở",
    "explanation": "Căn cứ Điều 70 Nghị định số 156/2018/NĐ-CP: Tiền DVMTR được Quỹ Bảo vệ và Phát triển rừng chi trả trực tiếp cho chủ rừng qua tài khoản ngân hàng hoặc điểm giao dịch bưu điện xã."
  },
  {
    "id": "ChuRung_065",
    "question": "Nhà nước có chính sách hỗ trợ gạo cho đối tượng hộ nghèo nào trong công tác trồng rừng?",
    "options": [
      "Tất cả mọi gia đình trong tỉnh",
      "Hộ gia đình đồng bào dân tộc thiểu số nghèo tham gia trồng rừng thay thế nương rẫy",
      "Tất cả các hộ gia đình cư trú tại vùng sâu, vùng xa có diện tích đất lâm nghiệp trên 05 ha",
      "Chỉ người kinh doanh buôn bán ở thị trấn"
    ],
    "correct": "Hộ gia đình đồng bào dân tộc thiểu số nghèo tham gia trồng rừng thay thế nương rẫy",
    "explanation": "Căn cứ Điều 8 Nghị định số 58/2024/NĐ-CP: Nhà nước có chính sách hỗ trợ gạo cho hộ đồng bào DTTS nghèo tự nguyện chuyển đổi nương rẫy sang trồng rừng để bảo đảm lương thực trong thời gian đầu."
  },
  {
    "id": "ChuRung_066",
    "question": "Hộ gia đình muốn vay vốn ưu đãi để trồng rừng sản xuất thì liên hệ với ngân hàng nào tại địa phương?",
    "options": [
      "Ngân hàng Chính sách xã hội hoặc Ngân hàng Nông nghiệp và PTNT (Agribank)",
      "Chỉ được vay tại các hiệu cầm đồ tư nhân",
      "Chỉ được vay thông qua các tổ chức tài chính vi mô do Hội Nông dân tỉnh bảo lãnh",
      "Không có ngân hàng nào hỗ trợ"
    ],
    "correct": "Ngân hàng Chính sách xã hội hoặc Ngân hàng Nông nghiệp và PTNT (Agribank)",
    "explanation": "Căn cứ Điều 5 Nghị định số 28/2022/NĐ-CP của Chính phủ về chính sách tín dụng ưu đãi: Ngân hàng Chính sách xã hội cho vay vốn ưu đãi đối với hộ nghèo, hộ DTTS phát triển rừng sản xuất."
  },
  {
    "id": "ChuRung_067",
    "question": "Chính sách khuyến khích trồng rừng cây bản địa, cây gỗ lớn nhằm mục tiêu gì lâu dài?",
    "options": [
      "Để có lá cây làm phân xanh",
      "Tạo nguồn gỗ có giá trị kinh tế cao, giữ nước bền vững và giảm thiểu thiên tai sạt lở",
      "Để rút ngắn chu kỳ khai thác lấy gỗ non phục vụ sản xuất dăm gỗ và ván ép",
      "Để chặt phá làm củi đun"
    ],
    "correct": "Tạo nguồn gỗ có giá trị kinh tế cao, giữ nước bền vững và giảm thiểu thiên tai sạt lở",
    "explanation": "Căn cứ Điều 4 Luật Lâm nghiệp năm 2017 và Quyết định số 523/QĐ-TTg ngày 01/4/2021 của Thủ tướng Chính phủ: Nhà nước khuyến khích trồng cây bản địa gỗ lớn để nâng cao giá trị kinh tế lâu dài và phòng hộ môi trường sinh thái."
  },
  {
    "id": "ChuRung_068",
    "question": "Tổ chức, hộ gia đình tham gia trồng rừng thay thế khi Nhà nước chuyển mục đích sử dụng rừng được hỗ trợ từ đâu?",
    "options": [
      "Tự chủ rừng phải bỏ tiền túi 100%",
      "Từ nguồn kinh phí nộp tiền trồng rừng thay thế do Quỹ Bảo vệ và phát triển rừng quản lý",
      "Từ nguồn vốn ngân sách sự nghiệp kinh tế giao cho Chi cục Kiểm lâm hàng năm",
      "Do nước ngoài viện trợ"
    ],
    "correct": "Từ nguồn kinh phí nộp tiền trồng rừng thay thế do Quỹ Bảo vệ và phát triển rừng quản lý",
    "explanation": "Căn cứ Điều 21 Luật Lâm nghiệp năm 2017: Chủ dự án chuyển mục đích sử dụng rừng nộp tiền trồng rừng thay thế vào Quỹ Bảo vệ và phát triển rừng để hỗ trợ các địa phương tổ chức trồng rừng mới."
  },
  {
    "id": "ChuRung_069",
    "question": "Cộng đồng dân cư thôn nhận tiền DVMTR có được sử dụng để xây dựng công trình phúc lợi chung của thôn không?",
    "options": [
      "Không được dùng, phải chia hết cho Trưởng thôn",
      "Được bàn bạc tập thể sử dụng vào tuần tra bảo vệ rừng và tu sửa nhà văn hóa, đường làng ngõ xóm",
      "Chỉ được dùng để chi hỗ trợ trực tiếp tiền mặt cho các hộ nghèo trong thôn vào dịp Tết",
      "Phải đem gửi tiết kiệm tư nhân"
    ],
    "correct": "Được bàn bạc tập thể sử dụng vào tuần tra bảo vệ rừng và tu sửa nhà văn hóa, đường làng ngõ xóm",
    "explanation": "Căn cứ Điều 70 Nghị định số 156/2018/NĐ-CP: Tiền DVMTR của cộng đồng dân cư thôn là tài sản chung do nhân dân họp bàn công khai quyết định chi cho tuần tra BVR và xây dựng công trình phúc lợi chung."
  },
  {
    "id": "ChuRung_070",
    "question": "Để được thanh toán tiền khoán bảo vệ rừng hàng năm, kết quả bảo vệ rừng của người dân cần đạt yêu cầu gì?",
    "options": [
      "Rừng bị cháy hết cũng được nhận tiền",
      "Được cơ quan chức năng nghiệm thu diện tích rừng còn nguyên vẹn, không xảy ra cháy hoặc phá rừng trái phép",
      "Chỉ cần có xác nhận của Trưởng thôn về việc gia đình có tham gia các buổi họp thôn đầy đủ",
      "Chỉ cần nộp đơn xin nhận tiền"
    ],
    "correct": "Được cơ quan chức năng nghiệm thu diện tích rừng còn nguyên vẹn, không xảy ra cháy hoặc phá rừng trái phép",
    "explanation": "Căn cứ Nghị định số 58/2024/NĐ-CP (được sửa đổi, bổ sung bởi Nghị định số 42/2026/NĐ-CP): Việc thanh toán, giải ngân kinh phí hỗ trợ, khoán bảo vệ rừng phải căn cứ vào kết quả nghiệm thu hiện trường xác nhận diện tích rừng được bảo vệ an toàn."
  },
  {
    "id": "ChuRung_071",
    "question": "Hộ gia đình nghèo được hỗ trợ cây giống lâm nghiệp để trồng rừng thì có trách nhiệm gì?",
    "options": [
      "Đem bán cây giống lấy tiền tiêu xài",
      "Trồng đúng kỹ thuật trên diện tích được phê duyệt và chăm sóc bảo vệ cây sống thành rừng",
      "Được quyền tự ý thay đổi cơ cấu giống cây trồng nếu thấy loài cây khác có giá trị kinh tế cao hơn",
      "Chỉ trồng một vài cây gần nhà"
    ],
    "correct": "Trồng đúng kỹ thuật trên diện tích được phê duyệt và chăm sóc bảo vệ cây sống thành rừng",
    "explanation": "Căn cứ Điều 9 Nghị định số 58/2024/NĐ-CP: Hộ gia đình nghèo được hỗ trợ cây giống phải trồng đúng kỹ thuật, đúng mật độ, chăm sóc chu đáo; nghiêm cấm bán hoặc sử dụng sai mục đích."
  },
  {
    "id": "ChuRung_072",
    "question": "Việc cấp Chứng chỉ rừng bền vững (FSC) cho các nhóm hộ gia đình trồng rừng mang lại lợi ích gì?",
    "options": [
      "Gỗ bán được giá cao hơn từ 10% đến 20% so với gỗ thông thường và được doanh nghiệp bao tiêu",
      "Không có lợi ích gì",
      "Được miễn toàn bộ thuế tài nguyên và thuế thu nhập cá nhân khi xuất bán gỗ",
      "Người dân phải nộp phạt cho tổ chức quốc tế"
    ],
    "correct": "Gỗ bán được giá cao hơn từ 10% đến 20% so với gỗ thông thường và được doanh nghiệp bao tiêu",
    "explanation": "Căn cứ Điều 28 Luật Lâm nghiệp năm 2017: Gỗ có chứng chỉ quản lý rừng bền vững (FSC) đáp ứng tiêu chuẩn quốc tế, giúp nâng cao giá bán từ 10% đến 20% so với gỗ đại trà."
  },
  {
    "id": "ChuRung_073",
    "question": "Khi Nhà nước quy hoạch lại 3 loại rừng mà rừng của hộ gia đình từ rừng sản xuất chuyển thành rừng phòng hộ thì sao?",
    "options": [
      "Người dân bị mất trắng toàn bộ tài sản",
      "Nhà nước thực hiện hỗ trợ, bồi thường hoặc giao khoán bảo vệ rừng theo quy định pháp luật",
      "Người dân vẫn giữ nguyên quyền khai thác trắng như đối với rừng sản xuất trước đây",
      "Không có chính sách giải quyết"
    ],
    "correct": "Nhà nước thực hiện hỗ trợ, bồi thường hoặc giao khoán bảo vệ rừng theo quy định pháp luật",
    "explanation": "Căn cứ Điều 18 Luật Lâm nghiệp năm 2017: Khi Nhà nước điều chỉnh phân loại 3 loại rừng làm ảnh hưởng quyền lợi chủ rừng thì được xem xét bồi thường, hỗ trợ hoặc chuyển tiếp giao khoán bảo vệ rừng."
  },
  {
    "id": "ChuRung_074",
    "question": "Chương trình phát triển kinh tế lâm nghiệp bền vững ưu tiên hỗ trợ những đối tượng nào?",
    "options": [
      "Hộ nghèo, hộ cận nghèo, đồng bào dân tộc thiểu số sinh sống ở khu vực miền núi khó khăn",
      "Chỉ các doanh nghiệp ở thành phố",
      "Các doanh nghiệp chế biến gỗ xuất khẩu có quy mô vốn trên 100 tỷ đồng tại địa bàn",
      "Chỉ các hộ gia đình khá giả"
    ],
    "correct": "Hộ nghèo, hộ cận nghèo, đồng bào dân tộc thiểu số sinh sống ở khu vực miền núi khó khăn",
    "explanation": "Căn cứ Điều 5 và Điều 6 Nghị định số 58/2024/NĐ-CP: Các chương trình mục tiêu quốc gia ưu tiên nguồn lực hỗ trợ đồng bào DTTS, hộ nghèo vùng sâu vùng xa phát triển kinh tế lâm nghiệp bền vững."
  },
  {
    "id": "ChuRung_075",
    "question": "Ai là người hướng dẫn kỹ thuật trồng rừng, tỉa cành, phòng sâu bệnh miễn phí cho bà con nông dân?",
    "options": [
      "Cán bộ Kiểm lâm địa bàn và cán bộ Khuyến nông cơ sở",
      "Các thương lái mua gỗ ép giá",
      "Doanh nghiệp cung ứng giống cây trồng lâm nghiệp sau khi đã ký hợp đồng mua bán cây",
      "Người dân phải tự tìm hiểu không ai hướng dẫn"
    ],
    "correct": "Cán bộ Kiểm lâm địa bàn và cán bộ Khuyến nông cơ sở",
    "explanation": "Căn cứ Điều 104 Luật Lâm nghiệp năm 2017: Lực lượng Kiểm lâm địa bàn phối hợp với khuyến nông xã có trách nhiệm hướng dẫn kỹ thuật lâm sinh, trồng và chăm sóc rừng miễn phí cho nhân dân."
  },
  {
    "id": "ChuRung_076",
    "question": "Hành vi nào sau đây bị pháp luật coi là 'Phá rừng trái pháp luật'?",
    "options": [
      "Đi bộ trên đường mòn trong rừng ngắm cảnh",
      "Chặt, đốt cây rừng; san ủi đất rừng; ken cây băm gốc đổ hóa chất hủy hoại cây mà không được phép",
      "Khai thác gỗ rừng trồng sản xuất của gia đình nhưng chưa nộp bản kê lâm sản cho xã",
      "Thu dọn rác thải rơi vãi bìa rừng"
    ],
    "correct": "Chặt, đốt cây rừng; san ủi đất rừng; ken cây băm gốc đổ hóa chất hủy hoại cây mà không được phép",
    "explanation": "Khoản 1 Điều 23 Nghị định 146/2026/NĐ-CP quy định phá rừng trái pháp luật là hành vi chặt, đốt, phá cây rừng, đào bới, san ủi, xả chất độc hoặc bóc vỏ, ken cây hủy hoại cây rừng mà không được phép."
  },
  {
    "id": "ChuRung_077",
    "question": "Hành vi bóc vỏ cây, ken cây, khoan vào thân cây rồi đổ thuốc trừ sâu làm cây chết dần bị xử lý thế nào?",
    "options": [
      "Không bị coi là phá rừng vì cây vẫn đứng nguyên",
      "Bị xử phạt nghiêm khắc về hành vi 'Phá rừng trái pháp luật', tính thiệt hại theo từng cây bị hại",
      "Chỉ bị coi là hành vi hủy hoại tài sản nếu số lượng cây bị ken chết từ 10 cây trở lên",
      "Được coi là hành vi tỉa thưa cây rừng tự nhiên"
    ],
    "correct": "Bị xử phạt nghiêm khắc về hành vi 'Phá rừng trái pháp luật', tính thiệt hại theo từng cây bị hại",
    "explanation": "Căn cứ Khoản 1 Điều 23 Nghị định số 146/2026/NĐ-CP: Hành vi chặt, ken cây, bóc vỏ, đổ hóa chất làm chết cây rừng bị xử lý nghiêm khắc về hành vi Phá rừng trái pháp luật với mức phạt tiền căn cứ theo diện tích và khối lượng rừng bị hủy hoại."
  },
  {
    "id": "ChuRung_078",
    "question": "Mức phạt tiền thấp nhất đối với hành vi phá rừng trái pháp luật đối với cá nhân là từ bao nhiêu?",
    "options": [
      "Chỉ phạt từ 10.000 đồng",
      "Phạt tiền từ 3.000.000 đồng trở lên (tùy theo diện tích và loại rừng)",
      "Phạt tiền từ 500.000 đồng đối với diện tích phá rừng dưới 100 m²",
      "Tối thiểu phải từ 100 triệu đồng"
    ],
    "correct": "Phạt tiền từ 3.000.000 đồng trở lên (tùy theo diện tích và loại rừng)",
    "explanation": "Căn cứ Khoản 1 Điều 23 Nghị định số 146/2026/NĐ-CP: Khung phạt tiền thấp nhất đối với hành vi phá rừng trái pháp luật là từ 3.000.000 đồng đến 7.000.000 đồng (áp dụng đối với diện tích rừng trồng chưa thành rừng dưới 3.000 m², rừng sản xuất dưới 500 m², rừng phòng hộ dưới 300 m², rừng đặc dụng dưới 100 m² hoặc thực vật rừng thông thường trị giá dưới 5.000.000 đồng)."
  },
  {
    "id": "ChuRung_079",
    "question": "Mức phạt tiền tối đa mà một cá nhân có thể bị xử phạt hành chính trong lĩnh vực lâm nghiệp là bao nhiêu?",
    "options": [
      "50.000.000 đồng",
      "200.000.000 đồng đối với cá nhân vi phạm pháp luật lâm nghiệp",
      "250.000.000 đồng",
      "500.000.000 đồng (nửa tỷ đồng)"
    ],
    "correct": "500.000.000 đồng (nửa tỷ đồng)",
    "explanation": "Khoản 1 Điều 4 Nghị định 146/2026/NĐ-CP quy định mức phạt tiền tối đa đối với một cá nhân vi phạm hành chính trong lĩnh vực lâm nghiệp lên đến 500.000.000 đồng (đối với tổ chức là 1 tỷ đồng)."
  },
  {
    "id": "ChuRung_080",
    "question": "Phá rừng sản xuất là rừng tự nhiên trái phép từ diện tích bao nhiêu thì bị TRUY CỨU TRÁCH NHIỆM HÌNH SỰ (bị đi tù)?",
    "options": [
      "Từ 5.000 m2 (0,5 ha) trở lên đã cấu thành tội phạm hình sự",
      "Từ 1.000 m2 trở lên trong mọi trường hợp",
      "Từ 10.000 m² (01 ha) trở lên mới bị truy cứu trách nhiệm hình sự",
      "Phá bao nhiêu cũng chỉ bị phạt tiền không bị đi tù"
    ],
    "correct": "Từ 5.000 m2 (0,5 ha) trở lên đã cấu thành tội phạm hình sự",
    "explanation": "Căn cứ Điểm b Khoản 1 Điều 243 Bộ luật Hình sự: Hành vi hủy hoại rừng sản xuất có diện tích từ 5.000 m² đến dưới 10.000 m² bị phạt tiền từ 50.000.000 đồng đến 500.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm."
  },
  {
    "id": "ChuRung_081",
    "question": "Phá rừng phòng hộ trái phép từ diện tích bao nhiêu mét vuông (m2) thì bị khởi tố hình sự phạt tù?",
    "options": [
      "Từ 3.000 m2 trở lên đã đủ yếu tố cấu thành tội phạm hình sự",
      "Từ 700 m2 trở lên",
      "Từ 5.000 m² trở lên mới đủ yếu tố cấu thành tội phạm hình sự",
      "Từ 10.000 m2 trở lên"
    ],
    "correct": "Từ 3.000 m2 trở lên đã đủ yếu tố cấu thành tội phạm hình sự",
    "explanation": "Căn cứ Điểm c Khoản 1 Điều 243 Bộ luật Hình sự: Hành vi hủy hoại rừng phòng hộ có diện tích từ 3.000 m² đến dưới 7.000 m² bị phạt tiền từ 50.000.000 đồng đến 500.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm."
  },
  {
    "id": "ChuRung_082",
    "question": "Phá rừng đặc dụng trái phép từ diện tích bao nhiêu mét vuông (m2) thì bị khởi tố hình sự phạt tù?",
    "options": [
      "Từ 1.000 m2 trở lên đã bị truy cứu trách nhiệm hình sự",
      "Từ 500 m2 trở lên",
      "Từ 2.000 m² trở lên mới bị truy cứu trách nhiệm hình sự",
      "Từ 5.000 m2 trở lên"
    ],
    "correct": "Từ 1.000 m2 trở lên đã bị truy cứu trách nhiệm hình sự",
    "explanation": "Căn cứ Điểm d Khoản 1 Điều 243 Bộ luật Hình sự: Hành vi hủy hoại rừng đặc dụng có diện tích từ 1.000 m² đến dưới 3.000 m² bị phạt tiền từ 50.000.000 đồng đến 500.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm."
  },
  {
    "id": "ChuRung_083",
    "question": "Hành vi lấn, chiếm đất rừng trái phép ngoài việc bị phạt tiền còn bị áp dụng biện pháp gì?",
    "options": [
      "Được giữ lại phần đất đã lấn chiếm",
      "Buộc tháo dỡ công trình, trả lại đất rừng đã lấn chiếm và khôi phục lại tình trạng ban đầu",
      "Chỉ bị truy cứu trách nhiệm hình sự nếu diện tích rừng bị thiệt hại hoàn toàn trên 05 héc-ta",
      "Chỉ cần viết bản kiểm điểm cá nhân"
    ],
    "correct": "Buộc tháo dỡ công trình, trả lại đất rừng đã lấn chiếm và khôi phục lại tình trạng ban đầu",
    "explanation": "Căn cứ Điều 10 Nghị định số 146/2026/NĐ-CP: Hành vi lấn, chiếm đất rừng ngoài phạt tiền còn buộc khôi phục lại tình trạng ban đầu của đất rừng và trả lại diện tích đã lấn chiếm."
  },
  {
    "id": "ChuRung_084",
    "question": "Khai thác trộm gỗ thông thường từ rừng tự nhiên khối lượng bao nhiêu mét khối (m3) thì bị khởi tố đi tù?",
    "options": [
      "Từ 100 m3 trở lên",
      "Từ 10 m3 trở lên tại rừng sản xuất (hoặc từ 07 m3 tại rừng phòng hộ) đã bị truy cứu TNHS",
      "Tạm nộp phạt hành chính và được gia hạn thời hạn trả lại đất trong vòng 12 tháng",
      "Chặt trộm bao nhiêu cũng chỉ bị tịch thu gỗ"
    ],
    "correct": "Từ 10 m3 trở lên tại rừng sản xuất (hoặc từ 07 m3 tại rừng phòng hộ) đã bị truy cứu TNHS",
    "explanation": "Điều 232 Bộ luật Hình sự quy định khai thác trái phép gỗ rừng tự nhiên từ 10 m3 trở lên tại rừng sản xuất, từ 07 m3 tại rừng phòng hộ, từ 03 m3 tại rừng đặc dụng là phạm tội hình sự bị phạt tù."
  },
  {
    "id": "ChuRung_085",
    "question": "Chặt trộm dù chỉ 0,5 m3 gỗ quý hiếm Nhóm IA (như gỗ sưa, gỗ gụ...) tại rừng đặc dụng thì bị xử lý thế nào?",
    "options": [
      "Chỉ bị phạt tiền 500.000 đồng vì khối lượng gỗ chặt trộm rất ít",
      "Đã đủ định lượng bị khởi tố hình sự (khung hình phạt tù từ 06 tháng đến 03 năm)",
      "Được cấp phép nếu có chứng nhận của Hội Sinh vật cảnh cấp tỉnh",
      "Được tha bổng nếu là người dân sinh sống tại địa phương"
    ],
    "correct": "Đã đủ định lượng bị khởi tố hình sự (khung hình phạt tù từ 06 tháng đến 03 năm)",
    "explanation": "Căn cứ Điểm h Khoản 1 Điều 232 Bộ luật Hình sự: Khai thác trái phép gỗ Nhóm IA từ 0,5 m³ đến dưới 01 m³ tại rừng đặc dụng đã đủ yếu tố cấu thành tội phạm, bị phạt tiền từ 50.000.000 đồng đến 300.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm."
  },
  {
    "id": "ChuRung_086",
    "question": "Săn bắt, bẫy bắt hoặc nuôi nhốt trái phép cá thể động vật thuộc Danh mục loài nguy cấp, quý, hiếm ĐƯỢC ƯU TIÊN BẢO VỆ (như tê tê, voọc...) thì bị xử lý như thế nào theo Điều 244 BLHS?",
    "options": [
      "Chỉ cần từ 01 cá thể đã bị khởi tố hình sự phạt tiền từ 500.000.000 đồng đến 2.000.000.000 đồng hoặc phạt tù từ 01 năm đến 05 năm",
      "Nuôi 01 cá thể làm cảnh trong nhà thì không bị xử lý hình sự",
      "Chỉ bị xử phạt vi phạm hành chính về trật tự an toàn giao thông đường bộ",
      "Được phép nuôi nhốt nếu xây dựng chuồng sắt kiên cố"
    ],
    "correct": "Chỉ cần từ 01 cá thể đã bị khởi tố hình sự phạt tiền từ 500.000.000 đồng đến 2.000.000.000 đồng hoặc phạt tù từ 01 năm đến 05 năm",
    "explanation": "Điểm a Khoản 1 Điều 244 Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung năm 2017) quy định: Hành vi săn bắt, giết, nuôi, nhốt, vận chuyển, buôn bán trái phép từ 01 cá thể động vật thuộc Danh mục loài nguy cấp, quý, hiếm được ưu tiên bảo vệ thì bị phạt tiền từ 500.000.000 đồng đến 2.000.000.000 đồng hoặc phạt tù từ 01 năm đến 05 năm (đối với động vật lớp thú thuộc Nhóm IB không thuộc danh mục ưu tiên bảo vệ thì định lượng khởi tố hình sự phải từ 03 cá thể trở lên theo Điểm d Khoản 1 Điều 244)."
  },
  {
    "id": "ChuRung_087",
    "question": "Người dân vận chuyển gỗ trái phép bằng xe máy hoặc xe ô tô tải thì phương tiện vận chuyển bị xử lý thế nào?",
    "options": [
      "Người vi phạm được trả lại xe ngay",
      "Phương tiện vận chuyển vi phạm có thể bị tịch thu sung công quỹ Nhà nước theo quy định",
      "Được phép săn bắt ngoài mùa sinh sản nếu có súng săn có giấy phép đăng ký",
      "Chỉ phạt tiền người lái xe, không được giữ xe"
    ],
    "correct": "Phương tiện vận chuyển vi phạm có thể bị tịch thu sung công quỹ Nhà nước theo quy định",
    "explanation": "Điều 25 Nghị định 146/2026/NĐ-CP quy định tịch thu phương tiện vận chuyển (kể cả xe máy, ô tô, xe ba gác) sử dụng để vận chuyển lâm sản trái pháp luật thuộc trường hợp quy định."
  },
  {
    "id": "ChuRung_088",
    "question": "Mức phạt tiền thấp nhất đối với hành vi vận chuyển lâm sản trái pháp luật đối với cá nhân là bao nhiêu?",
    "options": [
      "Từ 1.000.000 đồng trở lên đối với khối lượng lâm sản nhỏ nhất",
      "Chỉ phạt từ 10.000 đồng",
      "Chỉ tịch thu phương tiện nếu người vi phạm đã từng bị kết án tù về tội phá rừng",
      "Khởi điểm từ 50.000.000 đồng"
    ],
    "correct": "Từ 1.000.000 đồng trở lên đối với khối lượng lâm sản nhỏ nhất",
    "explanation": "Căn cứ Khoản 1 Điều 25 Nghị định số 146/2026/NĐ-CP: Mức phạt tiền thấp nhất đối với hành vi vận chuyển lâm sản trái pháp luật là từ 1.000.000 đồng đến 5.000.000 đồng (áp dụng đối với gỗ loài thông thường dưới 01 m³, gỗ Nhóm IIA dưới 0,5 m³, gỗ Nhóm IA dưới 0,1 m³ hoặc động vật rừng thông thường trị giá dưới 5.000.000 đồng)."
  },
  {
    "id": "ChuRung_089",
    "question": "Hành vi mua bán lâm sản (gỗ, động vật hoang dã) không có giấy tờ nguồn gốc hợp pháp bị xử phạt thế nào?",
    "options": [
      "Bị tịch thu toàn bộ lâm sản và bị xử phạt tiền rất nặng theo quy định xử phạt vi phạm hành chính",
      "Được phép giữ lại sử dụng nếu mua với giá rẻ dưới 1 triệu đồng",
      "Chỉ bị xử phạt vi phạm hành chính mức tối đa 5.000.000 đồng theo Luật Xử lý VPHC",
      "Không bị kiểm tra xử phạt nếu giao dịch diễn ra vào ban đêm"
    ],
    "correct": "Bị tịch thu toàn bộ lâm sản và bị xử phạt tiền rất nặng theo quy định xử phạt vi phạm hành chính",
    "explanation": "Căn cứ Điều 26 Nghị định số 146/2026/NĐ-CP: Hành vi tàng trữ, mua bán lâm sản không có hồ sơ hợp pháp bị tịch thu toàn bộ lâm sản và phạt tiền từ 1.000.000 đồng đến 500.000.000 đồng đối với cá nhân (đối với tổ chức lên đến 1.000.000.000 đồng theo Điều 4)."
  },
  {
    "id": "ChuRung_090",
    "question": "Việc quảng cáo bán động vật hoang dã trái phép trên mạng xã hội (Facebook, Zalo, TikTok) có bị xử phạt không?",
    "options": [
      "Bị xử phạt vi phạm hành chính từ 5.000.000 đồng đến 10.000.000 đồng và buộc gỡ bỏ bài đăng",
      "Không bị phạt vì mạng xã hội là không gian ảo",
      "Được phép bán tự do nếu có giấy xác nhận con giống ban đầu của Trưởng thôn",
      "Được phép quảng cáo nếu không ghi rõ giá tiền"
    ],
    "correct": "Bị xử phạt vi phạm hành chính từ 5.000.000 đồng đến 10.000.000 đồng và buộc gỡ bỏ bài đăng",
    "explanation": "Căn cứ Điểm c Khoản 4 và Điểm đ Khoản 9 Điều 19 Nghị định số 146/2026/NĐ-CP: Hành vi quảng cáo kinh doanh động vật rừng, thực vật rừng không có nguồn gốc hợp pháp bị phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng và buộc gỡ bỏ, xóa nội dung quảng cáo."
  },
  {
    "id": "ChuRung_091",
    "question": "Nuôi nhốt động vật rừng thông thường (như dúi, cầy vòi, nhím...) mà không khai báo với cơ quan Kiểm lâm bị xử lý thế nào?",
    "options": [
      "Không cần khai báo vì là động vật thông thường",
      "Bị xử phạt vi phạm hành chính về hành vi nuôi nhốt động vật rừng trái phép và bị tịch thu",
      "Chỉ cần làm cam kết không buôn bán thương mại với Trưởng thôn là được nuôi hợp pháp",
      "Được chính quyền thưởng tiền khuyến khích"
    ],
    "correct": "Bị xử phạt vi phạm hành chính về hành vi nuôi nhốt động vật rừng trái phép và bị tịch thu",
    "explanation": "Căn cứ Điều 24 Thông tư số 85/2025/TT-BNNMT và Điều 24 Nghị định số 146/2026/NĐ-CP: Nuôi động vật rừng thông thường bắt buộc phải có nguồn gốc hợp pháp và gửi thông báo trong 03 ngày làm việc cho Kiểm lâm sở tại; nuôi trái phép bị phạt tiền và tịch thu vật nuôi."
  },
  {
    "id": "ChuRung_092",
    "question": "Hành vi sử dụng súng tự chế, bẫy kiềng sắt, lưới bắt chim để săn bắt chim thú trong rừng bị xử phạt thế nào?",
    "options": [
      "Bị tịch thu toàn bộ súng, bẫy, công cụ săn bắt và bị phạt tiền rất nặng",
      "Được phép dùng nếu là truyền thống của dòng họ",
      "Chỉ bị xử phạt nếu săn bắt các loài thú có khối lượng cơ thể từ 20 kg trở lên",
      "Chỉ bị nhắc nhở không được bắn trúng người"
    ],
    "correct": "Bị tịch thu toàn bộ súng, bẫy, công cụ săn bắt và bị phạt tiền rất nặng",
    "explanation": "Căn cứ Điều 24 Nghị định số 146/2026/NĐ-CP và Điều 306 Bộ luật Hình sự: Sử dụng súng tự chế, bẫy sắt săn bắt động vật hoang dã bị tịch thu tang vật, phạt tiền và có thể bị phạt tù về tội sử dụng vũ khí trái phép."
  },
  {
    "id": "ChuRung_093",
    "question": "Đốt lửa sưởi ấm trong rừng vào mùa hanh khô bất cẩn làm cháy từ 5.000 m2 rừng tự nhiên sản xuất thì người gây cháy bị xử lý thế nào?",
    "options": [
      "Chỉ bị nhắc nhở rút kinh nghiệm vì thời tiết mùa đông quá lạnh",
      "Bị khởi tố hình sự về tội Vi phạm quy định về PCCC hoặc tội Hủy hoại rừng (phạt tù từ 1 đến 5 năm)",
      "Chỉ bị xử phạt vi phạm hành chính và buộc nộp tiền bồi thường thiệt hại giá trị gỗ",
      "Được cơ quan chức năng hỗ trợ tiền dập lửa"
    ],
    "correct": "Bị khởi tố hình sự về tội Vi phạm quy định về PCCC hoặc tội Hủy hoại rừng (phạt tù từ 1 đến 5 năm)",
    "explanation": "Căn cứ Điểm b Khoản 1 Điều 243 Bộ luật Hình sự năm 2015: Hành vi gây cháy, hủy hoại rừng sản xuất từ 5.000 m² đến dưới 10.000 m² cấu thành tội phạm hình sự và bị phạt tù từ 01 năm đến 05 năm."
  },
  {
    "id": "ChuRung_094",
    "question": "Hành vi cản trở, chống đối cán bộ Kiểm lâm hoặc lực lượng bảo vệ rừng đang thi hành công vụ bị xử lý thế nào?",
    "options": [
      "Không sao vì cán bộ phải chịu đựng nhân dân",
      "Bị xử phạt hành chính nặng hoặc bị truy cứu trách nhiệm hình sự về tội 'Chống người thi hành công vụ'",
      "Chỉ bị xử phạt tiền từ 2.000.000 đồng đến 5.000.000 đồng mà không bị truy cứu hình sự",
      "Chỉ bị phạt viết bản tự kiểm điểm"
    ],
    "correct": "Bị xử phạt hành chính nặng hoặc bị truy cứu trách nhiệm hình sự về tội 'Chống người thi hành công vụ'",
    "explanation": "Hành vi đe dọa, lăng mạ, dùng vũ lực cản trở Kiểm lâm khi đang làm nhiệm vụ bị xử lý nghiêm khắc theo Bộ luật Hình sự (Điều 330 Tội chống người thi hành công vụ) với mức án lên đến 07 năm tù."
  },
  {
    "id": "ChuRung_095",
    "question": "Tang vật là gỗ lậu bị cơ quan chức năng phát hiện, tạm giữ thì được xử lý như thế nào?",
    "options": [
      "Chia đều cho những người tham gia bắt giữ",
      "Tịch thu sung công quỹ Nhà nước để bán đấu giá hoặc chuyển giao theo quy định pháp luật",
      "Chuyển giao cho Ủy ban nhân dân cấp xã làm vật liệu xây dựng nhà văn hóa thôn",
      "Trả lại cho người vận chuyển nếu xin xỏ"
    ],
    "correct": "Tịch thu sung công quỹ Nhà nước để bán đấu giá hoặc chuyển giao theo quy định pháp luật",
    "explanation": "Căn cứ Nghị định số 29/2018/NĐ-CP, Chương IV Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT) và Luật Quản lý, sử dụng tài sản công năm 2017: Lâm sản bị tịch thu do vi phạm pháp luật được xác lập quyền sở hữu toàn dân, xử lý theo hình thức bán đấu giá nộp ngân sách nhà nước, chuyển giao cho cơ quan nhà nước sử dụng hoặc tiêu hủy nếu thuộc trường hợp phải tiêu hủy."
  },
  {
    "id": "ChuRung_096",
    "question": "Hành vi chặt phá cây rừng để làm đường dây điện bị xử phạt thế nào?",
    "options": [
      "Được phép vì mục đích sinh hoạt",
      "Bị xử phạt về hành vi Phá rừng và buộc tháo dỡ công trình, trồng lại diện tích rừng đã phá",
      "Chỉ bị xử phạt vi phạm hành chính theo quy định về bảo vệ an toàn hành lang lưới điện",
      "Không bị xử phạt nếu nộp tiền điện đầy đủ"
    ],
    "correct": "Bị xử phạt về hành vi Phá rừng và buộc tháo dỡ công trình, trồng lại diện tích rừng đã phá",
    "explanation": "Căn cứ Điều 23 Nghị định số 146/2026/NĐ-CP: Chặt cây rừng làm đường điện bị xử phạt về hành vi Phá rừng."
  },
  {
    "id": "ChuRung_097",
    "question": "Người dân tự nguyện giao nộp động vật rừng quý hiếm đi lạc hoặc nuôi trước đây cho Nhà nước thì có bị đi tù không?",
    "options": [
      "Bị bắt bỏ tù ngay lập tức khi vừa bước chân vào cổng",
      "Được Nhà nước khoan hồng, không bị xử phạt và được cơ quan chức năng tiếp nhận để cứu hộ",
      "Chỉ được miễn phạt tiền nếu cá thể động vật giao nộp còn hoàn toàn khỏe mạnh",
      "Không cơ quan nào tiếp nhận động vật giao nộp"
    ],
    "correct": "Được Nhà nước khoan hồng, không bị xử phạt và được cơ quan chức năng tiếp nhận để cứu hộ",
    "explanation": "Căn cứ Khoản 3 Điều 15 Thông tư số 85/2025/TT-BNNMT ngày 31/12/2025 của Bộ Nông nghiệp và Môi trường: Nhà nước khuyến khích, tiếp nhận và cứu hộ đối với các cá thể động vật hoang dã do tổ chức, cá nhân tự nguyện giao nộp cho Nhà nước; người dân tự nguyện giao nộp sẽ được cơ quan chức năng tiếp nhận để chăm sóc, cứu hộ và không bị xử phạt."
  },
  {
    "id": "ChuRung_098",
    "question": "Trường hợp nào sau đây người dân đi rừng KHÔNG bị coi là vi phạm pháp luật?",
    "options": [
      "Mang cưa xăng vào rừng đặc dụng chặt hạ cây cổ thụ",
      "Đi trên đường mòn tuần tra rừng, thu nhặt củi khô gãy mục trong rừng sản xuất của gia đình",
      "Thu hái măng bát độ và thảo quả trồng xen dưới tán rừng đặc dụng khi chưa xin phép",
      "Đổ hóa chất độc xuống suối đầu nguồn để bắt cá"
    ],
    "correct": "Đi trên đường mòn tuần tra rừng, thu nhặt củi khô gãy mục trong rừng sản xuất của gia đình",
    "explanation": "Căn cứ Điều 56 Luật Lâm nghiệp năm 2017: Công dân có quyền đi lại trên các tuyến đường dân sinh hợp pháp, thăm rừng và thu nhặt phụ phẩm củi mục trong phạm vi rừng được giao quản lý theo quy định."
  },
  {
    "id": "ChuRung_099",
    "question": "Hành vi đốt dọn thực bì không làm đường băng cản lửa, dù CHƯA LÀM CHÁY RỪNG thì có bị phạt không?",
    "options": [
      "Chưa cháy rừng thì không bao giờ bị phạt",
      "Vẫn bị xử phạt vi phạm hành chính về hành vi vi phạm quy định an toàn phòng cháy chữa cháy rừng",
      "Chỉ bị lập biên bản nhắc nhở nếu chưa gây thiệt hại cho các chủ rừng xung quanh",
      "Chỉ bị phạt khi có khói bay vào mắt người khác"
    ],
    "correct": "Vẫn bị xử phạt vi phạm hành chính về hành vi vi phạm quy định an toàn phòng cháy chữa cháy rừng",
    "explanation": "Căn cứ Điểm i Khoản 2 Điều 19 Nghị định số 146/2026/NĐ-CP: Hành vi không thực hiện đúng quy định về sử dụng lửa khi đốt nương rẫy, đốt thực bì chuẩn bị đất trồng rừng bị phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng kể cả khi chưa làm cháy lan."
  },
  {
    "id": "ChuRung_100",
    "question": "Thông điệp quan trọng nhất mà mỗi người dân, chủ rừng cần ghi nhớ để vừa phát triển kinh tế vừa không vi phạm pháp luật là gì?",
    "options": [
      "Cứ chặt phá rừng trước rồi nộp phạt sau",
      "Bảo vệ rừng là bảo vệ nguồn sống; chỉ khai thác rừng trồng hợp pháp, không phá rừng tự nhiên và luôn cảnh giác phòng chống cháy rừng",
      "Tự do khai thác cây rừng theo nhu cầu sinh hoạt gia đình mà không cần tuân thủ quy chế",
      "Rừng của ai người nấy lo, cháy rừng không việc gì phải giúp"
    ],
    "correct": "Bảo vệ rừng là bảo vệ nguồn sống; chỉ khai thác rừng trồng hợp pháp, không phá rừng tự nhiên và luôn cảnh giác phòng chống cháy rừng",
    "explanation": "Căn cứ Điều 9 và Điều 102 Luật Lâm nghiệp năm 2017: Tuân thủ pháp luật lâm nghiệp giúp người dân bảo vệ tài sản, yên tâm làm giàu từ rừng trồng và phòng tránh các rủi ro pháp lý."
  },
  {
    "id": "ChuRung_101",
    "question": "Nguyên tắc 'ĐÚNG LUẬT' trong hoạt động phóng sinh động vật hoang dã được hiểu như thế nào?",
    "options": [
      "Tuyệt đối không săn bắt, mua bán, vận chuyển, nuôi nhốt hoặc phóng sinh động vật hoang dã trái quy định của pháp luật",
      "Được phép mua bất kỳ con thú nào ngoài chợ miễn là mục đích mua để thả phóng sinh tích đức",
      "Được phép thả nếu cá thể động vật đã được nuôi thuần hóa trong gia đình trên 06 tháng",
      "Được phép tự do bẫy bắt thú rừng về thả vào vườn nhà của người khác"
    ],
    "correct": "Tuyệt đối không săn bắt, mua bán, vận chuyển, nuôi nhốt hoặc phóng sinh động vật hoang dã trái quy định của pháp luật",
    "explanation": "Căn cứ Điều 9 Luật Lâm nghiệp năm 2017 và Thông tư số 85/2025/TT-BNNMT: Phóng sinh đúng luật là hoạt động nhân đạo nhưng tuyệt đối không mua bán, săn bắt, tàng trữ, nuôi nhốt trái phép hoặc tiếp tay cho các đối tượng săn bẫy động vật hoang dã từ tự nhiên."
  },
  {
    "id": "ChuRung_102",
    "question": "Thế nào là phóng sinh 'ĐÚNG LOÀI' theo khuyến cáo của cơ quan Kiểm lâm và bảo tồn thiên nhiên?",
    "options": [
      "Lựa chọn loài bản địa phù hợp với hệ sinh thái; tuyệt đối không thả các loài ngoại lai xâm hại hoặc loài không phù hợp với môi trường sống",
      "Thả bất kỳ loài động vật nào mua được từ các gánh hàng rong trước cổng đền chùa",
      "Có thể thả bất kỳ loài động vật hoang dã nào nếu chúng có nguồn gốc sinh sản trong nước",
      "Chỉ phóng sinh các loài thú ăn thịt hung dữ để rèn luyện bản năng sinh tồn"
    ],
    "correct": "Lựa chọn loài bản địa phù hợp với hệ sinh thái; tuyệt đối không thả các loài ngoại lai xâm hại hoặc loài không phù hợp với môi trường sống",
    "explanation": "Căn cứ Điều 43 Nghị định số 45/2022/NĐ-CP và Luật Đa dạng sinh học: Phóng sinh đúng loài là chỉ thả loài bản địa phù hợp; nghiêm cấm phóng sinh sinh vật ngoại lai xâm hại phá hoại hệ sinh thái."
  },
  {
    "id": "ChuRung_103",
    "question": "Nguyên tắc phóng sinh 'ĐÚNG NƠI' yêu cầu người dân phải lựa chọn sinh cảnh như thế nào khi tái thả động vật?",
    "options": [
      "Lựa chọn sinh cảnh phù hợp với tập tính sinh học của loài, bảo đảm có nguồn thức ăn, nước uống và điều kiện an toàn để con vật có thể sinh tồn lâu dài",
      "Thả rùa cạn xuống lòng sông sâu hoặc thả cá nước ngọt vào đầm nước mặn",
      "Chỉ cần chọn các khu bảo tồn thiên nhiên hoặc vườn quốc gia để thả mà không cần xem xét sinh cảnh cụ thể của loài",
      "Cứ thấy hồ nước nào gần nhà nhất là thả toàn bộ các loại chim, thú, bò sát xuống"
    ],
    "correct": "Lựa chọn sinh cảnh phù hợp với tập tính sinh học của loài, bảo đảm có nguồn thức ăn, nước uống và điều kiện an toàn để con vật có thể sinh tồn lâu dài",
    "explanation": "Căn cứ Khoản 2 Điều 11 Thông tư số 85/2025/TT-BNNMT: Thả động vật về môi trường tự nhiên phải bảo đảm sinh cảnh phù hợp với vùng phân bố tự nhiên của loài, bảo đảm nguồn thức ăn, nước uống và điều kiện an toàn sinh tồn."
  },
  {
    "id": "ChuRung_104",
    "question": "Nguyên tắc phóng sinh 'ĐÚNG LÚC' có ý nghĩa gì đối với khả năng sống sót của động vật?",
    "options": [
      "Lựa chọn thời điểm thời tiết và môi trường phù hợp với khả năng thích nghi của loài (tránh thả giữa trưa nắng gắt hoặc mùa đông giá rét làm con vật sốc nhiệt, kiệt sức)",
      "Chỉ được phóng sinh vào đúng 12 giờ đêm ngày rằm tháng 7 âm lịch",
      "Nên thả vào thời điểm rạng sáng của các ngày lễ Phật đản bất kể nhiệt độ môi trường ngoài trời",
      "Chờ đến khi con vật bị ốm liệt không cử động được mới đem đi thả"
    ],
    "correct": "Lựa chọn thời điểm thời tiết và môi trường phù hợp với khả năng thích nghi của loài (tránh thả giữa trưa nắng gắt hoặc mùa đông giá rét làm con vật sốc nhiệt, kiệt sức)",
    "explanation": "Căn cứ Khoản 2 Điều 11 Thông tư số 85/2025/TT-BNNMT: Thời điểm thả động vật về tự nhiên phải bảo đảm các yếu tố khí hậu, thời tiết thuận lợi, phù hợp với đặc tính sinh học của loài để động vật nhanh chóng thích nghi môi trường sống."
  },
  {
    "id": "ChuRung_105",
    "question": "Nguyên tắc phóng sinh 'ĐÚNG CÁCH' đòi hỏi người dân cần lưu ý điều gì trước và trong khi thả con vật?",
    "options": [
      "Nhận diện loài, đánh giá tình trạng sức khỏe con vật trước khi thả; thả nhẹ nhàng; trường hợp động vật hoang dã nguy cấp cần cứu hộ phải báo cơ quan Kiểm lâm",
      "Ném thật mạnh từ trên cầu cao xuống sông để con vật nhanh chóng bơi đi",
      "Chỉ cần mở cửa lồng cho con vật tự bay hoặc bò ra ngoài mà không cần kiểm tra sức khỏe ban đầu",
      "Cắt bớt lông cánh của chim trước khi thả để chim bay lượn gần mặt đất"
    ],
    "correct": "Nhận diện loài, đánh giá tình trạng sức khỏe con vật trước khi thả; thả nhẹ nhàng; trường hợp động vật hoang dã nguy cấp cần cứu hộ phải báo cơ quan Kiểm lâm",
    "explanation": "Căn cứ Điều 11 và Điều 15 Thông tư số 85/2025/TT-BNNMT: Động vật trước khi thả phải được đánh giá sức khỏe, không mang dịch bệnh, tháo bỏ dây buộc bao bì; trường hợp động vật bị thương tật, suy kiệt phải bàn giao cơ quan Kiểm lâm hoặc cơ sở cứu hộ."
  },
  {
    "id": "ChuRung_106",
    "question": "Hành vi mua động vật hoang dã (chim trời, rùa, rắn) tại các điểm bán rong trước cổng đền chùa để phóng sinh gây ra tác hại xã hội nào hàng đầu?",
    "options": [
      "Tạo áp lực săn bắt: Nhu cầu mua phóng sinh vô tình tiếp tay cho thợ bẫy bắt, gom hàng và kích thích đường dây buôn bán trái phép động vật hoang dã",
      "Làm tăng sản lượng nông nghiệp của các hộ nông dân vùng ven rừng",
      "Làm gia tăng nguồn cung động vật hoang dã thương phẩm trên thị trường tự do",
      "Làm phong phú thêm nguồn gen động vật quý hiếm trong các khu đô thị"
    ],
    "correct": "Tạo áp lực săn bắt: Nhu cầu mua phóng sinh vô tình tiếp tay cho thợ bẫy bắt, gom hàng và kích thích đường dây buôn bán trái phép động vật hoang dã",
    "explanation": "Căn cứ Điều 9 Luật Lâm nghiệp năm 2017: Mua động vật bẫy bắt để phóng sinh vô tình tạo áp lực săn bắt, tiếp tay cho các đối tượng tận diệt chim thú rừng tự nhiên."
  },
  {
    "id": "ChuRung_107",
    "question": "Việc phóng sinh các loài sinh vật ngoại lai xâm hại (như rùa tai đỏ, cá lau kính, ốc bươu vàng) vào sông suối tự nhiên gây ra hậu quả gì?",
    "options": [
      "Gây mất cân bằng hệ sinh thái: Loài ngoại lai cạnh tranh thức ăn, nơi sống, phát tán dịch bệnh và tiêu diệt các loài thủy sinh bản địa",
      "Cải thiện chất lượng nguồn nước ngọt sinh hoạt của các hộ dân trong vùng",
      "Chỉ ảnh hưởng cục bộ tại điểm thả và tự động cân bằng sau từ 01 đến 02 năm",
      "Không gây ảnh hưởng gì vì thiên nhiên tự có cơ chế đào thải tự nhiên"
    ],
    "correct": "Gây mất cân bằng hệ sinh thái: Loài ngoại lai cạnh tranh thức ăn, nơi sống, phát tán dịch bệnh và tiêu diệt các loài thủy sinh bản địa",
    "explanation": "Căn cứ Điều 43 Nghị định số 45/2022/NĐ-CP: Phóng sinh loài ngoại lai xâm hại phá vỡ cân bằng sinh thái, cạnh tranh và tiêu diệt các loài bản địa, hủy hoại môi trường nước."
  },
  {
    "id": "ChuRung_108",
    "question": "Thả phóng sinh những cá thể động vật bị thương tật, suy kiệt sức khỏe hoặc nuôi nhốt lâu ngày sẽ dẫn đến hậu quả gì cho chính con vật?",
    "options": [
      "Gây tổn hại cho chính con vật: Động vật suy yếu, mất khả năng tự kiếm ăn sẽ bị chết đói, chết ngạt hoặc phát tán mầm bệnh nguy hiểm ra môi trường",
      "Giúp con vật nhanh chóng hồi phục thể lực kỳ diệu trong vài giờ",
      "Chỉ cần cho con vật ăn no trước khi thả là bảo đảm khả năng sinh tồn ngoài tự nhiên",
      "Tạo kháng thể tự nhiên giúp con vật miễn nhiễm với mọi loại virus"
    ],
    "correct": "Gây tổn hại cho chính con vật: Động vật suy yếu, mất khả năng tự kiếm ăn sẽ bị chết đói, chết ngạt hoặc phát tán mầm bệnh nguy hiểm ra môi trường",
    "explanation": "Căn cứ Điều 11 và Điều 15 Thông tư số 85/2025/TT-BNNMT: Động vật chưa được cứu hộ phục hồi, bị thương tật hoặc mang mầm bệnh tuyệt đối không được thả ra tự nhiên vì sẽ làm chết con vật và có nguy cơ lây lan dịch bệnh cho môi trường sinh thái."
  },
  {
    "id": "ChuRung_109",
    "question": "Tình huống: Chị B vào ngày rằm mua 2 con rùa tai đỏ từ người bán dạo mang ra hồ nước cạnh đền gần bìa rừng thả phóng sinh. Hành vi của chị B bị đánh giá như thế nào?",
    "options": [
      "Sai quy định: Rùa tai đỏ là loài ngoại lai xâm hại nguy hiểm, hành vi phát tán vào tự nhiên bị pháp luật nghiêm cấm và bị xử phạt hành chính",
      "Hoàn toàn đúng vì chị B có tâm thiện nguyện cầu bình an cho gia đình",
      "Được coi là hoạt động tôn giáo hợp pháp và chỉ bị nhắc nhở bảo đảm an ninh trật tự",
      "Chỉ bị nhắc nhở nếu rùa tai đỏ bò lên bờ cắn người"
    ],
    "correct": "Sai quy định: Rùa tai đỏ là loài ngoại lai xâm hại nguy hiểm, hành vi phát tán vào tự nhiên bị pháp luật nghiêm cấm và bị xử phạt hành chính",
    "explanation": "Căn cứ Khoản 2 Điều 43 Nghị định số 45/2022/NĐ-CP: Hành vi phát tán loài ngoại lai xâm hại (rùa tai đỏ) vào môi trường tự nhiên bị phạt tiền từ 1.000.000 đồng đến hàng chục triệu đồng."
  },
  {
    "id": "ChuRung_110",
    "question": "Tình huống: Anh A thấy người bán dạo chở lồng chim sẻ, chim sâu kiệt sức trước cổng chùa, anh A mua hết 50 con đem lên sườn đồi bìa rừng mở lồng thả. Khi thả ra có hơn 20 con chết tại chỗ. Nhận định nào đúng nhất về việc làm của anh A?",
    "options": [
      "Phóng sinh sai cách: Mua chim bẫy bắt vừa tiếp tay cho nạn săn bẫy chim trời, vừa làm chim bị chết ngạt, sốc nhiệt và gây ô nhiễm môi trường",
      "Là hành động đại từ bi đáng được chính quyền địa phương khen thưởng",
      "Bắt buộc chuyển giao cho Vườn thú Hà Nội hoặc Thảo Cầm Viên Sài Gòn",
      "Anh A không có lỗi vì trách nhiệm làm chết chim thuộc về người bán lồng"
    ],
    "correct": "Phóng sinh sai cách: Mua chim bẫy bắt vừa tiếp tay cho nạn săn bẫy chim trời, vừa làm chim bị chết ngạt, sốc nhiệt và gây ô nhiễm môi trường",
    "explanation": "Căn cứ Điều 9 Luật Lâm nghiệp năm 2017: Mua chim bẫy bắt kiệt sức phóng sinh là hành vi tiếp tay tiêu thụ động vật hoang dã trái phép, làm chim chết hàng loạt và ô nhiễm môi trường."
  },
  {
    "id": "ChuRung_111",
    "question": "Vào các dịp lễ Thanh minh, Vu lan, rằm tháng 7 và ngày Tết, tại sao nguy cơ cháy rừng tại Tuyên Quang lại đặc biệt tăng cao?",
    "options": [
      "Do người dân gia tăng hoạt động tín ngưỡng, đi tảo mộ, thắp hương và đốt vàng mã bất cẩn tại các nghĩa địa, đồi nương nằm xen kẽ hoặc giáp ranh với rừng",
      "Do nhiệt độ mùa đông tại Tuyên Quang luôn nóng gay gắt trên 45 độ C",
      "Được coi là công việc tạo thu nhập thời vụ chính đáng cho lao động nông thôn",
      "Do sấm sét tự nhiên xuất hiện liên tục trong cả tháng Tết âm lịch"
    ],
    "correct": "Do người dân gia tăng hoạt động tín ngưỡng, đi tảo mộ, thắp hương và đốt vàng mã bất cẩn tại các nghĩa địa, đồi nương nằm xen kẽ hoặc giáp ranh với rừng",
    "explanation": "Căn cứ Điều 45 Nghị định số 156/2018/NĐ-CP: Dịp lễ Tết, Thanh minh mùa hanh khô, thắp hương đốt vàng mã gần rừng là nguyên nhân hàng đầu gây cháy rừng cần cảnh báo đặc biệt."
  },
  {
    "id": "ChuRung_112",
    "question": "Khi đi tảo mộ, thăm viếng nghĩa trang hoặc thực hiện nghi lễ gần khu vực rừng, quy tắc sử dụng lửa an toàn nào là BẮT BUỘC?",
    "options": [
      "Không đốt vàng mã khi trời nắng nóng, gió mạnh; không thắp hương gần bìa rừng, thảm thực vật khô; luôn có người trông coi và dập tắt hoàn toàn tàn lửa trước khi về",
      "Được phép gom lá thông khô xung quanh mộ lại để đốt vàng mã cho cháy to",
      "Chỉ cần đem thả vào các hồ nước trong khuôn viên di tích lịch sử hoặc công viên đô thị",
      "Đốt vàng mã ngay trên thảm cỏ khô dưới tán rừng keo vào buổi trưa"
    ],
    "correct": "Không đốt vàng mã khi trời nắng nóng, gió mạnh; không thắp hương gần bìa rừng, thảm thực vật khô; luôn có người trông coi và dập tắt hoàn toàn tàn lửa trước khi về",
    "explanation": "Căn cứ Điều 47 Nghị định số 156/2018/NĐ-CP: Thắp hương, đốt vàng mã gần rừng bắt buộc phải dọn sạch thảm khô xung quanh, có người trông coi và dập tắt hoàn toàn trước khi về."
  },
  {
    "id": "ChuRung_113",
    "question": "Hành động nào sau đây bị nghiêm cấm tuyệt đối khi đi lễ hội, viếng mộ gần bìa rừng?",
    "options": [
      "Vứt tàn hương, tàn thuốc lá hoặc than củi chưa tắt hẳn vào bụi cây, thảm thực vật khô ven rừng",
      "Mang theo chai nước sạch để dập tắt tàn hương sau khi cúng lễ",
      "Chỉ cần nuôi nhốt con vật trong môi trường yên tĩnh 24 giờ là có thể tái thả ngay",
      "Báo cho Kiểm lâm địa bàn khi thấy có khói lạ bốc lên từ phía sườn rừng"
    ],
    "correct": "Vứt tàn hương, tàn thuốc lá hoặc than củi chưa tắt hẳn vào bụi cây, thảm thực vật khô ven rừng",
    "explanation": "Căn cứ Khoản 2 và Khoản 3 Điều 19 Nghị định số 146/2026/NĐ-CP: Nghiêm cấm vứt tàn hương, que diêm còn tàn lửa vào thảm thực vật ven rừng; hành vi vi phạm an toàn phòng cháy và chữa cháy rừng bị phạt tiền từ 1.000.000 đồng đến 5.000.000 đồng."
  },
  {
    "id": "ChuRung_114",
    "question": "Trước khi rời khỏi khu vực thắp hương, đốt vàng mã gần bìa rừng, người dân phải kiểm tra và xử lý tàn tro như thế nào?",
    "options": [
      "Dập tắt hoàn toàn tàn lửa, tàn hương và than đỏ bằng nước hoặc phủ đất cát dầy; bảo đảm không còn khói hoặc đốm lửa âm ỉ",
      "Chỉ cần thổi nhẹ bằng miệng cho bớt khói rồi ra về",
      "Phải có sự chứng kiến và ký xác nhận của đại diện Viện Kiểm sát nhân dân cấp huyện",
      "Cứ để than tự tàn tự nhiên vì gió rừng sẽ thổi nguội dần"
    ],
    "correct": "Dập tắt hoàn toàn tàn lửa, tàn hương và than đỏ bằng nước hoặc phủ đất cát dầy; bảo đảm không còn khói hoặc đốm lửa âm ỉ",
    "explanation": "Căn cứ Điều 47 Nghị định số 156/2018/NĐ-CP: Sau khi thắp hương, cúng lễ gần bìa rừng phải dùng nước hoặc đất dập tắt triệt để than đỏ, bảo đảm không còn đốm lửa âm ỉ."
  },
  {
    "id": "ChuRung_115",
    "question": "Khi phát hiện có đám cháy rừng hoặc khói bốc lên gần bìa rừng, người dân cần xử lý như thế nào là nhanh chóng và đúng nhất?",
    "options": [
      "Hô hoán người xung quanh hỗ trợ ngăn chặn dập lửa ban đầu và báo ngay cho lực lượng Kiểm lâm, chính quyền xã hoặc Cảnh sát PCCC gần nhất",
      "Lẳng lặng bỏ về nhà đóng kín cửa coi như mình không nhìn thấy",
      "Chỉ cần làm đơn xin xác nhận của Trưởng thôn nơi thực hiện việc thả phóng sinh",
      "Đăng bài lên mạng xã hội chờ người khác gọi điện báo công an"
    ],
    "correct": "Hô hoán người xung quanh hỗ trợ ngăn chặn dập lửa ban đầu và báo ngay cho lực lượng Kiểm lâm, chính quyền xã hoặc Cảnh sát PCCC gần nhất",
    "explanation": "Căn cứ Khoản 4 Điều 39 Luật Lâm nghiệp năm 2017 và Điều 51 Nghị định số 156/2018/NĐ-CP: Khi phát hiện cháy rừng hoặc khói bốc lên gần bìa rừng, công dân phải kịp thời chữa cháy, hô hoán người xung quanh dập lửa ban đầu và báo ngay cho cơ quan Kiểm lâm sở tại hoặc Ủy ban nhân dân cấp xã nơi gần nhất."
  },
  {
    "id": "ChuRung_116",
    "question": "Tình huống: Ông C đi tảo mộ dịp tiết Thanh minh ở sườn đồi, đốt vàng mã xong gặp gió to cuốn tàn lửa vào rừng keo gây cháy 0,5 ha rừng. Ông C sẽ bị xử lý như thế nào?",
    "options": [
      "Bị xử phạt vi phạm hành chính hoặc truy cứu trách nhiệm hình sự về tội vi phạm quy định PCCC rừng, đồng thời phải bồi thường toàn bộ thiệt hại về rừng",
      "Không bị xử lý vì việc đốt vàng mã là phong tục tập quán tâm linh truyền thống",
      "Đăng thông tin lên các hội nhóm mạng xã hội để tìm người có nhu cầu nhận nuôi",
      "Được Nhà nước hỗ trợ tiền bồi thường thiệt hại cho chủ rừng keo"
    ],
    "correct": "Bị xử phạt vi phạm hành chính hoặc truy cứu trách nhiệm hình sự về tội vi phạm quy định PCCC rừng, đồng thời phải bồi thường toàn bộ thiệt hại về rừng",
    "explanation": "Căn cứ Điều 20 Nghị định số 146/2026/NĐ-CP và Điều 313 Bộ luật Hình sự: Hành vi bất cẩn đốt vàng mã gây cháy rừng bị xử phạt vi phạm hành chính hoặc truy cứu trách nhiệm hình sự và phải bồi thường toàn bộ thiệt hại về rừng."
  },
  {
    "id": "ChuRung_117",
    "question": "Đối với cây cảnh có nguồn gốc từ vườn nhà hoặc khai thác trên đất thổ cư của hộ gia đình, pháp luật lâm nghiệp có quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp' không?",
    "options": [
      "Pháp luật hiện hành KHÔNG quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp'; việc chứng minh nguồn gốc thực hiện thông qua Bảng kê lâm sản và hồ sơ lâm sản hợp pháp",
      "Bắt buộc phải xin Giấy xác nhận nguồn gốc hợp pháp của Giám đốc Sở Nông nghiệp và Môi trường",
      "Có thể thả tự do nếu số lượng cá thể chim thả dưới 10 con",
      "Mọi cây cảnh trồng trong vườn nhà đều bị cấm mua bán ra ngoài tỉnh"
    ],
    "correct": "Pháp luật hiện hành KHÔNG quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp'; việc chứng minh nguồn gốc thực hiện thông qua Bảng kê lâm sản và hồ sơ lâm sản hợp pháp",
    "explanation": "Căn cứ Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT): Pháp luật không quy định cấp \"Giấy xác nhận nguồn gốc\" cho cây vườn nhà; tính hợp pháp của lâm sản được xác lập qua Bảng kê lâm sản."
  },
  {
    "id": "ChuRung_118",
    "question": "Trường hợp cây cảnh vườn nhà là loài cây gỗ thông thường (không thuộc loài nguy cấp, quý hiếm), khi xuất bán vận chuyển có bắt buộc phải xin xác nhận Bảng kê lâm sản của Kiểm lâm không?",
    "options": [
      "KHÔNG thuộc đối tượng buộc phải xác nhận; chủ cây tự lập Bảng kê lâm sản. Trường hợp chủ cây có nhu cầu tự nguyện đề nghị xác nhận thì cơ quan Kiểm lâm sẽ tiếp nhận xác nhận",
      "Bắt buộc 100% trường hợp phải có xác nhận có đóng dấu đỏ của Hạt trưởng Hạt Kiểm lâm",
      "Chỉ cần ký cam kết không bẫy bắt chim trong mùa làm tổ",
      "Chỉ cần người mua tự viết giấy tay là hợp pháp không cần Bảng kê lâm sản"
    ],
    "correct": "KHÔNG thuộc đối tượng buộc phải xác nhận; chủ cây tự lập Bảng kê lâm sản. Trường hợp chủ cây có nhu cầu tự nguyện đề nghị xác nhận thì cơ quan Kiểm lâm sẽ tiếp nhận xác nhận",
    "explanation": "Căn cứ Điểm đ Khoản 3 Điều 5 Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT): Cây cảnh gỗ thông thường vườn nhà do chủ cây tự lập Bảng kê lâm sản; cơ quan Kiểm lâm tiếp nhận xác nhận khi chủ cây có đề nghị tự nguyện."
  },
  {
    "id": "ChuRung_119",
    "question": "Trường hợp cây cảnh vườn nhà là loài thực vật rừng thuộc Danh mục nguy cấp, quý, hiếm (Nhóm IA, IIA) hoặc Phụ lục CITES, hồ sơ đề nghị Kiểm lâm xác nhận Bảng kê lâm sản gồm những gì?",
    "options": [
      "Bản chính Đơn đề nghị xác nhận Bảng kê (Mẫu số 03), Bản chính Bảng kê lâm sản và Bản sao Phương án khai thác theo Mẫu số 08",
      "Chỉ cần nộp bản sao Giấy khai sinh của chủ vườn cây",
      "Khuyên người nhà nuôi thuần dưỡng trong chuồng kín để bảo tồn nguồn gen quý hiếm",
      "Phải nộp sổ đỏ bản gốc lưu giữ vĩnh viễn tại cơ quan Kiểm lâm"
    ],
    "correct": "Bản chính Đơn đề nghị xác nhận Bảng kê (Mẫu số 03), Bản chính Bảng kê lâm sản và Bản sao Phương án khai thác theo Mẫu số 08",
    "explanation": "Căn cứ Khoản 6 Điều 5 Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT): Hồ sơ xác nhận gồm Đơn đề nghị xác nhận Bảng kê lâm sản (Mẫu số 03), Bảng kê lâm sản và Phương án khai thác (Mẫu số 08)."
  },
  {
    "id": "ChuRung_120",
    "question": "Người dân khi nộp hồ sơ đề nghị xác nhận Bảng kê lâm sản cho cây cảnh tại Cơ quan Kiểm lâm sở tại có phải nộp khoản tiền phí hay lệ phí nào không?",
    "options": [
      "Hoàn toàn KHÔNG thu phí; thủ tục xác nhận nguồn gốc lâm sản được cơ quan Kiểm lâm thực hiện miễn phí theo quy định",
      "Phải nộp lệ phí bằng 10% giá trị ước tính của cây cảnh",
      "Chỉ bị xem xét trách nhiệm dân sự về bảo vệ môi trường công cộng",
      "Tùy thuộc vào thỏa thuận miệng giữa người dân và cán bộ tiếp nhận hồ sơ"
    ],
    "correct": "Hoàn toàn KHÔNG thu phí; thủ tục xác nhận nguồn gốc lâm sản được cơ quan Kiểm lâm thực hiện miễn phí theo quy định",
    "explanation": "Căn cứ Điều 5 Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT): Thủ tục xác nhận Bảng kê lâm sản tại cơ quan Kiểm lâm sở tại là thủ tục hành chính không thu phí, lệ phí của người dân."
  },
  {
    "id": "ChuRung_121",
    "question": "Tình huống: Anh M có 02 cây mai cổ thụ trồng lâu năm trên đất thổ cư muốn chở sang tỉnh khác bán. Anh M đến Hạt Kiểm lâm xin 'Giấy xác nhận nguồn gốc cây cảnh'. Cán bộ Kiểm lâm hướng dẫn thế nào là chuẩn xác?",
    "options": [
      "Giải thích pháp luật không có thủ tục cấp giấy này; hướng dẫn anh M tự lập Bảng kê lâm sản, nếu anh M tự nguyện đề nghị thì Kiểm lâm tiếp nhận xác nhận Bảng kê hoàn toàn miễn phí",
      "Yêu cầu anh M phải nộp phạt 5 triệu đồng vì tự ý đào cây vườn nhà khi chưa xin phép",
      "Được phép tổ chức nếu đã thông báo cho Ủy ban nhân dân cấp xã trước 03 ngày làm việc",
      "Thu giữ luôn 02 cây mai của anh M để xác minh lai lịch nguồn gốc"
    ],
    "correct": "Giải thích pháp luật không có thủ tục cấp giấy này; hướng dẫn anh M tự lập Bảng kê lâm sản, nếu anh M tự nguyện đề nghị thì Kiểm lâm tiếp nhận xác nhận Bảng kê hoàn toàn miễn phí",
    "explanation": "Căn cứ Điều 5 và Điều 8 Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT, hợp nhất tại VBHN số 04/VBHN-BNNMT): Kiểm lâm hướng dẫn chủ cây tự lập Bảng kê lâm sản; tiếp nhận xác nhận Bảng kê tự nguyện hoàn toàn miễn phí."
  },
  {
    "id": "ChuRung_122",
    "question": "Tại sao khi xác định tính pháp lý và danh mục quản lý của một loài cây rừng, cây cảnh, căn cứ khoa học chính thức duy nhất bắt buộc phải sử dụng là gì?",
    "options": [
      "Tên khoa học (tên Latinh) của loài; tên thông thường bằng tiếng Việt hoặc tiếng Anh chỉ có giá trị tham khảo",
      "Tên gọi dân gian truyền miệng của người dân cao tuổi tại địa phương",
      "Chỉ cần tẩy giun sán và cho uống kháng sinh trước thời điểm thả 12 giờ",
      "Màu sắc của hoa và mùi thơm của quả khi chín"
    ],
    "correct": "Tên khoa học (tên Latinh) của loài; tên thông thường bằng tiếng Việt hoặc tiếng Anh chỉ có giá trị tham khảo",
    "explanation": "Căn cứ Điều 4 Thông tư số 85/2025/TT-BNNMT và Thông tư số 26/2025/TT-BNNMT (sửa đổi bởi Thông tư số 84/2025/TT-BNNMT): Tên khoa học (tên Latinh) là căn cứ pháp lý chính thức duy nhất xác định loài thực vật rừng, động vật rừng trong quản lý và truy xuất nguồn gốc."
  },
  {
    "id": "ChuRung_123",
    "question": "Người dân nhặt được một cá thể tê tê hoặc cu li bò vào vườn nhà thì cách xử lý nào sau đây thể hiện đúng tinh thần phóng sinh và đúng pháp luật?",
    "options": [
      "Thông báo ngay cho Cơ quan Kiểm lâm sở tại hoặc Trung tâm cứu hộ động vật hoang dã để tiếp nhận, cứu hộ và tái thả đúng quy trình bảo tồn",
      "Tự mình mang ra khu rừng gần nhất thả ngay mà không cần kiểm tra sức khỏe con vật",
      "Bàn giao cho chùa hoặc cơ sở thờ tự gần nhất để phật tử chăm sóc nuôi dưỡng",
      "Nhốt lại trong chuồng gà nuôi dưỡng làm cảnh cho con cháu xem"
    ],
    "correct": "Thông báo ngay cho Cơ quan Kiểm lâm sở tại hoặc Trung tâm cứu hộ động vật hoang dã để tiếp nhận, cứu hộ và tái thả đúng quy trình bảo tồn",
    "explanation": "Căn cứ Điều 15 Thông tư số 85/2025/TT-BNNMT và Điều 9 Luật Lâm nghiệp năm 2017: Động vật quý hiếm đi lạc hoặc nhặt được phải giao nộp ngay cho cơ quan Kiểm lâm sở tại để tiếp nhận, cứu hộ, kiểm dịch và tái thả an toàn theo quy định."
  },
  {
    "id": "ChuRung_124",
    "question": "Hành vi dùng lửa hun khói bắt tổ ong rừng vào mùa khô hanh tiềm ẩn nguy cơ pháp lý và xã hội nào?",
    "options": [
      "Vi phạm nghiêm trọng quy định PCCC rừng; tàn lửa rất dễ gây cháy lan rừng tự nhiên, người vi phạm bị phạt tiền hoặc phạt tù và bồi thường thiệt hại",
      "Được khuyến khích vì giúp người dân có thêm thu nhập từ sáp và mật ong rừng",
      "Chỉ bị xử phạt nếu người hun khói không phải là chủ rừng nơi có tổ ong",
      "Hoàn toàn vô hại vì khói thuốc làm ong ngủ say không gây cháy"
    ],
    "correct": "Vi phạm nghiêm trọng quy định PCCC rừng; tàn lửa rất dễ gây cháy lan rừng tự nhiên, người vi phạm bị phạt tiền hoặc phạt tù và bồi thường thiệt hại",
    "explanation": "Căn cứ Điểm i Khoản 3 Điều 19 và Điều 20 Nghị định số 146/2026/NĐ-CP: Dùng lửa hun khói đốt tổ ong rừng mùa hanh khô là hành vi nguy hiểm bị nghiêm cấm, bị phạt tiền từ 3 - 5 triệu đồng và xử lý hình sự nếu gây cháy rừng."
  },
  {
    "id": "ChuRung_125",
    "question": "Khi người dân làm nương rẫy thu dọn cỏ khô, tàn dư sau thu hoạch thì thời điểm nào trong ngày TUYỆT ĐỐI KHÔNG ĐƯỢC đốt dọn?",
    "options": [
      "Buổi trưa nắng gắt, hanh khô, có gió to và khi cấp dự báo cháy rừng đang ở Cấp IV (Cấp nguy hiểm), Cấp V (Cấp cực kỳ nguy hiểm)",
      "Sáng sớm khi sương mù còn dày và gió lặng",
      "Chỉ được đốt dọn vào những ngày có gió mùa Đông Bắc khô hanh cấp 4 trở lên",
      "Ngày trời râm mát có mưa phùn lất phất"
    ],
    "correct": "Buổi trưa nắng gắt, hanh khô, có gió to và khi cấp dự báo cháy rừng đang ở Cấp IV (Cấp nguy hiểm), Cấp V (Cấp cực kỳ nguy hiểm)",
    "explanation": "Căn cứ Điều 47 Nghị định số 156/2018/NĐ-CP: Nghiêm cấm đốt nương rẫy, xử lý thực bì vào buổi trưa nắng gắt, có gió to và khi cấp dự báo cháy rừng ở Cấp IV, Cấp V."
  },
  {
    "id": "ChuRung_126",
    "question": "Hộ gia đình có cây xanh bóng mát trồng trên đất ở bị gãy đổ do bão đè vào tường rào nhà hàng xóm, việc giải quyết thiệt hại thực hiện theo nguyên tắc nào?",
    "options": [
      "Hai bên thương lượng bồi thường thiệt hại dân sự theo quy định của Bộ luật Dân sự về bồi thường thiệt hại do cây cối gây ra; dọn dẹp bảo đảm an toàn",
      "Bắt buộc cơ quan Kiểm lâm phải đứng ra bồi thường thay cho chủ cây",
      "UBND cấp xã có trách nhiệm trích ngân sách dự phòng bồi thường nếu cây trồng lâu năm",
      "UBND xã phải bỏ ngân sách nhà nước ra đền bù toàn bộ thiệt hại"
    ],
    "correct": "Hai bên thương lượng bồi thường thiệt hại dân sự theo quy định của Bộ luật Dân sự về bồi thường thiệt hại do cây cối gây ra; dọn dẹp bảo đảm an toàn",
    "explanation": "Căn cứ Điều 604 Bộ luật Dân sự năm 2015: Chủ sở hữu cây cối có trách nhiệm bồi thường toàn bộ thiệt hại dân sự do cây gãy đổ gây ra cho người khác."
  },
  {
    "id": "ChuRung_127",
    "question": "Hành vi chặt phá các cây gỗ cổ thụ trong rừng đầu nguồn để lấy phong lan rừng mang bán cho người chơi hoa lan bị xử phạt về hành vi gì?",
    "options": [
      "Hành vi khai thác rừng và thực vật rừng trái pháp luật; bị xử phạt VPHC, tịch thu tang vật, phương tiện hoặc xử lý hình sự tùy theo mức độ thiệt hại",
      "Chỉ là hành vi vi phạm trật tự công cộng thông thường",
      "Chỉ bị xử phạt vi phạm hành chính về hành vi thu hái lâm sản ngoài gỗ trái phép",
      "Chỉ bị tịch thu hoa lan, hành vi đốn hạ cây gỗ không bị xem xét"
    ],
    "correct": "Hành vi khai thác rừng và thực vật rừng trái pháp luật; bị xử phạt VPHC, tịch thu tang vật, phương tiện hoặc xử lý hình sự tùy theo mức độ thiệt hại",
    "explanation": "Căn cứ Điều 16 và Điều 23 Nghị định số 146/2026/NĐ-CP: Hành vi chặt hạ cây gỗ rừng tự nhiên để lấy phong lan cấu thành hành vi Khai thác rừng tự nhiên trái pháp luật (Điều 16) và Phá rừng (Điều 23); người vi phạm bị phạt tiền, tịch thu tang vật, phương tiện và có thể bị truy cứu trách nhiệm hình sự theo Điều 232 hoặc Điều 243 Bộ luật Hình sự."
  },
  {
    "id": "ChuRung_128",
    "question": "Tình huống: Anh D đi xe máy qua bìa rừng thấy người ta vừa đốt vàng mã xong để lại đám tro than đang bốc khói dữ dội sắp bén vào đồi cỏ tranh. Anh D nên làm gì?",
    "options": [
      "Dừng xe, hô hoán người gần đó dùng cành cây, đất cát hoặc nước dập ngay đốm lửa, đồng thời gọi điện báo Kiểm lâm hoặc chính quyền địa phương",
      "Tăng ga phóng xe đi thật nhanh để tránh bị hiểu nhầm là người gây cháy",
      "Chỉ cần gọi điện báo cho gia đình người vừa đốt vàng mã quay lại dập lửa",
      "Ném thêm que củi vào xem lửa có cháy to thành bão lửa hay không"
    ],
    "correct": "Dừng xe, hô hoán người gần đó dùng cành cây, đất cát hoặc nước dập ngay đốm lửa, đồng thời gọi điện báo Kiểm lâm hoặc chính quyền địa phương",
    "explanation": "Căn cứ Khoản 4 Điều 39 Luật Lâm nghiệp năm 2017 và Điều 51 Nghị định số 156/2018/NĐ-CP: Phát hiện đốm lửa, tàn than bốc khói gần bìa rừng, công dân có nghĩa vụ kịp thời dập lửa và báo tin khẩn cấp cho cơ quan chức năng hoặc chính quyền địa phương để ngăn chặn nguy cơ cháy rừng."
  },
  {
    "id": "ChuRung_129",
    "question": "Ý nghĩa nhân văn và đúng đắn nhất của việc 'phóng sinh' trong xã hội văn minh hiện nay là gì?",
    "options": [
      "Bảo vệ sinh cảnh sống tự nhiên, tích cực tham gia trồng cây gây rừng, không tiêu thụ thịt thú rừng và không tiếp tay cho hoạt động bẫy bắt động vật hoang dã",
      "Càng bỏ nhiều tiền ra mua động vật nhốt trong lồng đem thả thì công đức càng lớn",
      "Chỉ cần phóng sinh các loài động vật ăn chay như rùa, chim bồ câu để tích phước",
      "Bắt động vật ngoài rừng về nhốt trong nhà rồi thả ra trong sân vườn gia đình"
    ],
    "correct": "Bảo vệ sinh cảnh sống tự nhiên, tích cực tham gia trồng cây gây rừng, không tiêu thụ thịt thú rừng và không tiếp tay cho hoạt động bẫy bắt động vật hoang dã",
    "explanation": "Căn cứ Điều 9 Luật Lâm nghiệp năm 2017: Ý nghĩa đích thực của phóng sinh là bảo vệ sinh thái tự nhiên, trồng cây gây rừng, không tiêu thụ và không tiếp tay săn bẫy động vật hoang dã."
  },
  {
    "id": "ChuRung_130",
    "question": "Trường hợp người dân phát hiện một đối tượng mang theo lưới tàng hình và loa phát tiếng chim giả vào khu rừng gần nhà để bẫy chim di cư thì nên báo cho ai?",
    "options": [
      "Báo ngay cho Kiểm lâm địa bàn, Trưởng thôn hoặc Công an cấp xã để tiến hành kiểm tra, ngăn chặn và tịch thu dụng cụ bẫy bắt theo quy định",
      "Đến học hỏi kinh nghiệm bẫy chim để về làm theo kiếm thêm thu nhập",
      "Chỉ nhắc nhở người bẫy chim không được giăng lưới chắn ngang đường đi lại của thôn",
      "Báo cho cơ quan Khí tượng thủy văn tỉnh để theo dõi hướng gió"
    ],
    "correct": "Báo ngay cho Kiểm lâm địa bàn, Trưởng thôn hoặc Công an cấp xã để tiến hành kiểm tra, ngăn chặn và tịch thu dụng cụ bẫy bắt theo quy định",
    "explanation": "Căn cứ Chỉ thị số 04/CT-TTg ngày 17/5/2022 của Thủ tướng Chính phủ và Điều 24 Nghị định số 146/2026/NĐ-CP: Nghiêm cấm bẫy bắt chim di cư; người dân phát hiện phải báo ngay Kiểm lâm hoặc Công an xử lý nghiêm."
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = question_ChuRung;
}
