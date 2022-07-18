const section_name_email = document.querySelector('.name-email');
const input_name = document.querySelector('#name');
const input_email = document.querySelector('#email');

const section_sex = document.querySelector('.sex');

const section_password = document.querySelector('.passwrd');
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


function name_validation(name) {
    if((name.length > 0) && (name.length <= 10)) {
       if(name.match(/(*UTF8)^[A-ZŁŚ]{1}+[a-ząęółśżźćń]+$/)) {
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