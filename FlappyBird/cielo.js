class Cielo{
    constructor(){
        this.ancho=144;
        this.alto=256;
        this.fondo=0;
        this.frame=[
            {
                x:0,
                y:0,
                ancho:144,
                alto:256
            },
            {
                x:146,
                y:0,
                ancho:144,
                alto:256
            }
        ]
    }
    Draw(){
        ctx.drawImage(textura,
            this.frame[this.fondo].x,this.frame[this.fondo].y,this.frame[this.fondo].ancho,this.frame[this.fondo].alto,
            0,0,ANCHO,ALTO
        );
    }

    CambiarFondo(){
        this.fondo=(this.fondo+1)%this.frame.length;
    }

}