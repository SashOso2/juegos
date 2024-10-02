class GrupoTubos{
    constructor(x){
        this.tubo_1=new Tubo(0);
        this.tubo_2=new Tubo(1);
        this.separacion=50;
        this.y_rango_i=15+this.separacion/2;
        this.y_rango_f=ALTO-(15+suelo.alto+this.separacion/2);
        this.tubo_1.y=ALTO/2-this.separacion/2-this.tubo_1.alto;
        this.tubo_2.y=ALTO/2+this.separacion/2;
        this.tubo_1.x=x;
        this.tubo_2.x=x;
    }
    Draw(){
        this.tubo_1.Draw();
        this.tubo_2.Draw();
    }
    Update(){
        this.tubo_1.Update();
        this.tubo_2.Update();
        if(this.tubo_1.x<-this.tubo_1.ancho && this.tubo_2.x<-this.tubo_2.ancho){
            this.Reaparecer()
        }
    }
    Reaparecer(){
        this.tubo_1.x=ANCHO;
        this.tubo_2.x=ANCHO;
        let y=random(this.y_rango_i,this.y_rango_f);
        this.tubo_1.y=y-this.separacion/2-this.tubo_1.alto;
        this.tubo_2.y=y+this.separacion/2;
    }

}