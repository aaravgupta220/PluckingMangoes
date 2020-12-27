
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boy_Image;

function preload()
{
	boy_Image = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 695, 800, 10);

	tree = new Trees(700, 450, 250, 500);

	boy = createSprite(110, 640, 20, 80);
	boy.addImage("boyy", boy_Image);
	boy.scale = 0.1;

	stone1 = new Stone(50, 590, 50);

	mango1 = new Mango(700, 250, 50);
	mango2 = new Mango(700, 350, 50);
	mango3 = new Mango(700, 400, 50);
	mango4 = new Mango(650, 350, 50);
	mango5 = new Mango(750, 350, 50);
	mango6 = new Mango(650, 300, 50);
	mango7 = new Mango(700, 300, 50);
	mango8 = new Mango(750, 300, 50);

	sling = new SLing(stone1.body, {x:50, y:590});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  tree.display();
  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  sling.display();

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
  detectCollision(stone1, mango8);
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(stone1, mango){
	mangoBodyPosition = mango.body.position;
	stone1BodyPosition = stone1.body.position;

	var distance = dist(stone1BodyPosition.x, stone1BodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance <= mango.r+stone1.r){
		Matter.Body.setStatic(mango.body, false);
	}

}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x:50, y:590});
		sling.attach(stone1.body);
	}
}



