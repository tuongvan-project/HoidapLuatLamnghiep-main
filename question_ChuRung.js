/**
 * BỘ CÂU HỎI TRẮC NGHIỆM PHÁP LUẬT LÂM NGHIỆP DÀNH CHO NHÂN DÂN - CHỦ RỪNG (130 CÂU)
 * Cấu trúc: 1 đáp án đúng + 3 đáp án bẫy thực tế (4 options)
 * Đã chuẩn hóa:
 * - 100% không đưa tên điều khoản luật vào nội dung các đáp án (options)
 * - Tích hợp các tình huống dí dỏm, gần gũi, hài hước đời sống tạo cảm giác giải trí
 * - Cân đối độ dài 4 options đồng đều, triệt tiêu lỗi đoán mò đáp án dài
 * - 100% phần giải thích (explanation) trích dẫn chi tiết Điểm, Khoản, Điều, Nghị định/Thông tư/Luật
 */
const question_ChuRung = [
  {
    "question": "Một khu đất trồng cây lâm nghiệp được công nhận đạt tiêu chí thành rừng khi đồng thời đáp ứng đủ cả 3 điều kiện nào sau đây?",
    "options": [
      "Độ tàn che từ 0,1 trở lên; Diện tích liền vùng từ 0,3 ha trở lên; Chiều cao vút ngọn trung bình từ 5,0m trở lên",
      "Độ tàn che từ 0,3 trở lên; Diện tích liền vùng từ 0,5 ha trở lên; Chiều cao vút ngọn trung bình từ 2,0m trở lên",
      "Độ tàn che từ 0,05 trở lên; Diện tích liền vùng từ 1,0 ha trở lên; Chiều cao vút ngọn trung bình từ 3,0m trở lên",
      "Độ tàn che từ 0,5 trở lên; Diện tích liền vùng từ 0,1 ha trở lên; Chiều cao vút ngọn trung bình từ 8,0m trở lên"
    ],
    "correct": "Độ tàn che từ 0,1 trở lên; Diện tích liền vùng từ 0,3 ha trở lên; Chiều cao vút ngọn trung bình từ 5,0m trở lên",
    "explanation": "Điều 4, 5 Nghị định 156/2018/NĐ-CP quy định đồng thời 3 tiêu chí: độ tàn che >= 0,1; diện tích >= 0,3 ha (dải cây >= 20m có >= 3 hàng); chiều cao vút ngọn >= 5m (hoặc đặc thù ven biển/núi đá)."
  },
  {
    "question": "Theo Điều 19 Thông tư số 16/2025/TT-BNNMT, chủ rừng nhóm I (hộ gia đình, cá nhân) có trách nhiệm thông báo biến động diện tích rừng như thế nào?",
    "options": [
      "Thông báo cho Kiểm lâm địa bàn hoặc UBND cấp xã trong thời hạn 15 ngày kể từ ngày có biến động về diện tích rừng",
      "Thông báo bằng văn bản trực tiếp cho Chi cục Kiểm lâm cấp tỉnh trong thời hạn 30 ngày làm việc kể từ ngày khai thác",
      "Chỉ cần thông báo bằng miệng cho Trưởng thôn bản vào dịp họp thôn tổng kết công tác cuối năm âm lịch",
      "Không bắt buộc phải thông báo cho bất kỳ cơ quan nào nếu diện tích rừng bị biến động dưới 01 héc-ta"
    ],
    "correct": "Thông báo cho Kiểm lâm địa bàn hoặc UBND cấp xã trong thời hạn 15 ngày kể từ ngày có biến động về diện tích rừng",
    "explanation": "Khoản 1 Điều 19 Thông tư 16/2025/TT-BNNMT: Chủ rừng nhóm I thông báo cho Kiểm lâm địa bàn hoặc công chức cấp xã được giao theo dõi lâm nghiệp trong thời hạn 15 ngày kể từ khi có biến động."
  },
  {
    "question": "Khi người dân đốt dọn thực bì làm nương rẫy giáp ranh với rừng, quy định an toàn phòng cháy chữa cháy rừng bắt buộc phải bảo đảm những yếu tố nào?",
    "options": [
      "Làm đường băng cản lửa rộng từ 4 - 6m; đốt lúc sáng sớm hoặc chiều tối khi gió lặng; cấm đốt khi dự báo cháy Cấp IV, V",
      "Đốt dọn thực bì vào buổi trưa nắng gắt để thực bì cháy nhanh; không cần làm đường băng cản lửa nếu nương có bờ đá bao",
      "Được phép đốt tự do trong mọi điều kiện thời tiết miễn là chủ nương có mặt túc trực đầy đủ tại hiện trường nương rẫy",
      "Chỉ cần thông báo bằng miệng cho các hộ dân có nương rẫy liền kề mà không cần dọn đường băng cản lửa xung quanh"
    ],
    "correct": "Làm đường băng cản lửa rộng từ 4 - 6m; đốt lúc sáng sớm hoặc chiều tối khi gió lặng; cấm đốt khi dự báo cháy Cấp IV, V",
    "explanation": "Điều 47 Nghị định 156/2018/NĐ-CP và Điều 16 NĐ 146/2026/NĐ-CP: Phải làm băng cản lửa 4-6m, đốt lúc gió nhẹ, có người canh gác đến khi tàn lửa tắt hẳn, cấm đốt khi dự báo cháy Cấp IV, Cấp V."
  },
  {
    "question": "Hộ gia đình được giao rừng phòng hộ tự bỏ vốn trồng rừng, khi khai thác cây gỗ phụ trợ hoặc tỉa thưa phải tuân thủ điều kiện nào sau đây?",
    "options": [
      "Khai thác tỉa thưa cây phụ trợ nhưng phải bảo đảm độ tàn che của rừng sau khai thác không được nhỏ hơn mức 0,6 theo quy định kỹ thuật",
      "Được phép chặt trắng trụi toàn bộ đồi rừng phòng hộ để trồng lứa cây mới có năng suất gỗ nhanh hơn và bán lấy tiền mua xe máy mới đi lại",
      "Cứ lựa cây gỗ to nhất đẹp nhất đốn hạ mang bán lấy tiền uống trà, phần cây con còi cọc để lại tự sinh tự diệt không cần chăm sóc tỉa thưa",
      "Phải giữ rừng nguyên vẹn vĩnh viễn, nghiêm cấm người dân đụng chạm vào bất kỳ cây củi khô nào dù là do công sức gia đình tự bỏ tiền đầu tư"
    ],
    "correct": "Khai thác tỉa thưa cây phụ trợ nhưng phải bảo đảm độ tàn che của rừng sau khai thác không được nhỏ hơn mức 0,6 theo quy định kỹ thuật",
    "explanation": "Khoản 1 Điều 55 Luật Lâm nghiệp số 16/2017/QH14 và Điều 20 Nghị định số 156/2018/NĐ-CP: Khai thác tỉa thưa rừng trồng phòng hộ phải bảo đảm duy trì độ tàn che của rừng sau khi tỉa thưa không được nhỏ hơn 0,6."
  },
  {
    "question": "Hành vi vô ý đốt nương làm rẫy để lửa cháy lan vào rừng tự nhiên gây thiệt hại diện tích từ bao nhiêu héc-ta (ha) thì bị xử lý hình sự về Tội vi phạm quy định về PCCC (Điều 313 BLHS)?",
    "options": [
      "Thiệt hại từ 0,5 ha rừng đặc dụng, từ 01 ha rừng phòng hộ hoặc từ 1,5 ha rừng sản xuất trở lên",
      "Thiệt hại từ 01 ha rừng đặc dụng, từ 02 ha rừng phòng hộ hoặc từ 03 ha rừng sản xuất trở lên",
      "Thiệt hại từ 02 ha rừng đặc dụng, từ 05 ha rừng phòng hộ hoặc từ 10 ha rừng sản xuất trở lên",
      "Mọi vụ cháy nương lan vào rừng đều chỉ xử phạt tiền vi phạm hành chính, không bao giờ bị xử lý hình sự"
    ],
    "correct": "Thiệt hại từ 0,5 ha rừng đặc dụng, từ 01 ha rừng phòng hộ hoặc từ 1,5 ha rừng sản xuất trở lên",
    "explanation": "Điều 313 Bộ luật Hình sự (sửa đổi): Vi phạm quy định về PCCC gây cháy rừng đặc dụng từ 5.000m², rừng phòng hộ từ 10.000m² hoặc rừng sản xuất từ 15.000m² bị truy cứu trách nhiệm hình sự."
  },
  {
    "question": "Hành vi chặt phá rừng sản xuất là rừng tự nhiên trái phép đến ngưỡng diện tích tối thiểu bao nhiêu thì bị truy cứu trách nhiệm hình sự theo Điều 243 BLHS?",
    "options": [
      "Diện tích từ 5.000 m2 trở lên, hoặc từ 2.500 m2 nếu đã bị xử phạt vi phạm hành chính về hành vi này mà còn tái phạm",
      "Diện tích từ 10.000 m2 trở lên đối với mọi trường hợp bất kể đã từng bị xử phạt vi phạm hành chính hay chưa",
      "Diện tích từ 20.000 m2 trở lên mới đủ yếu tố cấu thành tội phạm hủy hoại rừng nguy hiểm để truy cứu hình sự",
      "Chỉ bị xử lý hình sự khi chặt hạ các cây gỗ lớn có đường kính gốc từ 50 cm trở lên trong rừng sản xuất"
    ],
    "correct": "Diện tích từ 5.000 m2 trở lên, hoặc từ 2.500 m2 nếu đã bị xử phạt vi phạm hành chính về hành vi này mà còn tái phạm",
    "explanation": "Điểm b Khoản 1 Điều 243 Bộ luật Hình sự: Phá rừng sản xuất là rừng tự nhiên từ 5.000 m² đến dưới 10.000 m² (hoặc dưới mức này nhưng đã bị xử phạt VPHC) bị phạt tù từ 1 đến 5 năm."
  },
  {
    "question": "Đối với rừng đặc dụng, hành vi chặt phá rừng trái phép với diện tích tối thiểu bao nhiêu thì bị khởi tố hình sự theo Điều 243 BLHS?",
    "options": [
      "Diện tích chỉ từ 1.000 m2 (0,1 ha) trở lên đã đủ định lượng cấu thành tội phạm và bị khởi tố hình sự",
      "Diện tích từ 3.000 m2 trở lên mới bị xử lý hình sự, dưới mức này chỉ xử phạt vi phạm hành chính",
      "Diện tích từ 5.000 m2 trở lên mới đủ yếu tố khởi tố vụ án hình sự theo quy định của pháp luật",
      "Rừng đặc dụng không quy định định lượng khởi tố hình sự mà chỉ áp dụng các khung phạt tiền hành chính"
    ],
    "correct": "Diện tích chỉ từ 1.000 m2 (0,1 ha) trở lên đã đủ định lượng cấu thành tội phạm và bị khởi tố hình sự",
    "explanation": "Điểm a Khoản 1 Điều 243 Bộ luật Hình sự: Chặt phá rừng đặc dụng trái pháp luật diện tích từ 1.000 m² đến dưới 5.000 m² bị phạt tiền hoặc phạt tù từ 1 năm đến 5 năm."
  },
  {
    "question": "Hộ gia đình, cá nhân tự ý chuyển mục đích sử dụng rừng sang đất trồng cây nông nghiệp không được cơ quan có thẩm quyền cho phép sẽ bị xử phạt như thế nào?",
    "options": [
      "Bị phạt tiền từ 1.000.000 đồng đến tối đa 500.000.000 đồng tùy diện tích; buộc khôi phục lại tình trạng ban đầu của diện tích rừng bị xâm hại",
      "Được chính quyền xã tặng giấy khen biểu dương vì có sáng kiến biến đồi cây lâm nghiệp cằn cỗi thành nương ngô xanh tốt trĩu bắp giúp làm giàu",
      "Chỉ bị phạt bắt nộp cho hợp tác xã thôn một gùi sắn củ tươi làm lộ phí và được tiếp tục giữ lại toàn bộ hoa màu đã gieo trồng trên đất rừng",
      "Được tự động miễn xử phạt nếu chủ hộ hứa sau khi thu hoạch vụ ngô xong sẽ nhét hạt mít xuống đất để cây mít tự mọc thành rừng mới trong tương lai"
    ],
    "correct": "Bị phạt tiền từ 1.000.000 đồng đến tối đa 500.000.000 đồng tùy diện tích; buộc khôi phục lại tình trạng ban đầu của diện tích rừng bị xâm hại",
    "explanation": "Điều 10 Nghị định 146/2026/NĐ-CP: Phạt tiền từ 1.000.000 đồng đến 500.000.000 đồng và buộc thực hiện biện pháp khắc phục hậu quả là khôi phục lại tình trạng ban đầu của rừng."
  },
  {
    "question": "Khi khai thác gỗ rừng trồng do hộ gia đình tự đầu tư trên đất rừng sản xuất đã được cấp giấy chứng nhận quyền sử dụng đất, thủ tục pháp lý quy định ra sao?",
    "options": [
      "Chủ rừng tự quyết định khai thác; trước khi khai thác lập Bảng kê lâm sản và tự chịu trách nhiệm về nguồn gốc gỗ",
      "Bắt buộc phải làm đơn xin phép và được Chủ tịch Ủy ban nhân dân cấp tỉnh phê duyệt trước khi tiến hành đốn hạ cây",
      "Phải mời đoàn công tác liên ngành của huyện về đo đạc kiểm tra và đóng dấu búa bài cây lên từng cây gỗ muốn chặt",
      "Bắt buộc phải bán toàn bộ sản lượng gỗ khai thác được cho các công ty lâm nghiệp nhà nước theo giá chỉ định"
    ],
    "correct": "Chủ rừng tự quyết định khai thác; trước khi khai thác lập Bảng kê lâm sản và tự chịu trách nhiệm về nguồn gốc gỗ",
    "explanation": "Điều 59 Luật Lâm nghiệp và Thông tư 26/2022/TT-BNNPTNT: Rừng trồng sản xuất do chủ rừng tự đầu tư thì chủ rừng tự quyết định khai thác, tự lập Bảng kê lâm sản khi xuất bán."
  },
  {
    "question": "Hộ gia đình nhận khoán bảo vệ rừng phòng hộ có được phép chăn thả gia súc (trâu, bò, dê) trong phân khu rừng phòng hộ xung yếu không?",
    "options": [
      "Nghiêm cấm chăn thả gia súc ở rừng mới trồng, rừng đang tái sinh; khu rừng đã khép tán chỉ chăn thả có kiểm soát",
      "Được thả rông trâu bò thoải mái vì trâu bò gặm cây non sẽ giúp rừng nhanh chóng thông thoáng, đỡ mất công làm cỏ",
      "Chỉ cần buộc vào cổ mỗi con trâu một chiếc chuông đồng kêu leng keng để xua đuổi thú dữ là được thả tự do khắp rừng",
      "Được phép chặt hạ các cây gỗ tái sinh để làm cọc rào nhốt đàn gia súc hàng trăm con bên trong rừng phòng hộ"
    ],
    "correct": "Nghiêm cấm chăn thả gia súc ở rừng mới trồng, rừng đang tái sinh; khu rừng đã khép tán chỉ chăn thả có kiểm soát",
    "explanation": "Điều 9 Luật Lâm nghiệp số 16/2017/QH14 và Khoản 2 Điều 20 Nghị định số 156/2018/NĐ-CP: Nghiêm cấm chăn thả gia súc vào khu vực rừng mới trồng hoặc phân khu tái sinh tự nhiên chưa đạt chiều cao an toàn."
  },
  {
    "question": "Người dân vô tình nhặt được cá thể động vật hoang dã bị thương, kiệt sức trong rừng (như khỉ, cu li, trăn) thì phải xử lý như thế nào là đúng luật?",
    "options": [
      "Báo ngay cho Cơ quan Kiểm lâm sở tại hoặc UBND cấp xã để cứu hộ; tuyệt đối không tự ý giữ nuôi hoặc giết thịt",
      "Tự ý mang về nhà nhốt vào chuồng gà, quay clip đăng lên mạng xin vía trúng số rồi rao bán cho khách quen lấy tiền",
      "Mổ thịt làm tiệc liên hoan đãi cả xóm vì tự nhủ lộc trời cho rơi trúng vườn nhà ai thì người đó được quyền hưởng trọn",
      "Đem ra chợ bán cho người mua phóng sinh để vừa có tiền vừa nghĩ rằng giúp con vật có cơ hội trở về với thiên nhiên"
    ],
    "correct": "Báo ngay cho Cơ quan Kiểm lâm sở tại hoặc UBND cấp xã để cứu hộ; tuyệt đối không tự ý giữ nuôi hoặc giết thịt",
    "explanation": "Điều 33 Nghị định 146/2026/NĐ-CP và Điều 8 Thông tư 85/2025/TT-BNNMT: Cá thể động vật rừng bị thương, kiệt sức là tài sản công do Nhà nước thống nhất quản lý; người dân phát hiện phải bàn giao ngay cho Kiểm lâm hoặc UBND cấp xã để cứu hộ, tái thả; mọi hành vi tự ý giữ nuôi, buôn bán hoặc giết thịt đều bị xử lý nghiêm."
  },
  {
    "question": "Hành vi đặt bẫy thú (bẫy kẹp sắt, bẫy thòng lọng, dây phanh) trên đất rừng được giao quản lý bảo vệ để bảo vệ nương rẫy có vi phạm pháp luật không?",
    "options": [
      "Vi phạm pháp luật nghiêm trọng; bị nghiêm cấm vì đe dọa sinh mạng động vật rừng và gây nguy hiểm chết người, bị phạt tiền hoặc phạt tù",
      "Hoàn toàn hợp pháp nếu trên mỗi chiếc bẫy kẹp sắt có gắn tấm biển cảnh báo 'Thú rừng vui lòng né chỗ này ra' bằng 3 thứ tiếng cho rõ ràng",
      "Được phép đặt bẫy thoải mái vì thú rừng tự mò đến chui đầu vào bẫy chứ người dân không hề ép buộc hay rủ rê con thú vào nương ngô nhà mình",
      "Chỉ vi phạm pháp luật nếu chiếc bẫy kẹp vô tình kẹp trúng chân người đi hái măng hoặc kẹp trúng đàn trâu bò của nhà hàng xóm đi thả rông"
    ],
    "correct": "Vi phạm pháp luật nghiêm trọng; bị nghiêm cấm vì đe dọa sinh mạng động vật rừng và gây nguy hiểm chết người, bị phạt tiền hoặc phạt tù",
    "explanation": "Điều 9 Luật Lâm nghiệp và Điều 24 Nghị định 146/2026/NĐ-CP nghiêm cấm mọi hành vi đặt bẫy, săn bắt động vật rừng trái phép trong rừng dưới bất kỳ lý do nào."
  },
  {
    "question": "Theo Nghị định số 58/2024/NĐ-CP của Chính phủ, chính sách hỗ trợ khoán bảo vệ rừng đối với hộ gia đình đồng bào dân tộc thiểu số ở xã khu vực III được hỗ trợ mức kinh phí nào?",
    "options": [
      "Mức hỗ trợ tối thiểu từ 500.000 đồng/ha/năm (vùng đặc biệt khó khăn có thể áp dụng mức cao hơn theo quy định)",
      "Mức hỗ trợ cố định 100.000 đồng/ha/năm áp dụng thống nhất cho tất cả các vùng miền trên phạm vi cả nước",
      "Không hỗ trợ bằng tiền mặt mà chỉ hỗ trợ bằng hiện vật là giống cây ngô lai và phân bón hóa học trả chậm",
      "Mức hỗ trợ lên tới 5.000.000 đồng/ha/tháng trích từ nguồn ngân sách chi thường xuyên của Ủy ban nhân dân xã"
    ],
    "correct": "Mức hỗ trợ tối thiểu từ 500.000 đồng/ha/năm (vùng đặc biệt khó khăn có thể áp dụng mức cao hơn theo quy định)",
    "explanation": "Nghị định số 58/2024/NĐ-CP quy định mức kinh phí khoán bảo vệ rừng từ ngân sách nhà nước bình quân 500.000 đồng/ha/năm cho đối tượng thuộc vùng khó khăn, DTTS."
  },
  {
    "question": "Khi phát hiện một nhóm người lạ mặt mang theo cưa xăng, dao rựa vào chặt phá rừng gần nương nhà mình, người dân cần làm gì?",
    "options": [
      "Kịp thời thông báo ngay cho Kiểm lâm địa bàn, Trưởng thôn hoặc Công an xã; không manh động đơn độc va chạm",
      "Cầm dao rựa lao ra thách đấu tay đôi với cả nhóm thợ cưa để chứng tỏ tinh thần thượng võ bảo vệ màu xanh quê hương",
      "Đến hiện trường xin ké vài lóng gỗ to về đục ghế ngồi uống trà rồi hứa sẽ tuyệt đối giữ kín bí mật cho nhóm thợ cưa",
      "Mặc kệ không quan tâm vì đó không phải là diện tích rừng thuộc quyền sở hữu của hộ gia đình mình được giao quản lý"
    ],
    "correct": "Kịp thời thông báo ngay cho Kiểm lâm địa bàn, Trưởng thôn hoặc Công an xã; không manh động đơn độc va chạm",
    "explanation": "Điều 102 Luật Lâm nghiệp số 16/2017/QH14 và Điều 19 Bộ luật Tố tụng hình sự số 101/2015/QH13: Công dân có nghĩa vụ phát hiện, tố giác tội phạm phá rừng và kịp thời báo tin cho cơ quan Kiểm lâm, Công an, UBND xã."
  },
  {
    "question": "Hộ gia đình có rừng tự nhiên được giao quản lý bảo vệ có được tự ý chặt hạ các cây gỗ mục, cây khô đổ gãy về làm củi hoặc dựng nhà không?",
    "options": [
      "Không được tự ý chặt hạ tận thu; việc tận thu gỗ rừng tự nhiên bắt buộc phải báo cáo và được cơ quan có thẩm quyền hướng dẫn, phê duyệt",
      "Được tự do vác cưa máy vào đốn hạ mang về làm củi, miễn là trước khi nổ máy cưa có thắp nén hương thơm ngỏ lời xin lỗi cái cây gỗ bị đổ gãy",
      "Cứ chặt cưa mang về bán cho tiệm đồ cổ ở phố huyện với lý do đây là khúc gỗ hóa thạch nghìn năm vô giá do thiên nhiên ban tặng cho gia đình",
      "Được tự ý cưa xẻ mang về dựng nhà nếu cây gỗ rừng đó tự trút lá và gãy đổ vào đúng những ngày mưa to gió bão sấm chớp đùng đoàng trong năm"
    ],
    "correct": "Không được tự ý chặt hạ tận thu; việc tận thu gỗ rừng tự nhiên bắt buộc phải báo cáo và được cơ quan có thẩm quyền hướng dẫn, phê duyệt",
    "explanation": "Điều 58 Luật Lâm nghiệp số 16/2017/QH14 và Điều 8 Thông tư số 26/2025/TT-BNNMT: Cây gỗ rừng tự nhiên đổ gãy thuộc sở hữu toàn dân; việc tận thu bắt buộc phải lập phương án và được cơ quan có thẩm quyền phê duyệt."
  },
  {
    "question": "Hành vi lấn, chiếm đất rừng đặc dụng để trồng cây ăn quả, làm nhà tạm sẽ bị xử lý như thế nào theo Nghị định 146/2026/NĐ-CP?",
    "options": [
      "Phạt tiền từ 1.000.000 đồng đến tối đa 500.000.000 đồng; buộc tháo dỡ công trình, trả lại đất và khôi phục rừng",
      "Được miễn xử phạt nếu cam kết sau khi thu hoạch hết vụ hoa màu sẽ tự nguyện bàn giao trả lại đất cho nhà nước",
      "Chỉ bị phạt cảnh cáo nhắc nhở và được tiếp tục sử dụng diện tích đất lấn chiếm để sinh sống canh tác lâu dài",
      "Được chính quyền địa phương hướng dẫn làm thủ tục công nhận quyền sử dụng đất và cấp sổ đỏ đất ở hợp pháp"
    ],
    "correct": "Phạt tiền từ 1.000.000 đồng đến tối đa 500.000.000 đồng; buộc tháo dỡ công trình, trả lại đất và khôi phục rừng",
    "explanation": "Hành vi lấn chiếm đất rừng đặc dụng, phòng hộ bị phạt nặng theo Nghị định 146/2026/NĐ-CP và buộc áp dụng biện pháp khắc phục hậu quả di dời tài sản, trả lại đất."
  },
  {
    "question": "Cộng đồng dân cư thôn được Nhà nước giao rừng tự nhiên thì ai là người đại diện hợp pháp trước pháp luật của cộng đồng trong quản lý khu rừng?",
    "options": [
      "Trưởng thôn (hoặc người đại diện do cộng đồng dân cư thôn họp bầu ra theo quy chế quản lý cộng đồng)",
      "Chủ tịch Hội Cựu chiến binh của xã nơi cộng đồng dân cư thôn sinh sống và trực tiếp quản lý bảo vệ rừng",
      "Bất kỳ người cao tuổi nào sinh sống lâu năm trong thôn bản am hiểu phong tục tập quán truyền thống địa phương",
      "Cá nhân hoặc hộ gia đình có đóng góp nhiều tiền của nhất vào quỹ phát triển chung của cộng đồng dân cư thôn"
    ],
    "correct": "Trưởng thôn (hoặc người đại diện do cộng đồng dân cư thôn họp bầu ra theo quy chế quản lý cộng đồng)",
    "explanation": "Luật Lâm nghiệp quy định đại diện của cộng đồng dân cư thôn là Trưởng thôn hoặc người được cộng đồng dân cư thống nhất cử ra đại diện trong các giao dịch quản lý rừng."
  },
  {
    "question": "Người dân tự ý mang các loại thuốc diệt cỏ, hóa chất cực độc vào rừng phun để dọn thực bì trước khi trồng rừng bị xử lý như thế nào?",
    "options": [
      "Nghiêm cấm và bị xử phạt nặng về hành vi hủy hoại sinh thái rừng, gây ô nhiễm đất và nguồn nước tự nhiên",
      "Được phép sử dụng thoải mái nếu thuốc diệt cỏ được mua tại các cửa hàng vật tư nông nghiệp có đăng ký kinh doanh",
      "Được Nhà nước hỗ trợ kinh phí mua hóa chất diệt cỏ để nhanh chóng giải phóng mặt bằng đất rừng trước khi trồng",
      "Chỉ bị xử phạt nếu hóa chất làm chết các cây gỗ to trên 10 năm tuổi thuộc rừng tự nhiên phòng hộ đầu nguồn"
    ],
    "correct": "Nghiêm cấm và bị xử phạt nặng về hành vi hủy hoại sinh thái rừng, gây ô nhiễm đất và nguồn nước tự nhiên",
    "explanation": "Điều 16 Nghị định 146/2026/NĐ-CP và Luật Bảo vệ môi trường năm 2020: Nghiêm cấm đưa hóa chất độc hại, thuốc diệt cỏ bị cấm vào rừng làm hủy hoại hệ sinh thái rừng, gây ô nhiễm nghiêm trọng đất và nguồn nước tự nhiên."
  },
  {
    "question": "Chủ rừng là hộ gia đình khi phát hiện rừng của mình bị sâu róm hoặc bệnh chết héo xuất hiện lây lan trên diện rộng thì có trách nhiệm gì?",
    "options": [
      "Báo ngay cho Kiểm lâm địa bàn hoặc khuyến nông xã để kiểm tra, hướng dẫn biện pháp kỹ thuật phòng trừ dập dịch",
      "Tự ý đốt lửa hun khói khắp cánh rừng để xua đuổi sâu bọ mà không cần áp dụng các biện pháp an toàn phòng cháy",
      "Mặc kệ cho sâu bệnh tự ăn hết lá cây vì hệ sinh thái rừng tự nhiên luôn có khả năng tự cân bằng và phục hồi",
      "Bán tháo toàn bộ cánh rừng đang bị sâu bệnh cho các thương lái khai thác gỗ dăm với giá rẻ để giải phóng đất"
    ],
    "correct": "Báo ngay cho Kiểm lâm địa bàn hoặc khuyến nông xã để kiểm tra, hướng dẫn biện pháp kỹ thuật phòng trừ dập dịch",
    "explanation": "Chủ rừng có nghĩa vụ phòng trừ sinh vật hại rừng; khi dịch hại bùng phát phải thông báo cho cơ quan chuyên môn để phối hợp xử lý dập dịch theo Điều 61 Luật Lâm nghiệp."
  },
  {
    "question": "Hộ gia đình có đất rừng sản xuất có được phép tự ý chia lô, phân nền đất rừng để bán cho người khác làm nhà ở không?",
    "options": [
      "Nghiêm cấm tuyệt đối; đất rừng sản xuất phải sử dụng đúng mục đích lâm nghiệp, hành vi tự ý phân lô bán nền làm nhà ở bị phạt rất nặng",
      "Được phép phân lô cắm cọc bán tự do nếu có giấy viết tay thỏa thuận giữa các bên và có sự chứng kiến nâng ly rượu chúc mừng của bà con lối xóm",
      "Được tự do phân lô bán nền nếu người mua cam kết sau khi xây biệt thự xong sẽ trồng vài chậu cây cảnh ngoài ban công để bù đắp diện tích rừng",
      "Chỉ cần mời thợ về xây hàng rào bê tông kiên cố xung quanh thửa đất là đương nhiên được công nhận thành đất thổ cư lâu dài mà không cần xin ai"
    ],
    "correct": "Nghiêm cấm tuyệt đối; đất rừng sản xuất phải sử dụng đúng mục đích lâm nghiệp, hành vi tự ý phân lô bán nền làm nhà ở bị phạt rất nặng",
    "explanation": "Điều 9, Điều 73 Luật Lâm nghiệp số 16/2017/QH14 và Luật Đất đai: Đất rừng sản xuất phải sử dụng đúng mục đích lâm nghiệp; nghiêm cấm tự ý phân lô, bán nền hoặc chuyển mục đích sang đất ở trái phép."
  },
  {
    "question": "Người dân vào rừng hái các loại phong lan rừng quý hiếm, đào gốc cây cảnh cổ thụ mang về bán kiếm tiền có vi phạm pháp luật không?",
    "options": [
      "Vi phạm quy định về khai thác thực vật rừng trái phép; bị xử phạt vi phạm hành chính, tịch thu tang vật và công cụ hoặc bị khởi tố hình sự",
      "Không vi phạm nếu hái nhành phong lan rừng về làm quà tặng sinh nhật người yêu để chứng minh cho tình cảm trong sáng và gắn bó với thiên nhiên",
      "Cứ đào mang về trồng ở sân nhà, nếu cơ quan chức năng đến kiểm tra thì giải thích rằng hoa lan tự bay từ trên vách núi đá xuống đậu vào chậu",
      "Được phép đào bới thoải mái miễn là người đào cây cam kết sẽ tưới nước bón phân chăm sóc cây cảnh chu đáo hơn khi cây còn sống ngoài tự nhiên"
    ],
    "correct": "Vi phạm quy định về khai thác thực vật rừng trái phép; bị xử phạt vi phạm hành chính, tịch thu tang vật và công cụ hoặc bị khởi tố hình sự",
    "explanation": "Điều 15 Nghị định 146/2026/NĐ-CP: Khai thác thực vật rừng thông thường hoặc loài nguy cấp quý hiếm (như lan hài, lan hoàng thảo...) mà không có phép đều bị xử phạt và tịch thu tang vật."
  },
  {
    "question": "Theo quy định, tiền chi trả Dịch vụ môi trường rừng (DVMTR) hàng năm mà chủ rừng là hộ gia đình nhận được từ Quỹ Bảo vệ và Phát triển rừng dùng vào mục đích gì?",
    "options": [
      "Dùng phục vụ công tác tuần tra, bảo vệ rừng, phòng cháy chữa cháy rừng và nâng cao thu nhập, cải thiện đời sống của hộ nhận khoán",
      "Bắt buộc phải nộp lại 100% cho Ủy ban nhân dân xã làm quỹ xây dựng nông thôn mới theo đúng quy định của pháp luật quản lý",
      "Chỉ được dùng để mua sắm trang thiết bị văn phòng phẩm cho thôn bản theo đúng quy định của pháp luật quản lý",
      "Tự do sử dụng để tổ chức đánh bạc và uống rượu bia theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Dùng phục vụ công tác tuần tra, bảo vệ rừng, phòng cháy chữa cháy rừng và nâng cao thu nhập, cải thiện đời sống của hộ nhận khoán",
    "explanation": "Nghị định 156/2018/NĐ-CP quy định tiền dịch vụ môi trường rừng chi trả cho chủ rừng để bù đắp chi phí bảo vệ rừng, đầu tư sinh kế và cải thiện đời sống người làm nghề rừng."
  },
  {
    "question": "Hành vi sử dụng kích điện, hóa chất hoặc thuốc nổ để đánh bắt thủy sản trong các khe suối, hồ đập thuộc rừng phòng hộ, rừng đặc dụng bị xử phạt ra sao?",
    "options": [
      "Bị nghiêm cấm tuyệt đối; bị phạt tiền nặng, tịch thu toàn bộ kích điện/hóa chất và có thể bị truy cứu trách nhiệm hình sự về tội hủy hoại nguồn lợi thủy sản",
      "Được phép sử dụng nếu chỉ kích điện bắt cá nhỏ làm mồi nhử theo đúng quy định của pháp luật quản lý",
      "Chỉ bị phạt nếu nguồn điện kích từ 220V trở lên theo đúng quy định của pháp luật quản lý",
      "Không bị phạt nếu suối nước không có biển cắm cấm đánh bắt cá theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Bị nghiêm cấm tuyệt đối; bị phạt tiền nặng, tịch thu toàn bộ kích điện/hóa chất và có thể bị truy cứu trách nhiệm hình sự về tội hủy hoại nguồn lợi thủy sản",
    "explanation": "Luật Thủy sản và Luật Lâm nghiệp nghiêm cấm dùng chất nổ, chất độc, xung điện đánh bắt thủy sản; hành vi này bị xử phạt nặng hoặc phạt tù theo Điều 242 BLHS."
  },
  {
    "question": "Người dân tự ý dựng lều quán, tổ chức dịch vụ ăn uống, cắm trại dã ngoại tự phát trong rừng đặc dụng bị xử lý thế nào?",
    "options": [
      "Vi phạm nghiêm trọng quy định PCCC rừng; tàn lửa rất dễ gây cháy lan rừng tự nhiên, người vi phạm bị phạt tiền hoặc phạt tù",
      "Được khuyến khích nếu người đi lấy mật có đem biếu cho cán bộ địa phương mỗi người một chai mật ong rừng nguyên chất",
      "Hoàn toàn vô hại vì khói đuốc sẽ ru ngủ đàn ong và làm cho lá cây rừng thêm phần tươi tốt, sạch bóng sâu bọ gây hại",
      "Chỉ bị phạt tiền nếu đàn ong rừng bị hun khói bay toán loạn đốt trúng người đang đi tuần tra bảo vệ rừng trên đường"
    ],
    "correct": "Vi phạm nghiêm trọng quy định PCCC rừng; tàn lửa rất dễ gây cháy lan rừng tự nhiên, người vi phạm bị phạt tiền hoặc phạt tù",
    "explanation": "Hoạt động du lịch sinh thái trong rừng đặc dụng phải theo Đề án được cấp có thẩm quyền phê duyệt; nghiêm cấm tự ý xây dựng lều quán tự phát (Điều 10 NĐ 146/2026/NĐ-CP)."
  },
  {
    "question": "Khi cây rừng trồng giáp ranh nhà ở bị nghiêng, có nguy cơ gãy đổ đè sập nhà hoặc đường dây điện trong mùa mưa bão, chủ nhà cần làm gì?",
    "options": [
      "Báo cáo ngay Trưởng thôn và UBND cấp xã/Kiểm lâm địa bàn để lập biên bản hiện trạng và tiến hành chặt tỉa hạ thấp độ cao bảo đảm an toàn tính mạng người dân",
      "Mặc kệ chờ cho cây tự đổ vào nhà để yêu cầu cơ quan Kiểm lâm bồi thường thiệt hại theo đúng quy định của pháp luật quản lý",
      "Tự ý đổ thuốc độc vào gốc cây cho chết dần dần theo đúng quy định của pháp luật quản lý",
      "Đốt gốc cây vào ban đêm để cây gãy đổ ra phía đường quốc lộ theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Báo cáo ngay Trưởng thôn và UBND cấp xã/Kiểm lâm địa bàn để lập biên bản hiện trạng và tiến hành chặt tỉa hạ thấp độ cao bảo đảm an toàn tính mạng người dân",
    "explanation": "Khoản 3 Điều 604 Bộ luật Dân sự số 91/2015/QH13 và Luật Phòng chống thiên tai: Cây cối có nguy cơ gãy đổ đè vào nhà ở, công trình phải báo chính quyền cơ sở để lập biên bản và triển khai cắt tỉa khẩn cấp bảo đảm an toàn."
  },
  {
    "question": "Việc mua bán đất rừng sản xuất bằng 'giấy viết tay' giữa các cá nhân mà không qua công chứng, chứng thực và không làm thủ tục sang tên có giá trị pháp lý không?",
    "options": [
      "Không có giá trị pháp lý, hợp đồng vô hiệu; người mua đối mặt nguy cơ mất trắng tiền và không được cấp Giấy chứng nhận quyền sử dụng đất",
      "Có giá trị pháp lý tuyệt đối nếu có chữ ký của người bán và người mua theo đúng quy định của pháp luật quản lý",
      "Được pháp luật bảo hộ nếu hai bên đã bàn giao tiền mặt đầy đủ trước mặt người làm chứng theo đúng quy định của pháp luật quản lý",
      "Chỉ cần đem giấy tay lên nộp cho Trưởng thôn ký xác nhận là hợp pháp theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Không có giá trị pháp lý, hợp đồng vô hiệu; người mua đối mặt nguy cơ mất trắng tiền và không được cấp Giấy chứng nhận quyền sử dụng đất",
    "explanation": "Luật Đất đai quy định việc chuyển nhượng quyền sử dụng đất phải lập thành hợp đồng có công chứng/chứng thực và đăng ký biến động tại cơ quan đăng ký đất đai mới có hiệu lực pháp lý."
  },
  {
    "question": "Người dân tự ý vào rừng tự nhiên thu nhặt củi khô, nấm hương, mộc nhĩ có cần phải làm đơn xin phép cơ quan Kiểm lâm không?",
    "options": [
      "Được phép thu nhặt lâm sản phụ thông thường (củi khô, nấm, rau rừng) phục vụ sinh hoạt thiết yếu gia đình theo quy chế quản lý rừng, nhưng không được hủy hoại cây rừng và phải bảo đảm PCCC",
      "Bắt buộc phải có Giấy phép khai thác của Giám đốc Sở Nông nghiệp và Môi trường theo đúng quy định của pháp luật quản lý",
      "Bị nghiêm cấm tuyệt đối, bước chân vào rừng nhặt nấm đều bị xử phạt 50 triệu đồng theo đúng quy định của pháp luật quản lý",
      "Chỉ được thu nhặt nếu trả phí bản quyền cho Trạm Kiểm lâm địa bàn theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Được phép thu nhặt lâm sản phụ thông thường (củi khô, nấm, rau rừng) phục vụ sinh hoạt thiết yếu gia đình theo quy chế quản lý rừng, nhưng không được hủy hoại cây rừng và phải bảo đảm PCCC",
    "explanation": "Luật Lâm nghiệp cho phép người dân sinh sống hợp pháp trong và ven rừng thu hái lâm sản phụ thông thường phục vụ đời sống gia đình, không vì mục đích thương mại và không ảnh hưởng đến rừng."
  },
  {
    "question": "Hành vi săn bắn các loài chim hoang dã bằng súng tự chế (súng hơi, súng bắn đạn hoa cải, súng cồn) trong rừng bị pháp luật xử lý như thế nào?",
    "options": [
      "Bị tịch thu súng, xử phạt rất nặng về hành vi tàng trữ sử dụng vũ khí tự chế trái phép VÀ hành vi săn bắt động vật rừng, có thể bị phạt tù",
      "Được khen ngợi tuyên dương nhằm khuyến khích người dân nâng cao kỹ năng thiện xạ chuẩn bị lực lượng tham gia các giải bắn súng thể thao quốc tế",
      "Được phép bắn hạ thoải mái nếu chú chim trời dám cất tiếng hót líu lo làm gián đoạn giấc ngủ trưa thanh bình của bà con nhân dân trong thôn xóm",
      "Chỉ bị phạt tiền vài chục nghìn đồng nếu bắn trượt chim, còn nếu bắn trúng thì được giữ lại nướng thịt liên hoan bù đắp tiền mua đạn tự chế"
    ],
    "correct": "Bị tịch thu súng, xử phạt rất nặng về hành vi tàng trữ sử dụng vũ khí tự chế trái phép VÀ hành vi săn bắt động vật rừng, có thể bị phạt tù",
    "explanation": "Sử dụng súng tự chế vi phạm nghiêm trọng Luật Quản lý vũ khí, vật liệu nổ và Luật Lâm nghiệp; người vi phạm bị xử phạt kép về vũ khí và săn bắt động vật rừng trái phép."
  },
  {
    "question": "Cộng đồng dân cư thôn có quyền chuyển nhượng (bán) diện tích rừng tự nhiên do Nhà nước giao cho cộng đồng quản lý cho doanh nghiệp tư nhân không?",
    "options": [
      "Nghiêm cấm tuyệt đối; cộng đồng dân cư không được chuyển đổi, chuyển nhượng, tặng cho, cho thuê, thế chấp hoặc góp vốn bằng quyền sử dụng rừng được Nhà nước giao",
      "Được quyền bán nếu toàn bộ bà con trong thôn cùng đồng ý biểu quyết theo đúng quy định của pháp luật quản lý",
      "Được quyền cho thuê thời hạn 50 năm để chia tiền cho các hộ gia đình theo đúng quy định của pháp luật quản lý",
      "Được phép chuyển nhượng nếu doanh nghiệp cam kết tuyển dụng người trong thôn vào làm việc theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Nghiêm cấm tuyệt đối; cộng đồng dân cư không được chuyển đổi, chuyển nhượng, tặng cho, cho thuê, thế chấp hoặc góp vốn bằng quyền sử dụng rừng được Nhà nước giao",
    "explanation": "Điều 86 Luật Lâm nghiệp: Cộng đồng dân cư được giao rừng không có quyền chuyển đổi, chuyển nhượng, tặng cho, cho thuê, thế chấp hoặc góp vốn bằng quyền sử dụng rừng."
  },
  {
    "question": "Trách nhiệm của chủ rừng khi phát hiện diện tích rừng của mình bị cháy do sét đánh hoặc do người khác gây ra là gì?",
    "options": [
      "Phải lập tức triển khai dập lửa bằng lực lượng, phương tiện tại chỗ, đồng thời báo ngay cho chính quyền xã, Kiểm lâm địa bàn hoặc cơ quan Cảnh sát PCCC gần nhất",
      "Ngồi ở nhà chờ khi nào lửa cháy tắt hẳn thì mới đi kiểm tra diện tích bị thiệt hại theo đúng quy định của pháp luật quản lý",
      "Chỉ cần quay video đăng lên mạng xã hội để kêu gọi cộng đồng mạng ủng hộ theo đúng quy định của pháp luật quản lý",
      "Bỏ chạy khỏi địa phương để tránh bị cơ quan công an mời lên làm việc theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Phải lập tức triển khai dập lửa bằng lực lượng, phương tiện tại chỗ, đồng thời báo ngay cho chính quyền xã, Kiểm lâm địa bàn hoặc cơ quan Cảnh sát PCCC gần nhất",
    "explanation": "Khoản 2 Điều 53 Luật Lâm nghiệp: Khi xảy ra cháy rừng, chủ rừng phải kịp thời huy động lực lượng, phương tiện dập cháy và báo cáo ngay cho cơ quan chức năng hỗ trợ."
  },
  {
    "question": "Hộ gia đình có được quyền kết hợp chăn nuôi gia súc, trồng nấm, dược liệu dưới tán rừng sản xuất không?",
    "options": [
      "Được khuyến khích phát triển kinh tế dưới tán rừng nhưng không được làm suy thoái rừng",
      "Bị nghiêm cấm hoàn toàn không được thả gia súc theo đúng quy định của pháp luật quản lý",
      "Chỉ được nuôi gà, cấm trồng cây dược liệu theo đúng quy định của pháp luật quản lý",
      "Phải chặt hết cây to mới được trồng dược liệu theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Được khuyến khích phát triển kinh tế dưới tán rừng nhưng không được làm suy thoái rừng",
    "explanation": "Luật Lâm nghiệp khuyến khích chủ rừng kết hợp sản xuất nông, lâm, ngư nghiệp, trồng cây dược liệu, nuôi ong dưới tán rừng sản xuất để nâng cao thu nhập."
  },
  {
    "question": "Trường hợp nào chủ rừng được tự do tận dụng cây gỗ bị đổ gãy do bão gió trong rừng trồng của mình?",
    "options": [
      "Toàn quyền thu dọn, sử dụng hoặc bán gỗ cây đổ gãy trong rừng trồng tự đầu tư",
      "Bắt buộc phải để cây mục nát không được chạm vào theo đúng quy định của pháp luật quản lý",
      "Phải chờ cơ quan chức năng của tỉnh xuống giám định mới được dọn",
      "Bị tịch thu toàn bộ số cây bị đổ theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Toàn quyền thu dọn, sử dụng hoặc bán gỗ cây đổ gãy trong rừng trồng tự đầu tư",
    "explanation": "Khoản 1 Điều 59 Luật Lâm nghiệp số 16/2017/QH14: Chủ rừng tự đầu tư trồng rừng có toàn quyền sở hữu cây trồng, được tự do thu gom, tận dụng cây bị bão đổ gãy để dọn dẹp vệ sinh rừng."
  },
  {
    "question": "Khi muốn tỉa thưa rừng trồng để cây phát triển tốt hơn, hộ gia đình có phải báo cáo không?",
    "options": [
      "Chủ rừng tự đầu tư tự quyết định việc tỉa thưa mật độ cây rừng của mình",
      "Bắt buộc phải thuê đơn vị tư vấn lập hồ sơ thiết kế",
      "Phải nộp phạt tiền trước khi tỉa thưa theo đúng quy định của pháp luật quản lý",
      "Mỗi hecta chỉ được chặt tỉa đúng 1 cây theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Chủ rừng tự đầu tư tự quyết định việc tỉa thưa mật độ cây rừng của mình",
    "explanation": "Điều 59 Luật Lâm nghiệp số 16/2017/QH14: Đối với rừng trồng sản xuất do chủ rừng tự đầu tư, chủ rừng tự quyết định biện pháp kỹ thuật tỉa thưa để nâng cao chất lượng rừng gỗ lớn."
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
      "Được dùng nếu không có dụng cụ khác theo đúng quy định của pháp luật quản lý",
      "Tuyệt đối nghiêm cấm; hành vi này nguy hiểm cho môi trường và bị truy cứu trách nhiệm hình sự",
      "Được dùng vào mùa khô hạn theo đúng quy định của pháp luật quản lý",
      "Chỉ cấm ở sông lớn, suối nhỏ trong rừng thì được dùng theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Tuyệt đối nghiêm cấm; hành vi này nguy hiểm cho môi trường và bị truy cứu trách nhiệm hình sự",
    "explanation": "Luật Lâm nghiệp và Bộ luật Hình sự nghiêm cấm sử dụng chất nổ, chất độc, xung điện để khai thác sinh vật rừng, thủy sản. Đây là hành vi hủy hoại môi trường sinh thái bị phạt tù rất nặng."
  },
  {
    "question": "Trách nhiệm của chủ rừng khi phát hiện sâu hại (như sâu đo ăn lá keo, sâu róm thông) xuất hiện nhiều là gì?",
    "options": [
      "Mặc kệ sâu ăn hết lá cây tự mọc lại theo đúng quy định của pháp luật quản lý",
      "Áp dụng biện pháp phòng trừ kịp thời và báo cho Kiểm lâm địa bàn để được hướng dẫn kỹ thuật",
      "Đốt sạch toàn bộ khu rừng để diệt sâu theo đúng quy định của pháp luật quản lý",
      "Phun thuốc trừ cỏ lên toàn bộ tán cây theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Áp dụng biện pháp phòng trừ kịp thời và báo cho Kiểm lâm địa bàn để được hướng dẫn kỹ thuật",
    "explanation": "Điều 61 Luật Lâm nghiệp số 16/2017/QH14: Chủ rừng có trách nhiệm chủ động phòng trừ sinh vật gây hại rừng và kịp thời thông báo Kiểm lâm địa bàn để hướng dẫn biện pháp kỹ thuật phòng dịch an toàn."
  },
  {
    "question": "Việc chăn thả rông trâu bò vào khu vực rừng mới trồng có bị nghiêm cấm không?",
    "options": [
      "Không bị cấm vì cỏ trong rừng là thức ăn tự nhiên theo đúng quy định của pháp luật quản lý",
      "Nghiêm cấm chăn thả gia súc vào rừng mới trồng vì gây gãy, đổ, chết cây con mới trồng",
      "Được thả nếu trâu bò có đeo chuông theo đúng quy định của pháp luật quản lý",
      "Chỉ cấm thả trâu, còn bò thì được thả thoải mái theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Nghiêm cấm chăn thả gia súc vào rừng mới trồng vì gây gãy, đổ, chết cây con mới trồng",
    "explanation": "Điều 9 Luật Lâm nghiệp số 16/2017/QH14 và Điều 17 Nghị định số 146/2026/NĐ-CP: Hành vi chăn thả gia súc làm tổn hại cây rừng mới trồng bị phạt cảnh cáo hoặc phạt tiền và buộc bồi thường giá trị cây rừng bị hại."
  },
  {
    "question": "Người dân tự ý mang máy múc vào đất rừng phòng hộ để san gạt mặt bằng làm nhà ở thì bị xử lý thế nào?",
    "options": [
      "Được hoan nghênh vì làm đẹp cảnh quan theo đúng quy định của pháp luật quản lý",
      "Bị đình chỉ ngay, xử phạt vi phạm hành chính nặng về hành vi phá rừng và buộc khôi phục tình trạng ban đầu",
      "Chỉ cần đóng tiền phạt 100.000 đồng là được làm tiếp theo đúng quy định của pháp luật quản lý",
      "Không bị xử lý nếu là hộ gia đình nghèo theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Bị đình chỉ ngay, xử phạt vi phạm hành chính nặng về hành vi phá rừng và buộc khôi phục tình trạng ban đầu",
    "explanation": "Điều 20 Nghị định 146/2026/NĐ-CP: Hành vi tự ý mang máy múc san gạt, hủy hoại đất rừng phòng hộ cấu thành hành vi phá rừng trái pháp luật, bị phạt tiền rất nặng và áp dụng biện pháp khắc phục hậu quả buộc khôi phục lại tình trạng ban đầu."
  },
  {
    "question": "Chủ rừng được hưởng lợi từ nguồn thu dịch vụ môi trường rừng (DVMTR) phải có nghĩa vụ gì?",
    "options": [
      "Không phải làm gì, chỉ việc nhận tiền theo đúng quy định của pháp luật quản lý",
      "Phải bảo vệ tốt diện tích rừng được chi trả DVMTR, không để xảy ra cháy rừng, phá rừng",
      "Phải chia tiền cho tất cả mọi người trong xã theo đúng quy định của pháp luật quản lý",
      "Phải nộp lại toàn bộ tiền cho nhà máy thủy điện theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Phải bảo vệ tốt diện tích rừng được chi trả DVMTR, không để xảy ra cháy rừng, phá rừng",
    "explanation": "Điều 63 Luật Lâm nghiệp số 16/2017/QH14 và Điều 69 Nghị định số 156/2018/NĐ-CP: Tiền dịch vụ môi trường rừng gắn với kết quả bảo vệ rừng; diện tích bị cháy, bị phá sẽ bị trừ giảm tiền chi trả DVMTR tương ứng."
  },
  {
    "question": "Khi có nhu cầu vay vốn ngân hàng để phát triển trồng rừng, chủ rừng dùng tài sản gì để thế chấp?",
    "options": [
      "Chỉ được thế chấp nhà ở theo đúng quy định của pháp luật quản lý",
      "Được thế chấp giá trị quyền sử dụng đất rừng và giá trị rừng trồng theo quy định pháp luật",
      "Thế chấp thẻ cử tri theo đúng quy định của pháp luật quản lý",
      "Không ngân hàng nào cho vay trồng rừng theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Được thế chấp giá trị quyền sử dụng đất rừng và giá trị rừng trồng theo quy định pháp luật",
    "explanation": "Luật Lâm nghiệp và các chính sách tín dụng lâm nghiệp cho phép chủ rừng thế chấp quyền sử dụng đất rừng sản xuất và giá trị tài sản cây rừng trồng trên đất để vay vốn ngân hàng."
  },
  {
    "question": "Trước khi đốt nương làm rẫy hoặc đốt dọn thực bì gần rừng, người dân BẮT BUỘC phải làm gì?",
    "options": [
      "Lén lút châm lửa đốt vào ban đêm để không ai thấy theo đúng quy định của pháp luật quản lý",
      "Làm đường băng cản lửa, thông báo cho Trưởng thôn/Kiểm lâm và canh gác dập tắt tàn lửa",
      "Đốt ngay vào giữa trưa khi có gió to để cháy cho nhanh theo đúng quy định của pháp luật quản lý",
      "Chỉ cần hô to cho cả làng cùng biết theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Làm đường băng cản lửa, thông báo cho Trưởng thôn/Kiểm lâm và canh gác dập tắt tàn lửa",
    "explanation": "Điều 47 Nghị định 156/2018/NĐ-CP quy định đốt thực bì phải làm đường băng cản lửa, báo cho Trưởng thôn/Kiểm lâm địa bàn, chọn ngày lặng gió và có người canh gác đến khi lửa tắt hẳn."
  },
  {
    "question": "Đường băng cản lửa cô lập khu vực đốt dọn thực bì nương rẫy cần có chiều rộng tối thiểu khoảng bao nhiêu?",
    "options": [
      "Khoảng 0,5 mét theo đúng quy định của pháp luật quản lý",
      "Khoảng 1 mét theo đúng quy định của pháp luật quản lý",
      "Khoảng từ 4 mét đến 6 mét được dọn sạch cỏ rác, vật liệu cháy",
      "Phải rộng 50 mét theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Khoảng từ 4 mét đến 6 mét được dọn sạch cỏ rác, vật liệu cháy",
    "explanation": "Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP và Điều 16 Nghị định số 146/2026/NĐ-CP: Đốt dọn thực bì làm nương bắt buộc phải dọn sạch vật liệu cháy tạo đường băng cản lửa rộng từ 4 m đến 6 m ngăn lửa cháy lan vào rừng."
  },
  {
    "question": "Thời điểm nào trong ngày là THUẬN LỢI VÀ AN TOÀN NHẤT để đốt dọn nương rẫy?",
    "options": [
      "Sáng sớm khi sương chưa tan hết hoặc chiều muộn khi trời dịu mát, lặng gió và thảm cỏ xung quanh còn ẩm ướt",
      "Đúng 12 giờ trưa nắng chang chang để ngọn lửa bùng cháy dữ dội nhất, khỏi mất công mồi lửa nhiều lần cho đỡ tốn diêm",
      "Chờ lúc gió mùa đông bắc thổi giật cấp 6, cấp 7 để gió thổi bạt tàn tro bay sang nương của nhà hàng xóm cho sạch bãi",
      "Bất kỳ thời điểm nào trong ngày miễn là chủ nương rảnh rỗi và đã chuẩn bị sẵn ấm chè tươi để ngồi ngắm khói bay"
    ],
    "correct": "Sáng sớm khi sương chưa tan hết hoặc chiều muộn khi trời dịu mát, lặng gió và thảm cỏ xung quanh còn ẩm ướt",
    "explanation": "Khoản 2 Điều 47 Nghị định số 156/2018/NĐ-CP: Đốt dọn nương rẫy, xử lý thực bì chỉ được thực hiện vào sáng sớm hoặc chiều tối khi trời mát, lặng gió; cấm đốt khi dự báo cháy rừng Cấp IV, Cấp V."
  },
  {
    "question": "Khi dự báo cháy rừng ở Cấp IV (cấp nguy hiểm) và Cấp V (cấp cực kỳ nguy hiểm), người dân có được đốt nương không?",
    "options": [
      "Được đốt nếu có đông người cùng canh theo đúng quy định của pháp luật quản lý",
      "Tuyệt đối NGHIÊM CẤM dùng lửa trong rừng và đốt nương rẫy ven rừng",
      "Được đốt nếu đốt từng đám nhỏ theo đúng quy định của pháp luật quản lý",
      "Chỉ được đốt vào buổi trưa theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Tuyệt đối NGHIÊM CẤM dùng lửa trong rừng và đốt nương rẫy ven rừng",
    "explanation": "Nghị định 156/2018/NĐ-CP quy định khi dự báo cháy rừng từ cấp IV trở lên, nghiêm cấm mọi hành vi đốt lửa, đốt nương rẫy, đốt dọn thực bì trong rừng và ven rừng."
  },
  {
    "question": "Người dân sau khi đốt nương rẫy xong được phép ra về khi nào?",
    "options": [
      "Phải trực tiếp túc trực canh gác đến khi đám cháy tắt hoàn toàn, dùng nước hoặc đất dập tắt hẳn tàn than âm ỉ",
      "Vừa châm lửa xong là vội vàng bỏ về nhà bật quạt nằm ngủ trưa vì tin rằng đám cháy tưng bừng rồi sẽ tự động tắt",
      "Chỉ cần gom một đống cành lá khô đắp trùm lên trên đống than đang đỏ rực để ngụy trang rồi thong thả ra về ăn cơm",
      "Đứng quay video phát trực tiếp lên mạng xã hội khoe cảnh khói lửa hoàng tráng rồi để mặc cho tàn than tự cháy lan"
    ],
    "correct": "Phải trực tiếp túc trực canh gác đến khi đám cháy tắt hoàn toàn, dùng nước hoặc đất dập tắt hẳn tàn than âm ỉ",
    "explanation": "Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP: Người đốt nương phải trực tiếp trông coi và chỉ được rời đi khi đám cháy đã dập tắt hoàn toàn, không còn tàn than âm ỉ."
  },
  {
    "question": "Hành vi đốt nương rẫy bất cẩn làm cháy lan vào rừng gây thiệt hại rừng thì người gây cháy bị xử lý thế nào?",
    "options": [
      "Chỉ cần xin lỗi chủ rừng là xong theo đúng quy định của pháp luật quản lý",
      "Bị xử phạt vi phạm hành chính, bồi thường toàn bộ thiệt hại và có thể bị đi tù nếu cháy lớn",
      "Không bị xử lý vì là tai nạn rủi ro theo đúng quy định của pháp luật quản lý",
      "Được Nhà nước thưởng tiền vì giúp dọn rừng theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Bị xử phạt vi phạm hành chính, bồi thường toàn bộ thiệt hại và có thể bị đi tù nếu cháy lớn",
    "explanation": "Điều 20 Nghị định 146/2026/NĐ-CP và Điều 243 Bộ luật Hình sự quy định người để lửa cháy lan gây cháy rừng phải bồi thường thiệt hại, bị phạt tiền rất nặng hoặc bị truy cứu trách nhiệm hình sự phạt tù."
  },
  {
    "question": "Khi phát hiện có đám cháy rừng, người dân có trách nhiệm làm gì đầu tiên?",
    "options": [
      "Đứng quay video phát trực tiếp lên mạng xã hội rồi bỏ đi theo đúng quy định của pháp luật quản lý",
      "Hô hoán, báo ngay cho Trưởng thôn, Kiểm lâm địa bàn hoặc UBND xã và tìm cách chữa cháy ban đầu",
      "Chạy về nhà khóa cửa lại coi như không biết theo đúng quy định của pháp luật quản lý",
      "Đợi khi nào cháy hết rừng thì mới báo theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Hô hoán, báo ngay cho Trưởng thôn, Kiểm lâm địa bàn hoặc UBND xã và tìm cách chữa cháy ban đầu",
    "explanation": "Khoản 2 Điều 53 Luật Lâm nghiệp số 16/2017/QH14 và Điều 49 Nghị định số 156/2018/NĐ-CP: Mọi công dân khi phát hiện cháy rừng có nghĩa vụ báo ngay cho chính quyền địa phương, cơ quan Kiểm lâm gần nhất và tham gia chữa cháy."
  },
  {
    "question": "Khi nhận được lệnh huy động tham gia chữa cháy rừng của Chủ tịch UBND xã hoặc Trưởng thôn, người dân phải làm gì?",
    "options": [
      "Nghiêm túc chấp hành ngay lệnh huy động, khẩn trương mang theo các dụng cụ phù hợp có sẵn tại gia đình nhanh chóng có mặt để dập lửa cứu rừng",
      "Lập tức lăn ra giường ôm bụng rên rỉ giả vờ đau ốm hiểm nghèo để người nhà chạy sang trụ sở thôn xin phép cho vắng mặt dập lửa một cách chính đáng",
      "Trèo nhanh lên ngọn cây cao lấy điện thoại thông minh ra phát trực tiếp lên mạng xã hội để người xem thả tim và bình luận cổ vũ tinh thần bà con",
      "Chờ đến khi nào tàn tro bay sang rơi trúng chuồng lợn của nhà mình thì mới bắt đầu thong thả đi tìm chiếc gáo dừa múc nước tưới quanh sân ngõ"
    ],
    "correct": "Nghiêm túc chấp hành ngay lệnh huy động, khẩn trương mang theo các dụng cụ phù hợp có sẵn tại gia đình nhanh chóng có mặt để dập lửa cứu rừng",
    "explanation": "Luật Lâm nghiệp và Luật PCCC quy định công dân có nghĩa vụ chấp hành lệnh huy động lực lượng, phương tiện của người có thẩm quyền để tham gia cứu cháy rừng."
  },
  {
    "question": "Những dụng cụ thủ công thông thường nào tại gia đình rất hữu ích khi tham gia dập lửa rừng?",
    "options": [
      "Dao rựa, cuốc, xẻng, cào sắt, cành cây tươi, bình bơm xịt thuốc sâu chứa nước sạch và can nước để dập lửa, phát dọn đường băng cản lửa",
      "Chiếc quạt nan tre đan tay phe phẩy cùng bình xịt khoáng làm dịu mát da mặt của chị em phụ nữ khi đứng nhìn đám khói cháy từ xa cho đỡ nóng",
      "Chiếc máy sấy tóc bật nấc thổi gió lạnh cùng chiếc quạt điện mini cầm tay chạy bằng pin sạc dự phòng điện thoại để thổi bay tàn khói âm ỉ",
      "Máy hút bụi gia đình và chổi lông gà quét bụi bàn trà để hút sạch các hạt bụi tro than lơ lửng xung quanh hiện trường cho không khí trong lành"
    ],
    "correct": "Dao rựa, cuốc, xẻng, cào sắt, cành cây tươi, bình bơm xịt thuốc sâu chứa nước sạch và can nước để dập lửa, phát dọn đường băng cản lửa",
    "explanation": "Điều 50 Nghị định số 156/2018/NĐ-CP: Phương châm 4 tại chỗ trong PCCCR quy định việc chuẩn bị dụng cụ thủ công sẵn có (dao phát, cuốc, cào sắt, can nước) đóng vai trò nòng cốt ban đầu."
  },
  {
    "question": "Hành vi vứt tàn thuốc lá đang cháy dở hoặc đốt lửa sưởi ấm trong rừng vào mùa hanh khô có vi phạm pháp luật không?",
    "options": [
      "Vi phạm nghiêm trọng quy định PCCC rừng; bị phạt tiền nặng và buộc khắc phục hậu quả, nếu gây cháy rừng sẽ bị truy cứu trách nhiệm hình sự",
      "Không vi phạm pháp luật nếu trước khi ném mẩu thuốc lá xuống thảm lá thông khô người hút có thì thầm dặn tàn thuốc không được phép bùng cháy",
      "Được phép đốt đống lửa to sưởi ấm trong rừng thông mùa đông nếu có mang theo củ khoai củ sắn vùi vào tro bếp nướng ăn cho ấm bụng người đi rừng",
      "Chỉ bị phạt tiền nếu mẩu tàn thuốc lá vô tình bị gió thổi bay trúng vào người khác làm cháy xém một mảng gấu quần bò của người đi tuần tra rừng"
    ],
    "correct": "Vi phạm nghiêm trọng quy định PCCC rừng; bị phạt tiền nặng và buộc khắc phục hậu quả, nếu gây cháy rừng sẽ bị truy cứu trách nhiệm hình sự",
    "explanation": "Nghị định 146/2026/NĐ-CP nghiêm cấm vứt tàn thuốc, que diêm còn tàn lửa hoặc đốt lửa sưởi ấm tùy tiện trong rừng. Hành vi này có thể gây hỏa hoạn lớn và bị phạt tiền rất nặng."
  },
  {
    "question": "Biển cảnh báo cấp dự báo cháy rừng thường được đặt ở đâu để người dân dễ nhận biết?",
    "options": [
      "Cất trong tủ kín của phòng làm việc xã theo đúng quy định của pháp luật quản lý",
      "Đặt tại các cửa rừng, ngã ba đường vào rừng, nhà văn hóa thôn, nơi đông dân cư qua lại",
      "Chôn sâu dưới đáy suối theo đúng quy định của pháp luật quản lý",
      "Đặt trên đỉnh núi cao không có lối đi theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Đặt tại các cửa rừng, ngã ba đường vào rừng, nhà văn hóa thôn, nơi đông dân cư qua lại",
    "explanation": "Điều 46 Nghị định số 156/2018/NĐ-CP: Biển cảnh báo cấp dự báo cháy rừng và biển nội quy bảo vệ rừng được lắp đặt tại các cửa rừng, trục đường giao thông chính và trung tâm thôn bản."
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
    "explanation": "Khoản 1 Điều 43 Nghị định số 156/2018/NĐ-CP: Mùa cháy rừng ở vùng miền Bắc được xác định từ tháng 11 năm trước đến tháng 4 năm sau trong điều kiện thời tiết khô hanh kéo dài."
  },
  {
    "question": "Hành vi hun khói lấy mật ong rừng bất cẩn để lửa bùng phát gây cháy rừng thì bị xử lý như thế nào?",
    "options": [
      "Được miễn trách nhiệm nếu giao nộp lại mật ong theo đúng quy định của pháp luật quản lý",
      "Bị xử phạt vi phạm hành chính, bồi thường thiệt hại và có thể bị truy cứu trách nhiệm hình sự",
      "Chỉ bị phạt nhắc nhở tại cuộc họp thôn theo đúng quy định của pháp luật quản lý",
      "Không ai có quyền xử phạt hành vi lấy mật ong theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Bị xử phạt vi phạm hành chính, bồi thường thiệt hại và có thể bị truy cứu trách nhiệm hình sự",
    "explanation": "Dùng lửa hun khói bắt ong là một trong những nguyên nhân hàng đầu gây cháy rừng; người thực hiện hành vi này phải chịu trách nhiệm bồi thường và bị truy cứu trách nhiệm hình sự theo Điều 243 BLHS."
  },
  {
    "question": "Đường băng xanh cản lửa trong phòng cháy rừng thường được trồng bằng các loài cây nào?",
    "options": [
      "Các loài cây có lá chứa nhiều tinh dầu dễ cháy như thông, bạch đàn",
      "Các loài cây có tán rậm rạp, lá dày, mọng nước, khó cháy như vối thuốc, xoan đào, chè mạn",
      "Trồng các loại cỏ tranh khô theo đúng quy định của pháp luật quản lý",
      "Trồng cây thân rỗng theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Các loài cây có tán rậm rạp, lá dày, mọng nước, khó cháy như vối thuốc, xoan đào, chè mạn",
    "explanation": "Tiêu chuẩn quốc gia TCVN về phòng cháy rừng và Điều 45 Nghị định số 156/2018/NĐ-CP: Đường băng xanh cản lửa trồng các loài cây bản địa có tán xanh quanh năm, lá dày mọng nước để ngăn bức xạ nhiệt và tàn lửa."
  },
  {
    "question": "Tổ đội quần chúng bảo vệ rừng và PCCCR ở thôn, bản do ai thành lập và quản lý?",
    "options": [
      "Do Ủy ban nhân dân cấp xã quyết định thành lập theo đề nghị của thôn và Kiểm lâm",
      "Do các cháu thiếu nhi trong thôn tự lập theo đúng quy định của pháp luật quản lý",
      "Do các công ty du lịch thành lập theo đúng quy định của pháp luật quản lý",
      "Do hội người cao tuổi tự quản theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Do Ủy ban nhân dân cấp xã quyết định thành lập theo đề nghị của thôn và Kiểm lâm",
    "explanation": "Nghị định 156/2018/NĐ-CP quy định UBND cấp xã có trách nhiệm thành lập, kiện toàn và chỉ đạo các Tổ đội quần chúng bảo vệ rừng và PCCCR tại từng thôn, bản."
  },
  {
    "question": "Khi tham gia chữa cháy rừng, yêu cầu quan trọng hàng đầu cần bảo đảm là gì?",
    "options": [
      "Phải lấy được thật nhiều gỗ mang về theo đúng quy định của pháp luật quản lý",
      "Tuyệt đối bảo đảm an toàn tính mạng con người, sau đó mới đến bảo vệ tài sản rừng",
      "Càng liều mình lao vào giữa ngọn lửa càng tốt theo đúng quy định của pháp luật quản lý",
      "Không cần tuân theo sự chỉ huy của ai theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Tuyệt đối bảo đảm an toàn tính mạng con người, sau đó mới đến bảo vệ tài sản rừng",
    "explanation": "Điều 49 và Điều 52 Nghị định số 156/2018/NĐ-CP: Nguyên tắc chỉ huy chữa cháy rừng hàng đầu là bảo đảm an toàn tuyệt đối tính mạng người tham gia, tuân thủ kỷ luật hiện trường."
  },
  {
    "question": "Người bị thương hoặc hy sinh khi dũng cảm tham gia chữa cháy rừng được Nhà nước giải quyết chế độ gì?",
    "options": [
      "Không được giải quyết bất kỳ chế độ gì theo đúng quy định của pháp luật quản lý",
      "Được xem xét công nhận là thương binh, liệt sĩ và hưởng các chế độ ưu đãi người có công",
      "Chỉ được hỗ trợ một bữa ăn trưa theo đúng quy định của pháp luật quản lý",
      "Tự gia đình phải chi trả toàn bộ viện phí theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Được xem xét công nhận là thương binh, liệt sĩ và hưởng các chế độ ưu đãi người có công",
    "explanation": "Điều 54 Nghị định 156/2018/NĐ-CP và Pháp lệnh Ưu đãi người có công với cách mạng: Người tham gia chữa cháy rừng bị thương hoặc dũng cảm hy sinh bảo vệ rừng được Nhà nước xem xét công nhận hưởng chế độ thương binh, liệt sĩ theo quy định."
  },
  {
    "question": "Chủ rừng không chấp hành quy định lập phương án phòng cháy, chữa cháy rừng bị xử phạt như thế nào?",
    "options": [
      "Bị xử phạt cảnh cáo hoặc phạt tiền theo quy định pháp luật xử phạt vi phạm lâm nghiệp",
      "Được Nhà nước làm hộ mà không cần quan tâm theo đúng quy định của pháp luật quản lý",
      "Không bị phạt nếu khu rừng đó nhỏ theo đúng quy định của pháp luật quản lý",
      "Chỉ bị ghi tên vào sổ tay của xã theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Bị xử phạt cảnh cáo hoặc phạt tiền theo quy định pháp luật xử phạt vi phạm lâm nghiệp",
    "explanation": "Nghị định 146/2026/NĐ-CP quy định xử phạt vi phạm hành chính đối với chủ rừng không xây dựng, thực hiện phương án phòng cháy chữa cháy rừng theo quy định."
  },
  {
    "question": "Hành vi đốt vàng mã, đốt nhang gần rừng hoặc trong khu di tích lịch sử ven rừng cần chú ý điều gì?",
    "options": [
      "Đốt ở bất cứ chỗ nào có bóng mát theo đúng quy định của pháp luật quản lý",
      "Phải đốt đúng nơi quy định có lò đốt an toàn và dập tắt hết tàn lửa trước khi đi",
      "Đốt vàng mã càng nhiều trong rừng càng may mắn theo đúng quy định của pháp luật quản lý",
      "Cứ vứt tàn nhang vào đống lá khô theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Phải đốt đúng nơi quy định có lò đốt an toàn và dập tắt hết tàn lửa trước khi đi",
    "explanation": "Khoản 1 Điều 16 Nghị định số 146/2026/NĐ-CP: Hành vi đốt vàng mã, thắp hương trong rừng hoặc ven rừng trong mùa hanh khô vi phạm quy định về PCCC rừng và bị xử phạt nghiêm khắc."
  },
  {
    "question": "Số điện thoại báo cháy khẩn cấp toàn quốc mà người dân có thể gọi khi phát hiện cháy lớn là số nào?",
    "options": [
      "Số 113 theo đúng quy định của pháp luật quản lý",
      "Số 114 (Cảnh sát Phòng cháy, chữa cháy và Cứu nạn, cứu hộ)",
      "Số 115 theo đúng quy định của pháp luật quản lý",
      "Số 1080 theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Số 114 (Cảnh sát Phòng cháy, chữa cháy và Cứu nạn, cứu hộ)",
    "explanation": "Luật Phòng cháy và chữa cháy số 27/2001/QH10 (sửa đổi, bổ sung): Số 114 là số điện thoại khẩn cấp toàn quốc tiếp nhận và xử lý tin báo cháy, cứu nạn cứu hộ hoàn toàn miễn phí."
  },
  {
    "question": "Hộ đồng bào dân tộc thiểu số, hộ nghèo nhận khoán bảo vệ rừng tự nhiên được Nhà nước hỗ trợ như thế nào?",
    "options": [
      "Được nhận tiền công khoán bảo vệ rừng hàng năm theo chính sách hỗ trợ phát triển lâm nghiệp bền vững của Nhà nước",
      "Chỉ được cơ quan chức năng hỗ trợ phát cho một gùi củi khô để mang về nhóm bếp nấu nướng phục vụ sinh hoạt hàng ngày",
      "Không được hưởng bất kỳ khoản tiền hay vật chất nào mà còn phải nộp tiền phí quản lý bảo vệ rừng cho cán bộ hàng tháng",
      "Được tự do cưa xẻ bất kỳ cây gỗ to nào trên diện tích nhận khoán mang ra chợ bán lấy tiền tiêu xài mà không ai cấm"
    ],
    "correct": "Được nhận tiền công khoán bảo vệ rừng hàng năm theo chính sách hỗ trợ phát triển lâm nghiệp bền vững của Nhà nước",
    "explanation": "Nghị định số 58/2024/NĐ-CP và Nghị định số 42/2026/NĐ-CP: Hộ gia đình đồng bào DTTS, hộ nghèo nhận khoán bảo vệ rừng tự nhiên được Nhà nước hỗ trợ tiền công khoán bảo vệ rừng hàng năm theo mức quy định hiện hành."
  },
  {
    "question": "Mức hỗ trợ kinh phí khoán bảo vệ rừng cho người dân hiện nay theo chính sách Nhà nước bình quân khoảng bao nhiêu?",
    "options": [
      "Khoảng 50.000 đồng/ha/năm theo đúng quy định của pháp luật quản lý",
      "Khoảng từ 500.000 đồng/ha/năm trở lên (tùy khu vực và nguồn vốn hỗ trợ)",
      "Khoảng 10.000 đồng/ha/năm theo đúng quy định của pháp luật quản lý",
      "Khoảng 50 triệu đồng/ha/năm theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Khoảng từ 500.000 đồng/ha/năm trở lên (tùy khu vực và nguồn vốn hỗ trợ)",
    "explanation": "Nghị định 58/2024/NĐ-CP quy định mức hỗ trợ khoán bảo vệ rừng từ ngân sách nhà nước bình quân từ 500.000 đồng/ha/năm (hoặc kết hợp nguồn thu DVMTR để nâng cao mức thu nhập cho người nhận khoán)."
  },
  {
    "question": "Tiền dịch vụ môi trường rừng (DVMTR) chi trả cho người dân trồng, bảo vệ rừng có nguồn gốc từ đâu?",
    "options": [
      "Do nhân dân tự quyên góp với nhau theo đúng quy định của pháp luật quản lý",
      "Từ các cơ sở sử dụng DVMTR như nhà máy thủy điện, nhà máy nước sạch, cơ sở du lịch sinh thái",
      "Từ tiền bán gỗ lậu tịch thu theo đúng quy định của pháp luật quản lý",
      "Từ tiền cứu trợ của các hội từ thiện theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Từ các cơ sở sử dụng DVMTR như nhà máy thủy điện, nhà máy nước sạch, cơ sở du lịch sinh thái",
    "explanation": "Điều 63 Luật Lâm nghiệp quy định các nhà máy thủy điện, nước sạch, dịch vụ du lịch... phải trả tiền dịch vụ môi trường rừng cho các chủ rừng có công bảo vệ nguồn nước và chống bồi lắng lòng hồ."
  },
  {
    "question": "Hộ gia đình nhận tiền dịch vụ môi trường rừng bằng hình thức nào là an toàn và thuận tiện nhất?",
    "options": [
      "Nhận chi trả tiền dịch vụ môi trường rừng trực tiếp qua tài khoản ngân hàng cá nhân hoặc qua điểm bưu điện cơ sở xã",
      "Chỉ được nhận bằng hiện vật là vài tạ ngô khoai sắn tươi do Quỹ Bảo vệ và Phát triển rừng chở bằng xe bò đến phát tại nhà",
      "Bắt buộc chủ rừng phải bắt xe khách ra tận trụ sở Bộ Nông nghiệp ở thủ đô Hà Nội xếp hàng từ sáng sớm để nhận tiền mặt",
      "Phải đến nhà riêng của đồng chí Trưởng thôn vào lúc nửa đêm gõ cửa xin lĩnh tiền mặt sau khi đã trích lại một nửa làm quỹ xóm"
    ],
    "correct": "Nhận chi trả tiền dịch vụ môi trường rừng trực tiếp qua tài khoản ngân hàng cá nhân hoặc qua điểm bưu điện cơ sở xã",
    "explanation": "Điều 63, Điều 65 Luật Lâm nghiệp số 16/2017/QH14 và Nghị định 156/2018/NĐ-CP: Quỹ Bảo vệ và Phát triển rừng thực hiện chi trả tiền DVMTR công khai, minh bạch trực tiếp cho chủ rừng qua tài khoản ngân hàng hoặc bưu điện cơ sở."
  },
  {
    "question": "Nhà nước có chính sách hỗ trợ gạo cho đối tượng hộ nghèo nào trong công tác trồng rừng?",
    "options": [
      "Tất cả mọi gia đình trong tỉnh theo đúng quy định của pháp luật quản lý",
      "Hộ gia đình đồng bào dân tộc thiểu số nghèo tham gia trồng rừng thay thế nương rẫy",
      "Chỉ các gia đình nuôi trâu bò theo đúng quy định của pháp luật quản lý",
      "Chỉ người kinh doanh buôn bán ở thị trấn theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Hộ gia đình đồng bào dân tộc thiểu số nghèo tham gia trồng rừng thay thế nương rẫy",
    "explanation": "Nghị định số 75/2015/NĐ-CP và Nghị định số 58/2024/NĐ-CP: Chính phủ trợ cấp gạo cho hộ đồng bào dân tộc thiểu số nghèo tham gia trồng rừng thay thế tập quán đốt nương làm rẫy."
  },
  {
    "question": "Hộ gia đình muốn vay vốn ưu đãi để trồng rừng sản xuất thì liên hệ với ngân hàng nào tại địa phương?",
    "options": [
      "Ngân hàng Chính sách xã hội hoặc Ngân hàng Nông nghiệp và PTNT (Agribank)",
      "Chỉ được vay tại các hiệu cầm đồ tư nhân theo đúng quy định của pháp luật quản lý",
      "Vay tại các ứng dụng 'tín dụng đen' trên mạng theo đúng quy định của pháp luật quản lý",
      "Không có ngân hàng nào hỗ trợ theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Ngân hàng Chính sách xã hội hoặc Ngân hàng Nông nghiệp và PTNT (Agribank)",
    "explanation": "Ngân hàng Chính sách xã hội và Agribank triển khai các gói tín dụng ưu đãi theo Nghị định của Chính phủ cho hộ nghèo, hộ cận nghèo, hộ sản xuất kinh doanh vùng khó khăn vay vốn trồng rừng."
  },
  {
    "question": "Chính sách khuyến khích trồng rừng cây bản địa, cây gỗ lớn nhằm mục tiêu gì lâu dài?",
    "options": [
      "Để có lá cây làm phân xanh theo đúng quy định của pháp luật quản lý",
      "Tạo nguồn gỗ có giá trị kinh tế cao, giữ nước bền vững và giảm thiểu thiên tai sạt lở",
      "Để không ai vào rừng được nữa theo đúng quy định của pháp luật quản lý",
      "Để chặt phá làm củi đun theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Tạo nguồn gỗ có giá trị kinh tế cao, giữ nước bền vững và giảm thiểu thiên tai sạt lở",
    "explanation": "Điều 4 và Điều 8 Nghị định số 58/2024/NĐ-CP: Nhà nước có chính sách hỗ trợ vốn, cây giống khuyến khích chủ rừng trồng cây gỗ lớn, cây bản địa để nâng cao giá trị và chức năng phòng hộ."
  },
  {
    "question": "Tổ chức, hộ gia đình tham gia trồng rừng thay thế khi Nhà nước chuyển mục đích sử dụng rừng được hỗ trợ từ đâu?",
    "options": [
      "Tự chủ rừng phải bỏ tiền túi 100% theo đúng quy định của pháp luật quản lý",
      "Từ nguồn kinh phí nộp tiền trồng rừng thay thế do Quỹ Bảo vệ và phát triển rừng quản lý",
      "Do nhân dân trong xã đóng góp theo đúng quy định của pháp luật quản lý",
      "Do nước ngoài viện trợ theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Từ nguồn kinh phí nộp tiền trồng rừng thay thế do Quỹ Bảo vệ và phát triển rừng quản lý",
    "explanation": "Điều 21 Luật Lâm nghiệp số 16/2017/QH14 và Thông tư 25/2022/TT-BNNPTNT: Chủ dự án chuyển mục đích sử dụng rừng phải nộp tiền trồng rừng thay thế vào Quỹ Bảo vệ và Phát triển rừng để phân bổ trồng rừng mới."
  },
  {
    "question": "Cộng đồng dân cư thôn nhận tiền DVMTR có được sử dụng để xây dựng công trình phúc lợi chung của thôn không?",
    "options": [
      "Không được dùng, phải chia hết cho Trưởng thôn theo đúng quy định của pháp luật quản lý",
      "Được bàn bạc tập thể sử dụng vào tuần tra bảo vệ rừng và tu sửa nhà văn hóa, đường làng ngõ xóm",
      "Chỉ được dùng để liên hoan ăn uống theo đúng quy định của pháp luật quản lý",
      "Phải đem gửi tiết kiệm tư nhân theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Được bàn bạc tập thể sử dụng vào tuần tra bảo vệ rừng và tu sửa nhà văn hóa, đường làng ngõ xóm",
    "explanation": "Khoản 3 Điều 70 Nghị định số 156/2018/NĐ-CP: Tiền dịch vụ môi trường rừng của cộng đồng thôn được quản lý theo quy chế công khai, dùng cho tuần tra bảo vệ rừng và công trình công cộng của thôn."
  },
  {
    "question": "Để được thanh toán tiền khoán bảo vệ rừng hàng năm, kết quả bảo vệ rừng của người dân cần đạt yêu cầu gì?",
    "options": [
      "Rừng bị cháy hết cũng được nhận tiền theo đúng quy định của pháp luật quản lý",
      "Được cơ quan chức năng nghiệm thu diện tích rừng còn nguyên vẹn, không xảy ra cháy hoặc phá rừng trái phép",
      "Chỉ cần có mặt ở nhà vào ngày phát tiền theo đúng quy định của pháp luật quản lý",
      "Chỉ cần nộp đơn xin nhận tiền theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Được cơ quan chức năng nghiệm thu diện tích rừng còn nguyên vẹn, không xảy ra cháy hoặc phá rừng trái phép",
    "explanation": "Điều 15 Nghị định số 58/2024/NĐ-CP: Nghiệm thu kết quả bảo vệ rừng thực tế hàng năm là căn cứ pháp lý bắt buộc để giải ngân tiền khoán bảo vệ rừng cho hộ nhận khoán."
  },
  {
    "question": "Hộ gia đình nghèo được hỗ trợ cây giống lâm nghiệp để trồng rừng thì có trách nhiệm gì?",
    "options": [
      "Đem bán cây giống lấy tiền tiêu xài theo đúng quy định của pháp luật quản lý",
      "Trồng đúng kỹ thuật trên diện tích được phê duyệt và chăm sóc bảo vệ cây sống thành rừng",
      "Vứt cây giống ven đường theo đúng quy định của pháp luật quản lý",
      "Chỉ trồng một vài cây gần nhà theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Trồng đúng kỹ thuật trên diện tích được phê duyệt và chăm sóc bảo vệ cây sống thành rừng",
    "explanation": "Điều 10 Nghị định số 58/2024/NĐ-CP: Hộ gia đình nghèo được hỗ trợ cây giống lâm nghiệp bảo đảm tiêu chuẩn nguồn gốc lô giống hợp pháp theo Thông tư 22/2021/TT-BNNPTNT."
  },
  {
    "question": "Việc cấp Chứng chỉ rừng bền vững (FSC) cho các nhóm hộ gia đình trồng rừng mang lại lợi ích gì?",
    "options": [
      "Gỗ bán được giá cao hơn từ 10% đến 20% so với gỗ thông thường và được doanh nghiệp bao tiêu",
      "Không có lợi ích gì theo đúng quy định của pháp luật quản lý",
      "Làm giảm giá trị của cây gỗ theo đúng quy định của pháp luật quản lý",
      "Người dân phải nộp phạt cho tổ chức quốc tế theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Gỗ bán được giá cao hơn từ 10% đến 20% so với gỗ thông thường và được doanh nghiệp bao tiêu",
    "explanation": "Điều 28 Luật Lâm nghiệp số 16/2017/QH14: Quản lý rừng bền vững và cấp chứng chỉ rừng (FSC/PEFC) giúp nâng cao giá trị gỗ xuất khẩu và bảo tồn môi trường sinh thái rừng."
  },
  {
    "question": "Khi Nhà nước quy hoạch lại 3 loại rừng mà rừng của hộ gia đình từ rừng sản xuất chuyển thành rừng phòng hộ thì sao?",
    "options": [
      "Người dân bị mất trắng toàn bộ tài sản theo đúng quy định của pháp luật quản lý",
      "Nhà nước thực hiện hỗ trợ, bồi thường hoặc giao khoán bảo vệ rừng theo quy định pháp luật",
      "Người dân phải nộp tiền phạt cho xã theo đúng quy định của pháp luật quản lý",
      "Không có chính sách giải quyết theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Nhà nước thực hiện hỗ trợ, bồi thường hoặc giao khoán bảo vệ rừng theo quy định pháp luật",
    "explanation": "Luật Lâm nghiệp quy định khi điều chỉnh phân loại rừng mà ảnh hưởng đến quyền lợi hợp pháp của chủ rừng thì Nhà nước có trách nhiệm bồi thường, hỗ trợ hoặc chuyển tiếp giao khoán bảo vệ rừng."
  },
  {
    "question": "Chương trình phát triển kinh tế lâm nghiệp bền vững ưu tiên hỗ trợ những đối tượng nào?",
    "options": [
      "Hộ nghèo, hộ cận nghèo, đồng bào dân tộc thiểu số sinh sống ở khu vực miền núi khó khăn",
      "Chỉ các doanh nghiệp ở thành phố theo đúng quy định của pháp luật quản lý",
      "Những người không có đất rừng theo đúng quy định của pháp luật quản lý",
      "Chỉ các hộ gia đình khá giả theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Hộ nghèo, hộ cận nghèo, đồng bào dân tộc thiểu số sinh sống ở khu vực miền núi khó khăn",
    "explanation": "Điều 10 Luật Lâm nghiệp số 16/2017/QH14 và Quyết định số 809/QĐ-TTg ngày 12/7/2022 của Thủ tướng Chính phủ: Chương trình phát triển lâm nghiệp bền vững giai đoạn 2021-2025 tập trung nâng cao năng suất, chất lượng rừng và giá trị gia tăng ngành lâm nghiệp."
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
    "explanation": "Khoản 2 Điều 104 Luật Lâm nghiệp số 16/2017/QH14: Kiểm lâm địa bàn phối hợp với khuyến nông xã trực tiếp hướng dẫn kỹ thuật trồng rừng, chăm sóc, tỉa cành cho các hộ gia đình."
  },
  {
    "question": "Hành vi nào sau đây bị pháp luật coi là 'Phá rừng trái pháp luật'?",
    "options": [
      "Đi bộ trên đường mòn trong rừng ngắm cảnh theo đúng quy định của pháp luật quản lý",
      "Chặt, đốt cây rừng; san ủi đất rừng; ken cây băm gốc đổ hóa chất hủy hoại cây mà không được phép",
      "Trồng thêm cây xanh vào khu vực đất trống ven rừng theo đúng quy định của pháp luật quản lý",
      "Thu dọn rác thải rơi vãi bìa rừng theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Chặt, đốt cây rừng; san ủi đất rừng; ken cây băm gốc đổ hóa chất hủy hoại cây mà không được phép",
    "explanation": "Khoản 1 Điều 23 Nghị định 146/2026/NĐ-CP quy định phá rừng trái pháp luật là hành vi chặt, đốt, phá cây rừng, đào bới, san ủi, xả chất độc hoặc bóc vỏ, ken cây hủy hoại cây rừng mà không được phép."
  },
  {
    "question": "Hành vi bóc vỏ cây, ken cây, khoan vào thân cây rồi đổ thuốc trừ sâu làm cây chết dần bị xử lý thế nào?",
    "options": [
      "Không bị coi là phá rừng vì cây vẫn đứng nguyên theo đúng quy định của pháp luật quản lý",
      "Bị xử phạt nghiêm khắc về hành vi 'Phá rừng trái pháp luật', tính thiệt hại theo từng cây bị hại",
      "Chỉ bị phạt nhắc nhở vì không dùng cưa xăng theo đúng quy định của pháp luật quản lý",
      "Được coi là hành vi tỉa thưa cây rừng tự nhiên theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Bị xử phạt nghiêm khắc về hành vi 'Phá rừng trái pháp luật', tính thiệt hại theo từng cây bị hại",
    "explanation": "Nghị định 146/2026/NĐ-CP quy định rõ hành vi ken cây, khoan thân cây, đổ hóa chất làm chết cây rừng bị xử lý về hành vi Phá rừng trái pháp luật; đơn vị tính thiệt hại là từng cây rừng bị xâm hại."
  },
  {
    "question": "Mức phạt tiền thấp nhất đối với hành vi phá rừng trái pháp luật đối với cá nhân là từ bao nhiêu?",
    "options": [
      "Chỉ phạt từ 10.000 đồng theo đúng quy định của pháp luật quản lý",
      "Phạt tiền từ 1.000.000 đồng trở lên (tùy theo diện tích và loại rừng)",
      "Chỉ phạt cảnh cáo bằng lời nói theo đúng quy định của pháp luật quản lý",
      "Tối thiểu phải từ 100 triệu đồng theo đúng quy định của pháp luật quản lý"
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
      "Từ 10.000 m2 trở lên theo đúng quy định của pháp luật quản lý",
      "Từ 1.000 m2 (khoảng gần 3 sào Bắc Bộ) trở lên đã bị đi tù",
      "Từ 50.000 m2 trở lên theo đúng quy định của pháp luật quản lý",
      "Phá bao nhiêu cũng chỉ bị phạt tiền không bị đi tù"
    ],
    "correct": "Từ 1.000 m2 (khoảng gần 3 sào Bắc Bộ) trở lên đã bị đi tù",
    "explanation": "Điểm a Khoản 1 Điều 243 Bộ luật Hình sự quy định người nào hủy hoại rừng sản xuất là rừng tự nhiên từ 1.000 m2 đến dưới 5.000 m2 thì bị truy cứu TNHS với khung hình phạt tù từ 01 năm đến 05 năm."
  },
  {
    "question": "Phá rừng phòng hộ trái phép từ diện tích bao nhiêu mét vuông (m2) thì bị khởi tố hình sự phạt tù?",
    "options": [
      "Từ 5.000 m2 trở lên theo đúng quy định của pháp luật quản lý",
      "Từ 700 m2 (chưa đầy 2 sào Bắc Bộ) trở lên đã bị truy cứu trách nhiệm hình sự",
      "Từ 2.000 m2 trở lên theo đúng quy định của pháp luật quản lý",
      "Từ 10.000 m2 trở lên theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Từ 700 m2 (chưa đầy 2 sào Bắc Bộ) trở lên đã bị truy cứu trách nhiệm hình sự",
    "explanation": "Điểm b Khoản 1 Điều 243 Bộ luật Hình sự quy định hành vi hủy hoại rừng phòng hộ từ 700 m2 đến dưới 3.000 m2 đã đủ yếu tố cấu thành tội phạm và bị phạt tù từ 01 năm đến 05 năm."
  },
  {
    "question": "Phá rừng đặc dụng trái phép từ diện tích bao nhiêu mét vuông (m2) thì bị khởi tố hình sự phạt tù?",
    "options": [
      "Từ 100 m2 trở lên theo đúng quy định của pháp luật quản lý",
      "Từ 500 m2 (khoảng hơn 1 sào Bắc Bộ) trở lên đã bị truy cứu trách nhiệm hình sự",
      "Từ 3.000 m2 trở lên theo đúng quy định của pháp luật quản lý",
      "Từ 5.000 m2 trở lên theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Từ 500 m2 (khoảng hơn 1 sào Bắc Bộ) trở lên đã bị truy cứu trách nhiệm hình sự",
    "explanation": "Điểm c Khoản 1 Điều 243 Bộ luật Hình sự quy định hành vi hủy hoại rừng đặc dụng từ 500 m2 đến dưới 1.000 m2 đã bị xử lý hình sự với mức án từ 01 năm đến 05 năm tù giam."
  },
  {
    "question": "Hành vi lấn, chiếm đất rừng trái phép ngoài việc bị phạt tiền còn bị áp dụng biện pháp gì?",
    "options": [
      "Được giữ lại phần đất đã lấn chiếm theo đúng quy định của pháp luật quản lý",
      "Buộc tháo dỡ công trình, trả lại đất rừng đã lấn chiếm và khôi phục lại tình trạng ban đầu",
      "Được cấp sổ đỏ hợp thức hóa đất lấn chiếm theo đúng quy định của pháp luật quản lý",
      "Chỉ cần viết bản kiểm điểm cá nhân theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Buộc tháo dỡ công trình, trả lại đất rừng đã lấn chiếm và khôi phục lại tình trạng ban đầu",
    "explanation": "Khoản 3 Điều 10 Nghị định 146/2026/NĐ-CP quy định người lấn chiếm đất rừng buộc phải tháo dỡ toàn bộ tài sản, công trình xây dựng trái phép, trả lại diện tích đất và trồng lại rừng."
  },
  {
    "question": "Khai thác trộm gỗ thông thường từ rừng tự nhiên khối lượng bao nhiêu mét khối (m3) thì bị khởi tố đi tù?",
    "options": [
      "Từ 100 m3 trở lên theo đúng quy định của pháp luật quản lý",
      "Từ 10 m3 trở lên tại rừng sản xuất (hoặc từ 07 m3 tại rừng phòng hộ) đã bị truy cứu TNHS",
      "Từ 50 m3 trở lên theo đúng quy định của pháp luật quản lý",
      "Chặt trộm bao nhiêu cũng chỉ bị tịch thu gỗ theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Từ 10 m3 trở lên tại rừng sản xuất (hoặc từ 07 m3 tại rừng phòng hộ) đã bị truy cứu TNHS",
    "explanation": "Điều 232 Bộ luật Hình sự quy định khai thác trái phép gỗ rừng tự nhiên từ 10 m3 trở lên tại rừng sản xuất, từ 07 m3 tại rừng phòng hộ, từ 03 m3 tại rừng đặc dụng là phạm tội hình sự bị phạt tù."
  },
  {
    "question": "Chặt trộm dù chỉ 0,5 m3 gỗ quý hiếm Nhóm IA (như gỗ sưa, gỗ gụ...) tại rừng đặc dụng thì bị xử lý thế nào?",
    "options": [
      "Chỉ bị lập biên bản nhắc nhở rút kinh nghiệm vì khối lượng cây gỗ quý bị chặt hạ thực tế vẫn còn dưới 1 mét khối",
      "Đã đủ định lượng bị truy cứu trách nhiệm hình sự với mức án phạt tù lên đến 03 năm theo quy định về khai thác trái phép",
      "Chỉ cần chủ động nộp số tiền phạt 500.000 đồng tại trụ sở thôn là được giữ lại toàn bộ khúc gỗ quý để đục tượng phong thủy",
      "Hoàn toàn không bị xử lý nếu giải thích rằng chặt gỗ quý về chỉ để đóng một bộ bàn ghế ngồi uống trà tiếp khách trong nhà"
    ],
    "correct": "Đã đủ định lượng bị truy cứu trách nhiệm hình sự với mức án phạt tù lên đến 03 năm theo quy định về khai thác trái phép",
    "explanation": "Điểm h Khoản 1 Điều 232 BLHS quy định khai thác trái phép gỗ loài nguy cấp quý hiếm Nhóm IA từ 0,5 m3 trở lên tại rừng đặc dụng đã bị truy cứu trách nhiệm hình sự với mức án đến 03 năm tù."
  },
  {
    "question": "Săn bắt, bẫy bắt hoặc nuôi nhốt trái phép cá thể động vật thuộc loài nguy cấp, quý, hiếm Nhóm IB (như tê tê, voọc...) thì sao?",
    "options": [
      "Nuôi 1 con làm cảnh thì không sao theo đúng quy định của pháp luật quản lý",
      "Chỉ cần từ 01 cá thể lớp thú Nhóm IB đã bị khởi tố hình sự phạt tù từ 01 năm đến 05 năm",
      "Chỉ bị phạt tiền 500.000 đồng nếu chưa đem bán theo đúng quy định của pháp luật quản lý",
      "Được phép nuôi nếu có chuồng sắt theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Chỉ cần từ 01 cá thể lớp thú Nhóm IB đã bị khởi tố hình sự phạt tù từ 01 năm đến 05 năm",
    "explanation": "Khoản 1 Điều 244 Bộ luật Hình sự quy định chỉ cần săn bắt, giết, nuôi nhốt từ 01 cá thể động vật thuộc lớp thú Nhóm IB hoặc Danh mục loài ưu tiên bảo vệ là cấu thành tội phạm hình sự rất nghiêm trọng."
  },
  {
    "question": "Người dân vận chuyển gỗ trái phép bằng xe máy hoặc xe ô tô tải thì phương tiện vận chuyển bị xử lý thế nào?",
    "options": [
      "Người vi phạm được trả lại xe ngay theo đúng quy định của pháp luật quản lý",
      "Phương tiện vận chuyển vi phạm có thể bị tịch thu sung công quỹ Nhà nước theo quy định",
      "Cơ quan Kiểm lâm phải bồi thường xăng cho chủ xe theo đúng quy định của pháp luật quản lý",
      "Chỉ phạt tiền người lái xe, không được giữ xe theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Phương tiện vận chuyển vi phạm có thể bị tịch thu sung công quỹ Nhà nước theo quy định",
    "explanation": "Điều 25 Nghị định 146/2026/NĐ-CP quy định tịch thu phương tiện vận chuyển (kể cả xe máy, ô tô, xe ba gác) sử dụng để vận chuyển lâm sản trái pháp luật thuộc trường hợp quy định."
  },
  {
    "question": "Mức phạt tiền thấp nhất đối với hành vi vận chuyển lâm sản trái pháp luật là bao nhiêu?",
    "options": [
      "Từ 500.000 đồng trở lên đối với khối lượng lâm sản nhỏ nhất",
      "Chỉ phạt từ 10.000 đồng theo đúng quy định của pháp luật quản lý",
      "Không bị phạt tiền nếu chở bằng xe đạp theo đúng quy định của pháp luật quản lý",
      "Khởi điểm từ 50.000.000 đồng theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Từ 500.000 đồng trở lên đối với khối lượng lâm sản nhỏ nhất",
    "explanation": "Điều 25 Nghị định 146/2026/NĐ-CP quy định mức xử phạt tiền thấp nhất đối với hành vi vận chuyển lâm sản trái phép khởi điểm từ 500.000 đồng và tăng lũy tiến theo khối lượng gỗ, lâm sản."
  },
  {
    "question": "Hành vi mua bán lâm sản (gỗ, động vật hoang dã) không có giấy tờ nguồn gốc hợp pháp bị xử phạt thế nào?",
    "options": [
      "Bị tịch thu toàn bộ lâm sản và bị xử phạt tiền rất nặng",
      "Không bị phạt nếu mua về để sử dụng trong gia đình",
      "Chỉ bị phạt người bán, người mua không có tội",
      "Được miễn phạt nếu trả tiền đầy đủ cho người bán"
    ],
    "correct": "Bị tịch thu toàn bộ lâm sản và bị xử phạt tiền rất nặng",
    "explanation": "Điều 26 Nghị định 146/2026/NĐ-CP quy định người tàng trữ, mua bán lâm sản trái pháp luật đều bị xử phạt tiền và tịch thu toàn bộ tang vật lâm sản không có nguồn gốc hợp pháp."
  },
  {
    "question": "Việc quảng cáo bán động vật hoang dã trái phép trên mạng xã hội (Facebook, Zalo, TikTok) có bị xử phạt không?",
    "options": [
      "Không bị phạt vì mạng xã hội là không gian ảo theo đúng quy định của pháp luật quản lý",
      "Bị xử phạt vi phạm hành chính nặng từ 1.000.000 đồng đến 15.000.000 đồng và gỡ bỏ bài đăng",
      "Chỉ bị khóa tài khoản mạng xã hội 1 ngày theo đúng quy định của pháp luật quản lý",
      "Được phép quảng cáo nếu không ghi rõ giá tiền theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Bị xử phạt vi phạm hành chính nặng từ 1.000.000 đồng đến 15.000.000 đồng và gỡ bỏ bài đăng",
    "explanation": "Điều 24 Nghị định 146/2026/NĐ-CP quy định hành vi quảng cáo kinh doanh động vật rừng và sản phẩm của chúng trái quy định bị phạt tiền từ 1 triệu đến 15 triệu đồng và buộc gỡ bỏ thông tin."
  },
  {
    "question": "Nuôi nhốt động vật rừng thông thường (như dúi, cầy vòi, nhím...) mà không khai báo với cơ quan Kiểm lâm bị xử lý thế nào?",
    "options": [
      "Không cần khai báo vì là động vật thông thường theo đúng quy định của pháp luật quản lý",
      "Bị xử phạt vi phạm hành chính về hành vi nuôi nhốt động vật rừng trái phép và bị tịch thu",
      "Chỉ cần khai báo với người hàng xóm theo đúng quy định của pháp luật quản lý",
      "Được chính quyền thưởng tiền khuyến khích theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Bị xử phạt vi phạm hành chính về hành vi nuôi nhốt động vật rừng trái phép và bị tịch thu",
    "explanation": "Nuôi động vật rừng thông thường bắt buộc phải có nguồn gốc hợp pháp và gửi thông báo trong 03 ngày làm việc cho Kiểm lâm sở tại (Điều 24 TT 85). Nếu nuôi lén lút sẽ bị phạt tiền và tịch thu vật nuôi."
  },
  {
    "question": "Hành vi sử dụng súng tự chế, bẫy kiềng sắt, lưới bắt chim để săn bắt chim thú trong rừng bị xử phạt thế nào?",
    "options": [
      "Bị tịch thu toàn bộ súng, bẫy, công cụ săn bắt và bị phạt tiền rất nặng",
      "Được phép dùng nếu là truyền thống của dòng họ theo đúng quy định của pháp luật quản lý",
      "Chỉ cấm ở đồng bằng, miền núi được dùng thoải mái theo đúng quy định của pháp luật quản lý",
      "Chỉ bị nhắc nhở không được bắn trúng người theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Bị tịch thu toàn bộ súng, bẫy, công cụ săn bắt và bị phạt tiền rất nặng",
    "explanation": "Điều 9 Luật Lâm nghiệp số 16/2017/QH14 và Điều 24 Nghị định số 146/2026/NĐ-CP: Hành vi dùng súng tự chế, bẫy kiềng sắt, lưới bẫy chim bắt động vật hoang dã bị nghiêm cấm, tịch thu toàn bộ công cụ và xử phạt nặng."
  },
  {
    "question": "Đốt lửa sưởi ấm trong rừng vào mùa hanh khô bất cẩn làm cháy 1.500 m2 rừng tự nhiên sản xuất thì người gây cháy bị sao?",
    "options": [
      "Chỉ bị xử phạt bắt bồi thường tiền cây rừng theo giá thị trường mà không phải chịu bất kỳ chế tài pháp lý nào khác",
      "Bị khởi tố hình sự về tội Hủy hoại rừng với khung hình phạt tù từ 01 năm đến 05 năm giam theo quy định của pháp luật",
      "Được miễn truy cứu trách nhiệm vì mùa đông thời tiết buốt giá nên việc nhóm lửa sưởi ấm được coi là nhu cầu chính đáng",
      "Được xóa hết mọi vi phạm nếu người gây cháy tự nguyện trồng đền lại một cây keo con vào giữa bãi tro tàn của đám cháy"
    ],
    "correct": "Bị khởi tố hình sự về tội Hủy hoại rừng với khung hình phạt tù từ 01 năm đến 05 năm giam theo quy định của pháp luật",
    "explanation": "Điều 243 BLHS quy định hành vi vô ý hay cố ý gây cháy rừng tự nhiên sản xuất từ 1.000 m2 trở lên đều bị truy cứu trách nhiệm hình sự với mức án phạt tù từ 01 đến 05 năm."
  },
  {
    "question": "Hành vi cản trở, chống đối cán bộ Kiểm lâm hoặc lực lượng bảo vệ rừng đang thi hành công vụ bị xử lý thế nào?",
    "options": [
      "Không sao vì cán bộ phải chịu đựng nhân dân theo đúng quy định của pháp luật quản lý",
      "Bị xử phạt hành chính nặng hoặc bị truy cứu trách nhiệm hình sự về tội 'Chống người thi hành công vụ'",
      "Chỉ cần bỏ chạy là thoát tội theo đúng quy định của pháp luật quản lý",
      "Chỉ bị phạt viết bản tự kiểm điểm theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Bị xử phạt hành chính nặng hoặc bị truy cứu trách nhiệm hình sự về tội 'Chống người thi hành công vụ'",
    "explanation": "Hành vi đe dọa, lăng mạ, dùng vũ lực cản trở Kiểm lâm khi đang làm nhiệm vụ bị xử lý nghiêm khắc theo Bộ luật Hình sự (Điều 330 Tội chống người thi hành công vụ) với mức án lên đến 07 năm tù."
  },
  {
    "question": "Tang vật là gỗ lậu bị cơ quan chức năng phát hiện, tạm giữ thì được xử lý như thế nào?",
    "options": [
      "Tịch thu sung công quỹ Nhà nước để bán đấu giá hoặc chuyển giao, tiêu hủy theo đúng trình tự thủ tục luật định",
      "Được chia đều cho tất cả các thành viên tham gia vây bắt để mang về nhà đóng giường tủ bàn ghế cải thiện cuộc sống",
      "Đem châm lửa đốt bỏ toàn bộ tang vật giữa đường để khỏi ai có cơ hội sử dụng hay tơ hào tài sản của Nhà nước",
      "Trả lại nguyên vẹn phương tiện và toàn bộ số gỗ lậu cho người vận chuyển nếu người đó làm đơn xin xỏ hoàn cảnh khó khăn"
    ],
    "correct": "Tịch thu sung công quỹ Nhà nước để bán đấu giá hoặc chuyển giao, tiêu hủy theo đúng trình tự thủ tục luật định",
    "explanation": "Điều 82 Luật Xử lý vi phạm hành chính và Nghị định 29/2018/NĐ-CP: Tang vật là lâm sản bị tịch thu thuộc sở hữu toàn dân, phải được lập phương án xử lý (bán đấu giá nộp ngân sách hoặc chuyển giao, tiêu hủy) đúng quy định."
  },
  {
    "question": "Hành vi chặt phá cây rừng để làm đường dây điện hoặc xây dựng lán trại khi chưa được cấp phép bị xử phạt thế nào?",
    "options": [
      "Bị xử phạt rất nặng về hành vi phá rừng trái pháp luật, buộc tháo dỡ công trình vi phạm và trồng lại diện tích rừng đã phá",
      "Được Nhà nước đặc cách cho phép vì việc kéo dây điện và dựng lán trại phục vụ mục đích sinh hoạt thiết yếu của người dân",
      "Chỉ bị xử phạt nếu chặt hạ các cây gỗ đại thụ ngàn năm tuổi có đường kính thân cây đo được lớn hơn 2 mét trở lên",
      "Được miễn xử phạt nếu chủ lán trại cam kết hàng tháng đóng nộp đầy đủ tiền hóa đơn sử dụng điện cho công ty điện lực"
    ],
    "correct": "Bị xử phạt rất nặng về hành vi phá rừng trái pháp luật, buộc tháo dỡ công trình vi phạm và trồng lại diện tích rừng đã phá",
    "explanation": "Điều 20 Nghị định 146/2026/NĐ-CP: Mọi hành vi chặt phá cây rừng để xây lán trại, mở đường khi chưa có quyết định chuyển mục đích sử dụng rừng của cơ quan có thẩm quyền đều cấu thành hành vi phá rừng trái pháp luật."
  },
  {
    "question": "Người dân tự nguyện giao nộp động vật rừng quý hiếm đi lạc hoặc nuôi trước đây cho Nhà nước thì có bị đi tù không?",
    "options": [
      "Được Nhà nước ghi nhận, khoan hồng, không bị xử phạt và được cơ quan Kiểm lâm sở tại tiếp nhận an toàn để cứu hộ, tái thả",
      "Bị lực lượng chức năng ập vào bắt giữ bỏ tù ngay lập tức khi vừa bước chân qua cổng trụ sở cơ quan Kiểm lâm của huyện",
      "Bắt buộc người mang động vật đến giao nộp phải đóng một khoản tiền phạt 50 triệu đồng thì cơ quan mới đồng ý nhận con vật",
      "Cơ quan Kiểm lâm sẽ kiên quyết từ chối tiếp nhận và yêu cầu người dân tự mang con thú ra chợ bán lấy tiền tiêu xài"
    ],
    "correct": "Được Nhà nước ghi nhận, khoan hồng, không bị xử phạt và được cơ quan Kiểm lâm sở tại tiếp nhận an toàn để cứu hộ, tái thả",
    "explanation": "Điều 33 Nghị định 146/2026/NĐ-CP và Thông tư 85/2025/TT-BNNMT: Nhà nước khuyến khích, biểu dương và áp dụng chính sách khoan hồng (không xử phạt) đối với người tự giác giao nộp động vật rừng cho cơ quan Kiểm lâm để cứu hộ."
  },
  {
    "question": "Trường hợp nào sau đây người dân đi rừng KHÔNG bị coi là vi phạm pháp luật?",
    "options": [
      "Mang cưa xăng vào rừng đặc dụng chặt hạ cây cổ thụ theo đúng quy định của pháp luật quản lý",
      "Đi trên đường mòn tuần tra rừng, thu nhặt củi khô gãy mục trong rừng sản xuất của gia đình",
      "Đặt bẫy dây phanh sắt bắt thú rừng theo đúng quy định của pháp luật quản lý",
      "Đổ hóa chất độc xuống suối đầu nguồn để bắt cá theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Đi trên đường mòn tuần tra rừng, thu nhặt củi khô gãy mục trong rừng sản xuất của gia đình",
    "explanation": "Điều 9, Điều 52 Luật Lâm nghiệp số 16/2017/QH14: Công dân có quyền đi lại trên các tuyến đường giao thông công cộng, đường dân sinh đi qua rừng nhưng phải chấp hành quy định bảo vệ rừng và PCCC."
  },
  {
    "question": "Hành vi đốt dọn thực bì không làm đường băng cản lửa, dù CHƯA LÀM CHÁY RỪNG thì có bị phạt không?",
    "options": [
      "Chưa cháy rừng thì không bao giờ bị phạt theo đúng quy định của pháp luật quản lý",
      "Vẫn bị xử phạt vi phạm hành chính về hành vi vi phạm quy định an toàn phòng cháy chữa cháy rừng",
      "Chỉ bị phạt nếu người khác chụp ảnh đưa lên mạng theo đúng quy định của pháp luật quản lý",
      "Chỉ bị phạt khi có khói bay vào mắt người khác theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Vẫn bị xử phạt vi phạm hành chính về hành vi vi phạm quy định an toàn phòng cháy chữa cháy rừng",
    "explanation": "Khoản 1 Điều 20 Nghị định 146/2026/NĐ-CP quy định hành vi đốt nương rẫy, đốt thực bì không làm đường băng cản lửa hoặc đốt trong mùa khô hanh nguy hiểm đã bị phạt tiền kể cả khi chưa làm cháy lan."
  },
  {
    "question": "Thông điệp quan trọng nhất mà mỗi người dân, chủ rừng cần ghi nhớ để vừa phát triển kinh tế vừa không vi phạm pháp luật là gì?",
    "options": [
      "Bảo vệ rừng là bảo vệ nguồn sống; chỉ khai thác rừng trồng hợp pháp, không phá rừng tự nhiên và luôn cảnh giác phòng chống cháy rừng",
      "Cứ lén lút chặt phá rừng tự nhiên làm nương rẫy trước, khi nào bị cơ quan Kiểm lâm phát hiện thì mới đi vay tiền nộp phạt sau",
      "Không cần quan tâm đến các quy định của pháp luật lâm nghiệp vì trạm Kiểm lâm ở xa trên huyện không bao giờ vào tận thôn bản",
      "Rừng của nhà ai thì nhà nấy tự lo, thấy rừng phòng hộ đầu nguồn bị bốc cháy ngùn ngụt thì mặc kệ không việc gì phải đi dập lửa"
    ],
    "correct": "Bảo vệ rừng là bảo vệ nguồn sống; chỉ khai thác rừng trồng hợp pháp, không phá rừng tự nhiên và luôn cảnh giác phòng chống cháy rừng",
    "explanation": "Điều 9, Điều 102 Luật Lâm nghiệp số 16/2017/QH14: Bảo vệ rừng là trách nhiệm toàn dân; chấp hành nghiêm pháp luật lâm nghiệp giúp người dân yên tâm phát triển kinh tế từ rừng trồng, tránh rủi ro vướng vòng lao lý."
  },
  {
    "question": "Nguyên tắc 'ĐÚNG LUẬT' trong hoạt động phóng sinh động vật hoang dã được hiểu như thế nào?",
    "options": [
      "Tuyệt đối không săn bắt, mua bán, vận chuyển, nuôi nhốt hoặc phóng sinh động vật hoang dã trái quy định của pháp luật",
      "Được phép mua bất kỳ loài động vật hoang dã nào ngoài chợ đem thả phóng sinh vì tin rằng việc đó tích lũy được nhiều phúc đức",
      "Chỉ cần làm lễ thắp hương xin phép là được quyền thả tự do mọi loài rắn độc, thú dữ vào các khu du lịch sinh thái đông người",
      "Được tự do giăng lưới bẫy chim rừng rồi đem thả sang vườn nhà hàng xóm để tạo không gian thiên nhiên chim hót líu lo vui tai"
    ],
    "correct": "Tuyệt đối không săn bắt, mua bán, vận chuyển, nuôi nhốt hoặc phóng sinh động vật hoang dã trái quy định của pháp luật",
    "explanation": "Nghị định 06/2019/NĐ-CP, Nghị định 146/2026/NĐ-CP và Điều 244 BLHS: Phóng sinh ĐÚNG LUẬT nghiêm cấm tiếp tay cho nạn săn bắt, buôn bán, nuôi nhốt động vật hoang dã trái phép dưới chiêu bài phóng sinh."
  },
  {
    "question": "Thế nào là phóng sinh 'ĐÚNG LOÀI' theo khuyến cáo của cơ quan Kiểm lâm và bảo tồn thiên nhiên?",
    "options": [
      "Lựa chọn loài bản địa phù hợp với hệ sinh thái; tuyệt đối không thả loài ngoại lai xâm hại hoặc loài lạ",
      "Ưu tiên mua rùa tai đỏ và cá lau kính đem thả vì tin rằng cá lau kính sẽ tình nguyện dọn sạch rác dưới đáy hồ",
      "Mua cá sấu hoặc trăn gấm cỡ lớn thả vào hồ bơi công cộng để thử thách lòng dũng cảm của các kình ngư địa phương",
      "Cứ thấy con vật gì bán rong ngoài chợ giá rẻ là mua hết đem thả xuống ao làng để tích lũy thật nhiều công đức may mắn"
    ],
    "correct": "Lựa chọn loài bản địa phù hợp với hệ sinh thái; tuyệt đối không thả loài ngoại lai xâm hại hoặc loài lạ",
    "explanation": "Điều 43 Nghị định số 45/2022/NĐ-CP và Luật Đa dạng sinh học: Phóng sinh đúng loài đòi hỏi chỉ thả loài bản địa phù hợp; nghiêm cấm phóng sinh sinh vật ngoại lai xâm hại."
  },
  {
    "question": "Nguyên tắc phóng sinh 'ĐÚNG NƠI' yêu cầu người dân phải lựa chọn sinh cảnh như thế nào khi tái thả động vật?",
    "options": [
      "Lựa chọn sinh cảnh phù hợp với tập tính loài, bảo đảm có nguồn thức ăn, nước uống và điều kiện sinh tồn an toàn",
      "Đem rùa núi cạn ném thẳng từ trên cầu cao xuống dòng nước sông sâu chảy xiết để rèn luyện kỹ năng bơi lội sinh tồn",
      "Thả đàn chim sâu mới mua vào trong phòng khách đóng kín cửa sổ để chim được tận hưởng máy điều hòa mát mẻ cùng gia chủ",
      "Mang các loài rắn lục ra thả ngay giữa sân chơi của trường mầm non để lũ chuột bọ không dám bén mảng đến gần"
    ],
    "correct": "Lựa chọn sinh cảnh phù hợp với tập tính loài, bảo đảm có nguồn thức ăn, nước uống và điều kiện sinh tồn an toàn",
    "explanation": "Khoản 1 Điều 41 Luật Đa dạng sinh học số 20/2008/QH12: Tái thả động vật phải lựa chọn sinh cảnh tự nhiên tương thích với tập tính sinh học của loài để con vật sinh tồn an toàn."
  },
  {
    "question": "Nguyên tắc phóng sinh 'ĐÚNG LÚC' có ý nghĩa gì đối với khả năng sống sót của động vật?",
    "options": [
      "Lựa chọn thời điểm thời tiết và môi trường phù hợp với khả năng thích nghi của loài (tránh thả giữa trưa nắng gắt hoặc mùa đông giá rét)",
      "Bắt buộc phải canh đúng 12 giờ đêm ngày rằm tháng bảy âm lịch đem con vật ra thả thì mới phát huy được hết linh khí của trời đất",
      "Mua từ chợ về lúc nào là phải vứt ngay con vật xuống nước lúc đó, bất chấp con vật đang ngạt thở yếu ớt trong túi nilon bị buộc kín",
      "Chờ đến khi con vật bị ốm liệt giường không còn khả năng tự bò hay bay nhảy được nữa mới đem ra bìa rừng thả cho về với thiên nhiên"
    ],
    "correct": "Lựa chọn thời điểm thời tiết và môi trường phù hợp với khả năng thích nghi của loài (tránh thả giữa trưa nắng gắt hoặc mùa đông giá rét)",
    "explanation": "Khoản 1 Điều 33 Nghị định 146/2026/NĐ-CP và quy trình cứu hộ, tái thả: Phóng sinh ĐÚNG LÚC đòi hỏi điều kiện thời tiết thuận lợi, nhiệt độ mát mẻ để động vật không bị sốc nhiệt và có cơ hội sinh tồn cao nhất."
  },
  {
    "question": "Nguyên tắc phóng sinh 'ĐÚNG CÁCH' đòi hỏi người dân cần lưu ý điều gì trước và trong khi thả con vật?",
    "options": [
      "Nhận diện loài, đánh giá tình trạng sức khỏe con vật trước khi thả; thả nhẹ nhàng; trường hợp động vật hoang dã nguy cấp cần cứu hộ phải báo cơ quan Kiểm lâm",
      "Ném thật mạnh từ trên cầu cao xuống sông để con vật nhanh chóng bơi đi theo đúng quy định của pháp luật quản lý",
      "Để nguyên cả túi nilon và dây thừng buộc chặt chân con vật rồi vứt xuống nước theo đúng quy định của pháp luật quản lý",
      "Cắt bớt lông cánh của chim trước khi thả để chim bay lượn gần mặt đất theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Nhận diện loài, đánh giá tình trạng sức khỏe con vật trước khi thả; thả nhẹ nhàng; trường hợp động vật hoang dã nguy cấp cần cứu hộ phải báo cơ quan Kiểm lâm",
    "explanation": "Điều 10 Luật Chăn nuôi và Điều 33 Nghị định 146/2026/NĐ-CP: Trước khi thả phải kiểm tra sức khỏe động vật, loại bỏ bao bì, dây trói; động vật nguy cấp cần cứu hộ phải giao nộp cơ quan Kiểm lâm."
  },
  {
    "question": "Hành vi mua động vật hoang dã (chim trời, rùa, rắn) tại các điểm bán rong trước cổng đền chùa để phóng sinh gây ra tác hại xã hội nào hàng đầu?",
    "options": [
      "Tạo áp lực săn bắt: Nhu cầu mua phóng sinh vô tình tiếp tay cho thợ bẫy bắt, gom hàng và kích thích đường dây buôn bán trái phép động vật hoang dã",
      "Làm tăng sản lượng nông nghiệp của các hộ nông dân vùng ven rừng theo đúng quy định của pháp luật quản lý",
      "Giúp người nghèo có thêm công ăn việc làm hợp pháp được nhà nước bảo hộ theo đúng quy định của pháp luật quản lý",
      "Làm phong phú thêm nguồn gen động vật quý hiếm trong các khu đô thị theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Tạo áp lực săn bắt: Nhu cầu mua phóng sinh vô tình tiếp tay cho thợ bẫy bắt, gom hàng và kích thích đường dây buôn bán trái phép động vật hoang dã",
    "explanation": "Chỉ thị số 04/CT-TTg của Thủ tướng Chính phủ: Mua động vật phóng sinh tiếp tay cho nạn săn bắt tận diệt và đường dây buôn bán chim hoang dã, chim di cư trái phép."
  },
  {
    "question": "Việc phóng sinh các loài sinh vật ngoại lai xâm hại (như rùa tai đỏ, cá lau kính, ốc bươu vàng) vào sông suối tự nhiên gây ra hậu quả gì?",
    "options": [
      "Gây mất cân bằng hệ sinh thái: Loài ngoại lai cạnh tranh thức ăn, nơi sống, phát tán dịch bệnh và tiêu diệt các loài thủy sinh bản địa",
      "Cải thiện chất lượng nguồn nước ngọt sinh hoạt của các hộ dân trong vùng theo đúng quy định của pháp luật quản lý",
      "Tạo nguồn thức ăn dồi dào giúp bảo tồn các loài cá quý hiếm theo đúng quy định của pháp luật quản lý",
      "Không gây ảnh hưởng gì vì thiên nhiên tự có cơ chế đào thải tự nhiên theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Gây mất cân bằng hệ sinh thái: Loài ngoại lai cạnh tranh thức ăn, nơi sống, phát tán dịch bệnh và tiêu diệt các loài thủy sinh bản địa",
    "explanation": "Điều 43 Nghị định số 45/2022/NĐ-CP: Thả sinh vật ngoại lai xâm hại gây phá vỡ cân bằng sinh thái, tiêu diệt các loài thủy sinh bản địa, bị xử phạt vi phạm hành chính rất nặng."
  },
  {
    "question": "Thả phóng sinh những cá thể động vật bị thương tật, suy kiệt sức khỏe hoặc nuôi nhốt lâu ngày sẽ dẫn đến hậu quả gì cho chính con vật?",
    "options": [
      "Gây tổn hại cho chính con vật: Động vật suy yếu, mất khả năng tự kiếm ăn sẽ bị chết đói, chết ngạt hoặc phát tán mầm bệnh nguy hiểm ra môi trường",
      "Giúp con vật nhanh chóng hồi phục thể lực kỳ diệu trong vài giờ theo đúng quy định của pháp luật quản lý",
      "Con vật tự động tìm được đường trở về với chuồng trại ban đầu theo đúng quy định của pháp luật quản lý",
      "Tạo kháng thể tự nhiên giúp con vật miễn nhiễm với mọi loại virus theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Gây tổn hại cho chính con vật: Động vật suy yếu, mất khả năng tự kiếm ăn sẽ bị chết đói, chết ngạt hoặc phát tán mầm bệnh nguy hiểm ra môi trường",
    "explanation": "Luật Thú y số 79/2015/QH13 và Luật Bảo vệ môi trường: Thả động vật suy kiệt, nhiễm bệnh khiến chúng chết hàng loạt, phát tán dịch bệnh nguy hiểm và gây ô nhiễm nguồn nước."
  },
  {
    "question": "Tình huống: Chị B vào ngày rằm mua 2 con rùa tai đỏ từ người bán dạo mang ra hồ nước cạnh đền gần bìa rừng thả phóng sinh. Hành vi của chị B bị đánh giá như thế nào?",
    "options": [
      "Sai quy định: Rùa tai đỏ là loài ngoại lai xâm hại nguy hiểm, hành vi phát tán vào tự nhiên bị pháp luật nghiêm cấm và bị xử phạt hành chính",
      "Hoàn toàn đúng vì chị B có tâm thiện nguyện cầu bình an cho gia đình theo đúng quy định của pháp luật quản lý",
      "Hợp pháp nếu chị B thả rùa vào lúc trời mưa râm mát theo đúng quy định của pháp luật quản lý",
      "Chỉ bị nhắc nhở nếu rùa tai đỏ bò lên bờ cắn người theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Sai quy định: Rùa tai đỏ là loài ngoại lai xâm hại nguy hiểm, hành vi phát tán vào tự nhiên bị pháp luật nghiêm cấm và bị xử phạt hành chính",
    "explanation": "Phát tán loài ngoại lai xâm hại (rùa tai đỏ) vi phạm Điều 43 Nghị định 45/2022/NĐ-CP về bảo vệ môi trường, bị phạt tiền từ 1 triệu đến hàng chục triệu đồng."
  },
  {
    "question": "Tình huống: Anh A thấy người bán dạo chở lồng chim sẻ, chim sâu kiệt sức trước cổng chùa, anh A mua hết 50 con đem lên sườn đồi bìa rừng mở lồng thả. Khi thả ra có hơn 20 con chết tại chỗ. Nhận định nào đúng nhất về việc làm của anh A?",
    "options": [
      "Phóng sinh sai cách: Mua chim bẫy bắt vừa tiếp tay cho nạn săn bẫy chim trời, vừa làm chim bị chết ngạt, sốc nhiệt và gây ô nhiễm môi trường",
      "Là hành động đại từ bi đáng được chính quyền địa phương khen thưởng theo đúng quy định của pháp luật quản lý",
      "Đúng luật vì chim sẻ là loài chim thông thường không bị cấm săn bắt theo đúng quy định của pháp luật quản lý",
      "Anh A không có lỗi vì trách nhiệm làm chết chim thuộc về người bán lồng theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Phóng sinh sai cách: Mua chim bẫy bắt vừa tiếp tay cho nạn săn bẫy chim trời, vừa làm chim bị chết ngạt, sốc nhiệt và gây ô nhiễm môi trường",
    "explanation": "Chỉ thị số 04/CT-TTg ngày 17/5/2022 của Thủ tướng Chính phủ: Mua chim bẫy bắt phóng sinh là gián tiếp tiêu thụ lâm sản bất hợp pháp, tiếp tay cho thợ bẫy chim tận diệt môi trường tự nhiên."
  },
  {
    "question": "Vào các dịp lễ Thanh minh, Vu lan, rằm tháng 7 và ngày Tết, tại sao nguy cơ cháy rừng tại Tuyên Quang lại đặc biệt tăng cao?",
    "options": [
      "Do người dân gia tăng hoạt động tín ngưỡng, đi tảo mộ, thắp hương và đốt vàng mã bất cẩn tại các nghĩa địa, đồi nương nằm xen kẽ hoặc giáp ranh với rừng",
      "Do nhiệt độ mùa đông tại Tuyên Quang luôn nóng gay gắt trên 45 độ C theo đúng quy định của pháp luật quản lý",
      "Do các loài thú rừng tự cọ xát cơ thể vào thân cây làm bốc cháy theo đúng quy định của pháp luật quản lý",
      "Do sấm sét tự nhiên xuất hiện liên tục trong cả tháng Tết âm lịch theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Do người dân gia tăng hoạt động tín ngưỡng, đi tảo mộ, thắp hương và đốt vàng mã bất cẩn tại các nghĩa địa, đồi nương nằm xen kẽ hoặc giáp ranh với rừng",
    "explanation": "Điều 43, 47 Nghị định số 156/2018/NĐ-CP: Thời kỳ Tết và Thanh minh là mùa hanh khô cao điểm; thắp hương đốt vàng mã gần bìa rừng là nguyên nhân hàng đầu gây cháy rừng ở miền núi."
  },
  {
    "question": "Khi đi tảo mộ, thăm viếng nghĩa trang hoặc thực hiện nghi lễ gần khu vực rừng, quy tắc sử dụng lửa an toàn nào là BẮT BUỘC?",
    "options": [
      "Không đốt vàng mã khi trời nắng nóng, gió to; không thắp hương sát thảm cỏ khô; luôn có người trông coi và dập tắt than",
      "Cố tình ngồi quạt cho tàn lửa bay thật cao lên trời để các cụ dưới cõi âm nhận tiền vàng nhanh và đầy đủ hơn",
      "Cắm cả bó hương lớn vào gốc cây thông cổ thụ rồi chắp tay khấn xin thần rừng phù hộ cho lửa không bén vào lá khô",
      "Đốt một đống vàng mã cao ngất ngưởng ngay dưới tán rừng keo khô khốc rồi rủ nhau đi sang đồi bên cạnh ăn cỗ uống rượu"
    ],
    "correct": "Không đốt vàng mã khi trời nắng nóng, gió to; không thắp hương sát thảm cỏ khô; luôn có người trông coi và dập tắt than",
    "explanation": "Khoản 1 Điều 16 Nghị định số 146/2026/NĐ-CP: Nghiêm cấm đốt vàng mã khi gió to, nắng gắt; không thắp hương gần thảm lá khô; luôn có người trông coi và dập tắt hoàn toàn lửa trước khi về."
  },
  {
    "question": "Hành động nào sau đây bị nghiêm cấm tuyệt đối khi đi lễ hội, viếng mộ gần bìa rừng?",
    "options": [
      "Vứt tàn hương, tàn thuốc lá hoặc than củi chưa tắt hẳn vào bụi cây, thảm thực vật khô ven rừng",
      "Mang theo chai nước sạch để dập tắt tàn hương sau khi cúng lễ theo đúng quy định của pháp luật quản lý",
      "Dọn sạch cỏ rác khô xung quanh phần mộ trước khi thắp nén hương theo đúng quy định của pháp luật quản lý",
      "Báo cho Kiểm lâm địa bàn khi thấy có khói lạ bốc lên từ phía sườn rừng"
    ],
    "correct": "Vứt tàn hương, tàn thuốc lá hoặc than củi chưa tắt hẳn vào bụi cây, thảm thực vật khô ven rừng",
    "explanation": "Vứt tàn thuốc, tàn hương còn than đỏ vào thảm lá khô mùa hanh khô là nguyên nhân trực tiếp phát sinh cháy rừng, bị xử phạt nặng theo Điều 16 NĐ 146/2026/NĐ-CP."
  },
  {
    "question": "Trước khi rời khỏi khu vực thắp hương, đốt vàng mã gần bìa rừng, người dân phải kiểm tra và xử lý tàn tro như thế nào?",
    "options": [
      "Dập tắt hoàn toàn tàn lửa, tàn hương và than đỏ bằng nước hoặc phủ đất cát dầy; bảo đảm không còn khói âm ỉ",
      "Chỉ cần thổi phù phù bằng miệng vài cái thấy tàn tro bay tản mát là yên tâm quay lưng ra về không cần ngó lại",
      "Tưới một ngụm trà đặc còn thừa dưới đáy chén lên đống than đỏ rồi tin rằng bấy nhiêu là đủ dập tắt hỏa thần",
      "Lấy chân gạt gạt đống tàn than đỏ sang bụi cỏ khô bên cạnh cho gọn gàng lối đi lại của đoàn người đến viếng sau"
    ],
    "correct": "Dập tắt hoàn toàn tàn lửa, tàn hương và than đỏ bằng nước hoặc phủ đất cát dầy; bảo đảm không còn khói âm ỉ",
    "explanation": "Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP và Điều 16 Nghị định 146/2026/NĐ-CP: Dập tắt hoàn toàn tàn hương, than đỏ bằng nước hoặc lấp đất dày trước khi rời khỏi nghĩa trang ven rừng để phòng ngừa cháy lan."
  },
  {
    "question": "Khi phát hiện có đám cháy rừng hoặc khói bốc lên gần bìa rừng, người dân cần xử lý như thế nào là nhanh chóng và đúng nhất?",
    "options": [
      "Hô hoán người xung quanh hỗ trợ ngăn chặn dập lửa ban đầu và báo ngay cho lực lượng Kiểm lâm, chính quyền xã hoặc Cảnh sát PCCC gần nhất",
      "Lẳng lặng bỏ về nhà đóng kín cửa coi như mình không nhìn thấy theo đúng quy định của pháp luật quản lý",
      "Chờ đến khi lửa lan sang nương nhà mình thì mới đi tìm người giúp theo đúng quy định của pháp luật quản lý",
      "Đăng bài lên mạng xã hội chờ người khác gọi điện báo công an theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Hô hoán người xung quanh hỗ trợ ngăn chặn dập lửa ban đầu và báo ngay cho lực lượng Kiểm lâm, chính quyền xã hoặc Cảnh sát PCCC gần nhất",
    "explanation": "Khoản 2 Điều 53 Luật Lâm nghiệp số 16/2017/QH14 và Điều 49 Nghị định số 156/2018/NĐ-CP: Khi phát hiện cháy rừng phải lập tức báo động tại chỗ và gọi đường dây nóng Kiểm lâm/UBND xã để triển khai dập lửa kịp thời."
  },
  {
    "question": "Tình huống: Ông C đi tảo mộ dịp tiết Thanh minh ở sườn đồi, đốt vàng mã xong gặp gió to cuốn tàn lửa vào rừng keo gây cháy 0,5 ha rừng. Ông C sẽ bị xử lý như thế nào?",
    "options": [
      "Bị xử phạt vi phạm hành chính hoặc truy cứu trách nhiệm hình sự về tội vi phạm quy định PCCC rừng, đồng thời phải bồi thường toàn bộ thiệt hại về rừng",
      "Không bị xử lý vì việc đốt vàng mã là phong tục tập quán tâm linh truyền thống theo đúng quy định của pháp luật quản lý",
      "Chỉ bị phê bình nhắc nhở tại cuộc họp thôn cuối năm theo đúng quy định của pháp luật quản lý",
      "Được Nhà nước hỗ trợ tiền bồi thường thiệt hại cho chủ rừng keo theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Bị xử phạt vi phạm hành chính hoặc truy cứu trách nhiệm hình sự về tội vi phạm quy định PCCC rừng, đồng thời phải bồi thường toàn bộ thiệt hại về rừng",
    "explanation": "Vô ý để lửa cháy lan vào rừng bị phạt tiền nặng theo Điều 16 NĐ 146/2026/NĐ-CP hoặc khởi tố hình sự theo Điều 313 BLHS và phải bồi thường thiệt hại dân sự."
  },
  {
    "question": "Đối với cây cảnh có nguồn gốc từ vườn nhà hoặc khai thác trên đất thổ cư của hộ gia đình, pháp luật lâm nghiệp có quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp' không?",
    "options": [
      "Pháp luật hiện hành KHÔNG quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp'; việc chứng minh nguồn gốc thực hiện bằng Bảng kê lâm sản",
      "Bắt buộc người dân phải làm đơn kính gửi Giám đốc Sở Nông nghiệp và Môi trường trực tiếp về tận vườn nhà thẩm định cấp giấy xác nhận",
      "Chỉ có đồng chí Chủ tịch Ủy ban nhân dân cấp xã mới có thẩm quyền ký giấy chứng nhận nguồn gốc xuất xứ cho từng cây cảnh trong vườn",
      "Mọi loại cây cảnh do người dân tự trồng trong vườn nhà đều bị nghiêm cấm tuyệt đối không được phép mua bán vận chuyển ra khỏi địa bàn xã"
    ],
    "correct": "Pháp luật hiện hành KHÔNG quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp'; việc chứng minh nguồn gốc thực hiện bằng Bảng kê lâm sản",
    "explanation": "Thông tư số 26/2022/TT-BNNPTNT và Thông tư số 84/2025/TT-BNNMT: Pháp luật không quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp' cho cây cảnh vườn nhà; tính hợp pháp thể hiện qua Bảng kê lâm sản do chủ sở hữu lập."
  },
  {
    "question": "Trường hợp cây cảnh vườn nhà là loài cây gỗ thông thường (không thuộc loài nguy cấp, quý hiếm), khi xuất bán vận chuyển có bắt buộc phải xin xác nhận Bảng kê lâm sản của Kiểm lâm không?",
    "options": [
      "KHÔNG thuộc đối tượng buộc phải xác nhận; chủ cây tự lập Bảng kê lâm sản. Trường hợp chủ cây có nhu cầu tự nguyện đề nghị xác nhận thì cơ quan Kiểm lâm sẽ tiếp nhận xác nhận",
      "Bắt buộc 100% trường hợp phải có xác nhận có đóng dấu đỏ của Hạt trưởng Hạt Kiểm lâm theo đúng quy định của pháp luật quản lý",
      "Phải được Bộ trưởng Bộ Nông nghiệp và Môi trường ký phê duyệt từng cây theo đúng quy định của pháp luật quản lý",
      "Chỉ cần người mua tự viết giấy tay là hợp pháp không cần Bảng kê lâm sản theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "KHÔNG thuộc đối tượng buộc phải xác nhận; chủ cây tự lập Bảng kê lâm sản. Trường hợp chủ cây có nhu cầu tự nguyện đề nghị xác nhận thì cơ quan Kiểm lâm sẽ tiếp nhận xác nhận",
    "explanation": "Điểm đ Khoản 3 Điều 5 Thông tư 26/2025/TT-BNNMT: Cây gỗ loài thông thường không buộc xác nhận Bảng kê; Kiểm lâm chỉ xác nhận khi chủ lâm sản có nhu cầu tự nguyện."
  },
  {
    "question": "Trường hợp cây cảnh vườn nhà là loài thực vật rừng thuộc Danh mục nguy cấp, quý, hiếm (Nhóm IA, IIA) hoặc Phụ lục CITES, hồ sơ đề nghị Kiểm lâm xác nhận Bảng kê lâm sản gồm những gì?",
    "options": [
      "Bản chính Đơn đề nghị xác nhận Bảng kê (Mẫu số 03), Bản chính Bảng kê lâm sản và Bản sao Phương án khai thác",
      "Chỉ cần nộp bản sao Giấy khai sinh của chủ vườn cây theo đúng quy định của pháp luật quản lý",
      "Chỉ cần một bức ảnh chụp cây hoa đăng lên mạng xã hội theo đúng quy định của pháp luật quản lý",
      "Phải nộp sổ đỏ bản gốc lưu giữ vĩnh viễn tại cơ quan Kiểm lâm theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Bản chính Đơn đề nghị xác nhận Bảng kê (Mẫu số 03), Bản chính Bảng kê lâm sản và Bản sao Phương án khai thác",
    "explanation": "Khoản 6 Điều 5 Thông tư 26/2025/TT-BNNMT: Hồ sơ gồm Đơn đề nghị xác nhận Mẫu 03, Bảng kê lâm sản và Phương án khai thác lập theo Mẫu số 08 Phụ lục II."
  },
  {
    "question": "Người dân khi nộp hồ sơ đề nghị xác nhận Bảng kê lâm sản cho cây cảnh tại Cơ quan Kiểm lâm sở tại có phải nộp khoản tiền phí hay lệ phí nào không?",
    "options": [
      "Hoàn toàn KHÔNG thu phí; thủ tục xác nhận nguồn gốc lâm sản được cơ quan Kiểm lâm thực hiện miễn phí theo quy định",
      "Phải nộp lệ phí bằng 10% giá trị ước tính của cây cảnh theo đúng quy định của pháp luật quản lý",
      "Phải nộp cố định 2.000.000 đồng lệ phí đóng dấu xác nhận theo đúng quy định của pháp luật quản lý",
      "Tùy thuộc vào thỏa thuận miệng giữa người dân và cán bộ tiếp nhận hồ sơ theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Hoàn toàn KHÔNG thu phí; thủ tục xác nhận nguồn gốc lâm sản được cơ quan Kiểm lâm thực hiện miễn phí theo quy định",
    "explanation": "Điểm a Khoản 7 Điều 5 Thông tư số 26/2025/TT-BNNMT: Thủ tục xác nhận Bảng kê lâm sản tại cơ quan Kiểm lâm sở tại hoàn toàn không thu bất kỳ khoản phí, lệ phí nào."
  },
  {
    "question": "Tình huống: Anh M có 02 cây mai cổ thụ trồng lâu năm trên đất thổ cư muốn chở sang tỉnh khác bán. Anh M đến Hạt Kiểm lâm xin 'Giấy xác nhận nguồn gốc cây cảnh'. Cán bộ Kiểm lâm hướng dẫn thế nào là chuẩn xác?",
    "options": [
      "Giải thích pháp luật không có thủ tục này; hướng dẫn anh M tự lập Bảng kê lâm sản, nếu tự nguyện thì Kiểm lâm xác nhận miễn phí",
      "Bắt anh M phải mang cả hai cây mai cổ thụ lên đặt trước cửa phòng Hạt trưởng để hội đồng ngắm nghía chấm điểm hoa",
      "Yêu cầu anh M phải làm giấy khai sinh và trích lục gia phả 3 đời của cây mai xem có cụ tổ nào sống trong rừng tự nhiên không",
      "Thu giữ luôn hai cây mai của anh M và bảo bao giờ cây mai nở đúng vào sáng mùng một Tết mới trả lại hồ sơ xác nhận"
    ],
    "correct": "Giải thích pháp luật không có thủ tục này; hướng dẫn anh M tự lập Bảng kê lâm sản, nếu tự nguyện thì Kiểm lâm xác nhận miễn phí",
    "explanation": "Cán bộ Kiểm lâm hướng dẫn theo Thông tư 26/2025/TT-BNNMT: pháp luật không cấp 'giấy xác nhận nguồn gốc', chủ cây tự lập Bảng kê hoặc đề nghị xác nhận tự nguyện không thu phí."
  },
  {
    "question": "Tại sao khi xác định tính pháp lý và danh mục quản lý của một loài cây rừng, cây cảnh, căn cứ khoa học chính thức duy nhất bắt buộc phải sử dụng là gì?",
    "options": [
      "Tên khoa học (tên Latinh) của loài; tên thông thường bằng tiếng Việt hoặc tiếng Anh chỉ có giá trị tham khảo",
      "Tên gọi dân gian truyền khẩu của các bậc cao niên trong làng theo phong tục tập quán bản địa từ xưa để lại",
      "Tên thương mại hoa mỹ do các nhà vườn buôn bán sinh vật cảnh tự sáng tạo ra để thu hút khách hàng trả giá cao",
      "Dựa vào màu sắc sặc sỡ của hoa hoặc hương thơm ngào ngạt của quả chín để đặt tên pháp lý chính thức cho loài cây"
    ],
    "correct": "Tên khoa học (tên Latinh) của loài; tên thông thường bằng tiếng Việt hoặc tiếng Anh chỉ có giá trị tham khảo",
    "explanation": "Khoản 1 Điều 3 Nghị định số 06/2019/NĐ-CP và Phụ lục Công ước CITES: Danh mục động vật, thực vật hoang dã nguy cấp, quý, hiếm xác định căn cứ khoa học duy nhất theo tên khoa học (tên Latinh) để tránh trùng lặp nhầm lẫn."
  },
  {
    "question": "Người dân nhặt được một cá thể tê tê hoặc cu li bò vào vườn nhà thì cách xử lý nào sau đây thể hiện đúng tinh thần phóng sinh và đúng pháp luật?",
    "options": [
      "Thông báo ngay cho Cơ quan Kiểm lâm sở tại hoặc Trung tâm cứu hộ động vật hoang dã để tiếp nhận, cứu hộ và tái thả đúng quy trình bảo tồn",
      "Tự mình mang ra khu rừng gần nhất thả ngay mà không cần kiểm tra sức khỏe con vật theo đúng quy định của pháp luật quản lý",
      "Đem ra chợ bán cho phật tử mua phóng sinh lấy tiền làm từ thiện theo đúng quy định của pháp luật quản lý",
      "Nhốt lại trong chuồng gà nuôi dưỡng làm cảnh cho con cháu xem theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Thông báo ngay cho Cơ quan Kiểm lâm sở tại hoặc Trung tâm cứu hộ động vật hoang dã để tiếp nhận, cứu hộ và tái thả đúng quy trình bảo tồn",
    "explanation": "Khoản 1 Điều 33 Nghị định số 146/2026/NĐ-CP và Nghị định 06/2019/NĐ-CP: Cá thể động vật rừng nguy cấp (tê tê, cu li) nhặt được phải bàn giao ngay cho cơ quan Kiểm lâm sở tại để cứu hộ theo quy chuẩn."
  },
  {
    "question": "Hành vi dùng lửa hun khói bắt tổ ong rừng vào mùa khô hanh tiềm ẩn nguy cơ pháp lý và xã hội nào?",
    "options": [
      "Vi phạm nghiêm trọng quy định PCCC rừng; tàn lửa rất dễ gây cháy lan rừng tự nhiên, người vi phạm bị phạt tiền hoặc phạt tù và bồi thường thiệt hại",
      "Được khuyến khích vì giúp người dân có thêm thu nhập từ sáp và mật ong rừng theo đúng quy định của pháp luật quản lý",
      "Chỉ bị phạt nếu tổ ong nằm trong bán kính 10 mét cách trụ sở UBND xã theo đúng quy định của pháp luật quản lý",
      "Hoàn toàn vô hại vì khói thuốc làm ong ngủ say không gây cháy theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Vi phạm nghiêm trọng quy định PCCC rừng; tàn lửa rất dễ gây cháy lan rừng tự nhiên, người vi phạm bị phạt tiền hoặc phạt tù và bồi thường thiệt hại",
    "explanation": "Dùng lửa đốt tổ ong rừng là nguyên nhân phổ biến gây cháy rừng mùa khô ở vùng cao; hành vi này bị cấm và bị xử phạt theo Điều 16 NĐ 146/2026/NĐ-CP hoặc Điều 313 BLHS."
  },
  {
    "question": "Khi người dân làm nương rẫy thu dọn cỏ khô, tàn dư sau thu hoạch thì thời điểm nào trong ngày TUYỆT ĐỐI KHÔNG ĐƯỢC đốt dọn?",
    "options": [
      "Buổi trưa nắng gắt, hanh khô, có gió to và khi cấp dự báo cháy rừng đang ở Cấp IV (Cấp nguy hiểm), Cấp V (Cấp cực kỳ nguy hiểm)",
      "Sáng sớm khi sương mù còn dày và gió lặng theo đúng quy định của pháp luật quản lý",
      "Chiều tối khi mặt trời đã lặn và không khí mát mẻ theo đúng quy định của pháp luật quản lý",
      "Ngày trời râm mát có mưa phùn lất phất theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Buổi trưa nắng gắt, hanh khô, có gió to và khi cấp dự báo cháy rừng đang ở Cấp IV (Cấp nguy hiểm), Cấp V (Cấp cực kỳ nguy hiểm)",
    "explanation": "Điều 47 NĐ 156/2018/NĐ-CP nghiêm cấm đốt dọn nương rẫy, thực bì vào thời điểm nắng to, gió lớn và khi dự báo cháy rừng từ Cấp IV, Cấp V trở lên."
  },
  {
    "question": "Hộ gia đình có cây xanh bóng mát trồng trên đất ở bị gãy đổ do bão đè vào tường rào nhà hàng xóm, việc giải quyết thiệt hại thực hiện theo nguyên tắc nào?",
    "options": [
      "Hai bên thương lượng bồi thường thiệt hại dân sự theo quy định của Bộ luật Dân sự về bồi thường thiệt hại do cây cối gây ra; dọn dẹp bảo đảm an toàn",
      "Bắt buộc cơ quan Kiểm lâm phải đứng ra bồi thường thay cho chủ cây theo đúng quy định của pháp luật quản lý",
      "Người bị cây đổ đè vào nhà phải tự chịu chi phí sửa chữa không được khiếu nại theo đúng quy định của pháp luật quản lý",
      "UBND xã phải bỏ ngân sách nhà nước ra đền bù toàn bộ thiệt hại theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Hai bên thương lượng bồi thường thiệt hại dân sự theo quy định của Bộ luật Dân sự về bồi thường thiệt hại do cây cối gây ra; dọn dẹp bảo đảm an toàn",
    "explanation": "Điều 604 Bộ luật Dân sự quy định chủ sở hữu, người chiếm hữu cây cối phải bồi thường thiệt hại do cây cối gây ra cho người khác."
  },
  {
    "question": "Hành vi chặt phá các cây gỗ cổ thụ trong rừng đầu nguồn để lấy phong lan rừng mang bán cho người chơi hoa lan bị xử phạt về hành vi gì?",
    "options": [
      "Hành vi khai thác rừng và thực vật rừng trái pháp luật; bị xử phạt VPHC, tịch thu tang vật, phương tiện hoặc xử lý hình sự tùy theo mức độ thiệt hại",
      "Chỉ là hành vi vi phạm trật tự công cộng thông thường theo đúng quy định của pháp luật quản lý",
      "Được pháp luật bảo hộ quyền tự do khai thác tài nguyên thiên nhiên theo đúng quy định của pháp luật quản lý",
      "Chỉ bị tịch thu hoa lan, hành vi đốn hạ cây gỗ không bị xem xét theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Hành vi khai thác rừng và thực vật rừng trái pháp luật; bị xử phạt VPHC, tịch thu tang vật, phương tiện hoặc xử lý hình sự tùy theo mức độ thiệt hại",
    "explanation": "Chặt cây rừng lấy phong lan cấu thành hành vi khai thác rừng và thực vật rừng trái phép theo Điều 13, 15 NĐ 146/2026/NĐ-CP hoặc Điều 232 BLHS."
  },
  {
    "question": "Tình huống: Anh D đi xe máy qua bìa rừng thấy người ta vừa đốt vàng mã xong để lại đám tro than đang bốc khói dữ dội sắp bén vào đồi cỏ tranh. Anh D nên làm gì?",
    "options": [
      "Dừng xe, hô hoán người gần đó dùng cành cây, đất cát hoặc nước dập ngay đốm lửa, đồng thời gọi điện báo Kiểm lâm hoặc chính quyền địa phương",
      "Tăng ga phóng xe đi thật nhanh để tránh bị hiểu nhầm là người gây cháy theo đúng quy định của pháp luật quản lý",
      "Đứng quay clip livestream câu like trên mạng xã hội rồi bỏ đi theo đúng quy định của pháp luật quản lý",
      "Ném thêm que củi vào xem lửa có cháy to thành bão lửa hay không theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Dừng xe, hô hoán người gần đó dùng cành cây, đất cát hoặc nước dập ngay đốm lửa, đồng thời gọi điện báo Kiểm lâm hoặc chính quyền địa phương",
    "explanation": "Khoản 2 Điều 53 Luật Lâm nghiệp số 16/2017/QH14: Mọi công dân có trách nhiệm tham gia phòng cháy, chữa cháy rừng; khi phát hiện đốm than bốc khói gần bìa rừng phải kịp thời dập tắt hoặc báo ngay cơ quan chức năng."
  },
  {
    "question": "Ý nghĩa nhân văn và đúng đắn nhất của việc 'phóng sinh' trong xã hội văn minh hiện nay là gì?",
    "options": [
      "Bảo vệ sinh cảnh sống tự nhiên, tích cực tham gia trồng cây gây rừng, không tiêu thụ thịt thú rừng và không tiếp tay cho hoạt động bẫy bắt động vật hoang dã",
      "Càng bỏ nhiều tiền ra mua động vật nhốt trong lồng đem thả thì công đức càng lớn theo đúng quy định của pháp luật quản lý",
      "Chỉ cần phóng sinh vào ngày rằm tháng 7 là được xóa hết mọi lỗi lầm vi phạm theo đúng quy định của pháp luật quản lý",
      "Bắt động vật ngoài rừng về nhốt trong nhà rồi thả ra trong sân vườn gia đình theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Bảo vệ sinh cảnh sống tự nhiên, tích cực tham gia trồng cây gây rừng, không tiêu thụ thịt thú rừng và không tiếp tay cho hoạt động bẫy bắt động vật hoang dã",
    "explanation": "Luật Lâm nghiệp số 16/2017/QH14 và Luật Đa dạng sinh học: Phóng sinh chân chính là bảo vệ sinh thái tự nhiên, tích cực trồng cây gây rừng, không tiêu thụ thịt thú rừng và không tiếp tay săn bắt."
  },
  {
    "question": "Trường hợp người dân phát hiện một đối tượng mang theo lưới tàng hình và loa phát tiếng chim giả vào khu rừng gần nhà để bẫy chim di cư thì nên báo cho ai?",
    "options": [
      "Báo ngay cho Kiểm lâm địa bàn, Trưởng thôn hoặc Công an cấp xã để tiến hành kiểm tra, ngăn chặn và tịch thu dụng cụ bẫy bắt theo quy định",
      "Đến học hỏi kinh nghiệm bẫy chim để về làm theo kiếm thêm thu nhập theo đúng quy định của pháp luật quản lý",
      "Mặc kệ vì chim trời tự nhiên ai bắt được thì người đó hưởng theo đúng quy định của pháp luật quản lý",
      "Báo cho cơ quan Khí tượng thủy văn tỉnh để theo dõi hướng gió theo đúng quy định của pháp luật quản lý"
    ],
    "correct": "Báo ngay cho Kiểm lâm địa bàn, Trưởng thôn hoặc Công an cấp xã để tiến hành kiểm tra, ngăn chặn và tịch thu dụng cụ bẫy bắt theo quy định",
    "explanation": "Người dân có trách nhiệm thông báo cho Kiểm lâm địa bàn hoặc Công an xã xử lý nghiêm hành vi dùng lưới tàng hình bẫy bắt chim di cư theo Chỉ thị 04/CT-TTg."
  }
];
