var btnMega = document.querySelector("#mega");

btnMega.addEventListener("click", function() {
    console.log("DESGRAÇAAAA!!!!");

    var http = new XMLHttpRequest();

    http.open("GET", "https://loterias-api-gutotech.herokuapp.com/api/v0/megasena/latest");
    http.addEventListener("load", function() {
        if (http.status == 200) {
            var resposta = http.responseText;
            var resultado = JSON.parse(resposta);

            console.log(resultado);
        }
    });
    http.send();
});