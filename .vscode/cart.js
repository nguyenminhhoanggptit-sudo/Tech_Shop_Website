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
 
    // Nút ± số lượng
    if (e.target.classList.contains('qty-btn')) {
      const idx   = parseInt(e.target.dataset.idx);
      const delta = parseInt(e.target.dataset.delta);
      cart[idx].quantity = Math.max(1, (cart[idx].quantity || 1) + delta);
      saveCart(cart);
      renderCart();
      return;
    }
 
    // Nút xoá
    if (e.target.classList.contains('btn-remove')) {
      const idx = parseInt(e.target.dataset.idx);
      if (confirm(`Xoá "${cart[idx].name}" khỏi giỏ hàng?`)) {
        cart.splice(idx, 1);
        saveCart(cart);
        renderCart();
      }
    }
  });
 
  // Nhập tay số lượng
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
 
  // ── Nút thanh toán: yêu cầu đăng nhập ────
 
  checkoutBtn?.addEventListener('click', e => {
    if (!isLoggedIn()) {
      e.preventDefault();
      if (confirm('Bạn cần đăng nhập để thanh toán. Chuyển đến trang đăng nhập?')) {
        window.location.href = 'login.html';
      }
    }
  });
 
  renderCart();
});
