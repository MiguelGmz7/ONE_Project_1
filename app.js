document.addEventListener('DOMContentLoaded', function() {
/*
Este event listener nos permite correr el script en cuanto
los elementos del DOM se hayan colocado, despues correra 
el script, esto nos permitira modificarlos 
*/
    let numero_s = 6;
    // numero secreto
    let numero_u = prompt("ingresa un numero entre 1 y 10");
    //numero que ingresa el usuario 

    let mensaje1 = document.querySelector("#mensaje1");
    let mensaje2 = document.querySelector("#mensaje2");
    let trofeo = document.querySelector("#trofeo");
    // variables de html que vamos a modificar 

    if (numero_u == numero_s){
        trofeo.src = "./img/trophy.png" //modificamos la "src" de la imagen, para así cambiarla
        mensaje1.classList.add("container__texto-azul"); // agregamos la clase css container__texto-azul
        mensaje1.textContent = "Felicidades!";
        mensaje2.innerHTML = "Desfraste el numero secreto";
        // podemos usar (textcontent o innerhtml) para modificar el texto
    }
    else{
        trofeo.src = "./img/cara-triste.png";
        mensaje1.classList.add("container__texto-rojo");
        mensaje1.textContent = "Intentalo de nuevo"
        mensaje2.innerHTML = "No Desifraste el numero secreto";
    }
});