var bg,bgImg;
var player, player2, shooterImg, shooter_shooting;
var form, game;
var gameState, playerCount = 0;
var database;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
database = firebase.database()
  //adding the background image
//creating the player sprite

game = new Game()
game.getState();
game.start()
}

function draw() {
  background(0); 

if(playerCount === 2){
gameState = 1;
game.updateState(1);
}

if(gameState === 1){
  game.play();
}

  //moving the player up and down and making the game mobile compatible using touches




}
