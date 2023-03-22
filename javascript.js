function getComputerChoice(){
    let computerRoll = Math.random() * 100 + 1;
    let computerChoice;
    if (computerRoll <= 33){
        computerChoice = "Rock";
    } else if (computerRoll <= 66){
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function compareString(string){
    string = string.toLowerCase();
    if (string === "rock" || string === "paper" || string === "scissors") {
        return 1;
    } else {
        return 0;
    }
}

let computerChoice = getComputerChoice();
let playerChoice = prompt("Your choice:");
console.log(`The computer chose ${computerChoice.toLowerCase()}`);

if (compareString(playerChoice) === 0) {
    console.log("That's not an option. Try again.");
} else {
    if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log("Draw");
    } else if (
        (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors")
        ||
        (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock")
        ||
        (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper")
    ) {
        console.log("You win");
    } else {
        console.log("You lose");
    }
}