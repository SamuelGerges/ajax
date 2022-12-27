<?php

$connection = new PDO('mysql:hostname=localhost;dbname=movies','root','Root@root123');



    $query = 'SELECT id, name FROM cities';
    $stmt = $connection->query($query);
    $users = $stmt->fetchAll(PDO::FETCH_OBJ);
    header('Content-Type: application/json');
    echo json_encode($users,JSON_PRETTY_PRINT);











?>