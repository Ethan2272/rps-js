const CHOICE_ROCK = 0;
const CHOICE_PAPER = 1;
const CHOICE_SCISSORS = 2;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);

    switch(choice) {
        case CHOICE_ROCK:
            return 'ROCK';
        case CHOICE_PAPER:
            return 'PAPER';
        case CHOICE_SCISSORS:
            return 'SCISSORS';
    }
}

console.log(getComputerChoice());