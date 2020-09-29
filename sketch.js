
var database,canvas;
var player;
var form;
var playerCount,gameState=0
var game
var distance=0
var athlete1,athlete2,athlete3,athlete4;
var athletes;
var ath1_runningimg,ath_jumpingimg,ath2_runningimg,ath3_runningimg,ath4_runningimg;
var allPlayers

var hurdleGroup1=new Group(),hurdleGroup2=new Group(),hurdleGroup3=new Group(),hurdleGroup4=new Group();            
var hurdlelane1,hurdlelane2,hurdlelane3,hurdlelane4


function preload(){
    ath1_runningimg=loadAnimation("images/runstep1.png","images/runstep2.png","images/runstep3.png","images/runstep4.png","images/runstep5.png")
    ath2_runningimg=loadAnimation("images/runstep1.png","images/runstep2.png","images/runstep3.png","images/runstep4.png","images/runstep5.png")
    ath3_runningimg=loadAnimation("images/runstep1.png","images/runstep2.png","images/runstep3.png","images/runstep4.png","images/runstep5.png")
    ath4_runningimg=loadAnimation("images/runstep1.png","images/runstep2.png","images/runstep3.png","images/runstep4.png","images/runstep5.png")
    ath_jumpingimg=loadAnimation("images/jumpstep1.png","images/jumpstep2.png","images/jumpstep3.png","images/jumpstep4.png","images/jumpstep5.png","images/jumpstep6.png","images/jumpstep7.png")
}

function setup(){
    canvas=createCanvas(displayWidth,displayHeight);
    database=firebase.database();

   
    game=new Game();
    game.getState();
    game.start();
    
}
function draw(){
    //background(rgb(0,200,100));
   if(playerCount===4){
    game.updateState(1)
   }
   if(gameState===1){
    clear();
    game.play();
   }
   //console.log(athletes)
   
}   

