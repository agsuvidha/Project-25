
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground1,ground2,ground3,ground4;
var bin1,bin2,bin3;

function preload()
{
//	ballimg=loadImage("paper.png");
}

function setup() {
	createCanvas(1330, 630);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.


	Engine.run(engine);

	ball=new Paper(100,100,33);
	//ball.addImage(ballimg);
	//ball.scale=0.2;
	ground1=new Ground(400,620,1450,10);
	ground2=new Ground(400,620,1450,10);
	ground3=new Ground(50,620,1450,10);
	ground4=new Ground(1300,620,1450,10);
	//ground1.shapeColor=("red");
	bin1 = new Dustbin(1000,590,170,30);
	bin2 = new Dustbin(925,515,20,180);
	bin3  = new Dustbin(1075,515,20,180);

//console.log(matter.js)
}


function draw() {
  rectMode(CENTER);
  background(150);

  ball.display();
 
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  bin1.display();
  bin2.display();
  bin3.display();
  

 

  keyPressed();

  
 // drawSprites();
 
}

function keyPressed()
{
	
if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:215,y:-260});
	}
	
}



