<?php 
// CREATE JSON
// Include Disk Database
include __DIR__ . '/../partials/database.php';

// Create Author Array
$authors = [];
foreach($database as $data){
    if(!in_array($data['author'], $authors))
    $authors[] = strtolower($data['author']);
}

// Get Query String
$search = empty($_GET['author']) ? '' : strtolower($_GET['author']);

// Filtered Array
$filtered = [];

// Populate Filtered Array
if($search !== ''){
    foreach($authors as $item){
        if(strpos($item, $search) !== false){
            foreach($database as $data){
                if(strtolower($data['author']) === $item){
                    $filtered[] = $data;
                }
            }
        }
    }
} else {
    $filtered = $database;
}

header('Content-Type: application/json');

echo json_encode($filtered);
?>