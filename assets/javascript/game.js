    var finalScore= 0; 
    var wins= 0;
    var losses = 0;

$( document ).ready(function() {
    var Random=Math.floor(Math.random()*101+19)
    $("#value").html("<h1>" + Random + "</h1>");
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    
$("#wins").text(wins);
$("#losses").text(losses);
  

function reset() {
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $("#value").html("<h1>" + Random + "</h1>");
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    finalScore= 0;
    $(".score").text(finalScore);
} 

function win() {
    wins++; 
    $("#wins").text(wins);
    reset();
}

function lose() {
    losses++;
    $("#losses").text(losses);
    reset()
}

$("#blue").on("click", function() {
    finalScore = finalScore + num1;
    console.log("New finalScore= " + finalScore);
    $(".score").html("<h1>" + finalScore + "</h1>"); 
        if (finalScore == Random) {
        win();
        }
        else if ( finalScore > Random) {
        lose();
        }   
})  

$("#purple").on("click", function() {
    finalScore = finalScore + num2;
    console.log("New finalScore= " + finalScore);
    $(".score").html("<h1>" + finalScore + "</h1>");
        if (finalScore == Random) {
        win();
        }
        else if ( finalScore > Random) {
        lose();
        } 
})  

$("#red").on("click", function() {
    finalScore = finalScore + num3;
    console.log("New finalScore= " + finalScore);
    $(".score").html("<h1>" + finalScore + "</h1>");
        if (finalScore == Random) {
        win();
        }
        else if ( finalScore > Random) {
        lose();
        } 
})  

$("#yellow").on("click", function() {
    finalScore = finalScore + num4;
    console.log("New finalScore= " + finalScore);
    $(".score").html("<h1>" + finalScore + "</h1>");
    
        if (finalScore == Random) {
        win();
        }
        else if ( finalScore > Random) {
        lose();
        }
});   
}); 