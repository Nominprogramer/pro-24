let ground1,opt;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = Bodies.rectangle(width / 2, 400, width, 10,opt);
	World.add(world, ground);

	opt ={
		isStatic:true
	}

	Engine.run(engine);

	dustbin = new DustBin(720, 390, 100, 10);
	paper = new Paper(500,410,20)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  dustbin.display();
  paper.display();
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 9,
		y: -11
	  });
	}
  }




