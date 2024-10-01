const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");
let ANCHO=144;
let ALTO=256;

document.body.style.padding="0px";
document.body.style.margin="0px";
document.body.style.backgroundColor="black";
document.body.style.overflow="hidden";
canvas.style.backgroundColor="white";


//---------resise-------//
function resizeCanvas() {
    let canvas_ancho=innerWidth;
    let canvas_alto=(canvas_ancho*ALTO)/ANCHO;
    if(canvas_alto>innerHeight){
        canvas_alto=innerHeight;
        canvas_ancho=(canvas_alto*ANCHO)/ALTO;
    }


    const canvas_x=(innerWidth-canvas_ancho)/2;
    const canvas_y=(innerHeight-canvas_alto)/2;

    canvas.width=canvas_ancho;
    canvas.height=canvas_alto;
    canvas.style.marginLeft=canvas_x+"px";
    canvas.style.marginTop=canvas_y+"px";
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
//-------loop------//
function loop(){
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Resetea la transformación
    ctx.scale(canvas.width/ANCHO,canvas.height/ALTO);
    if (typeof Update === 'function') {
        Update();
    }
    if (typeof Draw === 'function') {
        Draw();
    }
    requestAnimationFrame(loop);
}
loop();
requestAnimationFrame(loop);