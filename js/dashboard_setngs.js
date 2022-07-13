const dropdown_item_setings = document.querySelector("#setings");
const container_setings = document.querySelector("#container");
var id = account_number.innerHTML;

dropdown_item_setings.addEventListener("click", function(){

    container_setings.innerHTML = "";

    if(is_admin == 1){

        container_setings.innerHTML = '<section class="transfer col-12 col-sm-12 col-md-5 col-lg-6"><h4>Zmień stan konta</h4><form><div class="change"><div class="col"><input id="change_value" type="number" class="form-control" placeholder="Kwota" min="1" max="20"></div><button class="btn btn-primary btn-sm col-12 col-sm-12 col-md-4 col-lg-4" id="change_button" type="button">Zmień</button></form></section>';

        const change_button = document.querySelector("#change_button");
        const change_input = document.querySelector("#change_value");

        change_button.addEventListener("click", function(){
            if(Number(change_input.value) > 0 && Number(change_input.value) < 4294967){
                $.post("php/setings.php", {money: change_input.value}, function(result){
                    
                    if(result = "false_conect"){
                        alert('Brak połącznia');
                    }

                    if(result = "change successful"){
                        alert('Operacja zakończona powodzeniem');
                    }
                });
            }
            else{
                alert("Liczba nie może być mniejsza od zera")
            }
        })
    }
    else{
        container_setings.innerHTML = "<h3>Nie jesteś administratorem</h3>";
    }
})