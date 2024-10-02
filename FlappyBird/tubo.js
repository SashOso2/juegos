class Tubo{
    constructor(pose=0){
        this.ancho=26;
        this.alto=160;
        this.x=ANCHO/2;
        this.y=ALTO/2;
        this.frame=[
            [
                {
                    x:56,
                    y:323,
                    ancho:26,
                    alto:160,
                },
                {
                    x:84,
                    y:323,
                    ancho:26,
                    alto:160,
                }
            ],
            [
                {
                    x:0,
                    y:323,
                    ancho:26,
                    alto:160,
                },
                {
                    x:28,
                    y:323,
                    ancho:26,
                    alto:160,
                }
            ]
        ]
        this.pose=pose;
    }
    Draw(){
        ctx.save();
        ctx.translate(this.x,this.y);

        ctx.drawImage(textura,
            this.frame[color_tubo][this.pose].x,this.frame[color_tubo][this.pose].y,this.frame[color_tubo][this.pose].ancho,this.frame[color_tubo][this.pose].alto,
            0,0,this.ancho,this.alto
        );

        ctx.restore();
    }
    Update(){
        if(!gameover && !tutorial){
            this.x-=v;
        }
        
        //colision
        if(
            pajaro.x+pajaro.radio>=this.x &&
            pajaro.x-pajaro.radio<=this.x+this.ancho &&
            pajaro.y+pajaro.radio>=this.y &&
            pajaro.y-pajaro.radio<=this.y+this.alto
        ){
            if(pajaro.vy>0 && pajaro.y>this.y){
                pajaro.Saltar();
            }
            gameover=true;
        }
    }

}