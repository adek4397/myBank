const dropdown_item = document.querySelector("#operation");
const container = document.querySelector("#container");

dropdown_item.addEventListener("click", function(){
    
    $.post("php/operation.php", function(result){
        console.log(result);
    });
})