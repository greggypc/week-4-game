// Crystals Game - 2nd Javascript



$(document).ready(function() {

var targetNumber = Math.floor(Math.random() * (120-19+1)) + 19;
var num1 = 1 + Math.floor(Math.random() * 11);
var num2 = 1 + Math.floor(Math.random() * 11);
var num3 = 1 + Math.floor(Math.random() * 11);
var num4 = 1 + Math.floor(Math.random() * 11);
var scoreCount = 0;
var wins = 0;
var losses = 0;

		function layoutGame() {
			$("#targetNumber").html("<h1>" + targetNumber + "</h1>");
			$("#totalWins").html("<h1>" + "Wins " + wins + "</h1>");
			$("#totalLosses").html("<h1>" + "Losses " + losses + "</h1>");
			$("#scoreCount").html("<h1>" + "Score count is " + scoreCount + "</h1>");
		};


		function clickToPlay() {
	 		
			$(".crystalImg").click(function(){
				if (this.id == "billy") {
			    scoreCount += num1;
			    $("#scoreCount").html("<h1>" + "Score count is " + scoreCount + "</h1>");
			    console.log("billy button clicked -1");
			    } else if (this.id == "light") {
			      scoreCount += num2;
			      $("#scoreCount").html("<h1>" + "Score count is " + scoreCount + "</h1>");
			      console.log("light button clicked -2");
			    } else if (this.id == "gayle") {
			      scoreCount += num3;
			      $("#scoreCount").html("<h1>" + "Score count is " + scoreCount + "</h1>");
			      console.log("gayle button clicked -3");
			    } else if (this.id == "pepsi") {
			      scoreCount += num4;
			      $("#scoreCount").html("<h1>" + "Score count is " + scoreCount + "</h1>");
			      console.log("pepsi button clicked -4");
			    } gameResults();
			    
			    });

			}; //end clickToPlay

		function gameResults() {
		if (scoreCount === targetNumber) {
			console.log("about to run winGame function");
	        winGame();
	    } else if (scoreCount >= targetNumber) {
	    	console.log("about to run loseGame function");
	        loseGame();
	    }
		};


		function winGame() {
	    wins++;
	    $("#totalWins").html("<h1>" + "Wins " + wins + "</h1>");
	    console.log("function winGame ran");
	    resetGame();
	    clickToPlay();

	  	};

	function loseGame() {
		losses++;
	    $("#totalLosses").html("<h1>" + "Losses " + losses + "</h1>");
	    resetGame();
	    console.log("function loseGame ran");
	    clickToPlay();
	    };


layoutGame();
clickToPlay();
}); //end document.ready

