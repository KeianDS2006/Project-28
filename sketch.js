
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var boy, boyImg, treeImg;
var stone, mango1, mango2, mango3, mango4, mango5;
var slingshot, ground, render;
var gameState="onSling";


function preload(){
    boyImg=loadImage("boy.png");
    treeImg=loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);
	boy=createSprite(300,600,50,200);
	boy.addImage(boyImg);
    boy.scale=0.1;

	engine = Engine.create();
    world = engine.world;
    
    stone=new Stone(250, 550, 10);
    mango1=new Mango(450,430,20);
    mango2=new Mango(575,430,20);
    mango3=new Mango(650,430,20);
    mango4=new Mango(725,420,20);
    mango5=new Mango(800,430,20);
    tree=createSprite(600,420,400, 500);
    tree.addImage(treeImg);
    tree.scale=0.4;
    
    slingshot=new Slingshot(stone.body, {x:250, y:550});
    ground= new Ground(400,700,800,100);
    Engine.run(engine);
}


function draw() {
    rectMode(CENTER);
    background("cyan");

    
    stone.display();
    
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    ground.display();  
    slingshot.display();
    collisionDetection(stone, mango1);
    collisionDetection(stone, mango2);
    collisionDetection(stone, mango3);
    collisionDetection(stone, mango4);
    collisionDetection(stone, mango5);
    drawSprites();
    
}

function mouseDragged(){
    if(gameState="onSling"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched"
}

function collisionDetection(lstone, lmango){
    mangoBodyPosition=lmango.body.position;
    stoneBodyPosition=lstone.body.position;
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if(distance<=lmango.radius+lstone.radius){
        Matter.Body.setStatic(lmango.body, false);
    }
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(stone.body, {x:250, y:550});
        slingshot.attach(stone.body);
    }
}