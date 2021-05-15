class Roof{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        var options = {
            isStatic: true
        }

        this.roof = Bodies.rectangle(this.x, this.y, this.w, this.h, options)
        World.add(world, this.roof)
    }

    display(){
    var roofpos=this.roof.position; 
    push();
    translate(roofpos.x, roofpos.y); 
    rectMode(CENTER) ;
    fill(255,0,255) ;
    rect(0,0,this.w, this.h); 
    pop();
    }
}