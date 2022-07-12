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

            $row = mysqli_num_rows($query);

            $oepration_array = [];

            for($i = 0; $i < $row; $i++){

                $query_array = mysqli_fetch_array($query);
                $Date = $query_array['date'];
                $Ovner_money = $query_array['ovner_money'];
                $Client_money = $query_array['client_money'];
                $Value = $query_array['value'];

                // $oepration_array += [$query_array];

                $oepration_array[$i] = $query_array;
            }

            $json_oepration_array = json_encode($oepration_array);

            echo $json_oepration_array;
            
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