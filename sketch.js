
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var end = 0;
var play =1;
var start = 1;
var GameOver;
var space;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  GameOver = loadImage("giphy_s.gif")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 space = loadImage("7623872_0.jpg")
}



function setup() {
 createCanvas(600,600) 
ground = createSprite(300,530,600,10);
monkey= createSprite(50,500,50,50)
monkey.addAnimation("running",monkey_running)  
monkey.scale=0.1;
FoodGroup=new Group();
obstacleGroup=new Group();  
score = 10;
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
 yes = createSprite(300,300,400,4)  
    yes.addImage("start",space)
 yes.scale=0.5   
yes.lifetime=100;

}

function draw() {
background("white")
ground.velocityX=-7  
if(ground.x>0){
 ground.x= ground.width/2;
}
text("lifetime: "+score,300,100);
  if(frameCount%60===0){
  yes.destroy();
} 
 
 
   
     
if(play){
   if(FoodGroup.isTouching(monkey)){
   score = score+5; 
 FoodGroup.destroyEach();   
 } 
  if(keyDown("space")&& monkey.y > 475){
  monkey.velocityY=-10;             
  }
  monkey.velocityY = monkey.velocityY + 0.3;
   if(frameCount%60===0){
    score=score-1;  
      } 
    
  
  if(monkey.isTouching(obstacleGroup)){
    score = score-6; 
     obstacleGroup.destroyEach();
     } 
   }
  if((score===0)|| score<0) { 
    play=end; 
    monkey.setVelocity=0;
      FoodGroup.setVelocityXEach(0);
       obstacleGroup.setVelocityXEach(0);     
  monkey.visible=false;
  over = createSprite(300,300,700,700);
over.addImage("youlose", GameOver); 
over.scale=1.6;
  }
  
  spawnBananas(); 

  spawnObstacles();
monkey.collide(ground);
  drawSprites();
}
function spawnObstacles(){
if(play){
  if(frameCount%95===0){
  obstacles=createSprite(600,490,20,20) 
 obstacles.velocityX=-6; 
obstacles.addImage(obstacleImage);
obstacles.scale=0.2;
obstacles.lifetime=200;
obstacleGroup.add(obstacles)
}  
}
}

function spawnBananas(){
 if(play){
  if(frameCount%80===0) {
  banans = createSprite(600,450,20,20)
 banans.y=Math.round(random(220,400)) 
   banans.velocityX=-6; 
banans.addImage(bananaImage)
banans.scale=0.1;
 banans.lifetime=200;
FoodGroup.add(banans)   
 }
}
}



