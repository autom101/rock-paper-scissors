"Use Strict"

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
    // Tests if user put a valid entry
    // if (playerSelection.toUpperCase() != ROCKPAPERSCISSORS[0] || playerSelection.toUpperCase() != ROCKPAPERSCISSORS[1] || playerSelection.toUpperCase() != ROCKPAPERSCISSORS[2]) {
    //     return `Your entry, ${playerSelection}, is invalid! Please enter Rock, Paper, or Scissors`;
    // }

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
    //user is scissors, and computer is paper
    else if (playerSelection ===  ROCKPAPERSCISSORS[2] && computerSelection === ROCKPAPERSCISSORS[1]) {
        return `You chose ${ROCKPAPERSCISSORS[2]}, and the computer chose ${ROCKPAPERSCISSORS[1]}. You win!`;
    }
    //user is paper, and computer is rock
    else if (playerSelection ===  ROCKPAPERSCISSORS[1] && computerSelection === ROCKPAPERSCISSORS[0]) {
        return `You chose ${ROCKPAPERSCISSORS[1]}, and the computer chose ${ROCKPAPERSCISSORS[0]}. You win!`;
    }
    //user is rock and computer is scissors
    else if (playerSelection ===  ROCKPAPERSCISSORS[0] && computerSelection === ROCKPAPERSCISSORS[2]) {
        return `You chose ${ROCKPAPERSCISSORS[0]}, and the computer chose ${ROCKPAPERSCISSORS[2]}. You win!`;
    }
    //user is paper and computer is scissors
    else if (playerSelection ===  ROCKPAPERSCISSORS[1] && computerSelection === ROCKPAPERSCISSORS[2]) {
        return `You chose ${ROCKPAPERSCISSORS[1]}, and the computer chose ${ROCKPAPERSCISSORS[2]}. You lose!`;
    }
    //user is rock and computer is paper
    else if (playerSelection ===  ROCKPAPERSCISSORS[0] && computerSelection === ROCKPAPERSCISSORS[1]) {
        return `You chose ${ROCKPAPERSCISSORS[0]}, and the computer chose ${ROCKPAPERSCISSORS[1]}. You lose!`;
    }
    //user is scissors and computer is rock
    else {
        return `You chose ${ROCKPAPERSCISSORS[2]}, and the computer chose ${ROCKPAPERSCISSORS[0]}. You lose!`;
    }
}

function score(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    switch (playerSelection) {
        case "ROCK":
            if (computerSelection === ROCKPAPERSCISSORS[0]) {
                return `Draw`;
            }
            else if (computerSelection === ROCKPAPERSCISSORS[1]) {
                return `Lose`;
            }
            else {
                return `Win`;
            }
        case "PAPER":
            if (computerSelection === ROCKPAPERSCISSORS[0]) {
                return `Win`;
            }
            else if (computerSelection === ROCKPAPERSCISSORS[1]) {
                return `Draw`;
            }
            else {
                return `Lose`;
            }
        case "SCISSORS":
            if (computerSelection === ROCKPAPERSCISSORS[0]) {
                return `Lose`;
            }
            else if (computerSelection === ROCKPAPERSCISSORS[1]) {
                return `Win`;
            }
            else {
                return `Draw`;
            }
        default: 
            break;
    }
}

function game() {
    let userInput, computerInput, userScore = 0, computerScore = 0, draw = 0;

    for(let i = 0; i < 5; i++) {
        
        userInput = prompt("Choose Rock, Paper, or Scissors.");
        computerInput = getComputerChoice();
        console.log(playRound(userInput, computerInput));
        
        switch (score(userInput, computerInput)) {
            case "Win":
                userScore++;
                break;
            case "Lose":
                computerScore++;
                break;
            case "Draw":
                draw++;
                break;
            default:
                break;                    
        }
    }

    return `You won ${userScore} games.\nYou lost ${computerScore} games.\nThere were ${draw} draws.`
}

console.log(game());