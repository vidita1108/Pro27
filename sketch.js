
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobDiameter ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	bobDiameter = 40;

	//Create the Bodies Here.


	// bob1 = new Bob(320, 575, 40);
	// bob2 = new Bob(340, 575, 40);
	// bob3 = new Bob(360, 575, 40);
	// bob4 = new Bob(380, 575, 40);
	// bob5 = new Bob(400, 575, 40);

	  startBobPositionX=width/2;
	  startBobPositionY=height/4+300;
	  bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
	  bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	  bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter); 
	  bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
	  bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


	roof = new Roof(width/2,height/4,width/7,20);
	roof = new Roof(400, 50, 230, 20);
	rope1 = new Rope(bob1.bob, roof.roof, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.bob, roof.roof, -bobDiameter*1, 0);
	rope3 = new Rope(bob3.bob, roof.roof, 0, 0);
	rope4 = new Rope(bob4.bob, roof.roof, bobDiameter*1, 0);
	rope5 = new Rope(bob5.bob, roof.roof, bobDiameter*2, 0);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");


  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)
 
}

function keyPressed(){
if(keyCode === 32){
	Matter.Body.applyForce(bob1.bob, bob1.bob.position, {x:-60, y:-50});
}
}

