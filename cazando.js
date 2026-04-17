let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const alto_Gato = 50;
const ancho_Gato = 50;
let gatoX = 250;
let gatoY = 250;

const alto_Comida = 40;
const ancho_Comida = 40;
let comidaX = 450;
let comidaY = 450;

function graficarGato(){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,250,50,50);

}

function graficarComida(){
    ctx.fillStyle = "#000080";
    ctx.fillRect(450,450,40,40);

}

function iniciarJuego(){
    graficarComida();
    graficarGato();
}

