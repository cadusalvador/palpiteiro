/*var btnMega = document.querySelector("#mega");

btnMega.addEventListener("click", function() {
    console.log("DESGRAÇAAAA!!!!");

    var http = new XMLHttpRequest();

    http.open("POST","https://apiloterias.com.br/app/resultado?loteria=megasena&token=m2RTNfsHSInbBko");
    http.addEventListener("load", function() {
        if (http.status == 200) {
            var resposta = http.responseText;
            var resultado = JSON.parse(resposta);

            console.log(resultado);
        }
    });
    http.send();
});*/