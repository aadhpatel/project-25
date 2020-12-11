
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundSprite;
var ball, ballSprite, ballImg;
var dustbin, dustbinSprite, dustbinSprite2, dustbinSprite3;

var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2


}

function preload()
{
	//ballImg = loadImage("ball.png");
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

 ballSprite=createSprite(50,660,20, 20 );
 ballSprite.shapeColor="pink"; 

 //this.image = addImage("ball.png");
 

groundSprite=createSprite(1000, 680, 2000, 20);
groundSprite.shapeColor="yellow";

dustbinSprite=createSprite(800, 665, 100, 10);
dustbinSprite.shapeColor="white";
dustbinSprite.collide(groundSprite);

dustbinSprite2=createSprite(750,665, 10, 100);
dustbinSprite2.shapeColor="white";
dustbinSprite2.collide(groundSprite);

dustbinSprite3=createSprite(850,665,10,100);
dustbinSprite3.shapeColor="white";
dustbinSprite3.collide(groundSprite);

}


function draw() {

	rectMode(CENTER);
	background(0);
	

	drawSprites();

	keyPressed();
	display();

	Matter.Bodies.circle(50,660, 1, [options], [maxSides]);
   
  }


  

function keyPressed() {

	if (keydown (RIGHT_ARROW)) {
		ballSprite.velocityX=1;
	}

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.poition, {x:50, y:660});
	
	}

}





