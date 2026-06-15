CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    role ENUM('admin','customer') DEFAULT 'customer',
    status ENUM('active','blocked') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(15,2) NOT NULL,
    stock INT DEFAULT 0,
    thumbnail VARCHAR(500),
    status ENUM('active','inactive')
    DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(category_id)
    REFERENCES categories(id)
);

CREATE TABLE product_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    FOREIGN KEY(product_id)
    REFERENCES products(id)
    ON DELETE CASCADE
);

CREATE TABLE carts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id)
    REFERENCES users(id)
);

CREATE TABLE cart_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT DEFAULT 1,
    FOREIGN KEY(cart_id)
    REFERENCES carts(id)
    ON DELETE CASCADE,
    FOREIGN KEY(product_id)
    REFERENCES products(id)
);

CREATE TABLE addresses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    fullname VARCHAR(100),
    phone VARCHAR(20),
    province VARCHAR(100),
    district VARCHAR(100),
    ward VARCHAR(100),
    detail_address VARCHAR(255),
    is_default BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(user_id)
    REFERENCES users(id)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    address_id INT,
    total_amount DECIMAL(15,2),
    status ENUM(
        'pending',
        'confirmed',
        'shipping',
        'completed',
        'cancelled'
    ) DEFAULT 'pending',
    payment_method ENUM(
        'cod',
        'banking',
        'momo',
        'vnpay'
    ),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id)
    REFERENCES users(id),
    FOREIGN KEY(address_id)
    REFERENCES addresses(id)
);

CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    product_name VARCHAR(255),
    product_price DECIMAL(15,2),
    quantity INT,
    subtotal DECIMAL(15,2),
    FOREIGN KEY(order_id)
    REFERENCES orders(id)
    ON DELETE CASCADE,
    FOREIGN KEY(product_id)
    REFERENCES products(id)
);

CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    transaction_id VARCHAR(255),
    amount DECIMAL(15,2),
    status ENUM(
        'pending',
        'paid',
        'failed'
    ) DEFAULT 'pending',
    paid_at DATETIME,
    FOREIGN KEY(order_id)
    REFERENCES orders(id)
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    rating INT CHECK (
        rating BETWEEN 1 AND 5
    ),
    comment TEXT,
    created_at TIMESTAMP
    DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id)
    REFERENCES users(id),
    FOREIGN KEY(product_id)
    REFERENCES products(id)
);

CREATE TABLE inventory_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    action ENUM(
        'import',
        'export'
    ),
    note TEXT,
    created_at TIMESTAMP
    DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(product_id)
    REFERENCES products(id)
);

INSERT INTO users(
    fullname,
    email,
    password_hash,
    role
)
VALUES(
    'Administrator',
    'admin@gmail.com',
    '$2y$10....',
    'admin'
);
