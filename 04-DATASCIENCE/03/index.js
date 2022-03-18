'use strict'
let intento = 1;
let num2 = Math.floor(Math.random()* (5 - 1)) + 1;


function adivinador () {
    let num1 = Number (document.getElementById("num1").value);
    console.log(num2);

    if (num1 === num2) {
        document.getElementById("yas").innerHTML = '<p>YAS! Te ganaste unos cheetos</p> <br><img width="20%" src="cheetos.png"></img>';
        document.getElementById("nope").style.display = "none";
        document.getElementById("inputcheetos").style.display = "none";
        document.getElementById("error1").style.display = "none";
        document.getElementById("yas").style.display = "block";
        document.getElementById("retry").innerHTML = '<button onclick="retry()" class="btn btn-secondary" type="button" id="button-addon2">Prueba otra vez</button>';
    } else if (num1 === 0 || num1 > 5){
        document.getElementById("error1").innerText = "Ingresa un número entre 1 y 5";
    } else { 
        document.getElementById("nope").innerText = "NOP! Llevas " + intento + " intentos";
        document.getElementById("error1").style.display = "none";
        if (intento === 3) {
            document.getElementById("fallaste").innerHTML = "<p>Fallaste, me debes unos cheetos</p><br><img width='20%' src='gato1.jpg'</img>";
            document.getElementById("inputcheetos").style.display = "none";
            document.getElementById("nope").style.display = "none";
            document.getElementById("retry").innerHTML = '<button onclick="retry()" class="btn btn-secondary" type="button" id="button-addon2">Prueba otra vez</button>';
            document.getElementById("fallaste").style.display = "block";
        }
        intento++;
    }
}

function retry () {
    location.href = "index.html";
}