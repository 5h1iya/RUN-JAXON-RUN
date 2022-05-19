var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var coin,coinImg;
//var coins = createGroup();

//coins.add(coin)

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;



//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);


//creating coins
//coin = createSprite(randomNumber(160,190),340,30,30);
//coin.scale=0.8;
//coin.addImage(coinImg);
//coin.spawnLineY = 25
//coin.spawnRateOfDescent = 1500







leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
 //leftBoundary.visible = true;
 //leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
 
 //boy.collide(coin)

  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
//coin.setLifetime(120)

//function coinTouch(boy,coin){
  //coin.remove()
//}

//coinTouch

  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/

  //if(boy.isTouching(coin)){
    //coinTouch
   //}

SpawnCoins();
  drawSprites();

  
}

function SpawnCoins(){
  if(frameCount%60 === 0){
    coin = createSprite(160,290,30,30);
    coin.addImage(coinImg);
    coin.x = Math.round(random(0,410));
    coin.lifetime = 30
    coin.scale=0.3;
    //coins.add(coin)
    //coin.velocityX = -3
    //if(boy.y = coin.y){
     // playSound()
   // }
  
  }
  
}