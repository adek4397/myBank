<?php
    // error_reporting(0);
    //disabling showing errors

    session_start();

    require_once("db_conect.php");
    
    if(isset($_SESSION['logging']) && isset($_SESSION['id'])){

        if(isset($_POST['transfer_account_number']) && isset($_POST['transfer_sum'])){

            $transfer_account_number = $_POST['transfer_account_number'];
            $transfer_sum = $_POST['transfer_sum'];

            if($transfer_account_number > 0 && $transfer_sum > 0){

                $conection = mysqli_connect($db_address, $db_user, $db_password, $db_name);

                if($conection){
        
                    $id = $_SESSION["id"];

                    $query_ovner_money = mysqli_query($conection, sprintf("SELECT `money` FROM `users` WHERE id = '$id'"));

                    $query_client_money = mysqli_query($conection, sprintf("SELECT `money` FROM `users` WHERE id = '$transfer_account_number'"));


                    if(mysqli_num_rows($query_client_money) > 0){

                        if($id != $transfer_account_number){
                            $ovner_money_array = mysqli_fetch_array($query_ovner_money);
                            $client_money_array = mysqli_fetch_array($query_client_money);

                            if(($ovner_money_array['money'] - $transfer_sum) >= 0){
                                $addidtion_money = $client_money_array['money'] + $transfer_sum;
                                $remove_money = $ovner_money_array['money'] - $transfer_sum;

                                $query_addidtion_money = mysqli_query($conection, sprintf("UPDATE users SET money=$addidtion_money WHERE id=$transfer_account_number"));

                                $query_remove_money = mysqli_query($conection, sprintf("UPDATE users SET money=$remove_money WHERE id=$id"));

                                echo "transfer successful";
                            }
                            else{
                                echo "transfer_account_sum false";
                            }
                        }
                        else{
                            echo "transfer_account_number same";
                        }
                    }
                    else{
                        echo "transfer_account_number false";
                    }
                }
                else{
                    echo "false_conect";
                }
        
                mysqli_close($conection);
            }
        }    
        else{
            exit();
        }

    }
?>