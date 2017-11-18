// Crystals Game - 2nd Javascript

//Pseudo
//set 4 crystal buttons to a random number value between 1 - 12- to remain constant until new game begins - <Restart Game>
//display random target number b/t 19 - 120 to user
//add hidden number value to scoreCount at each click.
//if scoreCount > targetNumber - you lose++ - game restarts
//if scoreCount === targetNumber - you win++ - game restarts

//button Restart Game resets wins/losses and creates random set of values for 4 crystals to begin again
var targetNumber = 18 + Math.floor(Math.random() * 101);
var num1 = 1 + Math.floor(Math.random() * 11);
var num2 = 1 + Math.floor(Math.random() * 11);
var num3 = 1 + Math.floor(Math.random() * 11);
var num4 = 1 + Math.floor(Math.random() * 11);
var scoreCount = 0;
var wins = 0;
var losses = 0;

$(document).ready(function() {




		function layoutGame() {
			$("#targetNumber").html("<h1>" + targetNumber + "</h1>");
			$("#totalWins").html("<h1>" + "Wins " + wins + "</h1>");
			$("#totalLosses").html("<h1>" + "Loses " + losses + "</h1>");
			$("#scoreCount").html("<h1>" + "Score count is " + scoreCount + "</h1>");
		}



 function gameStart() {
 		layoutGame();
		$("#billy").on("click", function() {
		    scoreCount += num1;
		    $("#scoreCount").html(scoreCount);
		    console.log("billy button clicked");
		    gameResults();
		    });
		   
		

		$("#light").on("click", function() {
		    scoreCount += num2;
		    $("#scoreCount").html(scoreCount);
		     console.log("light button clicked");
		     gameResults();
		
		});

		$("#gayle").on("click", function() {
		    scoreCount += num3;
		    $("#scoreCount").html(scoreCount);
		    console.log("gayle button clicked");
		    gameResults();
		   
		    
		});

		$("#pepsi").on("click", function() {
		    scoreCount += num4;
		    $("#scoreCount").html(scoreCount);
		    console.log("pepsi button clicked");
		    gameResults();
	  
		});

}; //end gameStart

function gameResults() {
	if (scoreCount === targetNumber) {
        winner();
    } else if (scoreCount > targetNumber) {
        loser();
    }
};


function winner() {
    wins++;
    $("#totalWins").html("<h1>" + "Wins " + wins + "</h1>");
    console.log("function winner ran")
    resetGame();
    

};

function loser() {
    losses++;
    $("#totalLosses").html("<h1>" + "Losses " + losses + "</h1>");
    console.log("function loser ran")
    resetGame();
    
};

function resetCrystals() {
	 var num1 = 1 + Math.floor(Math.random() * 11);
    var num2 = 1 + Math.floor(Math.random() * 11);
    var num3 = 1 + Math.floor(Math.random() * 11);
    var num4 = 1 + Math.floor(Math.random() * 11);
    console.log("function resetCrystals ran");
};

function resetGame() {
     var scoreCount = 0;
    $("#scoreCount").html(scoreCount);
    var targetNumber = 18 + Math.floor(Math.random() * 101);
    $("#targetNumber").html("<h1>" + targetNumber + "</h1>");
    console.log("function resetGame");
   
    resetCrystals();
    // gameStart();
    
};
// }


gameStart();
 });







//*******************************************************

//$("#billy").on("click", function() {
//     scoreCount += num1;
//     $("#scoreCount").html(scoreCount);
//    });

// $("#light").on("click", function() {
//     scoreCount += num2;
//     $("#scoreCount").html(scoreCount);
//    });

// $("#gayle").on("click", function() {
//     scoreCount += num3;
//     $("#scoreCount").html(scoreCount);
//    });

// $("#pepsi").on("click", function() {
//     scoreCount += num4;
//     $("#scoreCount").html(scoreCount);
//    });

// if (scoreCount === targetNumber) {
// 	 wins++;
// 	 $("#totalWins").html("<h1>" + "Wins " + wins + "</h1>");
// 	 resetGame();
// } else if (scoreCount > targetNumber) {
// 	 losses++;
//     $("#totalLosses").html("<h1>" + "Losses " + losses + "</h1>");
//     resetGame();
// }
