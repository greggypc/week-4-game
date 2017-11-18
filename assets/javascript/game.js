// Crystals Game - 2nd Javascript

//Pseudo
//set 4 crystal buttons to a random number value between 1 - 12- to remain constant until new game begins - <Restart Game>
//display random target number b/t 19 - 120 to user
//add hidden number value to scoreCount at each click.
//if scoreCount > targetNumber - you lose++ - game restarts
//if scoreCount === targetNumber - you win++ - game restarts

//button Restart Game resets wins/losses and creates random set of values for 4 crystals to begin again


// (document).ready(function() {

function gameStart() {
var targetNumber = 18 + Math.floor(Math.random() * 101);
var num1 = 1 + Math.floor(Math.random() * 11);
var num2 = 1 + Math.floor(Math.random() * 11);
var num3 = 1 + Math.floor(Math.random() * 11);
var num4 = 1 + Math.floor(Math.random() * 11);
var scoreCount = 0;
var wins = 0;
var losses = 0;
$("#targetNumber").html("<h1>" + targetNumber + "</h1>");
$("#totalWins").html("<h1>" + "Wins " + wins + "</h1>");
$("#totalLosses").html("<h1>" + "Loses " + losses + "</h1>");
$("#scoreCount").html(scoreCount);

// }

$("#billy").on("click", function() {
    scoreCount += num1;
    $("#scoreCount").html(scoreCount);
    if (scoreCount === targetNumber) {
        winner();
    } else if (scoreCount > targetNumber) {
        loser();
    }
});

$("#light").on("click", function() {
    scoreCount += num2;
    $("#scoreCount").html(scoreCount);
    if (scoreCount === targetNumber) {
        winner();
    } else if (scoreCount > targetNumber) {
        loser();
    }
});

$("#gayle").on("click", function() {
    scoreCount += num3;
    $("#scoreCount").html(scoreCount);
    if (scoreCount === targetNumber) {
        winner();
    } else if (scoreCount > targetNumber) {
        loser();
    }
});

$("#pepsi").on("click", function() {
    scoreCount += num4;
    $("#scoreCount").html(scoreCount);
    if (scoreCount === targetNumber) {
        winner();
    } else if (scoreCount > targetNumber) {
        loser();
    }
});


function winner() {
    wins++;
    $("#totalWins").html("<h1>" + "Wins " + wins + "</h1>");
    resetGame();

}

function loser() {
    losses++;
    $("#totalLosses").html("<h1>" + "Losses " + losses + "</h1>");
    resetGame();
}



function resetGame() {
    var targetNumber = 18 + Math.floor(Math.random() * 101);
    $("#targetNumber").html("<h1>" + targetNumber + "</h1>");
    var num1 = 1 + Math.floor(Math.random() * 11);
    var num2 = 1 + Math.floor(Math.random() * 11);
    var num3 = 1 + Math.floor(Math.random() * 11);
    var num4 = 1 + Math.floor(Math.random() * 11);
    var scoreCount = 0;
    $("#scoreCount").html(scoreCount);
    gameStart();
}
}

// });