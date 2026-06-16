document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById("searchInput");
    // Tìm nút kính lúp nằm ngay sau ô input trong khối .search-box
    const searchBtn = document.querySelector(".search-box button");

    // Hàm xử lý chuyển hướng tìm kiếm dùng chung
    function handleSearch() {
        const keyword = searchInput.value.trim();
        if (keyword !== "") {
            // Chuyển hướng sang trang danh sách sản phẩm kèm tham số truy vấn q
            window.location.href = `products.html?q=${encodeURIComponent(keyword)}`;
        } else {
            // Nếu để trống mà bấm tìm kiếm thì chuyển thẳng đến trang sản phẩm luôn
            window.location.href = "products.html";
        }
    }

    // 1. Bắt sự kiện khi người dùng nhấn phím Enter trên ô nhập liệu
    if (searchInput) {
        searchInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                handleSearch();
            }
        });
    }

    // 2. Bắt sự kiện khi người dùng click chuột vào nút kính lúp 🔍
    if (searchBtn) {
        searchBtn.addEventListener("click", function() {
            handleSearch();
        });
    }
});