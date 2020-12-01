
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new roof(600, 100);

	ball1 = new ball(400, 500, 50);
	ball2 = new ball(500, 500, 50);
	ball3 = new ball(600, 500, 50);
	ball4 = new ball(700, 500, 50);
	ball5 = new ball(800, 500, 50);

	rope1 = new Rope(ball1.body, roofObject.body, -200, 0);
	rope2 = new Rope(ball2.body, roofObject.body, -100, 0);
	rope3 = new Rope(ball3.body, roofObject.body, 0, 0);
	rope4 = new Rope(ball4.body, roofObject.body, 100, 0);
	rope5 = new Rope(ball5.body, roofObject.body, 200, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  drawSprites()
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-200,y:-100});
	}
}



