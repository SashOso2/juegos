class Pajaro{
    constructor(){
        this.ancho=17;
        this.alto=12;
        this.x=ANCHO/4;
        this.y=ALTO/2;
        this.frame=[
            [
                {
                    x:3,
                    y:491,
                    ancho:17,
                    alto:12,
                },
                {
                    x:31,
                    y:491,
                    ancho:17,
                    alto:12,
                },
                {
                    x:59,
                    y:491,
                    ancho:17,
                    alto:12,
                }
            ],
            [
                {
                    x:87,
                    y:491,
                    ancho:17,
                    alto:12,
                },
                {
                    x:115,
                    y:329,
                    ancho:17,
                    alto:12,
                },
                {
                    x:115,
                    y:355,
                    ancho:17,
                    alto:12,
                }
            ],
            [
                {
                    x:115,
                    y:381,
                    ancho:17,
                    alto:12,
                },
                {
                    x:115,
                    y:407,
                    ancho:17,
                    alto:12,
                },
                {
                    x:115,
                    y:433,
                    ancho:17,
                    alto:12,
                }
            ]
        ]
        this.color=0;
        this.pose=0;
        this.angulo=0;
        this.angulo_v=0;
        this.angulo_a=0.05;
        this.vy=0;
        this.salto=1;
        this.timer_aletear=0;
        this.g=0.02;
        this.radio=6;
    }
    Draw(){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.angulo * (Math.PI / 180));
        ctx.translate(-this.ancho/2,-this.alto/2);

        ctx.drawImage(textura,
            this.frame[this.color][this.pose].x,this.frame[this.color][this.pose].y,this.frame[this.color][this.pose].ancho,this.frame[this.color][this.pose].alto,
            0,0,this.ancho,this.alto
        );

        ctx.restore();
    }
    Update(){
        if(this.angulo<90 && this.vy>0 && !tutorial){
            this.angulo_v+=this.angulo_a;
        }else{
            this.angulo_v=0;
        }
        this.angulo+=this.angulo_v;


        if(this.y+this.radio<suelo.y && !tutorial){
            this.vy+=this.g;
        }else{
            this.vy=0;
            if(!tutorial){
                gameover=true;
                this.y=suelo.y-this.radio;
            }
        }
        this.y+=this.vy;


        this.timer_aletear+=1;
        if(this.timer_aletear>10){
            this.timer_aletear=0;
            this.AnimacionAletear();
        }
    }

    AnimacionAletear(){
        if(!gameover && this.vy<0){
            this.CambiarPose();
        }else{
            this.pose=1;
        }
    }

    Saltar(){
        if(!gameover){
            if(tutorial)tutorial=false;
            this.angulo=-45;
            this.vy=-this.salto;
        }
    }
    CambiarColor(){
        this.color=(this.color+1)%this.frame.length;
    }
    CambiarPose(){
        this.pose=(this.pose+1)%3;
    }
}