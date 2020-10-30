// wall1 = new Wall(width/2, 652.5, 220, 15);
	// wall2 = new Wall(290, 610, 15, 100);
	 //wall3 = new Wall(510, 610, 15, 100);
//packageBody = Bodies.circle(500 , 200 , 5, {isStatic:true, restitution:0.8, friction:0.3, density:1.0});


var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1sprite, wall2sprite, wall3sprite;
var wall1body, wall2body, wall3body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	wall1sprite=createSprite(width/2, 652.5, 220, 15);
	wall1sprite.shapeColor=color("red");

	wall2sprite=createSprite(290, 610, 15, 100);
	wall2sprite.shapeColor=color("red");

	wall3sprite=createSprite(510, 610, 15, 100);
	wall3sprite.shapeColor=color("red");

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("black")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	wall1body= Bodies.rectangle(width/2, 642, 220, 15, {isStatic:true});
	World.add(world, wall1body);

	wall2body= Bodies.rectangle(290, 610, 15, 100, {isStatic:true});
	World.add(world, wall2body);

	wall3body= Bodies.rectangle(510, 610, 15, 100, {isStatic:true});
	World.add(world, wall3body);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}



