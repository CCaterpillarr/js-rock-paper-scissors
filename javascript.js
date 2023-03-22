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

function compareString(string){
    if (string === "rock" || string === "paper" || string === "scissors") {
        return 1;
    } else {
        return 0;
    }
}

let computerChoice = getComputerChoice();
let playerChoice = prompt("Your choice:");
playerChoice = playerChoice.toLowerCase();

while (compareString(playerChoice) !== 1) {
    console.log("That's not an option. Try again.");
    playerChoice = prompt("Your choice:");
    playerChoice = playerChoice.toLowerCase();
}
    console.log(`The computer chose ${computerChoice}`);
    if (playerChoice === computerChoice) {
        console.log("Draw");
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors")
        ||
        (playerChoice === "paper" && computerChoice === "rock")
        ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win");
    } else {
        console.log("You lose");
    }
