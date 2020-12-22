<?php

$redir = "http://nbcomercial.com.ar/";

if (
    isset($_POST["nombre"]) && 
    isset($_POST["correo"]) && 
    isset($_POST["telefono"]) &&
    isset($_POST["mensaje"])
) {
    $to = "ventas@nbcomercial.com.ar";
    $subject = "Contacto web";

    $content = "Nombre: " . $_POST["nombre"] . "\r\n";
    $content = "Telefono: " . $_POST["telefono"] . "\r\n";
    $content = "Correo: " . $_POST["correo"] . "\r\n";
    $content = "Empresa: " . $_POST["empresa"] . "\r\n";

    $header = "From:".$_POST["email"]."\nReply-To:".$_POST["email"]."\n";
    $header .= "Mime-Version: 1.0\n";
    $header .= "Content-Type: text/plain";

    mail($to, $subject, $content ,$header);
}; 

?>