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

let playerChoice = prompt("Your choice:");

console.log(compareString(playerChoice));


console.log(playerChoice);
console.log(getComputerChoice());