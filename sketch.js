var paper,ground,dustbin1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,100,20,20);
	ground = new Ground(400,height,800,20);
	dustbin1 = new Dustbin(670,240,20,100)
	dustbin2 = new Dustbin(730,280,100,20)
	dustbin3 = new Dustbin(790,240,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display();
ground.display();
dustbin1.display();
dustbin3.display();
dustbin2.display();
drawSprites();
keyPressed();
}

function keyPressed(){
 	if (keyCode === UP_ARROW){
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:0.5,y:-0.8});
	 }

	}
