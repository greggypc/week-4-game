// Crystals Game - 2nd Javascript

//Pseudo
//set 4 crystal buttons to a random number value between 1 - 12- to remain constant until new game begins - <Restart Game>
//display random target number b/t 19 - 120 to user
//add hidden number value to scoreCount at each click.
//if scoreCount > targetNumber - you lose++ - game restarts
//if scoreCount === targetNumber - you win++ - game restarts

//button Restart Game resets wins/losses and creates random set of values for 4 crystals to begin again


 $(document).ready(function() {

      // FUNCTIONS
      // ====================================================================
      // Here we create various on "click" functions which capture the clicks
      // Inside each click event is the code to create an alert, update the counter, then show the updated count.
      // ...
      $("#button1").on("click", function() {
     var num = 10000000 + Math.floor(Math.random() * 900000000);
         $("#lottoNums").prepend  ("<h3>" + num + "</h3>");
        

      });

      

      // .10 + 

    });