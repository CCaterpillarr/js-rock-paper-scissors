function getComputerChoice(){
    let computerRoll = Math.random() * 100;
    let computerChoice;
    if (computerRoll < 33){
        computerChoice = "Rock";
    } else if (computerRoll < 66){
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

console.log(getComputerChoice());