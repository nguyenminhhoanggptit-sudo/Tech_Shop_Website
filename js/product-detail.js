const PRODUCTS_DETAIL = [
  { id:1,  name:'iPhone 15 Pro Max', price:33990000, category:'Điện thoại', image:'images/featured1.jpg', rating:4.8, stock:10,
    description:'iPhone 15 Pro Max với chip A17 Pro mạnh mẽ, màn hình Super Retina XDR 6.7", camera 48MP, thiết kế titan cao cấp.',
    specs:{ 'Màn hình':'6.7" Super Retina XDR', 'Chip':'Apple A17 Pro', 'RAM':'8 GB', 'Bộ nhớ':'256 GB', 'Pin':'4422 mAh', 'OS':'iOS 17' } },
  { id:2,  name:'Samsung Galaxy S24 Ultra', price:27990000, category:'Điện thoại', image:'images/featured2.jpg', rating:4.7, stock:8,
    description:'Galaxy S24 Ultra trang bị bút S Pen tích hợp, camera 200MP, màn hình Dynamic AMOLED 6.8" 120Hz.',
    specs:{ 'Màn hình':'6.8" AMOLED 120Hz', 'Chip':'Snapdragon 8 Gen 3', 'RAM':'12 GB', 'Bộ nhớ':'256 GB', 'Pin':'5000 mAh', 'OS':'Android 14' } },
  { id:3,  name:'MacBook Air M3', price:28990000, category:'Laptop', image:'images/featured3.jpg', rating:4.9, stock:5,
    description:'MacBook Air M3 siêu mỏng nhẹ, chip M3 vượt trội, màn hình Liquid Retina 13.6", thời lượng pin 18 giờ.',
    specs:{ 'Màn hình':'13.6" Liquid Retina', 'Chip':'Apple M3', 'RAM':'8 GB', 'SSD':'256 GB', 'Pin':'~18 giờ', 'OS':'macOS Sonoma' } },
  { id:4,  name:'Dell XPS 15', price:35990000, category:'Laptop', image:'images/featured4.jpg', rating:4.6, stock:4,
    description:'Dell XPS 15 với màn hình OLED 3.5K chuẩn màu DCI-P3, Intel Core Ultra 7, card đồ hoạ RTX 4060.',
    specs:{ 'Màn hình':'15.6" OLED 3.5K', 'CPU':'Intel Core Ultra 7', 'RAM':'16 GB', 'SSD':'512 GB', 'GPU':'RTX 4060', 'OS':'Windows 11' } },
  { id:5,  name:'Sony Bravia 55"', price:18990000, category:'Tivi', image:'images/featured5.jpg', rating:4.5, stock:7,
    description:'Sony Bravia X85L 55" 4K HDR, công nghệ Cognitive Processor XR, Google TV tích hợp, Dolby Atmos.',
    specs:{ 'Kích thước':'55 inch', 'Độ phân giải':'4K UHD', 'OS':'Google TV', 'Âm thanh':'Dolby Atmos 20W', 'HDR':'HDR10 / Dolby Vision', 'Cổng HDMI':'4 x HDMI 2.1' } },
  { id:6,  name:'Samsung QLED 65"', price:32990000, category:'Tivi', image:'images/featured6.jpg', rating:4.7, stock:3,
    description:'Samsung QLED Q80C 65" 4K, công nghệ Quantum Dot, tần số 144Hz, tích hợp Gaming Hub.',
    specs:{ 'Kích thước':'65 inch', 'Độ phân giải':'4K QLED', 'Tần số':'144Hz', 'Âm thanh':'Dolby Atmos 40W', 'HDR':'HDR10+', 'Cổng HDMI':'4 x HDMI 2.1' } },
  { id:7,  name:'JBL Xtreme 3', price:4490000, category:'Loa', image:'images/featured7.jpg', rating:4.4, stock:15,
    description:'Loa bluetooth JBL Xtreme 3 kháng nước IP67, thời lượng pin 15 giờ, âm thanh mạnh mẽ 100W.',
    specs:{ 'Công suất':'100W', 'Pin':'~15 giờ', 'Kết nối':'Bluetooth 5.1', 'Kháng nước':'IP67', 'Trọng lượng':'1.85 kg' } },
  { id:8,  name:'Sony WH-1000XM5', price:7990000, category:'Loa', image:'images/featured8.jpg', rating:4.8, stock:12,
    description:'Tai nghe chống ồn Sony WH-1000XM5, công nghệ ANC hàng đầu, pin 30 giờ, kết nối multipoint.',
    specs:{ 'Loại':'Over-ear', 'ANC':'Adaptive', 'Pin':'~30 giờ', 'Kết nối':'Bluetooth 5.2', 'Codec':'LDAC, AAC, SBC' } },
  { id:9,  name:'Blue Yeti USB Mic', price:3290000, category:'Mic', image:'images/featured3.jpg', rating:4.5, stock:20,
    description:'Micro Blue Yeti USB chuyên nghiệp, 4 chế độ thu âm, kết nối trực tiếp qua USB, lý tưởng cho podcast, stream.',
    specs:{ 'Kết nối':'USB-A', 'Chế độ thu':'4 (Cardioid, Bidirectional, Omnidirectional, Stereo)', 'Tần số':'20Hz - 20kHz', 'Bit depth':'16-bit', 'Sample rate':'48kHz' } },
  { id:10, name:'Rode NT-USB Mini', price:2490000, category:'Mic', image:'images/promo1.jpg', rating:4.3, stock:18,
    description:'Micro Rode NT-USB Mini nhỏ gọn, thiết kế ổn định, phù hợp làm việc từ xa, học online.',
    specs:{ 'Kết nối':'USB-C', 'Loại':'Cardioid condenser', 'Tần số':'20Hz - 20kHz', 'Bit depth':'24-bit', 'Sample rate':'48kHz' } },
  { id:11, name:'GoPro Hero 12', price:10990000, category:'Camera', image:'images/promo2.jpg', rating:4.6, stock:9,
    description:'GoPro Hero 12 Black quay 5.3K60fps, chống rung HyperSmooth 6.0, kháng nước 10m không cần vỏ.',
    specs:{ 'Video':'5.3K60fps', 'Ảnh':'27 MP', 'Chống rung':'HyperSmooth 6.0', 'Kháng nước':'10m', 'Pin':'~70 phút' } },
  { id:12, name:'Canon EOS R50', price:21990000, category:'Camera', image:'images/promo3.jpg', rating:4.7, stock:6,
    description:'Máy ảnh Canon EOS R50 mirrorless gọn nhẹ, cảm biến 24.2MP, video 4K, lý tưởng cho người mới bắt đầu.',
    specs:{ 'Cảm biến':'APS-C 24.2MP', 'Video':'4K 30fps', 'AF':'Dual Pixel CMOS AF II', 'Màn hình':'3" cảm ứng xoay', 'Pin':'~390 shots' } },
];
 
document.addEventListener('DOMContentLoaded', () => {
 
  // ── Đọc ID từ URL ─────────────────────────
 
  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('id'));
 
  const loadingEl = document.getElementById('loading');
  const errorEl   = document.getElementById('error');
  const detailEl  = document.getElementById('product-detail');
 
  function showState(state) {
    loadingEl?.classList.toggle('hidden', state !== 'loading');
    errorEl?.classList.toggle('hidden',   state !== 'error');
    detailEl?.classList.toggle('hidden',  state !== 'detail');
  }
 
  async function loadProduct() {
    showState('loading');
    await new Promise(r => setTimeout(r, 300));
 
    const product = PRODUCTS_DETAIL.find(p => p.id === id);
 
    if (!product) {
      document.getElementById('error-message').textContent =
        'Không tìm thấy sản phẩm. Vui lòng quay lại trang danh sách.';
      showState('error');
      return;
    }
 
    // ── Gán nội dung ──────────────────────────
 
    document.title = `${product.name} – Gấu Trắng Tech`;
    document.getElementById('breadcrumb-product').textContent = product.name;
    document.getElementById('product-image').src   = product.image;
    document.getElementById('product-image').alt   = product.name;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-rating').textContent = `⭐ ${product.rating}`;
    document.getElementById('product-price').textContent  = formatPrice(product.price);
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('stock-amount').textContent = product.stock;
 
    if (product.stock === 0) {
      document.getElementById('product-stock').classList.add('out-of-stock');
      document.getElementById('stock-amount').textContent = 'Hết hàng';
    }
 
    // Thông số kỹ thuật
    const specsList = document.getElementById('specs-list');
    specsList.innerHTML = '';
    Object.entries(product.specs || {}).forEach(([key, val]) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${key}</strong><span>${val}</span>`;
      specsList.appendChild(li);
    });
 
    // Gán data-id cho nút
    const btn = document.getElementById('add-to-cart');
    btn.dataset.id = product.id;
 
    // Giới hạn số lượng nhập
    const qtyInput = document.getElementById('quantity');
    qtyInput.max   = product.stock;
    if (product.stock === 0) btn.disabled = true;
 
    showState('detail');
 
    // ── Thêm vào giỏ ────────────────────────
 
    btn.addEventListener('click', () => {
      const qty = parseInt(qtyInput.value) || 1;
      if (qty < 1 || qty > product.stock) {
        alert(`Số lượng không hợp lệ (1 – ${product.stock}).`);
        return;
      }
 
      addToCart({
        id    : product.id,
        name  : product.name,
        price : product.price,
        image : product.image,
      }, qty);
 
      showToastDetail('🛒 Đã thêm vào giỏ hàng!');
    });
  }
 
  function showToastDetail(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = `
      position:fixed;bottom:30px;right:30px;z-index:9999;
      background:#22c55e;color:#fff;padding:14px 22px;
      border-radius:12px;font-weight:600;font-size:15px;
      box-shadow:0 4px 16px rgba(0,0,0,.15);
    `;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2500);
  }
 
  loadProduct();
});