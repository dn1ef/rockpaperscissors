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

    if (player === cpu.value && win != 1) {
        return `Tied!`;
    } else if (win != 1) {
        return `You lost! ${cpu.choice[0].toUpperCase() + (cpu.choice).slice(1)} beats ${playerChoice}.`;
    } else if (win === 1) {
        return `You win! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${cpu.choice}.`;
    } else {
        return `Error, could not determine winner of round.`;
    }

}

function determineSelection(player) {
    switch(player.toLowerCase()) {
        case 'rock':
            return 1;
            break;
        case 'paper':
            return 2;
            break;
        case 'scissors':
            return 3;
            break;
        default:
            return "Error, could not determine player decision.";
    }
}

function playRound(playerSelection) {
    playerChoice = playerSelection;
    let player = determineSelection(playerSelection); 

    if (player == 1 || player == 2 || player == 3) {
        return determineWinner(player, computerPlay());
    } else {
        return "Error - only type 'rock', 'paper', or 'scissors'.";
    }      
}

