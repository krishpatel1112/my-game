var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var topWall, ground, leftWall, rightWall;
var player, playerImg, playerSwitchImg;
var house, houseImg;
var chaser, chaserGroup, chaserImg;
var deaths = 0;
var speedBoost, speedBoostGroup, speedBoostImg;
var shield, shieldGroup,  shieldImg;


function preload(){
  playerImg = loadImage("assets/player1.png");
  playerSwitchImg = loadImage("assets/image.png");
  houseImg = loadImage("assets/house.png");
  chaserImg = loadImage("assets/person.png");
  speedBoostImg = loadImage("assets/speed_boost.png");
  shieldImg = loadImage("assets/invincibility.png");
}

function setup(){
createCanvas(800, 800);
  //create player
player = createSprite(50, 460, 10, 10);
player.addImage("player", playerImg);
player.addImage("playerSwitch", playerSwitchImg);
player.scale = 0.35;
//create house
house = createSprite(720, 460, 10, 10);
house.addImage("house", houseImg);
house.scale = 0.1
//create chaser
chaserGroup = createGroup();
shieldGroup = createGroup();
speedBoostGroup = createGroup();


leftWall = createSprite(0, 400, 10, 800);
rightWall = createSprite(800, 400, 10, 800);
topWall = createSprite(400, 0, 800, 10);
ground = createSprite(400, 800, 800, 10);
wall1 = createSprite(250, 250, 10, 290);
wall2 = createSprite(500, 75, 10, 450);
//wall3 = createSprite(450, 580, 10, 120);
wall4 = createSprite(130, 525, 750, 10);
wall5 = createSprite(375, 324, 10, 400);
wall6 = createSprite(125, 390, 260, 10);
wall7 = createSprite(400, 660, 480, 10);
wall8 = createSprite(635, 480, 10, 350);
wall9 = createSprite(645, 60, 10, 200);
wall10 = createSprite(750, 400, 220, 10);

}
function draw(){
background("white");
textSize(20);
fill("red");
text("Deaths: "+deaths, 75, 23);

text("x:"+mouseX+" y: "+ mouseY, 300, 20);
if(keyIsDown(RIGHT_ARROW)){
    player.x += 5;
    player.changeImage("player");
}
if(keyIsDown(UP_ARROW)){
    player.y -= 5;
}
if(keyIsDown(DOWN_ARROW)){
    player.y += 5;
}
if(keyIsDown(LEFT_ARROW)){
    player.x -= 5;
    player.changeImage("playerSwitch");
}
//spawnChaser();
spawnSpeedBoost();
spawnShield();
if(chaserGroup.isTouching(player)){
    player.x = 50;
    player.y = 460;
}

chaserGroup.bounceOff(topWall);
chaserGroup.bounceOff(rightWall);
chaserGroup.bounceOff(leftWall);
chaserGroup.bounceOff(ground);
if(player.isTouching(leftWall)||
player.isTouching(rightWall)||player.isTouching(topWall)||player.isTouching(ground)||
player.isTouching(wall1)||player.isTouching(wall2)||player.isTouching(wall4)
||player.isTouching(wall5)||player.isTouching(wall6)||player.isTouching(wall7)||
player.isTouching(wall8)||player.isTouching(wall9)||player.isTouching(wall10)||player.isTouching(chaserGroup)){
    player.x = 50;
    player.y = 460;
    deaths += 1;
}
if(player.isTouching(house)){
    textSize(100);
    fill("Blue");
    text("You Won!!!", 150, 350);
    
}



drawSprites();
}
function spawnChaser(){
    if (frameCount % 60 === 0) {
        chaser = createSprite(Math.floor(Math.random() * 800), Math.floor(Math.random() * 800), 10, 10);
        chaser.addImage("chaser", chaserImg);
        chaser.velocityX = Math.floor(Math.random() * 11);
        chaser.velocityY = Math.floor(Math.random() * 11);
        chaser.scale = 0.10;
       chaser.y = Math.round(random(10,800));
       chaser.x = Math.round(random(10,800));
 
        //assign lifetime to the variable
       chaser.lifetime = 134;

       //adding cloud to the group
      chaserGroup.add(chaser);
       } 

}
function spawnSpeedBoost(){
    if (frameCount % 200 === 0) {
        speedBoost = createSprite(Math.floor(Math.random() * 800), Math.floor(Math.random() * 800), 10, 10);
        speedBoost.addImage("speedBoost", speedBoostImg);
        speedBoost.scale = 0.30;
       speedBoost.y = Math.round(random(10,800));
       speedBoost.x = Math.round(random(10,800));
 
        //assign lifetime to the variable
       speedBoost.lifetime = 250;

       //adding cloud to the group
      speedBoostGroup.add(speedBoost);
       } 

}
function spawnShield(){
    if (frameCount % 200 === 0) {
        shield = createSprite(Math.floor(Math.random() * 800), Math.floor(Math.random() * 800), 10, 10);
        shield.addImage("shield", shieldImg);
        shield.scale = 0.30;
       shield.y = Math.round(random(10,800));
       shield.x = Math.round(random(10,800));
 
        //assign lifetime to the variable
       shield.lifetime = 250;

       //adding cloud to the group
      shieldGroup.add(shield);
       } 

}
