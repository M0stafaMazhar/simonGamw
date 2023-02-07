var pattern = [];
var input = [];
var level = 0;



$(document).keydown(function(){
  patternCreator();
});



$(".btn").click(function(){
  btnAnimation(this.id);
  buttonSound(this.id);
  input.push(this.id);
  comparing(input.length-1);
});



function comparing(level){
  if(input[level] == pattern[level]){
    if(input.length == pattern.length){
    input = [];
    setTimeout(function(){
      patternCreator();
    } , 1000);
    }
  }
  else{
    gameOver();
  }
}



function patternCreator(){
  level++;
  $("h1").html("level " + level);
  var randomNum = Math.floor(Math.random()*4) + 1;
  var buttonId = String(randomNum);
  btnAnimation(buttonId);
  buttonSound(buttonId);
  pattern.push(buttonId);
}



function gameOver(){
  if(level <= 5){
    $("h1").html("Game Over, You ar a big noob hahaha");
  }
  else{
    $("h1").html("Game Over");
  }
  level = 0;
  var wrong = new Audio("sounds/wrong.mp3");
  wrong.play();
  $("body").toggleClass("game-over");
  setTimeout(function(){
    $("body").toggleClass("game-over");
  } , 250);
  pattern=[];
  input=[];
}



function btnAnimation(button){
  $("#"+button).toggleClass("pressed");
  setTimeout(function(){
  $("#"+button).toggleClass("pressed");
} , 150);
}



function buttonSound(pressedButton){
  switch(pressedButton){
    case "1":
    var greenSound = new Audio("sounds/green.mp3");
    greenSound.play();
    break

    case "2":
    var redSound = new Audio("sounds/red.mp3");
    redSound.play();
    break

    case "3":
    var yellowSound = new Audio("sounds/yellow.mp3");
    yellowSound.play();
    break

    case "4":
    var blueSound = new Audio("sounds/blue.mp3");
    blueSound.play();
    break
  }
}
