<?php
$servidor = "localhost";
$usuario = "root";
$clave = "";
$baseDeDatos = "ejemplo";
$enlace = mysqli_connect ($servidor, $usuario, $clave, $baseDeDatos);
?>



<?php
$destinatario = 'ignaciosoraka@gmail.com';

$nombre = $_POST['nombre'];
$ciudad = $_POST['ciudad']; // Cambio el nombre del campo
$phone = $_POST['phone'];
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

$mensaje = "Mensaje de contacto:\n\n";
$mensaje .= "Nombre: " . $nombre . "\n";
$mensaje .= "Ciudad: " . $ciudad . "\n"; // Utiliza el valor de la ciudad como asunto
$mensaje .= "Correo Electrónico: " . $email . "\n";
$mensaje .= "Teléfono: " . $phone;

$asuntoCorreo = "Consulta de " . $nombre; // Puedes mantener el asunto como "Consulta de [nombre]"

$header = "From: TusAbogadosYA <" . $email . ">\r\n";
$header .= "Reply-To: " . $email . "\r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-Type: text/plain; charset=UTF-8\r\n";


if(mail($destinatario, $asuntoCorreo, $mensaje, $header)){
    ?>
    <h3 class="success"> Tu registro se a completado</h3>
    <?php
} else {
    ?>
    <h3 class="error"> Ocurrio un error, vuelva a intentarlo</h3>
    <?php
}


/*
if (mail($destinatario, $asuntoCorreo, $mensaje, $header)) {
    echo "<script>alert('Correo enviado exitosamente');</script>";
    echo "<script>setTimeout(\"location.href='index.html'\", 1000);</script>";
} else {
    echo "<script>alert('Error al enviar el correo');</script>";
}
?>
/*