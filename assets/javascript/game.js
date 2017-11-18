// Crystals Game - 2nd Javascript

//Pseudo
//set 4 crystal buttons to a random number value between 1 - 12- to remain constant until new game begins - <Restart Game>
//display random target number b/t 19 - 120 to user
//add hidden number value to scoreCount at each click.
//if scoreCount > targetNumber - you lose++ - game restarts
//if scoreCount === targetNumber - you win++ - game restarts

//var randomNum = Math.floor(Math.random() * (12-1+1)) + 1;

//button Restart Game resets wins/losses and creates random set of values for 4 crystals to begin again
var targetNumber = Math.floor(Math.random() * (120-19+1)) + 19;
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
			$("#totalLosses").html("<h1>" + "Losses " + losses + "</h1>");
			$("#scoreCount").html("<h1>" + "Score count is " + scoreCount + "</h1>");
		};

 		function clickToPlay() {
	 		layoutGame();
			$("#billy").on("click", function() {
			    scoreCount += num1;
			    $("#scoreCount").html("<h1>" + "Score count is " + scoreCount + "</h1>");
			    console.log("billy button clicked");
			    gameResults();
			    });
			   
			

			$("#light").on("click", function() {
			    scoreCount += num2;
			    $("#scoreCount").html("<h1>" + "Score count is " + scoreCount + "</h1>");
			     console.log("light button clicked");
			     gameResults();
			
			});

			$("#gayle").on("click", function() {
			    scoreCount += num3;
			    $("#scoreCount").html("<h1>" + "Score count is " + scoreCount + "</h1>");
			    console.log("gayle button clicked");
			    gameResults();
			   
			    
			});

			$("#pepsi").on("click", function() {
			    scoreCount += num4;
			    $("#scoreCount").html("<h1>" + "Score count is " + scoreCount + "</h1>");
			    console.log("pepsi button clicked");
			    gameResults();
		  
			});

		}; //end gameStart

	function gameResults() {
		if (scoreCount === targetNumber) {
	        winGame();
	    } else if (scoreCount > targetNumber) {
	        loseGame();
	    }
	};


	function winGame() {
	    wins++;
	    $("#totalWins").html("<h1>" + "Wins " + wins + "</h1>");
	    console.log("function winGame ran")
	    resetGame();
	    clickToPlay();

	  	};

	function loseGame() {
	    losses++;
	    $("#totalLosses").html("<h1>" + "Losses " + losses + "</h1>");
	    console.log("function loseGame ran")
	    resetGame();
	    clickToPlay();
	    };

	// function resetCrystals() {
		
	//     console.log("function resetCrystals ran");
	//     clickToPlay();
	// };

	function resetGame() {
	     var scoreCount = 0;
	    $("#scoreCount").html("<h1>" + "Score count is " + scoreCount + "</h1>");
	    var targetNumber = 18 + Math.floor(Math.random() * 101);
	    $("#targetNumber").html("<h1>" + targetNumber + "</h1>");
	    var num1 = 1 + Math.floor(Math.random() * 11);
	    var num2 = 1 + Math.floor(Math.random() * 11);
	    var num3 = 1 + Math.floor(Math.random() * 11);
	    var num4 = 1 + Math.floor(Math.random() * 11);
	    console.log("function resetGame");
	    
	    };
// }


clickToPlay();
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
