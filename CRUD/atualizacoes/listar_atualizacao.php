<?php
include '../cors.php';
include '../conexao.php';

// LISTAR (GET)
if ($_SERVER["REQUEST_METHOD"] == "GET") {

    $sql = "SELECT * FROM posts";
    $result = $connection->query($sql);

    if ($result->num_rows > 0) {
        $posts = [];
        while ($row = $result->fetch_assoc()) {
            $posts[] = $row;
        }

        echo json_encode(['posts' => $posts]);
    } else {
        echo json_encode(['posts' => []]);
    }
    exit;

}
?>
