<?php
// user.php - Contains the function for user registration.

include_once '../database-config/db.php'; // Include the database connection file

// Function to register a user
function registerUser($username, $email, $password) {
    // Validate input (you can add more validations here)
    if (empty($username) || empty($email) || empty($password)) {
        return ["error" => "All fields are required"];
    }

    // Encrypt the password before saving (for security)
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Get DB connection
    $conn = getDbConnection();

    // Prepare and bind the query
    $stmt = $conn->prepare("INSERT INTO end_user (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $hashedPassword);

    // Execute the query
    if ($stmt->execute()) {
        return ["success" => "User registered successfully"];
    } else {
        return ["error" => "Error: " . $stmt->error];
    }

    // Close the connection
    $stmt->close();
    $conn->close();
}

// Function to log in a user
function loginUser($email, $password) {
    // Validate input (you can add more validations here)
    if (empty($email) || empty($password)) {
        return ["error" => "Email and password are required"];
    }

    // Get DB connection
    $conn = getDbConnection();

    // Prepare and bind the query to check if email exists
    $stmt = $conn->prepare("SELECT id, username, password FROM end_user WHERE email = ?");
    $stmt->bind_param("s", $email);

    // Execute the query
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($userId, $username, $hashedPassword);

    // Check if the email exists
    if ($stmt->num_rows > 0) {
        $stmt->fetch(); // Fetch the result into variables

        // Verify the password
        if (password_verify($password, $hashedPassword)) {
            // Password is correct, return user info
            return [
                "success" => "Login successful",
                "user" => [
                    "id" => $userId,
                    "username" => $username,
                    "email" => $email
                ]
            ];
        } else {
            return ["error" => "Invalid password"];
        }
    } else {
        return ["error" => "No user found with that email"];
    }

    // Close the connection
    $stmt->close();
    $conn->close();
}


?>

