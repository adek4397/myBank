const account_name = document.querySelector("#name");
const account_number = document.querySelector("#account_number");
const account_money = document.querySelector("#money");


$.post("php/dashboard.php", function(result){
    // console.log(result);
    
    var query_array_json = JSON.parse(result);

    // console.log(query_array_json[1]);


    account_name.innerHTML = "Witaj, "+query_array_json[1];
    account_number.innerHTML = query_array_json[0];
    account_money.innerHTML =  query_array_json[4];
});
