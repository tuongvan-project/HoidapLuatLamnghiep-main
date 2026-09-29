/**
 * BỘ CÂU HỎI TRẮC NGHIỆM PHÁP LUẬT LÂM NGHIỆP DÀNH CHO NHÂN DÂN - CHỦ RỪNG (130 CÂU)
 * Cấu trúc: 1 đáp án đúng + 3 đáp án bẫy thực tế (4 options)
 * Đã bổ sung 30 câu hỏi thực tế đời sống gần gũi:
 * - Quy tắc 5 ĐÚNG và 3 TÁC HẠI khi phóng sinh động vật hoang dã
 * - An toàn PCCC rừng dịp lễ Tết, Thanh minh, Vu lan, rằm tháng 7 (thực tế Tuyên Quang)
 * - Quản lý cây cảnh vườn nhà, đất ở theo Thông tư 26/2025/TT-BNNMT & TT 84/2025/TT-BNNMT
 * - Tình huống đời sống thực tế (anh A, chị B, ông C...)
 */
const question_ChuRung = [
  {
    "question": "Một khu đất trồng cây lâm nghiệp được công nhận đạt tiêu chí thành rừng khi đồng thời đáp ứng đủ cả 3 điều kiện nào sau đây?",
    "options": [
      "Độ tàn che từ 0,1 trở lên; Diện tích liền vùng từ 0,3 ha trở lên (hoặc dải cây rộng tối thiểu 20m); Chiều cao vút ngọn trung bình từ 5,0m trở lên (đối với đất đồi núi, đồng bằng)",
      "Độ tàn che từ 0,3 trở lên; Diện tích liền vùng từ 0,5 ha trở lên; Chiều cao cây bất kỳ không phân biệt",
      "Độ tàn che từ 0,05 trở lên; Diện tích đất từ 1,0 ha trở lên; Cây trồng đã sống được trên 02 năm",
      "Chỉ cần cây trồng khép tán không nhìn thấy mặt đất và chủ rừng có giấy chứng nhận quyền sử dụng đất"
    ],
    "correct": "Độ tàn che từ 0,1 trở lên; Diện tích liền vùng từ 0,3 ha trở lên (hoặc dải cây rộng tối thiểu 20m); Chiều cao vút ngọn trung bình từ 5,0m trở lên (đối với đất đồi núi, đồng bằng)",
    "explanation": "Điều 4, 5 Nghị định 156/2018/NĐ-CP quy định đồng thời 3 tiêu chí: độ tàn che >= 0,1; diện tích >= 0,3 ha (dải cây >= 20m có >= 3 hàng); chiều cao vút ngọn >= 5m (hoặc đặc thù ven biển/núi đá)."
  },
  {
    "question": "Theo Điều 19 Thông tư số 16/2025/TT-BNNMT, chủ rừng nhóm I (hộ gia đình, cá nhân) có trách nhiệm thông báo biến động diện tích rừng như thế nào?",
    "options": [
      "Thông báo cho Kiểm lâm địa bàn hoặc UBND cấp xã trong thời hạn 15 ngày kể từ ngày có biến động (do khai thác, trồng mới, cháy, sâu bệnh, sạt lở)",
      "Chỉ cần thông báo bằng miệng cho Trưởng thôn vào dịp họp thôn tổng kết cuối năm",
      "Thông báo trong thời hạn 30 ngày làm việc trực tiếp về Chi cục Kiểm lâm cấp tỉnh",
      "Không phải thông báo nếu diện tích rừng bị biến động dưới 01 héc-ta"
    ],
    "correct": "Thông báo cho Kiểm lâm địa bàn hoặc UBND cấp xã trong thời hạn 15 ngày kể từ ngày có biến động (do khai thác, trồng mới, cháy, sâu bệnh, sạt lở)",
    "explanation": "Khoản 1 Điều 19 Thông tư 16/2025/TT-BNNMT: Chủ rừng nhóm I thông báo cho Kiểm lâm địa bàn hoặc công chức cấp xã được giao theo dõi lâm nghiệp trong thời hạn 15 ngày kể từ khi có biến động."
  },
  {
    "question": "Khi người dân đốt dọn thực bì làm nương rẫy giáp ranh với rừng, quy định an toàn phòng cháy chữa cháy rừng bắt buộc phải bảo đảm những yếu tố nào?",
    "options": [
      "Làm đường băng cản lửa rộng tối thiểu 4 - 6m bao quanh bãi đốt; đốt vào sáng sớm hoặc chiều tối khi gió lặng; thông báo cho Trưởng thôn/Kiểm lâm địa bàn; tuyệt đối cấm đốt khi dự báo cháy rừng Cấp IV, Cấp V",
      "Đốt vào buổi trưa nắng gắt để thực bì cháy nhanh và triệt để; không cần làm đường băng cản lửa nếu nương đã có bờ đá bao quanh",
      "Được phép đốt tự do trong mọi điều kiện thời tiết miễn là chủ nương có mặt túc trực tại nương",
      "Chỉ cần xin phép bằng miệng của các hộ gia đình có nương liền kề mà không cần làm đường băng cản lửa"
    ],
    "correct": "Làm đường băng cản lửa rộng tối thiểu 4 - 6m bao quanh bãi đốt; đốt vào sáng sớm hoặc chiều tối khi gió lặng; thông báo cho Trưởng thôn/Kiểm lâm địa bàn; tuyệt đối cấm đốt khi dự báo cháy rừng Cấp IV, Cấp V",
    "explanation": "Điều 47 Nghị định 156/2018/NĐ-CP và Điều 16 NĐ 146/2026/NĐ-CP: Phải làm băng cản lửa 4-6m, đốt lúc gió nhẹ, có người canh gác đến khi tàn lửa tắt hẳn, cấm đốt khi dự báo cháy Cấp IV, Cấp V."
  },
  {
    "question": "Hộ gia đình được giao rừng phòng hộ tự bỏ vốn trồng rừng, khi khai thác cây gỗ phụ trợ hoặc tỉa thưa phải tuân thủ điều kiện nào sau đây?",
    "options": [
      "Khai thác tỉa thưa cây phụ trợ nhưng phải bảo đảm độ tàn che của rừng sau khai thác không dưới 0,6; lập phương án khai thác gửi UBND xã và Kiểm lâm",
      "Được phép chặt trắng toàn bộ diện tích để trồng lại lứa cây mới có năng suất cao hơn",
      "Được tự do đốn hạ bất kỳ cây nào to nhất mang đi bán lấy tiền mà không cần giữ độ tàn che",
      "Phải để rừng nguyên vẹn vĩnh viễn, nghiêm cấm khai thác bất kỳ cây gỗ nào dù tự bỏ vốn trồng"
    ],
    "correct": "Khai thác tỉa thưa cây phụ trợ nhưng phải bảo đảm độ tàn che của rừng sau khai thác không dưới 0,6; lập phương án khai thác gửi UBND xã và Kiểm lâm",
    "explanation": "Quy định quản lý rừng phòng hộ: Khai thác tỉa thưa rừng trồng phòng hộ phải bảo đảm duy trì độ tàn che của rừng sau khi tỉa thưa không được nhỏ hơn 0,6."
  },
  {
    "question": "Hành vi vô ý đốt nương làm rẫy để lửa cháy lan vào rừng tự nhiên gây thiệt hại diện tích từ bao nhiêu héc-ta (ha) thì bị xử lý hình sự về Tội vi phạm quy định về PCCC (Điều 313 BLHS)?",
    "options": [
      "Thiệt hại từ 0,5 ha (5.000m²) rừng đặc dụng, từ 01 ha rừng phòng hộ hoặc từ 1,5 ha rừng sản xuất trở lên",
      "Chỉ khi gây cháy lan từ 10 ha rừng trở lên mới bị xử lý hình sự",
      "Mọi vụ cháy nương lan vào rừng đều chỉ phạt hành chính tiền bạc, không bị đi tù",
      "Gây thiệt hại từ 100 ha rừng trở lên mới cấu thành tội phạm"
    ],
    "correct": "Thiệt hại từ 0,5 ha (5.000m²) rừng đặc dụng, từ 01 ha rừng phòng hộ hoặc từ 1,5 ha rừng sản xuất trở lên",
    "explanation": "Điều 313 Bộ luật Hình sự (sửa đổi): Vi phạm quy định về PCCC gây cháy rừng đặc dụng từ 5.000m², rừng phòng hộ từ 10.000m² hoặc rừng sản xuất từ 15.000m² bị truy cứu trách nhiệm hình sự."
  },
  {
    "question": "Hành vi chặt phá rừng sản xuất là rừng tự nhiên trái phép đến ngưỡng diện tích tối thiểu bao nhiêu thì bị truy cứu trách nhiệm hình sự theo Điều 243 BLHS?",
    "options": [
      "Diện tích từ 5.000 m² (0,5 ha) trở lên, hoặc từ 2.500 m² nếu đã bị xử phạt VPHC về hành vi này mà còn tái phạm",
      "Diện tích từ 1.000 m² trở lên trong mọi trường hợp",
      "Diện tích từ 20.000 m² (02 ha) trở lên mới bị khởi tố hình sự",
      "Chỉ bị xử lý hình sự khi chặt hạ các cây gỗ có đường kính trên 01 mét"
    ],
    "correct": "Diện tích từ 5.000 m² (0,5 ha) trở lên, hoặc từ 2.500 m² nếu đã bị xử phạt VPHC về hành vi này mà còn tái phạm",
    "explanation": "Điểm b Khoản 1 Điều 243 Bộ luật Hình sự: Phá rừng sản xuất là rừng tự nhiên từ 5.000 m² đến dưới 10.000 m² (hoặc dưới mức này nhưng đã bị xử phạt VPHC) bị phạt tù từ 1 đến 5 năm."
  },
  {
    "question": "Đối với rừng đặc dụng, hành vi chặt phá rừng trái phép với diện tích tối thiểu bao nhiêu thì bị khởi tố hình sự theo Điều 243 BLHS?",
    "options": [
      "Diện tích chỉ từ 1.000 m² (0,1 ha) trở lên đã cấu thành tội phạm hình sự",
      "Diện tích từ 5.000 m² trở lên mới bị truy cứu hình sự",
      "Diện tích từ 10.000 m² trở lên mới bị khởi tố",
      "Rừng đặc dụng không quy định diện tích hình sự mà chỉ phạt tiền"
    ],
    "correct": "Diện tích chỉ từ 1.000 m² (0,1 ha) trở lên đã cấu thành tội phạm hình sự",
    "explanation": "Điểm a Khoản 1 Điều 243 Bộ luật Hình sự: Chặt phá rừng đặc dụng trái pháp luật diện tích từ 1.000 m² đến dưới 5.000 m² bị phạt tiền hoặc phạt tù từ 1 năm đến 5 năm."
  },
  {
    "question": "Hộ gia đình, cá nhân tự ý chuyển mục đích sử dụng rừng sang đất trồng cây nông nghiệp không được cơ quan có thẩm quyền cho phép sẽ bị xử phạt như thế nào?",
    "options": [
      "Bị phạt tiền từ mức thấp nhất 1.000.000 đồng đến tối đa 500.000.000 đồng tùy diện tích và loại rừng; buộc khôi phục lại tình trạng ban đầu của rừng",
      "Chỉ bị nhắc nhở và được cơ quan nhà nước tự động hợp thức hóa cấp sổ đỏ sang đất nông nghiệp",
      "Không bị phạt tiền nếu hộ gia đình cam kết chỉ trồng ngô, sắn phục vụ chăn nuôi",
      "Chỉ bị phạt tiền mức cố định 200.000 đồng cho một vụ việc vi phạm"
    ],
    "correct": "Bị phạt tiền từ mức thấp nhất 1.000.000 đồng đến tối đa 500.000.000 đồng tùy diện tích và loại rừng; buộc khôi phục lại tình trạng ban đầu của rừng",
    "explanation": "Điều 10 Nghị định 146/2026/NĐ-CP: Phạt tiền từ 1.000.000 đồng đến 500.000.000 đồng và buộc thực hiện biện pháp khắc phục hậu quả là khôi phục lại tình trạng ban đầu của rừng."
  },
  {
    "question": "Khi khai thác gỗ rừng trồng do hộ gia đình tự đầu tư trên đất rừng sản xuất đã được cấp giấy chứng nhận quyền sử dụng đất, thủ tục pháp lý quy định ra sao?",
    "options": [
      "Chủ rừng tự quyết định việc khai thác; trước khi khai thác lập Bảng kê lâm sản và tự chịu trách nhiệm về nguồn gốc lâm sản hợp pháp",
      "Bắt buộc phải làm đơn xin phép và được Chủ tịch UBND tỉnh phê duyệt mới được chặt cây",
      "Phải mời đoàn công tác liên ngành của tỉnh về giám sát cắm mốc từng cây gỗ",
      "Bắt buộc phải bán toàn bộ sản lượng gỗ khai thác cho Công ty lâm nghiệp nhà nước"
    ],
    "correct": "Chủ rừng tự quyết định việc khai thác; trước khi khai thác lập Bảng kê lâm sản và tự chịu trách nhiệm về nguồn gốc lâm sản hợp pháp",
    "explanation": "Điều 59 Luật Lâm nghiệp và Thông tư 26/2022/TT-BNNPTNT: Rừng trồng sản xuất do chủ rừng tự đầu tư thì chủ rừng tự quyết định khai thác, tự lập Bảng kê lâm sản khi xuất bán."
  },
  {
    "question": "Hộ gia đình nhận khoán bảo vệ rừng phòng hộ có được phép chăn thả gia súc (trâu, bò, dê) trong phân khu rừng phòng hộ xung yếu không?",
    "options": [
      "Nghiêm cấm chăn thả gia súc ở các khu rừng mới trồng, rừng đang trong thời kỳ tái sinh phục hồi; khu vực rừng đã khép tán chỉ được chăn thả có kiểm soát theo quy định",
      "Được phép thả rông không giới hạn số lượng gia súc ở mọi vị trí trong rừng phòng hộ",
      "Được phép chặt hạ cây rừng để làm hàng rào nhốt đàn bò hàng trăm con",
      "Chỉ được chăn thả gia súc vào ban đêm để tránh Kiểm lâm nhìn thấy"
    ],
    "correct": "Nghiêm cấm chăn thả gia súc ở các khu rừng mới trồng, rừng đang trong thời kỳ tái sinh phục hồi; khu vực rừng đã khép tán chỉ được chăn thả có kiểm soát theo quy định",
    "explanation": "Quy chế quản lý rừng phòng hộ nghiêm cấm việc chăn thả gia súc vào khu vực rừng mới trồng hoặc tái sinh tự nhiên nhằm bảo vệ cây non không bị dẫm đạp, cắn phá."
  },
  {
    "question": "Người dân vô tình nhặt được cá thể động vật hoang dã bị thương, kiệt sức trong rừng (như khỉ, cu li, trăn) thì phải xử lý như thế nào là đúng luật?",
    "options": [
      "Báo ngay hoặc mang đến giao nộp cho Cơ quan Kiểm lâm sở tại hoặc UBND cấp xã gần nhất để cứu hộ; tuyệt đối không tự ý giữ nuôi, giết thịt hoặc rao bán",
      "Tự ý mang về nhà nhốt làm cảnh và đăng bài bán lên mạng xã hội lấy tiền bồi dưỡng",
      "Đem ra chợ bán cho người mua phóng sinh để làm phúc",
      "Mổ thịt liên hoan cùng bà con lối xóm vì con vật tự bò vào nương của mình"
    ],
    "correct": "Báo ngay hoặc mang đến giao nộp cho Cơ quan Kiểm lâm sở tại hoặc UBND cấp xã gần nhất để cứu hộ; tuyệt đối không tự ý giữ nuôi, giết thịt hoặc rao bán",
    "explanation": "Động vật rừng nhặt được là tài sản công; người dân phải giao nộp cho Kiểm lâm/UBND xã để cứu hộ. Tự ý giữ nuôi, bán hoặc giết thịt là hành vi vi phạm pháp luật nghiêm trọng."
  },
  {
    "question": "Hành vi đặt bẫy thú (bẫy kẹp sắt, bẫy thòng lọng, dây phanh) trên đất rừng được giao quản lý bảo vệ để bảo vệ nương rẫy có vi phạm pháp luật không?",
    "options": [
      "Là hành vi vi phạm pháp luật về bảo vệ động vật rừng bị nghiêm cấm; bị xử phạt VPHC, tịch thu toàn bộ bẫy và bồi thường thiệt hại nếu gây chết động vật",
      "Hoàn toàn hợp pháp vì nương rẫy thuộc quyền sở hữu của gia đình",
      "Chỉ vi phạm nếu bẫy bắt được các loài thú có trọng lượng trên 50kg",
      "Được khuyến khích để diệt trừ các loài thú hoang phá hoại mùa màng"
    ],
    "correct": "Là hành vi vi phạm pháp luật về bảo vệ động vật rừng bị nghiêm cấm; bị xử phạt VPHC, tịch thu toàn bộ bẫy và bồi thường thiệt hại nếu gây chết động vật",
    "explanation": "Điều 9 Luật Lâm nghiệp và Điều 24 Nghị định 146/2026/NĐ-CP nghiêm cấm mọi hành vi đặt bẫy, săn bắt động vật rừng trái phép trong rừng dưới bất kỳ lý do nào."
  },
  {
    "question": "Theo Nghị định số 58/2024/NĐ-CP của Chính phủ, chính sách hỗ trợ khoán bảo vệ rừng đối với hộ gia đình đồng bào dân tộc thiểu số ở xã khu vực III được hỗ trợ mức kinh phí nào?",
    "options": [
      "Mức hỗ trợ tối thiểu từ 500.000 đồng/ha/năm (vùng đặc biệt khó khăn có thể áp dụng mức cao hơn theo quy định)",
      "Chỉ hỗ trợ 50.000 đồng/ha/năm",
      "Không hỗ trợ tiền mặt, chỉ hỗ trợ cây giống ngô lai",
      "Hỗ trợ 50.000.000 đồng/ha/tháng"
    ],
    "correct": "Mức hỗ trợ tối thiểu từ 500.000 đồng/ha/năm (vùng đặc biệt khó khăn có thể áp dụng mức cao hơn theo quy định)",
    "explanation": "Nghị định số 58/2024/NĐ-CP quy định mức kinh phí khoán bảo vệ rừng từ ngân sách nhà nước bình quân 500.000 đồng/ha/năm cho đối tượng thuộc vùng khó khăn, DTTS."
  },
  {
    "question": "Khi phát hiện một nhóm người lạ mặt mang theo cưa xăng, dao rựa vào chặt phá rừng gần nương nhà mình, người dân cần làm gì?",
    "options": [
      "Kịp thời thông báo ngay cho Kiểm lâm địa bàn, Trưởng thôn hoặc Công an xã; không manh động đơn độc va chạm trực tiếp với các đối tượng",
      "Tự ý cầm hung khí ra đánh nhau với các đối tượng chặt phá rừng",
      "Mặc kệ không quan tâm vì đó không phải là diện tích rừng của nhà mình",
      "Đến thỏa thuận xin chia một phần gỗ đã chặt hạ để giữ im lặng"
    ],
    "correct": "Kịp thời thông báo ngay cho Kiểm lâm địa bàn, Trưởng thôn hoặc Công an xã; không manh động đơn độc va chạm trực tiếp với các đối tượng",
    "explanation": "Người dân có nghĩa vụ tố giác tội phạm và thông báo vi phạm cho cơ quan chức năng (Kiểm lâm, Công an, UBND xã) để kịp thời ngăn chặn, xử lý an toàn."
  },
  {
    "question": "Hộ gia đình có rừng tự nhiên được giao quản lý bảo vệ có được tự ý chặt hạ các cây gỗ mục, cây khô đổ gãy về làm củi hoặc dựng nhà không?",
    "options": [
      "Không được tự ý chặt hạ; phải làm đơn báo cáo UBND xã và Kiểm lâm kiểm tra, hướng dẫn thủ tục tận thu theo đúng quy định pháp luật",
      "Được toàn quyền chặt hạ bất kỳ lúc nào vì cây đã bị khô đổ",
      "Được phép đốn hạ thêm các cây gỗ tươi đứng liền kề cây khô",
      "Chỉ cần mời Trưởng thôn đến chứng kiến là được mang về nhà sử dụng"
    ],
    "correct": "Không được tự ý chặt hạ; phải làm đơn báo cáo UBND xã và Kiểm lâm kiểm tra, hướng dẫn thủ tục tận thu theo đúng quy định pháp luật",
    "explanation": "Gỗ rừng tự nhiên dù là cây đổ gãy, cây chết khô vẫn thuộc quản lý của nhà nước; việc tận thu phải được lập hồ sơ báo cáo cơ quan chuyên môn theo quy định."
  },
  {
    "question": "Hành vi lấn, chiếm đất rừng đặc dụng để trồng cây ăn quả, làm nhà tạm sẽ bị xử lý như thế nào theo Nghị định 146/2026/NĐ-CP?",
    "options": [
      "Bị phạt tiền từ mức thấp nhất 1.000.000 đồng đến tối đa 500.000.000 đồng; buộc tháo dỡ công trình, trả lại đất lấn chiếm và khôi phục lại tình trạng rừng",
      "Được miễn phạt nếu cam kết sau khi thu hoạch hoa quả sẽ trả lại đất",
      "Chỉ bị phạt cảnh cáo và được tiếp tục sử dụng đất rừng lâu dài",
      "Được chính quyền xã cấp phép xây dựng hợp thức hóa nhà ở"
    ],
    "correct": "Bị phạt tiền từ mức thấp nhất 1.000.000 đồng đến tối đa 500.000.000 đồng; buộc tháo dỡ công trình, trả lại đất lấn chiếm và khôi phục lại tình trạng rừng",
    "explanation": "Hành vi lấn chiếm đất rừng đặc dụng, phòng hộ bị phạt nặng theo Nghị định 146/2026/NĐ-CP và buộc áp dụng biện pháp khắc phục hậu quả di dời tài sản, trả lại đất."
  },
  {
    "question": "Cộng đồng dân cư thôn được Nhà nước giao rừng tự nhiên thì ai là người đại diện hợp pháp trước pháp luật của cộng đồng trong quản lý khu rừng?",
    "options": [
      "Trưởng thôn (hoặc người đại diện do cộng đồng dân cư thôn họp bầu ra theo quy chế)",
      "Chủ tịch Hội Cựu chiến binh của xã",
      "Bất kỳ người cao tuổi nào sinh sống trong thôn",
      "Người có đóng góp nhiều tiền nhất vào quỹ thôn"
    ],
    "correct": "Trưởng thôn (hoặc người đại diện do cộng đồng dân cư thôn họp bầu ra theo quy chế)",
    "explanation": "Luật Lâm nghiệp quy định đại diện của cộng đồng dân cư thôn là Trưởng thôn hoặc người được cộng đồng dân cư thống nhất cử ra đại diện trong các giao dịch quản lý rừng."
  },
  {
    "question": "Người dân tự ý mang các loại thuốc diệt cỏ, hóa chất cực độc vào rừng phun để dọn thực bì trước khi trồng rừng bị xử lý như thế nào?",
    "options": [
      "Bị nghiêm cấm và bị xử phạt nặng về hành vi hủy hoại sinh thái rừng, gây ô nhiễm môi trường đất, nguồn nước tự nhiên",
      "Được phép sử dụng thoải mái nếu thuốc diệt cỏ mua tại quầy thuốc bảo vệ thực vật",
      "Được Nhà nước hỗ trợ kinh phí mua thuốc diệt cỏ để giải phóng đất rừng",
      "Chỉ bị phạt nếu hóa chất làm chết các cây gỗ to trên 10 năm tuổi"
    ],
    "correct": "Bị nghiêm cấm và bị xử phạt nặng về hành vi hủy hoại sinh thái rừng, gây ô nhiễm môi trường đất, nguồn nước tự nhiên",
    "explanation": "Sử dụng hóa chất độc hại trong rừng hủy hoại thảm thực vật, vi sinh vật và nguồn nước đầu nguồn, là hành vi vi phạm pháp luật bảo vệ môi trường và lâm nghiệp."
  },
  {
    "question": "Chủ rừng là hộ gia đình khi phát hiện rừng của mình bị sâu róm hoặc bệnh chết héo xuất hiện lây lan trên diện rộng thì có trách nhiệm gì?",
    "options": [
      "Báo ngay cho Kiểm lâm địa bàn hoặc cán bộ khuyến nông/UBND xã để kiểm tra, hướng dẫn biện pháp kỹ thuật phòng trừ dập dịch kịp thời",
      "Tự ý đốt lửa hun khói khắp cánh rừng để xua đuổi sâu bọ",
      "Mặc kệ cho sâu bệnh tự ăn hết lá cây vì rừng tự nhiên có khả năng tự phục hồi",
      "Bán tháo toàn bộ cánh rừng đang bị sâu cho thương lái phá đi"
    ],
    "correct": "Báo ngay cho Kiểm lâm địa bàn hoặc cán bộ khuyến nông/UBND xã để kiểm tra, hướng dẫn biện pháp kỹ thuật phòng trừ dập dịch kịp thời",
    "explanation": "Chủ rừng có nghĩa vụ phòng trừ sinh vật hại rừng; khi dịch hại bùng phát phải thông báo cho cơ quan chuyên môn để phối hợp xử lý dập dịch theo Điều 61 Luật Lâm nghiệp."
  },
  {
    "question": "Hộ gia đình có đất rừng sản xuất có được phép tự ý chia lô, phân nền đất rừng để bán cho người khác làm nhà ở không?",
    "options": [
      "Nghiêm cấm tuyệt đối việc tự ý phân lô, bán nền đất rừng; hành vi này vi phạm pháp luật đất đai và lâm nghiệp, giao dịch bị vô hiệu và bị xử phạt nghiêm khắc",
      "Được phép tự do phân lô bán nền nếu có giấy viết tay giữa các bên",
      "Được phép phân lô nếu diện tích mỗi nền đất lớn hơn 500m²",
      "Chỉ cần nộp thuế sử dụng đất phi nông nghiệp cho cán bộ địa chính xã"
    ],
    "correct": "Nghiêm cấm tuyệt đối việc tự ý phân lô, bán nền đất rừng; hành vi này vi phạm pháp luật đất đai và lâm nghiệp, giao dịch bị vô hiệu và bị xử phạt nghiêm khắc",
    "explanation": "Đất rừng sản xuất phải sử dụng đúng mục đích lâm nghiệp; nghiêm cấm tự ý chuyển mục đích sang đất ở, phân lô bán nền trái phép."
  },
  {
    "question": "Người dân vào rừng hái các loại phong lan rừng quý hiếm, đào gốc cây cảnh cổ thụ mang về bán kiếm tiền có vi phạm pháp luật không?",
    "options": [
      "Vi phạm quy định về khai thác thực vật rừng trái phép; bị xử phạt vi phạm hành chính, tịch thu toàn bộ phong lan, cây cảnh và công cụ khai thác",
      "Hoàn toàn hợp pháp vì hoa lan và cây cảnh là lâm sản phụ mọc tự nhiên không ai sở hữu",
      "Được phép nếu chỉ hái phong lan bám trên cành cây khô",
      "Chỉ vi phạm nếu đào cây cảnh to bằng xe cẩu chuyên dụng"
    ],
    "correct": "Vi phạm quy định về khai thác thực vật rừng trái phép; bị xử phạt vi phạm hành chính, tịch thu toàn bộ phong lan, cây cảnh và công cụ khai thác",
    "explanation": "Điều 15 Nghị định 146/2026/NĐ-CP: Khai thác thực vật rừng thông thường hoặc loài nguy cấp quý hiếm (như lan hài, lan hoàng thảo...) mà không có phép đều bị xử phạt và tịch thu tang vật."
  },
  {
    "question": "Theo quy định, tiền chi trả Dịch vụ môi trường rừng (DVMTR) hàng năm mà chủ rừng là hộ gia đình nhận được từ Quỹ Bảo vệ và Phát triển rừng dùng vào mục đích gì?",
    "options": [
      "Dùng phục vụ công tác tuần tra, bảo vệ rừng, phòng cháy chữa cháy rừng và nâng cao thu nhập, cải thiện đời sống của hộ nhận khoán",
      "Bắt buộc phải nộp lại 100% cho Ủy ban nhân dân xã làm quỹ xây dựng nông thôn mới",
      "Chỉ được dùng để mua sắm trang thiết bị văn phòng phẩm cho thôn bản",
      "Tự do sử dụng để tổ chức đánh bạc và uống rượu bia"
    ],
    "correct": "Dùng phục vụ công tác tuần tra, bảo vệ rừng, phòng cháy chữa cháy rừng và nâng cao thu nhập, cải thiện đời sống của hộ nhận khoán",
    "explanation": "Nghị định 156/2018/NĐ-CP quy định tiền dịch vụ môi trường rừng chi trả cho chủ rừng để bù đắp chi phí bảo vệ rừng, đầu tư sinh kế và cải thiện đời sống người làm nghề rừng."
  },
  {
    "question": "Hành vi sử dụng kích điện, hóa chất hoặc thuốc nổ để đánh bắt thủy sản trong các khe suối, hồ đập thuộc rừng phòng hộ, rừng đặc dụng bị xử phạt ra sao?",
    "options": [
      "Bị nghiêm cấm tuyệt đối; bị phạt tiền nặng, tịch thu toàn bộ kích điện/hóa chất và có thể bị truy cứu trách nhiệm hình sự về tội hủy hoại nguồn lợi thủy sản",
      "Được phép sử dụng nếu chỉ kích điện bắt cá nhỏ làm mồi nhử",
      "Chỉ bị phạt nếu nguồn điện kích từ 220V trở lên",
      "Không bị phạt nếu suối nước không có biển cắm cấm đánh bắt cá"
    ],
    "correct": "Bị nghiêm cấm tuyệt đối; bị phạt tiền nặng, tịch thu toàn bộ kích điện/hóa chất và có thể bị truy cứu trách nhiệm hình sự về tội hủy hoại nguồn lợi thủy sản",
    "explanation": "Luật Thủy sản và Luật Lâm nghiệp nghiêm cấm dùng chất nổ, chất độc, xung điện đánh bắt thủy sản; hành vi này bị xử phạt nặng hoặc phạt tù theo Điều 242 BLHS."
  },
  {
    "question": "Người dân tự ý dựng lều quán, tổ chức dịch vụ ăn uống, cắm trại dã ngoại tự phát trong rừng đặc dụng bị xử lý thế nào?",
    "options": [
      "Bị xử phạt vi phạm hành chính về hành vi sử dụng đất rừng sai mục đích, vi phạm quy chế quản lý rừng đặc dụng; buộc tháo dỡ công trình lều quán",
      "Được hoan nghênh vì góp phần phát triển du lịch địa phương",
      "Chỉ bị phạt nếu lều quán xây dựng kiên cố bằng bê tông cốt thép",
      "Không bị xử lý nếu đã đóng tiền vệ sinh môi trường cho đội bảo vệ rừng"
    ],
    "correct": "Bị xử phạt vi phạm hành chính về hành vi sử dụng đất rừng sai mục đích, vi phạm quy chế quản lý rừng đặc dụng; buộc tháo dỡ công trình lều quán",
    "explanation": "Hoạt động du lịch sinh thái trong rừng đặc dụng phải theo Đề án được cấp có thẩm quyền phê duyệt; nghiêm cấm tự ý xây dựng lều quán tự phát (Điều 10 NĐ 146/2026/NĐ-CP)."
  },
  {
    "question": "Khi cây rừng trồng giáp ranh nhà ở bị nghiêng, có nguy cơ gãy đổ đè sập nhà hoặc đường dây điện trong mùa mưa bão, chủ nhà cần làm gì?",
    "options": [
      "Báo cáo ngay Trưởng thôn và UBND cấp xã/Kiểm lâm địa bàn để lập biên bản hiện trạng và tiến hành chặt tỉa hạ thấp độ cao bảo đảm an toàn tính mạng người dân",
      "Mặc kệ chờ cho cây tự đổ vào nhà để yêu cầu cơ quan Kiểm lâm bồi thường thiệt hại",
      "Tự ý đổ thuốc độc vào gốc cây cho chết dần dần",
      "Đốt gốc cây vào ban đêm để cây gãy đổ ra phía đường quốc lộ"
    ],
    "correct": "Báo cáo ngay Trưởng thôn và UBND cấp xã/Kiểm lâm địa bàn để lập biên bản hiện trạng và tiến hành chặt tỉa hạ thấp độ cao bảo đảm an toàn tính mạng người dân",
    "explanation": "Trường hợp khẩn cấp bảo đảm an toàn phòng chống thiên tai, chủ sở hữu thông báo chính quyền địa phương để kiểm tra, chặt tỉa cây có nguy cơ mất an toàn theo quy định."
  },
  {
    "question": "Việc mua bán đất rừng sản xuất bằng 'giấy viết tay' giữa các cá nhân mà không qua công chứng, chứng thực và không làm thủ tục sang tên có giá trị pháp lý không?",
    "options": [
      "Không có giá trị pháp lý, hợp đồng vô hiệu; người mua đối mặt nguy cơ mất trắng tiền và không được cấp Giấy chứng nhận quyền sử dụng đất",
      "Có giá trị pháp lý tuyệt đối nếu có chữ ký của người bán và người mua",
      "Được pháp luật bảo hộ nếu hai bên đã bàn giao tiền mặt đầy đủ trước mặt người làm chứng",
      "Chỉ cần đem giấy tay lên nộp cho Trưởng thôn ký xác nhận là hợp pháp"
    ],
    "correct": "Không có giá trị pháp lý, hợp đồng vô hiệu; người mua đối mặt nguy cơ mất trắng tiền và không được cấp Giấy chứng nhận quyền sử dụng đất",
    "explanation": "Luật Đất đai quy định việc chuyển nhượng quyền sử dụng đất phải lập thành hợp đồng có công chứng/chứng thực và đăng ký biến động tại cơ quan đăng ký đất đai mới có hiệu lực pháp lý."
  },
  {
    "question": "Người dân tự ý vào rừng tự nhiên thu nhặt củi khô, nấm hương, mộc nhĩ có cần phải làm đơn xin phép cơ quan Kiểm lâm không?",
    "options": [
      "Được phép thu nhặt lâm sản phụ thông thường (củi khô, nấm, rau rừng) phục vụ sinh hoạt thiết yếu gia đình theo quy chế quản lý rừng, nhưng không được hủy hoại cây rừng và phải bảo đảm PCCC",
      "Bắt buộc phải có Giấy phép khai thác của Giám đốc Sở Nông nghiệp và Môi trường",
      "Bị nghiêm cấm tuyệt đối, bước chân vào rừng nhặt nấm đều bị xử phạt 50 triệu đồng",
      "Chỉ được thu nhặt nếu trả phí bản quyền cho Trạm Kiểm lâm địa bàn"
    ],
    "correct": "Được phép thu nhặt lâm sản phụ thông thường (củi khô, nấm, rau rừng) phục vụ sinh hoạt thiết yếu gia đình theo quy chế quản lý rừng, nhưng không được hủy hoại cây rừng và phải bảo đảm PCCC",
    "explanation": "Luật Lâm nghiệp cho phép người dân sinh sống hợp pháp trong và ven rừng thu hái lâm sản phụ thông thường phục vụ đời sống gia đình, không vì mục đích thương mại và không ảnh hưởng đến rừng."
  },
  {
    "question": "Hành vi săn bắn các loài chim hoang dã bằng súng tự chế (súng hơi, súng bắn đạn hoa cải, súng cồn) trong rừng bị pháp luật xử lý như thế nào?",
    "options": [
      "Bị tịch thu súng tự chế, bị xử phạt nặng về hành vi săn bắt động vật hoang dã trái phép VÀ hành vi sử dụng vũ khí tự chế trái phép (có thể bị xử lý hình sự)",
      "Được phép sử dụng nếu súng do cá nhân tự chế tạo bằng ống nước nhựa",
      "Chỉ bị phạt tiền 50.000 đồng nếu không bắn trúng con chim nào",
      "Được Nhà nước cấp giấy chứng nhận thợ săn thiện xạ địa phương"
    ],
    "correct": "Bị tịch thu súng tự chế, bị xử phạt nặng về hành vi săn bắt động vật hoang dã trái phép VÀ hành vi sử dụng vũ khí tự chế trái phép (có thể bị xử lý hình sự)",
    "explanation": "Sử dụng súng tự chế vi phạm nghiêm trọng Luật Quản lý vũ khí, vật liệu nổ và Luật Lâm nghiệp; người vi phạm bị xử phạt kép về vũ khí và săn bắt động vật rừng trái phép."
  },
  {
    "question": "Cộng đồng dân cư thôn có quyền chuyển nhượng (bán) diện tích rừng tự nhiên do Nhà nước giao cho cộng đồng quản lý cho doanh nghiệp tư nhân không?",
    "options": [
      "Nghiêm cấm tuyệt đối; cộng đồng dân cư không được chuyển đổi, chuyển nhượng, tặng cho, cho thuê, thế chấp hoặc góp vốn bằng quyền sử dụng rừng được Nhà nước giao",
      "Được quyền bán nếu toàn bộ bà con trong thôn cùng đồng ý biểu quyết",
      "Được quyền cho thuê thời hạn 50 năm để chia tiền cho các hộ gia đình",
      "Được phép chuyển nhượng nếu doanh nghiệp cam kết tuyển dụng người trong thôn vào làm việc"
    ],
    "correct": "Nghiêm cấm tuyệt đối; cộng đồng dân cư không được chuyển đổi, chuyển nhượng, tặng cho, cho thuê, thế chấp hoặc góp vốn bằng quyền sử dụng rừng được Nhà nước giao",
    "explanation": "Điều 86 Luật Lâm nghiệp: Cộng đồng dân cư được giao rừng không có quyền chuyển đổi, chuyển nhượng, tặng cho, cho thuê, thế chấp hoặc góp vốn bằng quyền sử dụng rừng."
  },
  {
    "question": "Trách nhiệm của chủ rừng khi phát hiện diện tích rừng của mình bị cháy do sét đánh hoặc do người khác gây ra là gì?",
    "options": [
      "Phải lập tức triển khai dập lửa bằng lực lượng, phương tiện tại chỗ, đồng thời báo ngay cho chính quyền xã, Kiểm lâm địa bàn hoặc cơ quan Cảnh sát PCCC gần nhất",
      "Ngồi ở nhà chờ khi nào lửa cháy tắt hẳn thì mới đi kiểm tra diện tích bị thiệt hại",
      "Chỉ cần quay video đăng lên mạng xã hội để kêu gọi cộng đồng mạng ủng hộ",
      "Bỏ chạy khỏi địa phương để tránh bị cơ quan công an mời lên làm việc"
    ],
    "correct": "Phải lập tức triển khai dập lửa bằng lực lượng, phương tiện tại chỗ, đồng thời báo ngay cho chính quyền xã, Kiểm lâm địa bàn hoặc cơ quan Cảnh sát PCCC gần nhất",
    "explanation": "Khoản 2 Điều 53 Luật Lâm nghiệp: Khi xảy ra cháy rừng, chủ rừng phải kịp thời huy động lực lượng, phương tiện dập cháy và báo cáo ngay cho cơ quan chức năng hỗ trợ."
  },
  {
    "question": "Hộ gia đình có được quyền kết hợp chăn nuôi gia súc, trồng nấm, dược liệu dưới tán rừng sản xuất không?",
    "options": [
      "Được khuyến khích phát triển kinh tế dưới tán rừng nhưng không được làm suy thoái rừng",
      "Bị nghiêm cấm hoàn toàn không được thả gia súc",
      "Chỉ được nuôi gà, cấm trồng cây dược liệu",
      "Phải chặt hết cây to mới được trồng dược liệu"
    ],
    "correct": "Được khuyến khích phát triển kinh tế dưới tán rừng nhưng không được làm suy thoái rừng",
    "explanation": "Luật Lâm nghiệp khuyến khích chủ rừng kết hợp sản xuất nông, lâm, ngư nghiệp, trồng cây dược liệu, nuôi ong dưới tán rừng sản xuất để nâng cao thu nhập."
  },
  {
    "question": "Trường hợp nào chủ rừng được tự do tận dụng cây gỗ bị đổ gãy do bão gió trong rừng trồng của mình?",
    "options": [
      "Toàn quyền thu dọn, sử dụng hoặc bán gỗ cây đổ gãy trong rừng trồng tự đầu tư",
      "Bắt buộc phải để cây mục nát không được chạm vào",
      "Phải chờ cơ quan chức năng của tỉnh xuống giám định mới được dọn",
      "Bị tịch thu toàn bộ số cây bị đổ"
    ],
    "correct": "Toàn quyền thu dọn, sử dụng hoặc bán gỗ cây đổ gãy trong rừng trồng tự đầu tư",
    "explanation": "Chủ rừng trồng tự đầu tư có toàn quyền thu gom cây đổ gãy do thiên tai để giảm thiểu thiệt hại và vệ sinh rừng, phòng chống cháy rừng."
  },
  {
    "question": "Khi muốn tỉa thưa rừng trồng để cây phát triển tốt hơn, hộ gia đình có phải báo cáo không?",
    "options": [
      "Chủ rừng tự đầu tư tự quyết định việc tỉa thưa mật độ cây rừng của mình",
      "Bắt buộc phải thuê đơn vị tư vấn lập hồ sơ thiết kế",
      "Phải nộp phạt tiền trước khi tỉa thưa",
      "Mỗi hecta chỉ được chặt tỉa đúng 1 cây"
    ],
    "correct": "Chủ rừng tự đầu tư tự quyết định việc tỉa thưa mật độ cây rừng của mình",
    "explanation": "Tỉa thưa là biện pháp kỹ thuật lâm sinh thông thường; đối với rừng trồng tự đầu tư, chủ rừng tự chủ động thực hiện theo quy trình kỹ thuật để nâng cao chất lượng rừng."
  },
  {
    "question": "Gỗ khai thác từ rừng trồng của hộ gia đình khi lưu thông trên đường có bắt buộc phải đóng dấu búa Kiểm lâm không?",
    "options": [
      "Gỗ rừng trồng thông thường KHÔNG phải đóng dấu búa Kiểm lâm",
      "Bắt buộc mọi khúc gỗ đều phải đóng dấu búa Kiểm lâm",
      "Phải đóng dấu búa của Trưởng thôn",
      "Phải đóng dấu đỏ của Ủy ban nhân dân xã"
    ],
    "correct": "Gỗ rừng trồng thông thường KHÔNG phải đóng dấu búa Kiểm lâm",
    "explanation": "Theo quy định hiện hành tại Thông tư 26, dấu búa Kiểm lâm đã được bãi bỏ đối với gỗ rừng trồng thông thường; việc quản lý căn cứ vào Bảng kê lâm sản hợp pháp."
  },
  {
    "question": "Người dân có được dùng chất độc, hóa chất hoặc mìn để khai thác lâm sản, thủy sản trong rừng không?",
    "options": [
      "Được dùng nếu không có dụng cụ khác",
      "Tuyệt đối nghiêm cấm; hành vi này nguy hiểm cho môi trường và bị truy cứu trách nhiệm hình sự",
      "Được dùng vào mùa khô hạn",
      "Chỉ cấm ở sông lớn, suối nhỏ trong rừng thì được dùng"
    ],
    "correct": "Tuyệt đối nghiêm cấm; hành vi này nguy hiểm cho môi trường và bị truy cứu trách nhiệm hình sự",
    "explanation": "Luật Lâm nghiệp và Bộ luật Hình sự nghiêm cấm sử dụng chất nổ, chất độc, xung điện để khai thác sinh vật rừng, thủy sản. Đây là hành vi hủy hoại môi trường sinh thái bị phạt tù rất nặng."
  },
  {
    "question": "Trách nhiệm của chủ rừng khi phát hiện sâu hại (như sâu đo ăn lá keo, sâu róm thông) xuất hiện nhiều là gì?",
    "options": [
      "Mặc kệ sâu ăn hết lá cây tự mọc lại",
      "Áp dụng biện pháp phòng trừ kịp thời và báo cho Kiểm lâm địa bàn để được hướng dẫn kỹ thuật",
      "Đốt sạch toàn bộ khu rừng để diệt sâu",
      "Phun thuốc trừ cỏ lên toàn bộ tán cây"
    ],
    "correct": "Áp dụng biện pháp phòng trừ kịp thời và báo cho Kiểm lâm địa bàn để được hướng dẫn kỹ thuật",
    "explanation": "Chủ rừng có trách nhiệm chủ động phòng trừ sinh vật hại và thông báo Kiểm lâm địa bàn để được tư vấn các biện pháp sinh học, lâm sinh an toàn, tránh để dịch lan sang rừng xung quanh."
  },
  {
    "question": "Việc chăn thả rông trâu bò vào khu vực rừng mới trồng có bị nghiêm cấm không?",
    "options": [
      "Không bị cấm vì cỏ trong rừng là thức ăn tự nhiên",
      "Nghiêm cấm chăn thả gia súc vào rừng mới trồng vì gây gãy, đổ, chết cây con mới trồng",
      "Được thả nếu trâu bò có đeo chuông",
      "Chỉ cấm thả trâu, còn bò thì được thả thoải mái"
    ],
    "correct": "Nghiêm cấm chăn thả gia súc vào rừng mới trồng vì gây gãy, đổ, chết cây con mới trồng",
    "explanation": "Quy chế bảo vệ rừng nghiêm cấm chăn thả gia súc vào rừng mới trồng trong thời kỳ cây non chưa đạt chiều cao an toàn. Hành vi để gia súc phá hoại rừng trồng phải bồi thường thiệt hại."
  },
  {
    "question": "Người dân tự ý mang máy múc vào đất rừng phòng hộ để san gạt mặt bằng làm nhà ở thì bị xử lý thế nào?",
    "options": [
      "Được hoan nghênh vì làm đẹp cảnh quan",
      "Bị đình chỉ ngay, xử phạt vi phạm hành chính nặng về hành vi phá rừng và buộc khôi phục tình trạng ban đầu",
      "Chỉ cần đóng tiền phạt 100.000 đồng là được làm tiếp",
      "Không bị xử lý nếu là hộ gia đình nghèo"
    ],
    "correct": "Bị đình chỉ ngay, xử phạt vi phạm hành chính nặng về hành vi phá rừng và buộc khôi phục tình trạng ban đầu",
    "explanation": "Hành vi dùng phương tiện cơ giới san gạt, hủy hoại đất rừng phòng hộ trái phép bị xử phạt nghiêm khắc về hành vi phá rừng trái pháp luật theo NĐ 146 và buộc khắc phục hậu quả hoàn trả mặt bằng."
  },
  {
    "question": "Chủ rừng được hưởng lợi từ nguồn thu dịch vụ môi trường rừng (DVMTR) phải có nghĩa vụ gì?",
    "options": [
      "Không phải làm gì, chỉ việc nhận tiền",
      "Phải bảo vệ tốt diện tích rừng được chi trả DVMTR, không để xảy ra cháy rừng, phá rừng",
      "Phải chia tiền cho tất cả mọi người trong xã",
      "Phải nộp lại toàn bộ tiền cho nhà máy thủy điện"
    ],
    "correct": "Phải bảo vệ tốt diện tích rừng được chi trả DVMTR, không để xảy ra cháy rừng, phá rừng",
    "explanation": "Nguyên tắc chi trả DVMTR là gắn liền với trách nhiệm bảo vệ rừng. Nếu để xảy ra cháy rừng, mất rừng hoặc suy giảm chất lượng rừng thì diện tích đó sẽ bị cắt giảm tiền DVMTR."
  },
  {
    "question": "Khi có nhu cầu vay vốn ngân hàng để phát triển trồng rừng, chủ rừng dùng tài sản gì để thế chấp?",
    "options": [
      "Chỉ được thế chấp nhà ở",
      "Được thế chấp giá trị quyền sử dụng đất rừng và giá trị rừng trồng theo quy định pháp luật",
      "Thế chấp thẻ cử tri",
      "Không ngân hàng nào cho vay trồng rừng"
    ],
    "correct": "Được thế chấp giá trị quyền sử dụng đất rừng và giá trị rừng trồng theo quy định pháp luật",
    "explanation": "Luật Lâm nghiệp và các chính sách tín dụng lâm nghiệp cho phép chủ rừng thế chấp quyền sử dụng đất rừng sản xuất và giá trị tài sản cây rừng trồng trên đất để vay vốn ngân hàng."
  },
  {
    "question": "Trước khi đốt nương làm rẫy hoặc đốt dọn thực bì gần rừng, người dân BẮT BUỘC phải làm gì?",
    "options": [
      "Lén lút châm lửa đốt vào ban đêm để không ai thấy",
      "Làm đường băng cản lửa, thông báo cho Trưởng thôn/Kiểm lâm và canh gác dập tắt tàn lửa",
      "Đốt ngay vào giữa trưa khi có gió to để cháy cho nhanh",
      "Chỉ cần hô to cho cả làng cùng biết"
    ],
    "correct": "Làm đường băng cản lửa, thông báo cho Trưởng thôn/Kiểm lâm và canh gác dập tắt tàn lửa",
    "explanation": "Điều 47 Nghị định 156/2018/NĐ-CP quy định đốt thực bì phải làm đường băng cản lửa, báo cho Trưởng thôn/Kiểm lâm địa bàn, chọn ngày lặng gió và có người canh gác đến khi lửa tắt hẳn."
  },
  {
    "question": "Đường băng cản lửa cô lập khu vực đốt dọn thực bì nương rẫy cần có chiều rộng tối thiểu khoảng bao nhiêu?",
    "options": [
      "Khoảng 0,5 mét",
      "Khoảng 1 mét",
      "Khoảng từ 4 mét đến 6 mét được dọn sạch cỏ rác, vật liệu cháy",
      "Phải rộng 50 mét"
    ],
    "correct": "Khoảng từ 4 mét đến 6 mét được dọn sạch cỏ rác, vật liệu cháy",
    "explanation": "Quy trình kỹ thuật an toàn đốt thực bì yêu cầu phát dọn sạch vật liệu cháy tạo đường băng cản lửa xung quanh nương rẫy rộng từ 4 m đến 6 m để ngăn lửa cháy lan sang rừng xung quanh."
  },
  {
    "question": "Thời điểm nào trong ngày là THUẬN LỢI VÀ AN TOÀN NHẤT để đốt dọn nương rẫy?",
    "options": [
      "Buổi trưa nắng gắt (từ 11 giờ đến 14 giờ) vì cỏ khô dễ cháy",
      "Buổi sáng sớm hoặc chiều muộn khi trời râm mát, độ ẩm cao và gió lặng",
      "Khi có gió mùa thổi mạnh cấp 5, cấp 6",
      "Bất kỳ thời điểm nào chủ nương rảnh rỗi"
    ],
    "correct": "Buổi sáng sớm hoặc chiều muộn khi trời râm mát, độ ẩm cao và gió lặng",
    "explanation": "Hướng dẫn an toàn PCCCR khuyến cáo chỉ đốt dọn nương rẫy vào lúc sáng sớm (trước 9h) hoặc chiều tối (sau 16h) khi không khí dịu mát, gió nhẹ để kiểm soát được ngọn lửa."
  },
  {
    "question": "Khi dự báo cháy rừng ở Cấp IV (cấp nguy hiểm) và Cấp V (cấp cực kỳ nguy hiểm), người dân có được đốt nương không?",
    "options": [
      "Được đốt nếu có đông người cùng canh",
      "Tuyệt đối NGHIÊM CẤM dùng lửa trong rừng và đốt nương rẫy ven rừng",
      "Được đốt nếu đốt từng đám nhỏ",
      "Chỉ được đốt vào buổi trưa"
    ],
    "correct": "Tuyệt đối NGHIÊM CẤM dùng lửa trong rừng và đốt nương rẫy ven rừng",
    "explanation": "Nghị định 156/2018/NĐ-CP quy định khi dự báo cháy rừng từ cấp IV trở lên, nghiêm cấm mọi hành vi đốt lửa, đốt nương rẫy, đốt dọn thực bì trong rừng và ven rừng."
  },
  {
    "question": "Người dân sau khi đốt nương rẫy xong được phép ra về khi nào?",
    "options": [
      "Ngay sau khi châm lửa xong",
      "Khi lửa đang cháy to nhất",
      "Chỉ khi ngọn lửa đã tắt hoàn toàn và đã dập tắt hết tàn tro âm ỉ",
      "Khi trời sắp đổ mưa rào"
    ],
    "correct": "Chỉ khi ngọn lửa đã tắt hoàn toàn và đã dập tắt hết tàn tro âm ỉ",
    "explanation": "Quy định PCCCR yêu cầu người đốt nương rẫy phải trực tiếp canh gác và chỉ được rời khỏi hiện trường khi đám cháy đã tắt hoàn toàn, tàn tro không còn khả năng bùng phát lại."
  },
  {
    "question": "Hành vi đốt nương rẫy bất cẩn làm cháy lan vào rừng gây thiệt hại rừng thì người gây cháy bị xử lý thế nào?",
    "options": [
      "Chỉ cần xin lỗi chủ rừng là xong",
      "Bị xử phạt vi phạm hành chính, bồi thường toàn bộ thiệt hại và có thể bị đi tù nếu cháy lớn",
      "Không bị xử lý vì là tai nạn rủi ro",
      "Được Nhà nước thưởng tiền vì giúp dọn rừng"
    ],
    "correct": "Bị xử phạt vi phạm hành chính, bồi thường toàn bộ thiệt hại và có thể bị đi tù nếu cháy lớn",
    "explanation": "Điều 20 Nghị định 146/2026/NĐ-CP và Điều 243 Bộ luật Hình sự quy định người để lửa cháy lan gây cháy rừng phải bồi thường thiệt hại, bị phạt tiền rất nặng hoặc bị truy cứu trách nhiệm hình sự phạt tù."
  },
  {
    "question": "Khi phát hiện có đám cháy rừng, người dân có trách nhiệm làm gì đầu tiên?",
    "options": [
      "Đứng quay video phát trực tiếp lên mạng xã hội rồi bỏ đi",
      "Hô hoán, báo ngay cho Trưởng thôn, Kiểm lâm địa bàn hoặc UBND xã và tìm cách chữa cháy ban đầu",
      "Chạy về nhà khóa cửa lại coi như không biết",
      "Đợi khi nào cháy hết rừng thì mới báo"
    ],
    "correct": "Hô hoán, báo ngay cho Trưởng thôn, Kiểm lâm địa bàn hoặc UBND xã và tìm cách chữa cháy ban đầu",
    "explanation": "Mọi công dân khi phát hiện cháy rừng có nghĩa vụ thông báo khẩn cấp cho chính quyền địa phương, cơ quan Kiểm lâm gần nhất và tham gia chữa cháy theo khả năng."
  },
  {
    "question": "Khi nhận được lệnh huy động tham gia chữa cháy rừng của Chủ tịch UBND xã hoặc Trưởng thôn, người dân phải làm gì?",
    "options": [
      "Từ chối tham gia vì không phải rừng nhà mình",
      "Nghiêm túc chấp hành, nhanh chóng mang dụng cụ có sẵn đến hiện trường tham gia dập lửa",
      "Đòi trả tiền công trước mới đi",
      "Giả vờ bị ốm để ở nhà"
    ],
    "correct": "Nghiêm túc chấp hành, nhanh chóng mang dụng cụ có sẵn đến hiện trường tham gia dập lửa",
    "explanation": "Luật Lâm nghiệp và Luật PCCC quy định công dân có nghĩa vụ chấp hành lệnh huy động lực lượng, phương tiện của người có thẩm quyền để tham gia cứu cháy rừng."
  },
  {
    "question": "Những dụng cụ thủ công thông thường nào tại gia đình rất hữu ích khi tham gia dập lửa rừng?",
    "options": [
      "Bàn chải đánh răng và bát ăn cơm",
      "Dao phát, cuốc, cào sắt, cành cây tươi, bình xịt nước, can nước",
      "Điện thoại thông minh và sạc dự phòng",
      "Bút viết và giấy trắng"
    ],
    "correct": "Dao phát, cuốc, cào sắt, cành cây tươi, bình xịt nước, can nước",
    "explanation": "Khi chữa cháy rừng, các dụng cụ thủ công tại chỗ như dao phát, cuốc, cào sắt (làm đường băng cản lửa) và cành cây tươi, can nước (dập tàn lửa) đóng vai trò cực kỳ quan trọng và hiệu quả."
  },
  {
    "question": "Hành vi vứt tàn thuốc lá đang cháy dở hoặc đốt lửa sưởi ấm trong rừng vào mùa hanh khô có vi phạm pháp luật không?",
    "options": [
      "Không vi phạm vì tàn thuốc rất nhỏ",
      "Vi phạm nghiêm trọng quy định an toàn PCCCR và bị xử phạt theo luật",
      "Chỉ vi phạm nếu vứt vào đống củi khô",
      "Được phép nếu đứng cách cây rừng 1 mét"
    ],
    "correct": "Vi phạm nghiêm trọng quy định an toàn PCCCR và bị xử phạt theo luật",
    "explanation": "Nghị định 146/2026/NĐ-CP nghiêm cấm vứt tàn thuốc, que diêm còn tàn lửa hoặc đốt lửa sưởi ấm tùy tiện trong rừng. Hành vi này có thể gây hỏa hoạn lớn và bị phạt tiền rất nặng."
  },
  {
    "question": "Biển cảnh báo cấp dự báo cháy rừng thường được đặt ở đâu để người dân dễ nhận biết?",
    "options": [
      "Cất trong tủ kín của phòng làm việc xã",
      "Đặt tại các cửa rừng, ngã ba đường vào rừng, nhà văn hóa thôn, nơi đông dân cư qua lại",
      "Chôn sâu dưới đáy suối",
      "Đặt trên đỉnh núi cao không có lối đi"
    ],
    "correct": "Đặt tại các cửa rừng, ngã ba đường vào rừng, nhà văn hóa thôn, nơi đông dân cư qua lại",
    "explanation": "Biển cảnh báo cấp cháy rừng được lắp đặt tại các vị trí đầu mối giao thông, cửa rừng, trung tâm thôn bản để cảnh báo thường xuyên cho nhân dân chủ động phòng ngừa."
  },
  {
    "question": "Các tháng nào trong năm ở miền Bắc thường là thời kỳ cao điểm hanh khô, nguy cơ cháy rừng cao nhất?",
    "options": [
      "Các tháng mùa mưa tháng 6, tháng 7, tháng 8",
      "Các tháng mùa khô từ tháng 11 năm trước đến tháng 4 năm sau",
      "Chỉ riêng ngày Tết Nguyên đán",
      "Quanh năm nguy cơ cháy rừng như nhau"
    ],
    "correct": "Các tháng mùa khô từ tháng 11 năm trước đến tháng 4 năm sau",
    "explanation": "Ở miền Bắc, mùa khô hanh kéo dài từ tháng 11 đến tháng 4 năm sau là giai đoạn thảm thực vật khô nỏ, thiếu nước, là thời kỳ xung yếu nhất dễ bùng phát cháy rừng."
  },
  {
    "question": "Hành vi hun khói lấy mật ong rừng bất cẩn để lửa bùng phát gây cháy rừng thì bị xử lý như thế nào?",
    "options": [
      "Được miễn trách nhiệm nếu giao nộp lại mật ong",
      "Bị xử phạt vi phạm hành chính, bồi thường thiệt hại và có thể bị truy cứu trách nhiệm hình sự",
      "Chỉ bị phạt nhắc nhở tại cuộc họp thôn",
      "Không ai có quyền xử phạt hành vi lấy mật ong"
    ],
    "correct": "Bị xử phạt vi phạm hành chính, bồi thường thiệt hại và có thể bị truy cứu trách nhiệm hình sự",
    "explanation": "Dùng lửa hun khói bắt ong là một trong những nguyên nhân hàng đầu gây cháy rừng; người thực hiện hành vi này phải chịu trách nhiệm bồi thường và bị truy cứu trách nhiệm hình sự theo Điều 243 BLHS."
  },
  {
    "question": "Đường băng xanh cản lửa trong phòng cháy rừng thường được trồng bằng các loài cây nào?",
    "options": [
      "Các loài cây có lá chứa nhiều tinh dầu dễ cháy như thông, bạch đàn",
      "Các loài cây có tán rậm rạp, lá dày, mọng nước, khó cháy như vối thuốc, xoan đào, chè mạn",
      "Trồng các loại cỏ tranh khô",
      "Trồng cây thân rỗng"
    ],
    "correct": "Các loài cây có tán rậm rạp, lá dày, mọng nước, khó cháy như vối thuốc, xoan đào, chè mạn",
    "explanation": "Đường băng xanh cản lửa sử dụng các loài cây bản địa có tán lá xanh quanh năm, lá dày nhiều nước, khó bắt lửa để cản gió và ngăn tàn lửa bay lan qua đám rừng khác."
  },
  {
    "question": "Tổ đội quần chúng bảo vệ rừng và PCCCR ở thôn, bản do ai thành lập và quản lý?",
    "options": [
      "Do Ủy ban nhân dân cấp xã quyết định thành lập theo đề nghị của thôn và Kiểm lâm",
      "Do các cháu thiếu nhi trong thôn tự lập",
      "Do các công ty du lịch thành lập",
      "Do hội người cao tuổi tự quản"
    ],
    "correct": "Do Ủy ban nhân dân cấp xã quyết định thành lập theo đề nghị của thôn và Kiểm lâm",
    "explanation": "Nghị định 156/2018/NĐ-CP quy định UBND cấp xã có trách nhiệm thành lập, kiện toàn và chỉ đạo các Tổ đội quần chúng bảo vệ rừng và PCCCR tại từng thôn, bản."
  },
  {
    "question": "Khi tham gia chữa cháy rừng, yêu cầu quan trọng hàng đầu cần bảo đảm là gì?",
    "options": [
      "Phải lấy được thật nhiều gỗ mang về",
      "Tuyệt đối bảo đảm an toàn tính mạng con người, sau đó mới đến bảo vệ tài sản rừng",
      "Càng liều mình lao vào giữa ngọn lửa càng tốt",
      "Không cần tuân theo sự chỉ huy của ai"
    ],
    "correct": "Tuyệt đối bảo đảm an toàn tính mạng con người, sau đó mới đến bảo vệ tài sản rừng",
    "explanation": "Nguyên tắc cứu hỏa rừng số một là: An toàn tính mạng con người là trên hết. Mọi người tham gia phải tuân thủ sự chỉ huy thống nhất, chú ý hướng gió và lối thoát hiểm an toàn."
  },
  {
    "question": "Người bị thương hoặc hy sinh khi dũng cảm tham gia chữa cháy rừng được Nhà nước giải quyết chế độ gì?",
    "options": [
      "Không được giải quyết bất kỳ chế độ gì",
      "Được xem xét công nhận là thương binh, liệt sĩ và hưởng các chế độ ưu đãi người có công",
      "Chỉ được hỗ trợ một bữa ăn trưa",
      "Tự gia đình phải chi trả toàn bộ viện phí"
    ],
    "correct": "Được xem xét công nhận là thương binh, liệt sĩ và hưởng các chế độ ưu đãi người có công",
    "explanation": "Pháp luật quy định người tham gia chữa cháy rừng bị thương hoặc dũng cảm hy sinh bảo vệ tài sản Nhà nước và nhân dân được xem xét công nhận hưởng chế độ thương binh, liệt sĩ."
  },
  {
    "question": "Chủ rừng không chấp hành quy định lập phương án phòng cháy, chữa cháy rừng bị xử phạt như thế nào?",
    "options": [
      "Bị xử phạt cảnh cáo hoặc phạt tiền theo quy định pháp luật xử phạt vi phạm lâm nghiệp",
      "Được Nhà nước làm hộ mà không cần quan tâm",
      "Không bị phạt nếu khu rừng đó nhỏ",
      "Chỉ bị ghi tên vào sổ tay của xã"
    ],
    "correct": "Bị xử phạt cảnh cáo hoặc phạt tiền theo quy định pháp luật xử phạt vi phạm lâm nghiệp",
    "explanation": "Nghị định 146/2026/NĐ-CP quy định xử phạt vi phạm hành chính đối với chủ rừng không xây dựng, thực hiện phương án phòng cháy chữa cháy rừng theo quy định."
  },
  {
    "question": "Hành vi đốt vàng mã, đốt nhang gần rừng hoặc trong khu di tích lịch sử ven rừng cần chú ý điều gì?",
    "options": [
      "Đốt ở bất cứ chỗ nào có bóng mát",
      "Phải đốt đúng nơi quy định có lò đốt an toàn và dập tắt hết tàn lửa trước khi đi",
      "Đốt vàng mã càng nhiều trong rừng càng may mắn",
      "Cứ vứt tàn nhang vào đống lá khô"
    ],
    "correct": "Phải đốt đúng nơi quy định có lò đốt an toàn và dập tắt hết tàn lửa trước khi đi",
    "explanation": "Vào mùa lễ hội, việc thắp nhang, đốt vàng mã trong hoặc ven rừng bắt buộc phải thực hiện tại nơi quy định, có người trông coi và dập tắt lửa để tránh bén vào thảm lá khô gây cháy rừng."
  },
  {
    "question": "Số điện thoại báo cháy khẩn cấp toàn quốc mà người dân có thể gọi khi phát hiện cháy lớn là số nào?",
    "options": [
      "Số 113",
      "Số 114 (Cảnh sát Phòng cháy, chữa cháy và Cứu nạn, cứu hộ)",
      "Số 115",
      "Số 1080"
    ],
    "correct": "Số 114 (Cảnh sát Phòng cháy, chữa cháy và Cứu nạn, cứu hộ)",
    "explanation": "Số điện thoại khẩn cấp 114 là số cứu hỏa toàn quốc miễn phí, tiếp nhận tin báo cháy 24/24 giờ để phối hợp lực lượng ứng cứu kịp thời."
  },
  {
    "question": "Hộ đồng bào dân tộc thiểu số, hộ nghèo nhận khoán bảo vệ rừng tự nhiên được Nhà nước hỗ trợ như thế nào?",
    "options": [
      "Được nhận tiền công khoán bảo vệ rừng hàng năm theo chính sách của Nghị định 58/2024/NĐ-CP",
      "Chỉ được nhận lại củi khô",
      "Không có bất kỳ khoản hỗ trợ nào",
      "Phải nộp tiền cho Ban Quản lý rừng"
    ],
    "correct": "Được nhận tiền công khoán bảo vệ rừng hàng năm theo chính sách của Nghị định 58/2024/NĐ-CP",
    "explanation": "Nghị định 58/2024/NĐ-CP (sửa đổi bổ sung bởi NĐ 42/2026/NĐ-CP) quy định chính sách hỗ trợ tiền công khoán bảo vệ rừng hàng năm cho hộ nghèo, đồng bào DTTS sống ở vùng khó khăn có rừng."
  },
  {
    "question": "Mức hỗ trợ kinh phí khoán bảo vệ rừng cho người dân hiện nay theo chính sách Nhà nước bình quân khoảng bao nhiêu?",
    "options": [
      "Khoảng 50.000 đồng/ha/năm",
      "Khoảng từ 500.000 đồng/ha/năm trở lên (tùy khu vực và nguồn vốn hỗ trợ)",
      "Khoảng 10.000 đồng/ha/năm",
      "Khoảng 50 triệu đồng/ha/năm"
    ],
    "correct": "Khoảng từ 500.000 đồng/ha/năm trở lên (tùy khu vực và nguồn vốn hỗ trợ)",
    "explanation": "Nghị định 58/2024/NĐ-CP quy định mức hỗ trợ khoán bảo vệ rừng từ ngân sách nhà nước bình quân từ 500.000 đồng/ha/năm (hoặc kết hợp nguồn thu DVMTR để nâng cao mức thu nhập cho người nhận khoán)."
  },
  {
    "question": "Tiền dịch vụ môi trường rừng (DVMTR) chi trả cho người dân trồng, bảo vệ rừng có nguồn gốc từ đâu?",
    "options": [
      "Do nhân dân tự quyên góp với nhau",
      "Từ các cơ sở sử dụng DVMTR như nhà máy thủy điện, nhà máy nước sạch, cơ sở du lịch sinh thái",
      "Từ tiền bán gỗ lậu tịch thu",
      "Từ tiền cứu trợ của các hội từ thiện"
    ],
    "correct": "Từ các cơ sở sử dụng DVMTR như nhà máy thủy điện, nhà máy nước sạch, cơ sở du lịch sinh thái",
    "explanation": "Điều 63 Luật Lâm nghiệp quy định các nhà máy thủy điện, nước sạch, dịch vụ du lịch... phải trả tiền dịch vụ môi trường rừng cho các chủ rừng có công bảo vệ nguồn nước và chống bồi lắng lòng hồ."
  },
  {
    "question": "Hộ gia đình nhận tiền dịch vụ môi trường rừng bằng hình thức nào là an toàn và thuận tiện nhất?",
    "options": [
      "Nhận qua tài khoản ngân hàng hoặc qua hệ thống bưu điện cơ sở",
      "Chỉ nhận bằng hiện vật là ngô khoai",
      "Phải lên tận Bộ Nông nghiệp ở Hà Nội để nhận",
      "Đến nhà riêng của Trưởng thôn vào ban đêm"
    ],
    "correct": "Nhận qua tài khoản ngân hàng hoặc qua hệ thống bưu điện cơ sở",
    "explanation": "Quỹ Bảo vệ và Phát triển rừng các tỉnh hiện nay áp dụng phương thức chi trả tiền DVMTR minh bạch, trực tiếp qua tài khoản ngân hàng hoặc điểm giao dịch bưu điện xã cho từng chủ rừng."
  },
  {
    "question": "Nhà nước có chính sách hỗ trợ gạo cho đối tượng hộ nghèo nào trong công tác trồng rừng?",
    "options": [
      "Tất cả mọi gia đình trong tỉnh",
      "Hộ gia đình đồng bào dân tộc thiểu số nghèo tham gia trồng rừng thay thế nương rẫy",
      "Chỉ các gia đình nuôi trâu bò",
      "Chỉ người kinh doanh buôn bán ở thị trấn"
    ],
    "correct": "Hộ gia đình đồng bào dân tộc thiểu số nghèo tham gia trồng rừng thay thế nương rẫy",
    "explanation": "Chính sách trợ cấp gạo của Chính phủ hỗ trợ cho các hộ đồng bào DTTS nghèo chuyển đổi đất nương rẫy sang trồng rừng sản xuất để bà con yên tâm bảo vệ rừng, không bị đứt bữa."
  },
  {
    "question": "Hộ gia đình muốn vay vốn ưu đãi để trồng rừng sản xuất thì liên hệ với ngân hàng nào tại địa phương?",
    "options": [
      "Ngân hàng Chính sách xã hội hoặc Ngân hàng Nông nghiệp và PTNT (Agribank)",
      "Chỉ được vay tại các hiệu cầm đồ tư nhân",
      "Vay tại các ứng dụng 'tín dụng đen' trên mạng",
      "Không có ngân hàng nào hỗ trợ"
    ],
    "correct": "Ngân hàng Chính sách xã hội hoặc Ngân hàng Nông nghiệp và PTNT (Agribank)",
    "explanation": "Ngân hàng Chính sách xã hội và Agribank triển khai các gói tín dụng ưu đãi theo Nghị định của Chính phủ cho hộ nghèo, hộ cận nghèo, hộ sản xuất kinh doanh vùng khó khăn vay vốn trồng rừng."
  },
  {
    "question": "Chính sách khuyến khích trồng rừng cây bản địa, cây gỗ lớn nhằm mục tiêu gì lâu dài?",
    "options": [
      "Để có lá cây làm phân xanh",
      "Tạo nguồn gỗ có giá trị kinh tế cao, giữ nước bền vững và giảm thiểu thiên tai sạt lở",
      "Để không ai vào rừng được nữa",
      "Để chặt phá làm củi đun"
    ],
    "correct": "Tạo nguồn gỗ có giá trị kinh tế cao, giữ nước bền vững và giảm thiểu thiên tai sạt lở",
    "explanation": "Rừng cây bản địa và gỗ lớn (như lát hoa, dổi, lim, trầm, trám...) có chu kỳ dài nhưng sinh khối lớn, giá trị kinh tế cao gấp nhiều lần và phát huy tối đa chức năng sinh thái bảo vệ đất, chống lũ quét."
  },
  {
    "question": "Tổ chức, hộ gia đình tham gia trồng rừng thay thế khi Nhà nước chuyển mục đích sử dụng rừng được hỗ trợ từ đâu?",
    "options": [
      "Tự chủ rừng phải bỏ tiền túi 100%",
      "Từ nguồn kinh phí nộp tiền trồng rừng thay thế do Quỹ Bảo vệ và phát triển rừng quản lý",
      "Do nhân dân trong xã đóng góp",
      "Do nước ngoài viện trợ"
    ],
    "correct": "Từ nguồn kinh phí nộp tiền trồng rừng thay thế do Quỹ Bảo vệ và phát triển rừng quản lý",
    "explanation": "Các dự án chuyển mục đích sử dụng rừng phải nộp tiền trồng rừng thay thế vào Quỹ Bảo vệ và phát triển rừng; Quỹ sẽ phân bổ kinh phí này để hỗ trợ các địa phương và người dân tổ chức trồng lại rừng mới."
  },
  {
    "question": "Cộng đồng dân cư thôn nhận tiền DVMTR có được sử dụng để xây dựng công trình phúc lợi chung của thôn không?",
    "options": [
      "Không được dùng, phải chia hết cho Trưởng thôn",
      "Được bàn bạc tập thể sử dụng vào tuần tra bảo vệ rừng và tu sửa nhà văn hóa, đường làng ngõ xóm",
      "Chỉ được dùng để liên hoan ăn uống",
      "Phải đem gửi tiết kiệm tư nhân"
    ],
    "correct": "Được bàn bạc tập thể sử dụng vào tuần tra bảo vệ rừng và tu sửa nhà văn hóa, đường làng ngõ xóm",
    "explanation": "Quy chế quản lý tiền DVMTR của cộng đồng thôn quy định: Tiền DVMTR thuộc sở hữu chung của cộng đồng, do nhân dân họp bàn công khai quyết định chi cho tuần tra BVR và xây dựng công trình phúc lợi chung."
  },
  {
    "question": "Để được thanh toán tiền khoán bảo vệ rừng hàng năm, kết quả bảo vệ rừng của người dân cần đạt yêu cầu gì?",
    "options": [
      "Rừng bị cháy hết cũng được nhận tiền",
      "Được cơ quan chức năng nghiệm thu diện tích rừng còn nguyên vẹn, không xảy ra cháy hoặc phá rừng trái phép",
      "Chỉ cần có mặt ở nhà vào ngày phát tiền",
      "Chỉ cần nộp đơn xin nhận tiền"
    ],
    "correct": "Được cơ quan chức năng nghiệm thu diện tích rừng còn nguyên vẹn, không xảy ra cháy hoặc phá rừng trái phép",
    "explanation": "Việc giải ngân tiền khoán bảo vệ rừng bắt buộc phải căn cứ vào biên bản nghiệm thu hiện trường thực tế của Kiểm lâm và chính quyền xã xác nhận diện tích rừng được bảo vệ tốt, an toàn."
  },
  {
    "question": "Hộ gia đình nghèo được hỗ trợ cây giống lâm nghiệp để trồng rừng thì có trách nhiệm gì?",
    "options": [
      "Đem bán cây giống lấy tiền tiêu xài",
      "Trồng đúng kỹ thuật trên diện tích được phê duyệt và chăm sóc bảo vệ cây sống thành rừng",
      "Vứt cây giống ven đường",
      "Chỉ trồng một vài cây gần nhà"
    ],
    "correct": "Trồng đúng kỹ thuật trên diện tích được phê duyệt và chăm sóc bảo vệ cây sống thành rừng",
    "explanation": "Chính sách trợ cấp cây giống yêu cầu người dân phải tiếp nhận và trồng đúng mùa vụ, đúng mật độ, chăm sóc chu đáo; nghiêm cấm việc bán lại hoặc làm hư hỏng cây giống hỗ trợ."
  },
  {
    "question": "Việc cấp Chứng chỉ rừng bền vững (FSC) cho các nhóm hộ gia đình trồng rừng mang lại lợi ích gì?",
    "options": [
      "Gỗ bán được giá cao hơn từ 10% đến 20% so với gỗ thông thường và được doanh nghiệp bao tiêu",
      "Không có lợi ích gì",
      "Làm giảm giá trị của cây gỗ",
      "Người dân phải nộp phạt cho tổ chức quốc tế"
    ],
    "correct": "Gỗ bán được giá cao hơn từ 10% đến 20% so với gỗ thông thường và được doanh nghiệp bao tiêu",
    "explanation": "Gỗ có chứng chỉ quản lý rừng bền vững (FSC) đáp ứng tiêu chuẩn khắt khe của thị trường Âu - Mỹ nên các nhà máy chế biến luôn ưu tiên thu mua với giá cao hơn từ 10-20% so với gỗ đại trà."
  },
  {
    "question": "Khi Nhà nước quy hoạch lại 3 loại rừng mà rừng của hộ gia đình từ rừng sản xuất chuyển thành rừng phòng hộ thì sao?",
    "options": [
      "Người dân bị mất trắng toàn bộ tài sản",
      "Nhà nước thực hiện hỗ trợ, bồi thường hoặc giao khoán bảo vệ rừng theo quy định pháp luật",
      "Người dân phải nộp tiền phạt cho xã",
      "Không có chính sách giải quyết"
    ],
    "correct": "Nhà nước thực hiện hỗ trợ, bồi thường hoặc giao khoán bảo vệ rừng theo quy định pháp luật",
    "explanation": "Luật Lâm nghiệp quy định khi điều chỉnh phân loại rừng mà ảnh hưởng đến quyền lợi hợp pháp của chủ rừng thì Nhà nước có trách nhiệm bồi thường, hỗ trợ hoặc chuyển tiếp giao khoán bảo vệ rừng."
  },
  {
    "question": "Chương trình phát triển kinh tế lâm nghiệp bền vững ưu tiên hỗ trợ những đối tượng nào?",
    "options": [
      "Hộ nghèo, hộ cận nghèo, đồng bào dân tộc thiểu số sinh sống ở khu vực miền núi khó khăn",
      "Chỉ các doanh nghiệp ở thành phố",
      "Những người không có đất rừng",
      "Chỉ các hộ gia đình khá giả"
    ],
    "correct": "Hộ nghèo, hộ cận nghèo, đồng bào dân tộc thiểu số sinh sống ở khu vực miền núi khó khăn",
    "explanation": "Các chương trình mục tiêu quốc gia về phát triển lâm nghiệp luôn ưu tiên bố trí nguồn lực cho đồng bào DTTS, hộ nghèo vùng sâu, vùng xa có rừng để nâng cao sinh kế và giảm nghèo bền vững."
  },
  {
    "question": "Ai là người hướng dẫn kỹ thuật trồng rừng, tỉa cành, phòng sâu bệnh miễn phí cho bà con nông dân?",
    "options": [
      "Cán bộ Kiểm lâm địa bàn và cán bộ Khuyến nông cơ sở",
      "Các thương lái mua gỗ ép giá",
      "Những người bán hàng rong",
      "Người dân phải tự tìm hiểu không ai hướng dẫn"
    ],
    "correct": "Cán bộ Kiểm lâm địa bàn và cán bộ Khuyến nông cơ sở",
    "explanation": "Lực lượng Kiểm lâm địa bàn phối hợp với khuyến nông xã có trách nhiệm thường xuyên hướng dẫn kỹ thuật lâm sinh, biện pháp trồng, chăm sóc và phòng trừ sâu bệnh miễn phí cho nhân dân."
  },
  {
    "question": "Hành vi nào sau đây bị pháp luật coi là 'Phá rừng trái pháp luật'?",
    "options": [
      "Đi bộ trên đường mòn trong rừng ngắm cảnh",
      "Chặt, đốt cây rừng; san ủi đất rừng; ken cây băm gốc đổ hóa chất hủy hoại cây mà không được phép",
      "Trồng thêm cây xanh vào khu vực đất trống ven rừng",
      "Thu dọn rác thải rơi vãi bìa rừng"
    ],
    "correct": "Chặt, đốt cây rừng; san ủi đất rừng; ken cây băm gốc đổ hóa chất hủy hoại cây mà không được phép",
    "explanation": "Khoản 1 Điều 23 Nghị định 146/2026/NĐ-CP quy định phá rừng trái pháp luật là hành vi chặt, đốt, phá cây rừng, đào bới, san ủi, xả chất độc hoặc bóc vỏ, ken cây hủy hoại cây rừng mà không được phép."
  },
  {
    "question": "Hành vi bóc vỏ cây, ken cây, khoan vào thân cây rồi đổ thuốc trừ sâu làm cây chết dần bị xử lý thế nào?",
    "options": [
      "Không bị coi là phá rừng vì cây vẫn đứng nguyên",
      "Bị xử phạt nghiêm khắc về hành vi 'Phá rừng trái pháp luật', tính thiệt hại theo từng cây bị hại",
      "Chỉ bị phạt nhắc nhở vì không dùng cưa xăng",
      "Được coi là hành vi tỉa thưa cây rừng tự nhiên"
    ],
    "correct": "Bị xử phạt nghiêm khắc về hành vi 'Phá rừng trái pháp luật', tính thiệt hại theo từng cây bị hại",
    "explanation": "Nghị định 146/2026/NĐ-CP quy định rõ hành vi ken cây, khoan thân cây, đổ hóa chất làm chết cây rừng bị xử lý về hành vi Phá rừng trái pháp luật; đơn vị tính thiệt hại là từng cây rừng bị xâm hại."
  },
  {
    "question": "Mức phạt tiền thấp nhất đối với hành vi phá rừng trái pháp luật đối với cá nhân là từ bao nhiêu?",
    "options": [
      "Chỉ phạt từ 10.000 đồng",
      "Phạt tiền từ 1.000.000 đồng trở lên (tùy theo diện tích và loại rừng)",
      "Chỉ phạt cảnh cáo bằng lời nói",
      "Tối thiểu phải từ 100 triệu đồng"
    ],
    "correct": "Phạt tiền từ 1.000.000 đồng trở lên (tùy theo diện tích và loại rừng)",
    "explanation": "Điều 23 Nghị định 146/2026/NĐ-CP quy định khung phạt tiền thấp nhất đối với hành vi phá rừng trái pháp luật khởi điểm từ 1.000.000 đồng và tăng dần theo diện tích, loại rừng bị phá."
  },
  {
    "question": "Mức phạt tiền tối đa mà một cá nhân có thể bị xử phạt hành chính trong lĩnh vực lâm nghiệp là bao nhiêu?",
    "options": [
      "50.000.000 đồng",
      "100.000.000 đồng",
      "250.000.000 đồng",
      "500.000.000 đồng (nửa tỷ đồng)"
    ],
    "correct": "500.000.000 đồng (nửa tỷ đồng)",
    "explanation": "Khoản 1 Điều 4 Nghị định 146/2026/NĐ-CP quy định mức phạt tiền tối đa đối với một cá nhân vi phạm hành chính trong lĩnh vực lâm nghiệp lên đến 500.000.000 đồng (đối với tổ chức là 1 tỷ đồng)."
  },
  {
    "question": "Phá rừng sản xuất là rừng tự nhiên trái phép từ diện tích bao nhiêu thì bị TRUY CỨU TRÁCH NHIỆM HÌNH SỰ (bị đi tù)?",
    "options": [
      "Từ 10.000 m2 trở lên",
      "Từ 1.000 m2 (khoảng gần 3 sào Bắc Bộ) trở lên đã bị đi tù",
      "Từ 50.000 m2 trở lên",
      "Phá bao nhiêu cũng chỉ bị phạt tiền không bị đi tù"
    ],
    "correct": "Từ 1.000 m2 (khoảng gần 3 sào Bắc Bộ) trở lên đã bị đi tù",
    "explanation": "Điểm a Khoản 1 Điều 243 Bộ luật Hình sự quy định người nào hủy hoại rừng sản xuất là rừng tự nhiên từ 1.000 m2 đến dưới 5.000 m2 thì bị truy cứu TNHS với khung hình phạt tù từ 01 năm đến 05 năm."
  },
  {
    "question": "Phá rừng phòng hộ trái phép từ diện tích bao nhiêu mét vuông (m2) thì bị khởi tố hình sự phạt tù?",
    "options": [
      "Từ 5.000 m2 trở lên",
      "Từ 700 m2 (chưa đầy 2 sào Bắc Bộ) trở lên đã bị truy cứu trách nhiệm hình sự",
      "Từ 2.000 m2 trở lên",
      "Từ 10.000 m2 trở lên"
    ],
    "correct": "Từ 700 m2 (chưa đầy 2 sào Bắc Bộ) trở lên đã bị truy cứu trách nhiệm hình sự",
    "explanation": "Điểm b Khoản 1 Điều 243 Bộ luật Hình sự quy định hành vi hủy hoại rừng phòng hộ từ 700 m2 đến dưới 3.000 m2 đã đủ yếu tố cấu thành tội phạm và bị phạt tù từ 01 năm đến 05 năm."
  },
  {
    "question": "Phá rừng đặc dụng trái phép từ diện tích bao nhiêu mét vuông (m2) thì bị khởi tố hình sự phạt tù?",
    "options": [
      "Từ 100 m2 trở lên",
      "Từ 500 m2 (khoảng hơn 1 sào Bắc Bộ) trở lên đã bị truy cứu trách nhiệm hình sự",
      "Từ 3.000 m2 trở lên",
      "Từ 5.000 m2 trở lên"
    ],
    "correct": "Từ 500 m2 (khoảng hơn 1 sào Bắc Bộ) trở lên đã bị truy cứu trách nhiệm hình sự",
    "explanation": "Điểm c Khoản 1 Điều 243 Bộ luật Hình sự quy định hành vi hủy hoại rừng đặc dụng từ 500 m2 đến dưới 1.000 m2 đã bị xử lý hình sự với mức án từ 01 năm đến 05 năm tù giam."
  },
  {
    "question": "Hành vi lấn, chiếm đất rừng trái phép ngoài việc bị phạt tiền còn bị áp dụng biện pháp gì?",
    "options": [
      "Được giữ lại phần đất đã lấn chiếm",
      "Buộc tháo dỡ công trình, trả lại đất rừng đã lấn chiếm và khôi phục lại tình trạng ban đầu",
      "Được cấp sổ đỏ hợp thức hóa đất lấn chiếm",
      "Chỉ cần viết bản kiểm điểm cá nhân"
    ],
    "correct": "Buộc tháo dỡ công trình, trả lại đất rừng đã lấn chiếm và khôi phục lại tình trạng ban đầu",
    "explanation": "Khoản 3 Điều 10 Nghị định 146/2026/NĐ-CP quy định người lấn chiếm đất rừng buộc phải tháo dỡ toàn bộ tài sản, công trình xây dựng trái phép, trả lại diện tích đất và trồng lại rừng."
  },
  {
    "question": "Khai thác trộm gỗ thông thường từ rừng tự nhiên khối lượng bao nhiêu mét khối (m3) thì bị khởi tố đi tù?",
    "options": [
      "Từ 100 m3 trở lên",
      "Từ 10 m3 trở lên tại rừng sản xuất (hoặc từ 07 m3 tại rừng phòng hộ) đã bị truy cứu TNHS",
      "Từ 50 m3 trở lên",
      "Chặt trộm bao nhiêu cũng chỉ bị tịch thu gỗ"
    ],
    "correct": "Từ 10 m3 trở lên tại rừng sản xuất (hoặc từ 07 m3 tại rừng phòng hộ) đã bị truy cứu TNHS",
    "explanation": "Điều 232 Bộ luật Hình sự quy định khai thác trái phép gỗ rừng tự nhiên từ 10 m3 trở lên tại rừng sản xuất, từ 07 m3 tại rừng phòng hộ, từ 03 m3 tại rừng đặc dụng là phạm tội hình sự bị phạt tù."
  },
  {
    "question": "Chặt trộm dù chỉ 0,5 m3 gỗ quý hiếm Nhóm IA (như gỗ sưa, gỗ gụ...) tại rừng đặc dụng thì bị xử lý thế nào?",
    "options": [
      "Chỉ bị phạt nhắc nhở vì khối lượng dưới 1 m3",
      "Đã đủ định lượng bị khởi tố hình sự phạt tù theo Điều 232 Bộ luật Hình sự",
      "Chỉ nộp tiền phạt 500.000 đồng",
      "Không bị xử lý nếu mang về đóng bàn ghế"
    ],
    "correct": "Đã đủ định lượng bị khởi tố hình sự phạt tù theo Điều 232 Bộ luật Hình sự",
    "explanation": "Điểm h Khoản 1 Điều 232 BLHS quy định khai thác trái phép gỗ loài nguy cấp quý hiếm Nhóm IA từ 0,5 m3 trở lên tại rừng đặc dụng đã bị truy cứu trách nhiệm hình sự với mức án đến 03 năm tù."
  },
  {
    "question": "Săn bắt, bẫy bắt hoặc nuôi nhốt trái phép cá thể động vật thuộc loài nguy cấp, quý, hiếm Nhóm IB (như tê tê, voọc...) thì sao?",
    "options": [
      "Nuôi 1 con làm cảnh thì không sao",
      "Chỉ cần từ 01 cá thể lớp thú Nhóm IB đã bị khởi tố hình sự phạt tù từ 01 năm đến 05 năm",
      "Chỉ bị phạt tiền 500.000 đồng nếu chưa đem bán",
      "Được phép nuôi nếu có chuồng sắt"
    ],
    "correct": "Chỉ cần từ 01 cá thể lớp thú Nhóm IB đã bị khởi tố hình sự phạt tù từ 01 năm đến 05 năm",
    "explanation": "Khoản 1 Điều 244 Bộ luật Hình sự quy định chỉ cần săn bắt, giết, nuôi nhốt từ 01 cá thể động vật thuộc lớp thú Nhóm IB hoặc Danh mục loài ưu tiên bảo vệ là cấu thành tội phạm hình sự rất nghiêm trọng."
  },
  {
    "question": "Người dân vận chuyển gỗ trái phép bằng xe máy hoặc xe ô tô tải thì phương tiện vận chuyển bị xử lý thế nào?",
    "options": [
      "Người vi phạm được trả lại xe ngay",
      "Phương tiện vận chuyển vi phạm có thể bị tịch thu sung công quỹ Nhà nước theo quy định",
      "Cơ quan Kiểm lâm phải bồi thường xăng cho chủ xe",
      "Chỉ phạt tiền người lái xe, không được giữ xe"
    ],
    "correct": "Phương tiện vận chuyển vi phạm có thể bị tịch thu sung công quỹ Nhà nước theo quy định",
    "explanation": "Điều 25 Nghị định 146/2026/NĐ-CP quy định tịch thu phương tiện vận chuyển (kể cả xe máy, ô tô, xe ba gác) sử dụng để vận chuyển lâm sản trái pháp luật thuộc trường hợp quy định."
  },
  {
    "question": "Mức phạt tiền thấp nhất đối với hành vi vận chuyển lâm sản trái pháp luật là bao nhiêu?",
    "options": [
      "Từ 500.000 đồng trở lên đối với khối lượng lâm sản nhỏ nhất",
      "Chỉ phạt từ 10.000 đồng",
      "Không bị phạt tiền nếu chở bằng xe đạp",
      "Khởi điểm từ 50.000.000 đồng"
    ],
    "correct": "Từ 500.000 đồng trở lên đối với khối lượng lâm sản nhỏ nhất",
    "explanation": "Điều 25 Nghị định 146/2026/NĐ-CP quy định mức xử phạt tiền thấp nhất đối với hành vi vận chuyển lâm sản trái phép khởi điểm từ 500.000 đồng và tăng lũy tiến theo khối lượng gỗ, lâm sản."
  },
  {
    "question": "Hành vi mua bán lâm sản (gỗ, động vật hoang dã) không có giấy tờ nguồn gốc hợp pháp bị xử phạt thế nào?",
    "options": [
      "Bị tịch thu toàn bộ lâm sản và bị xử phạt tiền rất nặng theo Nghị định 146/2026/NĐ-CP",
      "Không bị phạt nếu mua về để sử dụng trong gia đình",
      "Chỉ bị phạt người bán, người mua không có tội",
      "Được miễn phạt nếu trả tiền đầy đủ cho người bán"
    ],
    "correct": "Bị tịch thu toàn bộ lâm sản và bị xử phạt tiền rất nặng theo Nghị định 146/2026/NĐ-CP",
    "explanation": "Điều 26 Nghị định 146/2026/NĐ-CP quy định người tàng trữ, mua bán lâm sản trái pháp luật đều bị xử phạt tiền và tịch thu toàn bộ tang vật lâm sản không có nguồn gốc hợp pháp."
  },
  {
    "question": "Việc quảng cáo bán động vật hoang dã trái phép trên mạng xã hội (Facebook, Zalo, TikTok) có bị xử phạt không?",
    "options": [
      "Không bị phạt vì mạng xã hội là không gian ảo",
      "Bị xử phạt vi phạm hành chính nặng từ 1.000.000 đồng đến 15.000.000 đồng và gỡ bỏ bài đăng",
      "Chỉ bị khóa tài khoản mạng xã hội 1 ngày",
      "Được phép quảng cáo nếu không ghi rõ giá tiền"
    ],
    "correct": "Bị xử phạt vi phạm hành chính nặng từ 1.000.000 đồng đến 15.000.000 đồng và gỡ bỏ bài đăng",
    "explanation": "Điều 24 Nghị định 146/2026/NĐ-CP quy định hành vi quảng cáo kinh doanh động vật rừng và sản phẩm của chúng trái quy định bị phạt tiền từ 1 triệu đến 15 triệu đồng và buộc gỡ bỏ thông tin."
  },
  {
    "question": "Nuôi nhốt động vật rừng thông thường (như dúi, cầy vòi, nhím...) mà không khai báo với cơ quan Kiểm lâm bị xử lý thế nào?",
    "options": [
      "Không cần khai báo vì là động vật thông thường",
      "Bị xử phạt vi phạm hành chính về hành vi nuôi nhốt động vật rừng trái phép và bị tịch thu",
      "Chỉ cần khai báo với người hàng xóm",
      "Được chính quyền thưởng tiền khuyến khích"
    ],
    "correct": "Bị xử phạt vi phạm hành chính về hành vi nuôi nhốt động vật rừng trái phép và bị tịch thu",
    "explanation": "Nuôi động vật rừng thông thường bắt buộc phải có nguồn gốc hợp pháp và gửi thông báo trong 03 ngày làm việc cho Kiểm lâm sở tại (Điều 24 TT 85). Nếu nuôi lén lút sẽ bị phạt tiền và tịch thu vật nuôi."
  },
  {
    "question": "Hành vi sử dụng súng tự chế, bẫy kiềng sắt, lưới bắt chim để săn bắt chim thú trong rừng bị xử phạt thế nào?",
    "options": [
      "Bị tịch thu toàn bộ súng, bẫy, công cụ săn bắt và bị phạt tiền rất nặng",
      "Được phép dùng nếu là truyền thống của dòng họ",
      "Chỉ cấm ở đồng bằng, miền núi được dùng thoải mái",
      "Chỉ bị nhắc nhở không được bắn trúng người"
    ],
    "correct": "Bị tịch thu toàn bộ súng, bẫy, công cụ săn bắt và bị phạt tiền rất nặng",
    "explanation": "Sử dụng vũ khí tự chế, bẫy sắt, lưới tàng hình để săn bắt chim thú rừng là hành vi hủy diệt bị nghiêm cấm hoàn toàn; đối tượng vi phạm bị tịch thu công cụ, phạt tiền và có thể bị xử lý về vũ khí trái phép."
  },
  {
    "question": "Đốt lửa sưởi ấm trong rừng vào mùa hanh khô bất cẩn làm cháy 1.500 m2 rừng tự nhiên sản xuất thì người gây cháy bị sao?",
    "options": [
      "Chỉ bị phạt đền tiền cây rừng",
      "Bị khởi tố hình sự về tội Hủy hoại rừng theo Điều 243 Bộ luật Hình sự (khung từ 01 năm đến 05 năm tù)",
      "Không bị tội gì vì trời lạnh sưởi ấm là chính đáng",
      "Được xóa tội nếu tự nguyện trồng lại 1 cây con"
    ],
    "correct": "Bị khởi tố hình sự về tội Hủy hoại rừng theo Điều 243 Bộ luật Hình sự (khung từ 01 năm đến 05 năm tù)",
    "explanation": "Điều 243 BLHS quy định hành vi vô ý hay cố ý gây cháy rừng tự nhiên sản xuất từ 1.000 m2 trở lên đều bị truy cứu trách nhiệm hình sự với mức án phạt tù từ 01 đến 05 năm."
  },
  {
    "question": "Hành vi cản trở, chống đối cán bộ Kiểm lâm hoặc lực lượng bảo vệ rừng đang thi hành công vụ bị xử lý thế nào?",
    "options": [
      "Không sao vì cán bộ phải chịu đựng nhân dân",
      "Bị xử phạt hành chính nặng hoặc bị truy cứu trách nhiệm hình sự về tội 'Chống người thi hành công vụ'",
      "Chỉ cần bỏ chạy là thoát tội",
      "Chỉ bị phạt viết bản tự kiểm điểm"
    ],
    "correct": "Bị xử phạt hành chính nặng hoặc bị truy cứu trách nhiệm hình sự về tội 'Chống người thi hành công vụ'",
    "explanation": "Hành vi đe dọa, lăng mạ, dùng vũ lực cản trở Kiểm lâm khi đang làm nhiệm vụ bị xử lý nghiêm khắc theo Bộ luật Hình sự (Điều 330 Tội chống người thi hành công vụ) với mức án lên đến 07 năm tù."
  },
  {
    "question": "Tang vật là gỗ lậu bị cơ quan chức năng phát hiện, tạm giữ thì được xử lý như thế nào?",
    "options": [
      "Chia đều cho những người tham gia bắt giữ",
      "Tịch thu sung công quỹ Nhà nước để bán đấu giá hoặc chuyển giao theo quy định pháp luật",
      "Đem đốt bỏ toàn bộ để khỏi ai dùng",
      "Trả lại cho người vận chuyển nếu xin xỏ"
    ],
    "correct": "Tịch thu sung công quỹ Nhà nước để bán đấu giá hoặc chuyển giao theo quy định pháp luật",
    "explanation": "Lâm sản vi phạm pháp luật bị tịch thu trở thành tài sản thuộc sở hữu toàn dân; được xử lý theo phương án bán đấu giá nộp ngân sách nhà nước hoặc tiêu hủy nếu là hàng cấm, dịch bệnh."
  },
  {
    "question": "Hành vi chặt phá cây rừng để làm đường dây điện hoặc xây dựng lán trại khi chưa được cấp phép bị xử phạt thế nào?",
    "options": [
      "Được phép vì mục đích sinh hoạt",
      "Bị xử phạt về hành vi Phá rừng trái pháp luật và buộc tháo dỡ công trình, trồng lại diện tích rừng đã phá",
      "Chỉ bị phạt nếu chặt cây có đường kính trên 1 mét",
      "Không bị xử phạt nếu nộp tiền điện đầy đủ"
    ],
    "correct": "Bị xử phạt về hành vi Phá rừng trái pháp luật và buộc tháo dỡ công trình, trồng lại diện tích rừng đã phá",
    "explanation": "Mọi hành vi chặt hạ cây rừng để xây lán trại, mở đường mà không có quyết định phê duyệt chủ trương chuyển mục đích sử dụng rừng của cơ quan có thẩm quyền đều cấu thành hành vi phá rừng trái pháp luật."
  },
  {
    "question": "Người dân tự nguyện giao nộp động vật rừng quý hiếm đi lạc hoặc nuôi trước đây cho Nhà nước thì có bị đi tù không?",
    "options": [
      "Bị bắt bỏ tù ngay lập tức khi vừa bước chân vào cổng",
      "Được Nhà nước khoan hồng, không bị xử phạt và được cơ quan chức năng tiếp nhận để cứu hộ",
      "Bắt buộc phải nộp phạt 50 triệu đồng mới được giao nộp",
      "Không cơ quan nào tiếp nhận động vật giao nộp"
    ],
    "correct": "Được Nhà nước khoan hồng, không bị xử phạt và được cơ quan chức năng tiếp nhận để cứu hộ",
    "explanation": "Chính sách pháp luật luôn khuyến khích, khoan hồng và biểu dương công dân tự giác giao nộp động vật hoang dã cho cơ quan Kiểm lâm để thả về tự nhiên hoặc chăm sóc tại trung tâm cứu hộ."
  },
  {
    "question": "Trường hợp nào sau đây người dân đi rừng KHÔNG bị coi là vi phạm pháp luật?",
    "options": [
      "Mang cưa xăng vào rừng đặc dụng chặt hạ cây cổ thụ",
      "Đi trên đường mòn tuần tra rừng, thu nhặt củi khô gãy mục trong rừng sản xuất của gia đình",
      "Đặt bẫy dây phanh sắt bắt thú rừng",
      "Đổ hóa chất độc xuống suối đầu nguồn để bắt cá"
    ],
    "correct": "Đi trên đường mòn tuần tra rừng, thu nhặt củi khô gãy mục trong rừng sản xuất của gia đình",
    "explanation": "Công dân có quyền đi lại trên các tuyến đường dân sinh hợp pháp, tuần tra thăm nom rừng và thu nhặt phụ phẩm củi mục trong phạm vi rừng sản xuất được giao quản lý theo quy định."
  },
  {
    "question": "Hành vi đốt dọn thực bì không làm đường băng cản lửa, dù CHƯA LÀM CHÁY RỪNG thì có bị phạt không?",
    "options": [
      "Chưa cháy rừng thì không bao giờ bị phạt",
      "Vẫn bị xử phạt vi phạm hành chính về hành vi vi phạm quy định an toàn phòng cháy chữa cháy rừng",
      "Chỉ bị phạt nếu người khác chụp ảnh đưa lên mạng",
      "Chỉ bị phạt khi có khói bay vào mắt người khác"
    ],
    "correct": "Vẫn bị xử phạt vi phạm hành chính về hành vi vi phạm quy định an toàn phòng cháy chữa cháy rừng",
    "explanation": "Khoản 1 Điều 20 Nghị định 146/2026/NĐ-CP quy định hành vi đốt nương rẫy, đốt thực bì không làm đường băng cản lửa hoặc đốt trong mùa khô hanh nguy hiểm đã bị phạt tiền kể cả khi chưa làm cháy lan."
  },
  {
    "question": "Thông điệp quan trọng nhất mà mỗi người dân, chủ rừng cần ghi nhớ để vừa phát triển kinh tế vừa không vi phạm pháp luật là gì?",
    "options": [
      "Cứ chặt phá rừng trước rồi nộp phạt sau",
      "Bảo vệ rừng là bảo vệ nguồn sống; chỉ khai thác rừng trồng hợp pháp, không phá rừng tự nhiên và luôn cảnh giác phòng chống cháy rừng",
      "Không cần quan tâm đến pháp luật vì Kiểm lâm ở xa",
      "Rừng của ai người nấy lo, cháy rừng không việc gì phải giúp"
    ],
    "correct": "Bảo vệ rừng là bảo vệ nguồn sống; chỉ khai thác rừng trồng hợp pháp, không phá rừng tự nhiên và luôn cảnh giác phòng chống cháy rừng",
    "explanation": "Tuân thủ pháp luật lâm nghiệp giúp người dân bảo vệ tài sản, yên tâm canh tác làm giàu từ rừng trồng bền vững, ngăn ngừa nguy cơ bị xử phạt tiền hoặc vướng vào vòng lao lý vì hủy hoại tài nguyên rừng."
  },
  {
    "question": "Nguyên tắc 'ĐÚNG LUẬT' trong hoạt động phóng sinh động vật hoang dã được hiểu như thế nào?",
    "options": [
      "Tuyệt đối không săn bắt, mua bán, vận chuyển, nuôi nhốt hoặc phóng sinh động vật hoang dã trái quy định của pháp luật",
      "Được phép mua bất kỳ con thú nào ngoài chợ miễn là mục đích mua để thả phóng sinh tích đức",
      "Chỉ cần xin phép Trụ trì chùa là được phép thả mọi loài động vật vào rừng tự nhiên",
      "Được phép tự do bẫy bắt thú rừng về thả vào vườn nhà của người khác"
    ],
    "correct": "Tuyệt đối không săn bắt, mua bán, vận chuyển, nuôi nhốt hoặc phóng sinh động vật hoang dã trái quy định của pháp luật",
    "explanation": "Nguyên tắc ĐÚNG LUẬT: Phóng sinh phải tuân thủ nghiêm ngặt quy định pháp luật về bảo tồn ĐVHD, không tiếp tay cho hành vi săn bắt, buôn bán, nuôi nhốt động vật trái phép."
  },
  {
    "question": "Thế nào là phóng sinh 'ĐÚNG LOÀI' theo khuyến cáo của cơ quan Kiểm lâm và bảo tồn thiên nhiên?",
    "options": [
      "Lựa chọn loài bản địa phù hợp với hệ sinh thái; tuyệt đối không thả các loài ngoại lai xâm hại hoặc loài không phù hợp với môi trường sống",
      "Thả bất kỳ loài động vật nào mua được từ các gánh hàng rong trước cổng đền chùa",
      "Ưu tiên thả rùa tai đỏ, cá lau kính, tôm càng đỏ vì chúng có sức sống rất dai",
      "Chỉ phóng sinh các loài thú ăn thịt hung dữ để rèn luyện bản năng sinh tồn"
    ],
    "correct": "Lựa chọn loài bản địa phù hợp với hệ sinh thái; tuyệt đối không thả các loài ngoại lai xâm hại hoặc loài không phù hợp với môi trường sống",
    "explanation": "Nguyên tắc ĐÚNG LOÀI: Chỉ thả loài bản địa phù hợp sinh thái; nghiêm cấm phóng sinh sinh vật ngoại lai xâm hại vì chúng hủy hoại môi trường và cạnh tranh tiêu diệt loài bản địa."
  },
  {
    "question": "Nguyên tắc phóng sinh 'ĐÚNG NƠI' yêu cầu người dân phải lựa chọn sinh cảnh như thế nào khi tái thả động vật?",
    "options": [
      "Lựa chọn sinh cảnh phù hợp với tập tính sinh học của loài, bảo đảm có nguồn thức ăn, nước uống và điều kiện an toàn để con vật có thể sinh tồn lâu dài",
      "Thả rùa cạn xuống lòng sông sâu hoặc thả cá nước ngọt vào đầm nước mặn",
      "Thả ngay tại các điểm đông đúc dân cư, vỉa hè hoặc các khu chợ buôn bán thực phẩm",
      "Cứ thấy hồ nước nào gần nhà nhất là thả toàn bộ các loại chim, thú, bò sát xuống"
    ],
    "correct": "Lựa chọn sinh cảnh phù hợp với tập tính sinh học của loài, bảo đảm có nguồn thức ăn, nước uống và điều kiện an toàn để con vật có thể sinh tồn lâu dài",
    "explanation": "Nguyên tắc ĐÚNG NƠI: Sinh cảnh tái thả phải tương thích với đặc tính sinh học của loài; thả sai môi trường (như ném rùa cạn xuống sông) thực chất là hành vi giết chết con vật."
  },
  {
    "question": "Nguyên tắc phóng sinh 'ĐÚNG LÚC' có ý nghĩa gì đối với khả năng sống sót của động vật?",
    "options": [
      "Lựa chọn thời điểm thời tiết và môi trường phù hợp với khả năng thích nghi của loài (tránh thả giữa trưa nắng gắt hoặc mùa đông giá rét làm con vật sốc nhiệt, kiệt sức)",
      "Chỉ được phóng sinh vào đúng 12 giờ đêm ngày rằm tháng 7 âm lịch",
      "Phải thả ngay khi vừa mua từ chợ về bất chấp con vật đang ngạt thở trong túi nilon",
      "Chờ đến khi con vật bị ốm liệt không cử động được mới đem đi thả"
    ],
    "correct": "Lựa chọn thời điểm thời tiết và môi trường phù hợp với khả năng thích nghi của loài (tránh thả giữa trưa nắng gắt hoặc mùa đông giá rét làm con vật sốc nhiệt, kiệt sức)",
    "explanation": "Nguyên tắc ĐÚNG LÚC: Chọn thời điểm thuận lợi, thời tiết mát mẻ để động vật thích nghi môi trường sống mới, giảm thiểu tối đa rủi ro chết sau khi tái thả."
  },
  {
    "question": "Nguyên tắc phóng sinh 'ĐÚNG CÁCH' đòi hỏi người dân cần lưu ý điều gì trước và trong khi thả con vật?",
    "options": [
      "Nhận diện loài, đánh giá tình trạng sức khỏe con vật trước khi thả; thả nhẹ nhàng; trường hợp động vật hoang dã nguy cấp cần cứu hộ phải báo cơ quan Kiểm lâm",
      "Ném thật mạnh từ trên cầu cao xuống sông để con vật nhanh chóng bơi đi",
      "Để nguyên cả túi nilon và dây thừng buộc chặt chân con vật rồi vứt xuống nước",
      "Cắt bớt lông cánh của chim trước khi thả để chim bay lượn gần mặt đất"
    ],
    "correct": "Nhận diện loài, đánh giá tình trạng sức khỏe con vật trước khi thả; thả nhẹ nhàng; trường hợp động vật hoang dã nguy cấp cần cứu hộ phải báo cơ quan Kiểm lâm",
    "explanation": "Nguyên tắc ĐÚNG CÁCH: Kiểm tra sức khỏe, tháo bỏ bao bì nilon, dây buộc; thả nhẹ nhàng vào môi trường. Nếu là động vật rừng quý hiếm cần cứu hộ phải bàn giao cho Kiểm lâm."
  },
  {
    "question": "Hành vi mua động vật hoang dã (chim trời, rùa, rắn) tại các điểm bán rong trước cổng đền chùa để phóng sinh gây ra tác hại xã hội nào hàng đầu?",
    "options": [
      "Tạo áp lực săn bắt: Nhu cầu mua phóng sinh vô tình tiếp tay cho thợ bẫy bắt, gom hàng và kích thích đường dây buôn bán trái phép động vật hoang dã",
      "Làm tăng sản lượng nông nghiệp của các hộ nông dân vùng ven rừng",
      "Giúp người nghèo có thêm công ăn việc làm hợp pháp được nhà nước bảo hộ",
      "Làm phong phú thêm nguồn gen động vật quý hiếm trong các khu đô thị"
    ],
    "correct": "Tạo áp lực săn bắt: Nhu cầu mua phóng sinh vô tình tiếp tay cho thợ bẫy bắt, gom hàng và kích thích đường dây buôn bán trái phép động vật hoang dã",
    "explanation": "Tác hại 1: Tạo vòng luẩn quẩn 'bẫy bắt - bán - phóng sinh - bẫy bắt lại', vô tình tiếp tay cho các đối tượng tận diệt chim thú ngoài tự nhiên."
  },
  {
    "question": "Việc phóng sinh các loài sinh vật ngoại lai xâm hại (như rùa tai đỏ, cá lau kính, ốc bươu vàng) vào sông suối tự nhiên gây ra hậu quả gì?",
    "options": [
      "Gây mất cân bằng hệ sinh thái: Loài ngoại lai cạnh tranh thức ăn, nơi sống, phát tán dịch bệnh và tiêu diệt các loài thủy sinh bản địa",
      "Cải thiện chất lượng nguồn nước ngọt sinh hoạt của các hộ dân trong vùng",
      "Tạo nguồn thức ăn dồi dào giúp bảo tồn các loài cá quý hiếm",
      "Không gây ảnh hưởng gì vì thiên nhiên tự có cơ chế đào thải tự nhiên"
    ],
    "correct": "Gây mất cân bằng hệ sinh thái: Loài ngoại lai cạnh tranh thức ăn, nơi sống, phát tán dịch bệnh và tiêu diệt các loài thủy sinh bản địa",
    "explanation": "Tác hại 2: Sinh vật ngoại lai có tốc độ sinh sản nhanh, phàm ăn, lấn át và tiêu diệt các loài bản địa, làm suy thoái đa dạng sinh học hệ sinh thái nước ngọt."
  },
  {
    "question": "Thả phóng sinh những cá thể động vật bị thương tật, suy kiệt sức khỏe hoặc nuôi nhốt lâu ngày sẽ dẫn đến hậu quả gì cho chính con vật?",
    "options": [
      "Gây tổn hại cho chính con vật: Động vật suy yếu, mất khả năng tự kiếm ăn sẽ bị chết đói, chết ngạt hoặc phát tán mầm bệnh nguy hiểm ra môi trường",
      "Giúp con vật nhanh chóng hồi phục thể lực kỳ diệu trong vài giờ",
      "Con vật tự động tìm được đường trở về với chuồng trại ban đầu",
      "Tạo kháng thể tự nhiên giúp con vật miễn nhiễm với mọi loại virus"
    ],
    "correct": "Gây tổn hại cho chính con vật: Động vật suy yếu, mất khả năng tự kiếm ăn sẽ bị chết đói, chết ngạt hoặc phát tán mầm bệnh nguy hiểm ra môi trường",
    "explanation": "Tác hại 3: Thả động vật suy yếu, gãy cánh, nhiễm bệnh khiến chúng chết đau đớn ngay sau khi thả hoặc mang mầm bệnh lây nhiễm cho quần thể hoang dã."
  },
  {
    "question": "Tình huống: Chị B vào ngày rằm mua 2 con rùa tai đỏ từ người bán dạo mang ra hồ nước cạnh đền gần bìa rừng thả phóng sinh. Hành vi của chị B bị đánh giá như thế nào?",
    "options": [
      "Sai quy định: Rùa tai đỏ là loài ngoại lai xâm hại nguy hiểm, hành vi phát tán vào tự nhiên bị pháp luật nghiêm cấm và bị xử phạt hành chính",
      "Hoàn toàn đúng vì chị B có tâm thiện nguyện cầu bình an cho gia đình",
      "Hợp pháp nếu chị B thả rùa vào lúc trời mưa râm mát",
      "Chỉ bị nhắc nhở nếu rùa tai đỏ bò lên bờ cắn người"
    ],
    "correct": "Sai quy định: Rùa tai đỏ là loài ngoại lai xâm hại nguy hiểm, hành vi phát tán vào tự nhiên bị pháp luật nghiêm cấm và bị xử phạt hành chính",
    "explanation": "Phát tán loài ngoại lai xâm hại (rùa tai đỏ) vi phạm Điều 43 Nghị định 45/2022/NĐ-CP về bảo vệ môi trường, bị phạt tiền từ 1 triệu đến hàng chục triệu đồng."
  },
  {
    "question": "Tình huống: Anh A thấy người bán dạo chở lồng chim sẻ, chim sâu kiệt sức trước cổng chùa, anh A mua hết 50 con đem lên sườn đồi bìa rừng mở lồng thả. Khi thả ra có hơn 20 con chết tại chỗ. Nhận định nào đúng nhất về việc làm của anh A?",
    "options": [
      "Phóng sinh sai cách: Mua chim bẫy bắt vừa tiếp tay cho nạn săn bẫy chim trời, vừa làm chim bị chết ngạt, sốc nhiệt và gây ô nhiễm môi trường",
      "Là hành động đại từ bi đáng được chính quyền địa phương khen thưởng",
      "Đúng luật vì chim sẻ là loài chim thông thường không bị cấm săn bắt",
      "Anh A không có lỗi vì trách nhiệm làm chết chim thuộc về người bán lồng"
    ],
    "correct": "Phóng sinh sai cách: Mua chim bẫy bắt vừa tiếp tay cho nạn săn bẫy chim trời, vừa làm chim bị chết ngạt, sốc nhiệt và gây ô nhiễm môi trường",
    "explanation": "Mua chim kiệt sức để phóng sinh là tiếp tay tiêu thụ động vật bẫy bắt trái phép; chim chết hàng loạt gây tổn hại phúc lợi động vật và ô nhiễm sinh thái."
  },
  {
    "question": "Vào các dịp lễ Thanh minh, Vu lan, rằm tháng 7 và ngày Tết, tại sao nguy cơ cháy rừng tại Tuyên Quang lại đặc biệt tăng cao?",
    "options": [
      "Do người dân gia tăng hoạt động tín ngưỡng, đi tảo mộ, thắp hương và đốt vàng mã bất cẩn tại các nghĩa địa, đồi nương nằm xen kẽ hoặc giáp ranh với rừng",
      "Do nhiệt độ mùa đông tại Tuyên Quang luôn nóng gay gắt trên 45 độ C",
      "Do các loài thú rừng tự cọ xát cơ thể vào thân cây làm bốc cháy",
      "Do sấm sét tự nhiên xuất hiện liên tục trong cả tháng Tết âm lịch"
    ],
    "correct": "Do người dân gia tăng hoạt động tín ngưỡng, đi tảo mộ, thắp hương và đốt vàng mã bất cẩn tại các nghĩa địa, đồi nương nằm xen kẽ hoặc giáp ranh với rừng",
    "explanation": "Thực tế tại Tuyên Quang và miền núi, dịp tảo mộ Thanh minh, Tết, rằm tháng 7 là mùa hanh khô, việc thắp hương đốt vàng mã gần rừng là nguyên nhân hàng đầu gây cháy rừng."
  },
  {
    "question": "Khi đi tảo mộ, thăm viếng nghĩa trang hoặc thực hiện nghi lễ gần khu vực rừng, quy tắc sử dụng lửa an toàn nào là BẮT BUỘC?",
    "options": [
      "Không đốt vàng mã khi trời nắng nóng, gió mạnh; không thắp hương gần bìa rừng, thảm thực vật khô; luôn có người trông coi và dập tắt hoàn toàn tàn lửa trước khi về",
      "Được phép gom lá thông khô xung quanh mộ lại để đốt vàng mã cho cháy to",
      "Chỉ cần thắp hương cắm vào gốc cây to rồi đi về ngay không cần chờ tàn",
      "Đốt vàng mã ngay trên thảm cỏ khô dưới tán rừng keo vào buổi trưa"
    ],
    "correct": "Không đốt vàng mã khi trời nắng nóng, gió mạnh; không thắp hương gần bìa rừng, thảm thực vật khô; luôn có người trông coi và dập tắt hoàn toàn tàn lửa trước khi về",
    "explanation": "Khuyến cáo an toàn PCCC rừng: Cấm đốt lửa khi gió to nắng gắt; dọn sạch thảm khô quanh chân hương; túc trực trông coi và dập tắt than hoàn toàn trước khi rời đi."
  },
  {
    "question": "Hành động nào sau đây bị nghiêm cấm tuyệt đối khi đi lễ hội, viếng mộ gần bìa rừng?",
    "options": [
      "Vứt tàn hương, tàn thuốc lá hoặc than củi chưa tắt hẳn vào bụi cây, thảm thực vật khô ven rừng",
      "Mang theo chai nước sạch để dập tắt tàn hương sau khi cúng lễ",
      "Dọn sạch cỏ rác khô xung quanh phần mộ trước khi thắp nén hương",
      "Báo cho Kiểm lâm địa bàn khi thấy có khói lạ bốc lên từ phía sườn rừng"
    ],
    "correct": "Vứt tàn hương, tàn thuốc lá hoặc than củi chưa tắt hẳn vào bụi cây, thảm thực vật khô ven rừng",
    "explanation": "Vứt tàn thuốc, tàn hương còn than đỏ vào thảm lá khô mùa hanh khô là nguyên nhân trực tiếp phát sinh cháy rừng, bị xử phạt nặng theo Điều 16 NĐ 146/2026/NĐ-CP."
  },
  {
    "question": "Trước khi rời khỏi khu vực thắp hương, đốt vàng mã gần bìa rừng, người dân phải kiểm tra và xử lý tàn tro như thế nào?",
    "options": [
      "Dập tắt hoàn toàn tàn lửa, tàn hương và than đỏ bằng nước hoặc phủ đất cát dầy; bảo đảm không còn khói hoặc đốm lửa âm ỉ",
      "Chỉ cần thổi nhẹ bằng miệng cho bớt khói rồi ra về",
      "Dùng cành lá cây khô quét phủ lên đống than đang đỏ rực để giấu đi",
      "Cứ để than tự tàn tự nhiên vì gió rừng sẽ thổi nguội dần"
    ],
    "correct": "Dập tắt hoàn toàn tàn lửa, tàn hương và than đỏ bằng nước hoặc phủ đất cát dầy; bảo đảm không còn khói hoặc đốm lửa âm ỉ",
    "explanation": "Phải dùng nước tưới đẫm hoặc xúc đất chôn lấp dập tắt triệt để than hồng; than âm ỉ gặp gió quẩn chiều muộn sẽ bùng phát thành đám cháy rừng lớn."
  },
  {
    "question": "Khi phát hiện có đám cháy rừng hoặc khói bốc lên gần bìa rừng, người dân cần xử lý như thế nào là nhanh chóng và đúng nhất?",
    "options": [
      "Hô hoán người xung quanh hỗ trợ ngăn chặn dập lửa ban đầu và báo ngay cho lực lượng Kiểm lâm, chính quyền xã hoặc Cảnh sát PCCC gần nhất",
      "Lẳng lặng bỏ về nhà đóng kín cửa coi như mình không nhìn thấy",
      "Chờ đến khi lửa lan sang nương nhà mình thì mới đi tìm người giúp",
      "Đăng bài lên mạng xã hội chờ người khác gọi điện báo công an"
    ],
    "correct": "Hô hoán người xung quanh hỗ trợ ngăn chặn dập lửa ban đầu và báo ngay cho lực lượng Kiểm lâm, chính quyền xã hoặc Cảnh sát PCCC gần nhất",
    "explanation": "Khi phát hiện cháy rừng phải lập tức báo động tại chỗ và gọi đường dây nóng Kiểm lâm/UBND xã để kích hoạt phương châm '4 tại chỗ' dập lửa ngay từ khi mới chớm."
  },
  {
    "question": "Tình huống: Ông C đi tảo mộ dịp tiết Thanh minh ở sườn đồi, đốt vàng mã xong gặp gió to cuốn tàn lửa vào rừng keo gây cháy 0,5 ha rừng. Ông C sẽ bị xử lý như thế nào?",
    "options": [
      "Bị xử phạt vi phạm hành chính hoặc truy cứu trách nhiệm hình sự về tội vi phạm quy định PCCC rừng, đồng thời phải bồi thường toàn bộ thiệt hại về rừng",
      "Không bị xử lý vì việc đốt vàng mã là phong tục tập quán tâm linh truyền thống",
      "Chỉ bị phê bình nhắc nhở tại cuộc họp thôn cuối năm",
      "Được Nhà nước hỗ trợ tiền bồi thường thiệt hại cho chủ rừng keo"
    ],
    "correct": "Bị xử phạt vi phạm hành chính hoặc truy cứu trách nhiệm hình sự về tội vi phạm quy định PCCC rừng, đồng thời phải bồi thường toàn bộ thiệt hại về rừng",
    "explanation": "Vô ý để lửa cháy lan vào rừng bị phạt tiền nặng theo Điều 16 NĐ 146/2026/NĐ-CP hoặc khởi tố hình sự theo Điều 313 BLHS và phải bồi thường thiệt hại dân sự."
  },
  {
    "question": "Đối với cây cảnh có nguồn gốc từ vườn nhà hoặc khai thác trên đất thổ cư của hộ gia đình, pháp luật lâm nghiệp có quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp' không?",
    "options": [
      "Pháp luật hiện hành KHÔNG quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp'; việc chứng minh nguồn gốc thực hiện thông qua hồ sơ lâm sản (Bảng kê lâm sản) theo Thông tư 26/2025/TT-BNNMT",
      "Bắt buộc phải xin Giấy xác nhận nguồn gốc hợp pháp của Giám đốc Sở Nông nghiệp và Môi trường",
      "Chỉ có Chủ tịch UBND cấp xã mới có quyền cấp Giấy chứng nhận nguồn gốc cây vườn nhà",
      "Mọi cây cảnh trồng trong vườn nhà đều bị cấm mua bán ra ngoài tỉnh"
    ],
    "correct": "Pháp luật hiện hành KHÔNG quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp'; việc chứng minh nguồn gốc thực hiện thông qua hồ sơ lâm sản (Bảng kê lâm sản) theo Thông tư 26/2025/TT-BNNMT",
    "explanation": "Pháp luật lâm nghiệp không có thủ tục 'Cấp giấy xác nhận nguồn gốc hợp pháp' cho cây vườn nhà; tính hợp pháp được xác lập qua Bảng kê lâm sản và hồ sơ theo TT 26/2025/TT-BNNMT."
  },
  {
    "question": "Trường hợp cây cảnh vườn nhà là loài cây gỗ thông thường (không thuộc loài nguy cấp, quý hiếm), khi xuất bán vận chuyển có bắt buộc phải xin xác nhận Bảng kê lâm sản của Kiểm lâm không?",
    "options": [
      "KHÔNG thuộc đối tượng buộc phải xác nhận; chủ cây tự lập Bảng kê lâm sản. Trường hợp chủ cây có nhu cầu tự nguyện đề nghị xác nhận thì cơ quan Kiểm lâm sẽ tiếp nhận xác nhận",
      "Bắt buộc 100% trường hợp phải có xác nhận có đóng dấu đỏ của Hạt trưởng Hạt Kiểm lâm",
      "Phải được Bộ trưởng Bộ Nông nghiệp và Môi trường ký phê duyệt từng cây",
      "Chỉ cần người mua tự viết giấy tay là hợp pháp không cần Bảng kê lâm sản"
    ],
    "correct": "KHÔNG thuộc đối tượng buộc phải xác nhận; chủ cây tự lập Bảng kê lâm sản. Trường hợp chủ cây có nhu cầu tự nguyện đề nghị xác nhận thì cơ quan Kiểm lâm sẽ tiếp nhận xác nhận",
    "explanation": "Điểm đ Khoản 3 Điều 5 Thông tư 26/2025/TT-BNNMT: Cây gỗ loài thông thường không buộc xác nhận Bảng kê; Kiểm lâm chỉ xác nhận khi chủ lâm sản có nhu cầu tự nguyện."
  },
  {
    "question": "Trường hợp cây cảnh vườn nhà là loài thực vật rừng thuộc Danh mục nguy cấp, quý, hiếm (Nhóm IA, IIA) hoặc Phụ lục CITES, hồ sơ đề nghị Kiểm lâm xác nhận Bảng kê lâm sản gồm những gì?",
    "options": [
      "Bản chính Đơn đề nghị xác nhận Bảng kê (Mẫu số 03), Bản chính Bảng kê lâm sản và Bản sao Phương án khai thác theo Mẫu số 08",
      "Chỉ cần nộp bản sao Giấy khai sinh của chủ vườn cây",
      "Chỉ cần một bức ảnh chụp cây hoa đăng lên mạng xã hội",
      "Phải nộp sổ đỏ bản gốc lưu giữ vĩnh viễn tại cơ quan Kiểm lâm"
    ],
    "correct": "Bản chính Đơn đề nghị xác nhận Bảng kê (Mẫu số 03), Bản chính Bảng kê lâm sản và Bản sao Phương án khai thác theo Mẫu số 08",
    "explanation": "Khoản 6 Điều 5 Thông tư 26/2025/TT-BNNMT: Hồ sơ gồm Đơn đề nghị xác nhận Mẫu 03, Bảng kê lâm sản và Phương án khai thác lập theo Mẫu số 08 Phụ lục II."
  },
  {
    "question": "Người dân khi nộp hồ sơ đề nghị xác nhận Bảng kê lâm sản cho cây cảnh tại Cơ quan Kiểm lâm sở tại có phải nộp khoản tiền phí hay lệ phí nào không?",
    "options": [
      "Hoàn toàn KHÔNG thu phí; thủ tục xác nhận nguồn gốc lâm sản được cơ quan Kiểm lâm thực hiện miễn phí theo quy định",
      "Phải nộp lệ phí bằng 10% giá trị ước tính của cây cảnh",
      "Phải nộp cố định 2.000.000 đồng lệ phí đóng dấu xác nhận",
      "Tùy thuộc vào thỏa thuận miệng giữa người dân và cán bộ tiếp nhận hồ sơ"
    ],
    "correct": "Hoàn toàn KHÔNG thu phí; thủ tục xác nhận nguồn gốc lâm sản được cơ quan Kiểm lâm thực hiện miễn phí theo quy định",
    "explanation": "Thủ tục xác nhận Bảng kê lâm sản của cơ quan Kiểm lâm là dịch vụ hành chính công không thu phí, lệ phí của người dân và doanh nghiệp."
  },
  {
    "question": "Tình huống: Anh M có 02 cây mai cổ thụ trồng lâu năm trên đất thổ cư muốn chở sang tỉnh khác bán. Anh M đến Hạt Kiểm lâm xin 'Giấy xác nhận nguồn gốc cây cảnh'. Cán bộ Kiểm lâm hướng dẫn thế nào là chuẩn xác?",
    "options": [
      "Giải thích pháp luật không có thủ tục cấp giấy này; hướng dẫn anh M tự lập Bảng kê lâm sản, nếu anh M tự nguyện đề nghị thì Kiểm lâm tiếp nhận xác nhận Bảng kê hoàn toàn miễn phí",
      "Yêu cầu anh M phải nộp phạt 5 triệu đồng vì tự ý đào cây vườn nhà khi chưa xin phép",
      "Từ chối tiếp và bảo anh M muốn chở đi đâu thì tùy ý không cần giấy tờ gì",
      "Thu giữ luôn 02 cây mai của anh M để xác minh lai lịch nguồn gốc"
    ],
    "correct": "Giải thích pháp luật không có thủ tục cấp giấy này; hướng dẫn anh M tự lập Bảng kê lâm sản, nếu anh M tự nguyện đề nghị thì Kiểm lâm tiếp nhận xác nhận Bảng kê hoàn toàn miễn phí",
    "explanation": "Cán bộ Kiểm lâm hướng dẫn theo Thông tư 26/2025/TT-BNNMT: pháp luật không cấp 'giấy xác nhận nguồn gốc', chủ cây tự lập Bảng kê hoặc đề nghị xác nhận tự nguyện không thu phí."
  },
  {
    "question": "Tại sao khi xác định tính pháp lý và danh mục quản lý của một loài cây rừng, cây cảnh, căn cứ khoa học chính thức duy nhất bắt buộc phải sử dụng là gì?",
    "options": [
      "Tên khoa học (tên Latinh) của loài; tên thông thường bằng tiếng Việt hoặc tiếng Anh chỉ có giá trị tham khảo",
      "Tên gọi dân gian truyền miệng của người dân cao tuổi tại địa phương",
      "Tên thương mại do các nhà vườn kinh doanh sinh vật cảnh tự đặt cho hấp dẫn",
      "Màu sắc của hoa và mùi thơm của quả khi chín"
    ],
    "correct": "Tên khoa học (tên Latinh) của loài; tên thông thường bằng tiếng Việt hoặc tiếng Anh chỉ có giá trị tham khảo",
    "explanation": "Theo quy định quốc tế và pháp luật lâm nghiệp, tên khoa học (Latinh) là tên chính thức duy nhất xác định loài; tên tiếng Việt/tiếng Anh chỉ có giá trị tham khảo vì dễ trùng lặp, nhầm lẫn."
  },
  {
    "question": "Người dân nhặt được một cá thể tê tê hoặc cu li bò vào vườn nhà thì cách xử lý nào sau đây thể hiện đúng tinh thần phóng sinh và đúng pháp luật?",
    "options": [
      "Thông báo ngay cho Cơ quan Kiểm lâm sở tại hoặc Trung tâm cứu hộ động vật hoang dã để tiếp nhận, cứu hộ và tái thả đúng quy trình bảo tồn",
      "Tự mình mang ra khu rừng gần nhất thả ngay mà không cần kiểm tra sức khỏe con vật",
      "Đem ra chợ bán cho phật tử mua phóng sinh lấy tiền làm từ thiện",
      "Nhốt lại trong chuồng gà nuôi dưỡng làm cảnh cho con cháu xem"
    ],
    "correct": "Thông báo ngay cho Cơ quan Kiểm lâm sở tại hoặc Trung tâm cứu hộ động vật hoang dã để tiếp nhận, cứu hộ và tái thả đúng quy trình bảo tồn",
    "explanation": "Động vật rừng nguy cấp quý hiếm (tê tê, cu li) cần được cơ quan chuyên môn (Kiểm lâm, Cứu hộ) kiểm dịch, phục hồi tập tính trước khi tái thả về sinh cảnh an toàn."
  },
  {
    "question": "Hành vi dùng lửa hun khói bắt tổ ong rừng vào mùa khô hanh tiềm ẩn nguy cơ pháp lý và xã hội nào?",
    "options": [
      "Vi phạm nghiêm trọng quy định PCCC rừng; tàn lửa rất dễ gây cháy lan rừng tự nhiên, người vi phạm bị phạt tiền hoặc phạt tù và bồi thường thiệt hại",
      "Được khuyến khích vì giúp người dân có thêm thu nhập từ sáp và mật ong rừng",
      "Chỉ bị phạt nếu tổ ong nằm trong bán kính 10 mét cách trụ sở UBND xã",
      "Hoàn toàn vô hại vì khói thuốc làm ong ngủ say không gây cháy"
    ],
    "correct": "Vi phạm nghiêm trọng quy định PCCC rừng; tàn lửa rất dễ gây cháy lan rừng tự nhiên, người vi phạm bị phạt tiền hoặc phạt tù và bồi thường thiệt hại",
    "explanation": "Dùng lửa đốt tổ ong rừng là nguyên nhân phổ biến gây cháy rừng mùa khô ở vùng cao; hành vi này bị cấm và bị xử phạt theo Điều 16 NĐ 146/2026/NĐ-CP hoặc Điều 313 BLHS."
  },
  {
    "question": "Khi người dân làm nương rẫy thu dọn cỏ khô, tàn dư sau thu hoạch thì thời điểm nào trong ngày TUYỆT ĐỐI KHÔNG ĐƯỢC đốt dọn?",
    "options": [
      "Buổi trưa nắng gắt, hanh khô, có gió to và khi cấp dự báo cháy rừng đang ở Cấp IV (Cấp nguy hiểm), Cấp V (Cấp cực kỳ nguy hiểm)",
      "Sáng sớm khi sương mù còn dày và gió lặng",
      "Chiều tối khi mặt trời đã lặn và không khí mát mẻ",
      "Ngày trời râm mát có mưa phùn lất phất"
    ],
    "correct": "Buổi trưa nắng gắt, hanh khô, có gió to và khi cấp dự báo cháy rừng đang ở Cấp IV (Cấp nguy hiểm), Cấp V (Cấp cực kỳ nguy hiểm)",
    "explanation": "Điều 47 NĐ 156/2018/NĐ-CP nghiêm cấm đốt dọn nương rẫy, thực bì vào thời điểm nắng to, gió lớn và khi dự báo cháy rừng từ Cấp IV, Cấp V trở lên."
  },
  {
    "question": "Hộ gia đình có cây xanh bóng mát trồng trên đất ở bị gãy đổ do bão đè vào tường rào nhà hàng xóm, việc giải quyết thiệt hại thực hiện theo nguyên tắc nào?",
    "options": [
      "Hai bên thương lượng bồi thường thiệt hại dân sự theo quy định của Bộ luật Dân sự về bồi thường thiệt hại do cây cối gây ra; dọn dẹp bảo đảm an toàn",
      "Bắt buộc cơ quan Kiểm lâm phải đứng ra bồi thường thay cho chủ cây",
      "Người bị cây đổ đè vào nhà phải tự chịu chi phí sửa chữa không được khiếu nại",
      "UBND xã phải bỏ ngân sách nhà nước ra đền bù toàn bộ thiệt hại"
    ],
    "correct": "Hai bên thương lượng bồi thường thiệt hại dân sự theo quy định của Bộ luật Dân sự về bồi thường thiệt hại do cây cối gây ra; dọn dẹp bảo đảm an toàn",
    "explanation": "Điều 604 Bộ luật Dân sự quy định chủ sở hữu, người chiếm hữu cây cối phải bồi thường thiệt hại do cây cối gây ra cho người khác."
  },
  {
    "question": "Hành vi chặt phá các cây gỗ cổ thụ trong rừng đầu nguồn để lấy phong lan rừng mang bán cho người chơi hoa lan bị xử phạt về hành vi gì?",
    "options": [
      "Hành vi khai thác rừng và thực vật rừng trái pháp luật; bị xử phạt VPHC, tịch thu tang vật, phương tiện hoặc xử lý hình sự tùy theo mức độ thiệt hại",
      "Chỉ là hành vi vi phạm trật tự công cộng thông thường",
      "Được pháp luật bảo hộ quyền tự do khai thác tài nguyên thiên nhiên",
      "Chỉ bị tịch thu hoa lan, hành vi đốn hạ cây gỗ không bị xem xét"
    ],
    "correct": "Hành vi khai thác rừng và thực vật rừng trái pháp luật; bị xử phạt VPHC, tịch thu tang vật, phương tiện hoặc xử lý hình sự tùy theo mức độ thiệt hại",
    "explanation": "Chặt cây rừng lấy phong lan cấu thành hành vi khai thác rừng và thực vật rừng trái phép theo Điều 13, 15 NĐ 146/2026/NĐ-CP hoặc Điều 232 BLHS."
  },
  {
    "question": "Tình huống: Anh D đi xe máy qua bìa rừng thấy người ta vừa đốt vàng mã xong để lại đám tro than đang bốc khói dữ dội sắp bén vào đồi cỏ tranh. Anh D nên làm gì?",
    "options": [
      "Dừng xe, hô hoán người gần đó dùng cành cây, đất cát hoặc nước dập ngay đốm lửa, đồng thời gọi điện báo Kiểm lâm hoặc chính quyền địa phương",
      "Tăng ga phóng xe đi thật nhanh để tránh bị hiểu nhầm là người gây cháy",
      "Đứng quay clip livestream câu like trên mạng xã hội rồi bỏ đi",
      "Ném thêm que củi vào xem lửa có cháy to thành bão lửa hay không"
    ],
    "correct": "Dừng xe, hô hoán người gần đó dùng cành cây, đất cát hoặc nước dập ngay đốm lửa, đồng thời gọi điện báo Kiểm lâm hoặc chính quyền địa phương",
    "explanation": "Mỗi công dân có nghĩa vụ tham gia PCCC; phát hiện tàn lửa có nguy cơ bùng phát phải kịp thời dập tắt hoặc báo động cơ quan chức năng ứng cứu ngay."
  },
  {
    "question": "Ý nghĩa nhân văn và đúng đắn nhất của việc 'phóng sinh' trong xã hội văn minh hiện nay là gì?",
    "options": [
      "Bảo vệ sinh cảnh sống tự nhiên, tích cực tham gia trồng cây gây rừng, không tiêu thụ thịt thú rừng và không tiếp tay cho hoạt động bẫy bắt động vật hoang dã",
      "Càng bỏ nhiều tiền ra mua động vật nhốt trong lồng đem thả thì công đức càng lớn",
      "Chỉ cần phóng sinh vào ngày rằm tháng 7 là được xóa hết mọi lỗi lầm vi phạm",
      "Bắt động vật ngoài rừng về nhốt trong nhà rồi thả ra trong sân vườn gia đình"
    ],
    "correct": "Bảo vệ sinh cảnh sống tự nhiên, tích cực tham gia trồng cây gây rừng, không tiêu thụ thịt thú rừng và không tiếp tay cho hoạt động bẫy bắt động vật hoang dã",
    "explanation": "Phóng sinh đích thực là bảo vệ môi trường, không tiếp tay săn bẫy, bảo vệ sự sống tự nhiên của muôn loài thay vì hình thức mua bán chim thú bẫy bắt."
  },
  {
    "question": "Trường hợp người dân phát hiện một đối tượng mang theo lưới tàng hình và loa phát tiếng chim giả vào khu rừng gần nhà để bẫy chim di cư thì nên báo cho ai?",
    "options": [
      "Báo ngay cho Kiểm lâm địa bàn, Trưởng thôn hoặc Công an cấp xã để tiến hành kiểm tra, ngăn chặn và tịch thu dụng cụ bẫy bắt theo quy định",
      "Đến học hỏi kinh nghiệm bẫy chim để về làm theo kiếm thêm thu nhập",
      "Mặc kệ vì chim trời tự nhiên ai bắt được thì người đó hưởng",
      "Báo cho cơ quan Khí tượng thủy văn tỉnh để theo dõi hướng gió"
    ],
    "correct": "Báo ngay cho Kiểm lâm địa bàn, Trưởng thôn hoặc Công an cấp xã để tiến hành kiểm tra, ngăn chặn và tịch thu dụng cụ bẫy bắt theo quy định",
    "explanation": "Người dân có trách nhiệm thông báo cho Kiểm lâm địa bàn hoặc Công an xã xử lý nghiêm hành vi dùng lưới tàng hình bẫy bắt chim di cư theo Chỉ thị 04/CT-TTg."
  }
];
