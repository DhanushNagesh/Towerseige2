const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render=Matter.Render;
var engine, world;


var plat1, plat2, plat3
var ball
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20

var sling

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;


  plat1 = new Ground(70,320,100,20)
  plat2 = new Ground(400,300,200,20)
  plat3 = new Ground(650,230,200,20)
//row 1
  box1 = new Box(325,295,50,50)
  box2 = new Box(375,295,50,50)
  box3 = new Box(425,295,50,50)
  box4 = new Box(475,295,50,50)

//row 2
box5 = new Box(350,210,50,50)
box6 = new Box(400,210,50,50)
box7= new Box(450,210,50,50)

//row 3
box8 = new Box(375,150,50,50)
box9 = new Box(425,150,50,50)

box10 = new Box(400,110,50,50)

//stack2
//row 1
box11 = new Box(570,200,50,50)
box12 = new Box(620,200,50,50)
box13 = new Box(670,200,50,50)
box14 = new Box(720,200,50,50)

//row 2
box15 = new Box(595,140,50,50)
box16 = new Box(645,140,50,50)
box17= new Box(695,140,50,50)

//row 3
box18 = new Box(620,80,50,50)
box19 = new Box(670,80,50,50)

box20 = new Box(645,30,50,50)



  //ball = new Poly(50,300,20)

 ball1=Bodies.circle(50,200,20);
  World.add(world,ball1);
  sling=new SlingShot(this.ball1,{x:100,y:200});
  

}

function draw() {
  background(0); 
  Engine.update(engine);
     ellipseMode(RADIUS)
     ellipse(ball1.position.x,ball1.position.y,20,20)

  plat1.display();
  plat2.display();
  plat3.display();

  strokeWeight(2);
  stroke("brown");

  fill("skyblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  fill("pink");
  box5.display();
  box6.display();
  box7.display();

  fill("turquoise");
  box8.display();
  box9.display();
  box10.display();

  fill("skyblue");
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  fill("pink");
  box15.display();
  box16.display();
  box17.display();

  fill("turquoise");
  box18.display();
  box19.display();
  box20.display();
  
  sling.display();

  //ball.display();
 
  //drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball1, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(this.ball1);
  }

}