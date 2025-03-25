<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "empfänger@example.com";
    $subject = "Kontaktformular";
    $message = "Name: " . $_POST["name"] . "\nE-Mail: " . $_POST["email"] . "\nNachricht: " . $_POST["message"];
    $headers = "From: webmaster@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
}
?>
