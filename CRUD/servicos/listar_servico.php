<?php
include '../cors.php';
include '../conexao.php';

// LISTAR (GET)
if ($_SERVER["REQUEST_METHOD"] == "GET") {

    $sql = "SELECT * FROM servicos";
    $result = $connection->query($sql);

    if ($result->num_rows > 0) {
        $servicos = [];
        while ($row = $result->fetch_assoc()) {
            $servicos[] = $row;
        }

        echo json_encode(['servicos' => $servicos]);
    } else {
        echo json_encode(['servicos' => []]);
    }
    exit;
}

// ADICIONAR (POST)
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // RECEBE DADOS DO FORM OU JSON
    $nome = $_POST['nome'] ?? '';
    $preco = $_POST['preco'] ?? '';
    $descricao = $_POST['descricao'] ?? '';

    if ($nome == '' || $preco == '' || $descricao == '') {
        echo json_encode(["erro" => "Campos obrigatórios!"]);
        exit;
    }

    $sql = "INSERT INTO servicos (nome, preco, descricao) VALUES (?, ?, ?)";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("sds", $nome, $preco, $descricao);

    if ($stmt->execute()) {
        echo json_encode(["sucesso" => "Serviço inserido com sucesso!"]);
    } else {
        echo json_encode(["erro" => "Falha ao inserir!"]);
    }

    exit;
}
?>
