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

function gameRound(){
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Your choice:");
    playerChoice = playerChoice.toLowerCase();

    //Show the prompt again if player didn't choose one of the 3 proper options
    while (compareString(playerChoice) !== 1) {
        console.log("That's not an option. Try again.");
        playerChoice = prompt("Your choice:");
        playerChoice = playerChoice.toLowerCase();
    }

    //Compare the choices and decide the winner of the round
    console.log(`The computer chose ${computerChoice}`);
    if (playerChoice === computerChoice) {
        console.log("Draw");
        return 2;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors")
        ||
        (playerChoice === "paper" && computerChoice === "rock")
        ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win the round");
        return 1;
    } else {
        console.log("You lose the round");
        return 0;
    }
}

function game(){

    //Play a specified number (i's end value) of rounds
    let score = 0;
    for (let i = 1; i <=5; i++){
        let roundResult = gameRound();
        if (roundResult === 2){
            i--; //Add 1 round if previous was a draw (so there's always 5 rounds)
        } else {
            score = score + roundResult;
        }
    }

    //Check if player won based on score
    console.log(`Your score: ${score}/5`);
    if (score >= 3){
        console.log('You won the game');
    } else {
        console.log("You lost the game")
    }
}

const playButton = document.querySelector(".playButton");
playButton.addEventListener("click", game);

const resultsPanel = document.querySelector(".resultsPanel");
resultsPanel.style.color = "red";