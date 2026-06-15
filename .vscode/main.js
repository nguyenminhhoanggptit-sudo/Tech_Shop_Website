/************************************************
 * 1️⃣ TIỆN ÍCH ĐĂNG NHẬP / ĐĂNG XUẤT THÀNH VIÊN
 ************************************************/

// Lấy thông tin user hiện tại từ localStorage
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser'));
}

// Xử lý đăng xuất tài khoản
function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'login.html';
}

// Hiển thị tên user thay cho nút Đăng nhập / Đăng ký kèm dropdown menu
function renderAuthNav() {
  const user = getCurrentUser();
  if (!user) return;

  // Tìm nút "Đăng nhập / Đăng ký" trên thanh điều hướng
  const links = document.querySelectorAll(
    '.header-links a[href="login.html"], nav a[href="login.html"]'
  );

  links.forEach(link => {
    /* ===== Khối bọc ngoài (Wrapper) ===== */
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.display = 'inline-block';

    /* ===== Nút hiển thị tên user ===== */
    const userBtn = document.createElement('span');
    userBtn.textContent = `👤 ${user.fullname || user.email}`;
    userBtn.style.cursor = 'pointer';
    userBtn.style.fontWeight = '600';
    userBtn.style.fontSize = '15px';
    userBtn.style.color = '#2563eb';
    userBtn.style.padding = '10px 14px';
    userBtn.style.display = 'inline-flex';
    userBtn.style.alignItems = 'center';

    /* ===== Khối Menu con (Dropdown) ===== */
    const dropdown = document.createElement('div');
    dropdown.style.position = 'absolute';
    dropdown.style.top = '100%';
    dropdown.style.right = '0';
    dropdown.style.background = '#fff';
    dropdown.style.border = '1px solid #e5e7eb';
    dropdown.style.borderRadius = '10px';
    dropdown.style.minWidth = '150px';
    dropdown.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
    dropdown.style.display = 'none';
    dropdown.style.zIndex = '9999';
    dropdown.style.marginTop = '6px';

    /* ===== Nút Đăng xuất nằm trong menu ===== */
    const logoutBtn = document.createElement('div');
    logoutBtn.textContent = '🚪 Đăng xuất';
    logoutBtn.style.padding = '12px 16px';
    logoutBtn.style.color = '#ef4444';
    logoutBtn.style.fontWeight = '600';
    logoutBtn.style.cursor = 'pointer';

    // Hiệu ứng hover cho nút Đăng xuất
    logoutBtn.addEventListener('mouseenter', () => {
      logoutBtn.style.background = '#fef2f2';
    });
    logoutBtn.addEventListener('mouseleave', () => {
      logoutBtn.style.background = '';
    });
    logoutBtn.addEventListener('click', logout);

    /* ===== Sự kiện Click ẩn/hiện menu ===== */
    userBtn.addEventListener('click', e => {
      e.stopPropagation();
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Bấm ra ngoài bất kỳ vị trí nào sẽ tự động đóng menu lại
    document.addEventListener('click', () => {
      dropdown.style.display = 'none';
    });

    /* ===== Ráp nối các phần tử vào DOM ===== */
    dropdown.appendChild(logoutBtn);
    wrapper.appendChild(userBtn);
    wrapper.appendChild(dropdown);

    // Thay thế liên kết cũ bằng cụm tên tài khoản mới
    link.replaceWith(wrapper);
  });
}

/************************************************
 * 2️⃣ CÁC HÀM XỬ LÝ GIỎ HÀNG DÙNG CHUNG TOÀN TRANG
 ************************************************/

// Lấy mảng sản phẩm trong giỏ hàng từ localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Lưu mảng sản phẩm giỏ hàng vào localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Thêm sản phẩm vào giỏ (Nếu trùng ID sản phẩm thì tăng số lượng)
function addToCart(product, quantity) {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }
  saveCart(cart);
}

// Định dạng số thành chuỗi hiển thị tiền tệ VNĐ (Vd: 33990000 -> "33.990.000đ")
function formatPrice(price) {
  return price.toLocaleString('vi-VN') + 'đ';
}

// Kiểm tra trạng thái đăng nhập hệ thống (true/false)
function isLoggedIn() {
  return localStorage.getItem('currentUser') !== null;
}

/************************************************
 * 3️⃣ KHỞI CHẠY KHI GIAO DIỆN ĐÃ SẴN SÀNG
 ************************************************/
document.addEventListener('DOMContentLoaded', () => {
  renderAuthNav();
});