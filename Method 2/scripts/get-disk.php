<?php 
// CREATE JSON
// Include Disk Database
include __DIR__ . '/../partials/database.php';

// Create Genres Array
$genres = [];
foreach($database as $data){
    if(!in_array(strtolower($data['genre']), $genres))
    $genres[] = strtolower($data['genre']);
}

// Get Query String
$author = empty($_GET['author']) ? '' : strtolower($_GET['author']);
$genre = empty($_GET['genre']) ? 'all' : $_GET['genre'];

// Filtered Array
$filtered = [];

// Filter by Genre
if($genre !== 'all' && in_array($genre, $genres)){
    foreach($database as $data){
        if(strtolower($data['genre']) === $genre){
            $filtered[] = $data;
        }
    }
} else {
    $filtered = $database;
}

// Filter by Author
if($author !== ''){
    // Temporary Array
    $temp = [];

    foreach($filtered as $item){
        if(strpos(strtolower($item['author']), $author) !== false){
            $temp[] = $item;
        }
    }
    $filtered = $temp;
} 

$returnData = [
    'genreList' => $genres,
    'albums' => $filtered,
];

header('Content-Type: application/json');
echo json_encode($returnData);
?>