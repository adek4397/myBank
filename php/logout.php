<?php
    require_once("db_conect.php");

    session_start();

    if(isset($_SESSION['id'])){

        $conection = mysqli_connect($db_address, $db_user, $db_password, $db_name);

        if($conection){

            $id = $_SESSION["id"];

            $query = mysqli_query($conection, sprintf("UPDATE `users` SET `sesion_id` = '' WHERE `users`.`id` = '$id'"));

            mysqli_close($conection);
        }
    
        session_destroy();

        $_SESSION = [];
    
        header("Location: ../index.php");
    }
    else{
        header("Location: ../index.php");
    }
?>