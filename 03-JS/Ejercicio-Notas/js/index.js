/*Crear una aplicacion que permita a un profesor generar las notas definitivas de sus alumnos.

Debemos permitir al profesor que nos indique cuantos alumnos va a calificar
Permitir al profesor ingresar la cantidad de notas que va apromediar en general
Obtener el promedio de cada estudiante
Mostrar al profesor al final una lista de estudiantes con su nombre y su calificacion final.*/

/*Variables y Entradas*/
var cantidadAlumnos, cantidadNotas, nombre, nota, promedio;
var alumno;
var resultados = [];

cantidadAlumnos = Number (prompt("Ingresa la cantidad de alumnos de tu clase"));
cantidadNotas = Number (prompt("Ingresa cantidad de notas a promediar"));

//Logica
for (i = 1; i <= cantidadAlumnos; i++){
    var sumatoria = 0;
    nombre = prompt ("Ingresa nombre del alumno " + i);
    
    for (j = 1; j <= cantidadNotas; j++){
        nota = Number (prompt ("Ingresa la nota " + j));
        sumatoria = sumatoria + nota;
    }
    promedio = sumatoria / cantidadNotas;

    alumno = "Alumno: " + nombre + " - Calificacion: " + promedio;

    resultados.push(alumno);

}

function imprimeResultados (resultados){
    var lista = "";
    for(i = 0; i < resultados.lenght; i++){
        lista = lista + resultados[i] + "<br>";
    }

    return lista;
}
//Salida

var imprimir = imprimeResultados(resultados);
document.write (imprimir);



