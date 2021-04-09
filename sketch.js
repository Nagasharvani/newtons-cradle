
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint


var bob1,bob2,bob3,bob4,bob5;
var roof1;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
roof1=new roof(300,200,250,20)

	bob1=new bob (150,450);
//	bob1.setCollider("circle",0,0,25)
	bob2=new bob(175,450);
	bob3=new bob(200,450);
	bob4=new bob(225,450);
	bob5=new bob(250,450);


	chain1=new chain(bob1.body,roof1.body,-100,0);
	chain2=new chain(bob2.body,roof1.body,-50,0);
	chain3=new chain(bob3.body,roof1.body,0,0);
	chain4=new chain(bob4.body,roof1.body,50,0);
	chain5=new chain(bob5.body,roof1.body,100,0);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display()
  bob1.display()
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode=== UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:-45})
	}
}



