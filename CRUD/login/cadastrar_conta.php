<?php
include '../cors.php';
include '../conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // RECEBE DADOS
    $nome = $_POST['nome'] ?? '';
    $email = $_POST['email'] ?? '';
    $senha = $_POST['senha'] ?? '';

    if ($nome == '' || $email == '' || $senha == '') {
        echo json_encode(["erro" => "Campos obrigatórios!"]);
        exit;
    }

    // tipo padrão
    $tipo = "padrão";

    $sql = "INSERT INTO login (nome, email, senha, tipo) VALUES (?, ?, ?, ?)";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("ssss", $nome, $email, $senha, $tipo);

    if ($stmt->execute()) {
        header("Location: ../../frontend/login/login.html");
    } else {
        echo json_encode(["erro" => "Falha ao inserir"]);
    }

    exit;
}
?>