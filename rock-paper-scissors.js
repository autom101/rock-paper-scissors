function getComputerChoice() {
    //Return Rock, Paper, or Scissors randomly
    let computerNumber;
    computerNumber = Math.random()*1000;
    if (computerNumber <= 333) {
        return "Rock";
    }
    else if (computerNumber <= 667) {
        return "Paper";
    }
    return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    return "You lose";
}

function game () {

}

console.log(getComputerChoice());