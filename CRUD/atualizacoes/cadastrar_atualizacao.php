<?php
include '../cors.php';
include '../conexao.php';

// ADICIONAR (POST)
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // RECEBE DADOS DO FORM OU JSON
    $conteudo = $_POST['conteudo'] ?? '';
    $data = $_POST['data'] ?? '';
    $horario = $_POST['horario'] ?? '';
    $categoria = $_POST['categoria'] ?? '';
    $imagem = $_POST['imagem'] ?? '';

    if ($conteudo == '' || $data == '' || $horario == '' || $categoria == '' || $imagem == '') {
        echo json_encode(["erro" => "Campos obrigatórios!"]);
        exit;
    }

    $sql = "INSERT INTO posts (conteudo, data, horario, categoria, visualizacao, imagem) VALUES (?, ?, ?, ?, 0, ?)";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("sssss", $conteudo, $data, $horario, $categoria, $imagem);

    if ($stmt->execute()) {
        echo json_encode(["sucesso" => "Serviço inserido com sucesso!"]);
    } else {
        echo json_encode(["erro" => "Falha ao inserir!"]);
    }

    exit;
}
?>
