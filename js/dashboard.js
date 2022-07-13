dashboard_update();

const dropdown_item_dashboard = document.querySelector("#dashboard");
const container_dashboard = document.querySelector("#container");
var is_admin = '';

dropdown_item_dashboard.addEventListener("click", function(){
    location.reload(true);
})



function dashboard_update(){
const account_name = document.querySelector("#name");
const account_number = document.querySelector("#account_number");
const account_money = document.querySelector("#money");

const transfer_account_number = document.querySelector("#transfer_account_number");
const transfer_sum = document.querySelector("#transfer_sum");
const transfer_button = document.querySelector("#transfer_button");


$.post("php/dashboard.php", function(result){
    
    if(result == "false_conect"){
        alert("Brak połacznia");
    }
    else{
        var query_array_json = JSON.parse(result);
        
        account_name.innerHTML = "Witaj, "+query_array_json['name'];
        account_number.innerHTML = query_array_json['id'];
        account_money.innerHTML =  query_array_json['money'];
        is_admin = query_array_json['is_admin'];
    }
});

transfer_button.addEventListener("click", function(){
    if(Number(transfer_account_number.value) > 0 && Number(transfer_sum.value) > 0){
        if(Number.isInteger(Number(transfer_account_number.value))){

            $.post("php/transfer.php", {transfer_account_number: transfer_account_number.value, transfer_sum: transfer_sum.value}, function(result){
                console.log(result);

                if(result == "transfer_account_number false"){
                    alert("Nie ma takiego numru konta");
                }

                if(result == "transfer_account_number same"){
                    alert("Nie możesz wysłać piniędzy do samego siebie");
                }

                if(result == "transfer_account_sum false"){
                    alert("Posiadasz zamoało piniędzy biedaku");
                }

                if(result == "transfer successful"){
                    alert("Operacja zakończona sukcesem");

                    $.post("php/dashboard.php", function(result){

                        if(result == "false_conect"){
                            alert("Brak połacznia");
                        }
                        else{
                            var query_array_json = JSON.parse(result);
                    
                            account_name.innerHTML = "Witaj, "+query_array_json[1];
                            account_number.innerHTML = query_array_json[0];
                            account_money.innerHTML =  query_array_json[5];   
                        }
                    });  
                    
                    transfer_account_number.value = "";
                    transfer_sum.value = "";
                }
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
}





