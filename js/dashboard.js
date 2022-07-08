const account_name = document.querySelector("#name");
const account_number = document.querySelector("#account_number");
const account_money = document.querySelector("#money");

const transfer_account_number = document.querySelector("#transfer_account_number");
const transfer_sum = document.querySelector("#transfer_sum");
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
    if(Number(transfer_account_number.value) > 0 && Number(transfer_sum.value)){
        if(Number.isInteger(Number(transfer_account_number.value))){
            $.post("php/dashboard.php", {transfer_account_number: transfer_account_number.value, transfer_sum: transfer_sum.value}, function(result){
                console.log(result);
            });
        }
        else{
            alert("Numer konta musi być liczbą całkowita");
        }
    }
    else{
        alert("Liczba musi być wieksza od zera");
    }
})
