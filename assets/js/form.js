class Form{
constructor(){
    this.title = createElement("h1");
    this.input = createInput("Name");
this.playButton = createButton("play")
this.greeting = createElement("h2")
}
hide(){
this.input.hide()
this.playButton.hide()
this.title.hide()
this.greeting.hide()
}
 display(){
     this.title.html("Zombie Shooter")
     this.title.position (windowWidth/2 -400, 100)
     this.title.style("font-size","70px")
     this.title.style("color","red")
     this.input.position(windowWidth/2 - 150, windowHeight/2 -50)
     this.playButton.position(windowWidth/2 -120, windowHeight/2 -20)
     this.playButton.style("width","150px")
     this.playButton.style("height","50px")
     this.playButton.style("background","lightblue")

     this.playButton.mousePressed(()=>{
         this.input.hide()
         this.playButton.hide()
         player.name = this.input.value()
         playerCount =playerCount + 1
         player.index = playerCount
player.update()
player.updatePlayerCount(playerCount)
this.greeting.html("hello  " + player.name)
this.greeting.position(windowWidth/2 -250, windowHeight/2 -100)
this.greeting.style("font-size","100px")
this.greeting.style("color","green")

     })
 }
}