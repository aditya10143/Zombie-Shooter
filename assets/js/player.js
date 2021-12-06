class Player{
    constructor(){
        this.name = null
        this.index = null
        this.distance = 0

    }
    getPlayerCount(){
        playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val()
        })
            } 
            updatePlayerCount(count){
                database.ref("/").update({
                    playerCount:count 
                })
                    }
                    update(){
                        var playerIndex = "players/player" + this.index
                        database.ref(playerIndex).set ({
                            name:this.name,
                            distance:this.distance

                        })
                    }
                }