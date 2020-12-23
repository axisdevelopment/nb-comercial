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
    $content .= "Telefono: " . $_POST["telefono"] . "\r\n";
    $content .= "Correo: " . $_POST["correo"] . "\r\n";
    $content .= "Empresa: " . $_POST["empresa"] . "\r\n";

    $header = "From: " . $_POST["correo"] . "\r\n";
    $header .= "Reply-To: " . $_POST["correo"] . "\r\n";
    $header .= "X-Mailer: PHP/" . phpversion();
    echo "<h1>TEST<h1>";
    mail($to, $subject, $content, $header);

    header("Location:index.html");

};

?>