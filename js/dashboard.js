const account_name = document.querySelector("#name");
const account_number = document.querySelector("#account_number");
const account_money = document.querySelector("#money");

const transfer_account_number = document.querySelector("#transfer_account_number");
const transfer_su = document.querySelector("#transfer_su");
const transfer_button = document.querySelector("#transfer_button");


$.post("php/dashboard.php", function(result){
    // console.log(result);
    
    var query_array_json = JSON.parse(result);

    // console.log(query_array_json[1]);


    account_name.innerHTML = "Witaj, "+query_array_json[1];
    account_number.innerHTML = query_array_json[0];
    account_money.innerHTML =  query_array_json[4];
});

transfer_button.addEventListener("click", function(){
    
})
