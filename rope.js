class Rope{ 
    constructor(body1,body2, offsetX, offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY 
          
          var options={ 
              bodyA:body1, 
              bodyB:body2, 
              pointB:{x:this.offsetX, y:this.offsetY} 
            } 
            //console.log(options); 
            this.rope=Constraint.create(options)
            //this.rope=Constraint.create(options)
            console.log(this.rope)
            console.log(this.rope.bodyA.position)
            World.add(world,this.rope) 
        } 
        display() { 
            var pointA=this.rope.bodyA.position; 
            var point2B=this.rope.bodyB.position; 
            strokeWeight(2); 
            var Anchor1X=pointA.x 
            var Anchor1Y=pointA.y 
            var Anchor2X=point2B.x+this.offsetX 
            var Anchor2Y=point2B.y+this.offsetY 
            line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y); 
        } 
    }