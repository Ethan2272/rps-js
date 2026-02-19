let computerScore = 0;
let humanScore = 0;
let gameInProgress = true;

document.addEventListener('click', function(event) {
    const targetElement = event.target;

    if (!gameInProgress || targetElement.nodeName != 'BUTTON') {
        return;
    }

    const humanChoice = targetElement.innerText;

    startRound(humanChoice);
});


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

// TODO: check score, update screen text as needed
function startRound(humanChoice) {
    if (!gameInProgress) {
        return;
    }

    const computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
}