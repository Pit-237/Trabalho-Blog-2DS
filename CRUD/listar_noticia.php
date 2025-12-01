<?php
	include 'cors.php';
	include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "GET") {

	$sql = "SELECT * FROM noticias";

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