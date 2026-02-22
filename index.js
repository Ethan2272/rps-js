let computerScore = 0;
let humanScore = 0;
let gameInProgress = true;
const headerMessage = document.getElementById('header-message');
const humanScoreboard = document.getElementById('player-scoreboard');
const computerScoreboard = document.getElementById('computer-scoreboard');

document.addEventListener('click', function(event) {
    const targetElement = event.target;

    if (!gameInProgress || targetElement.nodeName != 'BUTTON') {
        alert("Game is over");
        return;
    }

    const humanChoice = targetElement.innerText.toLowerCase();

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
        return `This round is a draw! Both players picked ${computerChoice}`;
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
        roundResultMessage = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    } else {
        roundResultMessage = `You win this round! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }

    return roundResultMessage;
}

// TODO: check score, update screen text as needed
function startRound(humanChoice) {
    if (!gameInProgress) {
        return;
    }

    const computerChoice = getComputerChoice();
    const roundMessage = playRound(computerChoice, humanChoice);

    humanScoreboard.innerText = humanScore;
    computerScoreboard.innerText = computerScore;

    headerMessage.textContent = roundMessage;

    if(computerScore >= 5 || humanScore >= 5) {
        headerMessage.textContent += " Game over!";
        gameInProgress = false;
    }
}