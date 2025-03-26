<?php

header("Access-Control-Allow-Origin: *"); // Erlaubt alle Domains (Achtung: Sicherheit beachten!)
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


//mail("wuerfl@it-wuerfl.de","hallo kontakt", "dies ist eine Message", "From: info@raumfabrik.gmbh");

file_put_contents('log.txt', print_r($_POST, true), FILE_APPEND);

//mail("wuerfl@it-wuerfl.de","hallo kontakt", "dies ist eine Message", "From: info@raumfabrik.gmbh");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@raumfabrik.gmbh";
    $subject = "Anfrage über Kontaktformular ". $_POST['subject'];
    $message = "Name: " . $_POST["name"] . "\nE-Mail: " . $_POST["email"] . "\nNachricht: " . $_POST["message"];
    //$headers = "From: ". $_POST['email']."\r\n"."Content-type: text/html; charset=UTF-8";
    $headers = "From: ".$_POST['email']."\r\n".
           "MIME-Version: 1.0\r\n".
           "Content-Type: text/plain; charset=UTF-8\r\n".
           "Content-Transfer-Encoding: 8bit";

    $subject = mb_encode_mimeheader($subject, "UTF-8", "B");
    $message = mb_convert_encoding($message, "UTF-8", "auto");

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
}

/* composer require phpmailer/phpmailer
    <?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.example.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'deine@email.de';
    $mail->Password = 'deinPasswort';
    $mail->SMTPSecure = 'tls';  // oder 'ssl'
    $mail->Port = 587; // oder 465 für SSL

    $mail->setFrom('deine@email.de', 'Dein Name');
    $mail->addAddress('empfänger@example.com');

    $mail->Subject = 'Kontaktformular';
    $mail->Body = 'Hier steht die Nachricht aus dem Formular.';

    $mail->send();
    echo "Mail erfolgreich gesendet!";
} catch (Exception $e) {
    echo "Fehler: {$mail->ErrorInfo}";
} */
?>
