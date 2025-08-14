let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random()*3);

    return computerChoices[computerChoice];
}

function getHumanChoice() {
    let choice = prompt('Enter your choice (rock, paper, or scissors)');
    return choice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    if (humanChoice == computerChoice) {
        console.log(`This round is a draw! Both players picked ${computerChoice}`);
        return;
    }
    // Key choice beats value choice
    const winningConfigurations = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    }

    let computerWins = (winningConfigurations[computerChoice] == humanChoice);
    let roundResultMessage;
    if(computerWins) {
        roundResultMessage = `You lose this round! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else {
        roundResultMessage = `You win this round! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }

    console.log(roundResultMessage);
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
    }

    let gameResultMessage;
    if(computerScore > humanScore) {
        gameResultMessage = 'The computer wins the game :(';
    } else if (humanScore > computerScore) {
        gameResultMessage = 'You win the game :)';
    } else {
        gameResultMessage = 'The game is a draw :|';
    }

    console.log(gameResultMessage);
}

// playGame();