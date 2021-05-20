<!-- INCLUDE EXTERNAL PHP -->
<?php
include __DIR__ . '/partials/database.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Dischi</title>

    <!-- STYLE -->
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <!-- SITE HEADER -->
    <header class="site-header">
        <div class="container">
            <img src="./img/logo.png" alt="logo">
        </div>
    </header>

    <!-- SITE MAIN -->
    <main class="site-main">
        <div class="container">
            <?php foreach($database as $data) { ?>
            <div class="card">
                <img src="<?php echo $data['poster']; ?>" alt="">
                <h2><?php echo $data['title']; ?></h2>
                <h4><?php echo $data['author']; ?></h4>
                <h2><?php echo $data['year']; ?></h2>
                <h4><?php echo $data['genre']; ?></h4>
            </div>
            <?php } ?>
        </div>
    </main>
</body>
</html>