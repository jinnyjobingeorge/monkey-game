
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500,500)  
monkey=createSprite(80,315,20,20)
monkey.addAnimation("running",monkey_running)
monkey.scale=0.1
  
ground=createSprite(400,350,900,10)
ground.velocityX=-4
bananaG=new Group();
obstaclesG=new Group();  
}


function draw() {
background(220)
ground.x=ground.width/2 
if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12;
        
    }

if(bananaG.isTouching(monkey)){
bananaG.destroyEach();
}
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground)  
bananas();  
obstacles();
drawSprites();
  
stroke("black")  
textSize(20)  
fill("black")
survivalTime=Math.ceil(frameCount/frameRate())  
text("survival Time:"+survivalTime,100,50)  
}

function bananas(){
if(frameCount%80===0){  
banana=createSprite(470,150,20,20)  
banana.addImage("banana",bananaImage);  
banana.scale=0.1
banana.y=Math.round(random(120,200))
banana.velocityX=-4
banana.lifetime=110
bananaG.add(banana)
}
}  
  
function obstacles(){
if(frameCount%300===0){
obstacle=createSprite(250,310,20,20)  
obstacle.addImage("obstacle",obstacleImage)  
obstacle.scale=0.2 
obstacle.velocityX=-4  
obstacle.lifetime=110
obstaclesG.add(obstacle)
}  
}