<?php
    //error_reporting(0);
    //disabling showing errors

    session_start();

    require_once("db_conect.php");
    require_once("function.php");

    if(isset($_POST['email']) && isset($_POST['password'])){
        $enter_email = $_POST['email'];
        $enter_password = $_POST['password'];

        $enter_email = htmlentities($enter_email, ENT_QUOTES, "UTF-8");
        $enter_password = htmlentities($enter_password, ENT_QUOTES, "UTF-8");

        // echo $enter_email;
        // echo $enter_password;

        $conection = mysqli_connect($db_address, $db_user, $db_password, $db_name);

        if($conection){
            // echo "connect";
            $query = mysqli_query($conection, sprintf("SELECT * FROM `users` WHERE email='%s' AND password='%s'", mysqli_real_escape_string($conection, $enter_email), mysqli_real_escape_string($conection, $enter_password)));

            if(mysqli_num_rows($query) > 0){
                // echo "logging";

                $query_array = mysqli_fetch_array($query);

                $_SESSION['id'] = $query_array['id'];
                // $_SESSION['name'] = $query_array['name']; 
                // $_SESSION['email'] = $query_array['email']; 
                // $_SESSION['password'] = $query_array['password']; 
                // $_SESSION['money'] = $query_array['money'];
                $session_id = session_id();
                $id = $query_array['id'];

                
                if($query_array['sesion_id'] == ""){

                    $query = mysqli_query($conection, sprintf("UPDATE `users` SET `sesion_id` = '$session_id' WHERE `users`.`id` = '$id'"));

                    $_SESSION['logging'] = true; 

                    echo "true_user";
                }
                else{

                    if($query_array['sesion_id'] == session_id()){

                        $_SESSION['logging'] = true;

                        echo "true_user";
                    }
                    else{
                        echo "first_login";
                    }
                }
            }
            else{
                echo "false_user";
                // echo "no fount user";
            }
        }
        else{
            echo "false_conect";
            // echo "No connection with data base";
        }

        mysqli_close($conection);
    }
    else{
        header("Location: index.php");
    }
?>