<?php
    session_start();

    unset($_SESSION['logging']);

    unset($GLOBALS[$_SESSION['id']]);

    session_destroy();

    header("Location: ../index.html");
?>