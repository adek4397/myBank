const title = document.querySelector('#title');

const section_name_email = document.querySelector('.name-email');
const input_name = document.querySelector('#name');
const input_email = document.querySelector('#email');

const section_sex = document.querySelector('.sex');

const section_password = document.querySelector('.password');
const input_passowrd1 = document.querySelector('#password1');
const input_passowrd2 = document.querySelector('#password2');
const hint_password = document.querySelector('.password_error');

const section_last_step = document.querySelector('.last_step');

const section_buttons = document.querySelector('.butons');
const button_previous = document.querySelector('#previous');
const button_next = document.querySelector('#next');

const dots = document.querySelector('.step')
const dot1 = document.querySelector('#dot1');
const dot2 = document.querySelector('#dot2');
const dot3 = document.querySelector('#dot3');
const dot4 = document.querySelector('#dot4');

const thank = document.querySelector('.thank');

var step_progres = 1;

button_next.addEventListener("click", function(){

  switch(step_progres){
    case 1:
      if(email_validation(input_email.value) == true && name_validation(input_name.value) == true) {

        section_name_email.style.display = "none";
        section_sex.style.display = "block";
        button_previous.style.display = "block";
        dot2.style.backgroundColor = "rgb(13, 110, 253)";
        title.innerHTML = "Wybierz płeć";
        step_progres++;
      }
      break;

    case 2:
      if(radio_validation() == true){
        section_sex.style.display = "none";
        section_password.style.display = "flex";
        dot3.style.backgroundColor = "rgb(13, 110, 253)";
        title.innerHTML = "Podaj hasło";
        step_progres++;
      }
      break;

    case 3:
      if(password_validation(input_passowrd1.value) == true && password_identical(input_passowrd1.value, input_passowrd2.value) == true) {
        section_password.style.display = "none";
        section_last_step.style.display = "flex";
        dot4.style.backgroundColor = "rgb(13, 110, 253)";
        title.innerHTML = "Kończenie rejestraci";
        button_next.innerHTML = "Koniec"
        step_progres++;
      }
      break;

    case 4:
      if(checkbox_validation() == true){

        $.post("php/signup.php", {name: input_name.value, email: input_email.value, password: input_passowrd1.value}, function(result){

          if(result == "false_conect") {
            alert("Brak połączenia");
          }

          if(result == "user_exist") {
            alert("Urzytkownik o podanym adresie email już istnieje");
            location.reload(true);
          }

          if(result == "user_create") {
            section_last_step.style.display = "none";
            dots.style.display = "none";
            title.style.display = "none";
            section_buttons.style.display = "none";
            thank.style.display = "flex";
          }
        });
      }
      break;
  }
})

button_previous.addEventListener("click", function(){

  switch(step_progres){
    case 2:
      section_sex.style.display = "none";
      section_name_email.style.display = "block";
      button_previous.style.display = "none";
      dot2.style.backgroundColor = "lightgray";
      title.innerHTML = "Rejestracja";
      step_progres--;
      break;

    case 3:
      section_password.style.display = "none";
      section_sex.style.display = "flex";
      dot3.style.backgroundColor = "lightgray";
      title.innerHTML = "Wybierz płeć";
      step_progres--;
      break;
      
    case 4:
      section_last_step.style.display = "none";
      section_password.style.display = "flex";
      dot4.style.backgroundColor = "lightgray";
      title.innerHTML = "Podaj hasło";
      step_progres--;
      break;
  }
})


input_name.addEventListener("focusout", function(){
  name_validation(input_name.value);
});

input_email.addEventListener("focusout", function(){
  email_validation(input_email.value);
});

input_passowrd1.addEventListener("focusout", function(){
  password_validation(input_passowrd1.value);
});

input_passowrd2.addEventListener("focusout", function(){
  password_identical(input_passowrd1.value, input_passowrd1.value);
});




function name_validation(name) {
    if((name.length > 0) && (name.length <= 10)) {
       if(name.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+$/u)) {

          input_name.classList.remove('invalid');
          var first_later = name.charAt(0);
          first_later_UP = first_later.toUpperCase();
          name = name.replace(first_later, first_later_UP);
          name = name.replace(/\s/g, '');
          input_name.value = name;

          return true;
       }
       else {
        input_name.classList.add('invalid');
        return false;
       }
    }
    else {
        return false;
    }
}

function email_validation(email) {  
    if((email.length > 0) && (email.length <= 30) ) {
    
      if(email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
        return true;
      }
      else {
        input_email.classList.add('invalid');
        return false;
      }
    }
    else {
      return false;
    }
  }

function radio_validation() {
  
  for(let i = 1; i<=7; i++) {
    const input_radio = document.querySelector('#radio'+i);

    if(input_radio.checked == true){
      return true;
    }
  }
  return false;
}

function password_validation(password) {
  if((password.length > 0) && (password.length < 20) ){
  
    if(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,20}$/)) { //Aby sprawdzić hasło składające się z 3 do 20 znaków, które zawiera co najmniej jedną cyfrę , jedną wielką i jedną małą literę

      input_passowrd1.classList.remove('invalid');
      return true;
    } else {
      input_passowrd1.classList.add('invalid');
      return false;
    }
   } else {
    input_passowrd1.classList.add('invalid');
    return false;
  }
}

function password_identical(password1, password2) {

  if(password1 == password2) {
    input_passowrd1.classList.remove('invalid');
    input_passowrd2.classList.remove('invalid');
    hint_password.innerHTML = "";
    return true;
  }

  hint_password.innerHTML = "Hasła są różne";
  input_passowrd1.classList.add('invalid');
  input_passowrd2.classList.add('invalid');
  return false;
}

function checkbox_validation(){

  const checkbox = document.querySelector('#status')
  if(checkbox.checked == true){
    return true;
  }

  return false;
}