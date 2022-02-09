// function unaFuncion (){
//     console.log(1);
//     console.log(2);
//     console.log(3);

//     return "Hola mundo";
// }

//unaFuncion();

// var mensaje = unaFuncion();
// console.log(mensaje);

// ------------------------------------------

// console.log("2 x 0 =", 2 * 0);
// console.log("2 x 1 =", 2 * 1);
// console.log("2 x 2 =", 2 * 2);
// console.log("2 x 3 =", 2 * 3);
// console.log("2 x 4 =", 2 * 4);
// console.log("2 x 5 =", 2 * 5);
// console.log("2 x 6 =", 2 * 6);
// console.log("2 x 7 =", 2 * 7);
// console.log("2 x 8 =", 2 * 8);
// console.log("2 x 9 =", 2 * 9);
// console.log("2 x 10 =", 2 * 10);

//------------------------------------------

// function tablaDelDos(){
//     for (i = 0; i <=10; i++){
//         console.log("2 x ", i, "=", 2 * i);
//     }
// }

// tablaDelDos();

// function Suma(num1,num2){
//     var resultado = num1 + num2;

//     console.log("Elresultado es: " + resultado);
// }

// Suma(5,30);

//------------------------------------------

// function sumatoria (num1, num2){
//     var total = num1 + num2;

//     return "La sumatoria es: " + total;
// }

// var valorTotal = sumatoria(9,8);
// console.log (valorTotal);

//------------------------------------------

// function saludo (nombre, edad){
    
//     this.nombre = nombre;
//     this.edad = edad;
//     console.log("Hola yo soy: " + this.nombre + ", mi edad es: " + this.edad);
// }

// saludo ("Cristian", 30);

// function diaActual(){
//     var fecha = new Date();
//     console.log("Hoy es: " + fecha.getDate());
// }

// diaActual();

//--------------------------------------------------

// Definir si es un palindromo la cadena de texto ingresada---

var texto;
var resultado;

texto = prompt("Ingrese un oracion");

function palindromo (texto){
    var cadenaPrincipal = texto.toLowerCase().toUppercase();
    var letrasEspacios = cadenaPrincipal.split("");
    var cadenaSinEspacios = "";

    for (i in letrasEspacios){
        if(letrasEspacios[i] != "")
            cadenaSinEspacios += letrasEspacios[i];
    }
}

var letras = cadenaSinEspacios;
var reverse = cadenaSinEspacios.split("").reverse("");
var igual = true;

for (i in letras) {
    if(letras[i] == reverse[i]){

        igual = false;
    }
    if(igual){
        resultado += "Es un palindromo";
    }
    else{
        resultado += "No es un palindromo";
    }
    return resultado;
}
resultado = "La cadena que ingresaste: ";
alert(palindromo(texto));





