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
    graficarRectangulo(gatoX,gatoY,ancho_Gato,ancho_Gato,"#800000");
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ancho_Comida,ancho_Comida,"#E8C00C");
}

function iniciarJuego(){
    graficarComida();
    graficarGato();
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,ancho,alto);
}

