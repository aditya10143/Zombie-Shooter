class Game{
    constructor(){

    }getState(){
var gamestateRef = database.ref("gameState");
gamestateRef.on("value",function(data){
    gameState = data.val()
})
    }
    updateState(state){
database.ref("/").update({
    gameState:state 
})
    }
    start(){
        if(gameState === 0){

        
player = new Player()
player.getPlayerCount();
form = new Form()
form.display()
        }
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
player.addImage(shooterImg)

player2 = createSprite(displayWidth-1150, displayHeight-150, 50, 50);
player2.addImage(shooterImg)
    }
    play(){
form.hide();
image(bgImg, width/2, height/2, width, height)
if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  
  if(keyDown("DOWN_ARROW")||touches.length>0){
   player.y = player.y+30
  }
  
  //release bullets and change the image of shooter to shooting position when space is pressed
  if(keyWentDown("space")){
    player.addImage(shooter_shooting)
  }
  
  //player goes back to original standing image once we stop pressing the space bar
  else if(keyWentUp("space")){
    player.addImage(shooterImg)
  }
  
  drawSprites();

    }
}