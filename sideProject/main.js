var leftrock = $(".leftrock")
var leftscissors = $(".leftscissors")
var leftpaper = $(".leftpaper")
var leftlizard = $(".leftlizard")
var leftspock = $(".leftspock")

 $(function() {
    $( "#dialog" ).dialog();
  });


$("body").on("click", ".leftscissors", function()
{
    var player= "scissors"
    console.log("Player plays scissors");
    $(this).addClass("active");
    return getWinner(player,randomPlay() );
})

$("body").on("click", ".leftrock", function()
{
    var player= "rock"
    console.log("Player plays rock");
    $(this).addClass("active");
    return getWinner(player,randomPlay() );
})

$("body").on("click", ".leftpaper", function()
{
    var player= "paper"
    console.log("Player plays paper");
    $(this).addClass("active");
    return getWinner(player,randomPlay() );
})

$("body").on("click", ".leftspock", function()
{
    var player= "spock"
    console.log("Player plays spock");
    $(this).addClass("active");
    return getWinner(player,randomPlay() );
})

$("body").on("click", ".leftlizard", function()
{
    var player= "lizard"
    console.log("Player plays lizard");
    $(this).addClass("active");
    return getWinner(player,randomPlay() );
})



function playGame()
{
    var playerMove = getInput();
    var computerMove = randomPlay();
    var winner = getWinner(playerMove,computerMove);

    return winner
}

function getInput() 
{
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay()
 {
    var randomNumber = Math.random();
    var randomPlayString;
    if (randomNumber < 0.2) 
    {
        randomPlayString = "rock";
    } else if ((randomNumber >= 0.2) && (randomNumber < 0.4)) {
        randomPlayString =  "paper";
    } else if ((randomNumber >= 0.4) && (randomNumber<0.6)) {
        randomPlayString = "scissors";
    } else if ((randomNumber >= 0.6) && (randomNumber<0.8)) {
        randomPlayString = "lizard";
    } else {
    	randomPlayString = "spock";
    }

    console.log("Computer plays " +randomPlayString);
    return randomPlayString;
}

function getPlayerMove(move) {
    var move
        if (move != null) 
        {
            move=move;
        }
        else 
        {
            move=getInput();
        }
}


function getComputerMove(move) {
        if (move != null) 
        {
            move=move;
        }
        else 
        {
            move=randomPlay();
        }
}


function getWinner(playerMove,computerMove)
 {
    var winner;
        if  (playerMove == "rock" && computerMove =="paper") 
        {
            winner = "computerWins"
            console.log("Computer Wins!");
        }
        else if (playerMove =="rock" && computerMove =="scissors")
        {
            winner = "playerWins"
            console.log("Player Wins!");
        }
         else if (playerMove =="rock" && computerMove =="spock")
        {
            winner = "computerWins"
            console.log("Computer Wins!");
        }
         else if (playerMove =="rock" && computerMove =="lizard")
        {
            winner = "playerWins"
            console.log("Player Wins!");
        }
        else if (playerMove =="scissors" && computerMove =="rock")
        {
            winner = "computerWins"
            console.log("Computer Wins!");
        }
        else if (playerMove =="scissors" && computerMove =="paper")
        {
            winner = "playerWins"
            console.log("Player Wins!");
        }
         else if (playerMove =="scissors" && computerMove =="spock")
        {
            winner = "computerWins"
            console.log("Computer Wins!");
        }
         else if (playerMove =="scissors" && computerMove =="lizard")
        {
            winner = "playerWins"
            console.log("Player Wins!");
        }
        else if (playerMove =="paper" && computerMove =="rock")
        {
            winner = "playerWins"
            console.log("Player Wins!");
        }
        else if (playerMove =="paper" && computerMove =="scissors")
        {
            winner = "computerWins"
            console.log("Computer Wins!");
        }
          else if (playerMove =="paper" && computerMove =="spock")
        {
            winner = "playerWins"
            console.log("Player Wins!");
        }
          else if (playerMove =="paper" && computerMove =="lizard")
        {
            winner = "computerWins"
            console.log("Computer Wins!");
        }
         else if (playerMove =="spock" && computerMove =="paper")
        {
            winner = "computerWins"
            console.log("Computer Wins!");
        }
        else if (playerMove =="spock" && computerMove =="rock")
        {
            winner = "playerWins"
            console.log("Player Wins!");
        }
        else if (playerMove =="spock" && computerMove =="scissors")
        {
            winner = "playerWins"
            console.log("Player Wins!");
        }
        else if (playerMove =="spock" && computerMove =="lizard")
        {
            winner = "computerWins"
            console.log("Computer Wins!");
        }
        else if (playerMove =="lizard" && computerMove =="rock")
        {
            winner = "computerWins"
            console.log("Computer Wins!");
        }
        else if (playerMove =="lizard" && computerMove =="paper")
        {
            winner = "playerWins"
            console.log("Player Wins!");
        }
        else if (playerMove =="lizard" && computerMove =="scissors")
        {
            winner = "computerWins"
            console.log("Computer Wins!");
        }
        else if (playerMove =="lizard" && computerMove =="spock")
        {
            winner = "playerWins"
            console.log("Player Wins!");
        }
        else
        {
            winner = "tie"
            console.log("It's a tie!")
        }
        return winner;

}

function playToFive() 
{
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 1;
    var computerWins = 1;

    while ( computerWins < 5 || playerWins < 5 )
    {
        var whoWins = playGame();
        if (whoWins == "computerWins")
         {
            console.log("Computer has just won " + computerWins +" games!");
            computerWins++;
         }
         else if (whoWins == "tie")
         {

         }
         else
         {
            console.log("player has just won " + playerWins +" games!");
            playerWins++;
         }

    }

    return [playerWins, computerWins];
}

