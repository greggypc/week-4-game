// Crystals Game - 2nd Javascript

//Pseudo
//set 4 crystal buttons to a random number value between 1 - 12- to remain constant until new game begins - <Restart Game>
//display random target number b/t 19 - 120 to user
//add hidden number value to scoreCount at each click.
//if scoreCount > targetNumber - you lose++ - game restarts
//if scoreCount === targetNumber - you win++ - game restarts

//button Restart Game resets wins/losses and creates random set of values for 4 crystals to begin again


 
  
  	  function layoutGame() {
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
      	$("#scoreCount").html("<h1>" + "Your total score: " + scoreCount + "</h1>");
  	  }
     
      function gameStart() {
      	

      	}

      function winner() {
      	if (scoreCount === targetNumber) {
      		wins++;
      		$("#totalWins").html("<h1>" + "Wins " + wins + "</h1>");
      		resetGame();
      	}
      }

       function loser() {
      	if (scoreCount > targetNumber) {
      		losses++;
      		$("#totalLosses").html("<h1>" + "Losses " + losses + "</h1>");
      		resetGame();
      	}
      }
      

    //   var crystal1 = $("<img>").addClass("crystal-image").attr("src", "assets/images/smallfish.jpg").attr("data-crystalvalue", numberOptions[i]);

    // $("#crystal1").append(crystal1);

     //  $("#button1").on("click", function() {

     //  	$("#scoreCount").html
     // var num = 1 + Math.floor(Math.random() * 11);
     //     $("#scoreCount").prepend  ("<h3>" + num + "</h3>");
        

     //  });
     function resetGame() {
     	var targetNumber = 18 + Math.floor(Math.random() * 101);
      	var num1 = 1 + Math.floor(Math.random() * 11);
      	var num2 = 1 + Math.floor(Math.random() * 11);
      	var num3 = 1 + Math.floor(Math.random() * 11);
      	var num4 = 1 + Math.floor(Math.random() * 11);
      	var scoreCount = 0;
     }
      

   