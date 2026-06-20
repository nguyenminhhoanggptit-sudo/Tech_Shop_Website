# 🐻 Gấu Trắng Tech — Website Bán Đồ Điện Tử Trực Tuyến
> Nền tảng thương mại điện tử chuyên nghiệp, tối ưu hóa trải nghiệm mua sắm thiết bị công nghệ trên môi trường thuần Frontend.

Danh mục sản phẩm đa dạng từ điện thoại, laptop, máy tính bảng cho đến phụ kiện công nghệ. Dự án được phát triển dựa trên kiến trúc **Client-Only**, tập trung tối đa vào hiệu năng tải trang, giao diện tối giản hiện đại và khả năng tương thích cao.

⚡ **Tech Stack:** `HTML5` | `CSS3` | `Vanilla JavaScript (DOM Manipulation)` | `Local Storage` | `Mock API (JSON Server)`.

---

## 🚀 Tính năng nổi bật (Features)

* **📱 Duyệt & Lọc sản phẩm thông minh:** Sản phẩm hiển thị mạch lạc theo phân loại danh mục (Điện thoại, Laptop, Tivi...). Bộ lọc kết hợp thanh tìm kiếm từ khóa giúp tiếp cận sản phẩm tức thời.
* **🔍 Trực quan hóa cấu hình chi tiết:** Trang chi tiết cung cấp hình ảnh sắc nét, bảng thông số kỹ thuật phần cứng (CPU, RAM, ổ cứng) trực quan kèm các nút kêu gọi hành động (CTA) kích thước lớn.
* **🛒 Hệ thống Giỏ hàng & Đơn hàng động:** Cho phép thêm nhanh, tăng/giảm số lượng hoặc xóa mặt hàng. Tích hợp phân hệ hiển thị lịch sử "Đơn hàng đang xử lý" ngay trong trang giỏ hàng.
* **🎟️ Thanh toán & Áp dụng mã giảm giá:** Form thu thập thông tin giao nhận tinh gọn có kiểm tra tính hợp lệ dữ liệu (Validation). Hỗ trợ giả lập cơ chế nhập mã Voucher (Ví dụ: `ILOVEGAUTRANG`) để trừ tiền trực tiếp vào tổng hóa đơn.
* **🔐 Xác thực & Liên hệ tiện lợi:** Form đăng nhập/đăng ký giả lập lưu trạng thái người dùng vào Local Storage để đồng bộ hiển thị lên thanh điều hướng chính. Form liên hệ hỗ trợ bắt lỗi định dạng Email bằng Regex.
* **📱 Thiết kế thích ứng (Responsive Layout):** Khắc phục hoàn toàn nhược điểm vỡ bố cục của các hệ thống cũ nhờ ứng dụng CSS Flexbox và Grid, mang lại trải nghiệm hiển thị 100% mượt mà trên cả máy tính lẫn di động.

---

## 📂 Cấu trúc thư mục (Project Structure)

Mã nguồn được tổ chức chặt chẽ theo mô hình phân tách module rõ ràng để dễ dàng bảo trì và mở rộng:

```text
Tech_Shop_Website/
├── css/                  # Chứa toàn bộ mã định dạng giao diện, phong cách và responsive
├── js/                   # Thư mục xử lý logic JavaScript cho từng phân hệ
│   ├── main.js           # Xử lý logic toàn cục (Định dạng VNĐ, tạo mã đơn, Header)
│   ├── index.js          # Logic tương tác và render dữ liệu trang chủ
│   ├── products.js       # Xử lý Fetch dữ liệu sản phẩm, tìm kiếm và lọc danh mục
│   ├── cart.js           # Điều khiển giỏ hàng động và lưu trữ trạng thái bền vững
│   ├── checkout.js       # Nghiệp vụ kiểm tra Form, áp mã giảm giá và tính toán đơn hàng
│   ├── login.js          # Xác thực thông tin biểu mẫu Đăng nhập / Đăng ký
│   ├── contact.js        # Nhận sự kiện, validate Regex và phản hồi Form liên hệ
│   └── success.js        # Đóng gói dữ liệu đơn hàng và xuất biên lai dạng Modal/UI
├── images/               # Quản lý tài nguyên hình ảnh, banner quảng cáo, logo, asset
├── index.html            # Trang chủ hệ thống (Điểm chạm đầu tiên của khách hàng)
├── products.html         # Trang lưới danh sách toàn bộ sản phẩm công nghệ
├── product-detail.html   # Trang xem thông số cấu hình và chi tiết thiết bị
├── cart.html             # Tích hợp bảng quản lý giỏ hàng và danh sách đơn hàng đang xử lý
├── checkout.html         # Giao diện tóm tắt đơn hàng và nhập thông tin giao nhận
├── login.html            # Biểu mẫu xác thực tài khoản thành viên trực quan
├── contact.html          # Trang hiển thị hotline, địa chỉ và form gửi tin nhắn hỗ trợ
└── success.html          # Trang thông báo đặt hàng/thao tác thành công
