const ROCKPAPERSCISSORS = [`ROCK`, `PAPER`, `SCISSORS`];

let userScore = 0, computerScore = 0, draw = 0, gamesPlayed = 0;

//Return Rock, Paper, or Scissors randomly
function getComputerChoice() {
    let computerNumber;
    computerNumber = Math.random()*1000;
    if (computerNumber <= 333) {
        return `ROCK`;
    }
    else if (computerNumber <= 667) {
        return `PAPER`;
    }
    return `SCISSORS`;
}

//Checks who won each game and returns a value of win, lose, or draw accordingly
function checkWinner(playerSelection, computerSelection) {
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

// Asks the checkWinner function about who won and returns the current state of the game
function clickButton(choice) {
    let userChoice, computerChoice, state;

    userChoice = choice.toUpperCase();
    computerChoice = getComputerChoice();
    state = checkWinner(userChoice, computerChoice);

    switch (state) {
        case `Win`:
            userScore++;
            break;
        case `Lose`:
            computerScore++;
            break;
        case `Draw`:
            draw++;
            break;                  
    }
    results.textContent = `So far, you have won ${userScore} games.\nYou have lost ${computerScore} games.\nThere have been ${draw} draws.`;  
}

// Increments game count and resets the game whenever the user plays 5 times
function trackGameplay() {
    gamesPlayed++;

    if (gamesPlayed % 5 === 0 && gamesPlayed > 0) {
        if (userScore > computerScore) {
            results.textContent = `You WON!!!`;
            userScore = 0;
            computerScore = 0;
            draw = 0;
        }
        else if (userScore < computerScore) {
            results.textContent = `Unfortunaly you lost :(`;
            userScore = 0;
            computerScore = 0;
            draw = 0;
        }
        else {
            results.textContent = `It's a draw. We'll get 'em next time.`;
            userScore = 0;
            computerScore = 0;
            draw = 0;
        }
    };
}

const rock = document.querySelector(`#rock`);
const paper = document.querySelector(`#paper`);
const scissors = document.querySelector(`#scissors`);

const results = document.querySelector(`.results-container`);

// EventListeners for whenever the user clicks the buttons
rock.addEventListener('click', () => {
        clickButton('rock'); 
        trackGameplay();
    }, 
    {
        capture: false,
        once: false
    })

paper.addEventListener('click', () => {
        clickButton('paper');
        trackGameplay();},
    {
        capture: false, 
        once: false
    })

scissors.addEventListener('click', () => {
        clickButton('scissors'); 
        trackGameplay();},
    {
        capture: false,
        once: false
    })
