
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//bobObject1 = new Bob(width/2 - 80, width/2, 40);
	bobObject1 = new Bob(300,300,40);
	bobObject2 = new Bob(330,300,40);
	bobObject3 = new Bob(360,300,40);
	bobObject4 = new Bob(390,300,40);
	bobObject5 = new Bob(420,300,40);

    roof = new Roof(320,100,300,20);

	rope1 = new Rope(bobObject1.body, roof.body, -100, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -50, 10);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 10);
	rope4 = new Rope(bobObject4.body, roof.body, 50, 10);
	rope5 = new Rope(bobObject5.body, roof.body, 100, 10);

	Engine.run(engine);
  
}


function draw() {
	background(230);  
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
    drawSprites();
 
}

function keyPressed()
{
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-60, y:-0.5});
  }

  if(keyCode === DOWN_ARROW){
	Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x:60, y:-0.5});
  }
}


