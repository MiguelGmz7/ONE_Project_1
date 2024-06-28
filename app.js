let numero_s = Math.floor(Math.random() * 10) + 1;
// numero secreto del 1 al 10
console.log(numero_s);
let numero_u = 0;
let count = 0;

var load = function() { //esta es nuestra funcion principal
    /*
    Este event listener nos permite correr el script en cuanto
    los elementos del DOM se hayan colocado, despues correra 
    el script, esto nos permitira modificarlos 
    */

    do{
        numero_u = Number(prompt("ingresa un numero entre 1 y 10"));
        console.log(numero_u);
    }while(!Number.isInteger(numero_u) || numero_u > 10 || numero_u < 1)
    //numero que ingresa el usuario 

    let mensaje1 = document.querySelector("#mensaje1");
    let mensaje2 = document.querySelector("#mensaje2");
    let trofeo = document.querySelector("#trofeo");
    // variables de html que vamos a modificar 

    if (numero_u == numero_s){
        trofeo.src = "./img/trophy.png" //modificamos la "src" de la imagen, para así cambiarla
        mensaje1.classList.add("container__texto-azul"); // agregamos la clase css container__texto-azul
        mensaje1.textContent = "Felicidades!";
        mensaje2.innerHTML = "Descifraste el numero secreto en " + count + (count > 1 || count == 0 ? " intentos" : " intento");
        // al final usamos el operador ternario -> si count es > 1 o = 0 entonces escribe "intentos" si no intento
    }
    else{
        if (numero_u > numero_s){
            trofeo.src = "./img/cara-triste.png"; // cambiamos la imagen dependiendo de si le atino o no
            mensaje1.classList.add("container__texto-rojo");
            mensaje1.textContent = "Intentalo de nuevo"
            mensaje2.innerHTML = "El numero es menor!"
            // podemos usar (textcontent o innerhtml) para modificar el texto
        } else {
            trofeo.src = "./img/cara-triste.png";
            mensaje1.classList.add("container__texto-rojo");
            mensaje1.textContent = "Intentalo de nuevo"
            mensaje2.innerHTML = "El numero es mayor!";
        }
    }

} 

document.addEventListener('DOMContentLoaded', function() { 
    // corremos la funcion principal despues de que se carguen los elementos DOM
    load();
});


var return_b = function() {
    //corremos la funcion principal si te da click al boton 
    if(numero_s != numero_u){
        count++; // esto nos indica cuantas veces se dio click al boton 
        load();
    }
}