<?php
	include 'cors.php';
	include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém o corpo da solicitação POST
    $data = file_get_contents("php://input");

    // Decodifica o JSON para um objeto PHP
    $requestData = json_decode($data);
    
    // Agora você pode acessar os dados usando $requestData
    $codigo = $requestData->id;


	$sql = "SELECT * FROM noticias WHERE id = '$codigo'";

    $result = $connection->query($sql);

    if ($result->num_rows > 0) {
        $noticias = [];
        while ($row = $result->fetch_assoc()) {
            array_push($noticias, $row);
        }

        $response = [
            'noticias' => $noticias
        ];

    } else {
        $response = [
            'noticias' => 'Nenhum registro encontrado!'
        ];
    }

    echo json_encode($response);
	} // Fim If
?>