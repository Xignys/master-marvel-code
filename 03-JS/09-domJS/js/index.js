let txtNombre, añoNac, edad, añoActual, mesActual;

function capturaNombre() {
  txtNombre = document.getElementById("nombre");
  alert("Tu nombre es " + txtNombre.value);
}

function calcularEdad() {
  let fecha = new Date();
  añoNac = Number(document.getElementById("fecha").value.slice(0, 4));
  añoActual = fecha.getFullYear();

if (añoActual < añoNac) {
  alert("Elige un año de nacimiento valido");
} else {
  edad = añoActual - añoNac;
  document.getElementById("edad").innerText = "Tu edad es: " + edad;
}
}
document.getElementById("calcular").addEventListener("click", calcularEdad);

function cambiarColor() {
  document.getElementById("cuerpo").style.backgroundColor = "#58B973";
}

/* sacar la edad teniendo en cuenta el mes y los dias
Cuando le de click al cambiar color vuelva al color anterior  */
