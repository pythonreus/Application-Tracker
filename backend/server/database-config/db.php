<?php
// db.php - This file contains the database connection.

$servername = "localhost"; // Database server
$username = "root";        // Database username
$password = "";            // Database password
$dbname = "your_database"; // Database name

function getDbConnection() {
    global $servername, $username, $password, $dbname;

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}
?>

