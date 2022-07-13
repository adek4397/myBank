const dropdown_item_operation = document.querySelector("#operation");
const container_operation = document.querySelector("#container");
var id = account_number.innerHTML;

dropdown_item_operation.addEventListener("click", function(){

    $.post("php/operation.php", function(result){
        // console.log(result);
        container_operation.innerHTML = ""; 

        if(result == "false_conect"){
            alert("Brak połączenia");
        }
        else{
 
            let table = "<table class='col-12'><tr><th>Data:</th><th>Rachunek nadawcy:</th><th>Rachunek odbiorcy:</th><th>Kwota:</th></tr>";
    
            var operation_array = JSON.parse(result);
    
            for(let i=0; i<operation_array.length; i++){
    
                var operation_array_row = operation_array[i];
                table += "<tr><td>"+operation_array_row['date']+"</td><td>"+operation_array_row['ovner_money']+"</td><td class='client_money'>"+operation_array_row['client_money']+"</td><td class='value'>"+operation_array_row['value']+"</td></tr>";
            }
    
            table += "</table>";
    
            container_operation.innerHTML = table; 

            check();
        }      
    });

    function check(){
        const td_client_money = document.querySelectorAll('.client_money');
        const td_value = document.querySelectorAll('.value');
    
        for(let i=0; i<td_client_money.length; i++){
            if(td_client_money[i].innerHTML != id){
                td_value[i].innerHTML = "- "+td_value[i].innerHTML;
                td_value[i].classList.add('value-red');
            }
            else{
                td_value[i].innerHTML = "+ "+td_value[i].innerHTML;
                td_value[i].classList.add('value-green');
            }
        }
    }

})