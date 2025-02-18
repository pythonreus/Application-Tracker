CREATE TABLE end_user (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    fullname VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    joined TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
