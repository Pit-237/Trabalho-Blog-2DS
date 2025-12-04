<?php
include '../cors.php';
include '../conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $titulo = $_POST['titulo'] ?? '';
    $autor = $_POST['autor'] ?? '';
    $categoria = $_POST['categoria'] ?? '';
    $imagem = $_POST['imagem'] ?? '';
    $conteudo = $_POST['conteudo'] ?? '';

    // DATA AUTOMÁTICA
    $data_pub = date('Y-m-d');

    if ($titulo == '' || $autor == '' || $categoria == '' || $imagem == '' || $conteudo == '') {
        echo json_encode(["erro" => "Preencha todos os campos!"]);
        exit;
    }

    $sql = "INSERT INTO noticias (titulo, autor, categoria, imagem, conteudo, data_pub) 
            VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $connection->prepare($sql);
    $stmt->bind_param("ssssss", $titulo, $autor, $categoria, $imagem, $conteudo, $data_pub);

    if ($stmt->execute()) {
        echo json_encode(["sucesso" => "Notícia criada com sucesso!"]);
    } else {
        echo json_encode(["erro" => "Erro ao cadastrar notícia!"]);
    }

    exit;
}
?>
