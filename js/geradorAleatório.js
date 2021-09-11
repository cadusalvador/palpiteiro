var btnGerar = document.querySelector("#gerar");

btnGerar.addEventListener("click", function() {

    var resultado = document.getElementById("#resp");
    resp.innerHTML = Math.floor(100 * Math.random());  

});


var btnLimpar = document.querySelector("#reset");

btnLimpar.addEventListener("click", function() {

   var limpar = document.getElementById("#resp");
   resp.textContent = "00";

});