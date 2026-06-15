const PRODUCTS = [
  { id:1,  name:'iPhone 15 Pro Max', price:33990000, category:'phone',  image:'images/featured1.jpg', rating:4.8, stock:10 },
  { id:2,  name:'Samsung Galaxy S24 Ultra', price:27990000, category:'phone', image:'images/featured2.jpg', rating:4.7, stock:8 },
  { id:3,  name:'MacBook Air M3', price:28990000, category:'laptop', image:'images/featured3.jpg', rating:4.9, stock:5 },
  { id:4,  name:'Dell XPS 15', price:35990000, category:'laptop', image:'images/promo1.jpg', rating:4.6, stock:4 },
  { id:5,  name:'Sony Bravia 55"', price:18990000, category:'tv', image:'images/promo2.jpg', rating:4.5, stock:7 },
  { id:6,  name:'Samsung QLED 65"', price:32990000, category:'tv', image:'images/promo3.jpg', rating:4.7, stock:3 },
  { id:7,  name:'JBL Xtreme 3', price:4490000, category:'loa', image:'images/featured1.jpg', rating:4.4, stock:15 },
  { id:8,  name:'Sony WH-1000XM5', price:7990000, category:'loa', image:'images/featured2.jpg', rating:4.8, stock:12 },
  { id:9,  name:'Blue Yeti USB Mic', price:3290000, category:'mic', image:'images/featured3.jpg', rating:4.5, stock:20 },
  { id:10, name:'Rode NT-USB Mini', price:2490000, category:'mic', image:'images/promo1.jpg', rating:4.3, stock:18 },
  { id:11, name:'GoPro Hero 12', price:10990000, category:'camera', image:'images/promo2.jpg', rating:4.6, stock:9 },
  { id:12, name:'Canon EOS R50', price:21990000, category:'camera', image:'images/promo3.jpg', rating:4.7, stock:6 },
];
 
document.addEventListener('DOMContentLoaded', () => {
  const grid       = document.getElementById('product-grid');
  const loadingEl  = document.getElementById('loading');
  const errorEl    = document.getElementById('error');
  const emptyEl    = document.getElementById('empty-state');
  const searchEl   = document.getElementById('search-input');
  const categoryEl = document.getElementById('category-filter');
  const filterBtn  = document.getElementById('filter-btn');
 
  let allProducts = [];
 
  // ── Lấy sản phẩm ──────────────────────────
 
  async function fetchProducts() {
    showState('loading');
    try {
      // Giả lập độ trễ API
      await new Promise(r => setTimeout(r, 400));
      allProducts = PRODUCTS;
 
      // Đọc query params từ URL (vd: ?category=phone)
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      if (catParam && categoryEl) {
        categoryEl.value = catParam;
      }
      if (searchEl) {
        const q = params.get('q');
        if (q) searchEl.value = q;
      }
 
      renderProducts(filterProducts());
    } catch (err) {
      showState('error');
      const errMsg = document.getElementById('error-message');
      if (errMsg) errMsg.textContent = 'Không thể tải sản phẩm: ' + err.message;
    }
  }
 
  // ── Filter ────────────────────────────────
 
  function filterProducts() {
    const q   = (searchEl?.value || '').trim().toLowerCase();
    const cat = categoryEl?.value || '';
    return allProducts.filter(p => {
      const matchQ   = !q   || p.name.toLowerCase().includes(q);
      const matchCat = !cat || p.category === cat;
      return matchQ && matchCat;
    });
  }
 
  // ── Render ────────────────────────────────
 
  function renderProducts(products) {
    if (!grid) return;
    grid.innerHTML = '';
 
    if (products.length === 0) {
      showState('empty');
      return;
    }
    showState('grid');
 
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}"
             onerror="this.src='https://via.placeholder.com/240x240?text=No+Image'">
        <p class="product-name">${p.name}</p>
        <p class="product-price">${formatPrice(p.price)}</p>
        <p class="product-category">${p.category.toUpperCase()}</p>
        <a href="product-detail.html?id=${p.id}" class="btn-detail">Xem chi tiết</a>
      `;
      grid.appendChild(card);
    });
  }
 
  function showState(state) {
    loadingEl?.classList.toggle('hidden', state !== 'loading');
    errorEl?.classList.toggle('hidden',   state !== 'error');
    emptyEl?.classList.toggle('hidden',   state !== 'empty');
    grid?.classList.toggle('hidden',      state !== 'grid');
  }
 
  // ── Events ────────────────────────────────
 
  filterBtn?.addEventListener('click', () => renderProducts(filterProducts()));
 
  searchEl?.addEventListener('keydown', e => {
    if (e.key === 'Enter') renderProducts(filterProducts());
  });
 
  categoryEl?.addEventListener('change', () => renderProducts(filterProducts()));
 
  fetchProducts();
});