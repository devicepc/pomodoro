<?php
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

echo $nombre " ha dicho : <br>" $mensaje;
if(mail('devicepc01@gmail.com', $correo , $asunto, $mensaje)){
    echo "mail enviado";
}else {
    echo "error al enviar el mensaje";
}


?>