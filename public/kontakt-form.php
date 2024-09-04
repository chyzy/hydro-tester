<?php
session_start();
// Tworzymy zmienną dla imienia i nazwiska
$name = $_POST['name'];

// Tworzymy zmienną dla adresu email
$email = $_POST['email'];

// Tworzymy zmienną dla wiadomości
$message = $_POST['message'];

// Podajesz adres email z którego ma być wysłana wiadomość
$odkogo = "baartas@onet.pl";

// Podajesz adres email na który chcesz otrzymać wiadomość
$dokogo = "hydrotester@wp.pl";

// Podajesz tytuł jaki ma mieć ta wiadomość email
$tytul = $name." Formularz kontaktowy";

// Przygotowujesz treść wiadomości
$wiadomosc = "";
$wiadomosc .= "Imie i nazwisko: " . $name . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";


// Wysyłamy wiadomość
$sukces = mail($dokogo, $tytul, $wiadomosc,"Od: $odkogo"."\r\n"."Content-Type: text/plain; charset=UTF-8\r\n");

// Przekierowywujemy na potwierdzenie
if ($sukces)
{
  $_SESSION['sent']=true;
    
}
else
{
  $_SESSION['sent']=false;
}
header('Location: kontakt.php');
?>