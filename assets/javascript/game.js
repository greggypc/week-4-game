// Crystals Game - 2nd Javascript

$(document).ready(function() {

var targetNumber = Math.floor(Math.random() * (120-19+1)) + 19;
var num1 = Math.floor(Math.random() * (12-1+1)) + 1;
var num2 = Math.floor(Math.random() * (12-1+1)) + 1;
var num3 = Math.floor(Math.random() * (12-1+1)) + 1;
var num4 = Math.floor(Math.random() * (12-1+1)) + 1;
var scoreCount = 0;
var wins = 0;
var losses = 0;
var gamesPlayed = 0;
var winPercentage = 0;

	
	function initializeGame() {
	  $("#targetNumberHolder").html("<h1>" + targetNumber + "</h1>");
	  $("#totalWinsHolder").html("<h1>" + "Wins " + wins + "</h1>");
	  $("#totalLossesHolder").html("<h1>" + "Losses " + losses + "</h1>");
	  $("#winPercentageHolder").html("<h1>" + "Win Rate " + winPercentage + "%" + "</h1>");
	  $("#scoreCountHolder").html("<h1>" + scoreCount + "</h1>");
	  $("#gameMessageHolder").html("<h2>" + "Try your luck!" + "<br>" + "Click the ?'s to make Score Count = " + targetNumber + "</h2>");
	};
		
	$(".crystalImg").click(function(){
	  if (this.id === "billy") {
		scoreCount += num1;
		$("#scoreCountHolder").html("<h1>" + scoreCount + "</h1>");
		} else if (this.id === "light") {
		scoreCount += num2;
		$("#scoreCountHolder").html("<h1>" + scoreCount + "</h1>");
		} else if (this.id === "gayle") {
		scoreCount += num3;
		$("#scoreCountHolder").html("<h1>" + scoreCount + "</h1>");
		} else if (this.id === "pepsi") {
		scoreCount += num4;
		$("#scoreCountHolder").html("<h1>" + scoreCount + "</h1>");
		} 
		gameResults();
	});  //end click function
				
	function gameResults() {
	  if (scoreCount === targetNumber) {
		winGame();
	  }else if (scoreCount >= targetNumber) {
	    loseGame();
	  }
	};

	function winGame() {
	  $("#gameMessageHolder").html("<h2>" + "You won with " + scoreCount + "! " + "<br>" + "Play again!" + "</h2>");
	  wins++;
	  $("#totalWinsHolder").html("<h1>" + "Wins " + wins + "</h1>");
	  gamesPlayed++;
	  if (wins !== 0 && gamesPlayed === 0) {
	    winPercentage = 100;
	    }else if (wins === 0) {
	    winPercentage = 0;
	    }else {
	    winPercentage = Math.round((wins / gamesPlayed) * 100);
	    }
	  $("#winPercentageHolder").html("<h1>" + "Win Rate " + winPercentage + "%" + "</h1>");
	  resetGame();
	};

	function loseGame() {
	  $("#gameMessageHolder").html("<h2>" + "You lost with " + scoreCount + "! " + "<br>" + "Play again!" + "</h2>");
	  losses++;
	  $("#totalLossesHolder").html("<h1>" + "Losses " + losses + "</h1>");
	  gamesPlayed++;
	  if (wins !== 0 && gamesPlayed === 0) {
	    winPercentage = 100;
	    }else if (wins === 0) {
	    winPercentage = 0;
	    }else {
	    winPercentage = Math.round((wins / gamesPlayed) * 100);
	    }
	  $("#winPercentageHolder").html("<h1>" + "Win Rate " + winPercentage + "%" + "</h1>");
	  resetGame();
	};

	function resetGame() {
	  scoreCount = 0;
	  $("#scoreCountHolder").html("<h1>" + scoreCount + "</h1>");
	  targetNumber = 18 + Math.floor(Math.random() * 101);
	  $("#targetNumberHolder").html("<h1>" + targetNumber + "</h1>");
	  num1 = Math.floor(Math.random() * (12-1+1)) + 1;
	  num2 = Math.floor(Math.random() * (12-1+1)) + 1;
	  num3 = Math.floor(Math.random() * (12-1+1)) + 1;
	  num4 = Math.floor(Math.random() * (12-1+1)) + 1;
	};

initializeGame();

}); //end document.ready

