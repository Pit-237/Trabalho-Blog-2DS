<?php
session_start();
header("Content-Type: application/json");

if (isset($_SESSION['usuario_id'])) {
    echo json_encode([
        "status" => "logado",
        "usuario_id" => $_SESSION['usuario_id'],
        "email" => $_SESSION['usuario_email']
    ]);
} else {
    echo json_encode([
        "status" => "deslogado"
    ]);
}

exit;
?>
