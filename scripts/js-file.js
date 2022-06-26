let playerChoice;
let cpuChoice = [{choice: 'rock', value: 1 }, {choice: 'paper', value: 2 }, {choice: 'scissors', value: 3 }];
let playerScore = 0;
let cpuScore = 0;

const buttons = document.querySelectorAll('button');
const output = document.querySelector('#result');
const you = document.querySelector('#you');
const computer = document.querySelector('#cpu'); 

function computerPlay() {
    return cpuChoice[Math.floor(Math.random() * cpuChoice.length)];
}

function determineWinner(player, cpu) {
    let roundCompare = `${player}-${cpu.value}` 
    let winnerCombo = ['1-3', '2-1', '3-2'];
    let win = 0;

    for (winner of winnerCombo) {
        if (roundCompare === winner) {
            win = 1; 
            break;
            }
    }

    if (parseInt(player) === cpu.value && win != 1) {
        output.textContent = `Tied! Both players chose ${cpu.choice}!`;
    } else if (win != 1) {
        output.textContent = `You lost! ${cpu.choice[0].toUpperCase() + (cpu.choice).slice(1)} beats ${playerChoice}.`;
        if (cpuScore === 5) {
            computer.textContent = `CPU: ${cpuScore++}`;
            let message = output.textContent = `Game over! The CPU won!`;
            gameOver(message);
        } else {
            computer.textContent = `CPU: ${cpuScore++}`;
        }
    } else if (win === 1) {
        output.textContent = `You win! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${cpu.choice}.`;
        if (playerScore === 5) {
            you.textContent = `You: ${playerScore++}`;
            let message = output.textContent = `Game over! You won!`;
            gameOver(message);
        } else {
            you.textContent = `You: ${playerScore++}`;
        }
    } else {
        output.textContent = `Error, could not determine winner of round.`;
    }

}

function determineSelection(player) {
    switch(parseInt(player)) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        default:
            return "ERROR";
    }
}

function playRound(playerSelection) {
    return determineWinner(playerSelection, computerPlay());
}

function gameOver(message) {
    playerScore = 0;
    cpuScore = 0;
    you.textContent = `You: ${playerScore++}`;
    computer.textContent = `CPU: ${cpuScore++}`;
    output.textContent = message;
}

you.textContent = `You: ${playerScore++}`;
computer.textContent = `CPU: ${cpuScore++}`;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
            playerChoice = determineSelection(button.id)
            playRound(button.id);
    });
});
