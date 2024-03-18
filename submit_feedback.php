<?php


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userfb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rating = $_POST['rating'];
    $comment = $_POST['comment'];

    $sql = "INSERT INTO feedback (rating, comment) VALUES ('$rating', '$comment')";

    if ($conn->query($sql) === TRUE) {
        
        echo "Feedback submitted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>