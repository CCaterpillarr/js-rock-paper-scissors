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

//Check if player chose one of the 3 proper options
function compareString(string){
    if (string === "rock" || string === "paper" || string === "scissors") {
        return 1;
    } else {
        return 0;
    }
}

function rockClick(){
    let choice = "rock";
    return choice;
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

    if (round < 5){
        // Display round results at bottom
        // Count score at bottom
    } else {
        gameEnd();
    }
}

function gameEnd(){
    console.log(`Your score: ${score}/5`);
    if (score >= 3){
        resultsPanel.textContent = `Your score: ${score}/5 - You won!`;
    } else {
        resultsPanel.textContent = `Your score: ${score}/5 - You lost!`;
    }

     // Remove buttons and stop graying out play button
     score = 0;
     round = 0;
}


const body = document.querySelector("body");
const resultsPanel = document.querySelector(".resultsPanel");
body.appendChild(resultsPanel);

let score = 0;
let round = 0;

function game(){

    // Pop up buttons for rock paper scissors
    const buttons = document.querySelector(".buttons");
    const rockButton = document.createElement('button');
    rockButton.textContent = "rock"
    rockButton.setAttribute("title", "co mam na czole co mam na czole");
    buttons.appendChild(rockButton);
    rockButton.addEventListener("click", gameRound);
    rockButton.myParam = "rock";

    const paperButton = document.createElement('button');
    paperButton.textContent = "paper"
    buttons.appendChild(paperButton);
    paperButton.addEventListener("click", gameRound);
    paperButton.myParam = "paper";

    const scissorsButton = document.createElement('button');
    scissorsButton.textContent = "scissors"
    buttons.appendChild(scissorsButton);
    scissorsButton.addEventListener("click", gameRound);
    scissorsButton.myParam = "scissors";

    //rock co mam na czole

    // make game repeatable
}


const playButton = document.querySelector(".playButton");
playButton.addEventListener("click", game);