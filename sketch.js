
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var ground;
var stone1;
var rubber1;
var sand1;
var iron;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer1 = new Hammer(50,400);
	ground = new Ground(600,690,1200,50);
	stone1 = new Stone(400,620,90,90);
	stone2 = new Stone(400,620,70,70);
	rubber1 = new Rubber(500,650);
	sand1 = new Sand(450,540);
	sand2 = new Sand(450,550);
	sand3 = new Sand(450,560);
	sand4 = new Sand(450,570);
	sand5 = new Sand(450,580);
	sand6 = new Sand(450,590);
	sand7 = new Sand(450,600);
	sand8 = new Sand(450,610);
	sand9 = new Sand(450,580);
	sand10 = new Sand(450,590);
	sand11 = new Sand(450,600);
	sand12 = new Sand(450,610);
	sand12 = new Sand(450,610);
	iron = new Iron(400,620);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  drawSprites();

  hammer1.display();
  ground.display();
  stone1.display();
  stone2.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();
  iron.display();
}



