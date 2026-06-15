   document.addEventListener('DOMContentLoaded', () => {
      const loginFormContainer = document.querySelector('.login-form');
      const registerFormContainer = document.querySelector('.register-form');
      const showRegisterBtn = document.getElementById('show-register');
      const showLoginBtn = document.getElementById('show-login');

      // 1. Chuyển đổi qua lại giữa Form đăng nhập và Đăng ký mượt mà
      if (showRegisterBtn && showLoginBtn) {
        showRegisterBtn.onclick = (e) => {
          e.preventDefault(); 
          loginFormContainer.classList.add('hidden');
          registerFormContainer.classList.remove('hidden');
        };
        showLoginBtn.onclick = (e) => {
          e.preventDefault(); 
          registerFormContainer.classList.add('hidden');
          loginFormContainer.classList.remove('hidden');
        };
      }

      // Helper lấy/ghi dữ liệu "người dùng" từ localStorage
      function getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
      }

      // 2. Xử lý logic Đăng nhập giả lập bằng Front-end
      const loginForm = document.getElementById('loginForm');
      if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
          e.preventDefault(); // CHẶN TUYỆT ĐỐI LOAD LẠI TRANG

          const email = document.getElementById('login-email').value.trim();
          const password = document.getElementById('login-password').value;

          const users = getUsers();
          const user = users.find(u => u.email === email && u.password === password);

          if (!user) {
            alert('Email hoặc mật khẩu không chính xác!');
            return;
          }

          // Đăng nhập đúng -> Lưu vào currentUser và nhảy về trang chủ
          localStorage.setItem('currentUser', JSON.stringify(user));
          alert('Đăng nhập thành công!');
          window.location.href = 'index.html'; 
        });
      }

      // 3. Xử lý logic Đăng ký tài khoản lưu vào localStorage
      const registerForm = document.getElementById('registerForm');
      if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
          e.preventDefault(); // CHẶN TUYỆT ĐỐI GỬI FORM LÊN SERVER ẢO

          const fullname = document.getElementById('register-fullname').value.trim();
          const email = document.getElementById('register-email').value.trim();
          const password = document.getElementById('register-password').value;

          if (password.length < 6) {
            alert('Mật khẩu tối thiểu phải từ 6 ký tự!');
            return;
          }

          const users = getUsers();
          if (users.find(u => u.email === email)) {
            alert('Email này đã được đăng ký hệ thống!');
            return;
          }

          // Tiến hành đăng ký thành viên mới
          users.push({ fullname, email, password });
          localStorage.setItem('users', JSON.stringify(users));

          alert('Đăng ký tài khoản thành công! Hãy tiến hành đăng nhập.');
          
          // Tự động quay lại form đăng nhập và điền sẵn email vừa đăng ký
          registerFormContainer.classList.add('hidden');
          loginFormContainer.classList.remove('hidden');
          document.getElementById('login-email').value = email;
        });
      }
    });