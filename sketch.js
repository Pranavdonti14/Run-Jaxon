 var pathImg,boyImg,bombimg,coinimg,energyDrinkimg
var path,boy,rightboundary,leftboundary
function preload(){
  //pre-load images
pathImg = loadImage("path.png")
boyImg = loadAnimation("Runner-1.png", "Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
 path = createSprite(200,200);
 path.addImage(pathImg);
 path.velocityY = 4;
 path.scale = 1.2;

 boy = createSprite(180,340,30,30);
 boy.addAnimation("running", boyImg);
 boy.scale = 0.08;

 leftboundary = createSprite(0,0,100,800);
 leftboundary.visible = false;

rightboundary = createSprite(400,0,100,800)
rightboundary.visible = false;
}

function draw() {
  background(0);
  edges = createEdgeSprites()
  path.velocityY = 4
  boy.x = World.mouseX;

  if(path.y > 400 ){
  path.y = height/2;
  }
  
boy.collide(edges[3])
boy.collide(leftboundary)
boy.collide(rightboundary)
drawSprites()

}
