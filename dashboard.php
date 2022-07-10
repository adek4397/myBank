<?php
  // error_reporting(0);
  //disabling showing errors

  session_start();

  if(!isset($_SESSION['logging'])){
    header("Location: index.php");
  }

?>

<!doctype html>
<html lang="pl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Profil urzytkownika</title>
    <link rel="icon" href="img/icon/wallet.svg" type="image/icon type">
    <link href="css-bootstrap/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="css-bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="css/dashboard.css">
    <script src="js/jquery-3.6.0.js"></script>
  </head>
  <body class="d-flex flex-column h-100">
    <nav>
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom container">
            <div class="dropdown text-end">
                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="img/profilowe/98681.jpg" alt="mdo" width="32" height="32" class="rounded-circle">
                </a>
                <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                  <li><a class="dropdown-item" href="#">Operacje</a></li>
                  <li><a class="dropdown-item" href="#">Ustawienia</a></li>
                  <li><a class="dropdown-item" href="#">Profil</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="php/logout.php">Wyloguj się</a></li>
                </ul>
              </div>
        </header>
    </nav>

    <div class="container row-1">
        <section class="transfer col-12 col-sm-12 col-md-5 col-lg-6">
            <h4>Nowy przelew</h4>
            
            <form>
                <div class="row">
                    <div class="col">
                      <input id="transfer_account_number" type="number" class="form-control" placeholder="Numer konta" min="1" max="20">
                    </div>
                    <div class="col">
                      <input id="transfer_sum" type="number" class="form-control" placeholder="Kwota" min="1" max="20">
                    </div>
                </div>

                <button class="btn btn-primary btn-sm col-12 col-sm-12 col-md-4 col-lg-4" id="transfer_button" type="button">Wyslij</button>
            </form>
        </section>

        <section class="user-name col-12 col-sm-12 col-md-5 col-lg-4">
          <h3 id="name">Witaj, Adrian</h3>
          <p>Twój numer konta: <b id="account_number">1</b></p>
          <hr>
          <p>Posiadasz: <b id="money">1500</b> ruskich monet</p>
        </section>
    </div>

    <script src="js-bootstrap/bootstrap.js"></script>
    <script src="js-bootstrap/bootstrap.bundle.js"></script>
    <script src="js/dashboard.js"></script>
  </body>
</html>