<?php
    session_start();

    unset($_SESSION['logging']);

    session_destroy();

    header("Location: ../index.html");
?>