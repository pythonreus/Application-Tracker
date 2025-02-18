<?php
// main.php - API entry point to handle user registration.

include_once 'Auth/user.php'; // Include the user operations file

// Check if the request method is POST (as user registration should be done via POST)
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Get the POST data (you can also use a body parser or JSON parser here if needed)
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // Call the registerUser function from user.php
    $response = registerUser($username, $email, $password);

    // Return the response as JSON
    echo json_encode($response);
}
?>

