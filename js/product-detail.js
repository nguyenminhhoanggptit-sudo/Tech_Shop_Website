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
  { id:9,  name:'Blue Yeti USB Mic', price:3290000, category:'Mic', image:'images/featured9.jpg', rating:4.5, stock:20,
    description:'Micro Blue Yeti USB chuyên nghiệp, 4 chế độ thu âm, kết nối trực tiếp qua USB, lý tưởng cho podcast, stream.',
    specs:{ 'Kết nối':'USB-A', 'Chế độ thu':'4 (Cardioid, Bidirectional, Omnidirectional, Stereo)', 'Tần số':'20Hz - 20kHz', 'Bit depth':'16-bit', 'Sample rate':'48kHz' } },
  { id:10, name:'Rode NT-USB Mini', price:2490000, category:'Mic', image:'images/featured10.jpg', rating:4.3, stock:18,
    description:'Micro Rode NT-USB Mini nhỏ gọn, thiết kế ổn định, phù hợp làm việc từ xa, học online.',
    specs:{ 'Kết nối':'USB-C', 'Loại':'Cardioid condenser', 'Tần số':'20Hz - 20kHz', 'Bit depth':'24-bit', 'Sample rate':'48kHz' } },
  { id:11, name:'GoPro Hero 12', price:10990000, category:'Camera', image:'images/featured11.jpg', rating:4.6, stock:9,
    description:'GoPro Hero 12 Black quay 5.3K60fps, chống rung HyperSmooth 6.0, kháng nước 10m không cần vỏ.',
    specs:{ 'Video':'5.3K60fps', 'Ảnh':'27 MP', 'Chống rung':'HyperSmooth 6.0', 'Kháng nước':'10m', 'Pin':'~70 phút' } },
  { id:12, name:'Canon EOS R50', price:21990000, category:'Camera', image:'images/featured12.jpg', rating:4.7, stock:6,
    description:'Máy ảnh Canon EOS R50 mirrorless gọn nhẹ, cảm biến 24.2MP, video 4K, lý tưởng cho người mới bắt đầu.',
    specs:{ 'Cảm biến':'APS-C 24.2MP', 'Video':'4K 30fps', 'AF':'Dual Pixel CMOS AF II', 'Màn hình':'3" cảm ứng xoay', 'Pin':'~390 shots' } },

  { id:13, name:'iPhone 17 Pro Max', price:32950000, category:'phone', image:'images/promo1.jpg', rating:4.7, stock:12,
    description:'iPhone 17 Pro Max sở hữu hiệu năng mạnh mẽ, thiết kế cao cấp cùng hệ thống camera nâng cấp cho trải nghiệm chụp ảnh và giải trí vượt trội.',
    specs:{'Màn hình':'6.9" Super Retina XDR', 'Chip':'Apple A19 Pro', 'RAM':'12 GB','Bộ nhớ':'256 GB','Pin':'4800 mAh','OS':'iOS'}},
  { id:14, name:'Xiaomi 14T Series', price:10990000, category:'phone', image:'images/promo2.jpg', rating:4.6, stock:15,
    description:'Xiaomi 14T Series mang đến hiệu năng ổn định, màn hình chất lượng cao và hỗ trợ sạc nhanh.',
    specs:{'Màn hình':'6.67" AMOLED','Chip':'Dimensity 8300','RAM':'12 GB','Bộ nhớ':'256 GB','Pin':'5000 mAh','OS':'HyperOS'}},

  { id:15, name:'Samsung Galaxy 26 Ultra', price:34900000, category:'phone', image:'images/phone1.jpg', rating:4.7, stock:8,
    description:'Samsung Galaxy 26 Ultra nổi bật với màn hình lớn, camera độ phân giải cao và bút S Pen tích hợp.',
    specs:{'Màn hình':'6.9" Dynamic AMOLED','Chip':'Snapdragon 8 Elite','RAM':'12 GB','Bộ nhớ':'512 GB','Pin':'5500 mAh','OS':'Android'}},
  
  { id:16,name:'Xiaomi 17T Series',price:17990000,category:'phone',image:'images/phone2.jpg',rating:4.6,stock:10,
    description:'Xiaomi 17T Series mang thiết kế hiện đại, hiệu năng mạnh và cụm camera chất lượng.',
    specs:{'Màn hình':'6.73" AMOLED','Chip':'Snapdragon 8 Gen','RAM':'12 GB','Bộ nhớ':'512 GB','Pin':'5300 mAh','OS':'HyperOS'} },

  { id:17,name:'OPPO Find X9 Ultra',price:24990000,category:'phone',image:'images/phone3.jpg',rating:4.5,stock:9,
    description:'OPPO Find X9 Ultra tập trung vào khả năng nhiếp ảnh và thiết kế cao cấp.',
    specs:{'Màn hình':'6.82" AMOLED','Chip':'Snapdragon 8 Elite','RAM':'16 GB','Bộ nhớ':'512 GB','Pin':'5600 mAh','OS':'ColorOS'} },

  { id:18,name:'Vivo X100 Pro',price:21990000,category:'phone',image:'images/phone4.jpg',rating:4.6,stock:11,
    description:'Vivo X100 Pro mang đến trải nghiệm chụp ảnh nổi bật cùng hiệu năng mạnh.',
    specs:{'Màn hình':'6.78" AMOLED','Chip':'Dimensity 9300','RAM':'12 GB','Bộ nhớ':'256 GB','Pin':'5400 mAh','OS':'Android'} },

  { id:19,name:'Google Pixel 8 Pro',price:24990000,category:'phone',image:'images/phone5.jpg',rating:4.8,stock:7,
    description:'Google Pixel 8 Pro nổi bật với camera thông minh và các tính năng AI.',
    specs:{'Màn hình':'6.7" LTPO OLED','Chip':'Google Tensor G3','RAM':'12 GB','Bộ nhớ':'256 GB','Pin':'5050 mAh','OS':'Android'} },

  { id:20,name:'Samsung Galaxy A55',price:9990000,category:'phone',image:'images/phone6.jpg',rating:4.4,stock:20,
    description:'Galaxy A55 là lựa chọn phù hợp cho học tập, giải trí và sử dụng hằng ngày.',
    specs:{'Màn hình':'6.6" AMOLED','Chip':'Exynos 1480','RAM':'8 GB','Bộ nhớ':'256 GB','Pin':'5000 mAh','OS':'Android'} },

  { id:21,name:'iPhone SE 2024',price:12990000,category:'phone',image:'images/phone7.jpg',rating:4.3,stock:18,
    description:'iPhone SE 2024 có thiết kế nhỏ gọn nhưng vẫn sở hữu hiệu năng mạnh.',
    specs:{'Màn hình':'6.1"','Chip':'Apple A18','RAM':'8 GB','Bộ nhớ':'128 GB','Pin':'3200 mAh','OS':'iOS'} },

  { id:22,name:'Realme GT 6',price:13990000,category:'phone',image:'images/phone8.jpg',rating:4.4,stock:14,
    description:'Realme GT 6 sở hữu cấu hình mạnh, pin lớn và tốc độ sạc nhanh.',
    specs:{'Màn hình':'6.78" AMOLED','Chip':'Snapdragon 8s Gen 3','RAM':'12 GB','Bộ nhớ':'256 GB','Pin':'5500 mAh','OS':'Android'} },
    
  { id:23,name:'MacBook Pro M3',price:45990000,category:'Laptop',image:'images/promo3.jpg',rating:4.9,stock:5, 
    description:'MacBook Pro M3 hiệu năng mạnh cho học tập, lập trình và sáng tạo nội dung.', 
    specs:{'Màn hình':'14.2" Liquid Retina XDR','Chip':'Apple M3 Pro','RAM':'18 GB','SSD':'512 GB','Pin':'22 giờ','OS':'macOS'} },

  { id:24,name:'ASUS ROG Zephyrus G16',price:39990000,category:'Laptop',image:'images/promo4.jpg',rating:4.8,stock:6,
    description:'Laptop gaming cao cấp thiết kế mỏng nhẹ và hiệu năng mạnh.',
    specs:{'Màn hình':'16" 240Hz','CPU':'Intel Ultra 9','RAM':'32 GB','SSD':'1 TB','GPU':'RTX 4070','OS':'Windows 11'} },

  { id:25,name:'Lenovo Legion 5',price:28990000,category:'Laptop',image:'images/laptop1.jpg',rating:4.7,stock:8,
    description:'Laptop gaming hiệu năng cao cho học tập và giải trí.',
    specs:{'Màn hình':'15.6"','CPU':'Ryzen 7','RAM':'16 GB','SSD':'512 GB','GPU':'RTX 4060','OS':'Windows 11'} },

  { id:26,name:'HP Victus 15',price:19990000,category:'Laptop',image:'images/laptop2.jpg',rating:4.5,stock:10,
    description:'Laptop gaming phổ thông với hiệu năng ổn định.',
    specs:{'Màn hình':'15.6"','CPU':'Core i7','RAM':'16 GB','SSD':'512 GB','GPU':'RTX 3050','OS':'Windows 11'} },

  { id:27,name:'Acer Nitro 5',price:17990000,category:'Laptop',image:'images/laptop3.jpg',rating:4.5,stock:12,
    description:'Laptop gaming giá tốt phù hợp sinh viên.',
    specs:{'Màn hình':'15.6"','CPU':'Core i5','RAM':'16 GB','SSD':'512 GB','GPU':'RTX 3050','OS':'Windows 11'} },

  { id:28,name:'MSI Katana 15',price:25990000,category:'Laptop',image:'images/laptop4.jpg',rating:4.6,stock:7,
    description:'Laptop gaming mạnh với thiết kế hiện đại.',
    specs:{'Màn hình':'15.6"','CPU':'Core i7','RAM':'16 GB','SSD':'1 TB','GPU':'RTX 4060','OS':'Windows 11'} },

  { id:29,name:'Dell Inspiron 15',price:17990000,category:'Laptop',image:'images/laptop5.jpg',rating:4.3,stock:15,
    description:'Laptop văn phòng ổn định cho học tập và làm việc.',
    specs:{'Màn hình':'15.6"','CPU':'Core i5','RAM':'16 GB','SSD':'512 GB','OS':'Windows 11'} },

  { id:30,name:'ASUS Vivobook 15',price:14990000,category:'Laptop',image:'images/laptop6.jpg',rating:4.4,stock:14,
    description:'Laptop mỏng nhẹ phù hợp sinh viên.',
    specs:{'Màn hình':'15.6"','CPU':'Ryzen 5','RAM':'16 GB','SSD':'512 GB','OS':'Windows 11'} },

  { id:31,name:'Lenovo ThinkPad X1',price:32990000,category:'Laptop',image:'images/laptop7.jpg',rating:4.8,stock:5,
    description:'ThinkPad X1 nổi bật với độ bền và trải nghiệm bàn phím.',
    specs:{'Màn hình':'14"','CPU':'Intel Ultra 7','RAM':'32 GB','SSD':'1 TB','OS':'Windows 11'} },

  { id:32,name:'MacBook Air M2',price:24990000,category:'Laptop',image:'images/laptop8.jpg',rating:4.8,stock:9,
    description:'MacBook Air M2 mỏng nhẹ, pin lâu và tối ưu hiệu năng.',
    specs:{'Màn hình':'13.6"','Chip':'Apple M2','RAM':'8 GB','SSD':'256 GB','Pin':'18 giờ','OS':'macOS'} },


  { id:33,name:'Edifier MR4',price:1490000,category:'loa',image:'images/promo5.jpg',rating:4.7,stock:12,
    description:'Edifier MR4 là loa kiểm âm nhỏ gọn với âm thanh cân bằng phù hợp nghe nhạc và làm việc.',
    specs:{'Công suất':'42W','Kết nối':'AUX, RCA','Loại':'Studio Monitor','Dải tần':'60Hz–20kHz','Trọng lượng':'4.5 kg'} },

  { id:34,name:'Marshall Acton III',price:7990000,category:'loa',image:'images/promo6.jpg',rating:4.8,stock:8,
    description:'Marshall Acton III mang phong cách cổ điển cùng chất âm mạnh mẽ.',
    specs:{'Công suất':'60W','Kết nối':'Bluetooth 5.2','Loại':'Loa để bàn','Dải tần':'45Hz–20kHz','Điều khiển':'App'} },

  { id:35,name:'JBL Charge 5',price:3490000,category:'loa',image:'images/loa1.jpg',rating:4.6,stock:15,
    description:'JBL Charge 5 là loa bluetooth chống nước với thời lượng pin dài.',
    specs:{'Công suất':'40W','Pin':'20 giờ','Bluetooth':'5.1','Kháng nước':'IP67','Sạc':'USB-C'} },

  { id:36,name:'Sony SRS-XG300',price:5990000,category:'loa',image:'images/loa2.jpg',rating:4.5,stock:10,
    description:'Sony SRS-XG300 cho âm thanh lớn cùng khả năng chống nước tiện dụng.',
    specs:{'Công suất':'50W','Pin':'25 giờ','Bluetooth':'5.2','Kháng nước':'IP67','Đèn':'RGB'} },

  { id:37,name:'Bose SoundLink Flex',price:4290000,category:'loa',image:'images/loa3.jpg',rating:4.7,stock:11,
    description:'Loa di động Bose với âm thanh cân bằng và thiết kế gọn nhẹ.',
    specs:{'Công suất':'30W','Pin':'12 giờ','Bluetooth':'5.3','Kháng nước':'IP67','Trọng lượng':'0.6 kg'} },

  { id:38,name:'Harman Kardon Onyx 8',price:6490000,category:'loa',image:'images/loa4.jpg',rating:4.8,stock:6,
    description:'Onyx 8 nổi bật với thiết kế cao cấp và âm thanh chi tiết.',
    specs:{'Công suất':'50W','Pin':'8 giờ','Bluetooth':'5.2','Loại':'Portable','Âm thanh':'Stereo'} },

  { id:39,name:'LG XBoom Go',price:2290000,category:'loa',image:'images/loa5.jpg',rating:4.4,stock:18,
    description:'LG XBoom Go mang đến âm thanh sống động và dễ mang theo.',
    specs:{'Công suất':'30W','Pin':'24 giờ','Bluetooth':'5.1','Kháng nước':'IPX5','Loại':'Portable'} },

  { id:40,name:'Sony SRS-XB23',price:1890000,category:'loa',image:'images/loa6.jpg',rating:4.3,stock:20,
    description:'Sony SRS-XB23 có công nghệ Extra Bass và thiết kế chống nước.',
    specs:{'Công suất':'20W','Pin':'12 giờ','Bluetooth':'5.0','Kháng nước':'IP67','Âm thanh':'Extra Bass'} },

  { id:41,name:'JBL Flip 6',price:2790000,category:'loa',image:'images/loa7.jpg',rating:4.6,stock:16,
    description:'JBL Flip 6 cho chất âm mạnh mẽ và phù hợp sử dụng ngoài trời.',
    specs:{'Công suất':'30W','Pin':'12 giờ','Bluetooth':'5.1','Kháng nước':'IP67','Sạc':'USB-C'} },

  { id:42,name:'Tribit StormBox',price:1690000,category:'loa',image:'images/loa8.jpg',rating:4.3,stock:22,
    description:'Tribit StormBox là loa bluetooth nhỏ gọn với mức giá dễ tiếp cận.',
    specs:{'Công suất':'24W','Pin':'20 giờ','Bluetooth':'5.3','Kháng nước':'IPX7','Loại':'Portable'} },

  { id:43,name:'HyperX QuadCast',price:3490000,category:'mic',image:'images/promo7.jpg',rating:4.8,stock:12,
    description:'HyperX QuadCast là micro USB nổi bật cho stream, gaming và thu âm với chất lượng âm thanh tốt.',
    specs:{'Kết nối':'USB','Loại':'Condenser','Chế độ thu':'4 kiểu','Tần số':'20Hz–20kHz','Đèn':'LED đỏ'} },

  { id:44,name:'Razer Seiren Mini',price:1490000,category:'mic',image:'images/promo8.jpg',rating:4.5,stock:18,
    description:'Razer Seiren Mini có thiết kế nhỏ gọn phù hợp stream và học online.',
    specs:{'Kết nối':'USB','Loại':'Condenser','Hướng thu':'Supercardioid','Tần số':'20Hz–20kHz','Trọng lượng':'435 g'} },

  { id:45,name:'Audio-Technica AT2020',price:2790000,category:'mic',image:'images/mic1.jpg',rating:4.7,stock:10,
    description:'AT2020 mang chất âm chi tiết phù hợp thu âm và làm podcast.',
    specs:{'Kết nối':'XLR','Loại':'Condenser','Tần số':'20Hz–20kHz','Độ nhạy':'-37 dB','Nguồn':'48V'} },

  { id:46,name:'Shure MV7',price:6490000,category:'mic',image:'images/mic2.jpg',rating:4.9,stock:5,
    description:'Shure MV7 là micro chuyên nghiệp cho podcast và livestream.',
    specs:{'Kết nối':'USB + XLR','Loại':'Dynamic','Tần số':'50Hz–16kHz','Điều khiển':'Touch Panel','Màu':'Đen'} },

  { id:47,name:'Fifine K669B',price:990000,category:'mic',image:'images/mic3.jpg',rating:4.3,stock:25,
    description:'Fifine K669B là micro giá tốt phù hợp học online và thu âm cơ bản.',
    specs:{'Kết nối':'USB','Loại':'Condenser','Tần số':'20Hz–20kHz','Điều chỉnh':'Volume','Màu':'Đen'} },

  { id:48,name:'Blue Snowball',price:1490000,category:'mic',image:'images/mic4.jpg',rating:4.4,stock:20,
    description:'Blue Snowball có thiết kế đặc trưng và chất lượng thu âm ổn định.',
    specs:{'Kết nối':'USB','Loại':'Condenser','Tần số':'40Hz–18kHz','Chế độ thu':'Cardioid','Màu':'Trắng'} },

  { id:49,name:'Maono AU-A04',price:1290000,category:'mic',image:'images/mic5.jpg',rating:4.3,stock:22,
    description:'Maono AU-A04 đi kèm bộ phụ kiện đầy đủ cho người mới bắt đầu.',
    specs:{'Kết nối':'USB','Loại':'Condenser','Tần số':'30Hz–16kHz','Giá đỡ':'Có','Màu':'Đen'} },

  { id:50,name:'Elgato Wave 3',price:3990000,category:'mic',image:'images/mic6.jpg',rating:4.8,stock:9,
    description:'Elgato Wave 3 hỗ trợ chống méo tiếng và tối ưu cho streamer.',
    specs:{'Kết nối':'USB-C','Loại':'Condenser','Tần số':'70Hz–20kHz','Công nghệ':'ClipGuard','Màu':'Đen'} },

  { id:51,name:'Rode PodMic',price:2690000,category:'mic',image:'images/mic7.jpg',rating:4.6,stock:13,
    description:'Rode PodMic được thiết kế chuyên cho podcast và thu giọng nói.',
    specs:{'Kết nối':'XLR','Loại':'Dynamic','Tần số':'20Hz–20kHz','Trọng lượng':'937 g','Màu':'Đen'} },

  { id:52,name:'Samson Q2U',price:1890000,category:'mic',image:'images/mic8.jpg',rating:4.5,stock:15,
    description:'Samson Q2U hỗ trợ cả USB và XLR linh hoạt khi sử dụng.',
    specs:{'Kết nối':'USB + XLR','Loại':'Dynamic','Tần số':'50Hz–15kHz','Tai nghe':'3.5mm','Màu':'Đen'} },

  { id:53,name:'Sony ZV-E10',price:17990000,category:'camera',image:'images/promo9.jpg',rating:4.7,stock:8,
    description:'Sony ZV-E10 là máy ảnh phù hợp quay vlog với khả năng lấy nét nhanh và quay video chất lượng cao.',
    specs:{'Cảm biến':'APS-C 24.2MP','Video':'4K 30fps','AF':'Real-time Eye AF','Màn hình':'3" xoay lật','Pin':'~440 ảnh'} },

  { id:54,name:'Canon EOS R10',price:24990000,category:'camera',image:'images/promo10.jpg',rating:4.8,stock:6,
    description:'Canon EOS R10 mang đến hiệu năng lấy nét tốt và khả năng quay chụp linh hoạt.',
    specs:{'Cảm biến':'APS-C 24.2MP','Video':'4K 60fps','AF':'Dual Pixel AF II','Màn hình':'3" cảm ứng','Pin':'~450 ảnh'} },

  { id:55,name:'Nikon Z50',price:21990000,category:'camera',image:'images/camera1.jpg',rating:4.6,stock:7,
    description:'Nikon Z50 là máy ảnh mirrorless nhỏ gọn phù hợp du lịch và sáng tạo nội dung.',
    specs:{'Cảm biến':'APS-C 20.9MP','Video':'4K UHD','AF':'Hybrid AF','Màn hình':'3.2" lật','Pin':'~320 ảnh'} },

  { id:56,name:'Fujifilm X-S20',price:29990000,category:'camera',image:'images/camera2.jpg',rating:4.8,stock:5,
    description:'Fujifilm X-S20 nổi bật với màu ảnh đẹp và khả năng quay video mạnh mẽ.',
    specs:{'Cảm biến':'APS-C 26.1MP','Video':'6.2K','AF':'AI Tracking','Màn hình':'3" xoay','Pin':'~750 ảnh'} },

  { id:57,name:'Sony A6700',price:33990000,category:'camera',image:'images/camera3.jpg',rating:4.9,stock:4,
    description:'Sony A6700 sở hữu hệ thống lấy nét thông minh và chất lượng hình ảnh cao.',
    specs:{'Cảm biến':'APS-C 26MP','Video':'4K 120fps','AF':'AI AF','Màn hình':'3" xoay','Pin':'~570 ảnh'} },

  { id:58,name:'Canon EOS R8',price:38990000,category:'camera',image:'images/camera4.jpg',rating:4.8,stock:3,
    description:'Canon EOS R8 là máy ảnh full-frame nhỏ gọn với khả năng quay chụp mạnh.',
    specs:{'Cảm biến':'Full Frame 24.2MP','Video':'4K 60fps','AF':'Dual Pixel AF II','Màn hình':'3" cảm ứng','Pin':'~370 ảnh'} },

  { id:59,name:'DJI Osmo Pocket 3',price:13990000,category:'camera',image:'images/camera5.jpg',rating:4.7,stock:10,
    description:'DJI Osmo Pocket 3 nhỏ gọn với chống rung tốt phù hợp quay vlog hằng ngày.',
    specs:{'Cảm biến':'1 inch','Video':'4K 120fps','Chống rung':'3 trục','Màn hình':'2 inch xoay','Pin':'~166 phút'} },

  { id:60,name:'Insta360 X4',price:14990000,category:'camera',image:'images/camera6.jpg',rating:4.7,stock:9,
    description:'Insta360 X4 hỗ trợ quay 360 độ với khả năng chống rung ổn định.',
    specs:{'Video':'8K 360°','Ảnh':'72MP','Chống nước':'10m','Pin':'2290mAh','Màn hình':'2.5 inch'} },

  { id:61,name:'Canon EOS R100',price:12990000,category:'camera',image:'images/camera7.jpg',rating:4.4,stock:12,
    description:'Canon EOS R100 là lựa chọn phù hợp cho người mới bắt đầu chụp ảnh.',
    specs:{'Cảm biến':'APS-C 24.1MP','Video':'4K','AF':'Dual Pixel AF','Màn hình':'3 inch','Pin':'~430 ảnh'} },

  { id:62,name:'Sony Alpha A6400',price:20990000,category:'camera',image:'images/camera8.jpg',rating:4.7,stock:8,
    description:'Sony Alpha A6400 có khả năng lấy nét nhanh và chất lượng hình ảnh tốt.',
    specs:{'Cảm biến':'APS-C 24.2MP','Video':'4K','AF':'Real-time Tracking','Màn hình':'3" lật','Pin':'~410 ảnh'} },

  { id:63,name:'Samsung Crystal UHD 55"',price:12990000,category:'tv',image:'images/promo11.jpg',rating:4.5,stock:10,
    description:'Samsung Crystal UHD 55 inch mang đến chất lượng hình ảnh sắc nét cùng giao diện thông minh dễ sử dụng.',
    specs:{'Kích thước':'55 inch','Độ phân giải':'4K UHD','Hệ điều hành':'Tizen OS','HDR':'HDR10+','Cổng HDMI':'3'} },

  { id:64,name:'LG UHD AI ThinQ 55"',price:13990000,category:'tv',image:'images/promo12.jpg',rating:4.6,stock:8,
    description:'LG UHD AI ThinQ sở hữu công nghệ AI nâng cao trải nghiệm hình ảnh và âm thanh.',
    specs:{'Kích thước':'55 inch','Độ phân giải':'4K UHD','Hệ điều hành':'webOS','Âm thanh':'20W','HDR':'HDR10'} },

  { id:65,name:'Sony Bravia X80L 55"',price:17990000,category:'tv',image:'images/tv1.jpg',rating:4.8,stock:6,
    description:'Sony Bravia X80L hiển thị màu sắc chân thực cùng nền tảng Google TV.',
    specs:{'Kích thước':'55 inch','Độ phân giải':'4K UHD','Hệ điều hành':'Google TV','HDR':'Dolby Vision','Âm thanh':'Dolby Atmos'} },

  { id:66,name:'Samsung Neo QLED 65"',price:32990000,category:'tv',image:'images/tv2.jpg',rating:4.9,stock:4,
    description:'Samsung Neo QLED 65 inch nổi bật với độ sáng cao và công nghệ Quantum Mini LED.',
    specs:{'Kích thước':'65 inch','Độ phân giải':'4K Neo QLED','Tần số':'144Hz','Hệ điều hành':'Tizen OS','HDR':'HDR10+'} },

  { id:67,name:'LG OLED C4 55"',price:35990000,category:'tv',image:'images/tv3.jpg',rating:4.9,stock:3,
    description:'LG OLED C4 cho chất lượng hiển thị sâu màu và tối ưu trải nghiệm xem phim.',
    specs:{'Kích thước':'55 inch','Độ phân giải':'4K OLED','Tần số':'144Hz','Hệ điều hành':'webOS','HDR':'Dolby Vision'} },

  { id:68,name:'TCL QLED 55"',price:10990000,category:'tv',image:'images/tv4.jpg',rating:4.4,stock:12,
    description:'TCL QLED 55 inch có mức giá dễ tiếp cận cùng màu sắc sống động.',
    specs:{'Kích thước':'55 inch','Độ phân giải':'4K QLED','Hệ điều hành':'Google TV','HDR':'HDR10','Âm thanh':'20W'} },

  { id:69,name:'Xiaomi TV A Pro 55"',price:9990000,category:'tv',image:'images/tv5.jpg',rating:4.3,stock:15,
    description:'Xiaomi TV A Pro sở hữu thiết kế viền mỏng và giao diện dễ sử dụng.',
    specs:{'Kích thước':'55 inch','Độ phân giải':'4K UHD','Hệ điều hành':'Google TV','HDR':'HDR10','Âm thanh':'24W'} },

  { id:70,name:'Coocaa 50Y72',price:7990000,category:'tv',image:'images/tv6.jpg',rating:4.2,stock:18,
    description:'Coocaa 50Y72 là mẫu tivi giá tốt phù hợp nhu cầu giải trí cơ bản.',
    specs:{'Kích thước':'50 inch','Độ phân giải':'4K UHD','Hệ điều hành':'Google TV','HDR':'HDR10','Âm thanh':'20W'} },

  { id:71,name:'Sony Bravia XR OLED 65"',price:49990000,category:'tv',image:'images/tv7.jpg',rating:4.9,stock:2,
    description:'Sony Bravia XR OLED mang lại trải nghiệm hình ảnh cao cấp và âm thanh sống động.',
    specs:{'Kích thước':'65 inch','Độ phân giải':'4K OLED','Hệ điều hành':'Google TV','HDR':'Dolby Vision','Âm thanh':'XR Sound'} },

  { id:72,name:'LG NanoCell 65"',price:21990000,category:'tv',image:'images/tv8.jpg',rating:4.6,stock:7,
    description:'LG NanoCell 65 inch tái tạo màu sắc chân thực và hỗ trợ giải trí đa dạng.',
    specs:{'Kích thước':'65 inch','Độ phân giải':'4K NanoCell','Hệ điều hành':'webOS','HDR':'HDR10','Âm thanh':'20W'} },

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