const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgimg;
var snow;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  snow = new Snow(50,50,100,100);
  snow1 = new Snow(100,50,100,100);
  snow2 = new Snow(150,50,100,100);
  snow3 = new Snow(200,50,100,100);
  snow4 = new Snow(250,50,100,100);

}
function preload(){
  bgimg = loadImage("snow2.jpg")
}

function draw() {
  background(bgimg); 

  Engine.update(engine);
  
  snow.display(); 
  snow1.display(); 
  snow2.display(); 
  snow3.display(); 
  snow4.display(); 

  drawSprites();
}