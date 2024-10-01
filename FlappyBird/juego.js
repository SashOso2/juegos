let cielo=new Cielo();
let suelo=new Suelo();
let pajaro=new Pajaro();

function Update(){
    suelo.Update();
    pajaro.Update();
}
function Draw(){
    ctx.imageSmoothingEnabled = false;
    cielo.Draw();
    suelo.Draw();
    pajaro.Draw();
}


addEventListener("keydown",function(e){
    pajaro.Saltar();
});
canvas.addEventListener("click",function(e){
    pajaro.Saltar();
});
canvas.addEventListener("touchstart",function(e){
    e.preventDefault(); 
    pajaro.Saltar();
});