class Player{
    constructor(){
        this.name=null;
        this.index=0;
        this.distance=0;
       
    }
    getCount(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on("value",(data)=>{
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){  
        var playerIndex="athletes/athlete"+this.index;  
        database.ref(playerIndex).set({ 
            name:this.name,
            distance:this.distance
        })     
    };

    static getPlayerInfo(){
        var playerInforef=database.ref('athletes')
        playerInforef.on("value",(data)=>{
            allPlayers=data.val();
        })
    }
    
}