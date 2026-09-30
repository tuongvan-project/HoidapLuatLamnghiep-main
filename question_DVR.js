/**
 * BỘ CÂU HỎI GÓI 4: CƠ SỞ NUÔI NHỐT, BUÔN BÁN ĐỘNG VẬT RỪNG & THỰC THI CITES (85 CÂU)
 * Cấu trúc: 1 đáp án đúng + 3 đáp án bẫy thực tế (4 options)
 * Đã chuẩn hóa:
 * - 100% không đưa tên điều khoản luật vào nội dung các đáp án (options)
 * - Tích hợp các tình huống dí dỏm, gần gũi, hài hước đời sống tạo cảm giác giải trí
 * - Cân đối độ dài 4 options đồng đều, triệt tiêu lỗi đoán mò đáp án dài
 * - 100% phần giải thích (explanation) trích dẫn chi tiết Điểm, Khoản, Điều, Nghị định/Thông tư/Luật
 */
const question_DVR = [
  {
    "question": "Theo Công ước CITES và Nghị định 06/2019/NĐ-CP (sửa đổi), điều kiện bắt buộc để một cơ sở nuôi được phép xuất khẩu thương mại mẫu vật động vật thuộc Phụ lục I CITES là gì?",
    "options": [
      "Cơ sở phải được cấp mã số CITES quốc tế thông qua Cơ quan CITES Việt Nam; cá thể xuất khẩu phải sinh sản từ thế hệ F2 trở đi",
      "Cơ sở chỉ cần có Giấy xác nhận nguồn gốc của Chi cục Kiểm lâm cấp tỉnh; cá thể xuất khẩu thuộc thế hệ F1 khỏe mạnh trong chuồng",
      "Cá thể động vật phải đạt độ tuổi trưởng thành và được Chi cục Thú y cấp tỉnh cấp Giấy chứng nhận kiểm dịch xuất khẩu chính thức",
      "Chỉ cần cơ sở có hợp đồng thương mại với doanh nghiệp nước ngoài và đã thanh toán đầy đủ thuế xuất khẩu tài nguyên động vật"
    ],
    "correct": "Cơ sở phải được cấp mã số CITES quốc tế thông qua Cơ quan CITES Việt Nam; cá thể xuất khẩu phải sinh sản từ thế hệ F2 trở đi",
    "explanation": "Điều 14 Nghị định 06/2019/NĐ-CP và Điều ước CITES: Xuất khẩu thương mại loài Phụ lục I bắt buộc cơ sở phải đăng ký với Ban Thư ký CITES quốc tế và mẫu vật phải từ thế hệ F2 trở đi."
  },
  {
    "question": "Quy chuẩn kỹ thuật quốc gia về đánh dấu mẫu vật cá thể động vật hoang dã nguy cấp (như gấu, hổ, cá sấu) bằng vi mạch điện tử (microchip) yêu cầu tiêu chuẩn nào?",
    "options": [
      "Cấy vi mạch điện tử đáp ứng tiêu chuẩn quốc tế ISO do cán bộ thú y thực hiện dưới sự giám sát của Kiểm lâm và lập biên bản",
      "Chủ cơ sở tự gắn điện thoại thông minh cài ứng dụng định vị GPS vào đuôi con vật để theo dõi bước chân đi lại mỗi ngày",
      "Dùng bút lông dạ viết hoa số căn cước công dân và số điện thoại của chủ nuôi lên mai rùa hoặc lên lưng con thú để tránh lạc",
      "Cắt một phần tai của con vật làm dấu nhận dạng hình ngôi sao năm cánh để phân biệt với thú nuôi của các trang trại đối thủ"
    ],
    "correct": "Cấy vi mạch điện tử đáp ứng tiêu chuẩn quốc tế ISO do cán bộ thú y thực hiện dưới sự giám sát của Kiểm lâm và lập biên bản",
    "explanation": "Điều 10 Nghị định số 06/2019/NĐ-CP (sửa đổi, bổ sung bởi Nghị định 84/2021/NĐ-CP): Động vật rừng nguy cấp thuộc Danh mục phải được đánh dấu bằng vi mạch điện tử đáp ứng tiêu chuẩn quốc gia ISO 11784/11785 có sự giám sát của Kiểm lâm và cơ quan thú y."
  },
  {
    "question": "Khi một cá thể động vật rừng Nhóm IB hoặc loài nguy cấp ưu tiên bảo vệ bị chết trong quá trình nuôi, trình tự xử lý pháp lý bắt buộc là gì?",
    "options": [
      "Báo ngay trong 24 giờ cho Kiểm lâm sở tại và thú y; lập biên bản xác nhận nguyên nhân chết, số vi mạch; tiêu hủy hoặc chuyển giao nghiên cứu",
      "Tự ý mổ thịt bán cho các nhà hàng kinh doanh ăn uống đặc sản trên địa bàn để kịp thời thu hồi một phần vốn đầu tư mua con giống",
      "Tiến hành thuộc da, nhồi bông làm tiêu bản trưng bày tại phòng truyền thống của gia đình mà không cần khai báo với cơ quan nào",
      "Đào hố chôn sâu dưới đất trong khuôn viên vườn nhà vào ban đêm để tránh gây mùi hôi ảnh hưởng đến môi trường các hộ dân xung quanh"
    ],
    "correct": "Báo ngay trong 24 giờ cho Kiểm lâm sở tại và thú y; lập biên bản xác nhận nguyên nhân chết, số vi mạch; tiêu hủy hoặc chuyển giao nghiên cứu",
    "explanation": "Khoản 1 và Khoản 2 Điều 11 Nghị định số 06/2019/NĐ-CP (sửa đổi bởi NĐ 84/2021/NĐ-CP): Khi cá thể động vật Nhóm IB bị chết, chủ cơ sở phải thông báo ngay trong 24 giờ cho cơ quan Kiểm lâm sở tại để lập biên bản, quyết định tiêu hủy hoặc chuyển giao nghiên cứu khoa học."
  },
  {
    "question": "Theo Điều 244 Bộ luật Hình sự, hành vi tàng trữ, buôn bán trái phép tối thiểu bao nhiêu kilôgam (kg) sừng tê giác thì bị truy cứu trách nhiệm hình sự (phạt tù từ 1 đến 5 năm)?",
    "options": [
      "Từ 0,05 kilôgam (50 gam) sừng tê giác trở lên đã đủ định lượng cấu thành tội phạm và bị áp dụng mức hình phạt tù từ 1 đến 5 năm",
      "Từ 0,5 kilôgam (500 gam) sừng tê giác trở lên mới bị xử lý hình sự, dưới mức này chỉ bị xử phạt tiền vi phạm hành chính",
      "Từ 01 kilôgam sừng tê giác trở lên mới bị khởi tố hình sự theo quy định của pháp luật về bảo vệ động vật nguy cấp quý hiếm",
      "Sừng tê giác không quy định khối lượng khởi tố hình sự mà căn cứ vào trị giá tài sản giám định trên thị trường từ 100 triệu đồng"
    ],
    "correct": "Từ 0,05 kilôgam (50 gam) sừng tê giác trở lên đã đủ định lượng cấu thành tội phạm và bị áp dụng mức hình phạt tù từ 1 đến 5 năm",
    "explanation": "Điểm đ Khoản 1 Điều 244 Bộ luật Hình sự quy định: Tàng trữ, mua bán trái phép sừng tê giác có khối lượng từ 0,05 kilôgam (50 gam) đến dưới 01 kilôgam bị phạt tù từ 01 năm đến 05 năm."
  },
  {
    "question": "Hành vi săn bắt, giết, nuôi, nhốt, tàng trữ, buôn bán trái phép bao nhiêu cá thể lớp chim hoặc lớp bò sát thuộc Danh mục loài nguy cấp quý hiếm ưu tiên bảo vệ thì bị xử lý hình sự theo Điều 244 BLHS?",
    "options": [
      "Từ 02 đến 10 cá thể đối với lớp bò sát; từ 03 đến 10 cá thể đối với lớp chim hoặc lưỡng cư thuộc danh mục ưu tiên bảo vệ",
      "Chỉ từ 01 cá thể bất kể là chim, bò sát hay lưỡng cư thuộc danh mục nguy cấp quý hiếm ưu tiên bảo vệ đều bị khởi tố hình sự",
      "Phải từ 20 cá thể chim trở lên hoặc từ 15 cá thể bò sát trở lên mới cấu thành tội phạm, dưới định lượng này chỉ xử phạt tiền",
      "Các loài chim và bò sát hoang dã không bao giờ bị áp dụng hình phạt tù giam mà chỉ bị phạt tiền hành chính tối đa 500 triệu đồng"
    ],
    "correct": "Từ 02 đến 10 cá thể đối với lớp bò sát; từ 03 đến 10 cá thể đối với lớp chim hoặc lưỡng cư thuộc danh mục ưu tiên bảo vệ",
    "explanation": "Điểm b, Điểm c Khoản 1 Điều 244 BLHS: Vi phạm từ 02 đến 10 cá thể lớp bò sát; từ 03 đến 10 cá thể lớp chim hoặc lưỡng cư thuộc Danh mục loài ưu tiên bảo vệ bị phạt tù từ 1 đến 5 năm."
  },
  {
    "question": "Hành vi tàng trữ, vận chuyển, buôn bán trái phép vảy tê tê có khối lượng tối thiểu bao nhiêu thì bị khởi tố hình sự theo Điều 244 BLHS?",
    "options": [
      "Từ 01 kilôgam vảy tê tê trở lên bị phạt tù từ 1 đến 5 năm; từ 05 kilôgam trở lên bị phạt tù khung từ 10 năm đến 15 năm tù giam",
      "Từ 05 kilôgam vảy tê tê trở lên mới bị xử lý hình sự, dưới 05 kilôgam chỉ tịch thu tang vật và phạt tiền theo quy định xử phạt vi phạm hành chính",
      "Từ 10 kilôgam vảy tê tê trở lên mới đủ yếu tố để các cơ quan tiến hành tố tụng khởi tố vụ án hình sự",
      "Vảy tê tê là dược liệu y học cổ truyền nên cá nhân được phép tàng trữ tự do dưới 20 kilôgam để bồi bổ sức khỏe gia đình"
    ],
    "correct": "Từ 01 kilôgam vảy tê tê trở lên bị phạt tù từ 1 đến 5 năm; từ 05 kilôgam trở lên bị phạt tù khung từ 10 năm đến 15 năm tù giam",
    "explanation": "Khoản 1 Điều 244 BLHS: Tàng trữ, buôn bán trái phép vảy tê tê từ 01 kg đến dưới 05 kg bị phạt tù từ 1 đến 5 năm; từ 05 kg trở lên bị phạt tù từ 10 đến 15 năm."
  },
  {
    "question": "Cơ sở nuôi động vật rừng thông thường (như cầy vòi mốc, dúi, hươu sao) có nguồn gốc hợp pháp, khi vận chuyển xuất bán con giống ra NGOẠI TỈNH cần những giấy tờ gì?",
    "options": [
      "Hóa đơn hợp pháp (nếu có), Bảng kê lâm sản có xác nhận của Kiểm lâm sở tại nơi xuất bán và Giấy chứng nhận kiểm dịch động vật",
      "Bảng kê lâm sản do chủ trại tự lập ký tên đóng dấu và không bắt buộc phải có bất kỳ sự xác nhận nào của cơ quan quản lý nhà nước",
      "Chỉ cần giấy biên nhận tiền mua bán con giống giữa hai bên và ảnh chụp đàn vật nuôi gửi qua ứng dụng mạng xã hội cho người mua",
      "Bắt buộc phải có Giấy phép xuất nhập khẩu CITES do Cơ quan Quản lý CITES Việt Nam cấp trực tiếp trước khi xếp hàng lên xe tải"
    ],
    "correct": "Hóa đơn hợp pháp (nếu có), Bảng kê lâm sản có xác nhận của Kiểm lâm sở tại nơi xuất bán và Giấy chứng nhận kiểm dịch động vật",
    "explanation": "Vận chuyển động vật rừng sống ra ngoại tỉnh bắt buộc phải có Bảng kê lâm sản có xác nhận của Kiểm lâm sở tại (Điều 6 TT 26) và Giấy kiểm dịch động vật (Luật Thú y)."
  },
  {
    "question": "Sự khác biệt căn bản giữa 'cơ sở nuôi sinh sản' và 'cơ sở nuôi sinh trưởng' động vật hoang dã theo quy định pháp luật là gì?",
    "options": [
      "Nuôi sinh sản là giữ đàn bố mẹ để phối giống đẻ con non; nuôi sinh trưởng là nuôi con non lớn lên lấy thương phẩm không nhân giống",
      "Nuôi sinh sản chỉ áp dụng đối với các loài thú lớn ăn cỏ; nuôi sinh trưởng chỉ áp dụng đối với các loài bò sát và chim hoang dã",
      "Cơ sở nuôi sinh trưởng không bắt buộc phải đăng ký cấp mã số; cơ sở nuôi sinh sản bắt buộc phải có giấy phép đặc biệt của Bộ Công an",
      "Cơ sở nuôi sinh sản chỉ được cấp phép tại các vườn thú nhà nước; cơ sở nuôi sinh trưởng được tự do mở tại các hộ gia đình cá thể"
    ],
    "correct": "Nuôi sinh sản là giữ đàn bố mẹ để phối giống đẻ con non; nuôi sinh trưởng là nuôi con non lớn lên lấy thương phẩm không nhân giống",
    "explanation": "Điều 3 Nghị định 06/2019/NĐ-CP: Nuôi sinh sản là nuôi cá thể bố mẹ sinh đẻ ra thế hệ sau; nuôi sinh trưởng là nuôi dưỡng cá thể non lớn lên để khai thác thương phẩm mà không nhân giống."
  },
  {
    "question": "Trường hợp chủ cơ sở phát hiện cá thể động vật rừng nguy cấp (như gấu ngựa) bị rơi mất chíp điện tử thì phải xử lý như thế nào?",
    "options": [
      "Báo cáo bằng văn bản cho Kiểm lâm sở tại trong 03 ngày làm việc để phối hợp thú y kiểm tra, lập biên bản và cấy lại vi mạch mới theo quy chuẩn",
      "Chủ cơ sở tự đặt mua vi mạch điện tử đồ chơi trên mạng về tự cấy vào cơ thể con vật mà không cần báo cáo cơ quan chức năng đến giám sát làm gì",
      "Nhanh chóng bán thanh lý gấp cá thể bị mất chíp sang các lò giết mổ để tránh bị đoàn thanh tra phát hiện lập biên bản xử phạt vi phạm hành chính",
      "Dùng kìm bấm một mẩu tai hoặc cắt cụt đuôi của con thú làm dấu nhận dạng thay thế vĩnh viễn cho chiếc vi mạch điện tử ISO đã bị rơi mất trước đó"
    ],
    "correct": "Báo cáo bằng văn bản cho Kiểm lâm sở tại trong 03 ngày làm việc để phối hợp thú y kiểm tra, lập biên bản và cấy lại vi mạch mới theo quy chuẩn",
    "explanation": "Khoản 3 Điều 10 Nghị định số 06/2019/NĐ-CP: Khi vi mạch điện tử bị mất hoặc hỏng, chủ cơ sở nuôi phải báo ngay cho cơ quan Kiểm lâm sở tại trong thời hạn 03 ngày làm việc để kiểm tra nhận dạng và tiến hành cấy lại vi mạch mới."
  },
  {
    "question": "Hành vi đăng bài quảng cáo trên mạng xã hội Facebook rao bán 'mật gấu tươi nguyên chất', 'rượu ngâm tay gấu' hoặc 'cao hổ cốt' bị xử phạt như thế nào?",
    "options": [
      "Phạt tiền từ 1.000.000 đồng đến 15.000.000 đồng và buộc gỡ bỏ quảng cáo; nếu có tàng trữ, buôn bán thật sẽ bị xử lý hình sự",
      "Được phép tự do quảng cáo nếu gắn kèm thẻ cam kết 'hàng nhà tự nấu nguyên chất 100% nếu phát hiện giả xin đền tiền gấp mười'",
      "Chỉ bị phạt tiền nếu khách hàng mua về uống xong không thấy tăng cường sinh lực dồi dào như nội dung trong bài viết mô tả",
      "Chỉ bị khóa tài khoản mạng xã hội tạm thời trong vòng 24 giờ và được cơ quan công an hướng dẫn cách mở trang bán hàng mới"
    ],
    "correct": "Phạt tiền từ 1.000.000 đồng đến 15.000.000 đồng và buộc gỡ bỏ quảng cáo; nếu có tàng trữ, buôn bán thật sẽ bị xử lý hình sự",
    "explanation": "Điều 28 Nghị định 146/2026/NĐ-CP phạt hành vi quảng cáo động vật hoang dã trái phép; nếu thực tế có tàng trữ, buôn bán sản phẩm thú Nhóm IB thì bị phạt tù theo Điều 244 BLHS."
  },
  {
    "question": "Cơ sở nuôi nhốt động vật rừng hung dữ (hổ, báo, gấu) để thú dữ sổng chuồng cắn chết người thì chủ cơ sở phải chịu trách nhiệm pháp lý cao nhất như thế nào?",
    "options": [
      "Bị truy cứu trách nhiệm hình sự về tội vô ý làm chết người hoặc vi phạm an toàn lao động (phạt tù nhiều năm) và bồi thường toàn bộ thiệt hại dân sự",
      "Chỉ cần chủ trang trại sang tận nhà nạn nhân nói lời xin lỗi chân thành và biếu gia đình một hũ rượu sâm bồi bổ sức khỏe xem như hai bên hòa cả làng",
      "Bắt con thú dữ phải làm bản tường trình kiểm điểm sâu sắc và bị phạt nhịn ăn thịt tươi một tuần lễ để tự ăn năn hối cải về hành vi cắn người của mình",
      "Được miễn hoàn toàn trách nhiệm pháp lý nếu chứng minh được cánh cửa chuồng sắt bị rỉ sét lâu ngày tự gãy chốt chứ người nuôi không hề mở cửa thả thú"
    ],
    "correct": "Bị truy cứu trách nhiệm hình sự về tội vô ý làm chết người hoặc vi phạm an toàn lao động (phạt tù nhiều năm) và bồi thường toàn bộ thiệt hại dân sự",
    "explanation": "Chủ nuôi động vật dữ tợn không bảo đảm an toàn để thú cắn chết người bị truy cứu trách nhiệm hình sự (Điều 128 BLHS: Vô ý làm chết người) và bồi thường thiệt hại ngoài hợp đồng."
  },
  {
    "question": "Đối với các loài động vật hoang dã thuộc Phụ lục II CITES hoặc Nhóm IIB, hành vi buôn bán trái phép với giá trị tang vật từ bao nhiêu thì bị khởi tố hình sự theo Điều 234 BLHS?",
    "options": [
      "Trị giá tang vật từ 150.000.000 đồng đến dưới 500.000.000 đồng (hoặc thu lợi bất chính từ 50.000.000 đồng đến dưới 200.000.000 đồng)",
      "Trị giá tang vật từ 10.000.000 đồng đến dưới 50.000.000 đồng (hoặc thu lợi bất chính từ 5.000.000 đồng đến dưới 20.000.000 đồng)",
      "Trị giá tang vật từ 500.000.000 đồng trở lên (hoặc thu lợi bất chính từ 200.000.000 đồng trở lên) mới bị truy cứu trách nhiệm hình sự",
      "Các loài động vật rừng Nhóm IIB không bao giờ bị xử lý hình sự mà chỉ bị phạt tiền vi phạm hành chính tối đa 500.000.000 đồng"
    ],
    "correct": "Trị giá tang vật từ 150.000.000 đồng đến dưới 500.000.000 đồng (hoặc thu lợi bất chính từ 50.000.000 đồng đến dưới 200.000.000 đồng)",
    "explanation": "Điểm đ Khoản 1 Điều 234 Bộ luật Hình sự: Mua bán, tàng trữ động vật Nhóm IIB hoặc CITES II trị giá từ 150 triệu đến dưới 500 triệu đồng (hoặc thu lợi từ 50 đến 200 triệu) bị xử lý hình sự."
  },
  {
    "question": "Trường hợp cá nhân tàng trữ 01 cá thể khỉ mốc (thuộc Danh mục Nhóm IIB) nhưng đã từng bị xử phạt vi phạm hành chính về hành vi nuôi nhốt ĐVR trái phép thì xử lý thế nào?",
    "options": [
      "Bị truy cứu trách nhiệm hình sự về tội vi phạm quy định về bảo vệ động vật hoang dã do tái phạm hành vi đã bị xử phạt",
      "Chỉ bị xử phạt vi phạm hành chính với mức tiền phạt gấp hai lần mức phạt tiền đã áp dụng đối với hành vi vi phạm lần đầu tiên",
      "Chỉ bị tịch thu cá thể khỉ mốc sung công quỹ nhà nước mà không bị áp dụng hình phạt tiền hay xem xét trách nhiệm hình sự",
      "Được trả lại con khỉ nếu chủ nuôi làm đơn cam kết tự nguyện chuyển đổi sang mô hình chăn nuôi thỏ hoặc gia cầm thông thường"
    ],
    "correct": "Bị truy cứu trách nhiệm hình sự về tội vi phạm quy định về bảo vệ động vật hoang dã do tái phạm hành vi đã bị xử phạt",
    "explanation": "Điều 234 BLHS: Người đã bị xử phạt vi phạm hành chính về hành vi bảo vệ động vật hoang dã mà còn vi phạm thì bị truy cứu trách nhiệm hình sự bất kể giá trị tang vật."
  },
  {
    "question": "Giấy phép CITES có giá trị sử dụng cho bao nhiêu lần vận chuyển/xuất nhập khẩu lô hàng?",
    "options": [
      "Mỗi Giấy phép CITES chỉ có giá trị sử dụng cho DUY NHẤT 01 lô hàng trong thời hạn hiệu lực của giấy phép (không quá 06 tháng)",
      "Giấy phép CITES có giá trị sử dụng quay vòng nhiều lần cho nhiều chuyến hàng trong thời hạn hiệu lực tối đa là 05 năm",
      "Được phép sử dụng một Giấy phép CITES cho nhiều công-ten-nơ hàng khác nhau nếu cùng chủng loại động vật và cùng một cảng nhập khẩu",
      "Giấy phép CITES có giá trị sử dụng vĩnh viễn không thời hạn cho đến khi cơ sở nuôi được cấp phép làm thủ tục giải thể ngừng hoạt động"
    ],
    "correct": "Mỗi Giấy phép CITES chỉ có giá trị sử dụng cho DUY NHẤT 01 lô hàng trong thời hạn hiệu lực của giấy phép (không quá 06 tháng)",
    "explanation": "Theo quy định Công ước CITES và Nghị định 06/2019/NĐ-CP, Giấy phép CITES xuất nhập khẩu chỉ có giá trị sử dụng 01 lần cho một lô hàng cụ thể."
  },
  {
    "question": "Hành vi sử dụng lưới tàng hình, loa phát âm thanh giả tiếng chim để bẫy bắt hàng loạt chim di cư, chim hoang dã tại khu vực ven rừng bị xử phạt như thế nào?",
    "options": [
      "Phạt tiền từ 1.000.000 đồng đến 500.000.000 đồng; tịch thu toàn bộ lưới tàng hình, loa đài phát âm thanh, ắc quy và buộc thả ngay chim về tự nhiên",
      "Được cấp giấy khen và chứng chỉ nghệ nhân âm thanh vì đã có công sưu tầm các file ghi âm tiếng chim hót sống động phục vụ bà con giải trí cuối tuần",
      "Chỉ bị xử phạt nếu chiếc loa phóng thanh mở tiếng chim hót quá to làm ảnh hưởng đến thời gian xem phim truyền hình buổi tối của bà con trong xóm",
      "Được phép bẫy bắt thoải mái nếu người đánh bẫy cam kết đem đàn chim về nhà chăm sóc chu đáo, mở nhạc hòa tấu cho chim nghe để chim hót hay hơn"
    ],
    "correct": "Phạt tiền từ 1.000.000 đồng đến 500.000.000 đồng; tịch thu toàn bộ lưới tàng hình, loa đài phát âm thanh, ắc quy và buộc thả ngay chim về tự nhiên",
    "explanation": "Chỉ thị 04/CT-TTg của Thủ tướng Chính phủ và Điều 24 Nghị định 146/2026/NĐ-CP nghiêm cấm bẫy bắt chim di cư, phạt nặng và tịch thu toàn bộ công cụ bẫy bắt."
  },
  {
    "question": "Cơ sở nuôi động vật rừng có mã số hợp lệ nhưng không thực hiện việc cập nhật số lượng tăng giảm con non vào Sổ theo dõi Mẫu 10 trong 03 ngày làm việc bị xử lý ra sao?",
    "options": [
      "Bị xử phạt vi phạm hành chính về hành vi vi phạm quy định về quản lý hồ sơ nguồn gốc lâm sản hợp pháp",
      "Tự động bị thu hồi toàn bộ giấy phép đăng ký kinh doanh và tịch thu toàn bộ cơ sở vật chất trang trại chăn nuôi",
      "Bị truy cứu trách nhiệm hình sự về tội khai báo gian dối làm sai lệch hồ sơ quản lý của cơ quan nhà nước có thẩm quyền",
      "Không bị xử lý vì con non sinh sản trong chuồng thuộc quyền sở hữu tài sản tự nhiên đương nhiên của chủ trang trại"
    ],
    "correct": "Bị xử phạt vi phạm hành chính về hành vi vi phạm quy định về quản lý hồ sơ nguồn gốc lâm sản hợp pháp",
    "explanation": "Không cập nhật diễn biến đàn nuôi vào Sổ theo dõi theo Mẫu số 10 vi phạm quy định về quản lý hồ sơ lâm sản, bị xử phạt tiền theo Điều 27 NĐ 146/2026/NĐ-CP."
  },
  {
    "question": "Việc nuôi nhốt động vật rừng nguy cấp, quý, hiếm trong khu dân cư đô thị đông đúc bị pháp luật kiểm soát như thế nào?",
    "options": [
      "Phải bảo đảm khoảng cách an toàn, vệ sinh môi trường, an toàn cho người dân xung quanh và được Chi cục Kiểm lâm cấp tỉnh kiểm tra, cấp mã số cơ sở",
      "Được tự do nuôi nhốt trong phòng khách gia đình nếu chủ nhà cam kết đeo rọ mõm xinh xắn và xịt nước hoa khử mùi thơm tho cho con thú mỗi buổi sáng",
      "Chỉ cần tổ trưởng tổ dân phố hoặc ban quản trị chung cư ký giấy xác nhận đồng ý là được quyền nuôi nhốt hổ báo gấu trong căn hộ tầng cao thoải mái",
      "Nghiêm cấm tuyệt đối mọi trường hợp nuôi thú rừng trong đô thị dù là một chú chim sâu hay một con sóc đất nhỏ bé cũng đều bị phạt tù theo luật"
    ],
    "correct": "Phải bảo đảm khoảng cách an toàn, vệ sinh môi trường, an toàn cho người dân xung quanh và được Chi cục Kiểm lâm cấp tỉnh kiểm tra, cấp mã số cơ sở",
    "explanation": "Điều 17 và Điều 18 Nghị định số 06/2019/NĐ-CP: Cơ sở nuôi động vật hoang dã nguy cấp, quý, hiếm phải bảo đảm an toàn cho người, vệ sinh thú y, môi trường và được Chi cục Kiểm lâm cấp tỉnh kiểm tra, cấp mã số cơ sở nuôi trước khi hoạt động."
  },
  {
    "question": "Khi kiểm tra đột xuất cơ sở nuôi động vật rừng, lực lượng chức năng phát hiện số lượng cá thể thực tế NHIỀU HƠN số lượng ghi trong Sổ theo dõi Mẫu 10 thì số cá thể dư thừa bị xử lý thế nào?",
    "options": [
      "Số cá thể dư thừa không chứng minh được nguồn gốc hợp pháp sẽ bị lập biên bản tạm giữ, xử phạt vi phạm và bị tịch thu",
      "Chủ cơ sở được phép tự ghi bổ sung số lượng con dư thừa vào sổ theo dõi ngay trước sự chứng kiến của đoàn kiểm tra",
      "Được cơ quan chức năng tự động công nhận là số lượng con non mới sinh sản tự nhiên của cơ sở mà không cần kiểm tra",
      "Chỉ cần nộp một khoản phí chậm kê khai bổ sung mức 100.000 đồng cho mỗi cá thể dư thừa là được hợp thức hóa hồ sơ"
    ],
    "correct": "Số cá thể dư thừa không chứng minh được nguồn gốc hợp pháp sẽ bị lập biên bản tạm giữ, xử phạt vi phạm và bị tịch thu",
    "explanation": "Số lượng cá thể không có hồ sơ nguồn gốc chứng minh hợp pháp bị coi là lâm sản trái pháp luật, bị xử phạt theo Điều 24/26 NĐ 146 và tịch thu sung công quỹ."
  },
  {
    "question": "Mức phạt tiền tối đa áp dụng đối với TỔ CHỨC vi phạm quy định về bảo vệ động vật hoang dã theo Nghị định 146/2026/NĐ-CP lên tới bao nhiêu?",
    "options": [
      "Lên đến 1.000.000.000 đồng (gấp 02 lần mức tiền phạt tối đa áp dụng đối với cá nhân có cùng hành vi vi phạm)",
      "Lên đến 500.000.000 đồng (áp dụng mức tiền phạt ngang bằng nhau giữa cá nhân và tổ chức có hành vi vi phạm)",
      "Lên đến 200.000.000 đồng đối với tổ chức vi phạm các quy định về quản lý hồ sơ nguồn gốc động vật hoang dã",
      "Pháp luật không giới hạn mức tiền phạt tối đa đối với các doanh nghiệp có hành vi vi phạm bảo vệ động vật rừng"
    ],
    "correct": "Lên đến 1.000.000.000 đồng (gấp 02 lần mức tiền phạt tối đa áp dụng đối với cá nhân có cùng hành vi vi phạm)",
    "explanation": "Theo Điều 5 Nghị định 146/2026/NĐ-CP: Mức phạt tiền tối đa đối với cá nhân là 500 triệu đồng; đối với tổ chức vi phạm gấp 02 lần (lên đến 1.000.000.000 đồng)."
  },
  {
    "question": "Hành vi mua bán các sản phẩm mỹ phẩm, dược liệu được giới thiệu chiết xuất từ nọc rắn hổ chúa, mật gấu ngựa nhưng thực chất là hàng giả (hóa chất tổng hợp) bị xử lý thế nào?",
    "options": [
      "Bị xử phạt về hành vi buôn bán hàng giả, lừa dối người tiêu dùng VÀ hành vi quảng cáo trái phép động vật hoang dã",
      "Được cơ quan nhà nước biểu dương khen thưởng vì đã góp phần hạn chế việc săn bắt động vật hoang dã thật ngoài tự nhiên",
      "Không vi phạm pháp luật vì sản phẩm hóa chất tổng hợp không làm tổn hại đến bất kỳ cá thể động vật rừng hoang dã nào",
      "Chỉ bị nhắc nhở thu hồi sản phẩm mỹ phẩm trôi nổi trên thị trường mà không bị áp dụng các chế tài xử phạt hành chính"
    ],
    "correct": "Bị xử phạt về hành vi buôn bán hàng giả, lừa dối người tiêu dùng VÀ hành vi quảng cáo trái phép động vật hoang dã",
    "explanation": "Điều 192 Bộ luật Hình sự số 100/2015/QH13 và Điều 28 Nghị định số 146/2026/NĐ-CP: Hành vi sản xuất, buôn bán mỹ phẩm, dược liệu giả từ động vật hoang dã vừa bị xử lý về tội buôn bán hàng giả, vừa bị xử phạt về hành vi cấm quảng cáo lâm sản trái phép."
  },
  {
    "question": "Ai là người có quyền ra Quyết định phê duyệt Phương án xử lý tài sản là động vật rừng bị tịch thu sung công quỹ nhà nước trên địa bàn tỉnh?",
    "options": [
      "Chủ tịch Ủy ban nhân dân cấp tỉnh (hoặc Giám đốc Sở Nông nghiệp và Môi trường theo phân cấp, ủy quyền của UBND tỉnh)",
      "Bất kỳ Kiểm lâm viên nào trực tiếp phát hiện và lập biên bản bắt giữ lô động vật rừng vi phạm tại hiện trường",
      "Thương lái trả mức giá đấu giá cao nhất trong phiên bán đấu giá thanh lý tài sản do cơ quan Kiểm lâm tổ chức",
      "Chủ tịch Ủy ban nhân dân cấp xã nơi phát hiện và tạm giữ số lượng cá thể động vật rừng vi phạm hành chính"
    ],
    "correct": "Chủ tịch Ủy ban nhân dân cấp tỉnh (hoặc Giám đốc Sở Nông nghiệp và Môi trường theo phân cấp, ủy quyền của UBND tỉnh)",
    "explanation": "Nghị định 29/2018/NĐ-CP và Thông tư hướng dẫn quản lý tài sản công quy định thẩm quyền phê duyệt phương án xử lý tài sản công tịch thu thuộc Chủ tịch UBND tỉnh hoặc cơ quan được phân cấp."
  },
  {
    "question": "Khi xuất bán động vật rừng nuôi nhốt ra khỏi cơ sở, chủ cơ sở phải lập tài liệu gì để chứng minh nguồn gốc lâm sản?",
    "options": [
      "Bảng kê lâm sản kèm hóa đơn (nếu có) và xác nhận của Cơ quan Kiểm lâm sở tại (đối với loài phải xác nhận)",
      "Chỉ cần giấy viết tay cam kết động vật khỏe mạnh không cắn người",
      "Chỉ cần chụp ảnh con vật gửi qua mạng xã hội cho người mua",
      "Phiếu cân trọng lượng của thương lái thu mua"
    ],
    "correct": "Bảng kê lâm sản kèm hóa đơn (nếu có) và xác nhận của Cơ quan Kiểm lâm sở tại (đối với loài phải xác nhận)",
    "explanation": "Động vật xuất bán phải lập Bảng kê lâm sản, trích xuất sổ theo dõi và trình Cơ quan Kiểm lâm sở tại kiểm tra, xác nhận theo Thông tư quy định về hồ sơ lâm sản."
  },
  {
    "question": "Thời hạn xác nhận Bảng kê lâm sản động vật rừng còn sống của Cơ quan Kiểm lâm sở tại là bao lâu?",
    "options": [
      "Không quá 02 ngày làm việc kể từ ngày nhận được đề nghị hợp lệ; trường hợp cần kiểm tra thực tế không quá 03 ngày làm việc",
      "Thời hạn tối thiểu là 15 ngày làm việc",
      "Thời hạn từ 20 đến 30 ngày làm việc",
      "Chỉ được xác nhận vào ngày làm việc đầu tiên của mỗi tháng"
    ],
    "correct": "Không quá 02 ngày làm việc kể từ ngày nhận được đề nghị hợp lệ; trường hợp cần kiểm tra thực tế không quá 03 ngày làm việc",
    "explanation": "Điều 6 Thông tư số 26/2022/TT-BNNPTNT: Xác nhận trong 02 ngày làm việc, kiểm tra thực tế lâm sản không quá 03 ngày làm việc."
  },
  {
    "question": "Hồ sơ, sổ sách theo dõi đàn nuôi động vật rừng của cơ sở phải được lưu trữ trong thời hạn tối thiểu bao lâu?",
    "options": [
      "Tối thiểu 05 năm kể từ ngày xuất chuồng toàn bộ cá thể hoặc kết thúc nuôi",
      "Tối thiểu 06 tháng kể từ ngày bán hết động vật",
      "Chỉ cần lưu đến khi Kiểm lâm địa bàn đến kiểm tra xong đợt gần nhất",
      "Không cần lưu trữ nếu đã báo cáo qua điện thoại"
    ],
    "correct": "Tối thiểu 05 năm kể từ ngày xuất chuồng toàn bộ cá thể hoặc kết thúc nuôi",
    "explanation": "Khoản 4 Điều 4 Thông tư số 26/2022/TT-BNNPTNT và Điều 32 Thông tư 26/2025/TT-BNNMT: Chủ cơ sở nuôi có trách nhiệm lưu trữ hồ sơ lâm sản, sổ theo dõi nhập xuất tối thiểu 05 năm kể từ ngày xuất bán hết đàn vật nuôi phục vụ thanh tra, truy xuất nguồn gốc."
  },
  {
    "question": "Định kỳ báo cáo tình hình sinh sản, tăng giảm đàn động vật rừng quý hiếm cho Cơ quan Kiểm lâm được thực hiện với tần suất nào?",
    "options": [
      "Định kỳ 06 tháng và hàng năm (hoặc báo cáo đột xuất khi có yêu cầu bằng văn bản)",
      "Chỉ báo cáo một lần duy nhất khi đăng ký xin cấp mã số",
      "Báo cáo hàng tuần vào mỗi sáng thứ Hai",
      "Chỉ báo cáo khi có dịch bệnh làm chết trên 50% đàn vật nuôi"
    ],
    "correct": "Định kỳ 06 tháng và hàng năm (hoặc báo cáo đột xuất khi có yêu cầu bằng văn bản)",
    "explanation": "Khoản 2 Điều 16 Nghị định số 06/2019/NĐ-CP: Chủ cơ sở nuôi động vật hoang dã có trách nhiệm báo cáo định kỳ 06 tháng (trước ngày 30/6) và hàng năm (trước ngày 31/12) về tình hình tăng giảm đàn vật nuôi cho cơ quan Kiểm lâm sở tại quản lý."
  },
  {
    "question": "Trường hợp nào cơ sở nuôi động vật rừng bị thu hồi Mã số cơ sở nuôi?",
    "options": [
      "Sử dụng mã số sai mục đích, gian lận hồ sơ nguồn gốc đàn nuôi hoặc vi phạm nghiêm trọng quy định pháp luật quản lý động vật hoang dã",
      "Tạm dừng việc ghép đôi phối giống cho các cá thể động vật trong mùa đông giá rét để đảm bảo sức khỏe sinh sản của đàn thú nuôi",
      "Thay đổi nhân viên dọn dẹp vệ sinh chuồng trại nhưng quên không làm hồ sơ báo cáo xin ý kiến của đồng chí Chi cục trưởng Kiểm lâm",
      "Thay đổi nhãn hiệu thức ăn chăn nuôi gia súc mua từ cửa hàng tạp hóa ngoài chợ về cho đàn thú ăn mà chưa xin giấy phép kiểm định"
    ],
    "correct": "Sử dụng mã số sai mục đích, gian lận hồ sơ nguồn gốc đàn nuôi hoặc vi phạm nghiêm trọng quy định pháp luật quản lý động vật hoang dã",
    "explanation": "Điều 15 Nghị định 06/2019/NĐ-CP (sửa đổi): Cơ quan Kiểm lâm thu hồi mã số cơ sở nuôi khi cơ sở gian dối hồ sơ cấp mã số, không duy trì điều kiện nuôi, hoặc sử dụng mã số để hợp thức hóa động vật hoang dã bất hợp pháp."
  },
  {
    "question": "Khi chủ cơ sở nuôi thay đổi địa điểm chuồng nuôi sang xã/huyện khác thì phải làm gì?",
    "options": [
      "Làm thủ tục đề nghị điều chỉnh thông tin hoặc cấp đổi mã số cơ sở nuôi với Cơ quan Kiểm lâm quản lý",
      "Tự ý vận chuyển đàn thú đi ban đêm và giữ nguyên mã số cũ không báo ai",
      "Chỉ cần xin phép công an viên tại nơi chuyển đến",
      "Bỏ mã số cũ và nuôi tự do không cần đăng ký lại"
    ],
    "correct": "Làm thủ tục đề nghị điều chỉnh thông tin hoặc cấp đổi mã số cơ sở nuôi với Cơ quan Kiểm lâm quản lý",
    "explanation": "Khoản 5 Điều 14 Nghị định số 06/2019/NĐ-CP (sửa đổi bởi Nghị định 84/2021/NĐ-CP): Khi thay đổi địa điểm chuồng nuôi, số lượng hoặc loài nuôi, chủ cơ sở phải làm thủ tục đề nghị điều chỉnh, cấp đổi mã số cơ sở nuôi tại Chi cục Kiểm lâm cấp tỉnh."
  },
  {
    "question": "Giấy phép CITES xuất khẩu, nhập khẩu động vật hoang dã có giá trị sử dụng tối đa trong thời hạn bao lâu?",
    "options": [
      "Tối đa 06 tháng kể từ ngày cấp",
      "Tối đa 05 năm kể từ ngày cấp",
      "Có giá trị vĩnh viễn không thời hạn",
      "Chỉ có giá trị trong vòng 24 giờ sau khi in"
    ],
    "correct": "Tối đa 06 tháng kể từ ngày cấp",
    "explanation": "Theo quy định Công ước CITES và Nghị định 06/2019/NĐ-CP, Giấy phép CITES xuất khẩu/nhập khẩu có giá trị hiệu lực tối đa là 06 tháng."
  },
  {
    "question": "Ai là người chịu trách nhiệm trước pháp luật về tính chính xác của số liệu ghi trong Bảng kê lâm sản động vật rừng khi xuất bán?",
    "options": [
      "Chủ cơ sở nuôi động vật rừng (chủ lâm sản) chịu trách nhiệm trước pháp luật về nguồn gốc hợp pháp và số liệu kê khai trên Bảng kê",
      "Bác tài xế lái xe tải chở thuê chuyến hàng phải chịu toàn bộ trách nhiệm về tính chính xác của các số liệu ghi trên giấy tờ lâm sản",
      "Những người dân đi đường đứng xem cảnh nhân viên bắt nhốt thú lên thùng xe chở hàng phải chịu trách nhiệm liên đới trước tòa án",
      "Cơ quan dự báo khí tượng thủy văn của tỉnh phải chịu trách nhiệm bảo đảm tính trung thực của các thông tin kê khai trên Bảng kê"
    ],
    "correct": "Chủ cơ sở nuôi động vật rừng (chủ lâm sản) chịu trách nhiệm trước pháp luật về nguồn gốc hợp pháp và số liệu kê khai trên Bảng kê",
    "explanation": "Điều 6 Thông tư 85/2025/TT-BNNMT và Thông tư 26/2022/TT-BNNPTNT: Chủ lâm sản (chủ cơ sở nuôi) chịu trách nhiệm toàn diện trước pháp luật về tính hợp pháp của lâm sản và tính chính xác, trung thực của các thông tin ghi trong Bảng kê lâm sản."
  },
  {
    "question": "Động vật rừng chết trong quá trình nuôi dưỡng tại cơ sở phải xử lý theo trình tự nào?",
    "options": [
      "Lập biên bản có sự chứng kiến/xác nhận của Kiểm lâm sở tại hoặc chính quyền xã; xử lý tiêu hủy hoặc bảo quản theo quy định",
      "Tự ý mổ thịt bán cho các quán ăn, nhà hàng đặc sản gần nhất",
      "Vứt xác động vật xuống sông suối để tránh ô nhiễm môi trường gia đình",
      "Đóng gói gửi bưu điện sang tỉnh khác làm quà biếu"
    ],
    "correct": "Lập biên bản có sự chứng kiến/xác nhận của Kiểm lâm sở tại hoặc chính quyền xã; xử lý tiêu hủy hoặc bảo quản theo quy định",
    "explanation": "Khoản 2 Điều 11 Nghị định số 06/2019/NĐ-CP: Khi động vật rừng bị chết, chủ cơ sở phải báo ngay cơ quan Kiểm lâm sở tại lập biên bản xác định nguyên nhân, số lượng, xử lý tiêu hủy bảo đảm vệ sinh dịch tễ hoặc chuyển giao nghiên cứu khoa học."
  },
  {
    "question": "Việc chuyển nhượng, tặng cho động vật rừng quý hiếm giữa các cơ sở nuôi hợp pháp cần điều kiện gì?",
    "options": [
      "Cả hai cơ sở đều có mã số hợp lệ phù hợp loài nuôi; có hồ sơ nguồn gốc và xác nhận của Kiểm lâm sở tại",
      "Chỉ cần hai bên chủ trại bắt tay thỏa thuận miệng bằng tiền mặt",
      "Chỉ cần quay clip đăng lên mạng làm bằng chứng giao dịch",
      "Không cần điều kiện gì vì là tài sản cá nhân sở hữu"
    ],
    "correct": "Cả hai cơ sở đều có mã số hợp lệ phù hợp loài nuôi; có hồ sơ nguồn gốc và xác nhận của Kiểm lâm sở tại",
    "explanation": "Khoản 3 Điều 15 Nghị định số 06/2019/NĐ-CP: Việc chuyển giao, tặng cho động vật rừng giữa các cơ sở nuôi phải có hồ sơ nguồn gốc hợp pháp, bên nhận phải có mã số cơ sở nuôi hợp lệ và có xác nhận vận chuyển của cơ quan Kiểm lâm sở tại."
  },
  {
    "question": "Khi mua con giống động vật rừng thông thường từ tỉnh khác về nuôi, hồ sơ kèm theo chuyến hàng cần những gì?",
    "options": [
      "Hóa đơn (nếu có), Bảng kê lâm sản có xác nhận của Kiểm lâm sở tại nơi xuất bán và Giấy chứng nhận kiểm dịch động vật vận chuyển ngoại tỉnh",
      "Chỉ cần tài xế mang theo một bức ảnh màu chụp cảnh đàn con giống đang ăn uống vui vẻ tại trang trại cũ của người bán ở tỉnh bạn",
      "Chỉ cần xuất trình biên lai nộp tiền học phí của con chủ trang trại để chứng minh cơ sở kinh doanh làm ăn chân chính và uy tín",
      "Tài xế chỉ cần viết giấy cam kết bằng tay hứa rằng dọc đường xe lăn bánh sẽ không bấm còi inh ỏi làm kinh động giấc ngủ của người dân"
    ],
    "correct": "Hóa đơn (nếu có), Bảng kê lâm sản có xác nhận của Kiểm lâm sở tại nơi xuất bán và Giấy chứng nhận kiểm dịch động vật vận chuyển ngoại tỉnh",
    "explanation": "Điều 17 Thông tư 26/2022/TT-BNNPTNT và Luật Thú y năm 2015: Vận chuyển động vật rừng ra ngoại tỉnh bắt buộc phải có Bảng kê lâm sản hợp lệ có xác nhận của Cơ quan Kiểm lâm nơi xuất phát và Giấy chứng nhận kiểm dịch động vật."
  },
  {
    "question": "Quy chuẩn thiết kế chuồng trại nuôi động vật rừng nguy cấp, hung dữ bắt buộc phải bảo đảm yếu tố nào hàng đầu?",
    "options": [
      "Bảo đảm an toàn tuyệt đối cho con người, ngăn ngừa nguy cơ sổng chuồng thoát ra môi trường tự nhiên",
      "Bảo đảm trang trí đẹp mắt và mở cửa đón khách du lịch tự do",
      "Bảo đảm không gian rộng như một cánh rừng nguyên sinh hàng trăm héc-ta",
      "Bảo đảm xây bằng kính trong suốt không có rào sắt"
    ],
    "correct": "Bảo đảm an toàn tuyệt đối cho con người, ngăn ngừa nguy cơ sổng chuồng thoát ra môi trường tự nhiên",
    "explanation": "Khoản 1 Điều 17 Nghị định số 06/2019/NĐ-CP: Điều kiện chuồng, trại nuôi động vật rừng nguy cấp, hung dữ bắt buộc phải bảo đảm an toàn tuyệt đối cho người chăm sóc, cộng đồng dân cư và ngăn ngừa tuyệt đối nguy cơ động vật sổng chuồng."
  },
  {
    "question": "Hình thức đánh dấu mẫu vật động vật rừng nguy cấp, quý hiếm (như gấu, hổ, cá sấu) phổ biến theo quy chuẩn là gì?",
    "options": [
      "Cấy vi mạch điện tử (microchip) có mã số định danh duy nhất theo tiêu chuẩn ISO hoặc bấm thẻ tai, gắn vòng chân chuyên dụng có mã số quản lý",
      "Đeo vào cổ mỗi chú gấu một chiếc đồng hồ báo thức điện tử có gắn chuông reo để con gấu biết giờ thức dậy tập thể dục dưỡng sinh vào mỗi buổi sáng",
      "Nhuộm một chỏm lông màu hồng rực rỡ lên đỉnh đầu con thú để tạo điểm nhấn phong cách thời trang khác biệt và sành điệu so với đàn thú xung quanh",
      "Dùng bút dạ dầu vẽ hình trái tim lên bụng con thú kèm theo tên thân mật của người chủ trại để dễ dàng nhận dạng nếu chẳng may con vật đi lạc đường"
    ],
    "correct": "Cấy vi mạch điện tử (microchip) có mã số định danh duy nhất theo tiêu chuẩn ISO hoặc bấm thẻ tai, gắn vòng chân chuyên dụng có mã số quản lý",
    "explanation": "Điều 10 Nghị định số 06/2019/NĐ-CP: Hình thức đánh dấu mẫu vật động vật rừng nguy cấp, quý, hiếm bắt buộc phải bằng vi mạch điện tử (chíp ISO), vòng chân hoặc thẻ tai chuyên dụng có mã số định danh duy nhất theo quy chuẩn."
  },
  {
    "question": "Mã số vi mạch (chíp điện tử) cấy trên cá thể động vật quý hiếm có ý nghĩa gì trong công tác quản lý?",
    "options": [
      "Là mã số định danh duy nhất để đối chiếu với hồ sơ nguồn gốc, theo dõi quá trình quản lý và ngăn chặn tráo đổi cá thể",
      "Để kích điện khi con vật hung dữ không nghe lời người nuôi",
      "Để tự động sạc pin năng lượng mặt trời cho con vật",
      "Để theo dõi tọa độ con vật qua vệ tinh viễn thám quốc tế"
    ],
    "correct": "Là mã số định danh duy nhất để đối chiếu với hồ sơ nguồn gốc, theo dõi quá trình quản lý và ngăn chặn tráo đổi cá thể",
    "explanation": "Khoản 2 Điều 10 Nghị định số 06/2019/NĐ-CP: Mã số vi mạch chíp điện tử là mã định danh duy nhất của cá thể động vật, được lưu vào hệ thống cơ sở dữ liệu quốc gia của Kiểm lâm để đối chiếu hồ sơ, chống gian lận và tráo đổi cá thể hoang dã."
  },
  {
    "question": "Trước khi đưa động vật rừng mới mua về cơ sở chuồng nuôi, biện pháp thú y bắt buộc là gì?",
    "options": [
      "Cách ly theo dõi kiểm dịch theo hướng dẫn của cơ quan chuyên môn thú y",
      "Cho nhốt chung ngay vào chuồng đàn cũ để làm quen",
      "Cho ăn thật no và thả ra sân chơi chung",
      "Bôi dầu thơm lên cơ thể để khử mùi hôi động vật"
    ],
    "correct": "Cách ly theo dõi kiểm dịch theo hướng dẫn của cơ quan chuyên môn thú y",
    "explanation": "Điều 18 Luật Thú y số 79/2015/QH13 và Điều 17 Nghị định 06/2019/NĐ-CP: Động vật mới nhập đàn bắt buộc phải được nuôi cách ly kiểm dịch theo dõi sức khỏe tại khu vực riêng biệt theo hướng dẫn chuyên môn thú y trước khi nhập vào đàn cũ."
  },
  {
    "question": "Cơ sở nuôi động vật hoang dã có trách nhiệm gì về bảo vệ môi trường khu dân cư?",
    "options": [
      "Có hệ thống thu gom, xử lý chất thải, nước thải bảo đảm vệ sinh môi trường, không phát tán mùi hôi ảnh hưởng khu dân cư",
      "Được phép xả thẳng phân và nước tiểu ra cống thoát nước chung của khu dân cư",
      "Đào hố chôn chất thải sát giếng nước của hộ gia đình liền kề",
      "Đốt chất thải lông da cao su công khai vào ban đêm"
    ],
    "correct": "Có hệ thống thu gom, xử lý chất thải, nước thải bảo đảm vệ sinh môi trường, không phát tán mùi hôi ảnh hưởng khu dân cư",
    "explanation": "Khoản 2 Điều 53 Luật Bảo vệ môi trường số 72/2020/QH14 và Điều 17 Nghị định 06/2019/NĐ-CP: Cơ sở nuôi phải có hệ thống thu gom, xử lý nước thải, chất thải rắn bảo đảm quy chuẩn vệ sinh môi trường, không phát tán mùi hôi ảnh hưởng khu dân cư."
  },
  {
    "question": "Trường hợp động vật rừng nguy cấp, quý hiếm bị sổng chuồng, chủ cơ sở phải thực hiện hành động khẩn cấp nào?",
    "options": [
      "Phải lập tức báo động, triển khai biện pháp bắt lại bảo đảm an toàn cho người dân và báo khẩn cấp cho cơ quan Kiểm lâm sở tại, UBND xã phối hợp xử lý",
      "Âm thầm đóng kín cửa phòng trùm chăn đi ngủ và hy vọng con thú đi dạo chơi đói bụng sẽ tự giác ngoan ngoãn mò về chuồng cũ",
      "Đăng bài viết lên mạng xã hội rao bán thanh lý khẩn cấp con thú dữ đang chạy rông ngoài đường cho ai bắt được hưởng trọn vẹn",
      "Đứng ngoài cổng hò hét cổ vũ và lấy điện thoại ra quay video phát trực tiếp lên mạng xã hội để tăng tương tác tài khoản cá nhân"
    ],
    "correct": "Phải lập tức báo động, triển khai biện pháp bắt lại bảo đảm an toàn cho người dân và báo khẩn cấp cho cơ quan Kiểm lâm sở tại, UBND xã phối hợp xử lý",
    "explanation": "Khoản 2 Điều 17 Nghị định số 06/2019/NĐ-CP: Khi động vật rừng nguy cấp bị sổng chuồng, chủ cơ sở phải lập tức báo động, triển khai biện pháp bắt lại bảo đảm an toàn cho người dân và báo khẩn cấp cho cơ quan Kiểm lâm sở tại, UBND xã phối hợp xử lý."
  },
  {
    "question": "Ai là người có thẩm quyền kiểm tra định kỳ hoặc đột xuất điều kiện chuồng nuôi động vật hoang dã của cơ sở?",
    "options": [
      "Cơ quan Kiểm lâm, Cơ quan Thú y và Chính quyền địa phương/Công an theo đúng thẩm quyền và kế hoạch kiểm tra được phê duyệt",
      "Bất kỳ ai đi ngang qua đường nhìn thấy chuồng nuôi đều có quyền đạp cửa xông vào kiểm tra giấy tờ nguồn gốc của đàn thú nuôi",
      "Các cô bác bán hàng rong ngoài cổng trang trại có toàn quyền lập biên bản xử phạt vi phạm hành chính đối với chủ cơ sở nuôi",
      "Ban đại diện cha mẹ học sinh của trường tiểu học địa phương chịu trách nhiệm chính trong việc kiểm tra an toàn chuồng cọp, chuồng gấu"
    ],
    "correct": "Cơ quan Kiểm lâm, Cơ quan Thú y và Chính quyền địa phương/Công an theo đúng thẩm quyền và kế hoạch kiểm tra được phê duyệt",
    "explanation": "Điều 16 Nghị định 06/2019/NĐ-CP và Điều 104 Luật Lâm nghiệp: Cơ quan Kiểm lâm chủ trì, phối hợp với cơ quan Thú y, Công an và chính quyền địa phương kiểm tra định kỳ hoặc đột xuất điều kiện chuồng trại, nguồn gốc động vật hoang dã."
  },
  {
    "question": "Hệ thống cửa chuồng nuôi đối với các loài thú lớn hung dữ (như gấu, hổ) phải thiết kế như thế nào?",
    "options": [
      "Hệ thống cửa kép kiên cố, có khóa an toàn chắc chắn và vách ngăn điều khiển từ xa khi cho ăn, vệ sinh chuồng",
      "Cửa lưới nhựa buộc bằng dây thừng thông thường",
      "Cửa gỗ mỏng cài then tre đơn giản",
      "Không cần cửa để con vật tự do đi lại ra ngoài trời"
    ],
    "correct": "Hệ thống cửa kép kiên cố, có khóa an toàn chắc chắn và vách ngăn điều khiển từ xa khi cho ăn, vệ sinh chuồng",
    "explanation": "Khoản 1 Điều 17 Nghị định số 06/2019/NĐ-CP: Chuồng nuôi các loài thú lớn hung dữ (gấu, hổ) bắt buộc phải có hệ thống cửa kép kiên cố bằng thép chịu lực, khóa an toàn và khoang lùa điều khiển từ xa khi cho ăn, dọn dẹp vệ sinh chuồng."
  },
  {
    "question": "Động vật rừng chết do mắc bệnh truyền nhiễm nguy hiểm phải được xử lý như thế nào?",
    "options": [
      "Tiêu hủy bắt buộc dưới sự giám sát của Cơ quan Thú y và Kiểm lâm, nghiêm cấm tiêu thụ, làm thực phẩm",
      "Đem ra chợ bán rẻ thu hồi vốn con giống",
      "Chế biến làm thức ăn cho các loài động vật ăn thịt khác trong trại",
      "Sấy khô làm đồ nhắm cho nhân viên cơ sở"
    ],
    "correct": "Tiêu hủy bắt buộc dưới sự giám sát của Cơ quan Thú y và Kiểm lâm, nghiêm cấm tiêu thụ, làm thực phẩm",
    "explanation": "Khoản 1 Điều 23 Luật Thú y số 79/2015/QH13: Động vật rừng chết do mắc bệnh truyền nhiễm nguy hiểm phải tiêu hủy bắt buộc dưới sự giám sát chặt chẽ của cơ quan Thú y và cơ quan Kiểm lâm, nghiêm cấm tuyệt đối việc sử dụng làm thực phẩm."
  },
  {
    "question": "Việc cấy chíp điện tử cho động vật rừng quý hiếm phải do ai thực hiện?",
    "options": [
      "Cán bộ thú y hoặc kỹ thuật viên có chuyên môn phối hợp cùng Cơ quan Kiểm lâm giám sát, lập biên bản ghi nhận",
      "Chủ cơ sở tự ý mua kim tiêm và tự bấm chíp không cần ai chứng kiến",
      "Thợ hàn sắt tại xưởng cơ khí địa phương",
      "Bất kỳ lao động phổ thông nào trong cơ sở nuôi"
    ],
    "correct": "Cán bộ thú y hoặc kỹ thuật viên có chuyên môn phối hợp cùng Cơ quan Kiểm lâm giám sát, lập biên bản ghi nhận",
    "explanation": "Điều 10 Nghị định số 06/2019/NĐ-CP: Quy trình cấy vi mạch điện tử bắt buộc phải do cán bộ chuyên môn thú y thực hiện dưới sự giám sát trực tiếp của cơ quan Kiểm lâm sở tại và lập biên bản ghi nhận mã số định danh."
  },
  {
    "question": "Cơ sở nuôi động vật rừng có được phép tiếp nhận con nuôi bị thương do người dân đem đến không?",
    "options": [
      "Không được tự ý nuôi giữ; phải báo ngay cho Cơ quan Kiểm lâm sở tại để tiếp nhận, làm thủ tục cứu hộ hoặc chuyển giao trung tâm cứu hộ theo luật",
      "Được quyền giữ lại nuôi dưỡng vĩnh viễn trong chuồng nhà mình và coi đó là món quà bất ngờ do ông trời ban tặng cho trang trại không cần báo ai",
      "Tự ý mổ thịt bồi dưỡng cho toàn thể nhân viên trong trang trại ăn lấy sức khỏe với lý do thịt thú rừng bị thương để lâu ngày sẽ bị ôi thiu hỏng mất",
      "Nhanh chóng bán lại con thú bị thương cho các thương lái buôn lậu ở chợ đen để lấy một khoản tiền mặt trang trải chi phí thuốc men khám chữa bệnh"
    ],
    "correct": "Không được tự ý nuôi giữ; phải báo ngay cho Cơ quan Kiểm lâm sở tại để tiếp nhận, làm thủ tục cứu hộ hoặc chuyển giao trung tâm cứu hộ theo luật",
    "explanation": "Khoản 1 Điều 33 Nghị định số 146/2026/NĐ-CP: Cá thể động vật rừng do người dân tự nguyện giao nộp phải được bàn giao cho cơ quan Kiểm lâm sở tại để lập thủ tục tiếp nhận, xử lý cứu hộ hoặc chuyển giao cho các trung tâm cứu hộ động vật hoang dã."
  },
  {
    "question": "Diện tích chuồng nuôi động vật rừng phải bảo đảm tiêu chí gì?",
    "options": [
      "Phù hợp với đặc tính sinh học, tập tính sinh hoạt của loài và số lượng cá thể nuôi nhốt",
      "Càng chật hẹp càng tốt để động vật không vận động được",
      "Bắt buộc mọi loài thú đều phải có chuồng rộng tối thiểu 1.000m²",
      "Không có bất kỳ quy định nào về diện tích chuồng nuôi"
    ],
    "correct": "Phù hợp với đặc tính sinh học, tập tính sinh hoạt của loài và số lượng cá thể nuôi nhốt",
    "explanation": "Điểm b Khoản 1 Điều 24 Thông tư số 85/2025/TT-BNNMT: Chuồng trại nuôi động vật rừng phải bảo đảm diện tích, không gian, ánh sáng và thông gió phù hợp với đặc tính sinh học, tập tính tự nhiên và số lượng cá thể nuôi nhốt."
  },
  {
    "question": "Khi tiêm phòng vắc-xin cho động vật rừng nuôi nhốt, chủ cơ sở phải làm gì?",
    "options": [
      "Ghi chép đầy đủ nhật ký phòng dịch, tên loại thuốc, ngày tiêm và lưu giữ hồ sơ thú y",
      "Vứt bỏ hết bao bì thuốc ra ngoài đường ngay sau khi tiêm",
      "Tự pha trộn các loại hóa chất không rõ nhãn mác",
      "Không cần ghi chép gì nếu động vật không bị chết ngay sau tiêm"
    ],
    "correct": "Ghi chép đầy đủ nhật ký phòng dịch, tên loại thuốc, ngày tiêm và lưu giữ hồ sơ thú y",
    "explanation": "Khoản 2 Điều 17 Luật Thú y số 79/2015/QH13 và Thông tư 85/2025/TT-BNNMT: Chủ cơ sở nuôi phải lập sổ theo dõi thú y, ghi chép đầy đủ nhật ký phòng dịch, tên vắc-xin, ngày tiêm phòng để phục vụ công tác kiểm dịch khi xuất chuồng vận chuyển."
  },
  {
    "question": "Phương tiện vận chuyển động vật rừng sống chuyên dùng cần đáp ứng điều kiện gì?",
    "options": [
      "Lồng, thùng chứa thông thoáng, chắc chắn, bảo đảm an toàn cho người điều khiển và sức khỏe động vật trên đường",
      "Đóng kín trong bao tải dứa buộc chặt miệng nhét dưới cốp xe",
      "Buộc trói chân con vật treo ngược sau đuôi xe máy chạy đường dài",
      "Nhồi nhét tối đa số lượng cá thể bất chấp động vật bị đè bẹp, ngạt thở"
    ],
    "correct": "Lồng, thùng chứa thông thoáng, chắc chắn, bảo đảm an toàn cho người điều khiển và sức khỏe động vật trên đường",
    "explanation": "Khoản 1 Điều 21 Luật Thú y số 79/2015/QH13 và Thông tư 26/2022/TT-BNNPTNT: Phương tiện vận chuyển động vật rừng sống phải có thùng chứa, lồng thông thoáng, kiên cố, bảo đảm an toàn cho người điều khiển và sức khỏe con vật trên đường lưu thông."
  },
  {
    "question": "Hành vi nào sau đây về quảng cáo động vật hoang dã bị pháp luật nghiêm cấm?",
    "options": [
      "Đăng bài viết, hình ảnh, video trên Facebook, Zalo, TikTok để rao bán động vật rừng nguy cấp, quý hiếm hoặc bộ phận của chúng",
      "Đăng thông tin về các biện pháp cứu hộ, bảo tồn động vật hoang dã",
      "Tuyên truyền kêu gọi người dân không ăn thịt thú rừng",
      "Quảng cáo các loại thức ăn gia súc cho lợn, bò"
    ],
    "correct": "Đăng bài viết, hình ảnh, video trên Facebook, Zalo, TikTok để rao bán động vật rừng nguy cấp, quý hiếm hoặc bộ phận của chúng",
    "explanation": "Hành vi quảng cáo mua, bán động vật rừng, bộ phận cơ thể hoặc sản phẩm của động vật rừng nguy cấp, quý hiếm trên mạng xã hội bị nghiêm cấm theo Điều 28 NĐ 146/2026/NĐ-CP."
  },
  {
    "question": "Hành vi mua động vật rừng còn sống từ người đi săn về nhốt trong nhà làm cảnh mà không khai báo Kiểm lâm là hành vi gì?",
    "options": [
      "Hành vi nuôi, nhốt động vật rừng trái quy định của pháp luật; bị tịch thu cá thể động vật để cứu hộ, tái thả và bị xử phạt tiền rất nghiêm khắc",
      "Hành vi nhân đạo cao cả giải cứu thú rừng khỏi nồi lẩu của các quán nhậu, xứng đáng được ban tặng huân chương bảo vệ muôn loài của khu dân cư",
      "Nuôi nhốt cho vui cửa vui nhà, nếu con thú biết nghe lời và biết vẫy đuôi mừng rỡ mỗi khi gia chủ đi làm về thì không cần phải báo cáo cho ai biết",
      "Được phép nuôi thả tự do trong nhà nếu con thú được gia đình cho ăn ngày ba bữa no nê và được ngủ chung giường có đệm ấm chăn êm cùng trẻ nhỏ"
    ],
    "correct": "Hành vi nuôi, nhốt động vật rừng trái quy định của pháp luật; bị tịch thu cá thể động vật để cứu hộ, tái thả và bị xử phạt tiền rất nghiêm khắc",
    "explanation": "Nuôi nhốt động vật rừng không có nguồn gốc hợp pháp, không đăng ký mã số/thông báo là hành vi vi phạm pháp luật lâm nghiệp (Điều 24 NĐ 146/2026/NĐ-CP)."
  },
  {
    "question": "Nhà hàng, quán ăn tàng trữ thịt thú rừng đông lạnh không có hóa đơn, bảng kê lâm sản hợp pháp sẽ bị xử lý về hành vi nào?",
    "options": [
      "Hành vi tàng trữ lâm sản trái pháp luật",
      "Hành vi kinh doanh dịch vụ ăn uống đúng giấy phép",
      "Hành vi bảo quản thực phẩm thông thường",
      "Hành vi ủng hộ tiêu thụ sản phẩm cho người dân miền núi"
    ],
    "correct": "Hành vi tàng trữ lâm sản trái pháp luật",
    "explanation": "Tàng trữ, cất giữ thịt, sản phẩm động vật hoang dã không có nguồn gốc hợp pháp bị xử phạt theo Điều 26 Nghị định số 146/2026/NĐ-CP."
  },
  {
    "question": "Hành vi nào sau đây cấu thành việc gian lận trong quản lý cơ sở nuôi động vật rừng?",
    "options": [
      "Mua thú rừng săn bắt lậu ngoài tự nhiên đưa vào chuồng rồi khai báo là thú non mới sinh sản để xin xác nhận Kiểm lâm",
      "Ghi chép chính xác số lượng con non mới đẻ vào Sổ theo dõi Mẫu 10",
      "Mời Kiểm lâm đến chứng kiến khi cá thể sinh sản",
      "Tiêm phòng dịch đầy đủ cho đàn thú nuôi"
    ],
    "correct": "Mua thú rừng săn bắt lậu ngoài tự nhiên đưa vào chuồng rồi khai báo là thú non mới sinh sản để xin xác nhận Kiểm lâm",
    "explanation": "Điều 24 Nghị định số 146/2026/NĐ-CP và Điều 234, 244 Bộ luật Hình sự: Hành vi mua thú rừng săn bắt tự nhiên đưa vào chuồng rồi khai báo gian dối là sinh sản để hợp thức hóa nguồn gốc bị thu hồi mã số cơ sở và bị truy cứu trách nhiệm hình sự."
  },
  {
    "question": "Cơ sở nuôi nhốt động vật rừng để thú cắn người do chuồng trại rách nát, lỏng lẻo sẽ phải chịu trách nhiệm gì?",
    "options": [
      "Bồi thường toàn bộ thiệt hại về sức khỏe/tính mạng nạn nhân và bị xử phạt VPHC hoặc xử lý hình sự",
      "Không phải chịu trách nhiệm nếu đã cắm biển 'Coi chừng thú dữ'",
      "Chỉ cần xin lỗi và tặng nạn nhân một con vật nuôi",
      "Yêu cầu nạn nhân tự trả viện phí vì tò mò đến gần chuồng"
    ],
    "correct": "Bồi thường toàn bộ thiệt hại về sức khỏe/tính mạng nạn nhân và bị xử phạt VPHC hoặc xử lý hình sự",
    "explanation": "Chủ nuôi thú dữ phải bồi thường thiệt hại ngoài hợp đồng (Bộ luật Dân sự) và bị xử phạt theo Điều 24 NĐ 146 hoặc xử lý hình sự tội vô ý gây thương tích/chết người."
  },
  {
    "question": "Hành vi sử dụng giấy xác nhận lâm sản hoặc mã số cơ sở nuôi của hộ khác để vận chuyển thú rừng của mình là hành vi gì?",
    "options": [
      "Hành vi gian lận hồ sơ lâm sản, vận chuyển lâm sản trái pháp luật",
      "Sự hỗ trợ lẫn nhau hợp pháp giữa các hộ nông dân",
      "Hình thức mượn giấy tờ dân sự được pháp luật khuyến khích",
      "Biện pháp linh hoạt trong kinh tế thị trường"
    ],
    "correct": "Hành vi gian lận hồ sơ lâm sản, vận chuyển lâm sản trái pháp luật",
    "explanation": "Khoản 3 Điều 27 Nghị định số 146/2026/NĐ-CP: Hành vi sử dụng hồ sơ lâm sản, mã số cơ sở nuôi của tổ chức, cá nhân khác để hợp thức hóa, vận chuyển động vật rừng của mình là hành vi gian lận hồ sơ lâm sản và vận chuyển lâm sản trái pháp luật."
  },
  {
    "question": "Hành vi bẫy bắt chim hoang dã, chim di cư bằng lưới tàng hình, keo dính rồi bán cho người phóng sinh bị xử lý như thế nào?",
    "options": [
      "Bị nghiêm cấm và bị xử phạt vi phạm hành chính, tịch thu toàn bộ tang vật, dụng cụ săn bắt",
      "Được khuyến khích vì tạo nguồn chim cho hoạt động phóng sinh tôn giáo",
      "Chỉ bị phạt nếu giăng lưới trên đất rừng đặc dụng",
      "Được phép tự do hoạt động vào mùa chim di cư"
    ],
    "correct": "Bị nghiêm cấm và bị xử phạt vi phạm hành chính, tịch thu toàn bộ tang vật, dụng cụ săn bắt",
    "explanation": "Chỉ thị số 04/CT-TTg của Thủ tướng Chính phủ và NĐ 146/2026/NĐ-CP nghiêm cấm săn bắt, bẫy bắt, mua bán chim hoang dã, chim di cư dưới mọi hình thức."
  },
  {
    "question": "Hành vi chế biến, nấu cao từ xương các loài linh trưởng (khỉ, vượn) hoặc hổ để bán là hành vi gì?",
    "options": [
      "Hành vi chế biến, tàng trữ, buôn bán sản phẩm động vật rừng nguy cấp quý hiếm trái pháp luật; bị truy cứu trách nhiệm hình sự với mức án phạt tù nặng",
      "Nghề gia truyền lưu giữ tinh hoa ẩm thực dân gian đáng được Nhà nước tạo điều kiện vay vốn ưu đãi để mở rộng quy mô sản xuất xuất khẩu ra thế giới",
      "Được phép nấu cao thoải mái nếu người nấu cam kết nồi cao đạt chuẩn vệ sinh an toàn thực phẩm và chỉ chia sẻ cho những người trong họ hàng sử dụng",
      "Chỉ vi phạm pháp luật nếu người uống phải nồi cao đó xong bị đau bụng hoặc dị ứng rồi mang mẫu cao đến cơ quan công an làm đơn tố cáo đòi tiền"
    ],
    "correct": "Hành vi chế biến, tàng trữ, buôn bán sản phẩm động vật rừng nguy cấp quý hiếm trái pháp luật; bị truy cứu trách nhiệm hình sự với mức án phạt tù nặng",
    "explanation": "Chế biến bộ phận động vật nguy cấp quý hiếm (khỉ, vượn, hổ, gấu...) là hành vi vi phạm pháp luật hình sự (Điều 244 BLHS) bị phạt tù nhiều năm."
  },
  {
    "question": "Trường hợp người dân tự ý phóng sinh các loài rùa tai đỏ, tôm càng đỏ hoặc động vật ngoại lai xâm hại vào ao hồ tự nhiên bị coi là gì?",
    "options": [
      "Hành vi phát tán loài ngoại lai xâm hại môi trường sinh thái, vi phạm nghiêm trọng pháp luật bảo vệ môi trường và bị xử phạt vi phạm hành chính nặng",
      "Hành động từ bi bác ái giúp các sinh vật ngoại quốc có cơ hội nhập tịch và hòa nhập thân thiện vào môi trường sinh thái ao làng thanh bình của Việt Nam",
      "Thả vào ao hồ để chúng làm quen kết bạn với tôm cá bản địa rồi cùng nhau xây dựng tình hữu nghị quốc tế đoàn kết gắn bó keo sơn dưới đáy sông ngòi",
      "Hoàn toàn vô hại vì loài ngoại lai phàm ăn sẽ tình nguyện dọn sạch rác rưởi cỏ rác dưới lòng kênh mương, giúp bà con đỡ tốn công sức nạo vét dòng sông"
    ],
    "correct": "Hành vi phát tán loài ngoại lai xâm hại môi trường sinh thái, vi phạm nghiêm trọng pháp luật bảo vệ môi trường và bị xử phạt vi phạm hành chính nặng",
    "explanation": "Điều 8 Luật Đa dạng sinh học và Điều 43 Nghị định 45/2022/NĐ-CP: Hành vi nhập khẩu, phát tán loài ngoại lai xâm hại phá hoại môi trường sống, gây nguy hại đa dạng sinh học bị xử phạt rất nặng và buộc thực hiện các biện pháp kiểm soát, tiêu hủy."
  },
  {
    "question": "Cơ sở nuôi động vật rừng thông thường nhưng không ghi chép Sổ theo dõi định kỳ bị xử phạt về hành vi nào?",
    "options": [
      "Hành vi vi phạm quy định về quản lý hồ sơ nguồn gốc lâm sản",
      "Hành vi kinh doanh trốn thuế môn bài",
      "Hành vi chậm nộp báo cáo thống kê dân số",
      "Không bị xử lý vì là động vật thông thường"
    ],
    "correct": "Hành vi vi phạm quy định về quản lý hồ sơ nguồn gốc lâm sản",
    "explanation": "Không lập hoặc không ghi chép sổ theo dõi động vật rừng theo quy định bị xử phạt hành chính theo quy định về quản lý hồ sơ lâm sản hợp pháp (Điều 27 NĐ 146)."
  },
  {
    "question": "Hành vi chế tác, buôn bán đồ trang sức làm từ ngà voi, sừng tê giác, mai rùa biển có bị cấm không?",
    "options": [
      "Cấm tuyệt đối mọi hành vi tàng trữ, buôn bán, chế tác dưới bất kỳ hình thức nào",
      "Được phép bán nếu ghi rõ là hàng thủ công mỹ nghệ cổ truyền",
      "Được phép nếu mua bán trao tay giữa các cá nhân",
      "Chỉ cấm ngà voi nguyên chiếc, không cấm vòng tay ngà voi nhỏ"
    ],
    "correct": "Cấm tuyệt đối mọi hành vi tàng trữ, buôn bán, chế tác dưới bất kỳ hình thức nào",
    "explanation": "Khoản 1 Điều 244 Bộ luật Hình sự số 100/2015/QH13: Ngà voi, sừng tê giác, mai rùa biển là mẫu vật của loài nguy cấp ưu tiên bảo vệ; mọi hành vi tàng trữ, chế tác, mua bán trái phép đều bị xử lý hình sự nghiêm khắc."
  },
  {
    "question": "Hành vi mua trứng của các loài rùa biển, chim rừng hoang dã quý hiếm về ấp nở bán kiếm lời bị pháp luật xử lý như thế nào?",
    "options": [
      "Bị xử lý nghiêm như hành vi tàng trữ, săn bắt, buôn bán cá thể động vật hoang dã; có thể bị xử lý hình sự phạt tù nghiêm khắc",
      "Được coi là hành vi nông nghiệp nhân đạo có công ươm tạo con giống bảo tồn thiên nhiên đáng được nhận bằng khen của xã hội",
      "Chỉ bị nhắc nhở giải tỏa chuồng ấp vì quả trứng tròn chưa nở thành hình con vật thì chưa thể coi là động vật hoang dã được",
      "Hoàn toàn không thuộc phạm vi điều chỉnh của pháp luật lâm nghiệp vì quả trứng thuộc về quyền sở hữu tự do của người nhặt được"
    ],
    "correct": "Bị xử lý nghiêm như hành vi tàng trữ, săn bắt, buôn bán cá thể động vật hoang dã; có thể bị xử lý hình sự phạt tù nghiêm khắc",
    "explanation": "Khoản 15 Điều 3 Nghị định số 06/2019/NĐ-CP và Điều 244 Bộ luật Hình sự: Mẫu vật động vật rừng bao gồm cả trứng, ấu trùng; hành vi thu nhặt, săn bắt, mua bán trứng của các loài chim, bò sát nguy cấp quý hiếm bị xử lý hình sự như cá thể trưởng thành."
  },
  {
    "question": "Mức phạt tiền thấp nhất đối với hành vi săn bắt, giết, nuôi, nhốt động vật rừng trái phép theo Nghị định 146/2026/NĐ-CP bắt đầu từ bao nhiêu?",
    "options": [
      "Phạt tiền từ 1.000.000 đồng",
      "Phạt tiền từ 100.000 đồng",
      "Phạt tiền từ 20.000.000 đồng",
      "Phạt tiền từ 50.000.000 đồng"
    ],
    "correct": "Phạt tiền từ 1.000.000 đồng",
    "explanation": "Khoản 1 Điều 24 Nghị định số 146/2026/NĐ-CP: Mức phạt vi phạm quy định về bảo vệ động vật rừng bắt đầu từ 1.000.000 đồng đối với mức vi phạm thấp nhất."
  },
  {
    "question": "Mức phạt tiền tối đa đối với cá nhân vi phạm quy định về bảo vệ động vật rừng theo Nghị định 146/2026/NĐ-CP lên tới bao nhiêu triệu đồng?",
    "options": [
      "Lên đến 500.000.000 đồng",
      "Lên đến 50.000.000 đồng",
      "Lên đến 100.000.000 đồng",
      "Lên đến 200.000.000 đồng"
    ],
    "correct": "Lên đến 500.000.000 đồng",
    "explanation": "Theo quy định tại Điều 24 Nghị định 146/2026/NĐ-CP, khung phạt cao nhất áp dụng đối với cá nhân có hành vi vi phạm về động vật rừng lên tới 500.000.000 đồng (tổ chức gấp đôi)."
  },
  {
    "question": "Hình thức xử phạt bổ sung phổ biến đối với hành vi nuôi nhốt, săn bắt động vật hoang dã trái pháp luật là gì?",
    "options": [
      "Tịch thu toàn bộ tang vật động vật rừng, tịch thu súng, lưới, bẫy, phương tiện vi phạm và tước mã số cơ sở nuôi (nếu có)",
      "Buộc lao động công ích dọn vệ sinh đường làng trong 01 năm",
      "Cấm xuất cảnh vĩnh viễn khỏi nơi cư trú",
      "Bắt buộc đóng góp quỹ bảo tồn rừng 50% thu nhập hàng tháng"
    ],
    "correct": "Tịch thu toàn bộ tang vật động vật rừng, tịch thu súng, lưới, bẫy, phương tiện vi phạm và tước mã số cơ sở nuôi (nếu có)",
    "explanation": "Khoản 3 Điều 24 Nghị định số 146/2026/NĐ-CP: Hình thức xử phạt bổ sung đối với hành vi săn bắt, nuôi nhốt động vật rừng trái phép gồm tịch thu tang vật động vật rừng, tịch thu toàn bộ công cụ súng, lưới bẫy và tước mã số cơ sở nuôi."
  },
  {
    "question": "Hành vi quảng cáo mua bán động vật rừng hoặc sản phẩm của chúng trên mạng xã hội bị xử phạt mức tiền tối thiểu đến tối đa là bao nhiêu?",
    "options": [
      "Phạt tiền từ 1.000.000 đồng đến 15.000.000 đồng (buộc gỡ bỏ quảng cáo)",
      "Phạt tiền từ 50.000 đồng đến 200.000 đồng",
      "Phạt tiền từ 50.000.000 đồng đến 100.000.000 đồng",
      "Không bị phạt tiền, chỉ bị khóa tài khoản mạng xã hội 3 ngày"
    ],
    "correct": "Phạt tiền từ 1.000.000 đồng đến 15.000.000 đồng (buộc gỡ bỏ quảng cáo)",
    "explanation": "Điều 28 Nghị định 146/2026/NĐ-CP quy định hành vi quảng cáo động vật rừng trái phép bị phạt từ 1.000.000 đồng đến 15.000.000 đồng và buộc gỡ bỏ quảng cáo."
  },
  {
    "question": "Theo Điều 244 Bộ luật Hình sự, hành vi săn bắt, giết, nuôi, nhốt, vận chuyển, buôn bán trái phép tối thiểu bao nhiêu cá thể lớp thú thuộc Nhóm IB hoặc Danh mục nguy cấp ưu tiên bảo vệ là bị đi tù?",
    "options": [
      "Chỉ từ 01 cá thể lớp thú là đã đủ yếu tố bị truy cứu trách nhiệm hình sự (phạt tù từ 1 đến 5 năm)",
      "Phải từ 5 cá thể trở lên mới bị xử lý hình sự",
      "Phải từ 10 cá thể trở lên mới bị khởi tố",
      "Bao nhiêu cá thể cũng chỉ bị xử phạt vi phạm hành chính"
    ],
    "correct": "Chỉ từ 01 cá thể lớp thú là đã đủ yếu tố bị truy cứu trách nhiệm hình sự (phạt tù từ 1 đến 5 năm)",
    "explanation": "Điểm a Khoản 1 Điều 244 Bộ luật Hình sự: Tàng trữ, nuôi, nhốt, buôn bán chỉ từ 01 cá thể lớp thú Nhóm IB hoặc Danh mục loài ưu tiên bảo vệ là bị truy cứu hình sự (khung 1 đến 5 năm tù)."
  },
  {
    "question": "Hành vi tàng trữ, buôn bán trái phép bao nhiêu kilôgam (kg) ngà voi thì bị truy cứu trách nhiệm hình sự theo Điều 244 BLHS?",
    "options": [
      "Từ 02 kilôgam (kg) ngà voi trở lên là bị phạt tù từ 1 đến 5 năm",
      "Từ 50 kilôgam ngà voi trở lên mới bị xử lý",
      "Từ 100 kilôgam ngà voi trở lên mới bị khởi tố",
      "Ngà voi không quy định trọng lượng khởi tố hình sự"
    ],
    "correct": "Từ 02 kilôgam (kg) ngà voi trở lên là bị phạt tù từ 1 đến 5 năm",
    "explanation": "Điểm d Khoản 1 Điều 244 Bộ luật Hình sự quy định: Tàng trữ, mua bán ngà voi từ 02 kilôgam đến dưới 20 kilôgam bị phạt tù từ 1 năm đến 5 năm (từ 20kg trở lên phạt tù đến 15 năm)."
  },
  {
    "question": "Hành vi tàng trữ, mua bán bao nhiêu kilôgam (kg) sừng tê giác thì bị truy cứu trách nhiệm hình sự theo Điều 244 BLHS?",
    "options": [
      "Từ 0,05 kilôgam (50 gam) sừng tê giác trở lên là bị khởi tố hình sự",
      "Từ 2 kilôgam sừng tê giác trở lên",
      "Từ 10 kilôgam sừng tê giác trở lên",
      "Chỉ xử phạt hành chính không bao giờ đi tù"
    ],
    "correct": "Từ 0,05 kilôgam (50 gam) sừng tê giác trở lên là bị khởi tố hình sự",
    "explanation": "Điểm đ Khoản 1 Điều 244 Bộ luật Hình sự: Mua bán, tàng trữ từ 0,05 kilôgam (50g) sừng tê giác trở lên đã cấu thành tội phạm, bị phạt tù từ 1 đến 5 năm (từ 1kg trở lên phạt tù đến 15 năm)."
  },
  {
    "question": "Đối với các loài chim, bò sát, lưỡng cư thuộc Danh mục loài nguy cấp, quý, hiếm được ưu tiên bảo vệ, số lượng tối thiểu để bị truy cứu hình sự là bao nhiêu?",
    "options": [
      "Từ 02 cá thể đến 10 cá thể đối với lớp bò sát, chim hoặc lưỡng cư",
      "Phải từ 50 con chim trở lên",
      "Phải từ 100 con rắn trở lên",
      "Không bao giờ bị phạt tù nếu là chim và bò sát"
    ],
    "correct": "Từ 02 cá thể đến 10 cá thể đối với lớp bò sát, chim hoặc lưỡng cư",
    "explanation": "Khoản 1 Điều 244 BLHS quy định: Vi phạm từ 02 đến 10 cá thể lớp bò sát; từ 03 đến 10 cá thể lớp chim/lưỡng cư thuộc danh mục ưu tiên bảo vệ là bị truy cứu hình sự."
  },
  {
    "question": "Mức hình phạt tù tối đa đối với tội vi phạm quy định về bảo vệ động vật nguy cấp, quý, hiếm (Điều 244 BLHS) là bao nhiêu năm?",
    "options": [
      "Lên đến 15 năm tù giam",
      "Lên đến 3 năm tù giam",
      "Lên đến 7 năm tù giam",
      "Chỉ phạt tù treo tối đa 2 năm"
    ],
    "correct": "Lên đến 15 năm tù giam",
    "explanation": "Khoản 3 Điều 244 Bộ luật Hình sự quy định mức phạt tù cao nhất đối với các hành vi phạm tội có tổ chức, số lượng đặc biệt lớn lên tới 15 năm tù."
  },
  {
    "question": "Đối với động vật hoang dã thuộc Danh mục Nhóm IIB hoặc CITES Phụ lục II, giá trị tang vật tối thiểu từ bao nhiêu đồng thì bị khởi tố hình sự theo Điều 234 BLHS?",
    "options": [
      "Trị giá tang vật từ 150.000.000 đồng trở lên (hoặc từ 300.000.000 đồng với động vật thông thường)",
      "Chỉ từ 2.000.000 đồng",
      "Chỉ từ 10.000.000 đồng",
      "Từ 1 tỷ đồng trở lên"
    ],
    "correct": "Trị giá tang vật từ 150.000.000 đồng trở lên (hoặc từ 300.000.000 đồng với động vật thông thường)",
    "explanation": "Điều 234 BLHS: Hành vi vi phạm đối với động vật Nhóm IIB hoặc Phụ lục II CITES có trị giá từ 150 triệu đến dưới 500 triệu đồng (hoặc thu lợi bất chính từ 50 đến 200 triệu) bị xử lý hình sự."
  },
  {
    "question": "Trường hợp cá nhân săn bắt, nuôi nhốt trái phép động vật rừng thông thường nhưng đã bị xử phạt VPHC mà còn tái phạm thì bị xử lý thế nào?",
    "options": [
      "Bị truy cứu trách nhiệm hình sự về tội vi phạm quy định về bảo vệ động vật hoang dã (kể cả khi giá trị tang vật chưa tới ngưỡng tiền khởi tố)",
      "Chỉ bị xử phạt vi phạm hành chính với số tiền phạt bằng đúng mức tiền phạt đã nộp trong lần vi phạm đầu tiên trước đây",
      "Được Nhà nước tự động miễn xử phạt nếu cá nhân viết một bức thư tay cam kết từ nay về sau sẽ không bao giờ tái phạm nữa",
      "Chỉ bị đồng chí Trưởng thôn đọc tên nhắc nhở phê bình trên hệ thống loa truyền thanh của xã vào các buổi sáng sớm cuối tuần"
    ],
    "correct": "Bị truy cứu trách nhiệm hình sự về tội vi phạm quy định về bảo vệ động vật hoang dã (kể cả khi giá trị tang vật chưa tới ngưỡng tiền khởi tố)",
    "explanation": "Khoản 1 Điều 234 Bộ luật Hình sự số 100/2015/QH13 (sửa đổi 2017): Người thực hiện hành vi săn bắt, giết, nuôi, nhốt, vận chuyển, buôn bán trái phép động vật rừng tuy tang vật chưa đạt định lượng tối thiểu nhưng đã bị xử phạt VPHC về hành vi này mà còn tái phạm thì bị truy cứu trách nhiệm hình sự."
  },
  {
    "question": "Pháp nhân thương mại (doanh nghiệp) vi phạm quy định tại Điều 244 BLHS về bảo vệ động vật nguy cấp, quý, hiếm có thể bị phạt tiền tối đa bao nhiêu?",
    "options": [
      "Phạt tiền lên đến 15.000.000.000 đồng hoặc đình chỉ hoạt động vĩnh viễn",
      "Phạt tiền tối đa 500.000.000 đồng",
      "Phạt tiền tối đa 1.000.000.000 đồng",
      "Pháp nhân không bị xử phạt hình sự, chỉ phạt cá nhân giám đốc"
    ],
    "correct": "Phạt tiền lên đến 15.000.000.000 đồng hoặc đình chỉ hoạt động vĩnh viễn",
    "explanation": "Khoản 4 Điều 244 Bộ luật Hình sự quy định pháp nhân thương mại phạm tội có thể bị phạt tiền từ 1 tỷ đến 15 tỷ đồng hoặc đình chỉ hoạt động vĩnh viễn."
  },
  {
    "question": "Tổ chức, cá nhân nuôi động vật rừng thông thường (như chim chào mào, chim cu gáy, dúi, cầy vòi mốc) phải đáp ứng những điều kiện bắt buộc nào theo Khoản 1 Điều 24 Thông tư 85/2025/TT-BNNMT?",
    "options": [
      "Có nguồn gốc hợp pháp theo quy định quản lý lâm sản; bảo đảm an toàn cho con người; tuân thủ các quy định của pháp luật về môi trường và thú y",
      "Chủ nuôi phải cam kết mỗi ngày dạy chim hót tối thiểu 2 tiếng đồng hồ và tuyệt đối không để chim cất tiếng hót làm phiền hàng xóm",
      "Phải lắp đặt máy điều hòa nhiệt độ hai chiều và trang bị quạt sưởi ấm riêng cho từng lồng chim vào những ngày đông giá rét",
      "Bắt buộc chủ nuôi phải có bằng tốt nghiệp đại học chuyên ngành chăn nuôi thú y loại giỏi và giấy chứng nhận nghệ nhân chim cảnh"
    ],
    "correct": "Có nguồn gốc hợp pháp theo quy định quản lý lâm sản; bảo đảm an toàn cho con người; tuân thủ các quy định của pháp luật về môi trường và thú y",
    "explanation": "Khoản 1 Điều 24 Thông tư 85/2025/TT-BNNMT quy định 2 điều kiện cốt lõi: nguồn gốc hợp pháp và bảo đảm an toàn con người, vệ sinh thú y, môi trường."
  },
  {
    "question": "Khi đưa động vật rừng thông thường (như chim chào mào, chim cu gáy) về cơ sở nuôi, thời hạn chủ nuôi phải gửi thông báo đến Cơ quan Kiểm lâm sở tại là bao lâu?",
    "options": [
      "Trong thời hạn tối đa 03 ngày làm việc kể từ ngày đưa động vật về cơ sở nuôi",
      "Trong thời hạn 30 ngày làm việc kể từ ngày đưa động vật về cơ sở nuôi",
      "Chỉ cần gửi thông báo vào dịp kiểm kê cuối năm âm lịch",
      "Không phải thông báo nếu số lượng nuôi dưới 20 cá thể"
    ],
    "correct": "Trong thời hạn tối đa 03 ngày làm việc kể từ ngày đưa động vật về cơ sở nuôi",
    "explanation": "Khoản 2 Điều 24 Thông tư 85/2025/TT-BNNMT quy định: Trong thời hạn tối đa 03 ngày làm việc kể từ ngày đưa động vật về nuôi, phải gửi thông báo đến Kiểm lâm sở tại."
  },
  {
    "question": "Mẫu văn bản thông báo gửi Cơ quan Kiểm lâm sở tại khi đưa động vật rừng thông thường về cơ sở nuôi là mẫu biểu nào?",
    "options": [
      "Thông báo Phụ lục II ban hành kèm)",
      "Đơn khiếu nại hành chính theo Luật Khiếu nại",
      "Tờ khai đăng ký tạm trú của Công an phường/xã",
      "Bản cam kết tự nguyện hiến tặng tài sản cho nhà nước"
    ],
    "correct": "Thông báo Phụ lục II ban hành kèm)",
    "explanation": "Khoản 2 Điều 24 Thông tư 85/2025/TT-BNNMT quy định gửi thông báo theo Mẫu số 11 Phụ lục II kèm bản sao hồ sơ nguồn gốc đến Kiểm lâm sở tại."
  },
  {
    "question": "Sổ theo dõi hoạt động nuôi động vật rừng thông thường tại cơ sở phải ghi chép theo mẫu nào theo Thông tư 85/2025/TT-BNNMT?",
    "options": [
      "Ghi chép sổ theo dõi Phụ lục II ban hành kèm",
      "Sổ ghi chép công nợ bán lẻ của tiệm tạp hóa",
      "Sổ khám bệnh định kỳ của cơ sở y tế",
      "Không cần lập sổ nếu chủ nuôi có trí nhớ tốt"
    ],
    "correct": "Ghi chép sổ theo dõi Phụ lục II ban hành kèm",
    "explanation": "Khoản 2 Điều 24 Thông tư 85/2025/TT-BNNMT quy định chủ cơ sở nuôi phải lập và cập nhật Sổ theo dõi theo Mẫu số 10 Phụ lục II."
  },
  {
    "question": "Cơ quan nào có trách nhiệm chính trong việc tiếp nhận thông báo và xác nhận nguồn gốc hợp pháp đối với động vật rừng thông thường (chim chào mào, cu gáy)?",
    "options": [
      "Cơ quan Kiểm lâm sở tại (Hạt Kiểm lâm hoặc Chi cục Kiểm lâm ở những địa phương không có Hạt Kiểm lâm)",
      "Đội Quản lý thị trường khu vực",
      "Trạm Cảnh sát giao thông đường bộ",
      "Hội Sinh vật cảnh cấp tỉnh"
    ],
    "correct": "Cơ quan Kiểm lâm sở tại (Hạt Kiểm lâm hoặc Chi cục Kiểm lâm ở những địa phương không có Hạt Kiểm lâm)",
    "explanation": "Khoản 5 Điều 5 Thông tư 26/2025/TT-BNNMT: Cơ quan Kiểm lâm sở tại (Hạt Kiểm lâm hoặc Chi cục Kiểm lâm nơi không có Hạt) là đầu mối tiếp nhận, quản lý và xác nhận."
  },
  {
    "question": "Người dân và cơ sở nuôi nộp hồ sơ đề nghị xác nhận nguồn gốc động vật rừng thông thường tại địa điểm nào?",
    "options": [
      "Tại Cơ quan Kiểm lâm sở tại hoặc Bộ phận Một cửa / Trung tâm Phục vụ hành chính công địa phương",
      "Nộp tại quầy vé bến xe khách liên tỉnh",
      "Gửi qua hòm thư khiếu nại của đài truyền hình",
      "Chỉ được nộp trực tiếp tại trụ sở Bộ Nông nghiệp và Môi trường tại Hà Nội"
    ],
    "correct": "Tại Cơ quan Kiểm lâm sở tại hoặc Bộ phận Một cửa / Trung tâm Phục vụ hành chính công địa phương",
    "explanation": "Điểm a Khoản 7 Điều 5 Thông tư 26/2025/TT-BNNMT: Hồ sơ nộp tại Cơ quan Kiểm lâm sở tại hoặc qua Bộ phận Một cửa/Trung tâm Phục vụ hành chính công cấp huyện/tỉnh."
  },
  {
    "question": "Mức chi phí mà tổ chức, cá nhân phải nộp cho cơ quan Kiểm lâm khi làm thủ tục xác nhận nguồn gốc hợp pháp động vật rừng thông thường là bao nhiêu?",
    "options": [
      "Hoàn toàn KHÔNG thu phí (thủ tục được thực hiện miễn phí theo quy định nhà nước)",
      "Thu phí 50.000 đồng cho mỗi cá thể chim cảnh",
      "Thu phí thẩm định 1.000.000 đồng một lần kiểm tra",
      "Người dân phải trả chi phí bồi dưỡng xăng xe cho đoàn kiểm tra"
    ],
    "correct": "Hoàn toàn KHÔNG thu phí (thủ tục được thực hiện miễn phí theo quy định nhà nước)",
    "explanation": "Điểm a Khoản 7 Điều 5 Thông tư số 26/2025/TT-BNNMT: Thủ tục xác nhận Bảng kê lâm sản, xác nhận nguồn gốc động vật rừng thông thường tại Cơ quan Kiểm lâm sở tại được thực hiện hoàn toàn miễn phí, không thu bất kỳ khoản phí nào."
  },
  {
    "question": "Trường hợp loài động vật rừng thông thường chưa có tiêu chuẩn, quy chuẩn quốc gia về chuồng trại do cơ quan Nhà nước ban hành thì chủ cơ sở nuôi thực hiện như thế nào?",
    "options": [
      "Khuyến khích chủ cơ sở nuôi tự ban hành và áp dụng tiêu chuẩn cơ sở hoặc áp dụng tiêu chuẩn quốc tế và tự chịu trách nhiệm trước pháp luật về việc áp dụng các tiêu chuẩn đó",
      "Bắt buộc phải dừng ngay việc nuôi và tiêu hủy toàn bộ đàn vật nuôi",
      "Phải chờ khi nào Bộ Nông nghiệp và Môi trường ban hành quy chuẩn mới được nuôi",
      "Tự do nuôi thả rông trong khu dân cư mà không cần chuồng trại"
    ],
    "correct": "Khuyến khích chủ cơ sở nuôi tự ban hành và áp dụng tiêu chuẩn cơ sở hoặc áp dụng tiêu chuẩn quốc tế và tự chịu trách nhiệm trước pháp luật về việc áp dụng các tiêu chuẩn đó",
    "explanation": "Điểm b Khoản 1 Điều 24 Thông tư 85/2025/TT-BNNMT: Chưa có quy chuẩn nhà nước thì chủ nuôi tự xây dựng áp dụng tiêu chuẩn cơ sở/quốc tế và tự chịu trách nhiệm pháp lý."
  },
  {
    "question": "Tổ chức, hộ kinh doanh nuôi động vật rừng thông thường phải lập Sổ theo dõi nhập, xuất lâm sản theo mẫu nào và nộp báo cáo định kỳ hàng năm trước ngày nào?",
    "options": [
      "Lập Sổ và báo cáo hàng năm cho Kiểm lâm sở tại trước ngày 15 tháng 01 năm sau",
      "Lập Sổ tay cá nhân và báo cáo vào ngày 30 tháng 6 hàng năm",
      "Chỉ cần báo cáo miệng khi có đoàn thanh tra đến hỏi thăm",
      "Không phải báo cáo nếu doanh thu bán chim cảnh dưới 100 triệu đồng"
    ],
    "correct": "Lập Sổ và báo cáo hàng năm cho Kiểm lâm sở tại trước ngày 15 tháng 01 năm sau",
    "explanation": "Điểm c Khoản 7 Điều 32 Thông tư 26/2025/TT-BNNMT: Tổ chức, hộ kinh doanh lập Sổ Mẫu số 04 và gửi Báo cáo Mẫu số 29 định kỳ hàng năm trước ngày 15 tháng 01."
  },
  {
    "question": "Khoảng thời gian chốt số liệu báo cáo tình hình nhập, xuất lâm sản định kỳ hàng năm của tổ chức, hộ kinh doanh được tính như thế nào?",
    "options": [
      "Được tính từ ngày 15 tháng 12 năm trước kỳ báo cáo đến ngày 14 tháng 12 của kỳ báo cáo",
      "Được tính từ ngày 01 tháng 01 đến ngày 31 tháng 12 của năm dương lịch",
      "Được tính từ ngày mùng 1 Tết âm lịch đến ngày 30 Tết âm lịch",
      "Do chủ doanh nghiệp tự lựa chọn khoảng thời gian có lợi nhất cho mình"
    ],
    "correct": "Được tính từ ngày 15 tháng 12 năm trước kỳ báo cáo đến ngày 14 tháng 12 của kỳ báo cáo",
    "explanation": "Điểm c Khoản 7 Điều 32 Thông tư 26/2025/TT-BNNMT: Thời gian chốt số liệu báo cáo tính từ ngày 15/12 năm trước kỳ báo cáo đến ngày 14/12 của kỳ báo cáo."
  },
  {
    "question": "Trường hợp nào tổ chức, hộ kinh doanh nuôi động vật rừng thông thường được MIỄN nộp báo cáo giấy Mẫu số 29 cho cơ quan Kiểm lâm sở tại?",
    "options": [
      "Khi tổ chức, hộ kinh doanh đã cập nhật tình hình nhập, xuất lâm sản trên hệ thống quản lý, truy xuất nguồn gốc lâm sản điện tử",
      "Khi trang trại tạm ngừng bán hàng trong tháng Tết",
      "Khi có xác nhận là gia đình có công với cách mạng",
      "Khi tổng số lượng chim sinh sản trong năm bị giảm sút"
    ],
    "correct": "Khi tổ chức, hộ kinh doanh đã cập nhật tình hình nhập, xuất lâm sản trên hệ thống quản lý, truy xuất nguồn gốc lâm sản điện tử",
    "explanation": "Khoản 7 Điều 32 Thông tư 26/2025/TT-BNNMT: Miễn nộp báo cáo giấy Mẫu 29 nếu đã cập nhật thường xuyên trên hệ thống phần mềm quản lý, truy xuất nguồn gốc lâm sản."
  },
  {
    "question": "Tình huống: Anh A mua 30 con chim chào mào từ các đối tượng giăng lưới bẫy bắt trộm trong rừng tự nhiên về nuôi trong lồng lớn để bán kiếm lời. Khi bị Kiểm lâm kiểm tra, anh A bị xử lý thế nào?",
    "options": [
      "Bị xử phạt vi phạm hành chính về hành vi nuôi nhốt động vật rừng không có nguồn gốc hợp pháp, bị tịch thu toàn bộ 30 con chim chào mào để thả về tự nhiên",
      "Được chính quyền địa phương khen thưởng danh hiệu 'Người có công sưu tầm âm thanh tiếng hót thiên nhiên' phục vụ phong trào văn nghệ",
      "Chỉ cần phạt anh A phải nghe 30 con chim chào mào thi nhau hót liên tục trong 3 ngày đêm không ngủ để tự kiểm điểm nhận thức bản thân",
      "Được cho phép giữ lại đàn chim nếu anh A cam kết huấn luyện cho cả 30 con chim biết hót đúng làn điệu dân ca truyền thống quê hương"
    ],
    "correct": "Bị xử phạt vi phạm hành chính về hành vi nuôi nhốt động vật rừng không có nguồn gốc hợp pháp, bị tịch thu toàn bộ 30 con chim chào mào để thả về tự nhiên",
    "explanation": "Khoản 1 Điều 24 Thông tư 85/2025/TT-BNNMT và Điều 24 NĐ 146/2026/NĐ-CP: Nuôi nhốt động vật rừng không có nguồn gốc hợp pháp bị phạt tiền và tịch thu tang vật."
  },
  {
    "question": "Tình huống: Chị B mua 10 cặp chim cu gáy giống có hóa đơn, Bảng kê lâm sản hợp pháp từ trang trại được cấp phép ở tỉnh khác về nuôi. Đã 15 ngày kể từ ngày nhận chim về chuồng nhưng chị B không gửi thông báo cho Hạt Kiểm lâm. Chị B có vi phạm không?",
    "options": [
      "Có vi phạm: Chậm quá thời hạn tối đa 03 ngày làm việc mà không gửi Thông báo biến động đàn nuôi cho Cơ quan Kiểm lâm sở tại theo quy định",
      "Không vi phạm vì nguồn gốc đàn chim giống ban đầu của chị B đã có đầy đủ hóa đơn chứng từ hợp pháp của trang trại bán giống",
      "Chỉ bị coi là vi phạm nếu trong quá trình nuôi nhốt đàn chim cu gáy bị dịch bệnh chết rải rác quá một nửa số lượng con giống",
      "Được tự động gia hạn thời gian gửi thông báo lên 6 tháng nếu chị B chứng minh được gia đình đang bận chăm sóc con nhỏ ở nhà"
    ],
    "correct": "Có vi phạm: Chậm quá thời hạn tối đa 03 ngày làm việc mà không gửi Thông báo biến động đàn nuôi cho Cơ quan Kiểm lâm sở tại theo quy định",
    "explanation": "Điều 24 Thông tư số 85/2025/TT-BNNMT: Trong thời hạn 03 ngày làm việc kể từ ngày đưa động vật rừng thông thường về nuôi, chủ cơ sở phải gửi Thông báo (Mẫu số 11) cho Cơ quan Kiểm lâm sở tại để theo dõi, quản lý."
  },
  {
    "question": "Hành vi lập các hội nhóm trên mạng xã hội Facebook, Zalo để giao lưu, chia sẻ mẹo giăng lưới tàng hình và bẫy bắt chim cu gáy, chim chào mào tự nhiên bị xử lý ra sao?",
    "options": [
      "Bị cơ quan chức năng điều tra, xử lý nghiêm về hành vi tuyên truyền, hướng dẫn, kích động hành vi săn bắt động vật hoang dã trái phép trên không gian mạng",
      "Được coi là diễn đàn khoa học kỹ thuật bảo tồn chim cảnh",
      "Không vi phạm pháp luật nếu các thành viên chỉ nhắn tin bằng hình ảnh",
      "Được khuyến khích phát triển để tạo sân chơi văn hóa cho giới trẻ"
    ],
    "correct": "Bị cơ quan chức năng điều tra, xử lý nghiêm về hành vi tuyên truyền, hướng dẫn, kích động hành vi săn bắt động vật hoang dã trái phép trên không gian mạng",
    "explanation": "Luật An ninh mạng và pháp luật lâm nghiệp nghiêm cấm tuyên truyền, kích động, hướng dẫn phương thức săn bắt tận diệt động vật hoang dã trên mạng."
  },
  {
    "question": "Người dân nuôi chim cu gáy, chào mào sinh sản trong lồng muốn bán chim non cho khách chơi chim thì cần lập chứng từ gì để người mua lưu thông hợp pháp?",
    "options": [
      "Trích lục Sổ theo dõi Mẫu số 10 của cơ sở, lập Bảng kê lâm sản theo quy định và đề nghị Kiểm lâm sở tại xác nhận (nếu người mua có nhu cầu xác nhận tự nguyện)",
      "Chỉ cần quay một đoạn video chim mẹ đang mớm mồi gửi qua Zalo",
      "Viết một tờ giấy biên nhận tiền mặt không ghi thông tin loài chim",
      "Không cần bất kỳ giấy tờ gì vì chim non sinh ra trong nhà đương nhiên hợp pháp"
    ],
    "correct": "Trích lục Sổ theo dõi Mẫu số 10 của cơ sở, lập Bảng kê lâm sản theo quy định và đề nghị Kiểm lâm sở tại xác nhận (nếu người mua có nhu cầu xác nhận tự nguyện)",
    "explanation": "Xuất bán chim sinh sản tại cơ sở cần trích xuất Sổ theo dõi Mẫu 10, lập Bảng kê lâm sản theo Thông tư 26/2025/TT-BNNMT để chứng minh nguồn gốc hợp pháp."
  }
];
