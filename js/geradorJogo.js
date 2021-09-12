var btnGerarMega = document.querySelector("#mega");
var btnGerarLotofacil = document.querySelector("#lotofacil");
var btnGerarQuina = document.querySelector("#quina");
var btnGerarLotomania = document.querySelector("#lotomania");

btnGerarMega.addEventListener("click", function() {

    var resultado = document.getElementById("#aleatorio");
    aleatorio.innerHTML = getRandomMega();    

});
btnGerarLotofacil.addEventListener("click", function() {

    var resultado = document.getElementById("#aleatorio");
    aleatorio.innerHTML = getRandomLotofacil();    

});
btnGerarQuina.addEventListener("click", function() {

    var resultado = document.getElementById("#aleatorio");
    aleatorio.innerHTML = getRandomQuina();    

});
btnGerarLotomania.addEventListener("click", function() {

    var resultado = document.getElementById("#aleatorio");
    aleatorio.innerHTML = getRandomLotomania();    

});

var btnLimpar = document.querySelector("#reset");

btnLimpar.addEventListener("click", function() {

   var limpar = document.getElementById("#aleatorio");
   aleatorio.textContent = "00";

});

function getRandomMega() {
    //var array = [...Array(6)].map(() => Math.floor(Math.random() * 61 - 1) + 1);
    var max = 60;
    var resultado = 6;

    var array = [];
    for (var i = 0; i < max; i++) {
        array[i] = i + 1;
    }
    var p, n, tmp;
    for (p = array.length; p; ) {
        n = Math.random() * p-- | 0;
        tmp = array[n];
        array[n] = array[p];
        array[p] = tmp;
    }
    var random = [];
    for (var i = 0; i < resultado; i++) {
        random += array[i]+ ' ';
    } 

    return random;
}

function getRandomLotofacil() {
    //var array = [...Array(15)].map(() => Math.floor(Math.random() * 26 - 1) + 1);
    var max = 25;
    var resultado = 15;

    var array = [];
    for (var i = 0; i < max; i++) {
        array[i] = i + 1;
    }
    var p, n, tmp;
    for (p = array.length; p; ) {
        n = Math.random() * p-- | 0;
        tmp = array[n];
        array[n] = array[p];
        array[p] = tmp;
    }

    var random = [];
    for (var i = 0; i < resultado; i++) {
        random += array[i]+ ' ';
    } 

    return random;
}

function getRandomQuina() {
    //var array = [...Array(5)].map(() => Math.floor(Math.random() * 6 - 1) + 1);
    var max = 80;
    var resultado = 5;

    var array = [];
    for (var i = 0; i < max; i++) {
        array[i] = i + 1;
    }
    var p, n, tmp;
    for (p = array.length; p; ) {
        n = Math.random() * p-- | 0;
        tmp = array[n];
        array[n] = array[p];
        array[p] = tmp;
    }
    var random = [];
    for (var i = 0; i < resultado; i++) {
        random += array[i]+ ' ';
    } 

    return random;
}

function getRandomLotomania() {
    //var array = [...Array(50)].map(() => Math.floor(Math.random() * 50 - 0 ));
    var max = 100;
    var resultado = 50;

    var array = [];
    for (var i = 0; i < max; i++) {
        array[i] = i + 1;
    }
    var p, n, tmp;
    for (p = array.length; p; ) {
        n = Math.random() * p-- | 0;
        tmp = array[n];
        array[n] = array[p];
        array[p] = tmp;
    }
    var random = [];
    for (var i = 0; i < resultado; i++) {
        random += array[i]+ ' ';
    } 

    return random;
}