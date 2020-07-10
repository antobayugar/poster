debugger;

//datos del nombre
let nombre = prompt("Ingresá tu nombre:");
let textoElement = document.getElementById('texto');
//validacion simple, que no este vacio el prompt
while (nombre == "") {
    alert("El campo no puede estar vacío.");
    nombre = prompt("Ingresá tu nombre:");
}
textoElement.innerText = nombre;

//elegir tipografia
let tipografia = prompt("Elegí una tipografía: \n A. Serif \n B. San Serif");

//validacionTipografia(tipografia);

//validacion simple, que no este vacio el prompt
function validacionTipografia(variable) {
    while ((variable == "") || (variable != "A") || (variable != "a") || (variable != "B") || (variable != "b")) {
        alert("La opción elegida no existe.");
        variable = prompt("Elegí una tipografía: \n A. Serif \n B. San Serif");
    }
    return variable;
}

//eleccion tipografia segun respuesta
if (tipografia == "B" || tipografia == "b") {
    textoElement.classList.add("sans");
} else {
    textoElement.classList.add("serif");
}

//eleccion tematica: fondo imagen + color texto
let tematica = prompt("Elegí una temática: \n A. Marítima \n B. Bosque \n C. Oscuro");
let bodyElement = document.getElementById('body');

if ((tematica == "A") || (tematica == "a")) {
    bodyElement.classList.add('fondo-maritimo');
    textoElement.classList.add('texto-maritimo');
} else 
if((tematica == "B") || (tematica == "b")) {
    bodyElement.classList.add('fondo-bosque');
    textoElement.classList.add('texto-bosque');
} else {
    bodyElement.classList.add('fondo-oscuro');
    textoElement.classList.add('texto-oscuro');
} 
