<?php
    // error_reporting(0);
    //disabling showing errors

    session_start();

    require_once("db_conect.php");
    
    if(isset($_SESSION['logging']) && isset($_SESSION['id'])){

        $conection = mysqli_connect($db_address, $db_user, $db_password, $db_name);

        if($conection){

            $id = $_SESSION["id"];

            $query = mysqli_query($conection, sprintf("SELECT * FROM `operation` WHERE `ovner_money`=$id OR `client_money`=$id"));

            $query_array = mysqli_fetch_array($query);
            $query_array_json = json_encode($query_array);

            echo $query_array_json;
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