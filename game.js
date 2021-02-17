var  buttonColors = [ "red", "blue","green","yellow"]
var gamePattern = [];
var userClickedPattern= [];
var gameStart= false;
var level = 0;  



function checkAnswer(currentLevel){
    var i = 0
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
    {
        console.log("success")
    
        if(userClickedPattern.length  === gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }
    else{
        console.log("wrong")
    }
}


$(document).keypress(function(){
    if (!gameStart){
        gameStart = true;
        nextSequence(); 
    }
});


$(".btn").click(function () { 
    var userChosenColor= $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor)

    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1)
 });
 

function nextSequence(){
    userClickedPattern = [];
    
    level = level + 1;
    $("#level-title").text("Level "+ level);

    var randomNumber = Math.floor(Math.random()*4)
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour)
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
}

function playSound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();

}

function animatePress(currentColor){
   $("#" +  currentColor).addClass("pressed");
   
   setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
    
}
   