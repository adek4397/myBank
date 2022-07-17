const checbox = document.querySelector("#checkbox");
const button = document.querySelector("#button");
// const enterEvent = document.querySelector("#floatingPassword");

checbox.addEventListener("input", show_passowrd());
button.addEventListener("click", check_input());
// enterEvent.addEventListener("keypress", function(event){
//   if(event.key == "Enter"){
//     check_input();
//   }
// });


function show_passowrd() {
  const input_passowrd = document.querySelector("#floatingPassword");
  
  if(input_passowrd.type === "password"){
    input_passowrd.type = "text";
  }else{
    input_passowrd.type = "password";
  }
}

function email_validation(email) {  
  if((email.length > 0) && (email.length < 20) ){
  
    if(email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
      // console.log("email true");
      return true;
    }else{
      // console.log("email false");
      return false;
    }

  }else{
    
    return false;

  }
}

function password_validation(password) {  
  if((password.length > 0) && (password.length < 20) ){
  
    if(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,20}$/)){ //Aby sprawdzić hasło składające się z 3 do 20 znaków, które zawiera co najmniej jedną cyfrę , jedną wielką i jedną małą literę

      // console.log("passwrd true");
      return true;
    }else{
      // console.log("pasword false");
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
        // console.log(location.href);
        location.href = "dashboard.php";
      }

      if(result.responseText == 'first_login'){
        // console.log(location.href);
        location.href = "first_login.html";
      }
    });
  }else{
      field_validadtion.style.display = "block";
  }
}


