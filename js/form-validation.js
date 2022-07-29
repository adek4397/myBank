const checbox = document.querySelector("#checkbox");
const button = document.querySelector("#button");

checbox.addEventListener("input", show_passowrd);
button.addEventListener("click", check_input);


function show_passowrd() {
  const input_passowrd = document.querySelector("#floatingPassword");
  
  if(input_passowrd.type === "password"){
    input_passowrd.type = "text";
  }else{
    input_passowrd.type = "password";
  }
}

function email_validation(email) {  
  if((email.length > 0) && (email.length <= 30) ) {
  
    if(email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
      return true;
    }
    else {
      return false;
    }

  }
  else {
    return false;
  }
}

function password_validation(password) {  
  if((password.length > 0) && (password.length < 20) ){
  
    if(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,20}$/)){ //Aby sprawdzić hasło składające się z 3 do 20 znaków, które zawiera co najmniej jedną cyfrę , jedną wielką i jedną małą literę

      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

function check_input() {
  const email = document.querySelector("#floatingInput");
  const password = document.querySelector("#floatingPassword");
  const field_validadtion = document.querySelector(".invalid-login-data")


  if(email_validation(email.value) == true && password_validation(password.value) == true){
    
    $.post("php/login.php", {email: email.value, password: password.value}, function(data, status, result){

      if(result.responseText == 'false_conect'){
        field_validadtion.style.display = "block";
        field_validadtion.innerHTML = "Brak połacznia z bazą danych";
      }

      if(result.responseText == 'false_user'){
        field_validadtion.style.display = "block";
        field_validadtion.innerHTML = "Nie prawidłowy E-mail lub Hasło";
      }

      if(result.responseText == 'true_user'){
        location.href = "pulpit-urzytkownika";
      }

      if(result.responseText == 'first_login'){
        location.href = "zakonczenie-sesi";
      }
    });
  }else{
      field_validadtion.style.display = "block";
  }
}

