const Engine = matter.Engine;
const World= matter.World;
const Bodies = matter.Bodies;
const Constraint = matter.Constraint;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 390, 800, 20);

  box1 = new Box(200, 200, 50, 50);

  
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  fill("cyan")
  box1.display();
    
  drawSprites();
}