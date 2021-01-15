const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero, monster;

function preload(){
  Bg = loadImage("BG.jpg");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1200,600);

  ground = new Ground(650,height-5);

  b1 = new Box(550,590);
  b2 = new Box(600,590);
  b3 = new Box(650,590);
  b4 = new Box(700,590);
  b5 = new Box(750,590);
  b6 = new Box(800,590);
  b7 = new Box(850,590);
  b8 = new Box(900,590);

  b9 = new Box(600,540);
  b10 = new Box(650,540);
  b11 = new Box(700,540);
  b12 = new Box(750,540);
  b13 = new Box(800,540);
  b14 = new Box(850,540);
  
  b15 = new Box(650,490);
  b16 = new Box(700,490);
  b17 = new Box(750,490);
  b18 = new Box(800,490);

  b19 = new Box(700,440);
  b20 = new Box(750,440);

  b21 = new Box(725,390);

  //b22 = new Box(450,240);
  //b23 = new Box(450,180);
  //b24 = new Box(450,120); 

  hero = new Hero(1100,300);

  monster = new Monster(280,350);

  sling = new Sling(hero.body, {x: 900, y: 0}); 
}

function draw() {
  Engine.update(engine);
  background(Bg);

  ground.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();

  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();

  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  //b22.display();
  //b23.display();
  //b24.display();

  hero.display();

  monster.display();

  sling.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}