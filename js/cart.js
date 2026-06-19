document.addEventListener('DOMContentLoaded', () => {
 
  const tbody    = document.getElementById('cart-body');
  const totalEl  = document.getElementById('cart-total');
  const checkoutBtn = document.querySelector('.btn-checkout');
 
  // ── Render bảng giỏ hàng ─────────────────
  function renderCart() {
    const cart = getCart();
    tbody.innerHTML = '';
 
    if (cart.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center;padding:40px;color:#6b7280;font-size:16px;">
            🛒 Giỏ hàng trống.
            <br><br>
            <a href="products.html" style="color:#2563eb;font-weight:600;text-decoration:none;">
              → Tiếp tục mua sắm
            </a>
          </td>
        </tr>
      `;
      if (totalEl) totalEl.textContent = '0đ';
      if (checkoutBtn) checkoutBtn.style.pointerEvents = 'none', checkoutBtn.style.opacity = '.5';
      return;
    }
 
    if (checkoutBtn) checkoutBtn.style.pointerEvents = '', checkoutBtn.style.opacity = '';
 
    let grandTotal = 0;
 
    cart.forEach((item, idx) => {
      const lineTotal = (item.price || 0) * (item.quantity || 1);
      grandTotal += lineTotal;
 
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <img src="${item.image || 'https://via.placeholder.com/80'}"
               alt="${item.name}"
               onerror="this.src='https://via.placeholder.com/80'">
        </td>
        <td style="text-align:left;font-weight:600;">${item.name}</td>
        <td>${formatPrice(item.price || 0)}</td>
        <td>
          <div style="display:flex;align-items:center;justify-content:center;gap:8px;">
            <button class="qty-btn" data-idx="${idx}" data-delta="-1"
              style="width:28px;height:28px;border:1px solid #d1d5db;border-radius:6px;
                     background:#f3f4f6;cursor:pointer;font-size:16px;line-height:1;">−</button>
            <input type="number" value="${item.quantity || 1}" min="1"
                   class="qty-input" data-idx="${idx}"
                   style="width:55px;text-align:center;padding:5px;border:1px solid #d1d5db;border-radius:6px;">
            <button class="qty-btn" data-idx="${idx}" data-delta="1"
              style="width:28px;height:28px;border:1px solid #d1d5db;border-radius:6px;
                     background:#f3f4f6;cursor:pointer;font-size:16px;line-height:1;">+</button>
          </div>
        </td>
        <td style="font-weight:700;color:#2563eb;">${formatPrice(lineTotal)}</td>
        <td>
          <button class="btn-remove" data-idx="${idx}">Xoá</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
 
    if (totalEl) totalEl.textContent = formatPrice(grandTotal);
  }
 
  // ── Sự kiện trên bảng (event delegation) ──
  tbody.addEventListener('click', e => {
    const cart = getCart();
 
    if (e.target.classList.contains('qty-btn')) {
      const idx   = parseInt(e.target.dataset.idx);
      const delta = parseInt(e.target.dataset.delta);
      cart[idx].quantity = Math.max(1, (cart[idx].quantity || 1) + delta);
      saveCart(cart);
      renderCart();
      return;
    }
 
    if (e.target.classList.contains('btn-remove')) {
      const idx = parseInt(e.target.dataset.idx);
      if (confirm(`Xoá "${cart[idx].name}" khỏi giỏ hàng?`)) {
        cart.splice(idx, 1);
        saveCart(cart);
        renderCart();
      }
    }
  });
 
  tbody.addEventListener('change', e => {
    if (e.target.classList.contains('qty-input')) {
      const cart = getCart();
      const idx  = parseInt(e.target.dataset.idx);
      const val  = parseInt(e.target.value);
      cart[idx].quantity = isNaN(val) || val < 1 ? 1 : val;
      saveCart(cart);
      renderCart();
    }
  });
 
  checkoutBtn?.addEventListener('click', e => {
    if (!isLoggedIn()) {
      e.preventDefault();
      if (confirm('Bạn cần đăng nhập để thanh toán. Chuyển đến trang đăng nhập?')) {
        window.location.href = 'login.html';
      }
    }
  });
 
  renderCart();
  renderProcessingOrders();
  initInvoiceModal(); 
});

// ── Hàm hiển thị danh sách lịch sử đơn hàng ──
function renderProcessingOrders() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const container = document.getElementById('processing-orders-container');
  
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `<p style="color: #6b7280; font-style: italic; padding: 20px 0;">Bạn không có đơn hàng nào đang xử lý.</p>`;
    return;
  }

  let html = '';
  
  orders.forEach((order, index) => {
    const dateObj = new Date(order.date);
    const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;

    const timePassed = Date.now() - dateObj.getTime();
    const isCancellable = timePassed < 10000; 
    const timeLeft = Math.max(0, Math.ceil((10000 - timePassed) / 1000));
    const couponTag = order.couponCode ? `<span style="font-size: 12px; background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: 500;">Mã: ${order.couponCode}</span>` : '';

    let discountRowHtml = '';
    if (order.discountAmount && order.discountAmount > 0) {
      discountRowHtml = `
        <div style="display: flex; justify-content: space-between; font-size: 14px; color: #6b7280; margin-bottom: 4px;">
          <span>Tạm tính:</span>
          <span>${formatPrice(order.subtotalAmount || order.totalAmount)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 14px; color: #10b981; margin-bottom: 4px;">
          <span>Số tiền được giảm (${order.couponCode}):</span>
          <span>-${formatPrice(order.discountAmount)}</span>
        </div>
      `;
    }

    let statusHtml = '';
    let cancelActionHtml = '';

    if (isCancellable) {
      statusHtml = `<span id="status-text-${index}" style="background: #fef3c7; color: #d97706; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">⏳ Đang xử lý (${timeLeft}s)</span>`;
      cancelActionHtml = `
        <button onclick="cancelOrder(event, '${order.orderCode}')" id="cancel-btn-${index}" 
          style="background: #ef4444; color: #ffffff; border: none; padding: 6px 14px; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; transition: 0.2s;">
          ❌ Hủy đơn hàng
        </button>
      `;

      setTimeout(() => {
        const statusTextNode = document.getElementById(`status-text-${index}`);
        const cancelBtnNode = document.getElementById(`cancel-btn-${index}`);
        if (statusTextNode) {
          statusTextNode.style.background = '#d1fae5';
          statusTextNode.style.color = '#065f46';
          statusTextNode.innerHTML = '✅ Đặt hàng thành công';
        }
        if (cancelBtnNode) cancelBtnNode.remove();
      }, 10000 - timePassed);

      const countdownInterval = setInterval(() => {
        const currentPassed = Date.now() - dateObj.getTime();
        const currentLeft = Math.max(0, Math.ceil((10000 - currentPassed) / 1000));
        const currentStatusNode = document.getElementById(`status-text-${index}`);
        if (currentStatusNode && currentPassed < 10000) {
          currentStatusNode.innerHTML = `⏳ Đang xử lý (${currentLeft}s)`;
        } else {
          clearInterval(countdownInterval);
        }
      }, 1000);

    } else {
      statusHtml = `<span style="background: #d1fae5; color: #065f46; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">✅ Đặt hàng thành công</span>`;
    }

    html += `
      <div onclick="openInvoiceDetails('${order.orderCode}')" 
           style="background: #ffffff; border: 1px solid #e5e7eb; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;"
           onmouseenter="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)';"
           onmouseleave="this.style.transform='none'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.05)';">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f3f4f6; padding-bottom: 10px; margin-bottom: 10px;">
          <div>
            <span style="font-size: 16px;"><strong>Mã đơn:</strong> <span style="color: #2563eb; font-weight: 700;">${order.orderCode}</span> ${couponTag}</span>
            <br>
            <span style="font-size: 13px; color: #9ca3af;">Ngày đặt: ${formattedDate}</span>
          </div>
          ${statusHtml}
        </div>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 12px;">
          ${order.items.map(item => `
            <tr style="border-bottom: 1px dashed #f3f4f6;">
              <td style="padding: 8px 0; color: #374151;">${item.name}</td>
              <td style="padding: 8px 0; text-align: center; color: #6b7280; width: 60px;">x${item.quantity}</td>
              <td style="padding: 8px 0; text-align: right; font-weight: 500; color: #111827; width: 120px;">${formatPrice(item.price * item.quantity)}</td>
            </tr>
          `).join('')}
        </table>
        
        ${discountRowHtml}
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; padding-top: 8px; border-top: 1px solid #f3f4f6;">
          <div>
            ${cancelActionHtml}
          </div>
          <div style="text-align: right; font-size: 15px;">
            <span style="color: #4b5563;">Tổng thanh toán:</span>
            <span style="color: #ef4444; font-weight: 700; font-size: 18px; margin-left: 5px;">${formatPrice(order.totalAmount)}</span>
          </div>
        </div>
        <p style="font-size: 12px; color: #3b82f6; margin: 8px 0 0 0; text-align: right; font-weight: 500;">🔍 Bấm để xem hóa đơn</p>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

function cancelOrder(event, orderCode) {
  event.stopPropagation(); 
  if (confirm(`Bạn có chắc chắn muốn hủy đơn hàng ${orderCode} không?`)) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders = orders.filter(order => order.orderCode !== orderCode);
    localStorage.setItem('orders', JSON.stringify(orders));
    alert('Đã hủy đơn hàng thành công!');
    renderProcessingOrders(); 
  }
}

// ── KHỞI TẠO HÓA ĐƠN ─────────────────
function initInvoiceModal() {
  if (document.getElementById('invoiceModal')) return;

  const modal = document.createElement('div');
  modal.id = 'invoiceModal';
  modal.style.cssText = `
    display: none; position: fixed; z-index: 10000; left: 0; top: 0;
    width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);
    align-items: center; justify-content: center; font-family: Arial, sans-serif;
  `;

  modal.innerHTML = `
    <div style="background-color: #e2f0d9; border: 2px solid #a9d18e; border-radius: 4px; width: 95%; max-width: 520px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); overflow: hidden;">
      
      <!-- Thanh tiêu đề màu xanh lục nhạt -->
      <div style="background: #c6e0b4; padding: 10px 15px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #a9d18e;">
        <span style="font-weight: bold; color: #385723; font-size: 15px; display: flex; align-items: center; gap: 6px;">📋 Hóa Đơn Thanh Toán</span>
        <span id="closeInvoiceModalTop" style="font-size: 18px; font-weight: bold; color: #595959; cursor: pointer;">&times;</span>
      </div>

      <!-- Ruột hóa đơn màu trắng giấy bọc lọt lòng -->
      <div style="background: #ffffff; margin: 12px; padding: 25px 20px; border-radius: 4px; border: 1px solid #d9d9d9; max-height: 75vh; overflow-y: auto;" id="printArea">
        <div id="invoiceModalContent"></div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById('closeInvoiceModalTop').addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
}

function openInvoiceDetails(orderCode) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const order = orders.find(o => o.orderCode === orderCode);

  if (!order) {
    alert('Không tìm thấy thông tin đơn hàng này!');
    return;
  }

  const dateObj = new Date(order.date);
  const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;

  // Giả lập tính toán Thuế và Phí Ship free
  const calculatedSubtotal = order.subtotalAmount || order.totalAmount;
  const estimatedTax = 0;
  const estimatedShipping = 0; 
  const displayTotal = calculatedSubtotal + estimatedTax + estimatedShipping - (order.discountAmount || 0);

  // Danh sách sản phẩm mua dạng rút gọn liền dòng
  let itemsHtml = '';
  order.items.forEach(item => {
    itemsHtml += `
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; color: #333;">
        <span>${item.name} <span style="color: #7f7f7f; margin-left: 4px;">x${item.quantity}</span></span>
        <span>${(item.price * item.quantity).toLocaleString('vi-VN')}đ</span>
      </div>
    `;
  });

  const contentEl = document.getElementById('invoiceModalContent');
  contentEl.innerHTML = `
    <!-- Header hóa đơn -->
    <div style="text-align: center; margin-bottom: 25px;">
      <h2 style="margin: 0; color: #0070c0; font-size: 20px; letter-spacing: 1px; font-weight: bold;">🛒 GAU TRANG TECH</h2>
      <div style="font-size: 11px; color: #595959; font-weight: bold; margin-top: 2px;">HÓA ĐƠN THANH TOÁN</div>
      <div style="font-size: 13px; margin-top: 4px; color: #333;"><strong>Số hóa đơn:</strong> ${order.orderCode}</div>
      <div style="font-size: 13px; color: #333;"><strong>Ngày:</strong> ${formattedDate}</div>
    </div>

    <!-- Khối thông tin giao hàng -->
    <div style="margin-bottom: 25px;">
      <h3 style="font-size: 15px; margin: 0 0 10px 0; color: #000; font-weight: bold; display: flex; align-items: center; gap: 6px;">
        📍 <u>Thông tin giao hàng:</u>
      </h3>
      <div style="font-size: 13px; color: #333; line-height: 1.4; padding-left: 5px;">
        <p style="margin: 0 0 3px 0; font-weight: bold;">${order.customer.fullname}</p>
        <p style="margin: 0 0 3px 0;">${order.customer.address}</p>
        <p style="margin: 0 0 3px 0;">(+84) ${order.customer.phone.replace(/^0/, '')}</p>
        <p style="margin: 0 0 3px 0;"><strong>Phương thức:</strong> Giao hàng nhanh nhất có thể</p>
        <p style="margin: 0;"><strong>Ngày giao:</strong> Dự kiến 2-3 ngày kể từ khi duyệt</p>
      </div>
    </div>

    <hr style="border: none; border-top: 1px solid #d9d9d9; margin: 15px 0;">

    <!-- Khối sản phẩm đã mua -->
    <div style="margin-bottom: 25px;">
      <h3 style="font-size: 15px; margin: 0 0 12px 0; color: #000; font-weight: bold; display: flex; align-items: center; gap: 6px;">
        📦 <u>Sản phẩm đã mua:</u>
      </h3>
      <div style="padding-left: 5px;">
        ${itemsHtml}
      </div>
    </div>

    <hr style="border: none; border-top: 1px solid #d9d9d9; margin: 15px 0;">

    <!-- Khối tiền bạc dồn về bên phải -->
    <div style="text-align: right; font-size: 13px; color: #333; line-height: 1.6; margin-bottom: 25px; padding-right: 5px;">
      <div>Tạm tính: ${calculatedSubtotal.toLocaleString('vi-VN')}đ</div>
      <div>Thuế: ${estimatedTax.toLocaleString('vi-VN')}đ</div>
      <div>Phí ship: ${estimatedShipping.toLocaleString('vi-VN')}đ</div>
      ${order.discountAmount ? `<div style="color:#10b981;">Mã giảm giá: -${order.discountAmount.toLocaleString('vi-VN')}đ</div>` : ''}
      <div style="font-size: 16px; font-weight: bold; color: #c00000; margin-top: 5px;">
        Tổng cộng: ${displayTotal.toLocaleString('vi-VN')}đ
      </div>
    </div>

    <!-- Khối chân trang cảm ơn -->
    <div style="text-align: center; font-size: 11px; color: #7f7f7f; line-height: 1.4; border-top: 1px dashed #d9d9d9; padding-top: 12px; margin-bottom: 20px;">
      Cảm ơn bạn đã mua sắm tại Gau Trang Tech!<br>
      Hotline:  0398 668 156 | Email: contact@gautrangtech.vn
    </div>

    <!-- Hàng 3 nút bấm chức năng -->
    <div style="display: flex; justify-content: center; gap: 12px; margin-top: 15px;">
      <button onclick="printInvoice()" style="background: #0070c0; color: white; border: none; padding: 7px 16px; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: bold; display: flex; align-items: center; gap: 5px;">
        🖨 In hóa đơn
      </button>
      <button onclick="downloadInvoice('${order.orderCode}')" style="background: #2e7d32; color: white; border: none; padding: 7px 16px; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: bold; display: flex; align-items: center; gap: 5px;">
        📥 Tải xuống
      </button>
      <button onclick="document.getElementById('invoiceModal').style.display='none'" style="background: #595959; color: white; border: none; padding: 7px 16px; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: bold; display: flex; align-items: center; gap: 5px;">
        ❌ Đóng
      </button>
    </div>
  `;

  document.getElementById('invoiceModal').style.display = 'flex';
}

// ── XỬ LÝ HÀNH ĐỘNG IN HÓA ĐƠN ──
function printInvoice() {
  const printContents = document.getElementById('printArea').innerHTML;
  
  // Loại bỏ hàng nút bấm cuối cùng khỏi chuỗi nội dung để khi in không bị dính nút
  const cleanContents = printContents.split('<div style="display: flex; justify-content: center; gap: 12px;')[0];
  
  const originalContents = document.body.innerHTML;

  document.body.innerHTML = `<div style="padding:30px; font-family:Arial;">${cleanContents}</div>`;
  window.print();
  
  // Khôi phục lại giao diện trang web sau khi hộp thoại in đóng
  document.body.innerHTML = originalContents;
  window.location.reload(); 
}

// ── XỬ LÝ HÀNH ĐỘNG TẢI FILE BIÊN LAI (DẠNG TEXT/MOCK) ──
function downloadInvoice(orderCode) {
  const content = document.getElementById('printArea').innerText;
  // Loại bỏ dòng chữ của 3 nút ở cuối text bản thô
  const cleanText = content.split('🖨 In hóa đơn')[0];
  
  const blob = new Blob([cleanText], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `HoaDon_${orderCode}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
}
