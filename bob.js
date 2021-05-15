class Bob{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        
        var options = {
            restitution: 1,
            friction: 0,
            density: 0.8
        }

        this.bob = Bodies.circle(this.x, this.y,(this.r)/2, options)
        World.add(world, this.bob)
    }

    display(){
        var bobpos=this.bob.position; 
        push();
        translate(bobpos.x, bobpos.y); 
        ellipseMode(CENTER) 
        fill(255,0,255) 
        ellipse(0,0,this.r, this.r); pop()
    }
}