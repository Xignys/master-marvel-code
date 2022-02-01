/*Desafio:
    1. Solicitar los nombres completos de los miembros de la familia separados por (,)
    2. Convertir esos nombres a un array de nombres de la familia y mostrarlo en consola.
    3. Combinar los dos arrays en uno solo y reodenarlo de atras hacia adelante y lo vamos a mostrar al usuario.
    4. Agregar las validaciones que crean necesarias.
*/
//Variables y entradas
var nombre, apellido1, apellido2, nombresMiembros;
var arrayNombre = []; //Inicializo arreglo vacio
var arrayFamiliares = [];
var arrayCombinado = [];

nombre = prompt("Ingresa tu nombre");
apellido1 = prompt("Ingresa tu primer apellido");
apellido2 = prompt("Ingresa tu segundo apellido");
nombresMiembros = prompt ("Ingresa los nombres de tu familiares, divididos por comas");

if(nombre === "" || apellido1 === "" || apellido2 === "" || nombresMiembros ==="")
{
    alert("Faltan datos")
}
else if (nombresMiembros.includes(",") === false)
{
    alert("Ingresar los nombres separados con coma (,)");
}
else
{
//logica
arrayNombre.push(nombre);
arrayNombre.push(apellido1);
arrayNombre.push(apellido2);

arrayFamiliares = nombresMiembros.split(",");

arrayCombinado = arrayNombre.concat(arrayFamiliares);

nombreCompleto = `Tu nombre es: ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]}`;


//salidas
console.log(arrayNombre);
console.log(arrayFamiliares);
alert(nombreCompleto);
alert(arrayCombinado.reverse());
}

