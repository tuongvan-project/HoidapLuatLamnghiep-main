/**
 * BỘ CÂU HỎI TRẮC NGHIỆM PHÁP LUẬT LÂM NGHIỆP - GÓI 3 (85 CÂU)
 * Cấu trúc: 1 đáp án đúng + 3 đáp án bẫy thực tế (4 options)
 * Đã chuẩn hóa:
 * - 100% không đưa tên điều khoản luật vào nội dung các đáp án (options)
 * - Tích hợp các tình huống dí dỏm, gần gũi, hài hước đời sống tạo cảm giác giải trí
 * - Cân đối độ dài 4 options đồng đều, triệt tiêu lỗi đoán mò đáp án dài
 * - 100% phần giải thích (explanation) trích dẫn chi tiết Điểm, Khoản, Điều, Nghị định/Thông tư/Luật
 */
const question_CBLS = [
  {
    "question": "Theo Thông tư 26/2022/TT-BNNPTNT (hợp nhất TT 84/2025/TT-BNNMT), trường hợp nào sau đây chủ lâm sản KHÔNG BẮT BUỘC phải đề nghị cơ quan Kiểm lâm xác nhận Bảng kê lâm sản khi xuất bán?",
    "options": [
      "Doanh nghiệp chế biến gỗ được phân loại Nhóm I xuất bán sản phẩm gỗ hoặc gỗ rừng trồng hợp pháp; sản phẩm gỗ hoàn chỉnh",
      "Cơ sở cưa xẻ gỗ xuất bán gỗ tròn khai thác từ rừng tự nhiên trong nước cho các nhà máy sản xuất ván ép công nghiệp",
      "Chủ trang trại xuất bán động vật rừng nguy cấp, quý, hiếm còn sống cho các cơ sở nuôi dưỡng khác nằm ở ngoại tỉnh",
      "Doanh nghiệp xuất bán gỗ xẻ thuộc Danh mục thực vật rừng Nhóm IA, IIA khai thác hợp pháp từ các công trình giải phóng mặt bằng"
    ],
    "correct": "Doanh nghiệp chế biến gỗ được phân loại Nhóm I xuất bán sản phẩm gỗ hoặc gỗ rừng trồng hợp pháp; sản phẩm gỗ hoàn chỉnh",
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
      "Có thông tin phản ánh dấu hiệu nghi vấn lâm sản không đúng nguồn gốc, số lượng; hoặc lâm sản thuộc loài nguy cấp quý hiếm",
      "Bắt buộc đối với tất cả các chuyến hàng gỗ rừng trồng xuất bán ra khỏi địa bàn cấp huyện để bảo đảm thống kê lâm sản",
      "Chỉ kiểm tra thực tế khi chủ lâm sản không nộp đầy đủ các khoản lệ phí hành chính xác nhận nguồn gốc theo quy định",
      "Chỉ kiểm tra thực tế tại xưởng khi phương tiện vận tải chuyên dùng của chủ hàng bị hỏng hóc dọc đường cần cứu hộ kỹ thuật"
    ],
    "correct": "Có thông tin phản ánh dấu hiệu nghi vấn lâm sản không đúng nguồn gốc, số lượng; hoặc lâm sản thuộc loài nguy cấp quý hiếm",
    "explanation": "Khoản 3 Điều 6 Thông tư 26/2022/TT-BNNPTNT quy định việc kiểm tra thực tế chỉ thực hiện khi có nghi vấn vi phạm, thông tin phản ánh hoặc loài nguy cấp, quý, hiếm cần xác minh."
  },
  {
    "question": "Sổ theo dõi nhập, xuất lâm sản (theo Mẫu số 29 Thông tư 26/2022/TT-BNNPTNT) tại các cơ sở chế biến, kinh doanh gỗ phải được cập nhật vào thời điểm nào?",
    "options": [
      "Ghi chép ngay khi nhập hoặc xuất lâm sản ra vào cơ sở, chậm nhất không quá 01 ngày làm việc kể từ ngày giao nhận hàng hóa",
      "Chỉ cần tổng hợp ghi chép dồn số liệu một lần vào ngày làm việc cuối cùng của mỗi tháng để phục vụ báo cáo kế toán nội bộ",
      "Ghi chép định kỳ một lần vào dịp cuối năm dương lịch khi có kế hoạch kiểm tra liên ngành của các cơ quan quản lý nhà nước",
      "Không bắt buộc phải ghi chép vào sổ nếu cơ sở kinh doanh đã lưu giữ đầy đủ hóa đơn giá trị gia tăng của từng chuyến hàng"
    ],
    "correct": "Ghi chép ngay khi nhập hoặc xuất lâm sản ra vào cơ sở, chậm nhất không quá 01 ngày làm việc kể từ ngày giao nhận hàng hóa",
    "explanation": "Điều 8 Thông tư 26/2022/TT-BNNPTNT: Chủ cơ sở chế biến, mua bán lâm sản phải ghi chép cập nhật ngay Sổ theo dõi nhập xuất lâm sản chậm nhất sau 01 ngày làm việc."
  },
  {
    "question": "Hồ sơ nguồn gốc lâm sản hợp pháp đối với lô gỗ xẻ nhập khẩu từ quốc gia thuộc 'vùng địa lý tích cực' (không thuộc vùng rủi ro) gồm những tài liệu nào?",
    "options": [
      "Tờ khai hải quan đã thông quan, Bảng kê lâm sản của chủ gỗ, Hóa đơn thương mại và Bảng kê lâm sản của đơn vị xuất khẩu nước ngoài",
      "Chỉ cần bản cam kết bằng văn bản của lái xe chở công-ten-nơ gỗ từ cảng biển về xưởng mộc gia đình bảo đảm không có hàng lậu",
      "Chỉ cần hình ảnh chụp lô gỗ tại cảng biển quốc tế và phiếu thanh toán cước vận tải đường biển của hãng tàu quốc tế chuyển giao",
      "Bắt buộc phải có Giấy phép xuất nhập khẩu CITES do Bộ cấp trực tiếp bất kể là loài gỗ keo lai hay gỗ bạch đàn nhập khẩu thông thường"
    ],
    "correct": "Tờ khai hải quan đã thông quan, Bảng kê lâm sản của chủ gỗ, Hóa đơn thương mại và Bảng kê lâm sản của đơn vị xuất khẩu nước ngoài",
    "explanation": "Điều 15 Nghị định 102/2020/NĐ-CP và Thông tư 26/2022/TT-BNNPTNT: Gỗ nhập khẩu từ vùng an toàn cần tờ khai hải quan thông quan, Bảng kê lâm sản và chứng từ thương mại hợp lệ."
  },
  {
    "question": "Theo Nghị định 102/2020/NĐ-CP (VNTLAS), trường hợp nhập khẩu loài gỗ thuộc Danh mục rủi ro hoặc từ quốc gia rủi ro, chủ gỗ bắt buộc phải bổ sung tài liệu nào?",
    "options": [
      "Bản kê khai nguồn gốc gỗ nhập khẩu hợp pháp (bản kê DDS) kèm tài liệu chứng minh tính hợp pháp của gỗ tại nước xuất xứ",
      "Giấy xác nhận tình trạng độc thân của người đại diện theo pháp luật của doanh nghiệp đứng tên làm thủ tục nhập khẩu gỗ",
      "Bản cam kết bằng văn bản không bán lại lô gỗ cho các xưởng mộc dân dụng đóng bàn ghế giường tủ cho các hộ gia đình cá thể",
      "Phiếu kết quả kiểm tra siêu âm độ ẩm và tỷ trọng gỗ do phòng thí nghiệm kiểm định cơ lý vật liệu xây dựng cấp xác nhận"
    ],
    "correct": "Bản kê khai nguồn gốc gỗ nhập khẩu hợp pháp (bản kê DDS) kèm tài liệu chứng minh tính hợp pháp của gỗ tại nước xuất xứ",
    "explanation": "Khoản 2 Điều 7 Nghị định 102/2020/NĐ-CP quy định nhập khẩu gỗ từ vùng rủi ro bắt buộc phải có tài liệu kê khai nguồn gốc gỗ hợp pháp (DDS) và tài liệu chứng minh tính hợp pháp."
  },
  {
    "question": "Hành vi vận chuyển gỗ rừng trồng hợp pháp nhưng không mang theo Bảng kê lâm sản hoặc hồ sơ nguồn gốc trong quá trình lưu thông bị xử phạt về hành vi nào?",
    "options": [
      "Hành vi vi phạm quy định về quản lý hồ sơ lâm sản trong vận chuyển lâm sản đối với trường hợp lâm sản có nguồn gốc hợp pháp",
      "Tài xế nhanh trí trùm chăn bông kín mít lên thùng xe rồi khai báo với tổ tuần tra Kiểm lâm là đang chở đoàn văn công đi biểu diễn",
      "Dán tấm biển 'Xe chở gỗ phục vụ người nhà lãnh đạo' lên kính lái với hy vọng được tổ kiểm tra đặc cách vẫy tay cho qua trạm",
      "Lái xe chỉ cần mở điện thoại cho cán bộ Kiểm lâm xem ảnh chụp rừng cây của nhà mình là được tiếp tục nhấn ga lăn bánh trên đường"
    ],
    "correct": "Hành vi vi phạm quy định về quản lý hồ sơ lâm sản trong vận chuyển lâm sản đối với trường hợp lâm sản có nguồn gốc hợp pháp",
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
      "Từ 10 m3 gỗ tròn (hoặc từ 7 m3 gỗ xẻ) trở lên đối với gỗ có nguồn gốc khai thác trái phép từ rừng sản xuất",
      "Từ 2 m3 gỗ tròn (hoặc từ 1,5 m3 gỗ xẻ) trở lên đối với gỗ thông thường khai thác từ bất kỳ loại rừng nào",
      "Phải từ 50 m3 gỗ tròn trở lên mới đủ yếu tố cấu thành tội phạm lâm sản để đưa ra xét xử trước tòa án",
      "Gỗ thông thường không bao giờ bị xử lý hình sự mà chỉ bị phạt tiền vi phạm hành chính tối đa 50 triệu đồng"
    ],
    "correct": "Từ 10 m3 gỗ tròn (hoặc từ 7 m3 gỗ xẻ) trở lên đối với gỗ có nguồn gốc khai thác trái phép từ rừng sản xuất",
    "explanation": "Điểm d Khoản 1 Điều 232 Bộ luật Hình sự: Tàng trữ, vận chuyển trái phép gỗ thông thường từ 10 m³ gỗ tròn trở lên (hoặc từ 5 m³ nếu nguồn gốc từ rừng phòng hộ) bị xử lý hình sự."
  },
  {
    "question": "Chủ cơ sở chế biến gỗ mua gom gỗ trôi nổi của các đối tượng đào trộm trên rừng tự nhiên về cưa xẻ, sau đó dùng hóa đơn khống để hợp thức hóa bị coi là hành vi gì?",
    "options": [
      "Hành vi tàng trữ, chế biến lâm sản trái pháp luật và mua bán hóa đơn bất hợp pháp; bị xử phạt vi phạm hành chính nặng hoặc xử lý hình sự phạt tù",
      "Hành vi giải cứu các lóng gỗ trôi dạt vô chủ khỏi bị mối mọt đục khoét làm mục nát trong rừng, xứng đáng được trao tặng danh hiệu hiệp sĩ môi trường",
      "Được coi là sáng kiến kinh doanh nhạy bén biết tận dụng gỗ vụn củi khô làm giàu cho quê hương và tạo công ăn việc làm ổn định cho lao động địa phương",
      "Hành vi hợp pháp hoàn toàn vì một khi đã có tờ hóa đơn đỏ kẹp vào hồ sơ thì mọi loại gỗ rừng đều tự động biến thành gỗ có nguồn gốc xuất xứ sạch"
    ],
    "correct": "Hành vi tàng trữ, chế biến lâm sản trái pháp luật và mua bán hóa đơn bất hợp pháp; bị xử phạt vi phạm hành chính nặng hoặc xử lý hình sự phạt tù",
    "explanation": "Mua gỗ lậu rồi dùng hóa đơn bất hợp pháp để hợp thức hóa là hành vi gian lận lâm sản nghiêm trọng, bị truy cứu trách nhiệm hình sự theo Điều 232 và Điều 200/203 BLHS."
  },
  {
    "question": "Phương pháp tính khối lượng gỗ tròn có đường kính đầu nhỏ từ 06 cm đến dưới 20 cm và chiều dài từ 01 mét trở lên (gỗ tròn nhỏ) theo Thông tư 26 là gì?",
    "options": [
      "Đo đường kính đầu nhỏ và chiều dài lóng gỗ để tra Bảng khối lượng hoặc tính toán theo công thức thể tích hình nón cụt tiêu chuẩn",
      "Chỉ cần cân toàn bộ xe gỗ trên trạm cân điện tử rồi quy đổi theo tỷ lệ tương đương 01 tấn gỗ tròn bằng 01 mét khối gỗ thương phẩm",
      "Đo chu vi của cả bó củi gỗ tròn nhỏ rồi chia bình quân cho tổng số lượng cây gỗ có trong bó để suy ra thể tích từng cây",
      "Ước lượng cảm quan bằng mắt thường của người thu mua gỗ dựa trên kinh nghiệm thực tế giao dịch tại địa phương qua nhiều năm"
    ],
    "correct": "Đo đường kính đầu nhỏ và chiều dài lóng gỗ để tra Bảng khối lượng hoặc tính toán theo công thức thể tích hình nón cụt tiêu chuẩn",
    "explanation": "Phụ lục I Thông tư 26/2022/TT-BNNPTNT hướng dẫn chi tiết phương pháp đo đường kính đầu nhỏ d (cm), chiều dài L (m) để tính thể tích hoặc tra bảng khối lượng gỗ tròn nhỏ."
  },
  {
    "question": "Khi kiểm tra lâm sản tại xưởng mộc, sự sai lệch (dung sai) giữa khối lượng gỗ xẻ thực tế so với khối lượng ghi trên hồ sơ Bảng kê lâm sản trong giới hạn nào thì KHÔNG bị coi là vi phạm?",
    "options": [
      "Sai lệch không vượt quá 5% về tổng thể tích hoặc sai số kỹ thuật đo đếm trong giới hạn cho phép theo quy chuẩn kỹ thuật",
      "Được phép sai lệch lên tới 20% tổng thể tích lô gỗ do đặc tính tự nhiên của gỗ tươi bị co ngót thể tích trong quá trình phơi sấy",
      "Tuyệt đối không được phép sai lệch dù chỉ 0,001 mét khối gỗ so với số liệu ghi trên hồ sơ Bảng kê lâm sản ban đầu của chủ hàng",
      "Được phép sai lệch tùy ý bao nhiêu cũng được miễn là thực tế kiểm tra không phát hiện có loài cây gỗ quý hiếm trà trộn vào lô hàng"
    ],
    "correct": "Sai lệch không vượt quá 5% về tổng thể tích hoặc sai số kỹ thuật đo đếm trong giới hạn cho phép theo quy chuẩn kỹ thuật",
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
      "Bị xử lý hình sự về Tội làm giả con dấu, tài liệu của cơ quan, tổ chức và tịch thu toàn bộ phương tiện, gỗ vi phạm",
      "Được coi là hành vi sáng tạo khéo tay hay làm đáng được tặng bằng khen về kỹ năng chạm khắc cơ khí chữ nổi tinh xảo",
      "Chỉ bị phạt bắt người thợ rèn phải rèn đền cho cơ quan Kiểm lâm 10 cây búa sắt mới tinh có gắn đèn led nhấp nháy phát sáng",
      "Được miễn xử lý nếu chủ xưởng cưa chứng minh được cây búa giả đóng dấu lên gỗ cho ra hoa văn sắc nét và đẹp hơn dấu búa thật"
    ],
    "correct": "Bị xử lý hình sự về Tội làm giả con dấu, tài liệu của cơ quan, tổ chức và tịch thu toàn bộ phương tiện, gỗ vi phạm",
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
      "Bị đình chỉ hoạt động xưởng cưa, tịch thu máy móc thiết bị cưa xẻ, xử phạt vi phạm hành chính về đăng ký kinh doanh và chế biến lâm sản trái phép",
      "Chỉ bị phạt nhắc nhở nhẹ nhàng và được tạo điều kiện tiếp tục hoạt động cưa xẻ nếu xưởng mộc nằm ẩn sâu trong ngõ hẻm vắng vẻ ít người qua lại",
      "Được cấp giấy phép hoạt động đặc cách tự động nếu chủ xưởng cưa nộp phạt tại chỗ 200.000 đồng và mời đoàn kiểm tra uống nước chè xanh đàm đạo",
      "Hoàn toàn không bị xử lý vì xưởng cưa được dựng trên đất thổ cư thuộc quyền thừa kế hợp pháp của ông bà tổ tiên để lại từ nhiều đời trước đây"
    ],
    "correct": "Bị đình chỉ hoạt động xưởng cưa, tịch thu máy móc thiết bị cưa xẻ, xử phạt vi phạm hành chính về đăng ký kinh doanh và chế biến lâm sản trái phép",
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
      "Bị xử phạt vi phạm hành chính về hành vi không lập hồ sơ nguồn gốc lâm sản hợp pháp theo quy định xử phạt lĩnh vực lâm nghiệp",
      "Được miễn xử phạt nếu gỗ keo lai khai thác từ rừng trồng sản xuất đã đủ chu kỳ sinh trưởng từ 05 năm tuổi trở lên",
      "Chỉ bị xử phạt vi phạm nếu nhà máy băm dăm gỗ có văn bản khiếu nại gửi cơ quan Công an đề nghị xử lý tranh chấp hợp đồng",
      "Tự động bị coi là hành vi hủy hoại rừng tự nhiên và bị chuyển hồ sơ sang Cơ quan điều tra để khởi tố vụ án hình sự"
    ],
    "correct": "Bị xử phạt vi phạm hành chính về hành vi không lập hồ sơ nguồn gốc lâm sản hợp pháp theo quy định xử phạt lĩnh vực lâm nghiệp",
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
      "Bị xử phạt rất nặng về hành vi vi phạm bảo vệ môi trường, buộc vớt toàn bộ mùn cưa khôi phục nguyên trạng dòng chảy và bồi thường thiệt hại theo luật",
      "Được tuyên dương khen thưởng vì đã tình nguyện tài trợ nguồn thức ăn chay giàu chất xơ dinh dưỡng cho các loài tôm cá tung tăng bơi lội dưới đáy sông",
      "Được phép xả thải thoải mái nếu dòng nước cuốn trôi toàn bộ mùn cưa sang địa phận xã hàng xóm mà không để lại bất kỳ dấu vết nào tại hiện trường xưởng",
      "Chỉ bị nhắc nhở quét dọn nếu đám mùn cưa trôi nổi kết thành chiếc bè mảng to lớn làm cản trở chiếc thuyền nan chở khách đi câu cá thư giãn cuối tuần"
    ],
    "correct": "Bị xử phạt rất nặng về hành vi vi phạm bảo vệ môi trường, buộc vớt toàn bộ mùn cưa khôi phục nguyên trạng dòng chảy và bồi thường thiệt hại theo luật",
    "explanation": "Xả chất thải rắn công nghiệp (mùn cưa, vỏ cây) vào nguồn nước vi phạm nghiêm trọng Luật Bảo vệ môi trường, bị phạt tiền và buộc khắc phục hậu quả nạo vét dòng chảy."
  },
  {
    "question": "Chủ phương tiện khi vận chuyển gỗ tròn, gỗ xẻ trên đường BẮT BUỘC phải mang theo giấy tờ gì?",
    "options": [
      "Bản chính hoặc bản điện tử Bảng kê lâm sản hợp pháp kèm theo hóa đơn hoặc hồ sơ chứng minh nguồn gốc lâm sản hợp pháp theo đúng quy định",
      "Chỉ cần tài xế mang theo một cuốn sổ tay ghi chép số điện thoại người thân để sẵn sàng gọi điện xin cứu trợ khi gặp chốt Kiểm lâm tuần tra",
      "Chỉ cần dán tờ giấy viết tay cam kết 'Xe chở gỗ nhà tự trồng tuyệt đối không phải gỗ rừng lậu' lên kính chắn gió phía trước buồng lái xe tải",
      "Không cần mang theo bất kỳ giấy tờ lâm sản nào miễn là tài xế có bằng lái xe hạng C và xe còn hạn đăng kiểm kiểm định an toàn kỹ thuật"
    ],
    "correct": "Bản chính hoặc bản điện tử Bảng kê lâm sản hợp pháp kèm theo hóa đơn hoặc hồ sơ chứng minh nguồn gốc lâm sản hợp pháp theo đúng quy định",
    "explanation": "Điều 17 Thông tư 26 quy định khi vận chuyển lâm sản trên đường, lái xe bắt buộc phải mang theo hồ sơ lâm sản hợp pháp gồm Bảng kê lâm sản (có xác nhận hoặc tự lập) và hóa đơn theo quy định."
  },
  {
    "question": "Xưởng cưa xẻ, chế biến gỗ muốn hoạt động hợp pháp phải đáp ứng điều kiện thủ tục gì đầu tiên?",
    "options": [
      "Đăng ký kinh doanh ngành nghề chế biến gỗ, có hồ sơ môi trường và phương án phòng cháy chữa cháy được cấp có thẩm quyền phê duyệt",
      "Chỉ cần mua một chiếc máy cưa xăng cũ về đặt ngay giữa vườn nhà là có thể tùy ý cưa xẻ gỗ kinh doanh mà không cần xin phép ai",
      "Chỉ cần sang nhà đồng chí Trưởng thôn bản biếu một ấm chè ngon và nói miệng xin mở xưởng cưa là được công nhận hoạt động hợp pháp",
      "Không cần thực hiện bất kỳ thủ tục pháp lý nào nếu xưởng cưa chỉ hoạt động vào ban đêm và cam kết không gây tiếng ồn cho xóm làng"
    ],
    "correct": "Đăng ký kinh doanh ngành nghề chế biến gỗ, có hồ sơ môi trường và phương án phòng cháy chữa cháy được cấp có thẩm quyền phê duyệt",
    "explanation": "Luật Doanh nghiệp 2020, Nghị định 01/2021/NĐ-CP và Luật Lâm nghiệp: Cơ sở chế biến gỗ bắt buộc phải đăng ký kinh doanh/hộ kinh doanh, có phương án PCCC và hồ sơ môi trường được cơ quan có thẩm quyền phê duyệt trước khi đi vào vận hành."
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
    "explanation": "Khoản 1 Điều 17 Thông tư số 26/2025/TT-BNNMT ngày 24/6/2025: Khi mua lại gỗ nhập khẩu từ doanh nghiệp khác trong nước, cơ sở chế biến phải lưu giữ Bảng kê lâm sản do bên bán lập kèm theo hóa đơn hợp pháp theo quy định của Bộ Tài chính."
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
      "Lập Bảng kê lâm sản và xuất hóa đơn theo quy định của pháp luật thuế giao cho người mua lưu giữ làm căn cứ chứng minh nguồn gốc lâm sản hợp pháp",
      "Chỉ cần xé một mẩu giấy vở học sinh viết vài chữ nghệch ngoạc biên nhận đã nhận đủ tiền rồi bắt tay người mua làm tin không cần dấu má phức tạp",
      "Không cần giao bất kỳ giấy tờ nào, chỉ cần dặn người mua chở gỗ đi vào lúc chập tối và đi đường tắt đường vòng để tránh gặp người đi tuần tra",
      "Bắt người mua gỗ phải tự mang theo một con gà trống thiến lên trụ sở xã xin chữ ký của Chủ tịch xã thì cơ sở mới đồng ý bốc gỗ lên xe chở về"
    ],
    "correct": "Lập Bảng kê lâm sản và xuất hóa đơn theo quy định của pháp luật thuế giao cho người mua lưu giữ làm căn cứ chứng minh nguồn gốc lâm sản hợp pháp",
    "explanation": "Khoản 2 Điều 18 Thông tư số 26/2025/TT-BNNMT: Khi bán lẻ gỗ cho người dân làm nhà ở, cơ sở kinh doanh phải lập Bảng kê lâm sản giao cho người mua kèm hóa đơn hoặc chứng từ bán hàng theo quy định quản lý lâm sản."
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
    "explanation": "Điều 43 và Điều 44 Nghị định số 156/2018/NĐ-CP: Xưởng chế biến gỗ bắt buộc phải trang bị đầy đủ hệ thống phương tiện chữa cháy tại chỗ, thành lập đội PCCC cơ sở và bảo đảm khoảng cách an toàn chống cháy lan."
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
    "explanation": "Khoản 1 Điều 20 Nghị định số 45/2022/NĐ-CP và Thông tư 26/2025/TT-BNNMT: Mùn cưa, vỏ cây, phế liệu gỗ tại cơ sở chế biến phải được thu gom, phân loại xử lý đúng quy định môi trường, nghiêm cấm đổ bừa bãi ra kênh mương, sông suối."
  },
  {
    "question": "Khi phát hiện gỗ mua vào có dấu hiệu là gỗ khai thác lậu từ rừng tự nhiên, chủ xưởng gỗ nên làm gì?",
    "options": [
      "Kiên quyết từ chối thu mua và kịp thời báo ngay cho cơ quan Kiểm lâm hoặc Công an sở tại để tiến hành kiểm tra, xử lý theo luật",
      "Nhanh chóng vận hành máy cưa xẻ nhỏ lóng gỗ ra thành nhiều mảnh vụn để phi tang tang vật trước khi đoàn thanh tra tìm đến xưởng",
      "Tìm cách ép giá người bán thật rẻ rồi bí mật giấu khúc gỗ vào gian hầm kín dưới sàn nhà chờ thời cơ thuận lợi đem ra tiêu thụ",
      "Lập tức liên hệ chuyển nhượng lại nguyên chuyến hàng cho xưởng mộc của đối thủ cạnh tranh để đối thủ bị cơ quan Kiểm lâm bắt giữ"
    ],
    "correct": "Kiên quyết từ chối thu mua và kịp thời báo ngay cho cơ quan Kiểm lâm hoặc Công an sở tại để tiến hành kiểm tra, xử lý theo luật",
    "explanation": "Điều 232 Bộ luật Hình sự và Điều 23 Nghị định 146/2026/NĐ-CP: Mua bán, cất giữ gỗ lậu là hành vi vi phạm pháp luật nghiêm trọng; chủ cơ sở có trách nhiệm từ chối thu mua và thông báo cơ quan chức năng để bảo vệ cơ sở."
  },
  {
    "question": "Chủ phương tiện vận tải có trách nhiệm gì trước khi nhận chở một chuyến gỗ trên đường?",
    "options": [
      "Kiểm tra tính hợp lệ của Bảng kê lâm sản, hóa đơn kèm theo và đối chiếu cẩn thận với khối lượng, chủng loại gỗ thực tế xếp lên thùng xe chở hàng",
      "Chỉ cần nhắm nghiền hai mắt chắp tay cầu xin chuyến xe đi suôn sẻ trên đường không gặp phải bóng dáng của bất kỳ tổ công tác Kiểm lâm tuần tra nào",
      "Tính nhẩm thật nhanh xem chuyến hàng này sau khi trừ tiền dầu nhớt thì còn lời được bao nhiêu bát phở rồi nhấn ga nổ máy chở ngay không cần hỏi han",
      "Cứ nhận chở nhiệt tình, nếu bị tổ tuần tra phát hiện bắt giữ thì tài xế chỉ việc bỏ xe nhảy xuống mương rồi đổ hết mọi tội lỗi cho chủ hàng là xong"
    ],
    "correct": "Kiểm tra tính hợp lệ của Bảng kê lâm sản, hóa đơn kèm theo và đối chiếu cẩn thận với khối lượng, chủng loại gỗ thực tế xếp lên thùng xe chở hàng",
    "explanation": "Khoản 2 Điều 25 Nghị định số 146/2026/NĐ-CP: Chủ phương tiện vận tải có trách nhiệm kiểm tra hồ sơ lâm sản hợp pháp trước khi nhận chở hàng; nếu cố ý chở lâm sản không có hồ sơ hợp pháp thì bị xử phạt và tịch thu phương tiện."
  },
  {
    "question": "Xưởng mộc chế biến gỗ gây tiếng ồn và bụi bặm ảnh hưởng đến khu dân cư xung quanh thì phải làm gì?",
    "options": [
      "Lắp đặt hệ thống chụp hút bụi túi vải, làm tường cách âm và che chắn kín khu vực gia công chế biến để bảo vệ môi trường khu dân cư",
      "Cầm gậy gộc sang thách thức đe dọa các hộ hàng xóm xung quanh, cấm bà con không được có ý kiến phàn nàn về tiếng cưa máy của xưởng",
      "Tăng công suất cưa xẻ gỗ rầm rộ vào lúc nửa đêm từ 1 giờ đến 4 giờ sáng để ban ngày xưởng được hoàn toàn yên tĩnh nghỉ ngơi",
      "Mặc kệ không cần thực hiện bất kỳ biện pháp nào vì sản xuất kinh doanh kiếm tiền là quyền tự do bất khả xâm phạm của công dân"
    ],
    "correct": "Lắp đặt hệ thống chụp hút bụi túi vải, làm tường cách âm và che chắn kín khu vực gia công chế biến để bảo vệ môi trường khu dân cư",
    "explanation": "Luật Bảo vệ môi trường năm 2020 và Nghị định số 45/2022/NĐ-CP: Cơ sở chế biến gỗ bắt buộc phải có hệ thống xử lý bụi, giảm tiếng ồn đạt quy chuẩn kỹ thuật môi trường, không được làm ảnh hưởng đời sống khu dân cư."
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
      "Kiểm tra Bảng kê lâm sản hoặc giấy tờ chứng minh nguồn gốc lâm sản hợp pháp của số gỗ trước khi nhận cưa xẻ gia công cho khách",
      "Không cần kiểm tra bất kỳ giấy tờ gì, cứ thấy khách hàng trả tiền công cưa xẻ cao là sẵn sàng nhận làm ngay không cần thắc mắc",
      "Chỉ cần kiểm tra xem người thuê xẻ gỗ có mang theo căn cước công dân và sổ hộ khẩu bản gốc có công chứng chứng thực hay không",
      "Bắt người thuê cưa xẻ gỗ phải để lại chiếc xe máy làm vật thế chấp bảo lãnh thì xưởng mới đồng ý nổ máy cưa gia công khúc gỗ"
    ],
    "correct": "Kiểm tra Bảng kê lâm sản hoặc giấy tờ chứng minh nguồn gốc lâm sản hợp pháp của số gỗ trước khi nhận cưa xẻ gia công cho khách",
    "explanation": "Điều 23, Điều 25 Nghị định 146/2026/NĐ-CP và Thông tư 26/2022/TT-BNNPTNT: Chủ cơ sở xẻ gỗ gia công có trách nhiệm kiểm tra hồ sơ lâm sản hợp pháp trước khi cưa xẻ; nếu cưa xẻ gỗ lậu sẽ bị xử lý với vai trò đồng phạm."
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
    "explanation": "Khoản 1 Điều 69 Luật Lâm nghiệp số 16/2017/QH14 và Nghị định số 102/2020/NĐ-CP: Nhà nước nghiêm cấm xuất khẩu gỗ tròn, gỗ xẻ từ rừng tự nhiên trong nước; chỉ cho phép xuất khẩu sản phẩm gỗ đã qua chế biến tinh sâu đáp ứng VNTLAS."
  },
  {
    "question": "Cơ sở mua bán lâm sản khi có thay đổi địa điểm xưởng gỗ hoặc người đại diện thì phải làm gì?",
    "options": [
      "Thực hiện thủ tục thay đổi nội dung đăng ký kinh doanh và gửi thông báo bằng văn bản cho Cơ quan Kiểm lâm sở tại để quản lý",
      "Tự ý di chuyển toàn bộ máy móc nhà xưởng sang địa điểm mới vào ban đêm mà không cần thông báo cho bất kỳ cơ quan nào quản lý",
      "Chỉ cần đăng tải một bài viết thông báo dọn nhà xưởng lên tài khoản mạng xã hội cá nhân để bạn bè và khách quen vào bình luận",
      "Cứ âm thầm chuyển đi nơi khác hoạt động, bao giờ cơ quan chức năng tình cờ tìm thấy xưởng mới thì lúc đó mới làm hồ sơ sau"
    ],
    "correct": "Thực hiện thủ tục thay đổi nội dung đăng ký kinh doanh và gửi thông báo bằng văn bản cho Cơ quan Kiểm lâm sở tại để quản lý",
    "explanation": "Thông tư 26/2022/TT-BNNPTNT và Nghị định 01/2021/NĐ-CP: Khi thay đổi địa điểm sản xuất, ngành nghề hoặc người đại diện, cơ sở chế biến gỗ phải điều chỉnh đăng ký kinh doanh và thông báo Cơ quan Kiểm lâm sở tại."
  },
  {
    "question": "Hành vi sử dụng lao động chưa đủ tuổi hoặc không trang bị đồ bảo hộ lao động tại xưởng cưa bị xử lý thế nào?",
    "options": [
      "Bị xử phạt vi phạm hành chính rất nặng theo pháp luật lao động và an toàn vệ sinh lao động, có thể bị đình chỉ hoạt động xưởng",
      "Được khuyến khích áp dụng nhằm mục đích cắt giảm tối đa chi phí sản xuất và tạo công ăn việc làm sớm cho các em nhỏ phụ giúp gia đình",
      "Chỉ bị lập biên bản nhắc nhở nếu trong suốt cả năm làm việc không để xảy ra bất kỳ vụ tai nạn lao động nghiêm trọng nào tại xưởng",
      "Hoàn toàn không thuộc phạm vi điều chỉnh của bất kỳ văn bản pháp luật nào vì việc thuê mướn lao động là thỏa thuận dân sự tự nguyện"
    ],
    "correct": "Bị xử phạt vi phạm hành chính rất nặng theo pháp luật lao động và an toàn vệ sinh lao động, có thể bị đình chỉ hoạt động xưởng",
    "explanation": "Bộ luật Lao động năm 2019 và Luật An toàn, vệ sinh lao động: Xưởng cưa là nơi có nguy cơ tai nạn cao, nghiêm cấm sử dụng lao động chưa thành niên làm công việc nặng nhọc, nguy hiểm và bắt buộc trang bị đầy đủ bảo hộ lao động."
  },
  {
    "question": "Chủ xưởng gỗ có được tự ý đun nấu, thắp hương thờ cúng tùy tiện ngay sát bãi gỗ khô không?",
    "options": [
      "Nghiêm cấm tuyệt đối; nơi thờ cúng, đun nấu phải bố trí ở khu vực riêng biệt, an toàn, cách xa vật liệu dễ cháy và trang bị phương tiện chữa cháy",
      "Được thắp cả bó hương to nghi ngút khói ngay giữa đống mùn cưa khô khốc để cầu xin các vị thần tài phù hộ cho xưởng gỗ buôn may bán đắt quanh năm",
      "Được phép vừa nhóm than nướng cá mực vừa cưa gỗ xẻ ván cho không khí lao động thêm phần ấm cúng và dậy mùi thơm nức mũi lan tỏa khắp xưởng mộc",
      "Chỉ cấm đun nấu nếu nồi canh trên bếp bị sôi trào ra ngoài làm ướt sũng các tấm ván ép gỗ công nghiệp vừa mới nhập khẩu về kho chuẩn bị giao khách"
    ],
    "correct": "Nghiêm cấm tuyệt đối; nơi thờ cúng, đun nấu phải bố trí ở khu vực riêng biệt, an toàn, cách xa vật liệu dễ cháy và trang bị phương tiện chữa cháy",
    "explanation": "Khoản 1 Điều 16 Nghị định số 146/2026/NĐ-CP: Nội quy an toàn PCCC xưởng gỗ nghiêm cấm tuyệt đối việc đun nấu, thắp hương thờ cúng hoặc sử dụng ngọn lửa trần tùy tiện trong khu vực kho chứa gỗ và nhà xưởng cưa xẻ."
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
    "explanation": "Phụ lục I Thông tư số 26/2022/TT-BNNPTNT (hợp nhất TT 84/2025/TT-BNNMT): Đánh số hiệu đầu lóng bằng sơn khớp với Bảng kê lâm sản giúp kiểm soát chính xác từng lóng gỗ tròn, chống việc tráo đổi hoặc đưa gỗ lậu trà trộn vào lô hàng."
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
    "explanation": "Điều 26 Nghị định số 146/2026/NĐ-CP: Chủ xưởng gỗ mua gỗ rừng trồng có đầy đủ hóa đơn, Bảng kê lâm sản hợp pháp thì hoàn toàn yên tâm sản xuất, được pháp luật bảo hộ quyền sở hữu và lưu thông hàng hóa hợp pháp."
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
    "explanation": "Khoản 3 Điều 27 Nghị định số 146/2026/NĐ-CP và Điều 232 Bộ luật Hình sự: Hành vi quay vòng hồ sơ (dùng 1 bộ hồ sơ Bảng kê để chở nhiều chuyến gỗ lậu) là thủ đoạn gian lận nghiêm trọng, bị truy cứu trách nhiệm hình sự."
  },
  {
    "question": "Hành vi cất giấu gỗ lậu dưới thùng xe tải rồi phủ rau củ quả hoặc cát đá lên trên nhằm che mắt Kiểm lâm bị coi là gì?",
    "options": [
      "Tình tiết tăng nặng định khung xử phạt: có hành vi tinh vi ngụy trang, cất giấu tang vật vi phạm hành chính lâm nghiệp và bị tịch thu phương tiện",
      "Nghệ thuật ngụy trang tài tình xứng đáng đạt giải quán quân trong chương trình biểu diễn ảo thuật đường phố mang tầm cỡ quốc tế được truyền hình trực tiếp",
      "Sáng kiến giao thông kết hợp nông sản và lâm sản trên cùng một chuyến xe giúp tối ưu hóa không gian thùng xe và tiết kiệm chi phí xăng dầu vận chuyển",
      "Được miễn trừ trách nhiệm nếu tài xế phân bua rằng số gỗ giấu dưới đáy xe dùng để kê lót cho các giỏ rau củ quả bên trên không bị dập nát khi xóc"
    ],
    "correct": "Tình tiết tăng nặng định khung xử phạt: có hành vi tinh vi ngụy trang, cất giấu tang vật vi phạm hành chính lâm nghiệp và bị tịch thu phương tiện",
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
    "explanation": "Khoản 1 Điều 4 Nghị định số 06/2019/NĐ-CP và Điều 232 Bộ luật Hình sự: Gỗ Nhóm IA là loài nguy cấp nghiêm cấm khai thác sử dụng vì mục đích thương mại; mọi hành vi thu mua, tàng trữ, buôn bán đều bị xử lý hình sự rất nặng."
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
      "Lái xe cố tình tăng ga bỏ chạy, không chấp hành hiệu lệnh dừng xe của Kiểm lâm bị xử phạt hành chính về hành vi cản trở người thi hành công vụ và có thể bị truy cứu hình sự",
      "Được tuyên dương là tài xế có tay lái lụa dũng cảm, có kỹ năng biểu diễn drift xe tải điêu luyện trên đường đèo dốc quanh co",
      "Chỉ cần gọi điện cho mẹ đẻ ra bảo lãnh và cam kết từ mai đi qua trạm Kiểm lâm sẽ bấm còi chào thật to là được bỏ qua",
      "Lái xe được quyền yêu cầu cơ quan Kiểm lâm thanh toán tiền xăng dầu đã hao phí trong suốt quá trình rượt đuổi tốc độ cao trên đường"
    ],
    "correct": "Lái xe cố tình tăng ga bỏ chạy, không chấp hành hiệu lệnh dừng xe của Kiểm lâm bị xử phạt hành chính về hành vi cản trở người thi hành công vụ và có thể bị truy cứu hình sự",
    "explanation": "Khoản 3 Điều 29 Nghị định số 146/2026/NĐ-CP: Lái xe cố tình tăng ga bỏ chạy, không chấp hành hiệu lệnh dừng xe của Kiểm lâm bị xử phạt hành chính về hành vi cản trở người thi hành công vụ và có thể bị truy cứu hình sự."
  },
  {
    "question": "Hành vi sử dụng con dấu giả hoặc làm giả Bảng kê lâm sản có xác nhận của Kiểm lâm bị xử lý thế nào?",
    "options": [
      "Bị khởi tố hình sự về tội làm giả con dấu, tài liệu của cơ quan, tổ chức và bị tịch thu toàn bộ số gỗ vi phạm",
      "Chỉ bị lập biên bản nhắc nhở và yêu cầu mua lại bộ hồ sơ Bảng kê lâm sản mới từ cơ quan Kiểm lâm sở tại quản lý",
      "Chỉ bị xử phạt vi phạm hành chính mức tiền 1.000.000 đồng về hành vi tẩy xóa giấy tờ hành chính thông thường",
      "Được cơ quan chức năng tạo điều kiện cho phép đóng phạt bổ sung bằng tiền mặt để tiếp tục vận chuyển lô hàng đi tiêu thụ"
    ],
    "correct": "Bị khởi tố hình sự về tội làm giả con dấu, tài liệu của cơ quan, tổ chức và bị tịch thu toàn bộ số gỗ vi phạm",
    "explanation": "Hành vi làm giả con dấu của Kiểm lâm hoặc làm giả Bảng kê lâm sản là tội phạm hình sự rất nghiêm trọng theo Điều 341 Bộ luật Hình sự, đối tượng vi phạm bị phạt tù từ 02 đến 07 năm."
  },
  {
    "question": "Chủ xưởng gỗ cố tình cưa xẻ gỗ vào ban đêm để che giấu hành vi chế biến gỗ lậu thì bị đánh giá thế nào?",
    "options": [
      "Là tình tiết tăng nặng: cố tình vi phạm có tổ chức, lén lút che giấu hành vi vi phạm pháp luật lâm nghiệp, sẽ bị xử phạt tiền ở khung kịch trần",
      "Tấm gương sáng ngời về tinh thần tăng ca chăm chỉ, làm việc quên ăn quên ngủ thâu đêm suốt sáng để đóng góp cho sự phát triển phồn vinh của xã hội",
      "Cưa xẻ ban đêm để những súc gỗ tròn được hít thở khí trời mát mẻ thanh tịnh và không bao giờ bị cong vênh nứt nẻ dưới ánh nắng gay gắt của ban ngày",
      "Chỉ bị xem xét xử phạt nếu tiếng cưa máy gầm rú xé toạc màn đêm làm đánh thức giấc ngủ say nồng của đàn thú cưng nhà hàng xóm liền kề xưởng gỗ"
    ],
    "correct": "Là tình tiết tăng nặng: cố tình vi phạm có tổ chức, lén lút che giấu hành vi vi phạm pháp luật lâm nghiệp, sẽ bị xử phạt tiền ở khung kịch trần",
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
    "explanation": "Điều 26 Nghị định số 146/2026/NĐ-CP: Giao dịch gỗ trôi nổi qua mạng không hóa đơn, không bảng kê tiềm ẩn rủi ro rất cao về mua phải gỗ lậu, người mua sẽ bị tịch thu toàn bộ gỗ và bị xử phạt nặng về hành vi tàng trữ lâm sản trái phép."
  },
  {
    "question": "Chủ cơ sở chế biến cho người khác gửi gỗ lậu trong xưởng của mình thì có bị liên đới trách nhiệm không?",
    "options": [
      "Bị xử lý nghiêm về hành vi tàng trữ lâm sản trái pháp luật với vai trò đồng phạm chứa chấp tang vật vi phạm của cơ quan chức năng",
      "Hoàn toàn không phải chịu bất kỳ trách nhiệm pháp lý nào vì số gỗ vi phạm là do người khác mang đến gửi nhờ chứ không phải của xưởng",
      "Được pháp luật bảo hộ và được quyền yêu cầu cơ quan Kiểm lâm thanh toán đầy đủ tiền công trông giữ kho bãi theo giá thị trường",
      "Chỉ bị xem xét xử phạt nếu người gửi gỗ quên không thanh toán tiền thuê kho bãi cho chủ xưởng cưa vào đúng ngày mùng một đầu tháng"
    ],
    "correct": "Bị xử lý nghiêm về hành vi tàng trữ lâm sản trái pháp luật với vai trò đồng phạm chứa chấp tang vật vi phạm của cơ quan chức năng",
    "explanation": "Điều 23 Nghị định 146/2026/NĐ-CP và Điều 232 Bộ luật Hình sự: Cho gửi, chứa chấp lâm sản bất hợp pháp trong khuôn viên kho xưởng của mình cấu thành hành vi tàng trữ lâm sản trái pháp luật và bị xử lý nghiêm như đối tượng vi phạm."
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
      "Từ 20 m3 trở lên (gỗ tròn rừng tự nhiên) hoặc từ 40 m3 (rừng trồng) đã đủ yếu tố cấu thành tội phạm hình sự rất nghiêm trọng",
      "Từ 50 m3 trở lên (gỗ tròn rừng tự nhiên) hoặc từ 100 m3 (rừng trồng) mới đủ định lượng cấu thành tội phạm hình sự",
      "Phải từ 200 m3 gỗ trở lên bất kể nguồn gốc từ rừng tự nhiên hay rừng trồng mới bị xử lý trách nhiệm hình sự",
      "Chỉ bị xử phạt tiền vi phạm hành chính với mức phạt tối đa 500 triệu đồng và không bao giờ bị truy cứu hình sự"
    ],
    "correct": "Từ 20 m3 trở lên (gỗ tròn rừng tự nhiên) hoặc từ 40 m3 (rừng trồng) đã đủ yếu tố cấu thành tội phạm hình sự rất nghiêm trọng",
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
    "explanation": "Nghị định số 102/2020/NĐ-CP (VNTLAS) và Thông tư số 26/2025/TT-BNNMT: Bài học cốt lõi cho các cơ sở chế biến là tuân thủ nghiêm ngặt trách nhiệm giải trình nguồn gốc gỗ hợp pháp (DDS), lưu trữ hồ sơ đầy đủ để phát triển bền vững."
  },
  {
    "question": "Pháp luật lâm nghiệp hiện hành có quy định một bộ hồ sơ thủ tục riêng biệt mang tên 'Hồ sơ cây cổ thụ' hay 'Hồ sơ cây có tuổi thọ cao' không?",
    "options": [
      "Không quy định riêng đối với 'cây cổ thụ'; việc chứng minh nguồn gốc căn cứ vào nguồn gốc hình thành thực tế của lâm sản",
      "Có quy định một bộ thủ tục đặc biệt riêng do Bộ Xây dựng phối hợp với Bộ Nông nghiệp ban hành áp dụng thống nhất",
      "Mọi cây có tuổi thọ trên 50 năm đều bắt buộc phải đăng ký cây di sản quốc gia mới đủ điều kiện mua bán chuyển nhượng",
      "Chỉ cần giấy xác nhận của Hội Sinh vật cảnh địa phương là được coi là bộ hồ sơ nguồn gốc cây cổ thụ hợp pháp"
    ],
    "correct": "Không quy định riêng đối với 'cây cổ thụ'; việc chứng minh nguồn gốc căn cứ vào nguồn gốc hình thành thực tế của lâm sản",
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
      "Bảng kê lâm sản do chủ cây lập kèm tài liệu chứng minh quyền sử dụng đất hoặc nguồn gốc hợp pháp của cây phân tán",
      "Giấy phép khai thác lâm sản do Chi cục Kiểm lâm cấp tỉnh trực tiếp ký phê duyệt kèm theo bản đồ đo vẽ hiện trạng cây",
      "Hợp đồng mua bán viết tay có chữ ký của Trưởng thôn bản và giấy nộp tiền thuế sử dụng đất nông nghiệp hàng năm",
      "Không cần bất kỳ hồ sơ tài liệu nào vì cây nằm ngoài quy hoạch lâm nghiệp thuộc quyền sở hữu tự do của người dân"
    ],
    "correct": "Bảng kê lâm sản do chủ cây lập kèm tài liệu chứng minh quyền sử dụng đất hoặc nguồn gốc hợp pháp của cây phân tán",
    "explanation": "Khoản 3 Điều 8 Thông tư 26/2025/TT-BNNMT quy định hồ sơ lâm sản đối với cây phân tán, cây khai thác từ đất ngoài quy hoạch lâm nghiệp của tổ chức, cá nhân."
  },
  {
    "question": "Cây cảnh cổ thụ mua bán, chuyển nhượng qua nhiều chủ sở hữu trong nước thì hồ sơ nguồn gốc hợp pháp được xác lập như thế nào?",
    "options": [
      "Được kế thừa từ hồ sơ lâm sản của chủ sở hữu trước đó, gồm Bảng kê lâm sản và các chứng từ mua bán, hóa đơn hợp pháp kèm theo",
      "Tự động mất hiệu lực pháp lý và người mua sau bắt buộc phải làm lại thủ tục đăng ký mới từ Ủy ban nhân dân cấp tỉnh",
      "Chỉ cần một bản photocopy căn cước công dân của người chủ đầu tiên đào cây ra khỏi đất và giấy cam đoan không tranh chấp",
      "Mỗi lần chuyển nhượng sang chủ mới bắt buộc phải đem cây lên trồng lại vào rừng tự nhiên trong thời hạn tối thiểu 03 tháng"
    ],
    "correct": "Được kế thừa từ hồ sơ lâm sản của chủ sở hữu trước đó, gồm Bảng kê lâm sản và các chứng từ mua bán, hóa đơn hợp pháp kèm theo",
    "explanation": "Hồ sơ lâm sản có tính kế thừa: Người mua sau kế thừa hồ sơ hợp pháp của chủ trước kèm theo Bảng kê lâm sản và chứng từ chuyển nhượng theo Điều 8 TT 26/2025/TT-BNNMT."
  },
  {
    "question": "Trường hợp cây bứng dưỡng thuộc Danh mục loài thực vật rừng nguy cấp, quý, hiếm hoặc Phụ lục CITES (bất kể được bứng từ đâu), hồ sơ nguồn gốc bắt buộc theo quy định nào?",
    "options": [
      "Bảng kê lâm sản bắt buộc phải có xác nhận của Cơ quan Kiểm lâm sở tại kèm Phương án khai thác theo quy định",
      "Chỉ cần bản cam kết bằng văn bản giữa người đào cây và người mua cây về nguồn gốc cây trồng trong vườn nhà",
      "Không bắt buộc phải có xác nhận của Kiểm lâm nếu cây cảnh quý hiếm đã được trồng sống ổn định trong chậu sành",
      "Được phép tự do vận chuyển lưu thông vào ban đêm để thuận tiện cho việc tránh kiểm tra thủ tục hành chính"
    ],
    "correct": "Bảng kê lâm sản bắt buộc phải có xác nhận của Cơ quan Kiểm lâm sở tại kèm Phương án khai thác theo quy định",
    "explanation": "Khoản 4 Điều 8 Thông tư 26/2025/TT-BNNMT: Loài nguy cấp quý hiếm (IA, IIA, CITES) bất kể nguồn gốc từ đâu khi khai thác, lưu thông bắt buộc phải có Bảng kê lâm sản xác nhận."
  },
  {
    "question": "Đối với cây cảnh, cây cổ thụ có nguồn gốc nhập khẩu từ nước ngoài lưu thông trong nước, hồ sơ chứng minh nguồn gốc hợp pháp căn cứ vào đâu?",
    "options": [
      "Hồ sơ nhập khẩu hợp pháp (Tờ khai hải quan thông quan, Giấy phép CITES nếu có) và Bảng kê lâm sản khi lưu thông trong nước",
      "Chỉ cần nhãn mác chữ nước ngoài dán trên thân cây và giấy chứng nhận xuất xưởng của đơn vị sản xuất cây giống quốc tế",
      "Phiếu ủy nhiệm chi chuyển tiền thanh toán quốc tế qua tài khoản ngân hàng thương mại của người đại diện doanh nghiệp",
      "Không cần giấy tờ chứng minh nguồn gốc nếu cây cảnh nhập khẩu đã được chăm sóc trồng sống tại Việt Nam trên 01 năm"
    ],
    "correct": "Hồ sơ nhập khẩu hợp pháp (Tờ khai hải quan thông quan, Giấy phép CITES nếu có) và Bảng kê lâm sản khi lưu thông trong nước",
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
      "Phương án khai thác lập theo Mẫu số 08 gửi kèm Đơn đề nghị xác nhận Bảng kê lâm sản đến cơ quan Kiểm lâm sở tại",
      "Bản vẽ thiết kế kỹ thuật công trình xây dựng nhà ở dân dụng được Ủy ban nhân dân cấp huyện phê duyệt cấp phép",
      "Hợp đồng thuê khoán nhân công bốc vác thời vụ có chứng thực của văn phòng công chứng tư nhân tại địa phương",
      "Phương án sản xuất nông nghiệp ứng dụng công nghệ cao được Hội Nông dân cấp tỉnh cấp giấy chứng nhận mô hình"
    ],
    "correct": "Phương án khai thác lập theo Mẫu số 08 gửi kèm Đơn đề nghị xác nhận Bảng kê lâm sản đến cơ quan Kiểm lâm sở tại",
    "explanation": "Khoản 6 Điều 5 Thông tư 26/2025/TT-BNNMT: Đối với hộ gia đình, cá nhân, Phương án khai thác lập theo Mẫu số 08 Phụ lục II gửi kèm Đơn đề nghị xác nhận Mẫu 03."
  },
  {
    "question": "Tình huống: Doanh nghiệp X trúng gói thầu giải tỏa mặt bằng dự án hồ chứa nước, trong lòng hồ có 5 cây đa cổ thụ. Doanh nghiệp X bứng 5 cây đa này chở đi bán cho khu du lịch thì hồ sơ cần những gì?",
    "options": [
      "Văn bản xử lý cây giải phóng mặt bằng của cấp có thẩm quyền phê duyệt dự án kèm Bảng kê lâm sản khi lưu thông",
      "Chỉ cần hợp đồng trúng thầu thi công xây lắp công trình xây dựng hồ chứa nước của nhà thầu thi công chính",
      "Chỉ cần biên lai nộp tiền thuế tài nguyên khoáng sản tại kho bạc nhà nước cấp huyện nơi triển khai dự án",
      "Không cần chuẩn bị giấy tờ thủ tục gì vì toàn bộ cây nằm trong lòng hồ chứa nước sắp bị ngập úng tự nhiên"
    ],
    "correct": "Văn bản xử lý cây giải phóng mặt bằng của cấp có thẩm quyền phê duyệt dự án kèm Bảng kê lâm sản khi lưu thông",
    "explanation": "Khoản 5 Điều 6 Thông tư số 26/2025/TT-BNNMT: Cây di dời từ dự án, công trình bắt buộc phải có văn bản hoặc quyết định xử lý di dời của cấp có thẩm quyền phê duyệt dự án kèm Bảng kê lâm sản khi lưu thông."
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
      "Lập Sổ theo Mẫu số 04, cập nhật đầy đủ, kịp thời tình hình nhập xuất và xuất trình khi cơ quan có thẩm quyền kiểm tra",
      "Ghi chép vào sổ tay cá nhân và chỉ xuất trình khi có yêu cầu bằng văn bản của Tòa án nhân dân trong các vụ tranh chấp",
      "Không phải lập sổ theo dõi nếu cơ sở đã nộp thuế khoán sản xuất kinh doanh hàng tháng đầy đủ cho cơ quan thuế",
      "Chỉ bắt buộc phải lập sổ theo dõi khi cơ sở chế biến có quy mô vốn đầu tư đăng ký kinh doanh từ 50 tỷ đồng trở lên"
    ],
    "correct": "Lập Sổ theo Mẫu số 04, cập nhật đầy đủ, kịp thời tình hình nhập xuất và xuất trình khi cơ quan có thẩm quyền kiểm tra",
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
      "Bị xử phạt vi phạm hành chính rất nặng hoặc bị truy cứu trách nhiệm hình sự về tội hủy hoại rừng hoặc tội khai thác rừng",
      "Được coi là hoạt động khai hoang tôn tạo cảnh quan thiên nhiên và được chính quyền địa phương biểu dương khen thưởng",
      "Chỉ bị phạt tiền vi phạm hành chính 200.000 đồng nếu cây cảnh sau khi mang về trồng tại khu nghỉ dưỡng vẫn sống tốt",
      "Được cơ quan Kiểm lâm cấp giấy chứng nhận nguồn gốc hợp pháp nếu chủ cơ sở nộp đơn tự thú trong thời hạn 30 ngày"
    ],
    "correct": "Bị xử phạt vi phạm hành chính rất nặng hoặc bị truy cứu trách nhiệm hình sự về tội hủy hoại rừng hoặc tội khai thác rừng",
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
      "Hóa đơn bán hàng hợp pháp kèm Bảng kê lâm sản do chủ cơ sở tự lập khi vận chuyển sản phẩm gỗ hoàn chỉnh",
      "Chỉ cần bản vẽ thiết kế tác phẩm mỹ nghệ điêu khắc do tác giả tự tay phác thảo trên giấy khổ lớn",
      "Giấy chứng nhận danh hiệu nghệ nhân làng nghề truyền thống do Hiệp hội Làng nghề Việt Nam cấp tặng",
      "Không cần bất kỳ giấy tờ hồ sơ nào vì gỗ lũa đã được đục đẽo chế tác thành tác phẩm nghệ thuật hoàn chỉnh"
    ],
    "correct": "Hóa đơn bán hàng hợp pháp kèm Bảng kê lâm sản do chủ cơ sở tự lập khi vận chuyển sản phẩm gỗ hoàn chỉnh",
    "explanation": "Sản phẩm gỗ hoàn chỉnh (tượng gỗ mỹ nghệ) lưu thông nội địa cần hóa đơn hợp pháp kèm Bảng kê lâm sản do chủ hàng tự lập theo Thông tư 26/2025/TT-BNNMT."
  }
];
