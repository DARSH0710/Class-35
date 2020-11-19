var playerCount, database;
var gameState=0,backgroundImage;
var form, player, game

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
game= new Game();
game.gameState();
game.start(); 
}

function draw(){
  
  
}
