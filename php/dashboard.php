<?php
    // error_reporting(0);
    //disabling showing errors

    session_start();

    require_once("db_conect.php");
    

    if(isset($_SESSION['logging']) && isset($_SESSION['id'])){
        $conection = mysqli_connect($db_address, $db_user, $db_password, $db_name);
    
        if($conection){
            // echo "connect";

            $id = $_SESSION["id"];

            $query = mysqli_query($conection, sprintf("SELECT * FROM `users` WHERE id='$id'"));

            $query_array = mysqli_fetch_array($query);

            echo $query_array['id'];
            echo $query_array['name'];
            echo $query_array['money'];
        }
        else{
            echo "false_conect";
            // echo "No connection with data base";
        }
    }    
    else{
        // echo "no user";
        exit();
    }
?>