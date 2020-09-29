class Game{
    constructor(){

    }
       getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val()
                player.getCount();
            }
            form=new Form()
            form.display()
        }
        
        athlete1=createSprite(100,200);
        athlete1.addAnimation("ath1",ath1_runningimg);
        athlete2=createSprite(100,400);
        athlete2.addAnimation("ath2",ath2_runningimg);
        athlete3=createSprite(100,600);
        athlete3.addAnimation("ath3",ath3_runningimg);
        athlete4=createSprite(100,800);
        athlete4.addAnimation("ath4",ath4_runningimg);    
        athlete1.addAnimation("a1",ath_jumpingimg)
        athlete2.addAnimation("a2",ath_jumpingimg)
        athlete3.addAnimation("a3",ath_jumpingimg)
        athlete4.addAnimation("a4",ath_jumpingimg)
        athletes=[athlete1,athlete2,athlete3,athlete4];
    } 
    play(){
        form.hide();
        Player.getPlayerInfo();     
        drawSprites();  
        if(allPlayers!==undefined){
            var athleteindex=0;
            //x and y positions of athletes
            var x;
            var y=100;     
            for(var plr in allPlayers){
                athleteindex=athleteindex+1;
                y=y+80;
                x=allPlayers[plr].distance
                athletes[athleteindex-1].x=x;
                athletes[athleteindex-1].y=y;
                console.log(athletes)
                if(keyIsDown(UP_ARROW)){
                    athletes[athleteindex-1].changeAnimation(athleteindex,ath_jumpingimg)
                    //athletes[athleteindex-1].scale=3
                }
                
            }

            
            
            
        }

        if(keyIsDown(RIGHT_ARROW)&&player.index!==null){
            player.distance+=10
            player.update()
        }
        
        
        
    }

}
/* athlete1.changeAnimation("ath1",ath1_runningimg)
            athlete2.changeAnimation("ath2",ath2_runningimg)
            athlete3.changeAnimation("ath3",ath3_runningimg)
            athlete4.changeAnimation("ath4",ath4_runningimg)*/