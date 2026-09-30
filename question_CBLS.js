/**
 * BỘ CÂU HỎI TRẮC NGHIỆM PHÁP LUẬT LÂM NGHIỆP - GÓI 3 (85 CÂU)
 * Kinh doanh, chế biến, vận chuyển lâm sản & Cây cổ thụ bứng dưỡng
 * Đã bổ sung 15 câu thực tế theo Thông tư 26/2025/TT-BNNMT:
 * - Cây cổ thụ, cây tuổi thọ cao di dời từ dự án công trình (Khoản 5 Điều 6)
 * - Cây phân tán, đất ngoài quy hoạch lâm nghiệp (Khoản 3 Điều 8)
 * - Tên khoa học Latinh là căn cứ pháp lý chính thức duy nhất
 * - Bảng kê lâm sản, Sổ theo dõi Mẫu 04, Báo cáo Mẫu 29 (Khoản 7 Điều 32)
 */
const question_CBLS = [
  {
    "question": "Theo Thông tư 26/2022/TT-BNNPTNT (hợp nhất TT 84/2025/TT-BNNMT), trường hợp nào sau đây chủ lâm sản KHÔNG BẮT BUỘC phải đề nghị cơ quan Kiểm lâm xác nhận Bảng kê lâm sản khi xuất bán?",
    "options": [
      "Doanh nghiệp chế biến gỗ được phân loại Nhóm I xuất bán sản phẩm gỗ hoặc gỗ rừng trồng hợp pháp trong nước; lâm sản là sản phẩm gỗ hoàn chỉnh",
      "Xuất bán gỗ tròn khai thác từ rừng tự nhiên trong nước",
      "Xuất bán động vật rừng nguy cấp, quý, hiếm còn sống cho cơ sở nuôi ngoại tỉnh",
      "Xuất bán gỗ xẻ thuộc Danh mục thực vật rừng Nhóm IA, IIA khai thác trong nước"
    ],
    "correct": "Doanh nghiệp chế biến gỗ được phân loại Nhóm I xuất bán sản phẩm gỗ hoặc gỗ rừng trồng hợp pháp trong nước; lâm sản là sản phẩm gỗ hoàn chỉnh",
    "explanation": "Điều 5, Điều 6 Thông tư 26/2022/TT-BNNPTNT: Doanh nghiệp Nhóm I tự xác nhận Bảng kê lâm sản khi xuất bán gỗ rừng trồng nội địa, sản phẩm gỗ hoàn chỉnh; không bắt buộc đề nghị Kiểm lâm xác nhận."
  },
  {
    "question": "Thời hạn cơ quan Kiểm lâm sở tại thực hiện việc xác nhận Bảng kê lâm sản đối với trường hợp KHÔNG PHẢI kiểm tra thực tế lâm sản là bao lâu?",
    "options": [
      "Trong thời hạn 02 ngày làm việc kể từ ngày nhận đủ hồ sơ đề nghị hợp lệ",
      "Trong thời hạn 24 giờ kể từ thời điểm tiếp nhận hồ sơ",
      "Trong thời hạn 05 ngày làm việc theo quy chế một cửa liên thông",
      "Trong thời hạn 07 ngày làm việc để đối chiếu với sổ theo dõi lâm sản"
    ],
    "correct": "Trong thời hạn 02 ngày làm việc kể từ ngày nhận đủ hồ sơ đề nghị hợp lệ",
    "explanation": "Khoản 3 Điều 6 Thông tư 26/2022/TT-BNNPTNT quy định: Trường hợp không phải kiểm tra thực tế lâm sản, trong thời hạn 02 ngày làm việc kể từ khi nhận đủ hồ sơ hợp lệ, Kiểm lâm phải hoàn thành xác nhận."
  },
  {
    "question": "Trường hợp nào cơ quan Kiểm lâm BẮT BUỘC phải tiến hành kiểm tra thực tế lâm sản trước khi ký xác nhận Bảng kê lâm sản?",
    "options": [
      "Có thông tin phản ánh hoặc dấu hiệu nghi vấn lâm sản không đúng nguồn gốc, chủng loại, số lượng; hoặc lâm sản thuộc loài nguy cấp quý hiếm cần xác minh",
      "Bắt buộc đối với 100% tất cả các chuyến hàng gỗ rừng trồng xuất bán ra khỏi huyện",
      "Chỉ kiểm tra khi chủ lâm sản không nộp đủ tiền lệ phí xác nhận hồ sơ",
      "Chỉ kiểm tra khi phương tiện chở hàng bị hỏng dọc đường cần cứu hộ"
    ],
    "correct": "Có thông tin phản ánh hoặc dấu hiệu nghi vấn lâm sản không đúng nguồn gốc, chủng loại, số lượng; hoặc lâm sản thuộc loài nguy cấp quý hiếm cần xác minh",
    "explanation": "Khoản 3 Điều 6 Thông tư 26/2022/TT-BNNPTNT quy định việc kiểm tra thực tế chỉ thực hiện khi có nghi vấn vi phạm, thông tin phản ánh hoặc loài nguy cấp, quý, hiếm cần xác minh."
  },
  {
    "question": "Sổ theo dõi nhập, xuất lâm sản (theo Mẫu số 29 Thông tư 26/2022/TT-BNNPTNT) tại các cơ sở chế biến, kinh doanh gỗ phải được cập nhật vào thời điểm nào?",
    "options": [
      "Ghi chép ngay khi nhập hoặc xuất lâm sản ra vào cơ sở, chậm nhất không quá 01 ngày làm việc kể từ thời điểm giao nhận hàng hóa",
      "Chỉ cần ghi dồn số liệu một lần vào ngày cuối cùng của mỗi tháng",
      "Ghi chép một lần vào cuối năm dương lịch khi có đoàn kiểm tra liên ngành đến làm việc",
      "Không bắt buộc phải ghi chép nếu cơ sở đã lưu trữ đầy đủ hóa đơn giá trị gia tăng"
    ],
    "correct": "Ghi chép ngay khi nhập hoặc xuất lâm sản ra vào cơ sở, chậm nhất không quá 01 ngày làm việc kể từ thời điểm giao nhận hàng hóa",
    "explanation": "Điều 8 Thông tư 26/2022/TT-BNNPTNT: Chủ cơ sở chế biến, mua bán lâm sản phải ghi chép cập nhật ngay Sổ theo dõi nhập xuất lâm sản chậm nhất sau 01 ngày làm việc."
  },
  {
    "question": "Hồ sơ nguồn gốc lâm sản hợp pháp đối với lô gỗ xẻ nhập khẩu từ quốc gia thuộc 'vùng địa lý tích cực' (không thuộc vùng rủi ro) gồm những tài liệu nào?",
    "options": [
      "Tờ khai hải quan đã thông quan, Bảng kê lâm sản nhập khẩu của chủ gỗ, Hóa đơn/chứng từ thương mại và Bảng kê lâm sản của đơn vị xuất khẩu nước ngoài",
      "Chỉ cần giấy cam kết của người lái xe chở gỗ từ cảng về xưởng mộc",
      "Chỉ cần một bức ảnh chụp công-ten-nơ gỗ tại cảng biển Hải Phòng",
      "Bắt buộc phải có Giấy phép CITES bất kể là loại gỗ keo, thông hay xoan đào"
    ],
    "correct": "Tờ khai hải quan đã thông quan, Bảng kê lâm sản nhập khẩu của chủ gỗ, Hóa đơn/chứng từ thương mại và Bảng kê lâm sản của đơn vị xuất khẩu nước ngoài",
    "explanation": "Điều 15 Nghị định 102/2020/NĐ-CP và Thông tư 26/2022/TT-BNNPTNT: Gỗ nhập khẩu từ vùng an toàn cần tờ khai hải quan thông quan, Bảng kê lâm sản và chứng từ thương mại hợp lệ."
  },
  {
    "question": "Theo Nghị định 102/2020/NĐ-CP (VNTLAS), trường hợp nhập khẩu loài gỗ thuộc Danh mục rủi ro hoặc từ quốc gia rủi ro, chủ gỗ bắt buộc phải bổ sung tài liệu nào?",
    "options": [
      "Tài liệu giải trình nguồn gốc gỗ hợp pháp theo Mẫu quy định (bản kê khai nguồn gốc gỗ DDS) kèm theo chứng cứ xác minh tính hợp pháp của gỗ khai thác tại nước xuất xứ",
      "Giấy xác nhận độc thân của chủ doanh nghiệp nhập khẩu gỗ",
      "Bản cam kết không bán gỗ cho các hộ gia đình đóng đồ dùng cá nhân",
      "Phiếu siêu âm kiểm tra độ ẩm bên trong giác lõi của từng lóng gỗ"
    ],
    "correct": "Tài liệu giải trình nguồn gốc gỗ hợp pháp theo Mẫu quy định (bản kê khai nguồn gốc gỗ DDS) kèm theo chứng cứ xác minh tính hợp pháp của gỗ khai thác tại nước xuất xứ",
    "explanation": "Khoản 2 Điều 7 Nghị định 102/2020/NĐ-CP quy định nhập khẩu gỗ từ vùng rủi ro bắt buộc phải có tài liệu kê khai nguồn gốc gỗ hợp pháp (DDS) và tài liệu chứng minh tính hợp pháp."
  },
  {
    "question": "Hành vi vận chuyển gỗ rừng trồng hợp pháp nhưng không mang theo Bảng kê lâm sản hoặc hồ sơ nguồn gốc trong quá trình lưu thông bị xử phạt về hành vi nào?",
    "options": [
      "Hành vi vi phạm quy định về quản lý hồ sơ lâm sản trong vận chuyển lâm sản (Điều 27 Nghị định 146/2026/NĐ-CP)",
      "Tự động bị coi là hành vi buôn lậu gỗ tự nhiên và bị tịch thu toàn bộ xe ô tô",
      "Hành vi vi phạm quy tắc an toàn giao thông đường bộ do Bộ GTVT xử phạt",
      "Không bị xử phạt nếu tài xế xuất trình được căn cước công dân gắn chíp"
    ],
    "correct": "Hành vi vi phạm quy định về quản lý hồ sơ lâm sản trong vận chuyển lâm sản (Điều 27 Nghị định 146/2026/NĐ-CP)",
    "explanation": "Trường hợp lâm sản có nguồn gốc hợp pháp nhưng không mang theo hoặc xuất trình chậm hồ sơ theo quy định thì bị xử phạt theo Điều 27 NĐ 146/2026/NĐ-CP về hồ sơ lâm sản."
  },
  {
    "question": "Hành vi tàng trữ gỗ quý hiếm Nhóm IA không có hồ sơ nguồn gốc hợp pháp tại kho xưởng cưa xẻ với khối lượng tối thiểu bao nhiêu thì bị khởi tố hình sự theo Điều 232 BLHS?",
    "options": [
      "Từ 1,5 m³ gỗ tròn (hoặc từ 1,0 m³ gỗ xẻ) trở lên là bị phạt tù từ 1 năm đến 5 năm",
      "Từ 10 m³ gỗ tròn trở lên mới cấu thành tội phạm hình sự",
      "Từ 50 m³ gỗ tròn trở lên mới bị xử lý hình sự",
      "Không bao giờ bị đi tù nếu tàng trữ gỗ trong khuôn viên đất ở của gia đình"
    ],
    "correct": "Từ 1,5 m³ gỗ tròn (hoặc từ 1,0 m³ gỗ xẻ) trở lên là bị phạt tù từ 1 năm đến 5 năm",
    "explanation": "Điểm b Khoản 1 Điều 232 Bộ luật Hình sự: Tàng trữ, mua bán trái phép gỗ thuộc Danh mục loài nguy cấp quý hiếm Nhóm IA từ 1,5 m³ gỗ tròn trở lên bị truy cứu trách nhiệm hình sự."
  },
  {
    "question": "Đối với gỗ thông thường (không thuộc loài nguy cấp, quý, hiếm), hành vi vận chuyển trái pháp luật đạt khối lượng tối thiểu bao nhiêu thì bị xử lý hình sự?",
    "options": [
      "Từ 10 m³ gỗ tròn (hoặc từ 7 m³ gỗ xẻ) trở lên đối với gỗ có nguồn gốc từ rừng sản xuất",
      "Từ 2 m³ gỗ tròn trở lên trong mọi trường hợp",
      "Phải từ 100 m³ gỗ tròn trở lên mới cấu thành tội phạm",
      "Gỗ thông thường chỉ bị xử phạt tiền tối đa 50 triệu đồng, không bị hình sự"
    ],
    "correct": "Từ 10 m³ gỗ tròn (hoặc từ 7 m³ gỗ xẻ) trở lên đối với gỗ có nguồn gốc từ rừng sản xuất",
    "explanation": "Điểm d Khoản 1 Điều 232 Bộ luật Hình sự: Tàng trữ, vận chuyển trái phép gỗ thông thường từ 10 m³ gỗ tròn trở lên (hoặc từ 5 m³ nếu nguồn gốc từ rừng phòng hộ) bị xử lý hình sự."
  },
  {
    "question": "Chủ cơ sở chế biến gỗ mua gom gỗ trôi nổi của các đối tượng đào trộm trên rừng tự nhiên về cưa xẻ, sau đó dùng hóa đơn khống để hợp thức hóa bị coi là hành vi gì?",
    "options": [
      "Hành vi tàng trữ, chế biến lâm sản trái pháp luật và gian lận hồ sơ lâm sản; có thể bị truy cứu hình sự về tội vi phạm quy định lâm sản và tội trốn thuế",
      "Nghiệp vụ quay vòng hóa đơn thương mại được cơ quan thuế chấp thuận",
      "Biện pháp linh hoạt hỗ trợ người nghèo vùng sâu vùng xa tiêu thụ gỗ",
      "Hoạt động sản xuất kinh doanh thông thường không vi phạm pháp luật"
    ],
    "correct": "Hành vi tàng trữ, chế biến lâm sản trái pháp luật và gian lận hồ sơ lâm sản; có thể bị truy cứu hình sự về tội vi phạm quy định lâm sản và tội trốn thuế",
    "explanation": "Mua gỗ lậu rồi dùng hóa đơn bất hợp pháp để hợp thức hóa là hành vi gian lận lâm sản nghiêm trọng, bị truy cứu trách nhiệm hình sự theo Điều 232 và Điều 200/203 BLHS."
  },
  {
    "question": "Phương pháp tính khối lượng gỗ tròn có đường kính đầu nhỏ từ 06 cm đến dưới 20 cm và chiều dài từ 01 mét trở lên (gỗ tròn nhỏ) theo Thông tư 26 là gì?",
    "options": [
      "Đo đường kính đầu nhỏ và chiều dài để tra Bảng khối lượng gỗ tròn hoặc tính theo công thức thể tích hình nón cụt/hình trụ quy định tại Phụ lục I",
      "Chỉ cân trọng lượng tấn rồi quy đổi tương đương 1 tấn bằng 1 mét khối gỗ",
      "Đo chu vi của cả bó củi rồi chia đều cho số lượng cây trong bó",
      "Ước lượng bằng mắt thường của cán bộ kiểm lâm địa bàn"
    ],
    "correct": "Đo đường kính đầu nhỏ và chiều dài để tra Bảng khối lượng gỗ tròn hoặc tính theo công thức thể tích hình nón cụt/hình trụ quy định tại Phụ lục I",
    "explanation": "Phụ lục I Thông tư 26/2022/TT-BNNPTNT hướng dẫn chi tiết phương pháp đo đường kính đầu nhỏ d (cm), chiều dài L (m) để tính thể tích hoặc tra bảng khối lượng gỗ tròn nhỏ."
  },
  {
    "question": "Khi kiểm tra lâm sản tại xưởng mộc, sự sai lệch (dung sai) giữa khối lượng gỗ xẻ thực tế so với khối lượng ghi trên hồ sơ Bảng kê lâm sản trong giới hạn nào thì KHÔNG bị coi là vi phạm?",
    "options": [
      "Sai lệch không vượt quá 5% về tổng thể tích hoặc sai số kỹ thuật đo đếm trong giới hạn cho phép theo quy chuẩn",
      "Được phép sai lệch lên tới 50% tổng thể tích lô gỗ",
      "Tuyệt đối không được sai lệch dù chỉ 0,0001 mét khối gỗ",
      "Được phép thừa thiếu bao nhiêu cũng được nếu cùng chủng loại gỗ"
    ],
    "correct": "Sai lệch không vượt quá 5% về tổng thể tích hoặc sai số kỹ thuật đo đếm trong giới hạn cho phép theo quy chuẩn",
    "explanation": "Thông tư số 26/2022/TT-BNNPTNT quy định dung sai cho phép do co ngót gỗ, kỹ thuật đo đếm không vượt quá 5% thì không coi là hành vi gian lận khối lượng lâm sản."
  },
  {
    "question": "Toàn bộ hồ sơ nguồn gốc lâm sản và Sổ theo dõi nhập xuất lâm sản tại xưởng chế biến gỗ bắt buộc phải lưu trữ trong thời hạn tối thiểu bao lâu?",
    "options": [
      "Tối thiểu 05 năm kể từ ngày xuất bán hết toàn bộ lô lâm sản",
      "Tối thiểu 06 tháng kể từ ngày hoàn thành hợp đồng mua bán",
      "Chỉ cần lưu đến khi kết thúc năm tài chính hiện hành",
      "Không cần lưu nếu cơ sở đã chuyển đổi sang mô hình công ty cổ phần"
    ],
    "correct": "Tối thiểu 05 năm kể từ ngày xuất bán hết toàn bộ lô lâm sản",
    "explanation": "Khoản 4 Điều 4 Thông tư 26/2022/TT-BNNPTNT: Chủ lâm sản có trách nhiệm quản lý, lưu trữ hồ sơ lâm sản tối thiểu 05 năm kể từ ngày lập hồ sơ phục vụ công tác thanh tra, kiểm tra."
  },
  {
    "question": "Hành vi sử dụng búa bài cây hoặc dấu búa Kiểm lâm giả để đóng lên cây gỗ nhằm hợp thức hóa nguồn gốc lâm sản bị xử lý thế nào?",
    "options": [
      "Bị xử lý hình sự về Tội làm giả con dấu, tài liệu của cơ quan, tổ chức (Điều 341 BLHS) và tịch thu toàn bộ phương tiện, gỗ vi phạm",
      "Chỉ bị phạt vi phạm hành chính mức 5.000.000 đồng về hành vi khắc dấu sai quy định",
      "Được coi là sự sáng tạo trong công tác quản lý của chủ doanh nghiệp",
      "Chỉ bị tịch thu cây búa giả mà không bị phạt tiền"
    ],
    "correct": "Bị xử lý hình sự về Tội làm giả con dấu, tài liệu của cơ quan, tổ chức (Điều 341 BLHS) và tịch thu toàn bộ phương tiện, gỗ vi phạm",
    "explanation": "Làm giả và sử dụng dấu búa Kiểm lâm giả là hành vi phạm tội hình sự nghiêm trọng theo Điều 341 BLHS (phạt tù đến 7 năm) và Điều 232 BLHS."
  },
  {
    "question": "Trường hợp gỗ thành phẩm được chế biến từ gỗ có nguồn gốc hợp pháp, khi vận chuyển xuất bán cho người tiêu dùng nội tỉnh cần hồ sơ gì?",
    "options": [
      "Hóa đơn theo quy định của Bộ Tài chính kèm Bảng kê lâm sản do chủ lâm sản tự lập (không cần Kiểm lâm xác nhận)",
      "Bắt buộc phải có Giấy xác nhận của Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh",
      "Phải có Giấy kiểm dịch thực vật của Cục Bảo vệ thực vật",
      "Chỉ cần người mua tự ký vào một tờ giấy trắng cam kết tự chịu trách nhiệm"
    ],
    "correct": "Hóa đơn theo quy định của Bộ Tài chính kèm Bảng kê lâm sản do chủ lâm sản tự lập (không cần Kiểm lâm xác nhận)",
    "explanation": "Điều 18 Thông tư 26/2022/TT-BNNPTNT: Sản phẩm gỗ hoàn chỉnh lưu thông nội địa chỉ cần hóa đơn hợp pháp kèm Bảng kê lâm sản do chủ hàng tự lập."
  },
  {
    "question": "Cơ sở cưa xẻ gỗ hoạt động không có biển hiệu, không có đăng ký kinh doanh và sử dụng thiết bị cưa xẻ không có nguồn gốc hợp pháp bị xử phạt ra sao?",
    "options": [
      "Bị đình chỉ hoạt động xưởng cưa, tịch thu máy móc cưa xẻ vi phạm và xử phạt vi phạm hành chính về đăng ký kinh doanh và chế biến lâm sản trái phép",
      "Chỉ bị phạt nhắc nhở và được tiếp tục hoạt động nếu xưởng nằm trong ngõ hẻm",
      "Được cấp phép tự động sau khi nộp tiền phạt 500.000 đồng",
      "Không bị kiểm tra vì nằm trên đất thổ cư thuộc quyền sử dụng hợp pháp của chủ nhà"
    ],
    "correct": "Bị đình chỉ hoạt động xưởng cưa, tịch thu máy móc cưa xẻ vi phạm và xử phạt vi phạm hành chính về đăng ký kinh doanh và chế biến lâm sản trái phép",
    "explanation": "Chế biến gỗ không đăng ký kinh doanh, xưởng cưa trái phép bị xử phạt theo Nghị định quản lý kinh doanh và tịch thu máy móc/lâm sản lậu theo NĐ 146/2026/NĐ-CP."
  },
  {
    "question": "Đối với gỗ tròn nhập khẩu còn nguyên vỏ từ nước ngoài về Việt Nam, biện pháp kiểm dịch bắt buộc trước khi đưa vào chế biến là gì?",
    "options": [
      "Kiểm dịch thực vật tại cửa khẩu nhập và xử lý hun trùng khử trùng nấm, bọ vòi voi, côn trùng gây hại theo quy định kiểm dịch thực vật",
      "Rửa sạch bằng nước xà phòng công nghiệp tại kho của nhà máy",
      "Phơi nắng liên tục 15 ngày trên bãi cỏ không cần hun trùng",
      "Chỉ kiểm dịch nếu nhập khẩu gỗ từ các quốc gia ở Châu Phi"
    ],
    "correct": "Kiểm dịch thực vật tại cửa khẩu nhập và xử lý hun trùng khử trùng nấm, bọ vòi voi, côn trùng gây hại theo quy định kiểm dịch thực vật",
    "explanation": "Luật Bảo vệ và kiểm dịch thực vật quy định gỗ tròn nhập khẩu chưa bóc vỏ bắt buộc phải kiểm dịch và xử lý hun trùng nghiêm ngặt ngăn ngừa sinh vật ngoại lai xâm hại."
  },
  {
    "question": "Cơ sở chế biến gỗ mua gỗ rừng trồng của người dân nhưng không lập Bảng kê lâm sản mà tự xuất bán cho nhà máy dăm gỗ bị xử phạt như thế nào?",
    "options": [
      "Bị xử phạt vi phạm hành chính về hành vi không lập hồ sơ lâm sản hợp pháp theo Điều 27 Nghị định số 146/2026/NĐ-CP",
      "Được miễn xử phạt nếu gỗ keo trồng đã đủ 5 năm tuổi",
      "Chỉ bị phạt tiền nếu nhà máy dăm gỗ khiếu nại lên cơ quan công an",
      "Bị coi là tội phạm phá rừng tự nhiên và bị khởi tố hình sự"
    ],
    "correct": "Bị xử phạt vi phạm hành chính về hành vi không lập hồ sơ lâm sản hợp pháp theo Điều 27 Nghị định số 146/2026/NĐ-CP",
    "explanation": "Không lập Bảng kê lâm sản khi mua bán, giao nhận lâm sản cấu thành hành vi vi phạm quy định về quản lý hồ sơ lâm sản theo Điều 27 NĐ 146/2026/NĐ-CP."
  },
  {
    "question": "Hành vi cố ý khai sai tên loài cây gỗ trong Bảng kê lâm sản (ví dụ ghi gỗ keo nhưng thực tế là gỗ nghiến rừng tự nhiên) bị pháp luật xử lý thế nào?",
    "options": [
      "Bị xử lý nghiêm về hành vi gian lận hồ sơ lâm sản, buôn bán tàng trữ lâm sản trái pháp luật và bị tịch thu toàn bộ số gỗ nghiến vi phạm",
      "Được coi là sự nhầm lẫn kỹ thuật và chỉ cần lấy bút gạch đi viết lại tên loài gỗ",
      "Chỉ bị phạt cảnh cáo nếu chủ xe đồng ý nộp tiền bốc vác cho tổ kiểm tra",
      "Được tiếp tục vận chuyển nếu tài xế chở kèm theo một cành lá cây keo làm mẫu"
    ],
    "correct": "Bị xử lý nghiêm về hành vi gian lận hồ sơ lâm sản, buôn bán tàng trữ lâm sản trái pháp luật và bị tịch thu toàn bộ số gỗ nghiến vi phạm",
    "explanation": "Kê khai gian dối tên loài gỗ để hợp thức hóa gỗ quý hiếm bị xử lý về hành vi tàng trữ/vận chuyển lâm sản trái phép theo NĐ 146 hoặc khởi tố theo Điều 232 BLHS."
  },
  {
    "question": "Khi gỗ tròn tự nhiên khai thác tận thu từ công trình giải phóng mặt bằng được bán đấu giá tài sản công, hồ sơ lưu thông gồm những gì?",
    "options": [
      "Hóa đơn bán tài sản công (hoặc hóa đơn GTGT), Quyết định phê duyệt kết quả trúng đấu giá và Bảng kê lâm sản có xác nhận của Kiểm lâm sở tại",
      "Chỉ cần biên lai thu tiền của người trúng đấu giá",
      "Chỉ cần hợp đồng đặt cọc giữa bên mua và bên bán đấu giá",
      "Bản photocopy thông báo mời thầu đăng trên báo điện tử"
    ],
    "correct": "Hóa đơn bán tài sản công (hoặc hóa đơn GTGT), Quyết định phê duyệt kết quả trúng đấu giá và Bảng kê lâm sản có xác nhận của Kiểm lâm sở tại",
    "explanation": "Điều 16 Thông tư 26/2022/TT-BNNPTNT: Gỗ thanh lý, đấu giá tài sản nhà nước phải có hóa đơn bán tài sản công, quyết định phê duyệt kết quả đấu giá và Bảng kê lâm sản xác nhận."
  },
  {
    "question": "Hành vi đổ mạt cưa, mùn cưa và phế phẩm vỏ cây xuống dòng sông, suối gây tắc nghẽn dòng chảy và ô nhiễm nguồn nước bị xử lý ra sao?",
    "options": [
      "Bị xử phạt nặng về hành vi vi phạm pháp luật bảo vệ môi trường, buộc vớt toàn bộ mùn cưa khôi phục hiện trạng dòng chảy và bồi thường thiệt hại",
      "Được coi là hoạt động xả thải tự nhiên làm giàu chất hữu cơ cho tôm cá",
      "Chỉ bị xử phạt nếu lượng mùn cưa trôi vào ao nuôi cá của hộ liền kề",
      "Không bị kiểm tra xử lý vì mùn cưa là chất dễ phân hủy tự nhiên"
    ],
    "correct": "Bị xử phạt nặng về hành vi vi phạm pháp luật bảo vệ môi trường, buộc vớt toàn bộ mùn cưa khôi phục hiện trạng dòng chảy và bồi thường thiệt hại",
    "explanation": "Xả chất thải rắn công nghiệp (mùn cưa, vỏ cây) vào nguồn nước vi phạm nghiêm trọng Luật Bảo vệ môi trường, bị phạt tiền và buộc khắc phục hậu quả nạo vét dòng chảy."
  },
  {
    "question": "Chủ phương tiện khi vận chuyển gỗ tròn, gỗ xẻ trên đường BẮT BUỘC phải mang theo giấy tờ gì?",
    "options": [
      "Bản chính hoặc bản điện tử Bảng kê lâm sản hợp pháp kèm hóa đơn/hồ sơ nguồn gốc lâm sản",
      "Chỉ cần mang theo sổ đăng kiểm xe ô tô",
      "Chỉ cần giấy cam đoan miệng với chủ hàng",
      "Không cần mang theo bất kỳ giấy tờ lâm sản nào"
    ],
    "correct": "Bản chính hoặc bản điện tử Bảng kê lâm sản hợp pháp kèm hóa đơn/hồ sơ nguồn gốc lâm sản",
    "explanation": "Điều 17 Thông tư 26 quy định khi vận chuyển lâm sản trên đường, lái xe bắt buộc phải mang theo hồ sơ lâm sản hợp pháp gồm Bảng kê lâm sản (có xác nhận hoặc tự lập) và hóa đơn theo quy định."
  },
  {
    "question": "Xưởng cưa xẻ, chế biến gỗ muốn hoạt động hợp pháp phải đáp ứng điều kiện thủ tục gì đầu tiên?",
    "options": [
      "Đăng ký kinh doanh ngành nghề chế biến gỗ, có hồ sơ môi trường và phương án PCCC được phê duyệt",
      "Chỉ cần mua máy cưa về đặt ngoài vườn là được cưa",
      "Chỉ cần xin phép Trưởng thôn bằng miệng",
      "Không cần đăng ký kinh doanh nếu quy mô nhỏ"
    ],
    "correct": "Đăng ký kinh doanh ngành nghề chế biến gỗ, có hồ sơ môi trường và phương án PCCC được phê duyệt",
    "explanation": "Cơ sở chế biến gỗ phải có Giấy chứng nhận đăng ký kinh doanh/hộ kinh doanh, chấp hành đầy đủ quy định pháp luật về bảo vệ môi trường, an toàn lao động và phòng cháy chữa cháy."
  },
  {
    "question": "Cơ quan nào có thẩm quyền tiếp nhận hồ sơ và quyết định phân loại Doanh nghiệp chế biến gỗ (Nhóm I, Nhóm II)?",
    "options": [
      "Cơ quan Kiểm lâm cấp tỉnh (Chi cục Kiểm lâm)",
      "Ủy ban nhân dân cấp xã",
      "Hiệp hội Gỗ và Lâm sản Việt Nam",
      "Cục Cảnh sát giao thông"
    ],
    "correct": "Cơ quan Kiểm lâm cấp tỉnh (Chi cục Kiểm lâm)",
    "explanation": "Điều 13 Nghị định 102/2020/NĐ-CP quy định cơ quan Kiểm lâm cấp tỉnh là cơ quan tiếp nhận hồ sơ, đánh giá, kiểm tra thực tế và ban hành quyết định phân loại doanh nghiệp chế biến gỗ."
  },
  {
    "question": "Khi lâm sản vận chuyển mà không thay đổi chủ sở hữu và không đổi khối lượng thì có được dùng chung 1 Bảng kê không?",
    "options": [
      "Được sử dụng cùng một Bảng kê lâm sản đi suốt tuyến đường vận chuyển",
      "Mỗi xã đi qua phải lập một Bảng kê mới",
      "Cứ mỗi 10 km phải lập lại Bảng kê mới",
      "Không được phép dùng chung"
    ],
    "correct": "Được sử dụng cùng một Bảng kê lâm sản đi suốt tuyến đường vận chuyển",
    "explanation": "Khoản 2 Điều 5 Thông tư 26 quy định trường hợp lâm sản được vận chuyển mà không có thay đổi về chủ sở hữu và khối lượng trong Bảng kê thì được sử dụng cùng một Bảng kê lâm sản."
  },
  {
    "question": "Chủ lâm sản chịu trách nhiệm như thế nào về những nội dung kê khai trong Bảng kê lâm sản?",
    "options": [
      "Không phải chịu trách nhiệm vì do lái xe khai hộ",
      "Chịu trách nhiệm hoàn toàn trước pháp luật về tính chính xác và tính hợp pháp của nội dung kê khai",
      "Nếu khai sai thì Kiểm lâm phải chịu trách nhiệm thay",
      "Chỉ chịu trách nhiệm 50%"
    ],
    "correct": "Chịu trách nhiệm hoàn toàn trước pháp luật về tính chính xác và tính hợp pháp của nội dung kê khai",
    "explanation": "Khoản 2 Điều 5 Thông tư 26 quy định rõ: Chủ lâm sản chịu trách nhiệm trước pháp luật về tính hợp pháp và tính chính xác của những nội dung kê khai tại Bảng kê lâm sản."
  },
  {
    "question": "Cơ sở cưa xẻ gỗ có trách nhiệm báo cáo tình hình nhập, xuất lâm sản định kỳ cho ai?",
    "options": [
      "Báo cáo định kỳ bằng văn bản cho cơ quan Kiểm lâm sở tại (Hạt Kiểm lâm)",
      "Báo cáo cho Đài truyền hình địa phương",
      "Chỉ báo cáo khi có Kiểm lâm đến kiểm tra",
      "Không phải báo cáo định kỳ"
    ],
    "correct": "Báo cáo định kỳ bằng văn bản cho cơ quan Kiểm lâm sở tại (Hạt Kiểm lâm)",
    "explanation": "Thông tư 26 quy định định kỳ hàng quý hoặc 06 tháng, cơ sở chế biến, kinh doanh lâm sản phải tổng hợp, gửi Báo cáo nhập, xuất lâm sản về Hạt Kiểm lâm sở tại để theo dõi quản lý."
  },
  {
    "question": "Đối với lô gỗ nhập khẩu mua lại từ doanh nghiệp khác, cơ sở chế biến cần lưu giữ chứng từ gì?",
    "options": [
      "Hóa đơn GTGT, Bảng kê lâm sản của người bán và bản sao tờ khai hải quan nhập khẩu",
      "Chỉ cần tờ giấy ghi nợ tiền gỗ",
      "Chỉ cần tin nhắn thỏa thuận giá trên Zalo",
      "Không cần chứng từ gì nếu đã trả đủ tiền"
    ],
    "correct": "Hóa đơn GTGT, Bảng kê lâm sản của người bán và bản sao tờ khai hải quan nhập khẩu",
    "explanation": "Khi mua lại gỗ nhập khẩu, cơ sở chế biến phải lưu giữ Bảng kê lâm sản, hóa đơn tài chính hợp pháp và bản sao tờ khai hải quan nhập khẩu để chứng minh nguồn gốc gỗ hợp pháp."
  },
  {
    "question": "Trường hợp nào cơ sở chế biến gỗ bị đưa vào danh sách Doanh nghiệp Nhóm II (nhóm rủi ro)?",
    "options": [
      "Doanh nghiệp không đáp ứng tiêu chuẩn tuân thủ pháp luật hoặc có hành vi gian lận hồ sơ lâm sản",
      "Doanh nghiệp nộp thuế quá sớm",
      "Doanh nghiệp có nhiều công nhân giỏi",
      "Doanh nghiệp mở thêm chi nhánh mới"
    ],
    "correct": "Doanh nghiệp không đáp ứng tiêu chuẩn tuân thủ pháp luật hoặc có hành vi gian lận hồ sơ lâm sản",
    "explanation": "Nghị định 102/2020/NĐ-CP quy định doanh nghiệp không đáp ứng các tiêu chí phân loại Doanh nghiệp Nhóm I (vi phạm về nguồn gốc gỗ, môi trường, trốn thuế...) sẽ bị xếp vào Nhóm II."
  },
  {
    "question": "Khi bán lẻ gỗ cho người dân làm nhà ở, cơ sở kinh doanh gỗ phải lập giấy tờ gì giao cho người mua?",
    "options": [
      "Lập Bảng kê lâm sản và xuất hóa đơn theo quy định của pháp luật thuế",
      "Chỉ cần viết giấy tay biên nhận tiền",
      "Không cần giao bất kỳ giấy tờ gì",
      "Yêu cầu người mua tự lên xã xin giấy phép"
    ],
    "correct": "Lập Bảng kê lâm sản và xuất hóa đơn theo quy định của pháp luật thuế",
    "explanation": "Khi xuất bán gỗ cho cá nhân làm nhà ở, cơ sở kinh doanh phải lập Bảng kê lâm sản kèm hóa đơn chứng từ hợp pháp để người mua có căn cứ lưu thông và sử dụng gỗ hợp pháp."
  },
  {
    "question": "Hồ sơ lâm sản điện tử có giá trị pháp lý tương đương hồ sơ giấy không?",
    "options": [
      "Không có giá trị gì",
      "Có giá trị pháp lý tương đương hồ sơ bản giấy nếu được lập, xác thực chữ ký số theo đúng quy định",
      "Chỉ có giá trị nếu in ra giấy rồi đóng dấu đỏ đè lên",
      "Chỉ có giá trị khi gửi qua bưu điện"
    ],
    "correct": "Có giá trị pháp lý tương đương hồ sơ bản giấy nếu được lập, xác thực chữ ký số theo đúng quy định",
    "explanation": "Luật Giao dịch điện tử và Thông tư 26 quy định hồ sơ lâm sản điện tử có chữ ký số hợp lệ có giá trị pháp lý tương đương với hồ sơ bản giấy truyền thống."
  },
  {
    "question": "Thủ tục đề nghị cấp giấy phép CITES xuất khẩu gỗ quý hiếm được nộp tại cơ quan nào?",
    "options": [
      "Cơ quan quản lý CITES Việt Nam (thuộc Cục Lâm nghiệp và Kiểm lâm)",
      "Ủy ban nhân dân cấp xã nơi đặt xưởng gỗ",
      "Hạt Kiểm lâm huyện",
      "Chi cục Hải quan cửa khẩu"
    ],
    "correct": "Cơ quan quản lý CITES Việt Nam (thuộc Cục Lâm nghiệp và Kiểm lâm)",
    "explanation": "Thông tư 85/2025/TT-BNNMT quy định Cơ quan quản lý CITES Việt Nam là cơ quan duy nhất có thẩm quyền cấp Giấy phép, Chứng chỉ CITES xuất khẩu, nhập khẩu mẫu vật gỗ thuộc Phụ lục CITES."
  },
  {
    "question": "Chủ cơ sở chế biến gỗ có nghĩa vụ gì khi cơ quan Kiểm lâm đến kiểm tra định kỳ hoặc đột xuất?",
    "options": [
      "Đóng cửa xưởng bỏ trốn hoặc thả chó đuổi cán bộ",
      "Xuất trình đầy đủ hồ sơ nguồn gốc lâm sản, sổ theo dõi và tạo điều kiện cho đoàn kiểm tra",
      "Chỉ tiếp đoàn kiểm tra nếu có báo trước 1 tháng",
      "Yêu cầu đoàn kiểm tra phải nộp phí kiểm tra"
    ],
    "correct": "Xuất trình đầy đủ hồ sơ nguồn gốc lâm sản, sổ theo dõi và tạo điều kiện cho đoàn kiểm tra",
    "explanation": "Luật Lâm nghiệp quy định cơ sở chế biến, kinh doanh lâm sản có nghĩa vụ chấp hành sự kiểm tra, thanh tra của cơ quan Kiểm lâm; xuất trình đầy đủ hồ sơ, sổ sách chứng minh nguồn gốc lâm sản."
  },
  {
    "question": "Biện pháp phòng cháy chữa cháy bắt buộc tại các xưởng cưa xẻ, chế biến gỗ là gì?",
    "options": [
      "Trang bị bình chữa cháy, bể nước cát, tiêu lệnh PCCC và dọn dẹp mùn cưa, dăm gỗ thường xuyên",
      "Chỉ cần dán khẩu hiệu trên tường",
      "Để công nhân hút thuốc tự do trong xưởng",
      "Tích trữ nhiều can xăng cạnh đống mùn cưa"
    ],
    "correct": "Trang bị bình chữa cháy, bể nước cát, tiêu lệnh PCCC và dọn dẹp mùn cưa, dăm gỗ thường xuyên",
    "explanation": "Xưởng chế biến gỗ là nơi tập trung khối lượng lớn vật liệu dễ cháy (gỗ khô, mùn cưa); bắt buộc phải có phương án PCCC, trang bị bình cứu hỏa đầy đủ và nghiêm cấm nguồn nhiệt, nguồn lửa."
  },
  {
    "question": "Mùn cưa, vỏ cây, phế liệu gỗ tại cơ sở chế biến phải được xử lý như thế nào để bảo vệ môi trường?",
    "options": [
      "Đem đổ trộm xuống sông suối gần xưởng",
      "Thu gom xử lý làm viên nén, phân bón hoặc đốt tiêu hủy đúng nơi quy định an toàn",
      "Châm lửa đốt lộ thiên giữa trời khói bụi mù mịt",
      "Đổ bừa bãi lấn chiếm hành lang an toàn giao thông"
    ],
    "correct": "Thu gom xử lý làm viên nén, phân bón hoặc đốt tiêu hủy đúng nơi quy định an toàn",
    "explanation": "Quy định bảo vệ môi trường nghiêm cấm đổ mùn cưa, phế thải gỗ xuống nguồn nước hoặc đốt lộ thiên gây ô nhiễm; cơ sở phải thu gom tái chế (làm viên nén mùn cưa) hoặc xử lý theo quy định."
  },
  {
    "question": "Khi phát hiện gỗ mua vào có dấu hiệu là gỗ khai thác lậu từ rừng tự nhiên, chủ xưởng gỗ nên làm gì?",
    "options": [
      "Nhanh chóng cưa xẻ nhỏ để phi tang tang vật",
      "Từ chối thu mua và báo ngay cho cơ quan Kiểm lâm hoặc Công an sở tại để xử lý",
      "Ép giá người bán thật rẻ rồi giấu vào kho kín",
      "Đem đi bán lại cho xưởng gỗ khác"
    ],
    "correct": "Từ chối thu mua và báo ngay cho cơ quan Kiểm lâm hoặc Công an sở tại để xử lý",
    "explanation": "Hành vi cố tình thu mua gỗ lậu là vi phạm pháp luật nghiêm trọng; chủ cơ sở có trách nhiệm từ chối tiêu thụ và tố giác tội phạm lâm nghiệp để bảo vệ uy tín cơ sở của mình."
  },
  {
    "question": "Chủ phương tiện vận tải có trách nhiệm gì trước khi nhận chở một chuyến gỗ trên đường?",
    "options": [
      "Chỉ cần quan tâm người thuê trả bao nhiêu tiền cước",
      "Kiểm tra tính hợp lệ của Bảng kê lâm sản, hóa đơn kèm theo và đối chiếu với số lượng gỗ thực tế trên xe",
      "Cứ chở bừa, bị bắt thì đổ hết tội cho chủ hàng",
      "Chỉ chở vào ban đêm để tránh trạm kiểm soát"
    ],
    "correct": "Kiểm tra tính hợp lệ của Bảng kê lâm sản, hóa đơn kèm theo và đối chiếu với số lượng gỗ thực tế trên xe",
    "explanation": "Lái xe, chủ phương tiện phải có trách nhiệm kiểm tra hồ sơ lâm sản đi đường; nếu cố tình chở gỗ không có hồ sơ hợp pháp thì chính người vận chuyển sẽ bị xử phạt và bị tịch thu phương tiện."
  },
  {
    "question": "Xưởng mộc chế biến gỗ gây tiếng ồn và bụi bặm ảnh hưởng đến khu dân cư xung quanh thì phải làm gì?",
    "options": [
      "Thách thức bà con hàng xóm",
      "Lắp đặt hệ thống hút bụi, tường cách âm và che chắn kín xưởng gia công",
      "Tăng công suất cưa xẻ vào ban đêm",
      "Không cần làm gì vì sản xuất là quyền tự do"
    ],
    "correct": "Lắp đặt hệ thống hút bụi, tường cách âm và che chắn kín xưởng gia công",
    "explanation": "Pháp luật bảo vệ môi trường quy định cơ sở chế biến gỗ phải có biện pháp giảm thiểu tiếng ồn và bụi gỗ, lắp đặt chụp hút bụi túi vải để không gây ô nhiễm môi trường sống xung quanh."
  },
  {
    "question": "Việc cất giữ gỗ trong xưởng mộc gia đình có bắt buộc phải lưu hồ sơ nguồn gốc không?",
    "options": [
      "Không cần, gỗ trong nhà riêng là bất khả xâm phạm",
      "Bắt buộc phải có hồ sơ, hóa đơn chứng từ chứng minh nguồn gốc hợp pháp của số gỗ đang cất giữ",
      "Chỉ cần người bán gỗ viết cam đoan miệng",
      "Chỉ cần xưởng gỗ có treo biển hiệu"
    ],
    "correct": "Bắt buộc phải có hồ sơ, hóa đơn chứng từ chứng minh nguồn gốc hợp pháp của số gỗ đang cất giữ",
    "explanation": "Nghị định 146/2026/NĐ-CP quy định mọi hành vi tàng trữ lâm sản không có hồ sơ hợp pháp tại bất kỳ địa điểm nào (kể cả nhà riêng, kho xưởng) đều bị xử phạt và tịch thu tang vật."
  },
  {
    "question": "Khi cưa xẻ gia công gỗ thuê cho người dân làm nhà, chủ xưởng cưa cần kiểm tra giấy tờ gì?",
    "options": [
      "Không cần kiểm tra gì",
      "Bảng kê lâm sản hoặc giấy tờ xác nhận nguồn gốc gỗ hợp pháp của người thuê cưa",
      "Chỉ cần kiểm tra tiền công trả trước",
      "Kiểm tra sổ đỏ của người thuê cưa"
    ],
    "correct": "Bảng kê lâm sản hoặc giấy tờ xác nhận nguồn gốc gỗ hợp pháp của người thuê cưa",
    "explanation": "Chủ xưởng xẻ gia công có trách nhiệm kiểm tra nguồn gốc gỗ trước khi nhận xẻ; nếu cố tình xẻ gỗ bất hợp pháp cho lâm tặc thì chủ xưởng sẽ bị coi là đồng phạm và bị xử phạt theo luật."
  },
  {
    "question": "Doanh nghiệp chế biến gỗ có được tự ý xuất khẩu gỗ tròn chưa qua chế biến ra nước ngoài không?",
    "options": [
      "Được tự do xuất khẩu mọi loại gỗ",
      "Nghiêm cấm xuất khẩu gỗ tròn, gỗ xẻ từ rừng tự nhiên trong nước",
      "Chỉ được xuất khẩu qua đường mòn tiểu ngạch",
      "Chỉ cấm xuất khẩu gỗ keo"
    ],
    "correct": "Nghiêm cấm xuất khẩu gỗ tròn, gỗ xẻ từ rừng tự nhiên trong nước",
    "explanation": "Chính sách của Nhà nước nghiêm cấm xuất khẩu gỗ tròn, gỗ xẻ từ rừng tự nhiên trong nước nhằm bảo vệ tài nguyên rừng và khuyến khích chế biến sâu tạo giá trị gia tăng."
  },
  {
    "question": "Cơ sở mua bán lâm sản khi có thay đổi địa điểm xưởng gỗ hoặc người đại diện thì phải làm gì?",
    "options": [
      "Tự chuyển đi mà không cần báo ai",
      "Thực hiện thủ tục thay đổi đăng ký kinh doanh và thông báo bằng văn bản cho Hạt Kiểm lâm quản lý",
      "Chỉ cần thông báo cho bạn bè trên mạng",
      "Đợi khi nào Kiểm lâm tìm thấy thì mới nói"
    ],
    "correct": "Thực hiện thủ tục thay đổi đăng ký kinh doanh và thông báo bằng văn bản cho Hạt Kiểm lâm quản lý",
    "explanation": "Khi thay đổi địa điểm sản xuất, quy mô hoặc chủ cơ sở, doanh nghiệp phải điều chỉnh giấy phép kinh doanh và gửi thông báo đến Hạt Kiểm lâm địa bàn để cập nhật hồ sơ quản lý."
  },
  {
    "question": "Hành vi sử dụng lao động chưa đủ tuổi hoặc không trang bị đồ bảo hộ lao động tại xưởng cưa bị xử lý thế nào?",
    "options": [
      "Được khuyến khích để giảm chi phí",
      "Bị xử phạt nghiêm khắc theo pháp luật về an toàn lao động và bảo hiểm xã hội",
      "Chỉ bị phạt nhắc nhở nếu không xảy ra tai nạn",
      "Không thuộc phạm vi điều chỉnh của luật nào"
    ],
    "correct": "Bị xử phạt nghiêm khắc theo pháp luật về an toàn lao động và bảo hiểm xã hội",
    "explanation": "Xưởng cưa xẻ là môi trường lao động có nguy cơ tai nạn cao; chủ cơ sở bắt buộc phải trang bị bảo hộ lao động (kính, nút tai, găng tay) và không được sử dụng lao động chưa thành niên trái luật."
  },
  {
    "question": "Chủ xưởng gỗ có được tự ý đun nấu, thắp hương thờ cúng tùy tiện ngay sát bãi gỗ khô không?",
    "options": [
      "Được làm vì tự do tín ngưỡng",
      "Nghiêm cấm vì vi phạm khoảng cách an toàn PCCC, tiềm ẩn nguy cơ phát hỏa thiêu rụi xưởng gỗ",
      "Được làm nếu có xô nước để cạnh",
      "Chỉ cấm vào ban ngày"
    ],
    "correct": "Nghiêm cấm vì vi phạm khoảng cách an toàn PCCC, tiềm ẩn nguy cơ phát hỏa thiêu rụi xưởng gỗ",
    "explanation": "Nội quy an toàn PCCC xưởng gỗ nghiêm cấm tuyệt đối việc thắp hương, đun nấu hoặc mang ngọn lửa hở vào khu vực chứa gỗ khô, mùn cưa và hóa chất sơn vec-ni."
  },
  {
    "question": "Đối với gỗ có nguồn gốc hợp pháp, việc đánh số hiệu lóng gỗ mang lại lợi ích gì cho chủ xưởng?",
    "options": [
      "Để vẽ tranh lên gỗ",
      "Giúp quản lý chính xác từng lóng gỗ, tránh thất thoát và thuận tiện khi xuất trình kiểm tra",
      "Làm giảm giá bán của khúc gỗ",
      "Không có tác dụng gì"
    ],
    "correct": "Giúp quản lý chính xác từng lóng gỗ, tránh thất thoát và thuận tiện khi xuất trình kiểm tra",
    "explanation": "Đánh số hiệu đầu lóng bằng sơn khớp với Bảng kê lâm sản giúp chủ cơ sở quản lý kho bãi khoa học, dễ dàng đối soát số lượng và chứng minh nguồn gốc hợp pháp khi cơ quan chức năng kiểm tra."
  },
  {
    "question": "Chủ xưởng gỗ mua gỗ rừng trồng có hóa đơn chứng từ đầy đủ thì có quyền lợi gì?",
    "options": [
      "Được pháp luật bảo hộ quyền sở hữu, yên tâm sản xuất kinh doanh và dễ dàng vay vốn ngân hàng",
      "Bị Kiểm lâm kiểm tra nhiều hơn xưởng mua gỗ lậu",
      "Không được phép bán ra ngoài tỉnh",
      "Phải đóng phạt thuế tài nguyên"
    ],
    "correct": "Được pháp luật bảo hộ quyền sở hữu, yên tâm sản xuất kinh doanh và dễ dàng vay vốn ngân hàng",
    "explanation": "Kinh doanh lâm sản minh bạch, có đầy đủ hóa đơn, Bảng kê hợp pháp là lá chắn pháp lý an toàn nhất giúp cơ sở phát triển bền vững, nâng cao uy tín thương hiệu và tránh mọi rủi ro pháp lý."
  },
  {
    "question": "Hành vi nào sau đây bị coi là 'Vận chuyển lâm sản trái pháp luật'?",
    "options": [
      "Chở gỗ có Bảng kê lâm sản và hóa đơn hợp pháp đầy đủ",
      "Vận chuyển gỗ, lâm sản mà không có hồ sơ hợp pháp hoặc hồ sơ không phù hợp với lâm sản thực tế chở trên xe",
      "Chở sản phẩm bàn ghế gỗ hoàn chỉnh có hóa đơn bán lẻ",
      "Chở củi khô của gia đình đun nấu"
    ],
    "correct": "Vận chuyển gỗ, lâm sản mà không có hồ sơ hợp pháp hoặc hồ sơ không phù hợp với lâm sản thực tế chở trên xe",
    "explanation": "Khoản 1 Điều 25 Nghị định 146/2026/NĐ-CP quy định vận chuyển lâm sản trái pháp luật là hành vi chở lâm sản không có hồ sơ hợp pháp hoặc chở sai chủng loại, vượt quá khối lượng ghi trên hồ sơ."
  },
  {
    "question": "Hành vi 'Quay vòng hồ sơ' (dùng 1 bộ hồ sơ Bảng kê gỗ cũ để chở gỗ lậu nhiều chuyến) bị xử lý thế nào?",
    "options": [
      "Được coi là hành vi thông minh tiết kiệm giấy tờ",
      "Bị xử phạt nghiêm khắc về hành vi vận chuyển lâm sản trái pháp luật và hành vi gian lận hồ sơ lâm sản",
      "Chỉ bị phạt nộp lệ phí cấp lại hồ sơ mới",
      "Không vi phạm nếu hồ sơ chưa hết hạn 1 năm"
    ],
    "correct": "Bị xử phạt nghiêm khắc về hành vi vận chuyển lâm sản trái pháp luật và hành vi gian lận hồ sơ lâm sản",
    "explanation": "Quay vòng hồ sơ lâm sản là thủ đoạn gian lận tinh vi nhằm hợp thức hóa gỗ lậu; hành vi này bị xử phạt rất nặng về tội vận chuyển lâm sản trái phép, tịch thu toàn bộ số gỗ vi phạm."
  },
  {
    "question": "Hành vi cất giấu gỗ lậu dưới thùng xe tải rồi phủ rau củ quả hoặc cát đá lên trên nhằm che mắt Kiểm lâm bị coi là gì?",
    "options": [
      "Tình tiết tăng nặng: cất giấu tang vật tinh vi trong vụ vi phạm hành chính lâm nghiệp",
      "Cách bảo quản gỗ không bị nắng nóng",
      "Hành vi hoàn toàn bình thường không ai cấm",
      "Được giảm nhẹ mức phạt vì có chở kèm hàng nông sản"
    ],
    "correct": "Tình tiết tăng nặng: cất giấu tang vật tinh vi trong vụ vi phạm hành chính lâm nghiệp",
    "explanation": "Luật Xử lý VPHC và NĐ 146 quy định hành vi ngụy trang, cất giấu tang vật vi phạm tinh vi là tình tiết tăng nặng định khung xử phạt và là căn cứ bắt buộc để tịch thu phương tiện vận chuyển."
  },
  {
    "question": "Hành vi cưa xẻ gỗ tròn có nguồn gốc từ việc chặt trộm trong rừng đặc dụng tại xưởng gỗ bị xử lý thế nào?",
    "options": [
      "Chỉ phạt người đi chặt trộm, chủ xưởng xẻ không bị sao",
      "Xử phạt hành vi chế biến lâm sản trái pháp luật, tịch thu toàn bộ gỗ và có thể bị đình chỉ hoạt động xưởng",
      "Được miễn phạt nếu xẻ gỗ vào ban ngày",
      "Chỉ cần trả lại mùn cưa cho Kiểm lâm"
    ],
    "correct": "Xử phạt hành vi chế biến lâm sản trái pháp luật, tịch thu toàn bộ gỗ và có thể bị đình chỉ hoạt động xưởng",
    "explanation": "Điều 26 Nghị định 146/2026/NĐ-CP quy định hành vi chế biến lâm sản trái pháp luật bị phạt tiền rất nặng, tịch thu tang vật và bị áp dụng hình phạt bổ sung đình chỉ hoạt động cơ sở đến 12 tháng."
  },
  {
    "question": "Việc tẩy xóa, sửa chữa số liệu (thể tích, kích thước, tên loài) trên Bảng kê lâm sản bị xử lý thế nào?",
    "options": [
      "Bị xử phạt về hành vi làm sai lệch, gian lận hồ sơ lâm sản hợp pháp",
      "Được tự do sửa nếu dùng bút mực cùng màu",
      "Chỉ bị phạt nếu viết chữ xấu",
      "Không vi phạm nếu chủ hàng tự sửa"
    ],
    "correct": "Bị xử phạt về hành vi làm sai lệch, gian lận hồ sơ lâm sản hợp pháp",
    "explanation": "Điều 27 Nghị định 146/2026/NĐ-CP quy định hành vi tẩy xóa, sửa chữa, làm sai lệch hồ sơ nguồn gốc lâm sản là hành vi vi phạm pháp luật và bị xử phạt tiền từ hàng triệu đến hàng chục triệu đồng."
  },
  {
    "question": "Hành vi thu mua gỗ quý hiếm Nhóm IA (gỗ sưa, mun, trắc...) trôi nổi không rõ nguồn gốc bị xử lý thế nào?",
    "options": [
      "Không bị phạt nếu mua giá đắt",
      "Bị xử phạt nặng về hành vi tàng trữ lâm sản trái pháp luật và có thể bị khởi tố hình sự nếu khối lượng lớn",
      "Được nhà nước cấp giấy tờ sau khi mua",
      "Chỉ bị phạt nếu đem bán ra nước ngoài"
    ],
    "correct": "Bị xử phạt nặng về hành vi tàng trữ lâm sản trái pháp luật và có thể bị khởi tố hình sự nếu khối lượng lớn",
    "explanation": "Gỗ Nhóm IA là loài nghiêm cấm khai thác, sử dụng vì mục đích thương mại; mọi hành vi thu mua, tàng trữ trôi nổi đều bị tịch thu, phạt tiền nặng hoặc bị truy cứu trách nhiệm hình sự."
  },
  {
    "question": "Chủ cơ sở chế biến không mở Sổ theo dõi nhập, xuất lâm sản hoặc không ghi chép sổ thì bị xử phạt không?",
    "options": [
      "Không bị phạt vì sổ sách là việc nội bộ",
      "Bị xử phạt vi phạm hành chính về hành vi vi phạm quy định về quản lý hồ sơ lâm sản",
      "Chỉ bị phạt nếu cơ sở bị lỗ vốn",
      "Chỉ bị nhắc nhở bằng lời nói"
    ],
    "correct": "Bị xử phạt vi phạm hành chính về hành vi vi phạm quy định về quản lý hồ sơ lâm sản",
    "explanation": "Điều 27 Nghị định 146/2026/NĐ-CP quy định xử phạt vi phạm hành chính đối với cơ sở chế biến, kinh doanh lâm sản không lập sổ theo dõi hoặc không ghi chép đầy đủ theo quy định."
  },
  {
    "question": "Lái xe cố tình tăng ga bỏ chạy, không chấp hành hiệu lệnh dừng xe kiểm tra lâm sản của Kiểm lâm thì bị xử lý thế nào?",
    "options": [
      "Được coi là tài xế có tay lái giỏi",
      "Bị cưỡng chế ngăn chặn, xử phạt nặng về hành vi chống đối và tịch thu toàn bộ xe cùng lâm sản nếu vi phạm",
      "Không bị xử phạt vì đường giao thông là của chung",
      "Chỉ bị phạt bấm còi to"
    ],
    "correct": "Bị cưỡng chế ngăn chặn, xử phạt nặng về hành vi chống đối và tịch thu toàn bộ xe cùng lâm sản nếu vi phạm",
    "explanation": "Hành vi không chấp hành hiệu lệnh dừng phương tiện của Kiểm lâm bị xử phạt vi phạm hành chính theo NĐ 146; nếu gây nguy hiểm cho lực lượng làm nhiệm vụ sẽ bị khởi tố về tội Chống người thi hành công vụ."
  },
  {
    "question": "Hành vi sử dụng con dấu giả hoặc làm giả Bảng kê lâm sản có xác nhận của Kiểm lâm bị xử lý thế nào?",
    "options": [
      "Chỉ phạt hành chính 500.000 đồng",
      "Bị khởi tố hình sự về tội 'Làm giả con dấu, tài liệu của cơ quan, tổ chức' theo Bộ luật Hình sự",
      "Được tha nếu tự nguyện xé bỏ giấy giả",
      "Chỉ bị tịch thu tờ giấy giả"
    ],
    "correct": "Bị khởi tố hình sự về tội 'Làm giả con dấu, tài liệu của cơ quan, tổ chức' theo Bộ luật Hình sự",
    "explanation": "Hành vi làm giả con dấu của Kiểm lâm hoặc làm giả Bảng kê lâm sản là tội phạm hình sự rất nghiêm trọng theo Điều 341 Bộ luật Hình sự, đối tượng vi phạm bị phạt tù từ 02 đến 07 năm."
  },
  {
    "question": "Chủ xưởng gỗ cố tình cưa xẻ gỗ vào ban đêm để che giấu hành vi chế biến gỗ lậu thì bị đánh giá thế nào?",
    "options": [
      "Là hành vi chăm chỉ tăng ca lao động",
      "Là tình tiết vi phạm có tính chất lén lút, che giấu hành vi vi phạm, bị xử phạt ở khung kịch trần",
      "Được miễn các loại thuế đêm",
      "Không ai có quyền can thiệp ban đêm"
    ],
    "correct": "Là tình tiết vi phạm có tính chất lén lút, che giấu hành vi vi phạm, bị xử phạt ở khung kịch trần",
    "explanation": "Hành vi lén lút chế biến gỗ lậu vào ban đêm thể hiện ý thức cố tình vi phạm pháp luật; cơ quan chức năng sẽ áp dụng các tình tiết tăng nặng và áp dụng mức xử phạt tiền tối đa."
  },
  {
    "question": "Việc mua bán gỗ qua mạng Internet không có hóa đơn chứng từ, giao nhận hàng tại bìa rừng tiềm ẩn rủi ro gì?",
    "options": [
      "Mua được gỗ giá rất rẻ mà không lo lắng gì",
      "Rủi ro rất cao: dễ mua phải gỗ bất hợp pháp, bị lừa đảo và bị Kiểm lâm tịch thu toàn bộ tiền lẫn gỗ",
      "Được miễn trừ trách nhiệm pháp lý vì mua online",
      "Được ngân hàng hoàn tiền 100%"
    ],
    "correct": "Rủi ro rất cao: dễ mua phải gỗ bất hợp pháp, bị lừa đảo và bị Kiểm lâm tịch thu toàn bộ tiền lẫn gỗ",
    "explanation": "Giao dịch gỗ trôi nổi qua mạng không hóa đơn thường là gỗ khai thác trộm; khi vận chuyển sẽ bị lực lượng chức năng phát hiện, tạm giữ, tịch thu và xử phạt tiền nặng."
  },
  {
    "question": "Chủ cơ sở chế biến cho người khác gửi gỗ lậu trong xưởng của mình thì có bị liên đới trách nhiệm không?",
    "options": [
      "Không bị sao vì gỗ của người khác gửi",
      "Bị xử lý về hành vi tàng trữ lâm sản trái pháp luật với vai trò đồng phạm chứa chấp tang vật vi phạm",
      "Được nhận tiền công giữ gỗ hợp pháp",
      "Chỉ bị phạt nếu để gỗ bị mối mọt"
    ],
    "correct": "Bị xử lý về hành vi tàng trữ lâm sản trái pháp luật với vai trò đồng phạm chứa chấp tang vật vi phạm",
    "explanation": "Pháp luật quy định việc chứa chấp, cho gửi lâm sản bất hợp pháp trong kho xưởng của mình đều bị coi là hành vi tàng trữ lâm sản trái phép và bị xử phạt như chủ sở hữu tang vật."
  },
  {
    "question": "Mức phạt tiền thấp nhất đối với hành vi vận chuyển lâm sản trái pháp luật khởi điểm từ bao nhiêu?",
    "options": [
      "Từ 50.000 đồng",
      "Từ 500.000 đồng trở lên (tùy theo khối lượng lâm sản)",
      "Chỉ phạt nhắc nhở không phạt tiền",
      "Tối thiểu phải từ 50 triệu đồng"
    ],
    "correct": "Từ 500.000 đồng trở lên (tùy theo khối lượng lâm sản)",
    "explanation": "Điều 25 Nghị định 146/2026/NĐ-CP quy định mức phạt tiền thấp nhất đối với hành vi vận chuyển lâm sản trái phép khởi điểm từ 500.000 đồng và tăng lũy tiến theo khối lượng gỗ vi phạm."
  },
  {
    "question": "Mức phạt tiền tối đa đối với một cá nhân có hành vi tàng trữ, mua bán, chế biến lâm sản trái phép là bao nhiêu?",
    "options": [
      "100.000.000 đồng",
      "200.000.000 đồng",
      "300.000.000 đồng",
      "500.000.000 đồng (nửa tỷ đồng)"
    ],
    "correct": "500.000.000 đồng (nửa tỷ đồng)",
    "explanation": "Điều 26 Nghị định 146/2026/NĐ-CP quy định mức phạt tiền tối đa đối với cá nhân có hành vi tàng trữ, mua bán, chế biến lâm sản trái pháp luật lên đến 500.000.000 đồng (đối với tổ chức là 1 tỷ đồng)."
  },
  {
    "question": "Toàn bộ tang vật lâm sản không có hồ sơ hợp pháp bị bắt giữ sẽ bị xử lý như thế nào?",
    "options": [
      "Trả lại cho chủ cơ sở sau khi nộp phạt",
      "Bắt buộc tịch thu toàn bộ sung vào ngân sách nhà nước",
      "Cho phép chủ gỗ tự đem đi bán lấy tiền nộp phạt",
      "Chia cho công nhân xưởng gỗ"
    ],
    "correct": "Bắt buộc tịch thu toàn bộ sung vào ngân sách nhà nước",
    "explanation": "Nghị định 146/2026/NĐ-CP quy định hình thức xử phạt bổ sung bắt buộc đối với hành vi vận chuyển, mua bán, tàng trữ lâm sản trái pháp luật là tịch thu toàn bộ tang vật lâm sản vi phạm."
  },
  {
    "question": "Phương tiện giao thông (xe tải, xe bán tải, xe máy) dùng để vận chuyển gỗ lậu bị xử lý thế nào?",
    "options": [
      "Chỉ giữ giấy phép lái xe, trả xe ngay",
      "Bị tịch thu sung công quỹ Nhà nước nếu thuộc trường hợp chở gỗ giá trị lớn hoặc tái phạm",
      "Không bao giờ bị tịch thu xe",
      "Được đổi xe mới nếu nhận lỗi"
    ],
    "correct": "Bị tịch thu sung công quỹ Nhà nước nếu thuộc trường hợp chở gỗ giá trị lớn hoặc tái phạm",
    "explanation": "Điều 25 Nghị định 146/2026/NĐ-CP quy định tịch thu phương tiện vi phạm hành chính đối với các trường hợp vận chuyển lâm sản trái pháp luật có khối lượng lớn hoặc tái phạm nhiều lần."
  },
  {
    "question": "Tàng trữ, vận chuyển, buôn bán gỗ thông thường trái phép từ bao nhiêu m3 thì bị TRUY CỨU TRÁCH NHIỆM HÌNH SỰ (đi tù)?",
    "options": [
      "Từ 100 m3 trở lên",
      "Từ 20 m3 trở lên (gỗ tròn rừng tự nhiên) hoặc từ 40 m3 (rừng trồng) đã cấu thành tội phạm theo Điều 232 BLHS",
      "Từ 500 m3 trở lên",
      "Bao nhiêu cũng chỉ bị phạt tiền không bị đi tù"
    ],
    "correct": "Từ 20 m3 trở lên (gỗ tròn rừng tự nhiên) hoặc từ 40 m3 (rừng trồng) đã cấu thành tội phạm theo Điều 232 BLHS",
    "explanation": "Điểm l Khoản 1 Điều 232 Bộ luật Hình sự quy định tàng trữ, vận chuyển, mua bán trái phép từ 20 m3 đến dưới 40 m3 gỗ tự nhiên thông thường là phạm tội hình sự bị phạt tù từ 06 tháng đến 03 năm."
  },
  {
    "question": "Tàng trữ, buôn bán trái phép gỗ quý hiếm Nhóm IA từ khối lượng bao nhiêu m3 thì bị phạt tù theo Điều 232 BLHS?",
    "options": [
      "Từ 1,5 m3 trở lên đã bị truy cứu trách nhiệm hình sự",
      "Từ 10 m3 trở lên",
      "Từ 20 m3 trở lên",
      "Chỉ phạt tù khi buôn bán trên 50 m3"
    ],
    "correct": "Từ 1,5 m3 trở lên đã bị truy cứu trách nhiệm hình sự",
    "explanation": "Điểm k Khoản 1 Điều 232 Bộ luật Hình sự quy định hành vi tàng trữ, vận chuyển, chế biến hoặc mua bán trái phép từ 1,5 m3 đến dưới 03 m3 gỗ thuộc Danh mục Nhóm IA đã cấu thành tội phạm hình sự phạt tù."
  },
  {
    "question": "Khung hình phạt tù tối đa đối với tội vi phạm quy định về khai thác, bảo vệ rừng và lâm sản (Điều 232 BLHS) là bao lâu?",
    "options": [
      "Tối đa 01 năm tù",
      "Tối đa 03 năm tù",
      "Tối đa đến 10 năm tù giam",
      "Tối đa 6 tháng tù treo"
    ],
    "correct": "Tối đa đến 10 năm tù giam",
    "explanation": "Khoản 3 Điều 232 Bộ luật Hình sự quy định trường hợp phạm tội có tổ chức, khối lượng rất lớn hoặc tái phạm nguy hiểm thì mức hình phạt tù có thể lên đến 10 năm tù giam."
  },
  {
    "question": "Ngoài phạt tiền và tịch thu gỗ, cơ sở chế biến gỗ lậu còn có thể bị áp dụng hình thức phạt bổ sung nào?",
    "options": [
      "Buộc phá dỡ toàn bộ nhà ở của chủ xưởng",
      "Đình chỉ hoạt động của cơ sở chế biến lâm sản có thời hạn tối đa đến 12 tháng",
      "Cấm đi khỏi nơi cư trú vĩnh viễn",
      "Buộc phải chuyển nghề sang làm nông nghiệp"
    ],
    "correct": "Đình chỉ hoạt động của cơ sở chế biến lâm sản có thời hạn tối đa đến 12 tháng",
    "explanation": "Điều 26 Nghị định 146/2026/NĐ-CP quy định hình phạt bổ sung: Đình chỉ hoạt động của cơ sở chế biến lâm sản từ 06 tháng đến 12 tháng đối với hành vi chế biến lâm sản trái pháp luật."
  },
  {
    "question": "Tổ chức (doanh nghiệp, công ty) có hành vi buôn bán gỗ lậu thì mức phạt tiền như thế nào so với cá nhân?",
    "options": [
      "Bằng mức phạt đối với cá nhân",
      "Gấp 02 lần mức phạt tiền đối với cá nhân có cùng hành vi vi phạm",
      "Chỉ bằng 50% mức phạt của cá nhân",
      "Do công ty tự nộp bao nhiêu tùy ý"
    ],
    "correct": "Gấp 02 lần mức phạt tiền đối với cá nhân có cùng hành vi vi phạm",
    "explanation": "Điểm b Khoản 1 Điều 4 Nghị định 146/2026/NĐ-CP quy định mức phạt tiền đối với tổ chức vi phạm hành chính gấp 02 lần mức phạt tiền đối với cá nhân có cùng hành vi vi phạm."
  },
  {
    "question": "Người mua bán lâm sản lậu có bị tịch thu số tiền bất hợp pháp kiếm được từ việc bán gỗ lậu không?",
    "options": [
      "Được giữ lại toàn bộ số tiền đó",
      "Bắt buộc áp dụng biện pháp khắc phục hậu quả: Buộc nộp lại toàn bộ số lợi bất hợp pháp có được do vi phạm",
      "Chỉ nộp lại 10% tiền lãi",
      "Chỉ nộp lại tiền nếu người mua đòi lại"
    ],
    "correct": "Bắt buộc áp dụng biện pháp khắc phục hậu quả: Buộc nộp lại toàn bộ số lợi bất hợp pháp có được do vi phạm",
    "explanation": "Luật Xử lý VPHC và NĐ 146 quy định người vi phạm buộc phải nộp lại toàn bộ số lợi bất hợp pháp có được do thực hiện hành vi mua bán, chế biến lâm sản trái phép vào ngân sách nhà nước."
  },
  {
    "question": "Trường hợp nào chủ xưởng cưa được coi là có tình tiết giảm nhẹ khi cơ quan chức năng kiểm tra?",
    "options": [
      "Tự nguyện khai báo, thành thật hối lỗi, tích cực phối hợp ngăn chặn hậu quả và giao nộp tang vật",
      "Thuê luật sư đến cãi nhau to tiếng với đoàn kiểm tra",
      "Mang cất giấu nhanh số gỗ còn lại",
      "Bỏ trốn khỏi địa phương"
    ],
    "correct": "Tự nguyện khai báo, thành thật hối lỗi, tích cực phối hợp ngăn chặn hậu quả và giao nộp tang vật",
    "explanation": "Điều 9 Luật Xử lý VPHC quy định người vi phạm tự nguyện khai báo, thành thật hối lỗi, tự nguyện khắc phục hậu quả được áp dụng các tình tiết giảm nhẹ mức phạt theo luật."
  },
  {
    "question": "Bài học kinh doanh cốt lõi giúp các cơ sở chế biến, vận tải lâm sản phát triển bền vững và không lo bị xử phạt là gì?",
    "options": [
      "Chỉ mua gỗ giá rẻ không cần hỏi giấy tờ",
      "Luôn tuân thủ pháp luật, mua bán gỗ có hóa đơn, Bảng kê hợp pháp và ghi chép sổ sách nhập xuất đầy đủ",
      "Thuê tài xế lái xe chạy thật nhanh vượt trạm",
      "Chỉ chế biến gỗ vào ban đêm để tránh tai mắt"
    ],
    "correct": "Luôn tuân thủ pháp luật, mua bán gỗ có hóa đơn, Bảng kê hợp pháp và ghi chép sổ sách nhập xuất đầy đủ",
    "explanation": "Kinh doanh minh bạch, bảo đảm gỗ hợp pháp theo chuẩn VNTLAS là con đường duy nhất giúp doanh nghiệp, chủ xưởng phát triển thịnh vượng, tránh mọi thiệt hại về tài sản và nguy cơ lao lý."
  },
  {
    "question": "Pháp luật lâm nghiệp hiện hành có quy định một bộ hồ sơ thủ tục riêng biệt mang tên 'Hồ sơ cây cổ thụ' hay 'Hồ sơ cây có tuổi thọ cao' không?",
    "options": [
      "KHÔNG quy định riêng đối với 'cây cổ thụ'; việc chứng minh nguồn gốc căn cứ vào nguồn gốc hình thành của lâm sản (rừng tự nhiên, rừng trồng, đất ngoài lâm nghiệp, công trình dự án) theo Thông tư 26/2025/TT-BNNMT",
      "Có quy định một bộ thủ tục đặc biệt riêng do Bộ Xây dựng ban hành",
      "Mọi cây có tuổi thọ trên 50 năm đều bắt buộc phải đăng ký cây di sản quốc gia mới được mua bán",
      "Chỉ cần giấy xác nhận của Hội Sinh vật cảnh là được coi là hồ sơ cây cổ thụ hợp pháp"
    ],
    "correct": "KHÔNG quy định riêng đối với 'cây cổ thụ'; việc chứng minh nguồn gốc căn cứ vào nguồn gốc hình thành của lâm sản (rừng tự nhiên, rừng trồng, đất ngoài lâm nghiệp, công trình dự án) theo Thông tư 26/2025/TT-BNNMT",
    "explanation": "Pháp luật lâm nghiệp không quy định riêng hồ sơ cho 'cây cổ thụ' hay 'cây bứng dưỡng'; hồ sơ căn cứ vào nguồn gốc hình thành thực tế theo Điều 8, Điều 9 TT 26/2025/TT-BNNMT."
  },
  {
    "question": "Trường hợp cây cổ thụ, cây bóng mát được di dời từ khu vực thực hiện dự án, công trình xây dựng thì hồ sơ chứng minh nguồn gốc hợp pháp gồm những gì theo Khoản 5 Điều 6 Thông tư 26/2025/TT-BNNMT?",
    "options": [
      "Quyết định hoặc văn bản của cơ quan có thẩm quyền về việc xử lý cây, kèm theo Bảng kê lâm sản và các hồ sơ liên quan khi thực hiện mua bán, vận chuyển",
      "Chỉ cần hợp đồng san lấp mặt bằng của nhà thầu thi công xây dựng",
      "Biên bản họp của ban chỉ huy công trường xây dựng",
      "Giấy cam kết của tài xế xe cẩu chuyên dụng chở cây"
    ],
    "correct": "Quyết định hoặc văn bản của cơ quan có thẩm quyền về việc xử lý cây, kèm theo Bảng kê lâm sản và các hồ sơ liên quan khi thực hiện mua bán, vận chuyển",
    "explanation": "Khoản 5 Điều 6 Thông tư 26/2025/TT-BNNMT: Cây di dời từ công trình/dự án cần quyết định/văn bản xử lý của cấp có thẩm quyền kèm Bảng kê lâm sản khi lưu thông."
  },
  {
    "question": "Trường hợp cây bứng dưỡng từ khu vực đất ngoài quy hoạch lâm nghiệp, công trình dân dụng đô thị (cây phân tán, loài thông thường) thì hồ sơ chứng minh nguồn gốc căn cứ theo điều khoản nào?",
    "options": [
      "Hồ sơ chứng minh nguồn gốc hợp pháp theo quy định tại Khoản 3 Điều 8 Thông tư số 26/2025/TT-BNNMT",
      "Hồ sơ xuất nhập khẩu tiểu ngạch biên giới vùng sâu vùng xa",
      "Quy chuẩn kiểm toán tài chính nội bộ của chủ công trình",
      "Không cần bất kỳ hồ sơ nào vì cây nằm ngoài quy hoạch lâm nghiệp"
    ],
    "correct": "Hồ sơ chứng minh nguồn gốc hợp pháp theo quy định tại Khoản 3 Điều 8 Thông tư số 26/2025/TT-BNNMT",
    "explanation": "Khoản 3 Điều 8 Thông tư 26/2025/TT-BNNMT quy định hồ sơ lâm sản đối với cây phân tán, cây khai thác từ đất ngoài quy hoạch lâm nghiệp của tổ chức, cá nhân."
  },
  {
    "question": "Cây cảnh cổ thụ mua bán, chuyển nhượng qua nhiều chủ sở hữu trong nước thì hồ sơ nguồn gốc hợp pháp được xác lập như thế nào?",
    "options": [
      "Được kế thừa từ hồ sơ lâm sản của chủ sở hữu trước đó, gồm Bảng kê lâm sản và các tài liệu mua bán/hóa đơn hợp pháp kèm theo theo quy định tại Điều 8 Thông tư 26/2025/TT-BNNMT",
      "Tự động mất hiệu lực pháp lý và chủ mới phải làm lại từ đầu từ Ủy ban nhân dân tỉnh",
      "Chỉ cần một bản photocopy căn cước công dân của người chủ đầu tiên",
      "Mỗi lần chuyển nhượng phải đem cây lên trồng lại vào rừng tự nhiên 3 tháng"
    ],
    "correct": "Được kế thừa từ hồ sơ lâm sản của chủ sở hữu trước đó, gồm Bảng kê lâm sản và các tài liệu mua bán/hóa đơn hợp pháp kèm theo theo quy định tại Điều 8 Thông tư 26/2025/TT-BNNMT",
    "explanation": "Hồ sơ lâm sản có tính kế thừa: Người mua sau kế thừa hồ sơ hợp pháp của chủ trước kèm theo Bảng kê lâm sản và chứng từ chuyển nhượng theo Điều 8 TT 26/2025/TT-BNNMT."
  },
  {
    "question": "Trường hợp cây bứng dưỡng thuộc Danh mục loài thực vật rừng nguy cấp, quý, hiếm hoặc Phụ lục CITES (bất kể được bứng từ đâu), hồ sơ nguồn gốc bắt buộc theo quy định nào?",
    "options": [
      "Hồ sơ chứng minh nguồn gốc theo quy định tại Khoản 4 Điều 8 Thông tư 26/2025/TT-BNNMT (phải có Bảng kê lâm sản có xác nhận của Cơ quan Kiểm lâm sở tại)",
      "Chỉ cần bản cam kết miệng của người đào cây với người mua",
      "Không cần xác nhận Kiểm lâm nếu cây trồng trong chậu sành",
      "Được phép tự do vận chuyển vào ban đêm để tránh thủ tục hành chính"
    ],
    "correct": "Hồ sơ chứng minh nguồn gốc theo quy định tại Khoản 4 Điều 8 Thông tư 26/2025/TT-BNNMT (phải có Bảng kê lâm sản có xác nhận của Cơ quan Kiểm lâm sở tại)",
    "explanation": "Khoản 4 Điều 8 Thông tư 26/2025/TT-BNNMT: Loài nguy cấp quý hiếm (IA, IIA, CITES) bất kể nguồn gốc từ đâu khi khai thác, lưu thông bắt buộc phải có Bảng kê lâm sản xác nhận."
  },
  {
    "question": "Đối với cây cảnh, cây cổ thụ có nguồn gốc nhập khẩu từ nước ngoài lưu thông trong nước, hồ sơ chứng minh nguồn gốc hợp pháp căn cứ vào đâu?",
    "options": [
      "Hồ sơ nhập khẩu hợp pháp (Tờ khai hải quan thông quan, Giấy phép CITES nếu loài CITES) và Bảng kê lâm sản khi lưu thông trong nước theo Điều 9 Thông tư 26/2025/TT-BNNMT",
      "Chỉ cần nhãn mác chữ nước ngoài dán trên thân cây",
      "Phiếu chuyển tiền quốc tế qua ứng dụng ngân hàng thương mại",
      "Không cần giấy tờ nếu cây đã trồng sống tại Việt Nam trên 1 năm"
    ],
    "correct": "Hồ sơ nhập khẩu hợp pháp (Tờ khai hải quan thông quan, Giấy phép CITES nếu loài CITES) và Bảng kê lâm sản khi lưu thông trong nước theo Điều 9 Thông tư 26/2025/TT-BNNMT",
    "explanation": "Điều 9 Thông tư 26/2025/TT-BNNMT quy định hồ sơ lâm sản nhập khẩu lưu thông trong nước gồm hồ sơ hải quan thông quan và Bảng kê lâm sản của chủ lâm sản."
  },
  {
    "question": "Khi xác định tính hợp pháp và danh mục quản lý của một loài cây gỗ, cây cảnh, căn cứ pháp lý chính thức duy nhất là gì?",
    "options": [
      "Tên khoa học (tên Latinh) của loài; tên gọi thông thường bằng tiếng Việt hoặc tiếng Anh chỉ có giá trị tham khảo",
      "Tên mỹ miều do giới chơi cây cảnh tự phong đặt",
      "Tên theo bảng báo giá của các công ty cây xanh đô thị",
      "Tên cây ghi trong các bài thơ dân gian cổ điển"
    ],
    "correct": "Tên khoa học (tên Latinh) của loài; tên gọi thông thường bằng tiếng Việt hoặc tiếng Anh chỉ có giá trị tham khảo",
    "explanation": "Tên khoa học (Latinh) là định danh duy nhất theo Công ước quốc tế và Nghị định pháp luật để đối chiếu danh mục bảo tồn, tránh nhầm lẫn do phương ngữ địa phương."
  },
  {
    "question": "Hộ gia đình, cá nhân có cây cảnh vườn nhà thuộc loài nguy cấp, quý, hiếm (như thông đỏ, hoàng đàn...) khi khai thác cần lập Phương án khai thác theo mẫu nào?",
    "options": [
      "Phương án khai thác lập theo Mẫu số 08 Phụ lục II ban hành kèm theo Thông tư số 26/2025/TT-BNNMT",
      "Bản thiết kế kỹ thuật xây dựng nhà cấp 4",
      "Hợp đồng thuê nhân công bốc vác thời vụ",
      "Phương án sản xuất nông nghiệp công nghệ cao"
    ],
    "correct": "Phương án khai thác lập theo Mẫu số 08 Phụ lục II ban hành kèm theo Thông tư số 26/2025/TT-BNNMT",
    "explanation": "Khoản 6 Điều 5 Thông tư 26/2025/TT-BNNMT: Đối với hộ gia đình, cá nhân, Phương án khai thác lập theo Mẫu số 08 Phụ lục II gửi kèm Đơn đề nghị xác nhận Mẫu 03."
  },
  {
    "question": "Tình huống: Doanh nghiệp X trúng gói thầu giải tỏa mặt bằng dự án hồ chứa nước, trong lòng hồ có 5 cây đa cổ thụ. Doanh nghiệp X bứng 5 cây đa này chở đi bán cho khu du lịch thì hồ sơ cần những gì?",
    "options": [
      "Văn bản/Quyết định xử lý cây giải phóng mặt bằng của cấp có thẩm quyền phê duyệt dự án kèm Bảng kê lâm sản theo Khoản 5 Điều 6 Thông tư 26/2025/TT-BNNMT",
      "Chỉ cần hợp đồng trúng thầu thi công xây lắp hồ chứa nước",
      "Chỉ cần nộp tiền thuế tài nguyên tại kho bạc huyện",
      "Không cần giấy tờ gì vì cây nằm trong lòng hồ sắp bị ngập nước"
    ],
    "correct": "Văn bản/Quyết định xử lý cây giải phóng mặt bằng của cấp có thẩm quyền phê duyệt dự án kèm Bảng kê lâm sản theo Khoản 5 Điều 6 Thông tư 26/2025/TT-BNNMT",
    "explanation": "Cây di dời từ dự án/công trình bắt buộc phải có văn bản cho phép xử lý/di dời của cấp có thẩm quyền phê duyệt dự án kèm Bảng kê lâm sản hợp lệ khi lưu thông."
  },
  {
    "question": "Tình huống: Anh B mua một cây si cổ thụ có tuổi thọ hàng trăm năm đào từ vườn nhà của ông H ở xã bên cạnh mang về vườn ươm. Anh B cần lưu giữ hồ sơ gì để chứng minh nguồn gốc hợp pháp?",
    "options": [
      "Bảng kê lâm sản do ông H lập kèm tài liệu chứng minh quyền sử dụng đất/nguồn gốc vườn nhà của ông H và văn bản mua bán/chuyển nhượng giữa hai bên",
      "Chỉ cần một đoạn ghi âm cuộc điện thoại thỏa thuận giá cả giữa anh B và ông H",
      "Bản photocopy sổ hộ khẩu của ông H có đóng dấu giáp lai",
      "Chỉ cần giấy biên nhận cọc tiền có chữ ký của người làm chứng"
    ],
    "correct": "Bảng kê lâm sản do ông H lập kèm tài liệu chứng minh quyền sử dụng đất/nguồn gốc vườn nhà của ông H và văn bản mua bán/chuyển nhượng giữa hai bên",
    "explanation": "Điều 8 Thông tư 26/2025/TT-BNNMT: Cây vườn nhà chuyển nhượng cần Bảng kê lâm sản của chủ cũ, chứng từ chứng minh đất vườn và hợp đồng chuyển nhượng hợp pháp."
  },
  {
    "question": "Tổ chức, hộ kinh doanh cây cảnh, gỗ chế biến phải lập và ghi chép Sổ theo dõi nhập, xuất lâm sản theo mẫu nào và xuất trình khi nào?",
    "options": [
      "Lập Sổ theo Mẫu số 04 Phụ lục II ban hành kèm Thông tư 26/2025/TT-BNNMT, cập nhật đầy đủ, kịp thời và xuất trình khi có yêu cầu kiểm tra của cơ quan có thẩm quyền",
      "Ghi chép vào sổ nhật ký cá nhân và chỉ cho người thân xem",
      "Không phải lập sổ nếu đã nộp thuế khoán hàng tháng cho cơ quan thuế",
      "Chỉ cần lập sổ nếu có quy mô vốn kinh doanh trên 10 tỷ đồng"
    ],
    "correct": "Lập Sổ theo Mẫu số 04 Phụ lục II ban hành kèm Thông tư 26/2025/TT-BNNMT, cập nhật đầy đủ, kịp thời và xuất trình khi có yêu cầu kiểm tra của cơ quan có thẩm quyền",
    "explanation": "Điểm c Khoản 7 Điều 32 Thông tư 26/2025/TT-BNNMT: Chủ cơ sở lập Sổ Mẫu số 04, cập nhật kịp thời việc nhập xuất và xuất trình khi cơ quan chức năng kiểm tra."
  },
  {
    "question": "Trách nhiệm của chủ lâm sản về tính chính xác của hồ sơ lâm sản được quy định như thế nào tại Khoản 7 Điều 32 Thông tư 26/2025/TT-BNNMT?",
    "options": [
      "Chủ lâm sản phải lưu giữ đầy đủ hồ sơ, chịu trách nhiệm trước pháp luật về tính chính xác của hồ sơ và chấp hành quy định kiểm tra, truy xuất của cơ quan chức năng",
      "Chủ lâm sản không chịu trách nhiệm nếu hàng hóa đã rời khỏi cổng xưởng",
      "Mọi sai sót trong hồ sơ đều do cơ quan Kiểm lâm tự gánh chịu trách nhiệm",
      "Chỉ chịu trách nhiệm nếu lâm sản là gỗ rừng tự nhiên quý hiếm"
    ],
    "correct": "Chủ lâm sản phải lưu giữ đầy đủ hồ sơ, chịu trách nhiệm trước pháp luật về tính chính xác của hồ sơ và chấp hành quy định kiểm tra, truy xuất của cơ quan chức năng",
    "explanation": "Khoản 7 Điều 32 Thông tư 26/2025/TT-BNNMT: Chủ lâm sản chịu trách nhiệm toàn diện trước pháp luật về tính hợp pháp và trung thực của hồ sơ lâm sản."
  },
  {
    "question": "Hành vi đào trộm cây gỗ cổ thụ, cây cảnh trên núi đá thuộc rừng phòng hộ, rừng đặc dụng đem về bán cho các khu nghỉ dưỡng bị xử lý như thế nào?",
    "options": [
      "Bị xử lý nghiêm khắc về hành vi khai thác, tàng trữ lâm sản trái pháp luật theo NĐ 146/2026/NĐ-CP hoặc khởi tố hình sự theo Điều 232, Điều 243 BLHS",
      "Được coi là hoạt động khai hoang tôn tạo cảnh quan thiên nhiên",
      "Chỉ bị phạt vi phạm hành chính 200.000 đồng nếu cây trồng lại vẫn sống tốt",
      "Được cấp giấy chứng nhận nguồn gốc nếu nộp đơn tự thú trong 30 ngày"
    ],
    "correct": "Bị xử lý nghiêm khắc về hành vi khai thác, tàng trữ lâm sản trái pháp luật theo NĐ 146/2026/NĐ-CP hoặc khởi tố hình sự theo Điều 232, Điều 243 BLHS",
    "explanation": "Đào trộm cây rừng tự nhiên cấu thành tội phạm khai thác rừng trái phép (Điều 232 BLHS) hoặc hủy hoại rừng (Điều 243 BLHS), bị phạt tù nghiêm khắc."
  },
  {
    "question": "Thời hạn lưu giữ hồ sơ lâm sản tại các cơ sở kinh doanh, chế biến lâm sản, cây cảnh theo quy định là bao lâu?",
    "options": [
      "Tối thiểu 05 năm kể từ ngày lập hồ sơ hoặc xuất bán hết toàn bộ lô lâm sản",
      "Chỉ cần lưu giữ trong thời gian 06 tháng kể từ ngày giao hàng",
      "Hết năm tài chính được phép tiêu hủy toàn bộ hồ sơ sổ sách",
      "Không bắt buộc lưu giữ nếu cơ sở đã chụp ảnh lưu vào điện thoại"
    ],
    "correct": "Tối thiểu 05 năm kể từ ngày lập hồ sơ hoặc xuất bán hết toàn bộ lô lâm sản",
    "explanation": "Khoản 7 Điều 32 Thông tư 26/2025/TT-BNNMT: Chủ cơ sở có trách nhiệm bảo quản, lưu trữ hồ sơ lâm sản tối thiểu 05 năm phục vụ công tác kiểm tra, truy xuất."
  },
  {
    "question": "Tình huống: Nghệ nhân K mua một gốc cây gỗ lũa từ người đi rừng về đục tượng bán 80 triệu đồng. Khi vận chuyển đi giao cho khách, anh K bị Kiểm lâm kiểm tra. Để chuyến hàng hợp pháp, anh K cần xuất trình gì?",
    "options": [
      "Hóa đơn bán hàng/chứng từ hợp pháp kèm Bảng kê lâm sản do anh K tự lập theo quy định tại Thông tư 26/2025/TT-BNNMT",
      "Chỉ cần bản vẽ thiết kế tác phẩm mỹ nghệ của anh K",
      "Giấy chứng nhận danh hiệu nghệ nhân làng nghề",
      "Không cần giấy tờ gì vì gỗ lũa đã được đục thành tác phẩm nghệ thuật"
    ],
    "correct": "Hóa đơn bán hàng/chứng từ hợp pháp kèm Bảng kê lâm sản do anh K tự lập theo quy định tại Thông tư 26/2025/TT-BNNMT",
    "explanation": "Sản phẩm gỗ hoàn chỉnh (tượng gỗ mỹ nghệ) lưu thông nội địa cần hóa đơn hợp pháp kèm Bảng kê lâm sản do chủ hàng tự lập theo Thông tư 26/2025/TT-BNNMT."
  }
];
