var fada, fada_
var starImg,bgImg;
var star, starBody;
var music
var back
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    back=loadImage("starNight.png")
    fada_=loadAnimation("fairyImage1.png","fairyImage2.png")
music=loadSound("JoyMusic.mp3")
    starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 800);

    //escrever código para tocar o som vozFada
    music.play()

    //criar sprite de fada e adicionar animação para fada
fada=createSprite(400,400)
fada.scale=0.2
fada.addAnimation("fada",fada_)
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	

}
function draw(){
background(back)
Engine.update(engine);
star.x=starBody.position.x
star.y=starBody.position.y
if (keyDown("s")){
    Matter.Body.setStatic(starBody,false) 
}
    if(star.y>400 && starBody.position.y>400){
        Matter.Body.setStatic(starBody,true) 
     }
     
if(keyDown("a")){
    fada.velocityX=-4
    
}
if(keyDown("d")){
    fada.velocityX=4
}

drawSprites()
}