
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);
background("white")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bob1= new paper(300,700,50,50)
bob2=new paper(400,700,50,50)
bob3=new paper(500,700,50,50)
bob4=new paper(600,700,50,50)
bob5=new paper(700,700,50,50)

roof= new Ground(500,200,500,50)
fill("white")
rope1=new rope(bob1.body,roof.body,300,220)
rope2=new rope(bob2.body,roof.body,400,220)
rope3=new rope(bob3.body,roof.body,500,220)
rope4=new rope(bob4.body,roof.body,600,220)
rope5=new rope(bob5.body,roof.body,700,220)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
  if(keyCode===UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100})
 }
}



