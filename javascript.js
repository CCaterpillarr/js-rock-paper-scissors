//Make computer choose rock/paper/scissors based on rng
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

    //Compare the choices and decide the winner of the round
    resultsPanel.textContent += ` The computer chose ${computerChoice}.`;
    if (playerChoice === computerChoice) {
        resultsPanel.textContent += ` Draw.`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors")
        ||
        (playerChoice === "paper" && computerChoice === "rock")
        ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultsPanel.textContent += ` You win the round.`;
        score++;
        round++;
    } else {
        resultsPanel.textContent += ` You loose the round.`;
        round++;
    }

    if (round === 5){
        gameEnd();
    }
}

function gameEnd(){
    console.log(`Your score: ${score}/5`);
    if (score >= 3){
        resultsPanel.textContent += ` Your score: ${score}/5 - You won!`;
    } else {
        resultsPanel.textContent += ` Your score: ${score}/5 - You lost!`;
    }
     // Remove buttons and stop graying out play button

     score = 0;
     round = 0;

     const buttons = document.querySelector(".buttons");
     const playButton = document.querySelector(".playButton");
     for (let i = 0; i < 3; i++){
        if (buttons.lastChild === playButton) {  // Fixes bug where removeChild also removes play button
            break;
        } else {
            buttons.removeChild(buttons.lastChild);
        }
     }
     
     playButton.textContent = "Play again";
}

function game(){

    if (played === 1) {
        gameEnd();
        resultsPanel.textContent = "Game restarted.";
    }

    played = 1;
   // playButton.textContent = "Restart";
    
    // Pop up buttons for rock paper scissors
    const buttons = document.querySelector(".buttons");

    const rockButton = document.createElement('button');
    rockButton.classList.toggle("rockButton");
    rockButton.textContent = "rock"
    rockButton.setAttribute("title", "co mam na czole co mam na czole");
    buttons.appendChild(rockButton);
    rockButton.addEventListener("click", gameRound);
    rockButton.myParam = "rock";

    const paperButton = document.createElement('button');
    rockButton.classList.toggle("paperButton");
    paperButton.textContent = "paper"
    buttons.appendChild(paperButton);
    paperButton.addEventListener("click", gameRound);
    paperButton.myParam = "paper";

    const scissorsButton = document.createElement('button');
    rockButton.classList.toggle("scissorsButton");
    scissorsButton.textContent = "scissors"
    buttons.appendChild(scissorsButton);
    scissorsButton.addEventListener("click", gameRound);
    scissorsButton.myParam = "scissors";
}


const body = document.querySelector("body");
const resultsPanel = document.querySelector(".resultsPanel");
body.appendChild(resultsPanel);

const playButton = document.querySelector(".playButton");
playButton.addEventListener("click", game);

let score = 0;
let round = 0;
let played = 0;