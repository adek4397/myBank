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

        unset($_SESSION['logging']);

        $_SESSION = [];
    
        session_destroy();

        header("Location: ../strona-logowania-do-panelu");
    }
    else{
        header("Location: ../strona-logowania-do-panelu");
    }
?>