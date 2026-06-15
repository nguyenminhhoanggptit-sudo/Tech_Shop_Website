const cart = getCart();

let totalItems = 0;
let totalPrice = 0;

cart.forEach(item => {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;
});

document.getElementById("totalItems").textContent = totalItems;
document.getElementById("subtotal").textContent = formatPrice(totalPrice);
document.getElementById("totalPrice").textContent = formatPrice(totalPrice);

document.getElementById("checkoutForm").addEventListener("submit", function(e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert("Giỏ hàng đang trống");
        return;
    }

    // ĐỌC THÔNG TIN TỪ CÁC Ô INPUT ĐỂ ĐÓNG GÓI ĐƠN HÀNG
    const fullname = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Tạo cấu trúc dữ liệu đơn hàng giống hệt success.js yêu cầu
    const finalOrder = {
        orderCode: 'GTT-' + Math.floor(100000 + Math.random() * 900000),
        customer: { fullname, phone, email, address, paymentMethod },
        items: cart,
        totalAmount: totalPrice,
        date: new Date().toISOString()
    };

    // LƯU VÀO LOCALSTORAGE TRƯỚC KHI CHUYỂN TRANG
    localStorage.setItem('receiptOrder', JSON.stringify(finalOrder));

    alert("Đặt hàng thành công!");

    // Làm sạch giỏ hàng
    localStorage.removeItem("cart");

    // CHUYỂN HƯỚNG SANG TRANG SUCCESS Chứ không về index
    window.location.href = "success.html";
});