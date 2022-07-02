export const wordList = [
  "nhưng","nhỏ","cái","tôi","đầu","từ","gọi","người","đang","vẫn","tiên","giường","ấy","chúng","hỏi","khác","của","tưởng","to","dặm","nên","vựng","tiếp","cho","nhỏ","đàn","ông","gì","ta","than","ra","nhiều","như","lại","trẻ","nhìn","tất","thật","đặt","trễ","tuyệt","câu","cô","luôn","em","giống","đúng","nghe","đây","ăn","bên","nước","trên","đôi","bạn","đã","sớm","chăm","thêm","cao","biết","thành","xa","tại","đủ","xe","đọc","hơi","đó","tốt","làm","tới","không","thứ","cây","trường","khí","đổi","đất","giấy","sông","ý","tìm","mở","số","sao","mắt","có","dài","sách","nói","muốn","núi","về","gần","hoặc","nữa","danh","hầu","khi","hết","sống","nhà","trai","gái","đèn","cuối","rộng","đường","họ","chỉ","quạt","vài","sổ","chuột","có","vâng","thể","thích","hai","trong","keo","điện","cứng","là","bắt","nó","xịt","nghĩ","lối","sẽ","hộp","bút","đình","sạc","tên","nào","máy","sấy","lên","sau","tóc","cùng","thế","giới","này","huế","nội","học","kẹo","bánh","ai","trắng","ngày","còn","trái","phần","bởi","trước","bao","thử","giờ","chai","sủa","tủ","ngựa","nơi","chạy","với","anh","chị","ở","thấy","bấm","và","giữa","già","nam","nữ","chì","đi","thiếc","túi","lượt","cục","hoá","lý","sinh","toán","điểm","văn","sử","cứu","mỗi","địa","mẫu","mũi","tai","âm","nhạc","bay","lửa","giáo","thư","cả","mặt","trực","động","vật","kết","nếu","theo","miệng","tay","chân","ghế","ba","mẹ","lỡ","dầu","bàn","dòng","chảy","đá","cô","chú","ví","thuốc","lá","bếp","nồi","cũ","chảo","tối","mới","trả","lời","cần","thu","xuân","hè","việc","cho","đông","nhanh","đo","chuyền","banh","bóng","đồ","năm","siêu","dừng","nhân","biển","chơi","chó","đánh","hội","mèo","cá","cờ","mình","tính","loa","thứ","bốn","rất","một","truyện","sáu","hề","tẩy","trang","mềm","xuống","dụng","ánh","sáng","đá","vùng","chút","thường","tiền","đừng","cha","thêm","rời","đi","dao","kéo","vở","áo","coi","tranh","im","đóng","quần","đồng","sắt","giữ","nhôm"
];

export function shuffle(a) {
   for (let i = a.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [a[i], a[j]] = [a[j], a[i]];
   }
   return a;
}
