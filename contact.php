<?php
// Empfängeradresse eintragen
$empfaenger = "irene.kober@gmx.net";

// Formulardaten auslesen
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// E-Mail-Inhalt vorbereiten
$betreff = "Neue Nachricht von $name zu deinem Portfolio";
$nachricht = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";

// Header setzen
$header = "From: $email\r\nReply-To: $email\r\n";

// E-Mail senden
if (mail($empfaenger, $betreff, $nachricht, $header)) {
  http_response_code(200);
  echo "Nachricht gesendet.";
} else {
  http_response_code(500);
  echo "Fehler beim Senden.";
}
?>
