//datos del nombre
let nombre = prompt("Ingresá tu nombre:");
let textoElement = document.getElementById("texto");
//validacion simple, que no este vacio el prompt
while (nombre == "") {
  alert("El campo no puede estar vacío.");
  nombre = prompt("Ingresá tu nombre:");
}
textoElement.innerText = nombre;


//elegir tipografia
let tipografia ; 
//eleccion tipografia segun respuesta
do {
  tipografia = prompt("Elegí una tipografía: \n A. Serif \n B. San Serif");

  if (tipografia.toLowerCase() == "a") {
    textoElement.classList.add("sans");
  } else if (tipografia.toLowerCase() == "b") {
    textoElement.classList.add("serif");
  } else {
    alert("La opción elegida no existe.");
  }
} while ((tipografia == "") || (tipografia.toLowerCase() != "a") && (tipografia.toLowerCase() != "b"))


//eleccion tematica: fondo imagen + color texto
let tematica; 
let bodyElement = document.getElementById("body");
//eleccion tipografia segun respuesta
do {
  tematica  = prompt("Elegí una temática: \n A. Marítima \n B. Bosque \n C. Oscuro");

if (tematica.toLowerCase() == "a") {
  bodyElement.classList.add("fondo-maritimo");
  textoElement.classList.add("texto-maritimo");
} else if (tematica.toLowerCase() == "b") {
  bodyElement.classList.add("fondo-bosque");
  textoElement.classList.add("texto-bosque");
} else if (tematica.toLowerCase() == "c") {
  bodyElement.classList.add("fondo-oscuro");
  textoElement.classList.add("texto-oscuro");
} else {
  alert("La opción elegida no existe.");
}
} while ((tematica == "") || (tematica.toLowerCase() != "a") && (tematica.toLowerCase() != "b") && (tematica.toLowerCase() != "c"))