// Crystals Game - 2nd Javascript

//Pseudo
//set 4 crystal buttons to a random number value between 1 - 12- to remain constant until new game begins - <Restart Game>
//display random target number b/t 19 - 120 to user
//add hidden number value to scoreCount at each click.
//if scoreCount > targetNumber - you lose++ - game restarts
//if scoreCount === targetNumber - you win++ - game restarts

//button Restart Game resets wins/losses and creates random set of values for 4 crystals to begin again


 // $(document).ready(function() {

     
      function gameStart() {
      	var targetNumber = 18 + Math.floor(Math.random() * 101);
      	var crystal1 = 1 + Math.floor(Math.random() * 11);
      	var crystal2 = 1 + Math.floor(Math.random() * 11);
      	var crystal3 = 1 + Math.floor(Math.random() * 11);
      	var crystal4 = 1 + Math.floor(Math.random() * 11);
      	var scoreCount = "";
      	var wins = 0;
      	var loses = 0;

      	$("#targetNumber").html("<h1>" + targetNumber + "</h1>");
      	$("#totalWins").html("<h1>" + "Wins " + wins + "</h1>");
      	$("#totalLosses").html("<h1>" + "Loses " + loses + "</h1>");

      };
      

      var crystal1 = $("<img>").addClass("crystal-image").attr("src", "assets/images/smallfish.jpg").attr("data-crystalvalue", numberOptions[i]);

    $("#crystal1").append(crystal1);

     //  $("#button1").on("click", function() {

     //  	$("#scoreCount").html
     // var num = 1 + Math.floor(Math.random() * 11);
     //     $("#scoreCount").prepend  ("<h3>" + num + "</h3>");
        

     //  });

      

    // });  //end document.ready