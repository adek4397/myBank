const title = document.querySelector('#title');

const section_name_email = document.querySelector('.name-email');
const input_name = document.querySelector('#name');
const input_email = document.querySelector('#email');

const section_sex = document.querySelector('.sex');

const section_password = document.querySelector('.password');
const input_passowrd1 = document.querySelector('#password1');
const input_passowrd2 = document.querySelector('#password2');

const section_last_step = document.querySelector('.last_step');
const checkbox = document.querySelector('#status')

const section_buttons = document.querySelector('.butons');
const button_previous = document.querySelector('#previous');
const button_next = document.querySelector('#next');

const dots = document.querySelector('.step')
const dot1 = document.querySelector('#dot1');
const dot2 = document.querySelector('#dot2');
const dot3 = document.querySelector('#dot3');
const dot4 = document.querySelector('#dot4');

var step_progres = 1;

button_next.addEventListener("click", function(){

  switch(step_progres){
    case 1:
      if(email_validation(input_email.value) == true && name_validation(input_name.value) == true) {

        section_name_email.style.display = "none";
        section_sex.style.display = "block";
        button_previous.style.display = "block";
        dot2.style.backgroundColor = "rgb(13, 110, 253)";
        step_progres++;
      }
      break;
    case 2:
      if(radio_validation() == true){
        section_sex.style.display = "none";
        // console.log(section_password.style);
        section_password.style.display = "flex";
        dot3.style.backgroundColor = "rgb(13, 110, 253)";
        step_progres++;
      }
  }
})


input_name.addEventListener("focusout", function(){
  name_validation(input_name.value);
});

input_email.addEventListener("focusout", function(){
  email_validation(input_email.value);
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
      console.log('ok');
      return true;
    }

  }

  return false;
}