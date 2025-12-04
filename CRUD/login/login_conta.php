<?php
include '../cors.php';
include '../conexao.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // RECEBE JSON
    $data = json_decode(file_get_contents("php://input"), true);
    $email = $data['email'] ?? '';
    $senha = $data['senha'] ?? '';

    // CONSULTA SIMPLES
    $sql = $connection->prepare("SELECT * FROM login WHERE email = ? AND senha = ?");
    $sql->bind_param("ss", $email, $senha);
    $sql->execute();
    $resultado = $sql->get_result();
    $usuario = $resultado->fetch_assoc();

    if ($usuario) {

        // SALVAR SESSÃO
        $_SESSION['usuario_id'] = $usuario['id'];
        $_SESSION['usuario_email'] = $usuario['email'];

        echo json_encode(["status" => "ok"]);
    } else {
        echo json_encode(["status" => "erro", "msg" => "Email ou senha incorretos"]);
    }

    exit;
}
?>
