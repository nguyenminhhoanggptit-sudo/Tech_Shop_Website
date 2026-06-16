    document.getElementById('contactForm').addEventListener('submit', (e) => {
      e.preventDefault(); // Chặn hành vi tải lại trang hoặc gửi lên server trống
      
      const fullname = document.getElementById('fullname').value.trim();
      const email = document.getElementById('email').value.trim();
      const content = document.getElementById('content').value.trim();
      const messageDiv = document.getElementById('message');

      // Tạo hiệu ứng chờ gửi cho giống thực tế
      messageDiv.style.display = 'block';
      messageDiv.textContent = '⏳ Đang gửi tin nhắn của bạn...';
      messageDiv.className = 'form-message';

      // Giả lập độ trễ mạng 800ms
      setTimeout(() => {
        if (fullname && email && content) {
          // Hiện thông báo thành công (Khớp với class .success trong file contact.css của bạn)
          messageDiv.textContent = '✅ Gửi thành công! Gấu Trắng Tech sẽ liên hệ với bạn sớm.';
          messageDiv.className = 'form-message success';
          
          // Xóa sạch dữ liệu trong form sau khi gửi xong
          document.getElementById('contactForm').reset();
        } else {
          // Hiện thông báo thất bại nếu thiếu trường thông tin
          messageDiv.textContent = '❌ Gửi thất bại. Vui lòng điền đầy đủ thông tin!';
          messageDiv.className = 'form-message error';
        }
      }, 800);
    });