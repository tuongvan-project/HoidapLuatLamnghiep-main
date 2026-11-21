// ============================================================================
// BỘ CÂU HỎI TRẮC NGHIỆM ĐÃ RÀ SOÁT, ĐỐI CHIẾU VÀ CHUẨN HÓA PHÁP LÝ (BẢN V2 - NÂNG CAO ĐỘ KHÓ)
// Gói dữ liệu: Quyền, nghĩa vụ chủ rừng và chính sách lâm nghiệp (130 câu)
// Đã điều chỉnh: Tăng độ khó bằng cách thay thế 1 phương án sai lộ liễu thành phương án nhiễu tinh vi (plausible distractor)
// Đã rà soát đối chiếu nguyên văn QPPL ngày 17/11/2026
// ============================================================================

const question_ChuRung = [
    {
        "id": "ChuRung_001",
        "question": "Một khu đất trồng cây lâm nghiệp trên đồi, núi đất hoặc đồng bằng được xác định đạt tiêu chí rừng trồng khi đồng thời đáp ứng đủ cả 3 điều kiện nào sau đây?",
        "options": [
            "Độ tàn che từ 0,1 trở lên; Diện tích liền vùng từ 0,3 ha trở lên; Chiều cao trung bình của cây rừng từ 5,0 m trở lên",
            "Độ tàn che từ 0,3 trở lên; Diện tích liền vùng từ 0,5 ha trở lên; Chiều cao cây bất kỳ không phân biệt",
            "Độ tàn che từ 0,05 trở lên; Diện tích đất từ 1,0 ha trở lên; Cây trồng đã sống được trên 02 năm",
            "Độ tàn che từ 0,2 trở lên; Diện tích liền vùng từ 0,5 ha trở lên; Chiều cao cây trung bình từ 3,0 m trở lên đối với cây gỗ bản địa"
        ],
        "correct": "Độ tàn che từ 0,1 trở lên; Diện tích liền vùng từ 0,3 ha trở lên; Chiều cao trung bình của cây rừng từ 5,0 m trở lên",
        "explanation": "Căn cứ Điều 5 Nghị định số 156/2018/NĐ-CP (hợp nhất tại Văn bản hợp nhất số 13/VBHN-BNNMT): Tiêu chí rừng trồng trên đồi, núi đất và đồng bằng (và trên đất ngập phèn) gồm 3 điều kiện: độ tàn che của cây rừng trồng từ 0,1 trở lên; diện tích liền vùng từ 0,3 ha trở lên; chiều cao trung bình của cây rừng từ 5,0 m trở lên."
    },
    {
        "id": "ChuRung_002",
        "question": "Theo Điều 19 Thông tư số 16/2025/TT-BNNMT, chủ rừng nhóm I (hộ gia đình, cá nhân, cộng đồng dân cư) có trách nhiệm báo cáo biến động diện tích rừng như thế nào?",
        "options": [
            "Báo cáo Kiểm lâm làm việc tại địa bàn trong thời hạn 15 ngày kể từ ngày có biến động về diện tích rừng",
            "Chỉ cần thông báo bằng miệng cho Trưởng thôn vào dịp họp thôn tổng kết cuối năm",
            "Thông báo bằng văn bản cho Sở Nông nghiệp và Môi trường cấp tỉnh trong thời hạn 30 ngày kể từ ngày có biến động",
            "Không phải thông báo nếu diện tích rừng bị biến động dưới 01 héc-ta"
        ],
        "correct": "Báo cáo Kiểm lâm làm việc tại địa bàn trong thời hạn 15 ngày kể từ ngày có biến động về diện tích rừng",
        "explanation": "Căn cứ Điểm a Khoản 4 Điều 19 Thông tư số 16/2025/TT-BNNMT: Trong thời hạn 15 ngày kể từ ngày có biến động về diện tích rừng, chủ rừng nhóm I có trách nhiệm báo cáo Kiểm lâm làm việc tại địa bàn về biến động diện tích rừng được giao, được thuê để kiểm tra, xác minh và cập nhật diễn biến rừng."
    },
    {
        "id": "ChuRung_003",
        "question": "Khi đốt nương, rẫy, đốt thực bì chuẩn bị đất trồng rừng và giảm vật liệu cháy trong rừng, người sử dụng lửa phải tuân thủ quy định an toàn PCCCR nào sau đây?",
        "options": [
            "Không đốt vào ngày dự báo cháy rừng cấp IV, cấp V; đốt lúc gió nhẹ trước 9 giờ sáng và sau 16 giờ chiều; báo trước cho trưởng thôn, bản, tổ đội PCCCR; bố trí người canh gác, đủ dụng cụ và dập tắt hết tàn lửa",
            "Đốt vào buổi trưa nắng gắt để thực bì cháy nhanh và triệt để; không cần thông báo nếu nương đã có bờ đá bao quanh",
            "Đốt bất kỳ lúc nào trong ngày miễn là có mặt từ hai người trở lên trông coi và báo cho chủ rừng liền kề",
            "Chỉ cần xin phép bằng miệng các hộ dân có nương liền kề mà không cần bố trí người canh gác hay dụng cụ dập lửa"
        ],
        "correct": "Không đốt vào ngày dự báo cháy rừng cấp IV, cấp V; đốt lúc gió nhẹ trước 9 giờ sáng và sau 16 giờ chiều; báo trước cho trưởng thôn, bản, tổ đội PCCCR; bố trí người canh gác, đủ dụng cụ và dập tắt hết tàn lửa",
        "explanation": "Căn cứ Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT) và Điểm i Khoản 2 Điều 19 Nghị định số 146/2026/NĐ-CP: Không đốt vào ngày có dự báo nguy cơ cháy rừng ở cấp IV, cấp V; trong ngày đốt lúc gió nhẹ, vào trước 9 giờ buổi sáng và sau 16 giờ buổi chiều; trước khi đốt phải thông báo với trưởng thôn, bản, tổ đội PCCCR, bố trí người canh gác, đủ dụng cụ dập lửa và dập tắt hết tàn lửa sau khi đốt. Vi phạm bị phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng."
    },
    {
        "id": "ChuRung_004",
        "question": "Hộ gia đình có rừng phòng hộ là rừng trồng tự đầu tư, khi khai thác chính theo phương thức khai thác chọn hoặc tỉa thưa cây trồng chính phải tuân thủ điều kiện nào sau đây?",
        "options": [
            "Lập phương án khai thác trình Chủ tịch UBND cấp xã phê duyệt, gửi Kiểm lâm sở tại giám sát; khai thác chọn cường độ mỗi lần không quá 20% trữ lượng, sau khai thác bảo đảm độ tàn che tối thiểu 0,6",
            "Được phép tự chặt trắng toàn bộ diện tích rừng phòng hộ mà không cần lập phương án trình phê duyệt",
            "Được khai thác chọn cây trồng chính với cường độ đến 50% trữ lượng, miễn là giữ độ tàn che không dưới 0,4",
            "Phải để rừng nguyên vẹn vĩnh viễn, nghiêm cấm khai thác tỉa thưa hay khai thác chọn dù tự bỏ vốn trồng"
        ],
        "correct": "Lập phương án khai thác trình Chủ tịch UBND cấp xã phê duyệt, gửi Kiểm lâm sở tại giám sát; khai thác chọn cường độ mỗi lần không quá 20% trữ lượng, sau khai thác bảo đảm độ tàn che tối thiểu 0,6",
        "explanation": "Căn cứ Khoản 3 Điều 55 Luật Lâm nghiệp, Điểm c Khoản 3 Điều 20 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT) và Điểm c Khoản 2, Điểm c Khoản 3, Điểm a Khoản 9 Điều 6 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Khai thác tỉa thưa cây trồng chính thực hiện theo quy định về các biện pháp lâm sinh; khai thác chọn cây trồng chính với cường độ mỗi lần không quá 20% trữ lượng trong lô, sau khai thác bảo đảm độ tàn che tối thiểu 0,6; hộ gia đình phải lập phương án khai thác trình Chủ tịch UBND cấp xã phê duyệt và gửi cơ quan Kiểm lâm sở tại giám sát."
    },
    {
        "id": "ChuRung_005",
        "question": "Theo Nghị định số 146/2026/NĐ-CP, khi xử phạt vi phạm hành chính đối với hành vi vi phạm quy định PCCCR gây cháy rừng tự nhiên thì mức phạt tiền được áp dụng như thế nào so với rừng trồng?",
        "options": [
            "Áp dụng mức phạt tiền bằng hai lần đối với hành vi tương ứng gây cháy rừng trồng",
            "Áp dụng mức phạt tiền bằng với mức phạt đối với rừng trồng cùng diện tích",
            "Chỉ bị phạt cảnh cáo và buộc trồng lại rừng nếu diện tích cháy dưới 01 ha",
            "Chỉ áp dụng biện pháp buộc trồng lại rừng mà không bị phạt tiền"
        ],
        "correct": "Áp dụng mức phạt tiền bằng hai lần đối với hành vi tương ứng gây cháy rừng trồng",
        "explanation": "Căn cứ Khoản 11 Điều 20 Nghị định số 146/2026/NĐ-CP: Mức phạt hành vi vi phạm các quy định pháp luật về PCCCR gây cháy rừng sản xuất, rừng phòng hộ, rừng đặc dụng tại các khoản 1 đến 8 Điều 20 áp dụng đối với rừng trồng; trường hợp gây cháy rừng tự nhiên thì áp dụng mức phạt bằng hai lần đối với hành vi tương ứng, đồng thời buộc khắc phục ô nhiễm môi trường, dịch bệnh và buộc trồng lại rừng."
    },
    {
        "id": "ChuRung_006",
        "question": "Hành vi đốt, phá rừng trái phép hoặc hủy hoại rừng sản xuất đến ngưỡng diện tích tối thiểu bao nhiêu thì bị truy cứu trách nhiệm hình sự theo Khoản 1 Điều 243 Bộ luật Hình sự?",
        "options": [
            "Từ 5.000 m² đến dưới 10.000 m², hoặc dưới 5.000 m² nhưng đã bị xử phạt VPHC về hành vi tại Điều 243 hoặc đã bị kết án về tội này, chưa được xóa án tích mà còn vi phạm",
            "Diện tích từ 1.000 m² trở lên trong mọi trường hợp",
            "Diện tích từ 3.000 m² (0,3 ha) đối với rừng gỗ lớn và từ 5.000 m² đối với rừng tre nứa",
            "Chỉ bị xử lý hình sự khi chặt hạ các cây gỗ có đường kính trên 01 mét"
        ],
        "correct": "Từ 5.000 m² đến dưới 10.000 m², hoặc dưới 5.000 m² nhưng đã bị xử phạt VPHC về hành vi tại Điều 243 hoặc đã bị kết án về tội này, chưa được xóa án tích mà còn vi phạm",
        "explanation": "Căn cứ Điểm b và Điểm g Khoản 1 Điều 243 Bộ luật Hình sự: Hành vi đốt, phá rừng trái phép hoặc có hành vi khác hủy hoại rừng sản xuất có diện tích từ 5.000 m² đến dưới 10.000 m² (hoặc dưới mức này nhưng đã bị xử phạt vi phạm hành chính về một trong các hành vi quy định tại Điều này hoặc đã bị kết án về tội này, chưa được xóa án tích mà còn vi phạm) bị phạt tiền từ 50.000.000 đồng đến 500.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm."
    },
    {
        "id": "ChuRung_007",
        "question": "Đối với rừng đặc dụng, hành vi đốt, phá rừng trái phép với diện tích từ bao nhiêu trở lên thì cấu thành tội hủy hoại rừng theo Điểm d Khoản 1 Điều 243 Bộ luật Hình sự?",
        "options": [
            "Diện tích từ 1.000 m² trở lên (khung cơ bản từ 1.000 m² đến dưới 3.000 m²)",
            "Diện tích từ 5.000 m² trở lên mới bị truy cứu hình sự",
            "Diện tích từ 2.000 m² trở lên đối với phân khu bảo vệ nghiêm ngặt",
            "Rừng đặc dụng không quy định định lượng diện tích hình sự mà chỉ phạt tiền"
        ],
        "correct": "Diện tích từ 1.000 m² trở lên (khung cơ bản từ 1.000 m² đến dưới 3.000 m²)",
        "explanation": "Căn cứ Điểm d Khoản 1 Điều 243 Bộ luật Hình sự: Hành vi đốt, phá rừng trái phép hoặc hủy hoại rừng đặc dụng có diện tích từ 1.000 m² đến dưới 3.000 m² đã cấu thành Tội hủy hoại rừng, bị phạt tiền từ 50.000.000 đồng đến 500.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm."
    },
    {
        "id": "ChuRung_008",
        "question": "Cá nhân tự ý chặt, phá, san ủi rừng thuộc sở hữu toàn dân để trồng cây nông nghiệp khi chưa được phép của cơ quan có thẩm quyền (chưa đến mức truy cứu TNHS) bị xử phạt thế nào theo Điều 23 Nghị định 146/2026/NĐ-CP?",
        "options": [
            "Bị phạt tiền từ 3.000.000 đồng đến tối đa 220.000.000 đồng đối với rừng trồng (hoặc đến 440.000.000 đồng đối với rừng tự nhiên), tịch thu tang vật/phương tiện, buộc khôi phục tình trạng ban đầu và trồng lại rừng",
            "Chỉ bị nhắc nhở và được cơ quan nhà nước hợp thức hóa cấp giấy chứng nhận sang đất nông nghiệp",
            "Chỉ bị xử phạt vi phạm hành chính theo pháp luật về đất đai mà không bị xử phạt về hành vi phá rừng",
            "Chỉ bị phạt tiền mức cố định 200.000 đồng cho mỗi vụ việc vi phạm"
        ],
        "correct": "Bị phạt tiền từ 3.000.000 đồng đến tối đa 220.000.000 đồng đối với rừng trồng (hoặc đến 440.000.000 đồng đối với rừng tự nhiên), tịch thu tang vật/phương tiện, buộc khôi phục tình trạng ban đầu và trồng lại rừng",
        "explanation": "Căn cứ Khoản 1, Khoản 10, Khoản 13, Khoản 14 và Khoản 15 Điều 23 Nghị định số 146/2026/NĐ-CP: Hành vi chặt, đốt, phá, san ủi gây thiệt hại đến rừng bị xử phạt hành vi Phá rừng với khung phạt tiền cho cá nhân từ 3.000.000 đồng đến 220.000.000 đồng đối với rừng trồng (rừng tự nhiên áp dụng mức phạt bằng hai lần, đến 440.000.000 đồng); kèm tịch thu tang vật, phương tiện và buộc khôi phục lại tình trạng ban đầu, buộc trồng lại rừng."
    },
    {
        "id": "ChuRung_009",
        "question": "Khi khai thác gỗ rừng sản xuất là rừng trồng do hộ gia đình tự đầu tư, thủ tục lập phương án khai thác và Bảng kê lâm sản thực hiện thế nào?",
        "options": [
            "Chủ rừng tự xây dựng phương án khai thác (không phải trình phê duyệt), gửi Kiểm lâm sở tại trước khi khai thác để giám sát; trong 05 ngày làm việc sau khi hoàn thành khai thác gửi bản chính Bảng kê lâm sản đến Kiểm lâm sở tại để theo dõi",
            "Bắt buộc phải làm đơn xin phép và được Chủ tịch UBND tỉnh phê duyệt mới được chặt cây",
            "Phải trình phương án khai thác lên UBND cấp xã phê duyệt trước khi chặt hạ ít nhất 05 ngày làm việc",
            "Bắt buộc phải bán toàn bộ sản lượng gỗ khai thác cho doanh nghiệp lâm nghiệp nhà nước"
        ],
        "correct": "Chủ rừng tự xây dựng phương án khai thác (không phải trình phê duyệt), gửi Kiểm lâm sở tại trước khi khai thác để giám sát; trong 05 ngày làm việc sau khi hoàn thành khai thác gửi bản chính Bảng kê lâm sản đến Kiểm lâm sở tại để theo dõi",
        "explanation": "Căn cứ Khoản 1 Điều 59 Luật Lâm nghiệp và Điểm c Khoản 1, Khoản 7, Khoản 9 Điều 6 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Chủ rừng tự quyết định khai thác và tự xây dựng phương án khai thác (theo Mẫu số 08 Phụ lục II hoặc biểu mẫu sửa đổi tại Thông tư 84/2025/TT-BNNMT), không phải trình phê duyệt; trước khi khai thác gửi 01 bản chính phương án đến Kiểm lâm sở tại để giám sát và trong thời hạn 05 ngày làm việc kể từ ngày hoàn thành khai thác gửi bản chính Bảng kê lâm sản đến Kiểm lâm sở tại để theo dõi."
    },
    {
        "id": "ChuRung_010",
        "question": "Hộ gia đình có được phép chăn thả gia súc, vật nuôi trên diện tích rừng phòng hộ mới trồng, đang trong thời kỳ chăm sóc không?",
        "options": [
            "Không được phép; hành vi chăn, dắt, thả vật nuôi trên diện tích mới trồng rừng, đang trong thời kỳ chăm sóc rừng phòng hộ bị xử phạt tiền và buộc đưa vật nuôi ra khỏi rừng",
            "Được phép thả rông không giới hạn số lượng gia súc ở mọi vị trí trong rừng phòng hộ",
            "Được phép chặt hạ cây rừng phòng hộ để làm hàng rào nhốt đàn trâu bò",
            "Được phép chăn thả nếu có sự đồng ý bằng miệng của Trưởng thôn nơi có rừng"
        ],
        "correct": "Không được phép; hành vi chăn, dắt, thả vật nuôi trên diện tích mới trồng rừng, đang trong thời kỳ chăm sóc rừng phòng hộ bị xử phạt tiền và buộc đưa vật nuôi ra khỏi rừng",
        "explanation": "Căn cứ Khoản 2 Điều 9 Luật Lâm nghiệp, Điểm b Khoản 1 Điều 19 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT) và Điểm e Khoản 2, Điểm b Khoản 9 Điều 19 Nghị định số 146/2026/NĐ-CP: Không chăn thả gia súc, gia cầm, vật nuôi trên diện tích mới trồng rừng, đang trong thời kỳ chăm sóc; người vi phạm đối với rừng phòng hộ bị phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng và buộc đưa gia súc, vật nuôi ra khỏi rừng."
    },
    {
        "id": "ChuRung_011",
        "question": "Khi tổ chức, cá nhân phát hiện động vật rừng bị lạc, bị thương, bị bệnh hoặc mất nơi sinh sống tự nhiên thì phải thực hiện trách nhiệm gì theo Thông tư số 85/2025/TT-BNNMT?",
        "options": [
            "Thông báo ngay cho Ủy ban nhân dân cấp xã nơi phát hiện để kịp thời tổ chức cứu hộ; không tự ý giữ nuôi, giết thịt hoặc mua bán",
            "Tự ý mang về nhà nuôi nhốt làm cảnh và đăng bán trên mạng xã hội",
            "Tạm thời nuôi giữ tại nhà và tự thả vào bất kỳ khu rừng nào gần nhà sau vài tuần",
            "Mổ thịt chia cho hàng xóm vì con vật tự đi lạc vào vườn nhà"
        ],
        "correct": "Thông báo ngay cho Ủy ban nhân dân cấp xã nơi phát hiện để kịp thời tổ chức cứu hộ; không tự ý giữ nuôi, giết thịt hoặc mua bán",
        "explanation": "Căn cứ Điểm a Khoản 3 Điều 15 Thông tư số 85/2025/TT-BNNMT: Tổ chức, cá nhân khi phát hiện động vật bị lạc, bị thương, bị bệnh hoặc mất nơi sinh sống tự nhiên có trách nhiệm thông báo ngay cho Ủy ban nhân dân cấp xã nơi phát hiện để kịp thời tổ chức cứu hộ. Hành vi nuôi, nhốt, giết, mua bán trái phép động vật rừng bị nghiêm cấm theo Khoản 3 Điều 9 Luật Lâm nghiệp."
    },
    {
        "id": "ChuRung_012",
        "question": "Hành vi mang, đưa dụng cụ vào rừng có quy định cấm săn bắt động vật rừng để đặt bẫy (bẫy kẹp sắt, bẫy thòng lọng) có vi phạm pháp luật không?",
        "options": [
            "Vi phạm pháp luật; riêng hành vi đưa dụng cụ vào rừng để bẫy bắt đã bị phạt tiền và tịch thu dụng cụ, nếu săn bắt được động vật rừng còn bị xử phạt theo Điều 24 NĐ 146/2026 hoặc truy cứu TNHS",
            "Hoàn toàn hợp pháp nếu đặt bẫy ở khu vực rừng được giao cho cộng đồng",
            "Chỉ bị xử phạt nếu giăng bẫy trong mùa sinh sản của động vật hoang dã",
            "Được khuyến khích để xua đuổi thú hoang phá hoại hoa màu"
        ],
        "correct": "Vi phạm pháp luật; riêng hành vi đưa dụng cụ vào rừng để bẫy bắt đã bị phạt tiền và tịch thu dụng cụ, nếu săn bắt được động vật rừng còn bị xử phạt theo Điều 24 NĐ 146/2026 hoặc truy cứu TNHS",
        "explanation": "Căn cứ Khoản 3 Điều 9 Luật Lâm nghiệp và Điểm l Khoản 3, Điểm h Khoản 4, Khoản 8 Điều 19, Điều 24 Nghị định số 146/2026/NĐ-CP: Pháp luật nghiêm cấm săn, bắt động vật rừng trái phép; hành vi mang, đưa dụng cụ vào rừng để bẫy bắt động vật rừng tại khu vực cấm săn bắt bị phạt tiền từ 3.000.000 đồng đến 5.000.000 đồng (dưới 10 dụng cụ) hoặc từ 5.000.000 đồng đến 10.000.000 đồng (từ 10 dụng cụ trở lên) và tịch thu dụng cụ; trường hợp săn bắt động vật rừng trái phép bị xử phạt theo Điều 24 Nghị định 146/2026/NĐ-CP hoặc Bộ luật Hình sự."
    },
    {
        "id": "ChuRung_013",
        "question": "Theo Nghị định số 58/2024/NĐ-CP (sửa đổi bởi Nghị định số 42/2026/NĐ-CP), mức kinh phí khoán bảo vệ rừng từ ngân sách nhà nước đối với diện tích rừng thuộc xã khu vực II, khu vực III là bao nhiêu?",
        "options": [
            "Bằng 1,2 lần mức bình quân 1.000.000 đồng/ha/năm (tức 1.200.000 đồng/ha/năm)",
            "Chỉ hỗ trợ 50.000 đồng/ha/năm",
            "Không hỗ trợ tiền mặt, chỉ hỗ trợ cây giống nông nghiệp",
            "Mức cố định 300.000 đồng/ha/năm áp dụng chung cho mọi vùng miền trên cả nước"
        ],
        "correct": "Bằng 1,2 lần mức bình quân 1.000.000 đồng/ha/năm (tức 1.200.000 đồng/ha/năm)",
        "explanation": "Căn cứ Điểm a Khoản 3 Điều 19 Nghị định số 58/2024/NĐ-CP (được sửa đổi, bổ sung bởi Điều 44 Nghị định số 42/2026/NĐ-CP): Mức kinh phí khoán bảo vệ rừng đặc dụng, rừng phòng hộ, rừng sản xuất là rừng tự nhiên từ ngân sách nhà nước bình quân 1.000.000 đồng/ha/năm; đối với diện tích rừng thuộc khu vực II, III bằng 1,2 lần mức bình quân (1.200.000 đồng/ha/năm), vùng đất ven biển bằng 1,5 lần mức bình quân (1.500.000 đồng/ha/năm)."
    },
    {
        "id": "ChuRung_014",
        "question": "Khi phát hiện người lạ mặt mang theo cưa xăng vào chặt phá rừng trái phép, tổ chức, hộ gia đình, cá nhân có trách nhiệm gì theo Luật Lâm nghiệp?",
        "options": [
            "Thông báo kịp thời cho cơ quan nhà nước có thẩm quyền (Kiểm lâm, UBND cấp xã, Công an) hoặc chủ rừng về hành vi vi phạm để ngăn chặn, xử lý",
            "Tự ý cầm hung khí ra đánh nhau trực tiếp với nhóm đối tượng chặt phá rừng",
            "Làm ngơ không báo tin vì không phải diện tích rừng của gia đình mình",
            "Thỏa thuận thu tiền cho qua đường đối với nhóm người mang cưa xăng vào rừng"
        ],
        "correct": "Thông báo kịp thời cho cơ quan nhà nước có thẩm quyền (Kiểm lâm, UBND cấp xã, Công an) hoặc chủ rừng về hành vi vi phạm để ngăn chặn, xử lý",
        "explanation": "Căn cứ Khoản 2 Điều 43 và Điều 102 Luật Lâm nghiệp: Tổ chức, hộ gia đình, cá nhân, cộng đồng dân cư có trách nhiệm thông báo kịp thời cho cơ quan nhà nước có thẩm quyền hoặc chủ rừng về cháy rừng, sinh vật gây hại rừng và hành vi vi phạm quy định về quản lý, bảo vệ rừng."
    },
    {
        "id": "ChuRung_015",
        "question": "Hộ gia đình được giao rừng sản xuất là rừng tự nhiên muốn khai thác tận thu cây gỗ khô mục, đổ gãy do thiên tai thì phải thực hiện thủ tục nào sau đây?",
        "options": [
            "Lập phương án khai thác tận thu trình Chủ tịch UBND cấp xã phê duyệt và gửi cơ quan Kiểm lâm sở tại giám sát; sau khi khai thác gửi Bảng kê lâm sản để Kiểm lâm xác nhận",
            "Được toàn quyền tự ý cưa xẻ, vận chuyển về sử dụng bất kỳ lúc nào vì cây đã khô đổ",
            "Được tự do bán cho thương lái mà không cần lập phương án hay Bảng kê lâm sản",
            "Chỉ cần mời Trưởng thôn đến xem tại chỗ là được mang gỗ về sử dụng"
        ],
        "correct": "Lập phương án khai thác tận thu trình Chủ tịch UBND cấp xã phê duyệt và gửi cơ quan Kiểm lâm sở tại giám sát; sau khi khai thác gửi Bảng kê lâm sản để Kiểm lâm xác nhận",
        "explanation": "Căn cứ Khoản 3 Điều 28 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT) và Khoản 3 Điều 5, Điểm a Khoản 2, Điểm c Khoản 3, Khoản 9 Điều 6 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Chủ rừng phải lập phương án khai thác tận thu gỗ rừng tự nhiên trình Chủ tịch UBND cấp xã phê duyệt; trước khi khai thác gửi hồ sơ đã phê duyệt đến cơ quan Kiểm lâm sở tại để giám sát và sau khi khai thác gửi Bảng kê lâm sản để cơ quan Kiểm lâm sở tại xác nhận."
    },
    {
        "id": "ChuRung_016",
        "question": "Cá nhân có hành vi lấn, chiếm rừng đặc dụng (diện tích có rừng) để trồng cây ăn quả, làm nhà tạm bị xử phạt hành chính như thế nào theo Điều 10 Nghị định số 146/2026/NĐ-CP?",
        "options": [
            "Bị phạt tiền từ 1.000.000 đồng đến tối đa 80.000.000 đồng (rừng trồng) hoặc đến 160.000.000 đồng (rừng tự nhiên) tùy diện tích, và buộc khôi phục lại tình trạng ban đầu",
            "Được miễn phạt nếu cam kết sau khi thu hoạch hoa quả sẽ trả lại đất",
            "Chỉ bị phạt cảnh cáo và được phép tiếp tục giữ diện tích lấn chiếm để canh tác",
            "Được chính quyền xã hợp thức hóa cấp giấy chứng nhận quyền sử dụng đất ở"
        ],
        "correct": "Bị phạt tiền từ 1.000.000 đồng đến tối đa 80.000.000 đồng (rừng trồng) hoặc đến 160.000.000 đồng (rừng tự nhiên) tùy diện tích, và buộc khôi phục lại tình trạng ban đầu",
        "explanation": "Căn cứ Các khoản 1, 8, 9, 10 và 11 Điều 10 Nghị định số 146/2026/NĐ-CP: Hành vi lấn, chiếm rừng đặc dụng bị phạt tiền từ 1.000.000 đồng đến tối đa 80.000.000 đồng đối với rừng trồng (từ 10.000 m² trở lên); đối với rừng tự nhiên áp dụng mức phạt bằng hai lần (đến 160.000.000 đồng) và buộc khôi phục lại tình trạng ban đầu. (Nếu lấn, chiếm đất rừng mà không có rừng thì xử phạt trong lĩnh vực đất đai)."
    },
    {
        "id": "ChuRung_017",
        "question": "Cộng đồng dân cư thôn được Nhà nước giao rừng tín ngưỡng thì ai là người đại diện chịu trách nhiệm trước Nhà nước đối với việc quản lý, sử dụng đất và rừng được giao?",
        "options": [
            "Trưởng thôn (hoặc người được cộng đồng dân cư thỏa thuận cử ra)",
            "Chủ tịch Hội Cựu chiến binh của xã",
            "Bất kỳ người cao tuổi nào sinh sống trong thôn",
            "Bất kỳ hộ gia đình nào có đất nương rẫy giáp ranh với khu rừng tín ngưỡng"
        ],
        "correct": "Trưởng thôn (hoặc người được cộng đồng dân cư thỏa thuận cử ra)",
        "explanation": "Căn cứ Khoản 3 Điều 6 Luật Đất đai (VBHN số 133/VBHN-VPQH) và Điều 86 Luật Lâm nghiệp: Người đại diện cho cộng đồng dân cư chịu trách nhiệm trước Nhà nước đối với việc quản lý, sử dụng đất là trưởng thôn, làng, ấp, bản, bon, buôn, phum, sóc, tổ dân phố và điểm dân cư tương tự hoặc người được cộng đồng dân cư thỏa thuận cử ra."
    },
    {
        "id": "ChuRung_018",
        "question": "Hành vi tự ý mang hóa chất độc hại vào rừng để hủy diệt cây rừng, làm sạch thực bì trước khi trồng rừng bị xử lý như thế nào theo pháp luật lâm nghiệp?",
        "options": [
            "Là hành vi bị nghiêm cấm; bị xử phạt VPHC về hành vi phá rừng (hoặc truy cứu TNHS nếu đủ định lượng), buộc khắc phục ô nhiễm môi trường và trồng lại rừng",
            "Được phép sử dụng thoải mái nếu mua thuốc tại cửa hàng vật tư nông nghiệp",
            "Được phép phun không giới hạn nếu pha loãng hóa chất với nước suối theo tỷ lệ 1:10",
            "Chỉ bị xử phạt nếu làm chết các cây gỗ tự nhiên có đường kính trên 50 cm"
        ],
        "correct": "Là hành vi bị nghiêm cấm; bị xử phạt VPHC về hành vi phá rừng (hoặc truy cứu TNHS nếu đủ định lượng), buộc khắc phục ô nhiễm môi trường và trồng lại rừng",
        "explanation": "Căn cứ Khoản 2 Điều 9 Luật Lâm nghiệp, Điều 23 (đoạn mở đầu và Điểm b, đ Khoản 14) Nghị định số 146/2026/NĐ-CP và Điều 243 Bộ luật Hình sự: Pháp luật nghiêm cấm đưa chất thải, hóa chất độc vào rừng trái quy định; hành vi xả chất độc gây thiệt hại đến rừng bị xử phạt hành chính về hành vi Phá rừng (buộc khắc phục ô nhiễm môi trường, dịch bệnh và buộc trồng lại rừng) hoặc truy cứu trách nhiệm hình sự về Tội hủy hoại rừng."
    },
    {
        "id": "ChuRung_019",
        "question": "Chủ rừng khi phát hiện có sinh vật gây hại rừng trên diện tích rừng được giao, được thuê thì có trách nhiệm gì theo Khoản 2 Điều 40 Luật Lâm nghiệp?",
        "options": [
            "Thực hiện các biện pháp phòng, trừ sinh vật gây hại rừng; báo ngay cho cơ quan bảo vệ và kiểm dịch thực vật, cơ quan quản lý chuyên ngành thú y gần nhất để được hướng dẫn, hỗ trợ phòng, trừ",
            "Tự ý đốt lửa hun khói khắp cánh rừng để xua đuổi sâu bọ",
            "Mặc kệ cho sâu bệnh tự ăn hết lá cây vì rừng có khả năng tự phục hồi",
            "Tự mua hóa chất độc hại phun tràn lan mà không cần thực hiện biện pháp lâm sinh, sinh học hay báo cơ quan chuyên môn"
        ],
        "correct": "Thực hiện các biện pháp phòng, trừ sinh vật gây hại rừng; báo ngay cho cơ quan bảo vệ và kiểm dịch thực vật, cơ quan quản lý chuyên ngành thú y gần nhất để được hướng dẫn, hỗ trợ phòng, trừ",
        "explanation": "Căn cứ Khoản 2 Điều 40 Luật Lâm nghiệp và Điều 21 Nghị định số 146/2026/NĐ-CP: Chủ rừng phải thực hiện biện pháp phòng, trừ sinh vật gây hại rừng; khi phát hiện sinh vật gây hại rừng phải báo ngay cho cơ quan bảo vệ và kiểm dịch thực vật, cơ quan quản lý chuyên ngành thú y gần nhất để được hướng dẫn, hỗ trợ; nếu không báo hoặc không phòng trừ làm phát dịch sẽ bị xử phạt đến 25.000.000 đồng."
    },
    {
        "id": "ChuRung_020",
        "question": "Hộ gia đình được giao đất rừng sản xuất có được phép tự ý phân lô, xây nhà ở để bán trên đất rừng khi chưa được cơ quan có thẩm quyền cho phép chuyển mục đích sử dụng đất, chuyển mục đích sử dụng rừng không?",
        "options": [
            "Không được phép; người sử dụng đất phải sử dụng đúng mục đích lâm nghiệp và bị nghiêm cấm chuyển mục đích sử dụng rừng, đất rừng trái quy định pháp luật",
            "Được phép tự do phân lô bán nền làm nhà ở nếu có giấy thỏa thuận viết tay giữa hai bên",
            "Được phép tự ý chuyển sang đất ở nếu thửa đất tách ra có diện tích từ 1.000 m² trở lên",
            "Chỉ cần nộp thêm thuế đất phi nông nghiệp cho địa chính xã là được xây nhà bán"
        ],
        "correct": "Không được phép; người sử dụng đất phải sử dụng đúng mục đích lâm nghiệp và bị nghiêm cấm chuyển mục đích sử dụng rừng, đất rừng trái quy định pháp luật",
        "explanation": "Căn cứ Khoản 8 Điều 9 Luật Lâm nghiệp và Khoản 1 Điều 31 Luật Đất đai (VBHN số 133/VBHN-VPQH): Người sử dụng đất có nghĩa vụ sử dụng đất đúng mục đích, đúng ranh giới thửa đất; pháp luật nghiêm cấm chuyển mục đích sử dụng rừng trái quy định của pháp luật."
    },
    {
        "id": "ChuRung_021",
        "question": "Người dân tự ý vào rừng tự nhiên thuộc sở hữu toàn dân khai thác phong lan rừng, thực vật rừng ngoài gỗ trái phép để mang đi bán bị xử lý như thế nào?",
        "options": [
            "Vi phạm quy định về khai thác rừng tự nhiên trái pháp luật; bị phạt tiền theo trị giá lâm sản, tịch thu tang vật, phương tiện và buộc nộp lại số lợi bất hợp pháp",
            "Hoàn toàn hợp pháp vì phong lan và cây cảnh mọc tự nhiên trong rừng không có chủ sở hữu",
            "Được phép khai thác tự do nếu loài hoa lan không thuộc Danh mục nguy cấp, quý, hiếm",
            "Chỉ bị xử phạt nếu dùng máy cẩu chuyên dụng để đào bứng cây"
        ],
        "correct": "Vi phạm quy định về khai thác rừng tự nhiên trái pháp luật; bị phạt tiền theo trị giá lâm sản, tịch thu tang vật, phương tiện và buộc nộp lại số lợi bất hợp pháp",
        "explanation": "Căn cứ Khoản 1, Khoản 3 Điều 9 Luật Lâm nghiệp và Điều 16 (Khoản 2 đến 8, Khoản 13, Khoản 14) Nghị định số 146/2026/NĐ-CP: Hành vi khai thác thực vật rừng ngoài gỗ trái pháp luật trong rừng tự nhiên (kể cả loài thông thường lẫn loài Nhóm IIA, IA) bị phạt tiền căn cứ theo trị giá lâm sản (hoặc truy cứu TNHS theo Điều 232 BLHS), tịch thu tang vật, phương tiện và buộc nộp lại số lợi bất hợp pháp."
    },
    {
        "id": "ChuRung_022",
        "question": "Theo Điểm a Khoản 3 Điều 70 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), chủ rừng là hộ gia đình, cá nhân, cộng đồng dân cư được sử dụng toàn bộ số tiền dịch vụ môi trường rừng vào mục đích gì?",
        "options": [
            "Để quản lý bảo vệ, phát triển rừng và nâng cao đời sống",
            "Bắt buộc phải nộp lại 100% cho Ủy ban nhân dân xã làm quỹ xây dựng cơ bản",
            "Phải trích nộp 30% tổng số tiền nhận được vào Quỹ khuyến nông cấp tỉnh",
            "Sử dụng để mở sòng bạc hoặc chi tiêu trái quy định pháp luật"
        ],
        "correct": "Để quản lý bảo vệ, phát triển rừng và nâng cao đời sống",
        "explanation": "Căn cứ Điểm a Khoản 3 Điều 70 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Chủ rừng là hộ gia đình, cá nhân, cộng đồng dân cư được sử dụng toàn bộ số tiền dịch vụ môi trường rừng để quản lý bảo vệ, phát triển rừng và nâng cao đời sống."
    },
    {
        "id": "ChuRung_023",
        "question": "Hành vi mang hóa chất độc, chất nổ vào rừng phòng hộ, rừng đặc dụng để đánh bắt sinh vật, gây ô nhiễm môi trường, hủy hoại hệ sinh thái rừng bị pháp luật lâm nghiệp xử lý như thế nào?",
        "options": [
            "Bị nghiêm cấm; bị xử phạt VPHC về hành vi phá rừng (phạt tiền, tịch thu phương tiện, buộc khắc phục ô nhiễm môi trường) hoặc truy cứu TNHS nếu đủ định lượng",
            "Được phép sử dụng nếu chỉ dùng lượng nhỏ hóa chất ở khe suối đầu nguồn",
            "Chỉ bị nhắc nhở nếu dòng suối trong rừng không có biển cấm",
            "Không bị xử lý nếu tự nguyện giao nộp số cá, sinh vật bắt được"
        ],
        "correct": "Bị nghiêm cấm; bị xử phạt VPHC về hành vi phá rừng (phạt tiền, tịch thu phương tiện, buộc khắc phục ô nhiễm môi trường) hoặc truy cứu TNHS nếu đủ định lượng",
        "explanation": "Căn cứ Khoản 2, Khoản 4 Điều 9 Luật Lâm nghiệp; Điểm b Khoản 1 Điều 11, Điểm b Khoản 1 Điều 19 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT); Điều 23 Nghị định số 146/2026/NĐ-CP: Nghiêm cấm mang hóa chất độc hại, chất nổ vào rừng, gây ô nhiễm môi trường và hủy hoại hệ sinh thái rừng; hành vi nổ mìn, xả chất độc gây thiệt hại đến rừng bị xử phạt về hành vi Phá rừng (tịch thu công cụ, phương tiện, buộc khắc phục tình trạng ô nhiễm môi trường) hoặc truy cứu trách nhiệm hình sự theo Điều 243 Bộ luật Hình sự."
    },
    {
        "id": "ChuRung_024",
        "question": "Người dân tự ý tổ chức dịch vụ du lịch, ăn uống, kinh doanh trong rừng đặc dụng khi chưa được phép của chủ rừng bị xử phạt thế nào theo Điều 11 Nghị định 146/2026/NĐ-CP?",
        "options": [
            "Bị phạt tiền từ 6.000.000 đồng đến 10.000.000 đồng (nếu không gây thiệt hại đến rừng/lâm sản) và buộc khôi phục lại tình trạng ban đầu",
            "Được hoan nghênh vì góp phần phát triển du lịch tự phát cho địa phương",
            "Được phép dựng công trình kinh doanh nếu ký thỏa thuận miệng với đội bảo vệ rừng",
            "Không bị xử lý nếu tự thu gom rác thải sinh hoạt sau khi kinh doanh"
        ],
        "correct": "Bị phạt tiền từ 6.000.000 đồng đến 10.000.000 đồng (nếu không gây thiệt hại đến rừng/lâm sản) và buộc khôi phục lại tình trạng ban đầu",
        "explanation": "Căn cứ Điểm a Khoản 2, Khoản 5 và Khoản 6 Điều 11 Nghị định số 146/2026/NĐ-CP: Hành vi tổ chức các dịch vụ du lịch, kinh doanh trong rừng mà không được phép của chủ rừng bị phạt tiền từ 6.000.000 đồng đến 10.000.000 đồng và buộc khôi phục lại tình trạng ban đầu; nếu gây thiệt hại đến rừng hoặc lâm sản thì còn bị xử phạt theo Điều 15, Điều 16 hoặc Điều 23 Nghị định này."
    },
    {
        "id": "ChuRung_025",
        "question": "Khi phải chặt, tỉa, hạ độ cao cây rừng trong phạm vi hành lang bảo vệ an toàn đường dây dẫn điện trên không điện áp cao, hồ sơ phê duyệt phương án khai thác tận dụng cần kèm theo bản sao tài liệu nào?",
        "options": [
            "Biên bản kiểm tra hiện trường cây rừng chặt, tỉa, hạ độ cao trong hành lang bảo vệ an toàn đường dây dẫn điện theo Mẫu số 10 Phụ lục II",
            "Chỉ cần giấy đề nghị bằng miệng của hộ dân sống gần đường dây điện",
            "Hợp đồng mua bán điện sinh hoạt của các hộ gia đình trong thôn",
            "Không cần lập phương án hay biên bản kiểm tra hiện trường đối với bất kỳ loại rừng nào"
        ],
        "correct": "Biên bản kiểm tra hiện trường cây rừng chặt, tỉa, hạ độ cao trong hành lang bảo vệ an toàn đường dây dẫn điện theo Mẫu số 10 Phụ lục II",
        "explanation": "Căn cứ Khoản 4 Điều 20, Khoản 2 Điều 28, Khoản 2 Điều 29 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT) và Điểm e Khoản 5 Điều 6 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Đối với khai thác tận dụng cây gỗ ảnh hưởng đến hành lang bảo vệ an toàn đường dây dẫn điện trên không điện áp cao (thuộc trường hợp phải phê duyệt phương án khai thác), hồ sơ gồm đề nghị, phương án khai thác và bản sao Biên bản kiểm tra hiện trường cây rừng chặt, tỉa, hạ độ cao theo Mẫu số 10 Phụ lục II."
    },
    {
        "id": "ChuRung_026",
        "question": "Việc chuyển nhượng quyền sử dụng đất rừng sản xuất giữa các cá nhân bằng 'giấy viết tay' mà không công chứng, chứng thực và không có Giấy chứng nhận quyền sử dụng đất có hợp pháp không?",
        "options": [
            "Không đúng quy định pháp luật; người sử dụng đất chỉ được chuyển nhượng khi có Giấy chứng nhận (và đủ điều kiện khác) và hợp đồng chuyển nhượng phải được công chứng hoặc chứng thực",
            "Hoàn toàn hợp pháp nếu có chữ ký của cả người bán và người mua",
            "Có giá trị pháp lý đầy đủ nếu giấy viết tay có chữ ký làm chứng của hàng xóm",
            "Chỉ cần nộp giấy viết tay cho Trưởng thôn xác nhận là đủ điều kiện chuyển nhượng"
        ],
        "correct": "Không đúng quy định pháp luật; người sử dụng đất chỉ được chuyển nhượng khi có Giấy chứng nhận (và đủ điều kiện khác) và hợp đồng chuyển nhượng phải được công chứng hoặc chứng thực",
        "explanation": "Căn cứ Điểm a Khoản 3 Điều 27 và Khoản 1 Điều 45 Luật Đất đai (VBHN số 133/VBHN-VPQH): Người sử dụng đất chỉ được thực hiện quyền chuyển nhượng khi có Giấy chứng nhận (trừ trường hợp luật định), đất không có tranh chấp, không bị kê biên, trong thời hạn sử dụng đất và không bị áp dụng biện pháp khẩn cấp tạm thời; đồng thời hợp đồng chuyển nhượng quyền sử dụng đất của cá nhân phải được công chứng hoặc chứng thực."
    },
    {
        "id": "ChuRung_027",
        "question": "Việc khai thác lâm sản ngoài gỗ (măng, tre, nứa, nấm) trong rừng phòng hộ là rừng tự nhiên phải bảo đảm điều kiện nào theo Khoản 2 Điều 20 Nghị định số 156/2018/NĐ-CP?",
        "options": [
            "Phải bảo đảm duy trì sự phát triển bền vững của khu rừng, sản lượng loài khai thác không được lớn hơn lượng tăng trưởng của loài đó và sau khi khai thác không làm ảnh hưởng chức năng phòng hộ của rừng",
            "Ai cũng có quyền tự do vào rừng tự nhiên khai thác không hạn chế sản lượng để bán thương mại",
            "Được khai thác trắng toàn bộ diện tích tre, nứa trong lô để tái sinh đồng loạt",
            "Chỉ được khai thác nếu nộp phí bản quyền cho trạm gác rừng mà không cần lập phương án"
        ],
        "correct": "Phải bảo đảm duy trì sự phát triển bền vững của khu rừng, sản lượng loài khai thác không được lớn hơn lượng tăng trưởng của loài đó và sau khi khai thác không làm ảnh hưởng chức năng phòng hộ của rừng",
        "explanation": "Căn cứ Khoản 2 Điều 55 Luật Lâm nghiệp, Điểm b Khoản 2 Điều 20 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT) và Khoản 7, Khoản 9 Điều 6 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Khai thác lâm sản ngoài gỗ trong rừng phòng hộ là rừng tự nhiên phải bảo đảm duy trì sự phát triển bền vững của khu rừng, sản lượng loài khai thác không lớn hơn lượng tăng trưởng của loài đó, không làm ảnh hưởng chức năng phòng hộ của rừng; chủ rừng lập phương án khai thác gửi cơ quan Kiểm lâm sở tại trước khi thực hiện."
    },
    {
        "id": "ChuRung_028",
        "question": "Hành vi sử dụng vũ khí, bẫy kiềng lớn, bẫy điện hoặc thiết bị phát tiếng kêu động vật để săn bắt động vật rừng trái phép bị pháp luật lâm nghiệp xử lý như thế nào?",
        "options": [
            "Bị nghiêm cấm; bị xử phạt VPHC, tịch thu tang vật, công cụ săn bắt (hoặc truy cứu TNHS với tình tiết định khung sử dụng công cụ, phương tiện săn bắt bị cấm)",
            "Được phép sử dụng nếu súng hoặc bẫy do cá nhân tự chế tạo tại nhà",
            "Chỉ bị xử phạt hành chính nếu bắn trúng loài động vật có trọng lượng trên 50 kg",
            "Không bị xử phạt nếu thực hiện vào ban đêm ngoài giờ hành chính"
        ],
        "correct": "Bị nghiêm cấm; bị xử phạt VPHC, tịch thu tang vật, công cụ săn bắt (hoặc truy cứu TNHS với tình tiết định khung sử dụng công cụ, phương tiện săn bắt bị cấm)",
        "explanation": "Căn cứ Khoản 3 Điều 9 Luật Lâm nghiệp, Điểm d Khoản 1 Điều 6 Thông tư số 85/2025/TT-BNNMT, Điều 19 và Điều 24 Nghị định số 146/2026/NĐ-CP, Điểm d Khoản 2 Điều 234 và Điểm g Khoản 2 Điều 244 Bộ luật Hình sự: Pháp luật nghiêm cấm sử dụng công cụ, phương tiện mang tính tận diệt, hủy diệt (các loại vũ khí, bẫy kiềng lớn, bẫy điện, thiết bị phát tiếng kêu động vật...) để săn bắt động vật rừng; vi phạm bị phạt tiền, tịch thu tang vật, dụng cụ hoặc truy cứu trách nhiệm hình sự ở khung tăng nặng."
    },
    {
        "id": "ChuRung_029",
        "question": "Cộng đồng dân cư được Nhà nước giao rừng tín ngưỡng, rừng phòng hộ, rừng sản xuất có được quyền chuyển nhượng quyền sử dụng rừng cho doanh nghiệp tư nhân không?",
        "options": [
            "Không được phép; cộng đồng dân cư không được chuyển nhượng, cho thuê, tặng cho quyền sử dụng rừng, thế chấp, góp vốn bằng giá trị quyền sử dụng rừng",
            "Được quyền bán nếu toàn bộ bà con trong thôn cùng đồng ý biểu quyết",
            "Được quyền cho doanh nghiệp thuê quyền sử dụng rừng nếu có nghị quyết của thôn",
            "Được phép chuyển nhượng nếu doanh nghiệp cam kết tuyển lao động địa phương"
        ],
        "correct": "Không được phép; cộng đồng dân cư không được chuyển nhượng, cho thuê, tặng cho quyền sử dụng rừng, thế chấp, góp vốn bằng giá trị quyền sử dụng rừng",
        "explanation": "Căn cứ Điểm đ Khoản 2 Điều 86 Luật Lâm nghiệp (và Khoản 2 Điều 39 Luật Đất đai đối với đất được giao không thu tiền sử dụng đất): Cộng đồng dân cư được giao rừng tín ngưỡng, rừng phòng hộ và rừng sản xuất có nghĩa vụ không được chuyển nhượng, cho thuê, tặng cho quyền sử dụng rừng; thế chấp, góp vốn bằng giá trị quyền sử dụng rừng (và không được phân chia rừng cho các thành viên)."
    },
    {
        "id": "ChuRung_030",
        "question": "Khi xảy ra cháy rừng trên diện tích rừng mình quản lý, chủ rừng có trách nhiệm gì theo Khoản 4 Điều 39 Luật Lâm nghiệp?",
        "options": [
            "Kịp thời chữa cháy rừng, thông báo ngay cho cơ quan, tổ chức, cá nhân liên quan; khắc phục hậu quả sau cháy rừng và báo cáo cho cơ quan nhà nước có thẩm quyền",
            "Ở nhà chờ lửa cháy tắt hẳn rồi mới ra kiểm tra diện tích bị thiệt hại",
            "Chỉ báo cho Trưởng thôn và ngồi chờ dân quân đến rồi mới tham gia dập lửa",
            "Rời khỏi địa phương để tránh bị kiểm tra trách nhiệm"
        ],
        "correct": "Kịp thời chữa cháy rừng, thông báo ngay cho cơ quan, tổ chức, cá nhân liên quan; khắc phục hậu quả sau cháy rừng và báo cáo cho cơ quan nhà nước có thẩm quyền",
        "explanation": "Căn cứ Khoản 4 Điều 39 Luật Lâm nghiệp và Điều 51, Điều 52 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Khi xảy ra cháy rừng, chủ rừng phải kịp thời chữa cháy rừng, thông báo ngay cho cơ quan, tổ chức, cá nhân liên quan; khắc phục hậu quả sau cháy rừng và báo cáo cơ quan nhà nước có thẩm quyền (gửi báo cáo về cháy rừng cho Hạt Kiểm lâm trong 03 ngày làm việc sau khi dập tắt theo Thông tư 16/2025/TT-BNNMT)."
    },
    {
        "id": "ChuRung_031",
        "question": "Trên diện tích đã có rừng thuộc rừng sản xuất, chủ rừng có được trồng xen cây nông nghiệp, cây lâm sản ngoài gỗ và chăn nuôi dưới tán rừng không?",
        "options": [
            "Được trồng xen cây nông nghiệp, cây lâm sản ngoài gỗ, chăn nuôi và nuôi trồng thủy sản dưới tán rừng, nhưng không được làm suy giảm diện tích rừng, chất lượng, ảnh hưởng đến tái sinh rừng",
            "Bị nghiêm cấm hoàn toàn mọi hình thức trồng xen và chăn nuôi dưới tán rừng sản xuất",
            "Chỉ được trồng cây dược liệu, nghiêm cấm hoàn toàn việc chăn nuôi dưới tán rừng sản xuất",
            "Phải chặt trắng hết cây rừng tầng trên rồi mới được trồng xen cây nông nghiệp"
        ],
        "correct": "Được trồng xen cây nông nghiệp, cây lâm sản ngoài gỗ, chăn nuôi và nuôi trồng thủy sản dưới tán rừng, nhưng không được làm suy giảm diện tích rừng, chất lượng, ảnh hưởng đến tái sinh rừng",
        "explanation": "Căn cứ Khoản 1 Điều 60 Luật Lâm nghiệp và Khoản 2 Điều 30 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Đối với diện tích đã có rừng sản xuất, chủ rừng được trồng xen cây nông nghiệp, cây lâm sản ngoài gỗ, chăn nuôi và nuôi trồng thủy sản dưới tán rừng, nhưng không được làm suy giảm diện tích rừng, chất lượng, ảnh hưởng đến tái sinh rừng của rừng."
    },
    {
        "id": "ChuRung_032",
        "question": "Khi rừng sản xuất là rừng trồng do hộ gia đình tự đầu tư bị đổ gãy do thiên tai, chủ rừng thực hiện khai thác tận thu gỗ theo quy định nào?",
        "options": [
            "Chủ rừng tự quyết định khai thác và được hưởng toàn bộ giá trị lâm sản; lập phương án khai thác gửi Kiểm lâm sở tại trước khi khai thác và gửi Bảng kê lâm sản sau khai thác",
            "Bắt buộc phải để cây mục nát trong rừng, không được tận thu",
            "Phải trình phương án khai thác lên Chủ tịch UBND cấp xã phê duyệt trước khi chặt dọn",
            "Toàn bộ gỗ cây đổ gãy bị Nhà nước thu hồi để bán đấu giá"
        ],
        "correct": "Chủ rừng tự quyết định khai thác và được hưởng toàn bộ giá trị lâm sản; lập phương án khai thác gửi Kiểm lâm sở tại trước khi khai thác và gửi Bảng kê lâm sản sau khai thác",
        "explanation": "Căn cứ Điểm a Khoản 3, Điểm a Khoản 5 Điều 29 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT) và Khoản 7, Khoản 9 Điều 6 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Rừng trồng sản xuất do chủ rừng tự đầu tư thì chủ rừng tự quyết định khai thác tận thu cây đổ gãy và hưởng toàn bộ giá trị lâm sản; không phải trình phê duyệt phương án khai thác nhưng vẫn lập phương án khai thác gửi Kiểm lâm sở tại trước khi khai thác để giám sát và gửi bản chính Bảng kê lâm sản trong 05 ngày làm việc sau hoàn thành khai thác."
    },
    {
        "id": "ChuRung_033",
        "question": "Khi khai thác tỉa thưa hoặc khai thác chính rừng sản xuất là rừng trồng do hộ gia đình tự đầu tư, chủ rừng có phải trình cơ quan nhà nước phê duyệt phương án khai thác không?",
        "options": [
            "Không phải trình phê duyệt, nhưng vẫn phải lập phương án khai thác gửi Kiểm lâm sở tại trước khi khai thác để giám sát và gửi Bảng kê lâm sản sau khai thác",
            "Bắt buộc phải thuê đơn vị tư vấn lập hồ sơ trình Sở Nông nghiệp và Môi trường phê duyệt",
            "Phải lập phương án nộp về Chi cục Kiểm lâm cấp tỉnh thẩm định và phê duyệt",
            "Mỗi héc-ta chỉ được chặt tỉa tối đa 01 cây trong suốt chu kỳ"
        ],
        "correct": "Không phải trình phê duyệt, nhưng vẫn phải lập phương án khai thác gửi Kiểm lâm sở tại trước khi khai thác để giám sát và gửi Bảng kê lâm sản sau khai thác",
        "explanation": "Căn cứ Khoản 1 Điều 59 Luật Lâm nghiệp và Khoản 7, Khoản 9 Điều 6 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Chủ rừng tự quyết định khai thác rừng sản xuất là rừng trồng thuộc sở hữu của mình, không phải trình cơ quan có thẩm quyền phê duyệt phương án khai thác; tuy nhiên trước khi khai thác phải gửi 01 bản chính phương án khai thác đến cơ quan Kiểm lâm sở tại để giám sát và sau khai thác gửi bản chính Bảng kê lâm sản trong 05 ngày làm việc."
    },
    {
        "id": "ChuRung_034",
        "question": "Khi mua bán, vận chuyển trong nước gỗ loài thông thường khai thác từ rừng sản xuất là rừng trồng do hộ gia đình tự đầu tư, hồ sơ lâm sản hợp pháp gồm những giấy tờ nào?",
        "options": [
            "Bản chính Bảng kê lâm sản do chủ lâm sản lập (hoặc có xác nhận của Kiểm lâm nếu đề nghị) kèm bản sao hồ sơ mua bán, chuyển giao quyền sở hữu liền kề trước đó hoặc mã QR chứa hồ sơ này",
            "Bắt buộc mọi trường hợp phải có Bảng kê lâm sản đóng dấu xác nhận của Kiểm lâm sở tại và Sở NN&MT",
            "Chỉ cần hóa đơn bán lẻ viết tay của người mua và không cần lập Bảng kê lâm sản",
            "Bắt buộc phải có Giấy phép CITES do Bộ Nông nghiệp và Môi trường cấp"
        ],
        "correct": "Bản chính Bảng kê lâm sản do chủ lâm sản lập (hoặc có xác nhận của Kiểm lâm nếu đề nghị) kèm bản sao hồ sơ mua bán, chuyển giao quyền sở hữu liền kề trước đó hoặc mã QR chứa hồ sơ này",
        "explanation": "Căn cứ Khoản 3 Điều 8 và Khoản 2 Điều 11 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Gỗ loài thông thường khai thác từ rừng sản xuất là rừng trồng tự đầu tư không thuộc đối tượng bắt buộc xác nhận Bảng kê lâm sản; khi mua bán, vận chuyển trong nước cần bản chính Bảng kê lâm sản do chủ lâm sản lập (hoặc có xác nhận của Kiểm lâm nếu chủ lâm sản tự nguyện đề nghị) kèm bản sao hồ sơ mua bán, chuyển giao liền kề trước đó hoặc mã QR chứa hồ sơ này trên Bảng kê."
    },
    {
        "id": "ChuRung_035",
        "question": "Người dân có được dùng chất độc hoặc chất nổ để khai thác tài nguyên sinh vật trong rừng không?",
        "options": [
            "Tuyệt đối nghiêm cấm; hành vi đưa chất độc, chất nổ vào rừng trái phép và gây thiệt hại đến rừng bị xử phạt hành chính rất nặng hoặc truy cứu TNHS về Tội hủy hoại rừng",
            "Được dùng nếu không có dụng cụ khai thác thông thường khác",
            "Chỉ bị xử phạt vi phạm hành chính nếu sử dụng chất nổ trong phạm vi rừng sản xuất",
            "Chỉ cấm ở vùng lõi vườn quốc gia, còn rừng phòng hộ đầu nguồn thì được phép dùng"
        ],
        "correct": "Tuyệt đối nghiêm cấm; hành vi đưa chất độc, chất nổ vào rừng trái phép và gây thiệt hại đến rừng bị xử phạt hành chính rất nặng hoặc truy cứu TNHS về Tội hủy hoại rừng",
        "explanation": "Căn cứ Khoản 2 Điều 9 Luật Lâm nghiệp, Điều 23 Nghị định số 146/2026/NĐ-CP và Điều 243 Bộ luật Hình sự: Pháp luật nghiêm cấm đưa chất thải, hóa chất độc, chất nổ, chất cháy vào rừng trái quy định; hành vi nổ mìn, xả chất độc gây thiệt hại đến rừng bị xử phạt về hành vi Phá rừng (Khoản 1 đến 15 Điều 23 NĐ 146/2026/NĐ-CP) hoặc bị truy cứu trách nhiệm hình sự về Tội hủy hoại rừng theo Điều 243 Bộ luật Hình sự."
    },
    {
        "id": "ChuRung_036",
        "question": "Trách nhiệm của chủ rừng khi phát hiện sâu hại hoặc sinh vật gây hại rừng trên diện tích rừng được giao, được thuê là gì?",
        "options": [
            "Áp dụng biện pháp phòng, trừ kịp thời (ưu tiên biện pháp lâm sinh, sinh học) và báo ngay cho cơ quan bảo vệ và kiểm dịch thực vật hoặc cơ quan thú y gần nhất để được hướng dẫn, hỗ trợ",
            "Mặc kệ cho sâu ăn hết lá cây vì rừng tự nhiên sẽ tự phục hồi hoàn toàn",
            "Tự ý mua thuốc diệt cỏ phun tràn lan lên toàn bộ tán rừng mà không cần báo cơ quan chuyên môn",
            "Đốt hết thực bì và cây rừng xung quanh khu vực có sâu để diệt trừ tận gốc"
        ],
        "correct": "Áp dụng biện pháp phòng, trừ kịp thời (ưu tiên biện pháp lâm sinh, sinh học) và báo ngay cho cơ quan bảo vệ và kiểm dịch thực vật hoặc cơ quan thú y gần nhất để được hướng dẫn, hỗ trợ",
        "explanation": "Căn cứ Khoản 2 Điều 40 Luật Lâm nghiệp và Điều 21 Nghị định số 146/2026/NĐ-CP: Chủ rừng phải thực hiện biện pháp phòng, trừ sinh vật gây hại rừng, tăng cường biện pháp lâm sinh, sinh học; khi phát hiện sinh vật gây hại rừng phải báo ngay cho cơ quan bảo vệ và kiểm dịch thực vật, cơ quan quản lý chuyên ngành thú y gần nhất để được hướng dẫn và hỗ trợ; nếu không thực hiện làm lây lan dịch bệnh sẽ bị xử phạt theo Điều 21 Nghị định 146/2026/NĐ-CP."
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
        "question": "Người dân tự ý mang máy múc vào rừng phòng hộ (khu vực có rừng) để san gạt mặt bằng làm nhà ở bị xử lý như thế nào?",
        "options": [
            "Bị đình chỉ ngay, xử phạt VPHC nặng về hành vi phá rừng (hoặc truy cứu TNHS nếu đủ định lượng), tịch thu phương tiện theo quy định và buộc khôi phục tình trạng ban đầu, trồng lại rừng",
            "Được hoan nghênh vì góp phần cải tạo cảnh quan khu vực đồi núi",
            "Chỉ bị xử phạt hành chính về trật tự xây dựng nếu công trình nhà ở chưa hoàn thiện",
            "Không bị xử phạt nếu là hộ gia đình nghèo sinh sống tại địa phương"
        ],
        "correct": "Bị đình chỉ ngay, xử phạt VPHC nặng về hành vi phá rừng (hoặc truy cứu TNHS nếu đủ định lượng), tịch thu phương tiện theo quy định và buộc khôi phục tình trạng ban đầu, trồng lại rừng",
        "explanation": "Căn cứ Khoản 1 Điều 9 Luật Lâm nghiệp, Điều 23 (Khoản 1 đến 15) Nghị định số 146/2026/NĐ-CP và Điểm c Khoản 1 Điều 243 Bộ luật Hình sự: Hành vi tự ý đưa máy móc vào san ủi rừng phòng hộ trái phép bị xử phạt hành chính rất nặng về hành vi Phá rừng, buộc khôi phục lại tình trạng ban đầu và trồng lại rừng (trường hợp rừng phòng hộ bị hủy hoại từ 3.000 m² trở lên bị truy cứu TNHS theo Điều 243 BLHS)."
    },
    {
        "id": "ChuRung_039",
        "question": "Chủ rừng hoặc người nhận khoán bảo vệ rừng khi là bên cung ứng dịch vụ môi trường rừng (DVMTR) có nghĩa vụ gì theo Khoản 2 Điều 65 Luật Lâm nghiệp?",
        "options": [
            "Phải bảo đảm diện tích cung ứng DVMTR được bảo vệ và phát triển theo quy hoạch, kế hoạch quản lý được duyệt hoặc theo hợp đồng khoán đã ký",
            "Không phải làm gì ngoài việc ký nhận tiền chi trả hằng năm",
            "Phải trích nộp lại 20% số tiền nhận được cho Ban quản lý rừng để hỗ trợ tuần tra",
            "Phải nộp lại toàn bộ tiền cho nhà máy thủy điện khi có yêu cầu"
        ],
        "correct": "Phải bảo đảm diện tích cung ứng DVMTR được bảo vệ và phát triển theo quy hoạch, kế hoạch quản lý được duyệt hoặc theo hợp đồng khoán đã ký",
        "explanation": "Căn cứ Điểm a và Điểm b Khoản 2 Điều 65 Luật Lâm nghiệp: Chủ rừng là bên cung ứng dịch vụ môi trường rừng phải bảo đảm diện tích cung ứng DVMTR được bảo vệ và phát triển theo quy hoạch, kế hoạch quản lý đối với từng loại rừng được cơ quan nhà nước có thẩm quyền phê duyệt; tổ chức, hộ gia đình, cá nhân, cộng đồng dân cư nhận khoán bảo vệ và phát triển rừng phải bảo đảm diện tích cung ứng DVMTR theo hợp đồng khoán đã ký với chủ rừng."
    },
    {
        "id": "ChuRung_040",
        "question": "Theo Luật Lâm nghiệp và Luật Đất đai, hộ gia đình, cá nhân được Nhà nước giao đất để trồng rừng sản xuất có quyền thế chấp tài sản nào để vay vốn?",
        "options": [
            "Được thế chấp quyền sử dụng đất (khi đủ điều kiện theo Luật Đất đai) và thế chấp giá trị rừng sản xuất là rừng trồng thuộc sở hữu của mình",
            "Chỉ được thế chấp nhà ở mà tuyệt đối không được thế chấp đất rừng hay rừng trồng",
            "Chỉ được thế chấp giá trị cây trồng trên đất, nghiêm cấm thế chấp quyền sử dụng đất lâm nghiệp",
            "Không ngân hàng hay tổ chức tín dụng nào được phép nhận thế chấp đất trồng rừng"
        ],
        "correct": "Được thế chấp quyền sử dụng đất (khi đủ điều kiện theo Luật Đất đai) và thế chấp giá trị rừng sản xuất là rừng trồng thuộc sở hữu của mình",
        "explanation": "Căn cứ Điểm e Khoản 1 Điều 84, Điểm c Khoản 1 Điều 85 Luật Lâm nghiệp và Điểm g Khoản 1 Điều 37, Điều 45 Luật Đất đai (VBHN số 133/VBHN-VPQH): Hộ gia đình, cá nhân được Nhà nước giao đất (hạn mức/có thu tiền/công nhận quyền sử dụng đất) được thế chấp quyền sử dụng đất, tài sản thuộc sở hữu của mình gắn liền với đất và thế chấp giá trị rừng sản xuất là rừng trồng thuộc sở hữu của mình tại tổ chức tín dụng theo quy định."
    },
    {
        "id": "ChuRung_041",
        "question": "Trước khi và trong khi đốt nương, rẫy, đốt thực bì để chuẩn bị đất trồng rừng và giảm vật liệu cháy, người sử dụng lửa BẮT BUỘC phải thực hiện việc nào sau đây theo Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP?",
        "options": [
            "Thông báo trước với trưởng thôn, bản, tổ đội PCCCR; bố trí người canh gác, có đủ dụng cụ dập lửa trong khi đốt và dập tắt hết tàn lửa sau khi đốt xong",
            "Lén lút châm lửa đốt vào ban đêm để khỏi phải thông báo cho ai",
            "Chỉ cần dọn sơ cỏ rộng 01 mét rồi châm lửa đốt vào buổi trưa gió lớn",
            "Chỉ cần hô báo cho hộ hàng xóm rồi bỏ về ngay sau khi lửa cháy đều"
        ],
        "correct": "Thông báo trước với trưởng thôn, bản, tổ đội PCCCR; bố trí người canh gác, có đủ dụng cụ dập lửa trong khi đốt và dập tắt hết tàn lửa sau khi đốt xong",
        "explanation": "Căn cứ Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Khi đốt nương, rẫy, đồng ruộng, đốt thực bì chuẩn bị đất trồng rừng, trước khi đốt phải thông báo với trưởng thôn, bản, tổ đội PCCCR; trong khi đốt phải bố trí người canh gác, có đủ dụng cụ để dập lửa khi cháy lan vào rừng; sau khi đốt xong phải dập tắt hết tàn lửa; đốt lúc gió nhẹ trước 9 giờ sáng và sau 16 giờ chiều, không đốt vào ngày dự báo cấp IV, cấp V."
    },
    {
        "id": "ChuRung_042",
        "question": "Theo Khoản 2 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), đối với các khu rừng có đường sắt, đường dây điện cao thế, đường ống dẫn khí đốt, dầu mỏ đi qua phải thực hiện yêu cầu phòng cháy nào?",
        "options": [
            "Phải có đường băng cản lửa, hành lang an toàn phù hợp với từng loại công trình theo quy định pháp luật và thường xuyên kiểm tra, dọn sạch vật liệu cháy trong đường băng cản lửa",
            "Phải chặt trắng toàn bộ cây rừng trong phạm vi 500 mét mỗi bên đường dây hoặc đường sắt",
            "Không cần làm đường băng cản lửa hay hành lang an toàn nếu rừng là rừng trồng keo",
            "Chỉ cần cắm một biển cấm lửa tại đầu tuyến đường sắt hoặc trạm biến áp"
        ],
        "correct": "Phải có đường băng cản lửa, hành lang an toàn phù hợp với từng loại công trình theo quy định pháp luật và thường xuyên kiểm tra, dọn sạch vật liệu cháy trong đường băng cản lửa",
        "explanation": "Căn cứ Khoản 2 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Đối với các khu rừng có đường sắt, đường dây điện cao thế, đường ống dẫn khí đốt, dầu mỏ và sản phẩm dầu mỏ đi qua và công trình có nguy cơ gây cháy rừng phải có đường băng cản lửa, hành lang an toàn phù hợp với từng loại công trình theo quy định của pháp luật và thường xuyên kiểm tra, dọn sạch vật liệu cháy trong đường băng cản lửa."
    },
    {
        "id": "ChuRung_043",
        "question": "Theo Điểm b Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), trong ngày không thuộc cấp dự báo cháy rừng IV, V, thời điểm nào được phép tiến hành đốt nương, rẫy, đốt thực bì?",
        "options": [
            "Lúc gió nhẹ, vào trước 9 giờ buổi sáng và sau 16 giờ buổi chiều",
            "Buổi trưa nắng gắt (từ 11 giờ đến 14 giờ) vì cỏ khô dễ cháy",
            "Từ 10 giờ đến 15 giờ hằng ngày để bảo đảm thực bì cháy triệt để",
            "Bất kỳ thời điểm nào trong ngày miễn là chủ nương rảnh rỗi"
        ],
        "correct": "Lúc gió nhẹ, vào trước 9 giờ buổi sáng và sau 16 giờ buổi chiều",
        "explanation": "Căn cứ Điểm b Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Không đốt vào những ngày có dự báo nguy cơ cháy rừng ở cấp IV, cấp V. Trong ngày, tiến hành đốt lúc gió nhẹ, vào trước 9 giờ buổi sáng và sau 16 giờ buổi chiều."
    },
    {
        "id": "ChuRung_044",
        "question": "Khi dự báo nguy cơ cháy rừng ở cấp IV (cấp nguy hiểm) và cấp V (cấp cực kỳ nguy hiểm), người dân có được đốt nương, rẫy, đốt thực bì không?",
        "options": [
            "Không được đốt; pháp luật quy định không đốt vào những ngày có dự báo nguy cơ cháy rừng ở cấp IV, cấp V",
            "Được đốt nếu có đông người cùng đứng canh gác xung quanh",
            "Được phép đốt nếu có văn bản giám sát của Trưởng thôn vào buổi trưa",
            "Chỉ được đốt vào khoảng từ 11 giờ đến 13 giờ khi gió ổn định"
        ],
        "correct": "Không được đốt; pháp luật quy định không đốt vào những ngày có dự báo nguy cơ cháy rừng ở cấp IV, cấp V",
        "explanation": "Căn cứ Điểm b Khoản 3 Điều 47 và Mẫu số 04 Phụ lục III Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Cấp dự báo cháy rừng gồm 5 cấp (cấp IV là cấp nguy hiểm, cấp V là cấp cực kỳ nguy hiểm); khi đốt nương, rẫy, đồng ruộng, đốt thực bì chuẩn bị đất trồng rừng và giảm vật liệu cháy trong rừng, không được đốt vào những ngày có dự báo nguy cơ cháy rừng ở cấp IV, cấp V."
    },
    {
        "id": "ChuRung_045",
        "question": "Theo Điểm c Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), nghĩa vụ bắt buộc của người đốt nương, rẫy, đốt thực bì sau khi đốt xong là gì?",
        "options": [
            "Phải dập tắt hết tàn lửa sau khi đốt xong",
            "Chỉ cần đợi đến lúc ngọn lửa lớn hạ xuống là có thể rời khỏi bãi đốt",
            "Để mặc cho tàn lửa cháy âm ỉ tự tắt qua đêm",
            "Chỉ cần ra về ngay sau khi châm lửa đều khắp bãi nương"
        ],
        "correct": "Phải dập tắt hết tàn lửa sau khi đốt xong",
        "explanation": "Căn cứ Điểm c Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Trong khi đốt phải bố trí người canh gác, có đủ dụng cụ để dập lửa khi cháy lan vào rừng; sau khi đốt xong phải dập tắt hết tàn lửa."
    },
    {
        "id": "ChuRung_046",
        "question": "Hành vi đốt nương rẫy bất cẩn vi phạm quy định PCCCR làm cháy lan vào rừng gây thiệt hại rừng thì người gây cháy bị xử lý như thế nào?",
        "options": [
            "Chỉ cần xin lỗi chủ rừng là xong",
            "Bị xử phạt vi phạm hành chính, buộc trồng lại rừng, bồi thường thiệt hại hoặc bị truy cứu trách nhiệm hình sự nếu đủ định lượng hủy hoại rừng",
            "Chỉ phải nộp phạt tiền hành chính nếu diện tích rừng bị cháy lan dưới 01 héc-ta",
            "Được Nhà nước thưởng tiền vì giúp dọn sạch thực bì"
        ],
        "correct": "Bị xử phạt vi phạm hành chính, buộc trồng lại rừng, bồi thường thiệt hại hoặc bị truy cứu trách nhiệm hình sự nếu đủ định lượng hủy hoại rừng",
        "explanation": "Căn cứ Điều 13 Luật Xử lý vi phạm hành chính (VBHN số 90/VBHN-VPQH), Điều 20 Nghị định số 146/2026/NĐ-CP và Điều 243 Bộ luật Hình sự: Người vi phạm quy định PCCCR gây cháy rừng bị xử phạt hành chính (và buộc trồng lại rừng, khắc phục ô nhiễm môi trường), phải bồi thường thiệt hại theo pháp luật dân sự, hoặc bị truy cứu trách nhiệm hình sự về Tội hủy hoại rừng nếu đạt ngưỡng diện tích/trị giá tại Điều 243 BLHS."
    },
    {
        "id": "ChuRung_047",
        "question": "Khi phát hiện cháy rừng, người phát hiện có trách nhiệm thực hiện việc gì theo Khoản 1 và Khoản 3 Điều 51 Nghị định số 156/2018/NĐ-CP?",
        "options": [
            "Đứng quay video phát trực tiếp lên mạng xã hội rồi bỏ đi",
            "Bằng mọi cách báo cháy ngay cho người xung quanh và chủ rừng/đội PCCCR/Kiểm lâm/Cảnh sát PCCC/chính quyền/Công an gần nhất, đồng thời ngăn chặn cháy lan và dập cháy",
            "Tự mình huy động người nhà đến dập lửa, khi nào cháy lan rộng không dập được mới báo chính quyền",
            "Đợi khi nào đám cháy tự tắt hẳn thì mới đi báo tin"
        ],
        "correct": "Bằng mọi cách báo cháy ngay cho người xung quanh và chủ rừng/đội PCCCR/Kiểm lâm/Cảnh sát PCCC/chính quyền/Công an gần nhất, đồng thời ngăn chặn cháy lan và dập cháy",
        "explanation": "Căn cứ Khoản 2 Điều 43 Luật Lâm nghiệp và Khoản 1, Khoản 3 Điều 51 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Người phát hiện cháy rừng phải bằng mọi cách báo cháy ngay cho người xung quanh và cho chủ rừng, đội PCCCR, cơ quan Kiểm lâm hoặc Cảnh sát PCCC và cứu nạn cứu hộ, chính quyền địa phương sở tại hoặc Công an, Quân đội nơi gần nhất; người có mặt tại nơi xảy ra cháy rừng phải tìm mọi biện pháp để ngăn chặn cháy lan và dập cháy."
    },
    {
        "id": "ChuRung_048",
        "question": "Khi nhận được lệnh huy động lực lượng, phương tiện tham gia chữa cháy rừng của Chủ tịch Ủy ban nhân dân cấp xã hoặc cấp có thẩm quyền, công dân phải làm gì?",
        "options": [
            "Từ chối tham gia vì không phải diện tích rừng của gia đình mình",
            "Chấp hành nghiêm lệnh huy động và sự chỉ huy chữa cháy rừng của người có thẩm quyền",
            "Chỉ tham gia chữa cháy nếu đám cháy đe dọa trực tiếp đến nhà ở của gia đình",
            "Tự ý rời bỏ hiện trường mà không cần chấp hành mệnh lệnh của người chỉ huy chữa cháy"
        ],
        "correct": "Chấp hành nghiêm lệnh huy động và sự chỉ huy chữa cháy rừng của người có thẩm quyền",
        "explanation": "Căn cứ Khoản 2 Điều 43 Luật Lâm nghiệp và Khoản 3 Điều 51, Khoản 3 Điều 51a Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Tổ chức, hộ gia đình, cá nhân có trách nhiệm chấp hành sự huy động nhân lực, phương tiện của cơ quan nhà nước có thẩm quyền (Chủ tịch UBND cấp tỉnh, cấp xã) khi xảy ra cháy rừng và chấp hành mệnh lệnh của người chỉ huy chữa cháy."
    },
    {
        "id": "ChuRung_049",
        "question": "Theo Điểm b Khoản 5 Điều 10 Thông tư số 16/2025/TT-BNNMT, phương tiện, thiết bị phòng cháy và chữa cháy rừng bao gồm những loại nào?",
        "options": [
            "Phương tiện cơ giới, thiết bị, máy móc, dụng cụ, hóa chất, công cụ hỗ trợ chuyên dùng cho việc phòng cháy và chữa cháy",
            "Chỉ bao gồm phương tiện cơ giới đường bộ và máy bay trực thăng chữa cháy",
            "Chỉ bao gồm các dụng cụ cầm tay bằng gỗ, tre do người dân tự chế tạo",
            "Không quy định trang bị phương tiện, thiết bị mà hoàn toàn dựa vào nguồn nước tự nhiên"
        ],
        "correct": "Phương tiện cơ giới, thiết bị, máy móc, dụng cụ, hóa chất, công cụ hỗ trợ chuyên dùng cho việc phòng cháy và chữa cháy",
        "explanation": "Căn cứ Điểm b Khoản 5 Điều 10 Thông tư số 16/2025/TT-BNNMT: Phương tiện, thiết bị phòng cháy và chữa cháy rừng gồm phương tiện cơ giới, thiết bị, máy móc, dụng cụ, hóa chất, công cụ hỗ trợ chuyên dùng cho việc phòng cháy và chữa cháy (theo danh mục tại Phụ lục II Thông tư này); phương tiện, thiết bị phòng cháy và chữa cháy rừng phải được quản lý, bảo dưỡng, sửa chữa theo quy định."
    },
    {
        "id": "ChuRung_050",
        "question": "Hành vi sử dụng lửa không đúng quy định pháp luật trong phân khu bảo vệ nghiêm ngặt của rừng đặc dụng bị xử phạt như thế nào theo Điểm h Khoản 2 Điều 19 Nghị định số 146/2026/NĐ-CP?",
        "options": [
            "Không vi phạm nếu lửa chỉ dùng để sưởi ấm cá nhân",
            "Bị phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng (nếu gây thiệt hại đến rừng hoặc lâm sản thì xử phạt theo điều khoản tương ứng về cháy, phá rừng)",
            "Chỉ bị xử phạt nếu ngọn lửa bùng phát cháy lan trên diện tích từ 01 ha trở lên",
            "Được phép tự do đốt lửa trong phân khu bảo vệ nghiêm ngặt nếu đứng cách gốc cây 01 mét"
        ],
        "correct": "Bị phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng (nếu gây thiệt hại đến rừng hoặc lâm sản thì xử phạt theo điều khoản tương ứng về cháy, phá rừng)",
        "explanation": "Căn cứ Điểm h Khoản 2 và Khoản 10 Điều 19 Nghị định số 146/2026/NĐ-CP (và Khoản 5 Điều 55 Nghị định số 156/2018/NĐ-CP): Hành vi sử dụng lửa không đúng quy định pháp luật trong phân khu bảo vệ nghiêm ngặt của rừng đặc dụng bị phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng; trường hợp gây thiệt hại đến rừng hoặc lâm sản thì bị xử phạt theo Điều 15, 16, 20, 23 hoặc 24 Nghị định này."
    },
    {
        "id": "ChuRung_051",
        "question": "Theo Điểm đ Khoản 4 Điều 10 Thông tư số 16/2025/TT-BNNMT, biển báo hiệu cấp dự báo cháy rừng và biển cấm lửa được bố trí lắp đặt tại đâu để tuyên truyền, cảnh báo cho người dân?",
        "options": [
            "Cất trong tủ kín của phòng làm việc Ủy ban nhân dân cấp xã",
            "Tại các khu rừng, khu dân cư sống gần rừng",
            "Chỉ lưu giữ trong kho lưu trữ nội bộ của Hạt Kiểm lâm",
            "Chỉ đặt trên đỉnh núi cao hẻo lánh không có người qua lại"
        ],
        "correct": "Tại các khu rừng, khu dân cư sống gần rừng",
        "explanation": "Căn cứ Điểm đ Khoản 4 Điều 10 Thông tư số 16/2025/TT-BNNMT (và Khoản 1 Điều 46 Nghị định số 156/2018/NĐ-CP): Một trong các hình thức tuyên truyền, phổ biến về PCCCR là xây dựng bảng tin, biển báo hiệu cấp dự báo cháy rừng, biển cấm lửa tại các khu rừng, khu dân cư sống gần rừng (ký hiệu biển báo cấp cháy rừng gồm 5 cấp từ I đến V theo Mẫu số 04 Phụ lục III NĐ 156)."
    },
    {
        "id": "ChuRung_052",
        "question": "Theo Khoản 3 Điều 46 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), cơ quan Kiểm lâm các cấp phải thông tin cấp dự báo cháy rừng liên tục hằng ngày trên phương tiện thông tin đại chúng khi dự báo đến cấp nào?",
        "options": [
            "Ngay từ cấp I (cấp thấp) và cấp II (cấp trung bình)",
            "Khi dự báo đến cấp IV (cấp nguy hiểm) và cấp V (cấp cực kỳ nguy hiểm)",
            "Chỉ khi xảy ra cháy rừng thực tế trên diện tích từ 10 ha trở lên",
            "Chỉ vào dịp tổng kết cuối năm hằng năm"
        ],
        "correct": "Khi dự báo đến cấp IV (cấp nguy hiểm) và cấp V (cấp cực kỳ nguy hiểm)",
        "explanation": "Căn cứ Khoản 3 Điều 46 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Cơ quan Kiểm lâm các cấp căn cứ tình hình thời tiết, khí tượng thủy văn để dự báo và thông tin cấp dự báo cháy rừng liên tục hàng ngày trên các phương tiện thông tin đại chúng khi dự báo đến cấp IV và cấp V."
    },
    {
        "id": "ChuRung_053",
        "question": "Hành vi đốt lửa, sử dụng lửa để lấy mật ong trong rừng làm lửa bùng phát gây cháy rừng bị xử lý như thế nào?",
        "options": [
            "Được miễn trách nhiệm nếu giao nộp lại toàn bộ mật ong thu được",
            "Bị xử phạt VPHC, buộc trồng lại rừng, bồi thường thiệt hại hoặc bị truy cứu TNHS về Tội hủy hoại rừng nếu đủ định lượng",
            "Chỉ bị phạt tiền mức 500.000 đồng nếu người lấy mật ong tự khắc phục hậu quả ban đầu",
            "Không bị xử lý nếu lấy mật ong để làm thuốc chữa bệnh cho gia đình"
        ],
        "correct": "Bị xử phạt VPHC, buộc trồng lại rừng, bồi thường thiệt hại hoặc bị truy cứu TNHS về Tội hủy hoại rừng nếu đủ định lượng",
        "explanation": "Căn cứ Điểm i Khoản 3, Khoản 10 Điều 19 và Điều 20 Nghị định số 146/2026/NĐ-CP, Điều 13 Luật Xử lý vi phạm hành chính và Điều 243 Bộ luật Hình sự: Riêng hành vi đốt lửa, sử dụng lửa để lấy mật ong rừng bị phạt tiền từ 3.000.000 đồng đến 5.000.000 đồng; nếu gây cháy rừng thì bị xử phạt theo Điều 20 Nghị định 146/2026/NĐ-CP (và buộc trồng lại rừng), phải bồi thường thiệt hại theo pháp luật dân sự hoặc truy cứu TNHS về Tội hủy hoại rừng nếu đủ định lượng tại Điều 243 BLHS."
    },
    {
        "id": "ChuRung_054",
        "question": "Theo Điều 48 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), khi lập dự án phát triển rừng phải có giải pháp phòng cháy và chữa cháy bảo đảm nội dung nào sau đây?",
        "options": [
            "Giải pháp ngăn cháy, chống cháy lan giữa các lô, khoảnh, tiểu khu rừng đến công trình hiện có; công trình PCCCR phù hợp từng loại rừng; dự toán bảo đảm đủ kinh phí hạng mục PCCCR",
            "Chỉ cần trồng xen cây vối thuốc, xoan đào làm đường băng xanh mà không cần dự toán kinh phí công trình PCCCR",
            "Không cần thiết kế giải pháp ngăn cháy nếu dự án phát triển rừng có quy mô dưới 500 ha",
            "Chỉ áp dụng yêu cầu phòng cháy đối với dự án trồng rừng thông, không áp dụng cho các loại rừng khác"
        ],
        "correct": "Giải pháp ngăn cháy, chống cháy lan giữa các lô, khoảnh, tiểu khu rừng đến công trình hiện có; công trình PCCCR phù hợp từng loại rừng; dự toán bảo đảm đủ kinh phí hạng mục PCCCR",
        "explanation": "Căn cứ Điều 48 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Khi lập dự án phát triển rừng phải có giải pháp phòng cháy và chữa cháy bảo đảm 3 nội dung: (1) Giải pháp ngăn cháy, chống cháy lan giữa các lô, khoảnh, tiểu khu rừng phù hợp đặc điểm cháy từng loại rừng và đến đường sắt, đường dây điện cao thế, đường ống dẫn khí/dầu, nhà và công trình hiện có; (2) Công trình PCCCR phù hợp đặc điểm từng loại rừng; (3) Dự toán thiết kế bảo đảm đủ kinh phí cho việc thực hiện các hạng mục công trình PCCCR."
    },
    {
        "id": "ChuRung_055",
        "question": "Theo Luật Lâm nghiệp và Nghị định số 58/2024/NĐ-CP, việc tổ chức và duy trì hoạt động của lực lượng quần chúng bảo vệ rừng ở cơ sở gắn với trách nhiệm của cơ quan nào?",
        "options": [
            "Cơ quan Kiểm lâm tổ chức lực lượng quần chúng bảo vệ rừng ở cơ sở; UBND cấp xã duy trì hoạt động thường xuyên của tổ, đội quần chúng bảo vệ rừng trên diện tích rừng chưa giao, chưa cho thuê",
            "Do các cháu thiếu nhi trong thôn tự lập và điều hành",
            "Do doanh nghiệp thu mua gỗ tư nhân tự ký quyết định thành lập cho toàn xã",
            "Do hội người cao tuổi tự quản không liên quan đến Kiểm lâm hay chính quyền xã"
        ],
        "correct": "Cơ quan Kiểm lâm tổ chức lực lượng quần chúng bảo vệ rừng ở cơ sở; UBND cấp xã duy trì hoạt động thường xuyên của tổ, đội quần chúng bảo vệ rừng trên diện tích rừng chưa giao, chưa cho thuê",
        "explanation": "Căn cứ Điểm e Khoản 1 Điều 104, Điểm e Khoản 3 Điều 102 Luật Lâm nghiệp và Điểm đ Khoản 3 Điều 5 Nghị định số 58/2024/NĐ-CP (sửa đổi bởi Nghị định số 42/2026/NĐ-CP): Kiểm lâm có nhiệm vụ tuyên truyền, vận động Nhân dân bảo vệ và phát triển rừng, tổ chức lực lượng quần chúng bảo vệ rừng ở cơ sở; UBND cấp xã tổ chức quản lý, bảo vệ rừng và duy trì hoạt động thường xuyên của tổ, đội quần chúng bảo vệ rừng đối với diện tích rừng chưa giao, chưa cho thuê."
    },
    {
        "id": "ChuRung_056",
        "question": "Theo Điểm b Khoản 5 Điều 51a Nghị định số 156/2018/NĐ-CP (bổ sung bởi Nghị định số 42/2026/NĐ-CP), một trong những nhiệm vụ của người chỉ huy chữa cháy rừng là gì?",
        "options": [
            "Ưu tiên khai thác, thu hồi gỗ quý trước khi tổ chức cứu người bị nạn",
            "Trực tiếp điều hành lực lượng, phương tiện chữa cháy và tổ chức thực hiện các biện pháp bảo đảm an toàn cho lực lượng, phương tiện tham gia chữa cháy",
            "Tập trung cứu tài sản doanh nghiệp trước, không cần bảo đảm an toàn cho người tham gia chữa cháy",
            "Cho phép lực lượng tham gia chữa cháy hành động tự do, không cần tuân theo điều hành"
        ],
        "correct": "Trực tiếp điều hành lực lượng, phương tiện chữa cháy và tổ chức thực hiện các biện pháp bảo đảm an toàn cho lực lượng, phương tiện tham gia chữa cháy",
        "explanation": "Căn cứ Điểm b Khoản 5 Điều 51a Nghị định số 156/2018/NĐ-CP (do Điều 25 Nghị định số 42/2026/NĐ-CP bổ sung, hợp nhất tại VBHN số 13/VBHN-BNNMT): Người chỉ huy chữa cháy rừng trực tiếp điều hành các lực lượng, phương tiện tham gia chữa cháy rừng; tổ chức khảo sát đám cháy; xác định vị trí, hướng chữa cháy chính và tổ chức thực hiện các biện pháp bảo đảm an toàn cho lực lượng, phương tiện tham gia chữa cháy."
    },
    {
        "id": "ChuRung_057",
        "question": "Theo Khoản 3 Điều 52a Nghị định số 156/2018/NĐ-CP (bổ sung bởi Nghị định số 42/2026/NĐ-CP), người được điều động, huy động chữa cháy và phục vụ chữa cháy rừng trong khi trực tiếp làm nhiệm vụ bị chết, bị thương được xem xét giải quyết chế độ gì?",
        "options": [
            "Không được giải quyết bất kỳ chế độ, chính sách nào",
            "Được xem xét công nhận là liệt sĩ, thương binh, người hưởng chính sách như thương binh theo quy định của pháp luật về ưu đãi người có công với cách mạng",
            "Chỉ được thanh toán tiền thuốc cấp cứu ban đầu mà không được hưởng chế độ ưu đãi người có công",
            "Gia đình phải tự chi trả toàn bộ chi phí điều trị và mai táng"
        ],
        "correct": "Được xem xét công nhận là liệt sĩ, thương binh, người hưởng chính sách như thương binh theo quy định của pháp luật về ưu đãi người có công với cách mạng",
        "explanation": "Căn cứ Khoản 3 Điều 52a Nghị định số 156/2018/NĐ-CP (do Điều 26 Nghị định số 42/2026/NĐ-CP bổ sung, hợp nhất tại VBHN số 13/VBHN-BNNMT): Người được điều động, huy động chữa cháy và phục vụ chữa cháy rừng trong khi trực tiếp làm nhiệm vụ bị chết, bị thương thì được xem xét công nhận là liệt sĩ, thương binh, người hưởng chính sách như thương binh theo quy định của pháp luật về ưu đãi người có công với cách mạng."
    },
    {
        "id": "ChuRung_058",
        "question": "Chủ rừng không chấp hành quy định lập phương án phòng cháy, chữa cháy rừng bị xử phạt như thế nào?",
        "options": [
            "Bị xử phạt tiền từ 20.000.000 đồng đến 25.000.000 đồng theo Điểm a Khoản 7 Điều 19 Nghị định số 146/2026/NĐ-CP",
            "Được Nhà nước làm hộ mà không cần quan tâm",
            "Chỉ bị phạt tiền tối đa không quá 500.000 đồng nếu chưa để xảy ra cháy rừng trên thực tế",
            "Chỉ bị ghi tên vào sổ tay của xã"
        ],
        "correct": "Bị xử phạt tiền từ 20.000.000 đồng đến 25.000.000 đồng theo Điểm a Khoản 7 Điều 19 Nghị định số 146/2026/NĐ-CP",
        "explanation": "Căn cứ Điểm a Khoản 7 Điều 19 Nghị định số 146/2026/NĐ-CP: Chủ rừng không xây dựng phương án phòng cháy và chữa cháy rừng theo quy định bị phạt tiền từ 20.000.000 đồng đến 25.000.000 đồng."
    },
    {
        "id": "ChuRung_059",
        "question": "Theo Khoản 4 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), việc sử dụng lửa ở những cơ sở, công trình, công trường và nhà ở được phép bố trí ở trong rừng phải bảo đảm yêu cầu gì?",
        "options": [
            "Phải bảo đảm không để cháy lan vào rừng và sau khi sử dụng lửa phải dập tắt hết tàn lửa",
            "Được phép sử dụng lửa tùy ý vào ban ngày miễn là có mái che bằng tôn",
            "Chỉ cần dọn sạch lá khô trong bán kính 0,5 mét rồi có thể để lửa tự tắt",
            "Không có quy định hạn chế nào nếu công trình đã được cấp phép xây dựng"
        ],
        "correct": "Phải bảo đảm không để cháy lan vào rừng và sau khi sử dụng lửa phải dập tắt hết tàn lửa",
        "explanation": "Căn cứ Khoản 4 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Sử dụng lửa ở những cơ sở, công trình, công trường và nhà ở được phép bố trí ở trong rừng phải bảo đảm không để cháy lan vào rừng; sau khi sử dụng lửa phải dập tắt hết tàn lửa (người vi phạm không bảo đảm an toàn bị xử phạt từ 5.000.000 đồng đến 10.000.000 đồng theo Điểm g Khoản 4 Điều 19 NĐ 146/2026/NĐ-CP)."
    },
    {
        "id": "ChuRung_060",
        "question": "Theo Khoản 1 Điều 51 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), người phát hiện cháy rừng phải bằng mọi cách báo cháy ngay cho ai?",
        "options": [
            "Người xung quanh và chủ rừng, đội PCCCR, cơ quan Kiểm lâm hoặc Cảnh sát PCCC và cứu nạn cứu hộ, chính quyền địa phương sở tại hoặc Công an, Quân đội nơi gần nhất",
            "Chỉ cần đăng bài lên mạng xã hội chờ người khác xử lý",
            "Chỉ báo cho người thân trong gia đình để tự bảo vệ tài sản riêng",
            "Chỉ báo cáo sau khi đám cháy đã kéo dài qua 24 giờ mà chưa tự tắt"
        ],
        "correct": "Người xung quanh và chủ rừng, đội PCCCR, cơ quan Kiểm lâm hoặc Cảnh sát PCCC và cứu nạn cứu hộ, chính quyền địa phương sở tại hoặc Công an, Quân đội nơi gần nhất",
        "explanation": "Căn cứ Khoản 1 Điều 51 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT) và Điểm đ Khoản 5 Điều 19 Nghị định số 146/2026/NĐ-CP: Người phát hiện cháy rừng phải bằng mọi cách báo cháy ngay cho người xung quanh và cho một hoặc các đơn vị: chủ rừng; đội PCCCR; cơ quan Kiểm lâm hoặc Cảnh sát PCCC và cứu nạn cứu hộ; chính quyền địa phương sở tại hoặc Công an, Quân đội nơi gần nhất. Người phát hiện cháy rừng không báo cháy bị phạt tiền từ 10.000.000 đồng đến 15.000.000 đồng."
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
        "explanation": "Căn cứ Điều 5, Điều 9, Điều 12, Điều 19 Nghị định số 58/2024/NĐ-CP (được sửa đổi, bổ sung bởi Nghị định số 42/2026/NĐ-CP) và Điều 63 Luật Lâm nghiệp năm 2017: Hộ gia đình đồng bào dân tộc thiểu số, hộ nghèo nhận khoán bảo vệ rừng tự nhiên được Nhà nước hỗ trợ tiền công khoán bảo vệ rừng hàng năm từ nguồn ngân sách nhà nước và được chi trả tiền dịch vụ môi trường rừng đối với diện tích cung ứng dịch vụ môi trường rừng."
    },
    {
        "id": "ChuRung_062",
        "question": "Mức hỗ trợ kinh phí khoán bảo vệ rừng cho người dân hiện nay theo chính sách Nhà nước bình quân khoảng bao nhiêu?",
        "options": [
            "Khoảng 50.000 đồng/ha/năm",
            "Bình quân 1.000.000 đồng/ha/năm (tại xã khu vực II, khu vực III bằng 1,2 lần mức bình quân là 1.200.000 đồng/ha/năm; vùng đất ven biển bằng 1,5 lần mức bình quân là 1.500.000 đồng/ha/năm)",
            "Khoảng 200.000 đồng đến 300.000 đồng/ha/năm",
            "Khoảng 50 triệu đồng/ha/năm"
        ],
        "correct": "Bình quân 1.000.000 đồng/ha/năm (tại xã khu vực II, khu vực III bằng 1,2 lần mức bình quân là 1.200.000 đồng/ha/năm; vùng đất ven biển bằng 1,5 lần mức bình quân là 1.500.000 đồng/ha/năm)",
        "explanation": "Căn cứ Điểm a Khoản 3 Điều 19 Nghị định số 58/2024/NĐ-CP (được sửa đổi, bổ sung bởi Điều 44 Nghị định số 42/2026/NĐ-CP): Kinh phí khoán bảo vệ rừng đặc dụng, rừng phòng hộ, rừng sản xuất là rừng tự nhiên bình quân là 1.000.000 đồng/ha/năm; đối với xã khu vực II, khu vực III bằng 1,2 lần mức bình quân (1.200.000 đồng/ha/năm), vùng đất ven biển bằng 1,5 lần mức bình quân (1.500.000 đồng/ha/năm)."
    },
    {
        "id": "ChuRung_063",
        "question": "Theo Khoản 2 Điều 63 Luật Lâm nghiệp, tiền dịch vụ môi trường rừng chi trả cho bên cung ứng dịch vụ có nguồn gốc từ các đối tượng nào sau đây?",
        "options": [
            "Do nhân dân trong thôn tự quyên góp hằng tháng",
            "Từ các cơ sở sử dụng DVMTR như cơ sở sản xuất thủy điện, sản xuất và cung ứng nước sạch, sản xuất công nghiệp, kinh doanh du lịch sinh thái, nuôi trồng thủy sản...",
            "Trích từ nguồn thu thuế sử dụng đất phi nông nghiệp của Ủy ban nhân dân cấp xã",
            "Chỉ từ tiền viện trợ nhân đạo của các tổ chức phi chính phủ nước ngoài"
        ],
        "correct": "Từ các cơ sở sử dụng DVMTR như cơ sở sản xuất thủy điện, sản xuất và cung ứng nước sạch, sản xuất công nghiệp, kinh doanh du lịch sinh thái, nuôi trồng thủy sản...",
        "explanation": "Căn cứ Khoản 2 Điều 63 Luật Lâm nghiệp: Đối tượng phải chi trả tiền dịch vụ môi trường rừng bao gồm cơ sở sản xuất thủy điện; cơ sở sản xuất và cung ứng nước sạch; cơ sở sản xuất công nghiệp; tổ chức, cá nhân kinh doanh dịch vụ du lịch sinh thái, nghỉ dưỡng, giải trí; tổ chức, cá nhân có nhu cầu sử dụng kết quả giảm phát thải khí nhà kính, tín chỉ các-bon rừng; cơ sở nuôi trồng thủy sản và các đối tượng khác theo quy định pháp luật."
    },
    {
        "id": "ChuRung_064",
        "question": "Theo Điểm b Khoản 3 Điều 71 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), việc tạm ứng, thanh toán tiền dịch vụ môi trường rừng đối với hộ gia đình, cá nhân, cộng đồng dân cư được thực hiện bằng hình thức nào?",
        "options": [
            "Qua tài khoản hoặc bằng tiền mặt (Nhà nước khuyến khích thực hiện qua tài khoản ở những nơi đủ điều kiện)",
            "Chỉ nhận bằng hiện vật là lương thực hoặc giống cây trồng",
            "Chỉ nhận trực tiếp tại trụ sở Chi cục Kiểm lâm cấp tỉnh vào cuối mỗi quý",
            "Nhờ người quen nhận thay tại nhà riêng của Trưởng thôn vào ban đêm"
        ],
        "correct": "Qua tài khoản hoặc bằng tiền mặt (Nhà nước khuyến khích thực hiện qua tài khoản ở những nơi đủ điều kiện)",
        "explanation": "Căn cứ Điểm b Khoản 3 Điều 71 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Đối với hộ gia đình, cá nhân, cộng đồng dân cư thực hiện tạm ứng, thanh toán tiền dịch vụ môi trường rừng qua tài khoản hoặc bằng tiền mặt; Nhà nước khuyến khích tạm ứng, thanh toán qua tài khoản ở những nơi đủ điều kiện thực hiện."
    },
    {
        "id": "ChuRung_065",
        "question": "Theo Khoản 1 Điều 21 Nghị định số 58/2024/NĐ-CP, chính sách trợ cấp gạo bảo vệ và phát triển rừng áp dụng cho những đối tượng hộ gia đình nào?",
        "options": [
            "Tất cả mọi hộ gia đình cư trú trên địa bàn tỉnh không phân biệt thu nhập hay địa bàn",
            "Hộ gia đình nghèo, hộ gia đình đồng bào dân tộc thiểu số tại xã khu vực II và III thực hiện các hoạt động bảo vệ và phát triển rừng theo quy định",
            "Chỉ áp dụng cho các hộ gia đình có diện tích đất lâm nghiệp từ 10 ha trở lên ở vùng đồng bằng",
            "Chỉ áp dụng cho các hộ kinh doanh buôn bán lâm sản ở thị trấn"
        ],
        "correct": "Hộ gia đình nghèo, hộ gia đình đồng bào dân tộc thiểu số tại xã khu vực II và III thực hiện các hoạt động bảo vệ và phát triển rừng theo quy định",
        "explanation": "Căn cứ Khoản 1 và Khoản 2 Điều 21 Nghị định số 58/2024/NĐ-CP: Đối tượng được trợ cấp gạo bảo vệ và phát triển rừng là hộ gia đình nghèo, hộ gia đình đồng bào dân tộc thiểu số tại xã khu vực II và III thực hiện bảo vệ rừng, khoanh nuôi xúc tiến tái sinh có trồng bổ sung, trồng rừng phòng hộ, trồng rừng sản xuất và phát triển lâm sản ngoài gỗ, trồng rừng thay đổi tập quán du canh du cư, trồng rừng thay thế nương rẫy; mức trợ cấp 15 kg gạo/khẩu/tháng, thời gian trợ cấp tối đa 7 năm."
    },
    {
        "id": "ChuRung_066",
        "question": "Theo Điều 15 Nghị định số 58/2024/NĐ-CP (sửa đổi bởi Nghị định số 42/2026/NĐ-CP), hộ gia đình, cá nhân vay vốn đầu tư trồng rừng gỗ lớn tại ngân hàng thương mại được ngân sách địa phương hỗ trợ lãi suất với thời gian tối đa và tỷ lệ vốn vay được hỗ trợ như thế nào?",
        "options": [
            "Hỗ trợ chênh lệch lãi suất tối đa 12 năm trên số vốn vay không quá 70% tổng vốn vay tại ngân hàng thương mại",
            "Hỗ trợ 100% vốn vay không cần hoàn trả gốc tại mọi tổ chức tín dụng tư nhân",
            "Chỉ hỗ trợ lãi suất tối đa 01 năm cho không quá 10% tổng vốn vay",
            "Không có chính sách hỗ trợ lãi suất vay ngân hàng thương mại đối với hộ gia đình trồng rừng gỗ lớn"
        ],
        "correct": "Hỗ trợ chênh lệch lãi suất tối đa 12 năm trên số vốn vay không quá 70% tổng vốn vay tại ngân hàng thương mại",
        "explanation": "Căn cứ Khoản 1 và Khoản 2 Điều 15 Nghị định số 58/2024/NĐ-CP (sửa đổi bởi Điều 43 Nghị định số 42/2026/NĐ-CP): Chủ rừng là hộ gia đình, cá nhân trồng rừng gỗ lớn được ngân sách địa phương hỗ trợ lãi suất vay thương mại bằng chênh lệch lãi suất vay thương mại so với lãi suất cho vay tín dụng đầu tư của Nhà nước, thời gian tối đa 12 năm tính từ ngày giải ngân, trên số vốn vay được hỗ trợ tối đa không quá 70% tổng vốn vay tại ngân hàng thương mại."
    },
    {
        "id": "ChuRung_067",
        "question": "Theo Luật Lâm nghiệp và Nghị định số 156/2018/NĐ-CP, Nhà nước hỗ trợ thâm canh rừng trồng cung cấp gỗ lớn, trồng cây bản địa nhằm mục tiêu gì?",
        "options": [
            "Chỉ để lấy lá xanh làm phân bón ruộng",
            "Góp phần bảo vệ và phát triển rừng sản xuất theo chuỗi giá trị, nâng cao giá trị kinh tế và bảo vệ môi trường bền vững",
            "Để rút ngắn chu kỳ khai thác xuống còn 01 năm lấy gỗ non bán dăm",
            "Chỉ nhằm mục đích chặt làm củi đun cho hộ gia đình"
        ],
        "correct": "Góp phần bảo vệ và phát triển rừng sản xuất theo chuỗi giá trị, nâng cao giá trị kinh tế và bảo vệ môi trường bền vững",
        "explanation": "Căn cứ Khoản 4 Điều 4 Luật Lâm nghiệp và Điểm a Khoản 1 Điều 88 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Nhà nước tổ chức, hỗ trợ phát triển rừng sản xuất, trồng rừng gỗ lớn, chuyển hóa rừng trồng gỗ nhỏ sang rừng trồng gỗ lớn, trồng cây bản địa, trồng rừng hỗn loài nhằm nâng cao giá trị kinh tế, quản lý rừng bền vững và bảo vệ môi trường."
    },
    {
        "id": "ChuRung_068",
        "question": "Khi tổ chức, hộ gia đình được giao thực hiện trồng rừng thay thế hoặc hỗ trợ trồng rừng sản xuất từ nguồn tiền trồng rừng thay thế, nguồn kinh phí này được nộp và quản lý tại đâu?",
        "options": [
            "Chủ rừng tự bỏ toàn bộ tiền túi mà không được sử dụng nguồn tiền trồng rừng thay thế",
            "Nộp về Quỹ bảo vệ và phát triển rừng cấp tỉnh (hoặc Sở NN&MT nếu chưa thành lập Quỹ) để sử dụng theo kế hoạch do Chủ tịch UBND cấp tỉnh phê duyệt",
            "Từ nguồn thu xử phạt vi phạm giao thông giao cho Công an cấp xã",
            "Do tổ chức phi chính phủ nước ngoài trực tiếp cấp phát không qua ngân sách hay Quỹ"
        ],
        "correct": "Nộp về Quỹ bảo vệ và phát triển rừng cấp tỉnh (hoặc Sở NN&MT nếu chưa thành lập Quỹ) để sử dụng theo kế hoạch do Chủ tịch UBND cấp tỉnh phê duyệt",
        "explanation": "Căn cứ Khoản 4 Điều 21 Luật Lâm nghiệp (VBHN số 68/VBHN-VPQH) và Khoản 3 Điều 10, Điều 12 Thông tư số 84/2025/TT-BNNMT: Số tiền trồng rừng thay thế do chủ đầu tư dự án nộp về Quỹ bảo vệ và phát triển rừng cấp tỉnh (hoặc Sở Nông nghiệp và Môi trường đối với địa phương chưa thành lập Quỹ); Chủ tịch UBND cấp tỉnh phê duyệt kế hoạch, giao đơn vị thực hiện và quyết định sử dụng để trồng rừng, khoanh nuôi xúc tiến tái sinh tự nhiên hoặc hỗ trợ trồng rừng sản xuất gỗ lớn."
    },
    {
        "id": "ChuRung_069",
        "question": "Theo Điểm a Khoản 3 Điều 70 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), cộng đồng dân cư là chủ rừng nhận tiền dịch vụ môi trường rừng được sử dụng số tiền này để làm gì?",
        "options": [
            "Không được sử dụng mà phải nộp lại toàn bộ cho Trưởng thôn giữ riêng",
            "Được sử dụng toàn bộ số tiền dịch vụ môi trường rừng để quản lý bảo vệ, phát triển rừng và nâng cao đời sống",
            "Chỉ được phép chia đều tiền mặt để mua rượu, thực phẩm liên hoan trong ngày Tết",
            "Bắt buộc phải gửi tiết kiệm tư nhân và không được chi cho công tác bảo vệ rừng"
        ],
        "correct": "Được sử dụng toàn bộ số tiền dịch vụ môi trường rừng để quản lý bảo vệ, phát triển rừng và nâng cao đời sống",
        "explanation": "Căn cứ Điểm a Khoản 3 Điều 70 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Chủ rừng là hộ gia đình, cá nhân, cộng đồng dân cư được sử dụng toàn bộ số tiền dịch vụ môi trường rừng để quản lý bảo vệ, phát triển rừng và nâng cao đời sống. (Chính sách hỗ trợ vật liệu xây dựng nhà văn hóa, đường giao thông thôn thuộc Điều 8 Nghị định số 58/2024/NĐ-CP về hỗ trợ cộng đồng dân cư vùng đệm rừng đặc dụng)."
    },
    {
        "id": "ChuRung_070",
        "question": "Theo Nghị định số 58/2024/NĐ-CP, việc thanh toán kinh phí bảo vệ rừng và khoán bảo vệ rừng hằng năm phải căn cứ vào kết quả nào?",
        "options": [
            "Không cần kiểm tra, rừng bị cháy hết vẫn được nhận đủ tiền",
            "Kết quả nghiệm thu, đánh giá hằng năm xác nhận diện tích rừng được bảo vệ an toàn; nếu để xảy ra mất rừng, phá rừng thì lập biên bản xác định và xử lý theo quy định",
            "Chỉ cần có lời hứa miệng của người nhận khoán là đủ điều kiện thanh toán",
            "Chỉ cần nộp đơn xin nhận tiền mà không cần nghiệm thu hiện trường"
        ],
        "correct": "Kết quả nghiệm thu, đánh giá hằng năm xác nhận diện tích rừng được bảo vệ an toàn; nếu để xảy ra mất rừng, phá rừng thì lập biên bản xác định và xử lý theo quy định",
        "explanation": "Căn cứ Điểm b Khoản 4 Điều 5 và Khoản 5 Điều 19 Nghị định số 58/2024/NĐ-CP: Hằng năm, bên khoán (hoặc UBND cấp xã cùng Kiểm lâm làm việc tại địa bàn đối với cộng đồng dân cư) có trách nhiệm nghiệm thu, đánh giá kết quả thực hiện bảo vệ rừng làm căn cứ thanh toán, quyết toán kinh phí; trường hợp để xảy ra mất rừng, phá rừng hoặc không thực hiện theo kế hoạch thì lập biên bản xác định diện tích mất/suy giảm, rõ nguyên nhân và xử lý theo quy định."
    },
    {
        "id": "ChuRung_071",
        "question": "Theo Điều 14 Nghị định số 58/2024/NĐ-CP (sửa đổi bởi Điều 42 Nghị định số 42/2026/NĐ-CP), hộ gia đình được hỗ trợ đầu tư trồng rừng sản xuất và phát triển lâm sản ngoài gỗ phải đáp ứng các điều kiện nào?",
        "options": [
            "Tự ý bán cây giống lấy tiền chi tiêu cá nhân mà không cần có đất trồng rừng",
            "Có đất trồng rừng sản xuất hợp pháp, không có tranh chấp, chưa được hỗ trợ vốn đầu tư/tín dụng đầu tư nhà nước trước đó; cây giống trồng rừng phải có đủ hồ sơ theo quy định",
            "Được tự ý nhận hỗ trợ trùng lặp từ nhiều chương trình nhà nước cho cùng một lô rừng",
            "Chỉ cần trồng một vài cây phân tán xung quanh sân nhà không theo dự án được duyệt"
        ],
        "correct": "Có đất trồng rừng sản xuất hợp pháp, không có tranh chấp, chưa được hỗ trợ vốn đầu tư/tín dụng đầu tư nhà nước trước đó; cây giống trồng rừng phải có đủ hồ sơ theo quy định",
        "explanation": "Căn cứ Khoản 2, Khoản 3 và Khoản 4 Điều 14 Nghị định số 58/2024/NĐ-CP (sửa đổi bởi Điều 42 Nghị định số 42/2026/NĐ-CP): Để được hỗ trợ theo dự án (bình quân 15.000.000 đồng/ha/chu kỳ mua cây giống, vật tư, phân bón và 500.000 đồng/ha/4 năm khuyến lâm), chủ rừng phải có đất trồng rừng sản xuất hợp pháp, không tranh chấp, không hỗ trợ lặp lại với diện tích đã được Nhà nước đầu tư hoặc dùng vốn tín dụng đầu tư của Nhà nước, và cây giống phải có đủ hồ sơ theo quy định của Chính phủ."
    },
    {
        "id": "ChuRung_072",
        "question": "Theo Điều 16 Nghị định số 58/2024/NĐ-CP, chủ rừng có rừng trồng sản xuất (trừ doanh nghiệp có vốn đầu tư nước ngoài) được cấp chứng chỉ quản lý rừng bền vững thì được Nhà nước hỗ trợ kinh phí như thế nào?",
        "options": [
            "Hỗ trợ sau đầu tư một lần kinh phí xây dựng phương án quản lý rừng bền vững và cấp chứng chỉ tối đa 400.000 đồng/ha",
            "Không được Nhà nước hỗ trợ bất kỳ khoản kinh phí nào",
            "Được miễn toàn bộ thuế thu nhập và thuế tài nguyên trọn đời",
            "Chủ rừng phải nộp phạt hành chính cho tổ chức cấp chứng chỉ"
        ],
        "correct": "Hỗ trợ sau đầu tư một lần kinh phí xây dựng phương án quản lý rừng bền vững và cấp chứng chỉ tối đa 400.000 đồng/ha",
        "explanation": "Căn cứ Điều 28 Luật Lâm nghiệp và Khoản 1, 2, 3 Điều 16 Nghị định số 58/2024/NĐ-CP: Chủ rừng tự nguyện xây dựng phương án quản lý rừng bền vững và đề nghị cấp chứng chỉ quản lý rừng bền vững; khi có dự án được UBND cấp tỉnh phê duyệt và có diện tích rừng trồng sản xuất được cấp chứng chỉ thì được hỗ trợ sau đầu tư một lần tối đa 400.000 đồng/ha (hộ gia đình, cá nhân, cộng đồng dân cư hình thành nhóm hộ nhận hỗ trợ qua UBND cấp xã)."
    },
    {
        "id": "ChuRung_073",
        "question": "Khi Nhà nước quy hoạch lại 3 loại rừng mà rừng của hộ gia đình từ rừng sản xuất chuyển thành rừng phòng hộ thì sao?",
        "options": [
            "Người dân bị mất trắng toàn bộ tài sản",
            "Chủ tịch UBND cấp tỉnh quyết định chuyển loại rừng và cập nhật vào hồ sơ quản lý lâm nghiệp, đất đai; hộ gia đình thực hiện quyền, nghĩa vụ của chủ rừng phòng hộ và được hưởng kinh phí bảo vệ rừng phòng hộ theo quy định (nếu Nhà nước thu hồi rừng thì mới thực hiện bồi thường, hỗ trợ)",
            "Người dân vẫn giữ nguyên quyền khai thác trắng như đối với rừng sản xuất trước đây",
            "Không có chính sách giải quyết"
        ],
        "correct": "Chủ tịch UBND cấp tỉnh quyết định chuyển loại rừng và cập nhật vào hồ sơ quản lý lâm nghiệp, đất đai; hộ gia đình thực hiện quyền, nghĩa vụ của chủ rừng phòng hộ và được hưởng kinh phí bảo vệ rừng phòng hộ theo quy định (nếu Nhà nước thu hồi rừng thì mới thực hiện bồi thường, hỗ trợ)",
        "explanation": "Căn cứ Điều 18, Điều 55, Điều 81, Điều 84 Luật Lâm nghiệp năm 2017; Điều 39, Điều 40 Nghị định số 156/2018/NĐ-CP và Điều 9 Nghị định số 58/2024/NĐ-CP: Điều 18 Luật Lâm nghiệp quy định về Chuyển loại rừng (phù hợp quy hoạch lâm nghiệp, đáp ứng tiêu chí phân loại rừng và có phương án chuyển loại rừng do UBND cấp xã lập đối với diện tích rừng của hộ gia đình theo Khoản 1 Điều 39 Nghị định 156/2018/NĐ-CP). Sau khi có quyết định chuyển loại rừng của Chủ tịch UBND cấp tỉnh và cập nhật hồ sơ quản lý lâm nghiệp, đất đai (Khoản 4 Điều 40 Nghị định 156/2018/NĐ-CP), hộ gia đình thực hiện quyền và nghĩa vụ của chủ rừng phòng hộ, được cấp kinh phí bảo vệ rừng phòng hộ bình quân 1.000.000 đồng/ha/năm (còn việc bồi thường chỉ đặt ra khi Nhà nước quyết định thu hồi rừng theo Khoản 2 Điều 22, Khoản 6 Điều 73 Luật Lâm nghiệp và Điều 43a, Điều 44 Nghị định 156/2018/NĐ-CP)."
    },
    {
        "id": "ChuRung_074",
        "question": "Theo Nghị định số 58/2024/NĐ-CP, chính sách ưu tiên khoán bảo vệ rừng và trợ cấp gạo bảo vệ, phát triển rừng hướng tới đối tượng hộ gia đình nào?",
        "options": [
            "Hộ gia đình nghèo, hộ gia đình đồng bào dân tộc thiểu số sinh sống tại xã khu vực II, khu vực III",
            "Chỉ các doanh nghiệp đóng trụ sở tại khu vực đô thị loại đặc biệt",
            "Các doanh nghiệp chế biến gỗ xuất khẩu có vốn điều lệ trên 100 tỷ đồng",
            "Chỉ các hộ gia đình khá giả có tài sản thế chấp lớn"
        ],
        "correct": "Hộ gia đình nghèo, hộ gia đình đồng bào dân tộc thiểu số sinh sống tại xã khu vực II, khu vực III",
        "explanation": "Căn cứ Khoản 1 Điều 19 và Khoản 1 Điều 21 Nghị định số 58/2024/NĐ-CP: Nhà nước ưu tiên khoán bảo vệ rừng cho hộ gia đình đồng bào dân tộc thiểu số, hộ gia đình người dân tộc Kinh thuộc diện hộ nghèo tại xã khu vực II, III (cùng hộ gia đình, cá nhân, cộng đồng dân cư tại địa phương) và thực hiện trợ cấp gạo bảo vệ và phát triển rừng cho hộ gia đình nghèo, hộ gia đình đồng bào dân tộc thiểu số tại xã khu vực II và III."
    },
    {
        "id": "ChuRung_075",
        "question": "Theo Điểm đ Khoản 1 Điều 104 Luật Lâm nghiệp, cơ quan Kiểm lâm có nhiệm vụ hướng dẫn, bồi dưỡng, tập huấn cho chủ rừng nội dung nào sau đây?",
        "options": [
            "Hướng dẫn chủ rừng lập và thực hiện phương án PCCCR; bồi dưỡng, tập huấn nghiệp vụ bảo vệ rừng, phòng cháy và chữa cháy rừng cho chủ rừng",
            "Trực tiếp thay mặt chủ rừng thuê nhân công trồng cây và bao tiêu tiêu thụ toàn bộ gỗ rừng trồng",
            "Cấp vốn vay không lãi suất và trực tiếp làm thủ tục bán gỗ cho thương lái",
            "Miễn toàn bộ trách nhiệm lập phương án PCCCR cho mọi chủ rừng trên địa bàn"
        ],
        "correct": "Hướng dẫn chủ rừng lập và thực hiện phương án PCCCR; bồi dưỡng, tập huấn nghiệp vụ bảo vệ rừng, phòng cháy và chữa cháy rừng cho chủ rừng",
        "explanation": "Căn cứ Điểm đ Khoản 1 Điều 104 Luật Lâm nghiệp: Kiểm lâm có nhiệm vụ hướng dẫn chủ rừng lập và thực hiện phương án phòng cháy và chữa cháy rừng; bồi dưỡng, tập huấn nghiệp vụ bảo vệ rừng, phòng cháy và chữa cháy rừng cho chủ rừng (đồng thời Khoản 5 Điều 73 Luật Lâm nghiệp quy định chủ rừng có quyền được hướng dẫn về kỹ thuật để bảo vệ và phát triển rừng)."
    },
    {
        "id": "ChuRung_076",
        "question": "Hành vi nào sau đây bị xử phạt về hành vi 'Phá rừng' theo Điều 23 Nghị định số 146/2026/NĐ-CP?",
        "options": [
            "Đi bộ trên đường mòn trong rừng không mang công cụ trái phép",
            "Chặt, đốt, phá cây rừng; đào, bới, san ủi đất rừng; bóc vỏ, ken cây, đổ hóa chất hủy hoại gốc, rễ cây rừng mà không được phép",
            "Khai thác gỗ rừng trồng sản xuất của gia đình nhưng chưa nộp bản kê lâm sản đúng hạn",
            "Thu dọn rác thải nhựa rơi vãi ven bìa rừng"
        ],
        "correct": "Chặt, đốt, phá cây rừng; đào, bới, san ủi đất rừng; bóc vỏ, ken cây, đổ hóa chất hủy hoại gốc, rễ cây rừng mà không được phép",
        "explanation": "Căn cứ đoạn mở đầu và Khoản 11 Điều 23 Nghị định số 146/2026/NĐ-CP: Hành vi Phá rừng bao gồm chặt, đốt, phá cây rừng, đào, bới, san ủi, nổ mìn; đắp đập, ngăn dòng chảy tự nhiên, xả chất độc gây thiệt hại đến rừng khi không được phép của cơ quan có thẩm quyền; cũng như bóc vỏ, ken cây, khoan vào thân cây, băm gốc, đổ hóa chất hủy hoại gốc, rễ cây, cưa quanh gốc cây, cắt cụt ngọn cây rừng."
    },
    {
        "id": "ChuRung_077",
        "question": "Hành vi bóc vỏ, ken cây, khoan vào thân cây, băm gốc, đổ hóa chất hủy hoại gốc rễ cây rừng (chưa đến mức truy cứu TNHS) bị xử phạt như thế nào theo Khoản 11 và Khoản 15 Điều 23 Nghị định số 146/2026/NĐ-CP?",
        "options": [
            "Không bị coi là vi phạm vì cây chưa bị đốn hạ ngã xuống đất",
            "Bị xử phạt theo từng cây rừng bị xâm hại (rừng trồng: 100.000đ/cây đường kính dưới 8 cm, 200.000đ/cây từ 8 cm trở lên; rừng tự nhiên phạt gấp hai lần)",
            "Chỉ bị xử phạt hành chính nếu số lượng cây bị ken chết từ 100 cây trở lên",
            "Được coi là biện pháp kỹ thuật tỉa thưa rừng tự nhiên thông thường"
        ],
        "correct": "Bị xử phạt theo từng cây rừng bị xâm hại (rừng trồng: 100.000đ/cây đường kính dưới 8 cm, 200.000đ/cây từ 8 cm trở lên; rừng tự nhiên phạt gấp hai lần)",
        "explanation": "Căn cứ Khoản 11 và Khoản 15 Điều 23 Nghị định số 146/2026/NĐ-CP: Hành vi bóc vỏ, ken cây, khoan vào thân cây, băm gốc, đổ hóa chất hủy hoại gốc, rễ cây, cưa quanh gốc cây, cắt cụt ngọn cây rừng thì mỗi cây gỗ đường kính tại vị trí 1,3 m dưới 8 cm bị phạt 100.000 đồng (tối đa không quá 100.000.000 đồng), từ 8 cm trở lên bị phạt 200.000 đồng (tối đa không quá 220.000.000 đồng) đối với rừng trồng; trường hợp rừng tự nhiên thì áp dụng mức phạt bằng hai lần."
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
        "question": "Phá rừng sản xuất trái phép từ diện tích bao nhiêu thì bị truy cứu trách nhiệm hình sự theo Điểm b Khoản 1 Điều 243 Bộ luật Hình sự?",
        "options": [
            "Từ 5.000 m² (0,5 ha) trở lên đã cấu thành tội phạm hình sự",
            "Từ 1.000 m² trở lên trong mọi trường hợp",
            "Từ 10.000 m² (01 ha) trở lên mới bị truy cứu trách nhiệm hình sự",
            "Phá bao nhiêu cũng chỉ bị phạt tiền hành chính, không bị xử lý hình sự"
        ],
        "correct": "Từ 5.000 m² (0,5 ha) trở lên đã cấu thành tội phạm hình sự",
        "explanation": "Căn cứ Điểm b Khoản 1 Điều 243 Bộ luật Hình sự: Hành vi đốt, phá rừng trái phép hoặc hủy hoại rừng sản xuất có diện tích từ 5.000 m² (0,5 ha) đến dưới 10.000 m² là cấu thành cơ bản của Tội hủy hoại rừng (bị phạt tiền từ 50.000.000 đồng đến 500.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm)."
    },
    {
        "id": "ChuRung_081",
        "question": "Phá rừng phòng hộ trái phép từ diện tích bao nhiêu mét vuông (m²) thì đủ yếu tố cấu thành tội phạm hình sự theo Điểm c Khoản 1 Điều 243 Bộ luật Hình sự?",
        "options": [
            "Từ 3.000 m² trở lên đã đủ yếu tố cấu thành tội phạm hình sự",
            "Từ 700 m² trở lên",
            "Từ 5.000 m² trở lên mới đủ yếu tố cấu thành tội phạm hình sự",
            "Từ 10.000 m² trở lên"
        ],
        "correct": "Từ 3.000 m² trở lên đã đủ yếu tố cấu thành tội phạm hình sự",
        "explanation": "Căn cứ Điểm c Khoản 1 Điều 243 Bộ luật Hình sự: Hành vi đốt, phá rừng trái phép hoặc hủy hoại rừng phòng hộ có diện tích từ 3.000 m² (0,3 ha) đến dưới 7.000 m² đủ yếu tố cấu thành Tội hủy hoại rừng (bị phạt tiền từ 50.000.000 đồng đến 500.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm)."
    },
    {
        "id": "ChuRung_082",
        "question": "Phá rừng đặc dụng trái phép từ diện tích bao nhiêu mét vuông (m²) thì bị truy cứu trách nhiệm hình sự theo Điểm d Khoản 1 Điều 243 Bộ luật Hình sự?",
        "options": [
            "Từ 1.000 m² trở lên đã bị truy cứu trách nhiệm hình sự",
            "Từ 500 m² trở lên",
            "Từ 2.000 m² trở lên mới bị truy cứu trách nhiệm hình sự",
            "Từ 5.000 m² trở lên"
        ],
        "correct": "Từ 1.000 m² trở lên đã bị truy cứu trách nhiệm hình sự",
        "explanation": "Căn cứ Điểm d Khoản 1 Điều 243 Bộ luật Hình sự: Hành vi đốt, phá rừng trái phép hoặc hủy hoại rừng đặc dụng có diện tích từ 1.000 m² (0,1 ha) đến dưới 3.000 m² đã đủ yếu tố cấu thành Tội hủy hoại rừng (bị phạt tiền từ 50.000.000 đồng đến 500.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm)."
    },
    {
        "id": "ChuRung_083",
        "question": "Hành vi lấn, chiếm rừng trái phép ngoài việc bị phạt tiền còn bị áp dụng biện pháp khắc phục hậu quả nào theo Khoản 9 Điều 10 Nghị định số 146/2026/NĐ-CP?",
        "options": [
            "Được giữ lại phần diện tích rừng đã lấn, chiếm để canh tác",
            "Buộc khôi phục lại tình trạng ban đầu đối với diện tích rừng bị lấn, chiếm",
            "Chỉ phải nộp thuế sử dụng đất bổ sung và được cấp Giấy chứng nhận quyền sử dụng đất",
            "Chỉ cần viết bản kiểm điểm cá nhân nộp cho thôn"
        ],
        "correct": "Buộc khôi phục lại tình trạng ban đầu đối với diện tích rừng bị lấn, chiếm",
        "explanation": "Căn cứ Khoản 9 Điều 10 Nghị định số 146/2026/NĐ-CP: Hành vi lấn, chiếm rừng quy định tại các khoản 1 đến 8 Điều 10 ngoài việc bị phạt tiền còn bị áp dụng biện pháp khắc phục hậu quả là buộc khôi phục lại tình trạng ban đầu (trường hợp lấn, chiếm đất rừng không có rừng thì xử phạt trong lĩnh vực đất đai theo Khoản 11 Điều 10)."
    },
    {
        "id": "ChuRung_084",
        "question": "Khai thác trái phép gỗ loài thực vật thông thường từ rừng tự nhiên với khối lượng từ bao nhiêu mét khối (m³) thì bị truy cứu trách nhiệm hình sự theo Khoản 1 Điều 232 Bộ luật Hình sự?",
        "options": [
            "Từ 100 m³ trở lên đối với mọi loại rừng",
            "Từ 10 m³ trở lên tại rừng sản xuất, từ 07 m³ trở lên tại rừng phòng hộ hoặc từ 03 m³ trở lên tại rừng đặc dụng",
            "Từ 50 m³ trở lên tại rừng sản xuất và từ 30 m³ trở lên tại rừng phòng hộ mới bị truy cứu TNHS",
            "Khai thác bao nhiêu cũng chỉ bị tịch thu gỗ, không bị xử lý hình sự"
        ],
        "correct": "Từ 10 m³ trở lên tại rừng sản xuất, từ 07 m³ trở lên tại rừng phòng hộ hoặc từ 03 m³ trở lên tại rừng đặc dụng",
        "explanation": "Căn cứ Các điểm b, d, e Khoản 1 Điều 232 Bộ luật Hình sự: Khai thác trái phép gỗ loài thực vật thông thường tại rừng tự nhiên từ 10 m³ trở lên (rừng sản xuất), từ 07 m³ trở lên (rừng phòng hộ), hoặc từ 03 m³ trở lên (rừng đặc dụng) thì bị phạt tiền từ 50.000.000 đồng đến 300.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm."
    },
    {
        "id": "ChuRung_085",
        "question": "Khai thác trái phép 0,5 m³ gỗ thuộc Danh mục thực vật rừng, động vật rừng nguy cấp, quý, hiếm Nhóm IA (như Sa mộc dầu, Hoàng đàn hữu liên...) tại rừng đặc dụng thì bị xử lý thế nào?",
        "options": [
            "Chỉ bị phạt tiền 500.000 đồng vì khối lượng gỗ rất ít",
            "Đã đủ định lượng bị truy cứu trách nhiệm hình sự theo Khoản 1 Điều 232 BLHS (phạt tiền 50 - 300 triệu đồng, cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm)",
            "Chỉ bị xử lý hình sự nếu khối lượng gỗ Nhóm IA chặt trộm tại rừng đặc dụng từ 05 m³ trở lên",
            "Được miễn xử lý nếu là người dân sinh sống tại địa phương"
        ],
        "correct": "Đã đủ định lượng bị truy cứu trách nhiệm hình sự theo Khoản 1 Điều 232 BLHS (phạt tiền 50 - 300 triệu đồng, cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm)",
        "explanation": "Căn cứ Điểm h Khoản 1 Điều 232 Bộ luật Hình sự (và Phụ lục I Thông tư số 85/2025/TT-BNNMT): Khai thác trái phép gỗ thuộc Danh mục thực vật rừng, động vật rừng nguy cấp, quý, hiếm Nhóm IA từ 0,5 m³ đến dưới 01 m³ tại rừng đặc dụng đã cấu thành Tội vi phạm quy định về khai thác, bảo vệ rừng và lâm sản, bị phạt tiền từ 50.000.000 đồng đến 300.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm."
    },
    {
        "id": "ChuRung_086",
        "question": "Hành vi săn bắt, giết, nuôi, nhốt, vận chuyển, buôn bán trái phép cá thể động vật thuộc Danh mục loài nguy cấp, quý, hiếm ĐƯỢC ƯU TIÊN BẢO VỆ bị xử lý thế nào theo Khoản 1 Điều 244 Bộ luật Hình sự?",
        "options": [
            "Chỉ cần 01 cá thể đã bị truy cứu trách nhiệm hình sự, bị phạt tiền từ 500.000.000 đồng đến 2.000.000.000 đồng hoặc phạt tù từ 01 năm đến 05 năm",
            "Nuôi 01 cá thể làm cảnh trong nhà thì không bị truy cứu trách nhiệm hình sự",
            "Chỉ bị xử phạt vi phạm hành chính từ 10.000.000 đồng đến 20.000.000 đồng nếu vi phạm lần đầu",
            "Được phép tự do nuôi nhốt nếu xây dựng chuồng sắt kiên cố"
        ],
        "correct": "Chỉ cần 01 cá thể đã bị truy cứu trách nhiệm hình sự, bị phạt tiền từ 500.000.000 đồng đến 2.000.000.000 đồng hoặc phạt tù từ 01 năm đến 05 năm",
        "explanation": "Căn cứ Điểm a Khoản 1 Điều 244 Bộ luật Hình sự: Người nào săn bắt, giết, nuôi, nhốt, vận chuyển, buôn bán trái phép động vật thuộc Danh mục loài nguy cấp, quý, hiếm được ưu tiên bảo vệ (không phân biệt số lượng, từ 01 cá thể) thì bị phạt tiền từ 500.000.000 đồng đến 2.000.000.000 đồng hoặc phạt tù từ 01 năm đến 05 năm."
    },
    {
        "id": "ChuRung_087",
        "question": "Người dân dùng xe mô tô hoặc xe ô tô tải vận chuyển lâm sản trái pháp luật thì phương tiện vận chuyển bị xử lý thế nào theo Khoản 21 Điều 25 Nghị định số 146/2026/NĐ-CP?",
        "options": [
            "Người vi phạm được trả lại xe ngay sau khi lập biên bản",
            "Xe mô tô, phương tiện thô sơ bị tịch thu trong các trường hợp tại khoản 1 đến 20; xe cơ giới khác bị tịch thu khi vi phạm có tổ chức, nhiều lần, tái phạm hoặc đủ ngưỡng khối lượng/trị giá quy định",
            "Cơ quan Kiểm lâm chỉ được tạm giữ phương tiện tối đa 24 giờ rồi bắt buộc trả lại trong mọi trường hợp",
            "Chỉ phạt tiền người điều khiển, tuyệt đối không được tịch thu phương tiện vận chuyển"
        ],
        "correct": "Xe mô tô, phương tiện thô sơ bị tịch thu trong các trường hợp tại khoản 1 đến 20; xe cơ giới khác bị tịch thu khi vi phạm có tổ chức, nhiều lần, tái phạm hoặc đủ ngưỡng khối lượng/trị giá quy định",
        "explanation": "Căn cứ Điểm b và Điểm c Khoản 21 Điều 25 Nghị định số 146/2026/NĐ-CP: Tịch thu phương tiện thô sơ, xe mô tô đối với các hành vi vận chuyển lâm sản trái pháp luật quy định tại các khoản 1 đến 20 Điều 25; tịch thu phương tiện cơ giới khác khi vi phạm có tổ chức, nhiều lần, tái phạm hoặc vận chuyển đạt ngưỡng (ví dụ gỗ loài thông thường từ 05 m³ trở lên, gỗ Nhóm IIA từ 2,5 m³ trở lên, gỗ Nhóm IA từ 0,4 m³ trở lên...)."
    },
    {
        "id": "ChuRung_088",
        "question": "Mức phạt tiền thấp nhất đối với hành vi vận chuyển lâm sản trái pháp luật đối với cá nhân là bao nhiêu?",
        "options": [
            "Từ 1.000.000 đồng trở lên đối với khối lượng lâm sản nhỏ nhất",
            "Chỉ phạt từ 10.000 đồng",
            "Từ 10.000.000 đồng đến 20.000.000 đồng đối với mọi hành vi vận chuyển lâm sản trái pháp luật",
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
            "Chỉ bị xử phạt nếu người đăng bài trực tiếp livestream cảnh giết mổ động vật hoang dã trên mạng xã hội",
            "Được phép quảng cáo nếu không ghi rõ giá tiền"
        ],
        "correct": "Bị xử phạt vi phạm hành chính từ 5.000.000 đồng đến 10.000.000 đồng và buộc gỡ bỏ bài đăng",
        "explanation": "Căn cứ Điểm c Khoản 4 và Điểm đ Khoản 9 Điều 19 Nghị định số 146/2026/NĐ-CP: Hành vi quảng cáo kinh doanh động vật rừng, thực vật rừng không có nguồn gốc hợp pháp bị phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng và buộc gỡ bỏ, xóa nội dung quảng cáo."
    },
    {
        "id": "ChuRung_091",
        "question": "Chủ cơ sở nuôi động vật rừng thông thường có nguồn gốc hợp pháp nhưng không lập sổ theo dõi hoặc không thông báo đúng thời hạn (tối đa 03 ngày làm việc) cho cơ quan Kiểm lâm sở tại bị xử phạt thế nào?",
        "options": [
            "Không cần lập sổ và không cần thông báo vì là loài thông thường",
            "Bị phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng theo Điểm c Khoản 2 Điều 27 Nghị định số 146/2026/NĐ-CP",
            "Chỉ cần làm cam kết bằng miệng với Trưởng thôn là được miễn thông báo cho Kiểm lâm",
            "Được cơ quan chức năng thưởng tiền khuyến khích mở rộng chuồng trại"
        ],
        "correct": "Bị phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng theo Điểm c Khoản 2 Điều 27 Nghị định số 146/2026/NĐ-CP",
        "explanation": "Căn cứ Khoản 2 Điều 24 Thông tư số 85/2025/TT-BNNMT và Điểm c Khoản 2 Điều 27 Nghị định số 146/2026/NĐ-CP: Tổ chức, cá nhân nuôi động vật rừng thông thường phải ghi chép sổ theo dõi (Mẫu số 10 Phụ lục II) và trong tối đa 03 ngày làm việc kể từ ngày đưa động vật về cơ sở phải gửi thông báo kèm bản sao hồ sơ nguồn gốc đến Kiểm lâm sở tại; nếu vi phạm bị phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng (trường hợp nuôi nhốt không có nguồn gốc hợp pháp bị xử phạt và tịch thu theo Điều 24 NĐ 146)."
    },
    {
        "id": "ChuRung_092",
        "question": "Hành vi sử dụng vũ khí, bẫy kiềng lớn, lưới bẫy để săn bắt động vật rừng trái phép bị xử lý như thế nào theo pháp luật lâm nghiệp?",
        "options": [
            "Bị tịch thu tang vật, dụng cụ, công cụ vi phạm, bị phạt tiền nặng (hoặc truy cứu TNHS với tình tiết sử dụng công cụ, phương tiện săn bắt bị cấm)",
            "Được phép sử dụng nếu là dụng cụ truyền thống của gia đình",
            "Chỉ bị xử phạt nếu săn bắt được các loài thú có trọng lượng từ 20 kg trở lên",
            "Chỉ bị nhắc nhở nếu chưa bắn trúng người đi rừng"
        ],
        "correct": "Bị tịch thu tang vật, dụng cụ, công cụ vi phạm, bị phạt tiền nặng (hoặc truy cứu TNHS với tình tiết sử dụng công cụ, phương tiện săn bắt bị cấm)",
        "explanation": "Căn cứ Điểm d Khoản 1 Điều 6 Thông tư số 85/2025/TT-BNNMT, Điều 19 (Điểm l Khoản 3, Điểm h Khoản 4, Khoản 8), Điều 24 (Khoản 16) Nghị định số 146/2026/NĐ-CP và Điểm d Khoản 2 Điều 234, Điểm g Khoản 2 Điều 244 Bộ luật Hình sự: Nghiêm cấm sử dụng các loại vũ khí, bẫy kiềng lớn, bẫy lưới... để khai thác động vật rừng; người vi phạm bị tịch thu tang vật, dụng cụ, công cụ, phạt tiền hoặc truy cứu TNHS ở khung tăng nặng."
    },
    {
        "id": "ChuRung_093",
        "question": "Đốt lửa trong rừng bất cẩn làm cháy hủy hoại từ 5.000 m² đến dưới 10.000 m² rừng sản xuất thì người gây cháy bị xử lý hình sự về tội gì theo Điều 243 Bộ luật Hình sự?",
        "options": [
            "Chỉ bị nhắc nhở rút kinh nghiệm vì thời tiết mùa đông hanh khô",
            "Bị truy cứu trách nhiệm hình sự về Tội hủy hoại rừng (phạt tiền 50 - 500 triệu đồng, cải tạo không giam giữ đến 03 năm hoặc phạt tù 01 - 05 năm)",
            "Chỉ bị xử phạt vi phạm hành chính mà không bị truy cứu trách nhiệm hình sự",
            "Được cơ quan chức năng hỗ trợ chi phí khắc phục hậu quả"
        ],
        "correct": "Bị truy cứu trách nhiệm hình sự về Tội hủy hoại rừng (phạt tiền 50 - 500 triệu đồng, cải tạo không giam giữ đến 03 năm hoặc phạt tù 01 - 05 năm)",
        "explanation": "Căn cứ Điểm b Khoản 1 Điều 243 Bộ luật Hình sự: Người nào đốt, phá rừng trái phép hoặc có hành vi khác hủy hoại rừng sản xuất có diện tích từ 5.000 m² đến dưới 10.000 m² thì bị truy cứu trách nhiệm hình sự về Tội hủy hoại rừng, với mức phạt tiền từ 50.000.000 đồng đến 500.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm."
    },
    {
        "id": "ChuRung_094",
        "question": "Hành vi cản trở lực lượng và phương tiện chữa cháy khi thực hiện chữa cháy rừng bị xử phạt hành chính như thế nào theo Điểm b Khoản 7 Điều 19 Nghị định số 146/2026/NĐ-CP?",
        "options": [
            "Chỉ bị nhắc nhở tại hiện trường nếu đám cháy chưa lan rộng",
            "Bị phạt tiền từ 20.000.000 đồng đến 25.000.000 đồng đối với cá nhân",
            "Chỉ bị phạt tiền tối đa từ 2.000.000 đồng đến 5.000.000 đồng",
            "Chỉ bị phạt cảnh cáo và yêu cầu rời khỏi khu vực cháy"
        ],
        "correct": "Bị phạt tiền từ 20.000.000 đồng đến 25.000.000 đồng đối với cá nhân",
        "explanation": "Căn cứ Điểm b Khoản 7 Điều 19 Nghị định số 146/2026/NĐ-CP: Hành vi cản trở lực lượng và phương tiện chữa cháy khi thực hiện chữa cháy rừng bị phạt tiền từ 20.000.000 đồng đến 25.000.000 đồng đối với cá nhân (tổ chức bị phạt gấp đôi theo Điểm b Khoản 1 Điều 4)."
    },
    {
        "id": "ChuRung_095",
        "question": "Theo Khoản 1 Điều 23 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT), gỗ là tang vật vi phạm bị tịch thu được xử lý theo các hình thức nào (theo thứ tự ưu tiên)?",
        "options": [
            "Chia đều cho các thành viên tham gia bắt giữ tại địa phương",
            "Trả lại quốc gia khai thác/xuất khẩu (nếu nguồn gốc nước ngoài); giao cơ quan chuyên ngành; giao, điều chuyển cho cơ quan, tổ chức, đơn vị quản lý, sử dụng; hoặc tiêu hủy",
            "Bắt buộc bán đấu giá công khai ra thị trường tự do trong mọi trường hợp",
            "Trả lại cho người vận chuyển trái phép nếu người này nộp đủ tiền phạt"
        ],
        "correct": "Trả lại quốc gia khai thác/xuất khẩu (nếu nguồn gốc nước ngoài); giao cơ quan chuyên ngành; giao, điều chuyển cho cơ quan, tổ chức, đơn vị quản lý, sử dụng; hoặc tiêu hủy",
        "explanation": "Căn cứ Khoản 1 Điều 23 (Mục 2 Chương IV) Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Gỗ, thực vật ngoài gỗ bị tịch thu được xử lý theo thứ tự ưu tiên: (a) Trả lại quốc gia khai thác/xuất khẩu (nếu có nguồn gốc nước ngoài); (b) Giao cho cơ quan quản lý chuyên ngành; (c) Giao, điều chuyển cho cơ quan, tổ chức, đơn vị để quản lý, sử dụng (xây trụ sở, công trình công lập...); (d) Bán thực vật ngoài gỗ; (đ) Tiêu hủy. Pháp luật hiện hành không bán đấu giá gỗ bị tịch thu."
    },
    {
        "id": "ChuRung_096",
        "question": "Hành vi tự ý chặt, phá cây rừng thuộc sở hữu toàn dân để mở tuyến đường dây điện khi chưa được cơ quan nhà nước có thẩm quyền cho phép bị xử phạt thế nào?",
        "options": [
            "Được phép chặt phá tự do vì phục vụ nhu cầu sinh hoạt cá nhân",
            "Bị xử phạt về hành vi Phá rừng, tịch thu tang vật/phương tiện và buộc khôi phục lại tình trạng ban đầu, buộc trồng lại rừng ngay trong vụ trồng rừng kế tiếp (không quá 12 tháng)",
            "Chỉ bị nhắc nhở theo quy định về an toàn lưới điện mà không bị xử phạt về phá rừng",
            "Không bị xử phạt nếu đã trả tiền điện đầy đủ hằng tháng"
        ],
        "correct": "Bị xử phạt về hành vi Phá rừng, tịch thu tang vật/phương tiện và buộc khôi phục lại tình trạng ban đầu, buộc trồng lại rừng ngay trong vụ trồng rừng kế tiếp (không quá 12 tháng)",
        "explanation": "Căn cứ Điều 23 (đoạn mở đầu và Điểm đ Khoản 14) Nghị định số 146/2026/NĐ-CP: Mọi hành vi chặt, đốt, phá cây rừng gây thiệt hại đến rừng thuộc sở hữu toàn dân khi chưa được phép của cơ quan nhà nước có thẩm quyền (không thuộc trường hợp khai thác tận dụng hợp pháp có biên bản kiểm tra hành lang an toàn lưới điện theo Khoản 4 Điều 20 NĐ 156 và Điều 6.5.e TT 26) bị xử phạt về hành vi Phá rừng và buộc trồng lại rừng ngay trong vụ trồng rừng kế tiếp nhưng không quá 12 tháng."
    },
    {
        "id": "ChuRung_097",
        "question": "Theo Điểm a và Điểm b Khoản 3 Điều 15 Thông tư số 85/2025/TT-BNNMT, khi tổ chức, cá nhân phát hiện động vật bị lạc, bị thương, bị bệnh hoặc mất nơi sinh sống tự nhiên thì phải báo cho cơ quan nào và trong thời hạn bao lâu cơ quan đó phải tiếp nhận?",
        "options": [
            "Báo ngay cho UBND cấp xã nơi phát hiện; trong thời hạn 01 ngày làm việc kể từ khi nhận thông tin, UBND cấp xã tổ chức kiểm tra, tiếp nhận và lập Biên bản giao nhận",
            "Mang nộp trực tiếp cho Cục Lâm nghiệp và Kiểm lâm ở trung ương trong vòng 30 ngày",
            "Tự giữ lại tại gia đình chăm sóc đến khi khỏe mạnh mới báo cho Trưởng thôn",
            "Chỉ báo cho cơ quan thú y huyện nếu con vật đã bị chết"
        ],
        "correct": "Báo ngay cho UBND cấp xã nơi phát hiện; trong thời hạn 01 ngày làm việc kể từ khi nhận thông tin, UBND cấp xã tổ chức kiểm tra, tiếp nhận và lập Biên bản giao nhận",
        "explanation": "Căn cứ Điểm a và Điểm b Khoản 3 Điều 15 Thông tư số 85/2025/TT-BNNMT: Tổ chức, cá nhân khi phát hiện động vật bị lạc, bị thương, bị bệnh hoặc mất nơi sinh sống tự nhiên có trách nhiệm thông báo ngay cho Ủy ban nhân dân cấp xã nơi phát hiện để kịp thời tổ chức cứu hộ; trong thời hạn 01 ngày làm việc kể từ khi nhận được thông tin, UBND cấp xã tổ chức kiểm tra, tiếp nhận và lập Biên bản giao nhận theo Mẫu số 09 Phụ lục II."
    },
    {
        "id": "ChuRung_098",
        "question": "Trường hợp nào sau đây chủ rừng là hộ gia đình được pháp luật cho phép thực hiện trong diện tích rừng được giao của mình?",
        "options": [
            "Mang cưa xăng vào rừng đặc dụng chặt hạ cây cổ thụ làm nhà",
            "Tuần tra bảo vệ rừng, khai thác và hưởng toàn bộ lâm sản từ rừng sản xuất là rừng trồng tự đầu tư theo đúng thủ tục quy định",
            "Tự ý khai thác tận thu gỗ khô đổ gãy trong rừng tự nhiên mà không lập phương án trình Chủ tịch UBND cấp xã phê duyệt",
            "Đổ hóa chất độc xuống khe suối trong rừng để đánh bắt cá"
        ],
        "correct": "Tuần tra bảo vệ rừng, khai thác và hưởng toàn bộ lâm sản từ rừng sản xuất là rừng trồng tự đầu tư theo đúng thủ tục quy định",
        "explanation": "Căn cứ Khoản 1 Điều 59, Điều 82, Điều 84 Luật Lâm nghiệp, Khoản 5 Điều 29 Nghị định số 156/2018/NĐ-CP và Khoản 7, Khoản 9 Điều 6 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Hộ gia đình được sở hữu cây trồng, tự quyết định khai thác và hưởng toàn bộ giá trị lâm sản từ rừng sản xuất là rừng trồng do mình tự đầu tư (lập phương án khai thác gửi Kiểm lâm sở tại trước khi khai thác và gửi Bảng kê lâm sản sau khai thác)."
    },
    {
        "id": "ChuRung_099",
        "question": "Hành vi không thông báo và không thực hiện đúng quy định pháp luật về sử dụng lửa khi đốt nương, rẫy, đốt thực bì chuẩn bị đất trồng rừng (dù chưa gây cháy lan vào rừng) có bị xử phạt không?",
        "options": [
            "Chưa gây cháy rừng thì không bao giờ bị xử phạt hành chính",
            "Vẫn bị phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng theo Điểm i Khoản 2 Điều 19 Nghị định số 146/2026/NĐ-CP",
            "Chỉ bị nhắc nhở bằng miệng vì chưa gây thiệt hại về cây rừng",
            "Chỉ bị phạt nếu có khói bay vào khu dân cư nội thị"
        ],
        "correct": "Vẫn bị phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng theo Điểm i Khoản 2 Điều 19 Nghị định số 146/2026/NĐ-CP",
        "explanation": "Căn cứ Điểm i Khoản 2 Điều 19 Nghị định số 146/2026/NĐ-CP: Hành vi không thông báo và không thực hiện đúng quy định pháp luật về sử dụng lửa khi đốt nương, rẫy, đồng ruộng, đốt thực bì để chuẩn bị đất trồng rừng và làm giảm vật liệu cháy trong rừng bị phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng (ngay cả khi chưa gây cháy rừng; nếu gây cháy rừng sẽ bị xử phạt theo Điều 20 Nghị định này)."
    },
    {
        "id": "ChuRung_100",
        "question": "Nguyên tắc và nghĩa vụ cốt lõi mà chủ rừng cần thực hiện để phát triển kinh tế rừng hợp pháp và không vi phạm pháp luật là gì?",
        "options": [
            "Cứ chặt phá rừng tự nhiên trước rồi nộp phạt sau",
            "Quản lý, bảo vệ, phát triển, sử dụng rừng bền vững theo Quy chế quản lý rừng; chỉ khai thác hợp pháp, phòng chống cháy rừng và phòng trừ sinh vật gây hại rừng",
            "Tự do khai thác mọi cây rừng theo nhu cầu cá nhân mà không cần lập phương án",
            "Rừng của ai người ấy lo, thấy cháy rừng không cần báo tin hay tham gia chữa cháy"
        ],
        "correct": "Quản lý, bảo vệ, phát triển, sử dụng rừng bền vững theo Quy chế quản lý rừng; chỉ khai thác hợp pháp, phòng chống cháy rừng và phòng trừ sinh vật gây hại rừng",
        "explanation": "Căn cứ Điều 3, Điều 9 và Khoản 1, Khoản 5 Điều 74 Luật Lâm nghiệp: Rừng được quản lý bền vững về diện tích và chất lượng; chủ rừng có nghĩa vụ quản lý, bảo vệ, phát triển, sử dụng rừng bền vững theo Quy chế quản lý rừng và pháp luật có liên quan, thực hiện PCCCR và phòng, trừ sinh vật gây hại rừng."
    },
    {
        "id": "ChuRung_101",
        "question": "Nguyên tắc 'ĐÚNG LUẬT' trong hoạt động thả, phóng sinh động vật hoang dã về tự nhiên được hiểu như thế nào?",
        "options": [
            "Tuyệt đối không săn, bắt, nuôi, nhốt, tàng trữ, vận chuyển, mua bán động vật rừng trái quy định pháp luật và tuân thủ điều kiện, trình tự thả động vật về tự nhiên",
            "Được phép mua bất kỳ con thú rừng nào ngoài chợ miễn là mục đích mua để thả phóng sinh",
            "Được phép tự ý thả nếu cá thể động vật hoang dã đã được nuôi nhốt trong nhà trên 06 tháng",
            "Được phép bẫy bắt chim thú rừng về thả lại vào vườn nhà mình"
        ],
        "correct": "Tuyệt đối không săn, bắt, nuôi, nhốt, tàng trữ, vận chuyển, mua bán động vật rừng trái quy định pháp luật và tuân thủ điều kiện, trình tự thả động vật về tự nhiên",
        "explanation": "Căn cứ Khoản 3 Điều 9 Luật Lâm nghiệp, Điều 11 Thông tư số 85/2025/TT-BNNMT và Điều 24, 25, 26 Nghị định số 146/2026/NĐ-CP: Pháp luật nghiêm cấm săn, bắt, nuôi, nhốt, giết, tàng trữ, vận chuyển, buôn bán động vật rừng trái quy định; việc thả động vật về môi trường tự nhiên phải bảo đảm đúng điều kiện sức khỏe, địa điểm, trình tự theo Thông tư 85/2025/TT-BNNMT."
    },
    {
        "id": "ChuRung_102",
        "question": "Theo quy định về bảo vệ đa dạng sinh học và lâm nghiệp, khi thả động vật vào rừng đặc dụng hoặc môi trường tự nhiên cần tuân thủ nguyên tắc chọn loài nào?",
        "options": [
            "Chỉ thả loài động vật bản địa khỏe mạnh, không có bệnh và có phân bố tự nhiên phù hợp; nghiêm cấm thả loài ngoại lai xâm hại",
            "Được thả bất kỳ loài động vật nào mua được từ người bán rong trước cổng đền chùa",
            "Được thả mọi loài động vật ngoại lai miễn là chúng được mua từ cơ sở gây nuôi trong nước",
            "Ưu tiên thả các loài động vật ăn thịt ngoại lai để tăng đa dạng loài"
        ],
        "correct": "Chỉ thả loài động vật bản địa khỏe mạnh, không có bệnh và có phân bố tự nhiên phù hợp; nghiêm cấm thả loài ngoại lai xâm hại",
        "explanation": "Căn cứ Điểm c, Điểm d Khoản 2 Điều 11 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), Khoản 7 Điều 7 Luật Đa dạng sinh học và Điểm d Khoản 4, Điểm b Khoản 5 Điều 19 Nghị định số 146/2026/NĐ-CP: Được thả những loài động vật bản địa khỏe mạnh, không có bệnh và đã có phân bố trong khu rừng đặc dụng; không thả loài không có phân bố tự nhiên; hành vi thả động vật ngoại lai xâm hại vào rừng tự nhiên, rừng phòng hộ, rừng đặc dụng bị phạt tiền từ 5.000.000 đồng đến 15.000.000 đồng."
    },
    {
        "id": "ChuRung_103",
        "question": "Khi thả động vật về môi trường tự nhiên, yêu cầu về địa điểm thả và số lượng cá thể được quy định như thế nào tại Thông tư số 85/2025/TT-BNNMT và Nghị định số 156/2018/NĐ-CP?",
        "options": [
            "Địa điểm thả phải là môi trường tự nhiên phù hợp với đặc tính của loài; tại khu rừng đặc dụng, số lượng thả phải phù hợp với vùng sống, nguồn thức ăn và bảo đảm cân bằng sinh thái",
            "Có thể thả rùa cạn xuống sông sâu hoặc thả động vật nước ngọt vào vùng nước mặn",
            "Chỉ cần chọn bất kỳ khu bảo tồn thiên nhiên nào gần nhất để thả mà không cần xét đặc tính loài",
            "Thả tất cả động vật vào cùng một hồ nước gần khu dân cư cho tiện"
        ],
        "correct": "Địa điểm thả phải là môi trường tự nhiên phù hợp với đặc tính của loài; tại khu rừng đặc dụng, số lượng thả phải phù hợp với vùng sống, nguồn thức ăn và bảo đảm cân bằng sinh thái",
        "explanation": "Căn cứ Điểm b Khoản 2 Điều 11 Thông tư số 85/2025/TT-BNNMT và Điểm c Khoản 2 Điều 11 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Địa điểm thả động vật về môi trường tự nhiên phải là môi trường tự nhiên phù hợp với đặc tính loài động vật dự kiến thả; đối với khu rừng đặc dụng, số lượng động vật của từng loài thả vào rừng phải phù hợp với vùng sống, nguồn thức ăn của chúng và bảo đảm cân bằng sinh thái của khu rừng."
    },
    {
        "id": "ChuRung_104",
        "question": "Theo Điểm b Khoản 3 Điều 11 Thông tư số 85/2025/TT-BNNMT, cơ sở nuôi, cơ sở bảo tồn đa dạng sinh học muốn thả động vật nuôi sinh sản về môi trường tự nhiên phải nộp hồ sơ đề nghị cơ quan nào phê duyệt Phương án thả?",
        "options": [
            "Sở Nông nghiệp và Môi trường nơi đặt cơ sở bảo tồn",
            "Trưởng thôn nơi dự kiến thực hiện việc thả động vật",
            "Bất kỳ Trạm Kiểm lâm ven đường nào gần khu rừng dự kiến thả",
            "Không cần trình cơ quan nào phê duyệt, chủ cơ sở tự ý đem thả"
        ],
        "correct": "Sở Nông nghiệp và Môi trường nơi đặt cơ sở bảo tồn",
        "explanation": "Căn cứ Điểm b Khoản 3 Điều 11 Thông tư số 85/2025/TT-BNNMT: Chủ cơ sở nuôi, cơ sở bảo tồn đa dạng sinh học nộp 01 bộ hồ sơ (Đơn đề nghị Mẫu số 12 và Phương án thả Mẫu số 13) tới Sở Nông nghiệp và Môi trường nơi đặt cơ sở bảo tồn; sau khi tham vấn Cơ quan khoa học CITES Việt Nam, cơ quan chuyên môn, chuyên gia và cơ quan quản lý khu vực dự kiến thả, Sở Nông nghiệp và Môi trường phê duyệt Phương án thả động vật về môi trường tự nhiên."
    },
    {
        "id": "ChuRung_105",
        "question": "Theo Điểm a Khoản 2 Điều 11 và Điểm a Khoản 3 Điều 15 Thông tư số 85/2025/TT-BNNMT, động vật dự kiến thả về tự nhiên phải bảo đảm điều kiện gì và trường hợp phát hiện động vật bị thương, yếu cần cứu hộ phải báo cho ai?",
        "options": [
            "Động vật thả phải bảo đảm điều kiện sức khỏe, không bị dịch bệnh và còn các tập tính tự nhiên; nếu phát hiện động vật bị lạc, bị thương, bị bệnh phải báo ngay cho UBND cấp xã nơi phát hiện để cứu hộ",
            "Cứ ném thẳng con vật từ trên cầu cao hoặc bờ vực xuống để con vật tự sinh tồn",
            "Chỉ cần mở cửa lồng cho động vật đang bị thương hoặc bệnh tự bò vào rừng",
            "Cắt bớt lông cánh của chim trước khi thả để chim bay gần mặt đất"
        ],
        "correct": "Động vật thả phải bảo đảm điều kiện sức khỏe, không bị dịch bệnh và còn các tập tính tự nhiên; nếu phát hiện động vật bị lạc, bị thương, bị bệnh phải báo ngay cho UBND cấp xã nơi phát hiện để cứu hộ",
        "explanation": "Căn cứ Điểm a Khoản 2 Điều 11 và Điểm a Khoản 3 Điều 15 Thông tư số 85/2025/TT-BNNMT: Cá thể loài động vật dự kiến thả về môi trường tự nhiên phải bảo đảm điều kiện sức khỏe, không bị dịch bệnh và còn các tập tính tự nhiên; khi phát hiện động vật bị lạc, bị thương, bị bệnh hoặc mất nơi sinh sống tự nhiên, tổ chức, cá nhân có trách nhiệm thông báo ngay cho Ủy ban nhân dân cấp xã nơi phát hiện để kịp thời tổ chức cứu hộ."
    },
    {
        "id": "ChuRung_106",
        "question": "Hành vi mua, bán động vật rừng không có hồ sơ hợp pháp (kể cả mua để phóng sinh) bị xử phạt hành chính với khung tiền phạt cho cá nhân như thế nào theo Điều 26 Nghị định số 146/2026/NĐ-CP?",
        "options": [
            "Phạt tiền từ 1.000.000 đồng đến 300.000.000 đồng đối với động vật rừng thông thường/Nhóm IIB, hoặc từ 300.000.000 đồng đến 360.000.000 đồng với số lượng quy định của Nhóm IB (hoặc truy cứu TNHS), kèm tịch thu tang vật",
            "Được miễn xử phạt nếu người mua khai báo mua động vật rừng về để phóng sinh",
            "Chỉ bị xử phạt cảnh cáo tối đa 500.000 đồng nếu mua bán dưới 10 cá thể",
            "Không bị xử phạt nếu giao dịch mua bán diễn ra ngoài khu vực rừng"
        ],
        "correct": "Phạt tiền từ 1.000.000 đồng đến 300.000.000 đồng đối với động vật rừng thông thường/Nhóm IIB, hoặc từ 300.000.000 đồng đến 360.000.000 đồng với số lượng quy định của Nhóm IB (hoặc truy cứu TNHS), kèm tịch thu tang vật",
        "explanation": "Căn cứ Khoản 1 đến Khoản 15 và Điểm a Khoản 21 Điều 26 Nghị định số 146/2026/NĐ-CP: Hành vi tàng trữ, mua bán lâm sản (bao gồm động vật rừng) không có hồ sơ hợp pháp hoặc không đúng nội dung hồ sơ bị phạt tiền từ 1.000.000 đồng đến 300.000.000 đồng (loài thông thường, Nhóm IIB tùy trị giá) hoặc từ 300.000.000 đồng đến 360.000.000 đồng đối với số lượng quy định của loài Nhóm IB (nếu đủ định lượng bị truy cứu TNHS theo Điều 234 hoặc 244 BLHS) và bị tịch thu tang vật vi phạm."
    },
    {
        "id": "ChuRung_107",
        "question": "Theo Khoản 19 Điều 3 và Khoản 7 Điều 7 Luật Đa dạng sinh học (VBHN số 73/VBHN-VPQH), loài ngoại lai xâm hại gây tác động gì và bị pháp luật quy định thế nào?",
        "options": [
            "Lấn chiếm nơi sinh sống hoặc gây hại đối với loài sinh vật bản địa, làm mất cân bằng sinh thái; pháp luật nghiêm cấm nhập khẩu, phát triển loài ngoại lai xâm hại (trừ nghiên cứu khoa học theo quy định)",
            "Giúp cải thiện chất lượng nguồn nước và tăng năng suất cây trồng bản địa",
            "Chỉ ảnh hưởng cục bộ vài ngày rồi tự biến mất hoàn toàn",
            "Không gây hại nên được tự do nhân nuôi và thả ra tự nhiên"
        ],
        "correct": "Lấn chiếm nơi sinh sống hoặc gây hại đối với loài sinh vật bản địa, làm mất cân bằng sinh thái; pháp luật nghiêm cấm nhập khẩu, phát triển loài ngoại lai xâm hại (trừ nghiên cứu khoa học theo quy định)",
        "explanation": "Căn cứ Khoản 19 Điều 3 và Khoản 7 Điều 7 Luật Đa dạng sinh học (VBHN số 73/VBHN-VPQH): Loài ngoại lai xâm hại là loài ngoại lai lấn chiếm nơi sinh sống hoặc gây hại đối với các loài sinh vật bản địa, làm mất cân bằng sinh thái tại nơi chúng xuất hiện và phát triển; pháp luật nghiêm cấm nhập khẩu, phát triển loài ngoại lai xâm hại (trừ nhập khẩu phục vụ mục đích nghiên cứu khoa học theo quy định)."
    },
    {
        "id": "ChuRung_108",
        "question": "Có được tự ý thả động vật bị thương, bị bệnh hoặc suy kiệt chưa được cứu hộ phục hồi về môi trường tự nhiên không?",
        "options": [
            "Không được thả; động vật dự kiến thả về tự nhiên phải bảo đảm sức khỏe, không bị dịch bệnh và còn tập tính tự nhiên; động vật bị thương, bị bệnh phải được cứu hộ tại cơ sở đủ điều kiện theo quy định",
            "Được thả ngay lập tức vì động vật tự biết tìm thuốc chữa bệnh ngoài rừng",
            "Chỉ cần cho con vật ăn một bữa no trước khi thả là bảo đảm sống sót",
            "Nên thả nhanh vào rừng đặc dụng càng sớm càng tốt dù con vật đang bị bệnh truyền nhiễm"
        ],
        "correct": "Không được thả; động vật dự kiến thả về tự nhiên phải bảo đảm sức khỏe, không bị dịch bệnh và còn tập tính tự nhiên; động vật bị thương, bị bệnh phải được cứu hộ tại cơ sở đủ điều kiện theo quy định",
        "explanation": "Căn cứ Điểm a Khoản 2 Điều 11 và Khoản 1, Khoản 4, Khoản 7 Điều 15 Thông tư số 85/2025/TT-BNNMT: Cá thể động vật dự kiến thả về tự nhiên phải bảo đảm điều kiện sức khỏe, không bị dịch bệnh và còn tập tính tự nhiên; động vật bị thương, bị bệnh được cứu hộ tại cơ sở nuôi, cơ sở bảo tồn đa dạng sinh học được cấp phép; trường hợp mắc bệnh truyền nhiễm nguy hiểm hoặc không còn khả năng phục hồi thì tiêu hủy theo quy định thú y, bảo vệ môi trường."
    },
    {
        "id": "ChuRung_109",
        "question": "Tình huống: Cá nhân mua loài động vật ngoại lai xâm hại rồi tự ý mang thả vào rừng đặc dụng hoặc rừng phòng hộ, rừng sản xuất là rừng tự nhiên. Hành vi này bị xử phạt thế nào theo Nghị định số 146/2026/NĐ-CP?",
        "options": [
            "Bị phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng (nếu thả vào rừng sản xuất là rừng tự nhiên, rừng phòng hộ) hoặc từ 10.000.000 đồng đến 15.000.000 đồng (nếu thả vào rừng đặc dụng) và buộc khắc phục ô nhiễm môi trường, lây lan dịch bệnh",
            "Hoàn toàn hợp pháp vì người thả có tâm thiện nguyện phóng sinh",
            "Được coi là hoạt động làm phong phú hệ động vật trong rừng đặc dụng",
            "Chỉ bị nhắc nhở nếu con vật thả xuống chưa gây chết cây rừng"
        ],
        "correct": "Bị phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng (nếu thả vào rừng sản xuất là rừng tự nhiên, rừng phòng hộ) hoặc từ 10.000.000 đồng đến 15.000.000 đồng (nếu thả vào rừng đặc dụng) và buộc khắc phục ô nhiễm môi trường, lây lan dịch bệnh",
        "explanation": "Căn cứ Điểm d Khoản 4, Điểm b Khoản 5 và Điểm c Khoản 9 Điều 19 Nghị định số 146/2026/NĐ-CP (và Khoản 7 Điều 7 Luật Đa dạng sinh học): Hành vi thả vào rừng sản xuất là rừng tự nhiên, rừng phòng hộ các loài động vật ngoại lai xâm hại bị phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng; thả vào rừng đặc dụng bị phạt tiền từ 10.000.000 đồng đến 15.000.000 đồng; đồng thời buộc khắc phục tình trạng ô nhiễm môi trường, lây lan dịch bệnh."
    },
    {
        "id": "ChuRung_110",
        "question": "Theo Khoản 3 Điều 53 Luật Đa dạng sinh học (VBHN số 73/VBHN-VPQH), khi tổ chức, cá nhân phát hiện loài ngoại lai xâm hại ngoài tự nhiên thì có trách nhiệm gì?",
        "options": [
            "Phải thông báo ngay với Ủy ban nhân dân cấp xã nơi gần nhất để kịp thời báo cáo cơ quan có thẩm quyền có biện pháp kiểm soát",
            "Tự ý mang loài ngoại lai xâm hại sang thả tại địa bàn thôn, xã khác",
            "Mua gom thêm từ người bán dạo để thả tăng số lượng ngoài tự nhiên",
            "Không cần thông báo vì loài ngoại lai sẽ tự bị thiên nhiên đào thải"
        ],
        "correct": "Phải thông báo ngay với Ủy ban nhân dân cấp xã nơi gần nhất để kịp thời báo cáo cơ quan có thẩm quyền có biện pháp kiểm soát",
        "explanation": "Căn cứ Khoản 3 Điều 53 Luật Đa dạng sinh học (VBHN số 73/VBHN-VPQH): Tổ chức, cá nhân phát hiện loài ngoại lai xâm hại phải thông báo ngay với Ủy ban nhân dân cấp xã nơi gần nhất. Sau khi nhận được thông báo, Ủy ban nhân dân cấp xã phải kịp thời báo cáo với cơ quan cấp trên trực tiếp hoặc cơ quan chuyên môn của Ủy ban nhân dân cấp tỉnh để có biện pháp kiểm soát."
    },
    {
        "id": "ChuRung_111",
        "question": "Theo Khoản 3 Điều 50 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), những chủ thể nào có trách nhiệm tổ chức kiểm tra an toàn phòng cháy và chữa cháy rừng trước và trong mùa khô hanh?",
        "options": [
            "Chủ tịch UBND cấp xã, chủ rừng, người đứng đầu cơ quan/tổ chức, cơ quan Kiểm lâm và Cảnh sát phòng cháy, chữa cháy và cứu nạn cứu hộ theo phân công quản lý",
            "Chỉ có Trưởng thôn tự đi kiểm tra một lần vào cuối năm âm lịch",
            "Chỉ có cơ quan Cảnh sát giao thông tuần tra các tuyến quốc lộ qua rừng",
            "Chỉ kiểm tra sau khi đã có vụ cháy rừng xảy ra trên thực tế"
        ],
        "correct": "Chủ tịch UBND cấp xã, chủ rừng, người đứng đầu cơ quan/tổ chức, cơ quan Kiểm lâm và Cảnh sát phòng cháy, chữa cháy và cứu nạn cứu hộ theo phân công quản lý",
        "explanation": "Căn cứ Khoản 3 Điều 50 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Trước và trong mùa khô hanh, Chủ tịch UBND cấp xã, chủ rừng, người đứng đầu cơ quan, tổ chức, cơ quan Kiểm lâm và cơ quan Cảnh sát PCCC và cứu nạn cứu hộ trong phạm vi quản lý của mình có trách nhiệm kiểm tra an toàn PCCCR theo chế độ định kỳ và đột xuất."
    },
    {
        "id": "ChuRung_112",
        "question": "Theo Khoản 5 và Khoản 6 Điều 55 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), hộ gia đình, cá nhân, cộng đồng dân cư sinh sống, hoạt động ở trong rừng, ven rừng có trách nhiệm gì khi sử dụng nguồn lửa, nguồn nhiệt?",
        "options": [
            "Bảo đảm an toàn về PCCCR khi được phép sử dụng nguồn lửa, nguồn nhiệt, thiết bị sinh lửa/nhiệt và bảo quản, sử dụng chất cháy; ngăn chặn và báo kịp thời khi phát hiện nguy cơ trực tiếp phát sinh cháy rừng",
            "Được tự do mang chất dễ cháy vào rừng miễn là sử dụng gần bờ suối",
            "Không cần chấp hành nội quy PCCCR nếu khu rừng không thuộc sở hữu của gia đình mình",
            "Chỉ có trách nhiệm báo cháy khi lửa đã bén vào nhà ở của gia đình"
        ],
        "correct": "Bảo đảm an toàn về PCCCR khi được phép sử dụng nguồn lửa, nguồn nhiệt, thiết bị sinh lửa/nhiệt và bảo quản, sử dụng chất cháy; ngăn chặn và báo kịp thời khi phát hiện nguy cơ trực tiếp phát sinh cháy rừng",
        "explanation": "Căn cứ Khoản 5 và Khoản 6 Điều 55 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Hộ gia đình, cá nhân, cộng đồng dân cư sinh sống, hoạt động ở trong rừng, ven rừng có trách nhiệm bảo đảm an toàn về PCCCR khi được phép sử dụng nguồn lửa, nguồn nhiệt, các thiết bị, dụng cụ sinh lửa, sinh nhiệt và bảo quản, sử dụng chất cháy trong rừng và ven rừng; đồng thời ngăn chặn và báo kịp thời khi phát hiện nguy cơ trực tiếp phát sinh cháy rừng."
    },
    {
        "id": "ChuRung_113",
        "question": "Hành vi nào sau đây bị phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng theo Khoản 2 Điều 19 Nghị định số 146/2026/NĐ-CP?",
        "options": [
            "Sử dụng lửa không đúng quy định pháp luật trong phân khu bảo vệ nghiêm ngặt của rừng đặc dụng hoặc đốt nương, rẫy, thực bì không thông báo và không đúng quy định",
            "Mang theo bình nước sạch để phòng ngừa khi làm rẫy gần rừng",
            "Thông báo trước với trưởng thôn và dọn sạch thực bì đúng giờ trước 9 giờ sáng theo quy định",
            "Báo tin kịp thời cho cơ quan Kiểm lâm khi thấy có khói bốc lên từ sườn rừng"
        ],
        "correct": "Sử dụng lửa không đúng quy định pháp luật trong phân khu bảo vệ nghiêm ngặt của rừng đặc dụng hoặc đốt nương, rẫy, thực bì không thông báo và không đúng quy định",
        "explanation": "Căn cứ Điểm h và Điểm i Khoản 2 Điều 19 Nghị định số 146/2026/NĐ-CP: Phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng đối với hành vi sử dụng lửa không đúng quy định pháp luật trong phân khu bảo vệ nghiêm ngặt của rừng đặc dụng (Điểm h) hoặc không thông báo và không thực hiện đúng quy định pháp luật về sử dụng lửa khi đốt nương, rẫy, đồng ruộng, đốt thực bì (Điểm i)."
    },
    {
        "id": "ChuRung_114",
        "question": "Theo Điểm c Khoản 3 và Khoản 4 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), sau khi đốt nương, rẫy, đốt thực bì hoặc sử dụng lửa tại cơ sở, nhà ở trong rừng xong, người sử dụng lửa phải làm gì?",
        "options": [
            "Phải dập tắt hết tàn lửa",
            "Chỉ cần thổi nhẹ cho bớt khói rồi rời khỏi khu vực",
            "Dùng cành cây khô phủ lên đống tro than còn đỏ rồi bỏ về",
            "Để mặc cho tàn lửa tự tắt theo gió tự nhiên"
        ],
        "correct": "Phải dập tắt hết tàn lửa",
        "explanation": "Căn cứ Điểm c Khoản 3 và Khoản 4 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Cả khi đốt nương, rẫy, đốt thực bì lẫn khi sử dụng lửa ở cơ sở, công trình, công trường, nhà ở được phép bố trí trong rừng, sau khi đốt hoặc sử dụng lửa xong đều bắt buộc phải dập tắt hết tàn lửa."
    },
    {
        "id": "ChuRung_115",
        "question": "Khi phát hiện cháy rừng hoặc nguy cơ phát sinh cháy rừng, người dân cần xử lý như thế nào cho đúng quy định pháp luật?",
        "options": [
            "Báo cháy ngay cho người xung quanh, chủ rừng, cơ quan Kiểm lâm, Cảnh sát PCCC, chính quyền sở tại hoặc Công an/Quân đội gần nhất và tham gia ngăn chặn cháy lan, dập cháy",
            "Lẳng lặng bỏ về nhà đóng kín cửa coi như không nhìn thấy",
            "Đứng gần đám cháy quay video phát trực tiếp lên mạng xã hội câu tương tác mà không báo cơ quan chức năng",
            "Chờ đến khi đám cháy tự tắt rồi mới đăng bài lên mạng"
        ],
        "correct": "Báo cháy ngay cho người xung quanh, chủ rừng, cơ quan Kiểm lâm, Cảnh sát PCCC, chính quyền sở tại hoặc Công an/Quân đội gần nhất và tham gia ngăn chặn cháy lan, dập cháy",
        "explanation": "Căn cứ Khoản 2 Điều 43 Luật Lâm nghiệp và Khoản 1, Khoản 3 Điều 51 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Người phát hiện cháy rừng phải bằng mọi cách báo cháy ngay cho người xung quanh và cho chủ rừng, đội PCCCR, Kiểm lâm, Cảnh sát PCCC và cứu nạn cứu hộ, chính quyền sở tại hoặc Công an, Quân đội nơi gần nhất; người có mặt tại nơi xảy ra cháy phải tìm mọi biện pháp ngăn chặn cháy lan và dập cháy."
    },
    {
        "id": "ChuRung_116",
        "question": "Tình huống: Ông C đốt thực bì bất cẩn gặp gió to cháy lan vào rừng trồng keo sản xuất gây thiệt hại 5.000 m² (0,5 ha) rừng sản xuất. Ông C có thể bị xử lý như thế nào theo Bộ luật Hình sự?",
        "options": [
            "Có thể bị truy cứu trách nhiệm hình sự về Tội hủy hoại rừng (Điều 243 BLHS, khung phạt tiền 50 - 500 triệu đồng, cải tạo không giam giữ đến 03 năm hoặc phạt tù 01 - 05 năm) và phải bồi thường thiệt hại",
            "Không bị xử lý vì việc đốt dọn thực bì là tập quán canh tác lâu đời",
            "Chỉ phải trồng bù tượng trưng 10 cây keo con là hoàn thành trách nhiệm",
            "Được Nhà nước hỗ trợ kinh phí bồi thường thay cho chủ rừng keo"
        ],
        "correct": "Có thể bị truy cứu trách nhiệm hình sự về Tội hủy hoại rừng (Điều 243 BLHS, khung phạt tiền 50 - 500 triệu đồng, cải tạo không giam giữ đến 03 năm hoặc phạt tù 01 - 05 năm) và phải bồi thường thiệt hại",
        "explanation": "Căn cứ Điểm b Khoản 1 Điều 243 Bộ luật Hình sự (và Điều 20 Nghị định số 146/2026/NĐ-CP nếu dưới ngưỡng hình sự; Điều 13 Luật Xử lý vi phạm hành chính về bồi thường thiệt hại): Hành vi đốt, phá rừng trái phép hoặc hủy hoại rừng sản xuất có diện tích từ 5.000 m² (0,5 ha) đến dưới 10.000 m² cấu thành Tội hủy hoại rừng (phạt tiền 50.000.000 đồng đến 500.000.000 đồng, cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm), đồng thời phải bồi thường thiệt hại dân sự."
    },
    {
        "id": "ChuRung_117",
        "question": "Đối với cây gỗ vườn nhà, cây trồng phân tán do hộ gia đình tự đầu tư, pháp luật lâm nghiệp có quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp' riêng không?",
        "options": [
            "Không quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp'; việc chứng minh nguồn gốc thực hiện thông qua Bảng kê lâm sản và hồ sơ lâm sản hợp pháp theo Thông tư số 26/2025/TT-BNNMT",
            "Bắt buộc phải xin 'Giấy xác nhận nguồn gốc hợp pháp' của Giám đốc Sở Nông nghiệp và Môi trường",
            "Phải xin Giấy phép khai thác vận chuyển riêng của Chủ tịch UBND cấp xã cho từng cây",
            "Mọi cây gỗ vườn nhà đều bị cấm mua bán ra ngoài phạm vi cấp xã"
        ],
        "correct": "Không quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp'; việc chứng minh nguồn gốc thực hiện thông qua Bảng kê lâm sản và hồ sơ lâm sản hợp pháp theo Thông tư số 26/2025/TT-BNNMT",
        "explanation": "Căn cứ Điều 5, Khoản 3 Điều 8 và Khoản 2 Điều 11 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Pháp luật hiện hành không quy định thủ tục cấp 'Giấy xác nhận nguồn gốc hợp pháp'; hồ sơ lâm sản hợp pháp đối với gỗ loài thông thường từ cây trồng phân tán, cây vườn nhà tự đầu tư là bản chính Bảng kê lâm sản do chủ lâm sản lập (hoặc có xác nhận của Kiểm lâm sở tại nếu chủ lâm sản tự nguyện đề nghị) kèm hồ sơ mua bán liền kề trước đó hoặc mã QR khi lưu thông."
    },
    {
        "id": "ChuRung_118",
        "question": "Trường hợp cây cảnh vườn nhà là loài cây gỗ thông thường (không thuộc loài nguy cấp, quý hiếm), khi xuất bán vận chuyển có bắt buộc phải xin xác nhận Bảng kê lâm sản của Kiểm lâm không?",
        "options": [
            "KHÔNG thuộc đối tượng buộc phải xác nhận; chủ cây tự lập Bảng kê lâm sản. Trường hợp chủ cây có nhu cầu tự nguyện đề nghị xác nhận thì cơ quan Kiểm lâm sẽ tiếp nhận xác nhận",
            "Bắt buộc 100% trường hợp phải có xác nhận có đóng dấu đỏ của Hạt trưởng Hạt Kiểm lâm",
            "Phải có Biên bản nghiệm thu hiện trường đào cây của Phòng Kinh tế cấp xã trước khi đưa cây lên xe",
            "Chỉ cần người mua tự viết giấy tay là hợp pháp không cần Bảng kê lâm sản"
        ],
        "correct": "KHÔNG thuộc đối tượng buộc phải xác nhận; chủ cây tự lập Bảng kê lâm sản. Trường hợp chủ cây có nhu cầu tự nguyện đề nghị xác nhận thì cơ quan Kiểm lâm sẽ tiếp nhận xác nhận",
        "explanation": "Căn cứ Điểm đ Khoản 3 Điều 5 Thông tư số 26/2025/TT-BNNMT (được sửa đổi, bổ sung bởi Thông tư số 84/2025/TT-BNNMT): Cây cảnh gỗ thông thường vườn nhà do chủ cây tự lập Bảng kê lâm sản; cơ quan Kiểm lâm tiếp nhận xác nhận khi chủ cây có đề nghị tự nguyện."
    },
    {
        "id": "ChuRung_119",
        "question": "Khi đề nghị cơ quan Kiểm lâm sở tại xác nhận Bảng kê lâm sản sau khai thác đối với gỗ loài thực vật rừng nguy cấp, quý, hiếm của hộ gia đình (nộp hồ sơ giấy không dùng mã QR), hồ sơ gồm những giấy tờ chính nào?",
        "options": [
            "Bản chính Đơn đề nghị xác nhận (Mẫu số 03), Bản chính Bảng kê lâm sản và Bản sao Phương án khai thác (theo quy định tại Phụ lục II)",
            "Chỉ cần nộp bản sao Giấy khai sinh của chủ vườn cây",
            "Bản chính Giấy phép CITES do Bộ Nông nghiệp và Môi trường cấp cho mọi giao dịch trong nước",
            "Phải nộp bản gốc Giấy chứng nhận quyền sử dụng đất lưu giữ vĩnh viễn tại Hạt Kiểm lâm"
        ],
        "correct": "Bản chính Đơn đề nghị xác nhận (Mẫu số 03), Bản chính Bảng kê lâm sản và Bản sao Phương án khai thác (theo quy định tại Phụ lục II)",
        "explanation": "Căn cứ Khoản 6 và Điểm a Khoản 7 Điều 5 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Hồ sơ xác nhận Bảng kê lâm sản sau khai thác của hộ gia đình gồm Bản chính Đơn đề nghị xác nhận (Mẫu số 03 Phụ lục II), Bản chính Bảng kê lâm sản và Bản sao Phương án khai thác (trừ trường hợp tạo mã QR chứa hồ sơ lâm sản trên Bảng kê; nếu là tổ chức, hộ kinh doanh xuất bán thì bổ sung Sổ theo dõi nhập, xuất lâm sản theo Điểm h)."
    },
    {
        "id": "ChuRung_120",
        "question": "Theo Điểm c Khoản 7 Điều 5 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT), đối với hồ sơ nộp bản giấy hợp lệ và không cần xác minh nguồn gốc, cơ quan Kiểm lâm sở tại xác nhận Bảng kê lâm sản trong thời hạn bao lâu?",
        "options": [
            "Trong thời hạn 02 ngày làm việc kể từ ngày nhận được hồ sơ hợp lệ",
            "Trong thời hạn 30 ngày làm việc kể từ ngày nộp hồ sơ",
            "Trong thời hạn 15 ngày làm việc kể từ ngày nộp hồ sơ",
            "Không quy định thời hạn giải quyết mà tùy thuộc vào cơ quan Kiểm lâm"
        ],
        "correct": "Trong thời hạn 02 ngày làm việc kể từ ngày nhận được hồ sơ hợp lệ",
        "explanation": "Căn cứ Điểm c Khoản 7 Điều 5 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Trong thời hạn 02 ngày làm việc kể từ ngày nhận được hồ sơ hợp lệ, cơ quan Kiểm lâm sở tại xác nhận Bảng kê lâm sản đối với trường hợp nộp hồ sơ bằng bản giấy (nếu cần xác minh nguồn gốc thì thông báo trong 01 ngày làm việc, xác minh và hoàn thành xác nhận trong 02 ngày làm việc, trường hợp có nhiều nội dung phức tạp không quá 03 ngày làm việc)."
    },
    {
        "id": "ChuRung_121",
        "question": "Tình huống: Anh M có 02 cây gỗ vườn nhà thuộc loài thông thường muốn chở sang tỉnh khác bán, đến Hạt Kiểm lâm xin 'Giấy xác nhận nguồn gốc'. Cán bộ Kiểm lâm hướng dẫn thế nào cho đúng Thông tư số 26/2025/TT-BNNMT?",
        "options": [
            "Giải thích pháp luật không có thủ tục cấp giấy này; hướng dẫn anh M tự lập Bảng kê lâm sản (và gửi phương án khai thác trước khi khai thác) hoặc tiếp nhận xác nhận Bảng kê nếu anh M tự nguyện đề nghị",
            "Yêu cầu anh M nộp phạt 5 triệu đồng vì tự ý đào cây vườn nhà khi chưa xin phép",
            "Yêu cầu anh M phải xin quyết định phê duyệt khai thác của Sở Nông nghiệp và Môi trường",
            "Tịch thu ngay 02 cây gỗ của anh M vì không có Giấy xác nhận nguồn gốc"
        ],
        "correct": "Giải thích pháp luật không có thủ tục cấp giấy này; hướng dẫn anh M tự lập Bảng kê lâm sản (và gửi phương án khai thác trước khi khai thác) hoặc tiếp nhận xác nhận Bảng kê nếu anh M tự nguyện đề nghị",
        "explanation": "Căn cứ Điểm đ Khoản 3, Khoản 5 Điều 5; Khoản 7, Khoản 9 Điều 6; Khoản 3 Điều 8 và Khoản 2 Điều 11 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Đối với gỗ vườn nhà thuộc loài thông thường tự đầu tư, chủ lâm sản tự lập Bảng kê lâm sản (và lập phương án khai thác gửi Kiểm lâm sở tại giám sát); trường hợp chủ lâm sản tự nguyện đề nghị xác nhận Bảng kê lâm sản thì cơ quan Kiểm lâm sở tại tiếp nhận xác nhận theo Điểm đ Khoản 3 Điều 5."
    },
    {
        "id": "ChuRung_122",
        "question": "Trong Danh mục loài nguy cấp, quý, hiếm ban hành kèm theo Thông tư số 85/2025/TT-BNNMT, tên gọi chính thức của loài dùng làm căn cứ xác định là tên nào?",
        "options": [
            "Tên khoa học của loài; tên tiếng Việt chỉ có giá trị tham khảo",
            "Tên gọi dân gian truyền miệng tại địa phương",
            "Tên thương mại do chủ cơ sở nuôi, trồng hoặc chủ vườn cây cảnh tự đặt",
            "Tên gọi theo màu sắc hoa và hình dáng lá của cây"
        ],
        "correct": "Tên khoa học của loài; tên tiếng Việt chỉ có giá trị tham khảo",
        "explanation": "Căn cứ Ghi chú cuối Phụ lục I Thông tư số 85/2025/TT-BNNMT: 'Trong Danh mục này, tên gọi chính thức của loài là tên khoa học, tên tiếng Việt chỉ có giá trị tham khảo.' (Quy định tương tự cũng được áp dụng trong các biểu mẫu Bảng kê lâm sản tại Phụ lục II Thông tư số 26/2025/TT-BNNMT)."
    },
    {
        "id": "ChuRung_123",
        "question": "Khi người dân phát hiện một cá thể tê tê hoặc cu li (động vật rừng nguy cấp, quý, hiếm) bị lạc hoặc bị thương vào vườn nhà, cách xử lý nào là đúng quy định tại Khoản 3 Điều 15 Thông tư số 85/2025/TT-BNNMT?",
        "options": [
            "Thông báo ngay cho Ủy ban nhân dân cấp xã nơi phát hiện để kiểm tra, tiếp nhận, chuyển giao cho cơ sở bảo tồn/cứu hộ có phép thực hiện cứu hộ và xử lý theo quy định",
            "Tự mình mang ra khu rừng gần nhất thả ngay lập tức mà không báo chính quyền",
            "Giao cho chùa hoặc hộ dân gần nhất tự chăm sóc nuôi dưỡng",
            "Nhốt lại trong chuồng nuôi của gia đình để làm cảnh"
        ],
        "correct": "Thông báo ngay cho Ủy ban nhân dân cấp xã nơi phát hiện để kiểm tra, tiếp nhận, chuyển giao cho cơ sở bảo tồn/cứu hộ có phép thực hiện cứu hộ và xử lý theo quy định",
        "explanation": "Căn cứ Điểm a, Điểm b Khoản 3 Điều 15 Thông tư số 85/2025/TT-BNNMT và Khoản 3 Điều 9 Luật Lâm nghiệp: Tổ chức, cá nhân khi phát hiện động vật bị lạc, bị thương, bị bệnh hoặc mất nơi sinh sống tự nhiên có trách nhiệm thông báo ngay cho Ủy ban nhân dân cấp xã nơi phát hiện để kiểm tra, tiếp nhận (trong 01 ngày làm việc), lập Biên bản giao nhận và chuyển giao cho cơ sở bảo tồn hoặc cơ sở nuôi đủ điều kiện thực hiện cứu hộ, chăm sóc theo quy định."
    },
    {
        "id": "ChuRung_124",
        "question": "Hành vi đốt lửa, sử dụng lửa để lấy mật ong trong rừng vào mùa khô hanh dẫn đến hậu quả pháp lý nào sau đây?",
        "options": [
            "Bị phạt tiền từ 3.000.000 đồng đến 5.000.000 đồng; nếu gây cháy rừng thì bị xử phạt theo Điều 20 NĐ 146 (hoặc truy cứu TNHS về Tội hủy hoại rừng) và phải bồi thường thiệt hại",
            "Được khuyến khích vì giúp người dân tăng thu nhập từ mật ong rừng",
            "Chỉ bị xử phạt nếu người lấy mật ong không phải là chủ rừng nơi có tổ ong",
            "Không bị xử phạt vì khói lửa không làm hại đến cây rừng"
        ],
        "correct": "Bị phạt tiền từ 3.000.000 đồng đến 5.000.000 đồng; nếu gây cháy rừng thì bị xử phạt theo Điều 20 NĐ 146 (hoặc truy cứu TNHS về Tội hủy hoại rừng) và phải bồi thường thiệt hại",
        "explanation": "Căn cứ Điểm i Khoản 3, Khoản 10 Điều 19 và Điều 20 Nghị định số 146/2026/NĐ-CP; Điều 13 Luật Xử lý vi phạm hành chính; Điều 243 Bộ luật Hình sự: Hành vi đốt lửa, sử dụng lửa để lấy mật ong bị phạt tiền từ 3.000.000 đồng đến 5.000.000 đồng; nếu gây thiệt hại đến rừng thì xử phạt về hành vi gây cháy rừng theo Điều 20 NĐ 146/2026/NĐ-CP (hoặc truy cứu TNHS theo Điều 243 BLHS) và buộc bồi thường thiệt hại."
    },
    {
        "id": "ChuRung_125",
        "question": "Theo Điểm b Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT), trường hợp nào KHÔNG ĐƯỢC đốt nương, rẫy, đốt thực bì?",
        "options": [
            "Vào những ngày có dự báo nguy cơ cháy rừng ở cấp IV, cấp V hoặc trong khoảng thời gian từ 9 giờ sáng đến 16 giờ chiều (khi không phải trước 9 giờ sáng và sau 16 giờ chiều, gió nhẹ)",
            "Vào lúc gió nhẹ, trước 9 giờ buổi sáng trong ngày dự báo cháy rừng cấp I",
            "Vào lúc gió nhẹ, sau 16 giờ buổi chiều trong ngày dự báo cháy rừng cấp II",
            "Vào ngày có dự báo cháy rừng cấp I sau khi đã thông báo cho trưởng thôn, tổ đội PCCCR và bố trí đủ người canh gác"
        ],
        "correct": "Vào những ngày có dự báo nguy cơ cháy rừng ở cấp IV, cấp V hoặc trong khoảng thời gian từ 9 giờ sáng đến 16 giờ chiều (khi không phải trước 9 giờ sáng và sau 16 giờ chiều, gió nhẹ)",
        "explanation": "Căn cứ Điểm b Khoản 3 Điều 47 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Khi đốt nương, rẫy, đồng ruộng, đốt thực bì chuẩn bị đất trồng rừng và làm giảm vật liệu cháy trong rừng, không đốt vào những ngày có dự báo nguy cơ cháy rừng ở cấp IV, cấp V; trong ngày, tiến hành đốt lúc gió nhẹ, vào trước 9 giờ buổi sáng và sau 16 giờ buổi chiều."
    },
    {
        "id": "ChuRung_126",
        "question": "Khi hộ gia đình khai thác, bán gỗ vườn nhà hoặc cây gỗ trồng phân tán (thuộc loài thông thường) do gia đình tự đầu tư trên đất thổ cư, thủ tục hồ sơ thực hiện như thế nào?",
        "options": [
            "Tự xây dựng phương án khai thác (không phải trình phê duyệt), gửi Kiểm lâm sở tại trước khi khai thác để giám sát và tự lập Bảng kê lâm sản khi bán, vận chuyển",
            "Phải xin quyết định phê duyệt phương án khai thác của Chủ tịch UBND cấp tỉnh",
            "Phải xin Giấy phép khai thác của Cục Lâm nghiệp và Kiểm lâm",
            "Không cần lập Bảng kê lâm sản khi vận chuyển đi bán ngoài tỉnh"
        ],
        "correct": "Tự xây dựng phương án khai thác (không phải trình phê duyệt), gửi Kiểm lâm sở tại trước khi khai thác để giám sát và tự lập Bảng kê lâm sản khi bán, vận chuyển",
        "explanation": "Căn cứ Khoản 7, Khoản 9 Điều 6, Khoản 3 Điều 8 và Khoản 2 Điều 11 Thông tư số 26/2025/TT-BNNMT (VBHN số 04/VBHN-BNNMT): Đối với gỗ vườn nhà, cây gỗ trồng phân tán (loài thông thường) do hộ gia đình tự đầu tư, chủ lâm sản tự xây dựng phương án khai thác gửi cơ quan Kiểm lâm sở tại để giám sát (không phải trình phê duyệt), sau khi khai thác gửi Bảng kê lâm sản và khi bán, vận chuyển sử dụng bản chính Bảng kê lâm sản do chủ lâm sản tự lập (kèm hồ sơ mua bán liền kề hoặc mã QR nếu chuyển giao lần sau)."
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
        "question": "Tình huống: Anh D đi qua bìa rừng phát hiện đống lửa, tàn than đang bốc khói có nguy cơ phát sinh cháy rừng. Theo Nghị định số 156/2018/NĐ-CP, anh D có trách nhiệm gì?",
        "options": [
            "Ngăn chặn và báo kịp thời khi phát hiện nguy cơ trực tiếp phát sinh cháy rừng; nếu đã phát sinh cháy thì bằng mọi cách báo cháy ngay cho người xung quanh, chủ rừng, Kiểm lâm, chính quyền sở tại và dập cháy",
            "Tăng ga phóng xe đi thật nhanh để khỏi liên quan trách nhiệm",
            "Chỉ đứng quay video đăng mạng xã hội mà không báo cơ quan chức năng",
            "Bỏ mặc vì khu rừng đó không thuộc quyền sử dụng của gia đình mình"
        ],
        "correct": "Ngăn chặn và báo kịp thời khi phát hiện nguy cơ trực tiếp phát sinh cháy rừng; nếu đã phát sinh cháy thì bằng mọi cách báo cháy ngay cho người xung quanh, chủ rừng, Kiểm lâm, chính quyền sở tại và dập cháy",
        "explanation": "Căn cứ Khoản 2 Điều 43 Luật Lâm nghiệp và Khoản 1, Khoản 3 Điều 51, Khoản 6 Điều 55 Nghị định số 156/2018/NĐ-CP (VBHN số 13/VBHN-BNNMT): Cá nhân hoạt động ở trong rừng, ven rừng có trách nhiệm ngăn chặn và báo kịp thời khi phát hiện nguy cơ trực tiếp phát sinh cháy rừng; khi phát hiện cháy rừng phải bằng mọi cách báo cháy ngay cho người xung quanh, chủ rừng, Kiểm lâm, chính quyền sở tại hoặc Cảnh sát PCCC/Công an/Quân đội gần nhất và tìm mọi biện pháp ngăn chặn cháy lan, dập cháy."
    },
    {
        "id": "ChuRung_129",
        "question": "Theo Khoản 3 Điều 9 Luật Lâm nghiệp, những hành vi nào đối với động vật rừng, thực vật rừng bị pháp luật nghiêm cấm?",
        "options": [
            "Săn, bắt, nuôi, nhốt, giết, tàng trữ, vận chuyển, buôn bán động vật rừng, thu thập mẫu vật các loài thực vật rừng, động vật rừng trái quy định của pháp luật",
            "Cứu hộ động vật rừng bị thương tại cơ sở bảo tồn đa dạng sinh học được cấp phép",
            "Trồng cây gỗ lớn và phục hồi rừng bằng loài cây bản địa trên đất được giao",
            "Thông báo cho UBND cấp xã khi phát hiện động vật rừng bị lạc vào khu dân cư"
        ],
        "correct": "Săn, bắt, nuôi, nhốt, giết, tàng trữ, vận chuyển, buôn bán động vật rừng, thu thập mẫu vật các loài thực vật rừng, động vật rừng trái quy định của pháp luật",
        "explanation": "Căn cứ Khoản 3 Điều 9 Luật Lâm nghiệp: Pháp luật nghiêm cấm hành vi săn, bắt, nuôi, nhốt, giết, tàng trữ, vận chuyển, buôn bán động vật rừng, thu thập mẫu vật các loài thực vật rừng, động vật rừng trái quy định của pháp luật."
    },
    {
        "id": "ChuRung_130",
        "question": "Khi phát hiện người mang theo bẫy lưới và thiết bị phát tiếng kêu động vật vào rừng để săn bắt trái phép chim, thú rừng, người dân cần báo cho ai?",
        "options": [
            "Thông báo kịp thời cho cơ quan nhà nước có thẩm quyền (Kiểm lâm sở tại, UBND cấp xã, Công an cấp xã) hoặc chủ rừng để kiểm tra, ngăn chặn và xử lý theo quy định",
            "Đến học hỏi cách đặt bẫy lưới để về làm theo kiếm thêm thu nhập",
            "Chỉ nhắc nhở không được giăng lưới chắn ngang lối đi lại của thôn",
            "Báo cho cơ quan Khí tượng thủy văn tỉnh để theo dõi hướng gió"
        ],
        "correct": "Thông báo kịp thời cho cơ quan nhà nước có thẩm quyền (Kiểm lâm sở tại, UBND cấp xã, Công an cấp xã) hoặc chủ rừng để kiểm tra, ngăn chặn và xử lý theo quy định",
        "explanation": "Căn cứ Khoản 2 Điều 43 Luật Lâm nghiệp, Điểm d Khoản 1 Điều 6 Thông tư số 85/2025/TT-BNNMT và Điều 19 (Điểm l Khoản 3, Điểm h Khoản 4), Điều 24 Nghị định số 146/2026/NĐ-CP: Nghiêm cấm sử dụng bẫy lưới, thiết bị phát tiếng kêu động vật để săn bắt động vật rừng trái phép; công dân có trách nhiệm thông báo kịp thời cho cơ quan nhà nước có thẩm quyền (Kiểm lâm, UBND cấp xã, Công an) hoặc chủ rừng về hành vi vi phạm pháp luật lâm nghiệp."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = question_ChuRung;
}
