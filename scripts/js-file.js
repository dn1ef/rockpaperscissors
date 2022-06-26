const buttons = document.querySelectorAll('button');
let playerChoice;
let cpuChoice = [{choice: 'rock', value: 1 }, {choice: 'paper', value: 2 }, {choice: 'scissors', value: 3 }];

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
        return `Tied! Both players chose ${cpu.choice}!`;
    } else if (win != 1) {
        return `You lost! ${cpu.choice[0].toUpperCase() + (cpu.choice).slice(1)} beats ${playerChoice}.`;
    } else if (win === 1) {
        return `You win! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${cpu.choice}.`;
    } else {
        return `Error, could not determine winner of round.`;
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
    console.log(determineWinner(playerSelection, computerPlay()));
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = determineSelection(button.id)
        playRound(button.id);
    });
});
