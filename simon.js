var pattern = [];
var input = [];
var level = 0;
var gameOn = false;

$(document).keydown(function() {
  if (!gameOn) {
    $("#level-title").text("Level " + level);
    patternCreator();
    started = true;
  }
});

$(".btn").click(function(){
    btnAnimation(this.id);
    buttonSound(this.id);
    input.push(this.id);
  });
  check(input , pattern , level);






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


function patternCreator(){
  $("h1").html("level "+level)
  var btnNum = (Math.floor(Math.random()*4)+1);
    var x = String(btnNum);
    buttonSound(x);
    btnAnimation(x);
    pattern.push(x);
}

function check(input,pattern,level){
  if(input[level]==pattern[level]){
    if(input.length === pattern.length){
      level++;
      setTimeout(function(){
        patternCreator();
      },1000)
    }

  else{
    $("h1").html("game over nooob");
  }
}}
