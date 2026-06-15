document.addEventListener('DOMContentLoaded', () => {
    // Đọc thông tin đơn hàng vừa được ghi nhận từ trang thanh toán
    const order = JSON.parse(localStorage.getItem('receiptOrder'));

    if (!order) {
        alert('Không tìm thấy thông tin biên nhận đơn hàng!');
        window.location.href = 'index.html';
        return;
    }

    // 1. Đổ thông tin khách hàng ra giao diện
    document.querySelector('.order-code strong').textContent = order.orderCode;
    
    const nameEl = document.getElementById('out-name');
    const emailEl = document.getElementById('out-email');
    const phoneEl = document.getElementById('out-phone');
    const addressEl = document.getElementById('out-address');

    if (nameEl) nameEl.textContent = order.customer.fullname;
    if (emailEl) emailEl.textContent = order.customer.email;
    if (phoneEl) phoneEl.textContent = order.customer.phone;
    if (addressEl) addressEl.textContent = order.customer.address;

    // 2. Đổ danh sách sản phẩm đã mua vào bảng chi tiết
    const tbody = document.getElementById('out-order-items-body') || document.querySelector('.order-table tbody');
    if (tbody) {
        let rowsHtml = '';
        order.items.forEach(item => {
            rowsHtml += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price.toLocaleString('vi-VN')} VND</td>
                    <td>${(item.price * item.quantity).toLocaleString('vi-VN')} VND</td>
                </tr>
            `;
        });
        tbody.innerHTML = rowsHtml;
    }

    // 3. Đổ tổng tiền thanh toán và định dạng thời gian đặt hàng
    const orderTotalDiv = document.querySelector('.order-total');
    if (orderTotalDiv) {
        const dateObj = new Date(order.date);
        const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()} ${dateObj.getHours().toString().padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}`;
        
        orderTotalDiv.innerHTML = `
            <p><strong>Tổng tiền:</strong> <span style="color:#dc3545; font-weight:bold; font-size:1.25rem;">${order.totalAmount.toLocaleString('vi-VN')} VND</span></p>
            <p><strong>Ngày đặt:</strong> <span>${formattedDate}</span></p>
            <p><strong>Trạng thái:</strong> <span class="status-pending" style="background:#ffc107; color:#212529; padding:2px 8px; border-radius:4px; font-size:0.85rem; font-weight:bold;">Chờ xử lý</span></p>
        `;
    }
});