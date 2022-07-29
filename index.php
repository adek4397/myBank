<?php
    session_start();

    if(isset($_SESSION['logging'])){
      header("Location: pulpit-urzytkownika");
    }
?>

<!doctype html>
<html lang="pl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="img/icon/wallet.svg" type="image/icon type">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/logowanie.css">
    <script src="js/jquery-3.6.0.js"></script>
    <title>Logowanie</title>
  </head>
  <body>

    <div class="container form-signin">
        <div class="myHeader">
            <img src="img/logo/logo.png" alt="logo">
            <h1 class="h3 mb-3 fw-normal">Zaloguj się</h1>
        </div>

        <form class="col-12 col-sm-12 col-md-12 col-lg-4 needs-validation">
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" maxlength="30" required>
                <label for="floatingInput">Adres E-mail</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" maxlength="20" required>
                <label for="floatingPassword">Hasło</label>
            </div>
          
            <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="" id="checkbox"> Pokaż hasło
                </label>
            </div>
                <button class="btn btn-lg btn-primary col-12 col-sm-12 col-md-6 col-lg-5" id="button" type="button">Zaloguj się</button>

                <div class="invalid-login-data">Nie prawidłowy E-mail lub Hasło</div>
        </form>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="js/form-validation.js"></script>
  </body>
</html>