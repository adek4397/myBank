<?php
    // error_reporting(0);
    //disabling showing errors

    session_start();

    require_once("db_conect.php");
    
    if(isset($_SESSION['logging']) && isset($_SESSION['id'])){

        if(isset($_POST['transfer_account_number']) && isset($_POST['transfer_sum'])){

            $transfer_account_number = $_POST['transfer_account_number'];
            $transfer_sum = $_POST['transfer_sum'];

            $conection = mysqli_connect($db_address, $db_user, $db_password, $db_name);
    
            if($conection){
                // echo "connect";
    
                $id = $_SESSION["id"];
    
                echo "transfer ok";
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

    }
?>