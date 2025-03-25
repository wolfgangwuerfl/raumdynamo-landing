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

?>
