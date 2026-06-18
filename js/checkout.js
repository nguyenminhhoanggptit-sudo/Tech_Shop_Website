// characters/checkout.js

const cart = getCart();

let totalItems = 0;
let subtotalPrice = 0; // Giá tiền gốc chưa giảm
let discountAmount = 0; // Số tiền được giảm
let finalTotalPrice = 0; // Số tiền cuối cùng phải trả
let appliedCoupon = ""; // Tên mã đã dùng thành công

// Định nghĩa danh sách mã giảm giá mẫu hợp lệ
const COUPONS = {
    "GAUTRANGDEPTRAI": { type: "percent", value: 100 }, // Giảm 10% tổng đơn
    "ILOVEGAUTRANG": { type: "fixed", value: 50000 },    // Giảm thẳng 50.000đ
    "TECH20": { type: "percent", value: 20 }        // Giảm 100% đơn hàng
};

// Tính toán giỏ hàng ban đầu
cart.forEach(item => {
    totalItems += item.quantity;
    subtotalPrice += item.price * item.quantity;
});
finalTotalPrice = subtotalPrice;

// Hiển thị thông tin mặc định ban đầu ra giao diện
document.getElementById("totalItems").textContent = totalItems;
document.getElementById("subtotal").textContent = formatPrice(subtotalPrice);
document.getElementById("totalPrice").textContent = formatPrice(finalTotalPrice);

// Sự kiện click nút áp dụng mã giảm giá
document.getElementById("applyCouponBtn").addEventListener("click", () => {
    const codeInput = document.getElementById("couponCode").value.trim().toUpperCase();
    const msgEl = document.getElementById("couponMessage");
    const discountRow = document.getElementById("discountRow");
    const discountPercentEl = document.getElementById("discountPercent");
    const discountAmountEl = document.getElementById("discountAmount");
    const totalPriceEl = document.getElementById("totalPrice");

    if (cart.length === 0) {
        alert("Giỏ hàng trống, không thể áp dụng mã!");
        return;
    }

    if (codeInput === "") {
        msgEl.style.display = "block";
        msgEl.style.color = "#ef4444";
        msgEl.textContent = "❌ Vui lòng nhập mã giảm giá.";
        return;
    }

    if (COUPONS[codeInput]) {
        const coupon = COUPONS[codeInput];
        appliedCoupon = codeInput;

        // Tính toán số tiền giảm theo loại mã
        if (coupon.type === "percent") {
            discountAmount = (subtotalPrice * coupon.value) / 100;
            discountPercentEl.textContent = coupon.value + "%";
        } else if (coupon.type === "fixed") {
            discountAmount = coupon.value;
            discountPercentEl.textContent = "Cố định";
        }

        // Đảm bảo số tiền giảm không vượt quá tổng giá trị đơn hàng
        if (discountAmount > subtotalPrice) {
            discountAmount = subtotalPrice;
        }

        finalTotalPrice = subtotalPrice - discountAmount;

        // Cập nhật hiển thị giao diện thành công
        discountRow.style.display = "flex";
        discountAmountEl.textContent = "-" + formatPrice(discountAmount);
        totalPriceEl.textContent = formatPrice(finalTotalPrice);

        msgEl.style.display = "block";
        msgEl.style.color = "#10b981";
        msgEl.textContent = `✅ Áp dụng mã ${codeInput} thành công!`;
    } else {
        // Trả về mặc định nếu nhập sai mã
        appliedCoupon = "";
        discountAmount = 0;
        finalTotalPrice = subtotalPrice;

        discountRow.style.display = "none";
        totalPriceEl.textContent = formatPrice(finalTotalPrice);

        msgEl.style.display = "block";
        msgEl.style.color = "#ef4444";
        msgEl.textContent = "❌ Mã giảm giá không tồn tại hoặc đã hết hạn.";
    }
});

// Xử lý gửi Form xác nhận đặt hàng
document.getElementById("checkoutForm").addEventListener("submit", function(e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert("Giỏ hàng đang trống");
        return;
    }

    const fullname = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Đóng gói cấu trúc dữ liệu đơn hàng bao gồm thông tin coupon giảm giá
    const finalOrder = {
        orderCode: 'GTT-' + Math.floor(100000 + Math.random() * 900000),
        customer: { fullname, phone, email, address, paymentMethod },
        items: cart,
        subtotalAmount: subtotalPrice,     // Giá gốc
        discountAmount: discountAmount,     // Số tiền giảm
        couponCode: appliedCoupon,          // Tên mã đã dùng
        totalAmount: finalTotalPrice,       // Số tiền cuối thực thu
        date: new Date().toISOString()
    };

    // Lưu đơn hàng vào danh sách lịch sử tổng trong hệ thống
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    existingOrders.unshift(finalOrder);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    // Lưu riêng vào biên lai receiptOrder phục vụ hiển thị trực tiếp tại trang success.html
    localStorage.setItem('receiptOrder', JSON.stringify(finalOrder));

    alert("Đặt hàng thành công!");

    // Làm sạch giỏ hàng tạm thời
    localStorage.removeItem("cart");

    // Chuyển hướng sang trang hóa đơn thành công
    window.location.href = "success.html";
});
