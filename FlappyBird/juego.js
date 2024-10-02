let cielo=new Cielo();
let suelo=new Suelo();
let pajaro=new Pajaro();
let grupos_tubos=[new GrupoTubos(ANCHO),new GrupoTubos(ANCHO+ANCHO/2+13)]

function Update(){
    suelo.Update();
    pajaro.Update();
    grupos_tubos.forEach(grupo_tubos => {
        grupo_tubos.Update();
    });
}
function Draw(){
    ctx.imageSmoothingEnabled = false;
    cielo.Draw();
    grupos_tubos.forEach(grupo_tubos => {
        grupo_tubos.Draw();
    });
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