/* Make computer choose rock/paper/scissors based on rng */
function getComputerChoice(){
    let computerRoll = Math.random() * 100 + 1;
    let computerChoice;
    if (computerRoll <= 33){
        computerChoice = "rock";
    } else if (computerRoll <= 66){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function gameRound(playerChoice){

    let computerChoice = getComputerChoice();
    playerChoice = playerChoice.currentTarget.myParam;
    resultsPanel.textContent = `You chose ${playerChoice}.`;
    resultsPanel.textContent += ` The computer chose ${computerChoice}.`;

    /* Compare the choices and decide the winner of the round */
    if (playerChoice === computerChoice) {
        resultsPanel.textContent += ` Draw.`;
        // Doesn't increment round so there's always 5 rounds with a winner.
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors")
        ||
        (playerChoice === "paper" && computerChoice === "rock")
        ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultsPanel.textContent += ` You win the round.`;
        playerScore++;
        round++;
    } else {
        resultsPanel.textContent += ` You loose the round.`;
        computerScore++;
        round++;
    }

    let neededWins = 3;
    if (playerScore === neededWins || computerScore === neededWins ){
        gameEnd(neededWins);
    }
}

function gameEnd(neededWins){
    if (playerScore >= neededWins){
        resultsPanel.textContent += ` Your score: ${playerScore}/${round} - You won!`;
    } else {
        resultsPanel.textContent += ` Your score: ${playerScore}/${round} - You lost!`;
    }
     
     playerScore = 0;
     computerScore = 0;
     round = 0;

     /* Removes choice buttons */
     const buttons = document.querySelector(".buttons");
     const playButton = document.querySelector(".playButton");
     for (let i = 0; i < 3; i++){
        if (buttons.lastChild === playButton) {  // Fixes bug where removeChild also removes play button
            break;
        } else {
            buttons.removeChild(buttons.lastChild);
        }
     }

     isPlayed = 0;  // Player ends the game.
     
     playButton.textContent = "Play again";
}

function game(){

    resultsPanel.textContent = "";

    if (isPlayed === 1) {     // Allows player to restart the game if clicked after he started playing.
        gameEnd();
        resultsPanel.textContent = "Game restarted.";
    }

    isPlayed = 1;  // Player starts playing the game.

    playButton.textContent = "Restart";
    
    /* Pop up buttons for choosing rock paper scissors */
    const buttons = document.querySelector(".buttons");

    const rockButton = document.createElement('button');
    rockButton.textContent = "rock"
    rockButton.setAttribute("title", "co mam na czole co mam na czole");
    buttons.appendChild(rockButton);
    rockButton.addEventListener("click", gameRound);
    rockButton.myParam = "rock";  // Allows to pass player choice to gameRound

    const paperButton = document.createElement('button');
    paperButton.textContent = "paper"
    buttons.appendChild(paperButton);
    paperButton.addEventListener("click", gameRound);
    paperButton.myParam = "paper";  // Allows to pass player choice to gameRound

    const scissorsButton = document.createElement('button');
    scissorsButton.textContent = "scissors"
    buttons.appendChild(scissorsButton);
    scissorsButton.addEventListener("click", gameRound);
    scissorsButton.myParam = "scissors";  // Allows to pass player choice to gameRound
}

const playButton = document.querySelector(".playButton");
playButton.addEventListener("click", game);

/* Global variables - because passing arguments to functions started by addEventListener is hard */
let score = 0;
let round = 0;
let playerScore = 0;
let computerScore = 0;
let isPlayed = 0;

const body = document.querySelector("body");
const resultsPanel = document.querySelector(".resultsPanel");
body.appendChild(resultsPanel);