/* Ejercicio 1 :Crea un (h1) con un texto inicial y un botón.
Cuando el usuario haga clic en el botón, 
el texto del (h1) debe cambiar por otro diferente*/

// Seleccionamos el botón y el h1
const button = document.getElementById('cambiarTexto');
const h1 = document.querySelector('#titulo1');

// Creamos una función que cambie el texto del h1
function changeText() {
    h1.textContent = '¡Gracias por leer!';
    h1.style.color = 'white';
    button.value = '';
}

// Añadimos un evento al botón
button.addEventListener('click', changeText);


/* Ejercicio 2:Crea un campo de entrada (input de tipo texto) y un (p). 
 Cada vez que el usuario escriba en el campo, el (p) debe mostrar 
 un mensaje si la longitud del texto es menor a 5 caracteres.*/
const input = document.getElementById('texto2');
const p = document.getElementById('mensaje'); 

function escribirTexto() {
    if (input.value.length < 5) {
      p.textContent = 'El texto es muy corto';
    } else {
        p.textContent = '';
    }
}
//dar propiedades al mensaje//
p.style.color = 'white';


// Escuchar el evento "input" en el campo de texto
input.addEventListener('input', escribirTexto);



