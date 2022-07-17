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

            $query = mysqli_query($conection, sprintf("SELECT money, sesion_id FROM `users` WHERE id='$id'"));

            $query_money = mysqli_fetch_array($query);

            $query_array["id"] = $_SESSION['id'];
            $query_array["name"] = $_SESSION['name'];
            $query_array["money"] = $query_money['money'];
            $query_array["sesion_id"] = $query_money['sesion_id'];
            $query_array["is_admin"] = $_SESSION['is_admin'];

            $_SESSION['sesion_id'] = $query_money['sesion_id'];

            $query_array_json = json_encode($query_array);

            echo $query_array_json;
        }
        else{
            echo "false_conect";
            // echo "No connection with data base";
        }

        mysqli_close($conection);
    }    
    else{
        // echo "no user";
        exit();
    }
?>