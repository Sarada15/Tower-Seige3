const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand;
var block1,block2,block3,block5,block5;
var block6,block7,block8,block9;
var block10,block11,block12;
var block13,block14;
var block15;
var sling;
var polygon;

var score = 0;

function preload () {

}


function setup () {
  createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;

    //create objects here
        ground = new Ground(400,698,800,2);
        stand = new Ground(640,498,130,4);

        block1 = new Block(600,480,20,30);
        block2 = new Block(620,480,20,30);
        block3 = new Block(640,480,20,30);
        block4 = new Block(660,480,20,30);
        block5 = new Block(680,480,20,30);
        
        block6 = new Block(610,450,20,30);
        block7 = new Block(630,450,20,30);
        block8 = new Block(650,450,20,30);
        block9 = new Block(670,450,20,30);
        
        block10 = new Block(620,420,20,30);
        block11 = new Block(640,420,20,30);
        block12 = new Block(660,420,20,30);
        
        block13 = new Block(630,390,20,30);
        block14 = new Block(650,390,20,30);

        block15 = new Block(640,360,20,30);

        
        polygon = new Polygon(80,200,20);
        sling = new SlingShot(polygon.body,{x:150,y:500});




    Engine.run(engine);
}


function draw () {  
  rectMode(CENTER);  
    
   background(255,255,255);  
   Engine.update(engine);

    //display score
        textSize(25);
        text("Score: " + score, 670,40);

    //display objects here
        ground.display();
        stand.display();
        polygon.display();

    fill(135,135,135);
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();

    fill(178,159,227);
        block6.display();
        block7.display();
        block8.display();
        block9.display();

    fill(245,125,125);    
        block10.display();
        block11.display();
        block12.display();

    fill(103,201,146);    
        block13.display();
        block14.display();
        
    fill(121,212,224);
        block15.display();

    fill("black");
    sling.display();    

    //imageMode(CENTER);
    //image(polygonImg,polygon.position.x,polygon.position.y,40,40);


  drawSprites();
}

function mouseDragged() {
	Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(polygon.body, {x:150, y:500});
		sling.attach(polygon.body);
	}
}
