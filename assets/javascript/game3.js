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

		function layoutGame() {
			$("#targetNumberHolder").html("<h1>" + targetNumber + "</h1>");
			$("#totalWinsHolder").html("<h1>" + "Wins " + wins + "</h1>");
			$("#totalLossesHolder").html("<h1>" + "Losses " + losses + "</h1>");
			$("#scoreCountHolder").html("<h1>" + "Score count is " + scoreCount + "</h1>");
		};


		function clickToPlay() {
	 		console.log("scoreCount " + scoreCount);
	 		console.log("targetNumber " + targetNumber);
			$(".crystalImg").click(function(){
				if (this.id == "billy") {
					console.log("num1 = " + num1)
			    scoreCount += num1;
			    	console.log("num1 after should be same = " + num1)
			    $("#scoreCountHolder").html("<h1>" + "Score count is " + scoreCount + "</h1>");
			    console.log("billy button clicked -1");
			    console.log("scoreCount: " + scoreCount + " targetNumber: " + targetNumber);
			    } else if (this.id == "light") {
			    	console.log("num2 = " + num2)
			      scoreCount += num2;
			      console.log("num2 after should be same = " + num2)
			      $("#scoreCountHolder").html("<h1>" + "Score count is " + scoreCount + "</h1>");
			      console.log("light button clicked -2");
			      console.log("scoreCount: " + scoreCount + " targetNumber: " + targetNumber);
			    } else if (this.id == "gayle") {
			    	console.log("num3 = " + num3)
			      scoreCount += num3;
			      console.log("num3 after should be same = " + num3)
			      $("#scoreCountHolder").html("<h1>" + "Score count is " + scoreCount + "</h1>");
			      console.log("gayle button clicked -3");
			      console.log("scoreCount: " + scoreCount + " targetNumber: " + targetNumber);
			    } else if (this.id == "pepsi") {
			    	console.log("num4 = " + num4)
			      scoreCount += num4;
			      console.log("num4 after should be same = " + num4)
			      $("#scoreCountHolder").html("<h1>" + "Score count is " + scoreCount + "</h1>");
			      console.log("pepsi button clicked -4");
			      console.log("scoreCount: " + scoreCount + " targetNumber: " + targetNumber);
			    } gameResults();
			    
			    });

			}; //end clickToPlay

		function gameResults() {
			console.log("scoreCount " + scoreCount);
		if (scoreCount === targetNumber) {
			console.log("about to run winGame function");
			console.log("win in function gameResults -- scoreCount: " + scoreCount + " targetNumber: " + targetNumber);
	        winGame();
	    }else if (scoreCount >= targetNumber) {
	    	console.log("scoreCount " + scoreCount);
	    	console.log("about to run loseGame function");
	    	console.log("loss in function gameResults -- scoreCount: " + scoreCount + " targetNumber: " + targetNumber);
	        loseGame();
	    }else {
	    	return;
	    }
		};


		function winGame() {
		console.log("function winGame running");
		console.log("scoreCount " + scoreCount);

	    wins++;
	    $("#totalWinsHolder").html("<h1>" + "Wins " + wins + "</h1>");
	    console.log("inside winGame function gameResults -- scoreCount: " + scoreCount + " targetNumber: " + targetNumber);
	    resetGame();
	    console.log("function winGame finished - restart");
	   // clickToPlay();

	  	};

	function loseGame() {
		console.log("function loseGame running");
		console.log("scoreCount " + scoreCount);
		losses++;
	    $("#totalLossesHolder").html("<h1>" + "Losses " + losses + "</h1>");
	    console.log("inside loseGame function gameResults -- scoreCount: " + scoreCount + " targetNumber: " + targetNumber);
	    resetGame();
	    console.log("function loseGame finished - restart");
	    //clickToPlay();
	    };

	function resetGame() {
		console.log("function resetGame running");
		console.log("inside resetGame function - B4 scoreCountset to 0 -- gameResults -- scoreCount: " + scoreCount + " targetNumber: " + targetNumber);
		scoreCount = 0;
		$("#scoreCountHolder").html("<h1>" + "game ended - Score count is " + scoreCount + "</h1>");
	    targetNumber = 18 + Math.floor(Math.random() * 101);
	    $("#targetNumberHolder").html("<h1>" + targetNumber + "</h1>");
	    var num1 = Math.floor(Math.random() * (12-1+1)) + 1;
	    var num2 = Math.floor(Math.random() * (12-1+1)) + 1;
	    var num3 = Math.floor(Math.random() * (12-1+1)) + 1;
	    var num4 = Math.floor(Math.random() * (12-1+1)) + 1;
	    console.log("inside resetGame function - AFTER scoreCountset to 0 -- gameResults -- scoreCount: " + scoreCount + " targetNumber: " + targetNumber);
		//console.log(num1 + " " + num2 + " " + num3 + " " num4);
	    console.log("function resetGame ran");
	    //return;
	    clickToPlay();
	    };


layoutGame();
clickToPlay();
}); //end document.ready

