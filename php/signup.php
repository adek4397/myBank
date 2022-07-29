<?php
    //error_reporting(0);
    //disabling showing errors

    require_once("db_conect.php");

    if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])) {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $name = htmlentities($name, ENT_QUOTES, "UTF-8");
        $email = htmlentities($email, ENT_QUOTES, "UTF-8");
        $password = htmlentities($password, ENT_QUOTES, "UTF-8");


        $conection = mysqli_connect($db_address, $db_user, $db_password, $db_name);

        if($conection){

            $query = mysqli_query($conection, sprintf("SELECT email FROM `users` WHERE email='%s'", mysqli_real_escape_string($conection, $email)));

            $how_much_row = mysqli_num_rows($query);

            if($how_much_row > 0) {
                echo "user_exist";
            } else {
                $query = mysqli_query($conection, "INSERT INTO `users` (`id`, `name`, `sesion_id`, `email`, `password`, `money`, `is_admin`) VALUES (NULL, '$name', '', '$email', '$password', '1000', '0')");

                echo "user_create";
            }

            
        } else {
            echo "false_conect";
        }

        mysqli_close($conection);
    } else {
        header("Location: strona-logowania-do-panelu");
    }
?>