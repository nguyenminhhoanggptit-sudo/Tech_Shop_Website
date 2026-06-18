const PRODUCTS = [
<<<<<<< HEAD
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 33990000,
    category: "phone",
    image: "images/featured1.jpg",
    rating: 4.8,
    stock: 10,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 27990000,
    category: "phone",
    image: "images/featured2.jpg",
    rating: 4.7,
    stock: 8,
  },
  {
    id: 3,
    name: "MacBook Air M3",
    price: 28990000,
    category: "laptop",
    image: "images/featured3.jpg",
    rating: 4.9,
    stock: 5,
  },
  {
    id: 4,
    name: "Dell XPS 15",
    price: 35990000,
    category: "laptop",
    image: "images/promo1.jpg",
    rating: 4.6,
    stock: 4,
  },
  {
    id: 5,
    name: 'Sony Bravia 55"',
    price: 18990000,
    category: "tv",
    image: "images/promo2.jpg",
    rating: 4.5,
    stock: 7,
  },
  {
    id: 6,
    name: 'Samsung QLED 65"',
    price: 32990000,
    category: "tv",
    image: "images/promo3.jpg",
    rating: 4.7,
    stock: 3,
  },
  {
    id: 7,
    name: "JBL Xtreme 3",
    price: 4490000,
    category: "loa",
    image: "images/featured1.jpg",
    rating: 4.4,
    stock: 15,
  },
  {
    id: 8,
    name: "Sony WH-1000XM5",
    price: 7990000,
    category: "loa",
    image: "images/featured2.jpg",
    rating: 4.8,
    stock: 12,
  },
  {
    id: 9,
    name: "Blue Yeti USB Mic",
    price: 3290000,
    category: "mic",
    image: "images/featured3.jpg",
    rating: 4.5,
    stock: 20,
  },
  {
    id: 10,
    name: "Rode NT-USB Mini",
    price: 2490000,
    category: "mic",
    image: "images/promo1.jpg",
    rating: 4.3,
    stock: 18,
  },
  {
    id: 11,
    name: "GoPro Hero 12",
    price: 10990000,
    category: "camera",
    image: "images/promo2.jpg",
    rating: 4.6,
    stock: 9,
  },
  {
    id: 12,
    name: "Canon EOS R50",
    price: 21990000,
    category: "camera",
    image: "images/promo3.jpg",
    rating: 4.7,
    stock: 6,
  },
=======
  { id:1,  name:'iPhone 15 Pro Max', price:33990000, category:'phone',  image:'images/featured1.jpg', rating:4.8, stock:10 },
  { id:2,  name:'Samsung Galaxy S24 Ultra', price:27990000, category:'phone', image:'images/featured2.jpg', rating:4.7, stock:8 },
  { id:3,  name:'MacBook Air M3', price:28990000, category:'laptop', image:'images/featured3.jpg', rating:4.9, stock:5 },
  { id:4,  name:'Dell XPS 15', price:35990000, category:'laptop', image:'images/featured4.jpg', rating:4.6, stock:4 },
  { id:5,  name:'Sony Bravia 55"', price:18990000, category:'tv', image:'images/featured5.jpg', rating:4.5, stock:7 },
  { id:6,  name:'Samsung QLED 65"', price:32990000, category:'tv', image:'images/featured6.jpg', rating:4.7, stock:3 },
  { id:7,  name:'JBL Xtreme 3', price:4490000, category:'loa', image:'images/featured7.jpg', rating:4.4, stock:15 },
  { id:8,  name:'Sony WH-1000XM5', price:7990000, category:'loa', image:'images/featured8.jpg', rating:4.8, stock:12 },
  { id:9,  name:'Blue Yeti USB Mic', price:3290000, category:'mic', image:'images/featured9.jpg', rating:4.5, stock:20 },
  { id:10, name:'Rode NT-USB Mini', price:2490000, category:'mic', image:'images/featured10.jpg', rating:4.3, stock:18 },
  { id:11, name:'GoPro Hero 12', price:10990000, category:'camera', image:'images/featured11.jpg', rating:4.6, stock:9 },
  { id:12, name:'Canon EOS R50', price:21990000, category:'camera', image:'images/featured12.jpg', rating:4.7, stock:6 },

  { id:13, name:'iPhone 17 Pro Max', price:32950000, category:'phone', image:'images/promo1.jpg', rating:4.7, stock:12 },
  { id:14, name:'Xiaomi 14T Series', price:10990000, category:'phone', image:'images/promo2.jpg', rating:4.6, stock:15 },
  
  { id:15, name:'Samsung Galaxy 26 Ultra', price:34900000, category:'phone', image:'images/phone1.jpg', rating:4.7, stock:8 },
  { id:16, name:'Xiaomi 17T Series', price:17990000, category:'phone', image:'images/phone2.jpg', rating:4.6, stock:10 },
  { id:17, name:'OPPO Find X9 Ultra', price:24990000, category:'phone', image:'images/phone3.jpg', rating:4.5, stock:9 },
  { id:18, name:'Vivo X100 Pro', price:21990000, category:'phone', image:'images/phone4.jpg', rating:4.6, stock:11 },
  { id:19, name:'Google Pixel 8 Pro', price:24990000, category:'phone', image:'images/phone5.jpg', rating:4.8, stock:7 },
  { id:20, name:'Samsung Galaxy A55', price:9990000, category:'phone', image:'images/phone6.jpg', rating:4.4, stock:20 },
  { id:21, name:'iPhone SE 2024', price:12990000, category:'phone', image:'images/phone7.jpg', rating:4.3, stock:18 },
  { id:22, name:'Realme GT 6', price:13990000, category:'phone', image:'images/phone8.jpg', rating:4.4, stock:14 },

  { id:23, name:'MacBook Pro M3', price:45990000, category:'laptop', image:'images/promo3.jpg', rating:4.9, stock:5 },
  { id:24, name:'ASUS ROG Zephyrus G16', price:39990000, category:'laptop', image:'images/promo4.jpg', rating:4.8, stock:6 },
  
  { id:25, name:'Lenovo Legion 5', price:28990000, category:'laptop', image:'images/laptop1.jpg', rating:4.7, stock:8 },
  { id:26, name:'HP Victus 15', price:19990000, category:'laptop', image:'images/laptop2.jpg', rating:4.5, stock:10 },
  { id:27, name:'Acer Nitro 5', price:17990000, category:'laptop', image:'images/laptop3.jpg', rating:4.5, stock:12 },
  { id:28, name:'MSI Katana 15', price:25990000, category:'laptop', image:'images/laptop4.jpg', rating:4.6, stock:7 },
  { id:29, name:'Dell Inspiron 15', price:17990000, category:'laptop', image:'images/laptop5.jpg', rating:4.3, stock:15 },
  { id:30, name:'ASUS Vivobook 15', price:14990000, category:'laptop', image:'images/laptop6.jpg', rating:4.4, stock:14 },
  { id:31, name:'Lenovo ThinkPad X1', price:32990000, category:'laptop', image:'images/laptop7.jpg', rating:4.8, stock:5 },
  { id:32, name:'MacBook Air M2', price:24990000, category:'laptop', image:'images/laptop8.jpg', rating:4.8, stock:9 },

  { id:33, name:'Edifier MR4', price:1490000, category:'loa', image:'images/promo5.jpg', rating:4.7, stock:12 },
  { id:34, name:'Marshall Acton III', price:7990000, category:'loa', image:'images/promo6.jpg', rating:4.8, stock:8 },
  
  { id:35, name:'JBL Charge 5', price:3490000, category:'loa', image:'images/loa1.jpg', rating:4.6, stock:15 },
  { id:36, name:'Sony SRS-XG300', price:5990000, category:'loa', image:'images/loa2.jpg', rating:4.5, stock:10 },
  { id:37, name:'Bose SoundLink Flex', price:4290000, category:'loa', image:'images/loa3.jpg', rating:4.7, stock:11 },
  { id:38, name:'Harman Kardon Onyx 8', price:6490000, category:'loa', image:'images/loa4.jpg', rating:4.8, stock:6 },
  { id:39, name:'LG XBoom Go', price:2290000, category:'loa', image:'images/loa5.jpg', rating:4.4, stock:18 },
  { id:40, name:'Sony SRS-XB23', price:1890000, category:'loa', image:'images/loa6.jpg', rating:4.3, stock:20 },
  { id:41, name:'JBL Flip 6', price:2790000, category:'loa', image:'images/loa7.jpg', rating:4.6, stock:16 },
  { id:42, name:'Tribit StormBox', price:1690000, category:'loa', image:'images/loa8.jpg', rating:4.3, stock:22 },

  { id:43, name:'HyperX QuadCast', price:3490000, category:'mic', image:'images/promo7.jpg', rating:4.8, stock:12 },
  { id:44, name:'Razer Seiren Mini', price:1490000, category:'mic', image:'images/promo8.jpg', rating:4.5, stock:18 },
  
  { id:45, name:'Audio-Technica AT2020', price:2790000, category:'mic', image:'images/mic1.jpg', rating:4.7, stock:10 },
  { id:46, name:'Shure MV7', price:6490000, category:'mic', image:'images/mic2.jpg', rating:4.9, stock:5 },
  { id:47, name:'Fifine K669B', price:990000, category:'mic', image:'images/mic3.jpg', rating:4.3, stock:25 },
  { id:48, name:'Blue Snowball', price:1490000, category:'mic', image:'images/mic4.jpg', rating:4.4, stock:20 },
  { id:49, name:'Maono AU-A04', price:1290000, category:'mic', image:'images/mic5.jpg', rating:4.3, stock:22 },
  { id:50, name:'Elgato Wave 3', price:3990000, category:'mic', image:'images/mic6.jpg', rating:4.8, stock:9 },
  { id:51, name:'Rode PodMic', price:2690000, category:'mic', image:'images/mic7.jpg', rating:4.6, stock:13 },
  { id:52, name:'Samson Q2U', price:1890000, category:'mic', image:'images/mic8.jpg', rating:4.5, stock:15 },

  { id:53, name:'Sony ZV-E10', price:17990000, category:'camera', image:'images/promo9.jpg', rating:4.7, stock:8 },
  { id:54, name:'Canon EOS R10', price:24990000, category:'camera', image:'images/promo10.jpg', rating:4.8, stock:6 },
  
  { id:55, name:'Nikon Z50', price:21990000, category:'camera', image:'images/camera1.jpg', rating:4.6, stock:7 },
  { id:56, name:'Fujifilm X-S20', price:29990000, category:'camera', image:'images/camera2.jpg', rating:4.8, stock:5 },
  { id:57, name:'Sony A6700', price:33990000, category:'camera', image:'images/camera3.jpg', rating:4.9, stock:4 },
  { id:58, name:'Canon EOS R8', price:38990000, category:'camera', image:'images/camera4.jpg', rating:4.8, stock:3 },
  { id:59, name:'DJI Osmo Pocket 3', price:13990000, category:'camera', image:'images/camera5.jpg', rating:4.7, stock:10 },
  { id:60, name:'Insta360 X4', price:14990000, category:'camera', image:'images/camera6.jpg', rating:4.7, stock:9 },
  { id:61, name:'Canon EOS R100', price:12990000, category:'camera', image:'images/camera7.jpg', rating:4.4, stock:12 },
  { id:62, name:'Sony Alpha A6400', price:20990000, category:'camera', image:'images/camera8.jpg', rating:4.7, stock:8 },
   
  { id:63, name:'Samsung Crystal UHD 55"', price:12990000, category:'tv', image:'images/promo11.jpg', rating:4.5, stock:10 },
  { id:64, name:'LG UHD AI ThinQ 55"', price:13990000, category:'tv', image:'images/promo12.jpg', rating:4.6, stock:8 },
  
  { id:65, name:'Sony Bravia X80L 55"', price:17990000, category:'tv', image:'images/tv1.jpg', rating:4.8, stock:6 },
  { id:66, name:'Samsung Neo QLED 65"', price:32990000, category:'tv', image:'images/tv2.jpg', rating:4.9, stock:4 },
  { id:67, name:'LG OLED C4 55"', price:35990000, category:'tv', image:'images/tv3.jpg', rating:4.9, stock:3 },
  { id:68, name:'TCL QLED 55"', price:10990000, category:'tv', image:'images/tv4.jpg', rating:4.4, stock:12 },
  { id:69, name:'Xiaomi TV A Pro 55"', price:9990000, category:'tv', image:'images/tv5.jpg', rating:4.3, stock:15 },
  { id:70, name:'Coocaa 50Y72', price:7990000, category:'tv', image:'images/tv6.jpg', rating:4.2, stock:18 },
  { id:71, name:'Sony Bravia XR OLED 65"', price:49990000, category:'tv', image:'images/tv7.jpg', rating:4.9, stock:2 },
  { id:72, name:'LG NanoCell 65"', price:21990000, category:'tv', image:'images/tv8.jpg', rating:4.6, stock:7 },

>>>>>>> eecc83c (Update products, product detail anh images)
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("product-grid");
  const loadingEl = document.getElementById("loading");
  const errorEl = document.getElementById("error");
  const emptyEl = document.getElementById("empty-state");
  const searchEl = document.getElementById("search-input");
  const categoryEl = document.getElementById("category-filter");
  const filterBtn = document.getElementById("filter-btn");

  let allProducts = [];

  // ── Lấy sản phẩm ──────────────────────────

  async function fetchProducts() {
    showState("loading");
    try {
      // Giả lập độ trễ API
      await new Promise((r) => setTimeout(r, 400));
      allProducts = PRODUCTS;

      // Đọc query params từ URL
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("category");
      if (catParam && categoryEl) {
        categoryEl.value = catParam;
      }
      if (searchEl) {
        const q = params.get("q");
        if (q) searchEl.value = q;
      }

      renderProducts(filterProducts());
    } catch (err) {
      showState("error");
      const errMsg = document.getElementById("error-message");
      if (errMsg) errMsg.textContent = "Không thể tải sản phẩm: " + err.message;
    }
  }

  // ── Filter ────────────────────────────────

  function filterProducts() {
    const q = (searchEl?.value || "").trim().toLowerCase();
    const cat = categoryEl?.value || "";
    return allProducts.filter((p) => {
      const matchQ = !q || p.name.toLowerCase().includes(q);
      const matchCat = !cat || p.category === cat;
      return matchQ && matchCat;
    });
  }

  // ── Render ────────────────────────────────

  function renderProducts(products) {
    if (!grid) return;
    grid.innerHTML = "";

    if (products.length === 0) {
      showState("empty");
      return;
    }
    showState("grid");

    products.forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";
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
    loadingEl?.classList.toggle("hidden", state !== "loading");
    errorEl?.classList.toggle("hidden", state !== "error");
    emptyEl?.classList.toggle("hidden", state !== "empty");
    grid?.classList.toggle("hidden", state !== "grid");
  }

  // ── Events ────────────────────────────────

  filterBtn?.addEventListener("click", () => renderProducts(filterProducts()));

  searchEl?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") renderProducts(filterProducts());
  });

  categoryEl?.addEventListener("change", () =>
    renderProducts(filterProducts()),
  );

  fetchProducts();
});
