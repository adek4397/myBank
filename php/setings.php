<?php
    // error_reporting(0);
    //disabling showing errors

    session_start();

    require_once("db_conect.php");
    
    if(isset($_SESSION['logging']) && isset($_SESSION['id'])){

        $id = $_SESSION['id'];

        $conection = mysqli_connect($db_address, $db_user, $db_password, $db_name);

        if($conection){

            $id = $_SESSION["id"];

            if(isset($_POST['money'])){
                $money = $_POST['money'];

                if(is_numeric($money) == true){

                    $query = mysqli_query($conection, sprintf("UPDATE users SET `money`=$money WHERE `id`=$id"));
                    echo "change successful";
                }
            }
        }
        else{
            echo "false_conect";
        }

        mysqli_close($conection);   
    }
    else{
        header("Location: ../index.php");
    }
?>