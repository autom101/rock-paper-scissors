const ROCKPAPERSCISSORS = ["ROCK", "PAPER", "SCISSORS"];

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
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    //both are rock
    if (playerSelection ===  ROCKPAPERSCISSORS[0] && computerSelection === ROCKPAPERSCISSORS[0]) {
        return `Both players chose ${ROCKPAPERSCISSORS[0]}, it's a tie!`;
    }
    //both are paper
    else if (playerSelection ===  ROCKPAPERSCISSORS[1] && computerSelection === ROCKPAPERSCISSORS[1]) {
        return `Both players chose ${ROCKPAPERSCISSORS[1]}, it's a tie!`;
    }
    //both are scissors
    else if (playerSelection ===  ROCKPAPERSCISSORS[2] && computerSelection === ROCKPAPERSCISSORS[2]) {
        return `Both players chose ${ROCKPAPERSCISSORS[2]}, it's a tie!`;
    }
    //user is scissor, and computer is paper
    else if (playerSelection ===  ROCKPAPERSCISSORS[2] && computerSelection === ROCKPAPERSCISSORS[1]) {
        return `You chose ${ROCKPAPERSCISSORS[2]}, and the computer chose ${ROCKPAPERSCISSORS[1]}. You win!`;
    }
    //user is paper, and computer is rock
    else if (playerSelection ===  ROCKPAPERSCISSORS[1] && computerSelection === ROCKPAPERSCISSORS[0]) {
        return `You chose ${ROCKPAPERSCISSORS[2]}, and the computer chose ${ROCKPAPERSCISSORS[0]}. You win!`;
    }
    //user is rock and computer is scissor
    else if (playerSelection ===  ROCKPAPERSCISSORS[0] && computerSelection === ROCKPAPERSCISSORS[2]) {
        return `You chose ${ROCKPAPERSCISSORS[2]}, and the computer chose ${ROCKPAPERSCISSORS[2]}. You win!`;
    }
    //computer is scissor and user is paper
    else if (playerSelection ===  ROCKPAPERSCISSORS[1] && computerSelection === ROCKPAPERSCISSORS[2]) {
        return `You chose ${ROCKPAPERSCISSORS[2]}, and the computer chose ${ROCKPAPERSCISSORS[0]}. You win!`;
    }
    //computer is paper, and user is rock
    else if (playerSelection ===  ROCKPAPERSCISSORS[0] && computerSelection === ROCKPAPERSCISSORS[1]) {
        return `You chose ${ROCKPAPERSCISSORS[2]}, and the computer chose ${ROCKPAPERSCISSORS[0]}. You win!`;
    }
    //computer is rock and user is scissor
    else {
        return `You chose ${ROCKPAPERSCISSORS[2]}, and the computer chose ${ROCKPAPERSCISSORS[0]}. You win!`;
    }
}

function game () {

}

console.log(getComputerChoice());

console.log(playRound("Rock", getComputerChoice()));