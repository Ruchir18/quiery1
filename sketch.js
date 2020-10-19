
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

	//Create the Bodies Here
ground = new Ground(400,600,800,10);
ground1 = new Ground(500,470,300,10);
box1=new Box(500,450,50,50);
box2=new Box(550,450,50,50);
box3=new Box(450,450,50,50);
box4=new Box(475,400,50,50);
box5=new Box(525,400,50,50);
box6=new Box(500,350,50,50);


polygon=Bodies.circle(200,200,500)

World.add(world,polygon);
ellipseMode(RADIUS)
imageMode(CENTER)
image(polygon.position.x,polygon.position.y,40,40)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  ground1.display()
  box1.display()
  box3.display()
  box2.display()
  box4.display()
  box5.display()
  box6.display()
  drawSprites();
 
}



