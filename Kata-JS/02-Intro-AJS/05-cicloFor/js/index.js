//Variables y entradas
var cantidad, promedio, sumatoria;
var notas = [];
var sumatoria = 0;

cantidad = Number(prompt("Ingrese la cantidad de notas a promediar"));

//Logica
for(var i=1; i <= cantidad; i++/*i++ es lo mismo que (i=1+1)*/)
{
    //notas.push(Number(prompt(`Ingresa la nota ${i}`)))

    //sumatoria = sumatoria + notas [i-1];
    sumatoria = sumatoria + Number(prompt(`Ingresa la nota ${i}`))
}

promedio = sumatoria / cantidad;

//Salidas
alert(`El promedio de las ${cantidad} notas es: ${promedio}`);
console.log(notas);