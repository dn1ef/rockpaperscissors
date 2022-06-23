let playerChoice;
let cpuChoice = [{choice: 'rock', value: 1 }, {choice: 'paper', value: 2 }, {choice: 'scissors', value: 3 }];

function computerPlay() {
    return cpuChoice[Math.floor(Math.random() * cpuChoice.length) + 1];
}

function determineWinner(player, cpu) {
    let roundCompare = `${player}-${cpuChoice.value}` 
    let winnerCombo = ['1-3', '2-1', '3-2'];
    let win = 0;

    for (winner of winnerCombo) {
        if (roundCompare === winner) {
            win = 1; 
            break;
        }
    }

    if (player === cpu && win != 1) {
        return `Tied!`;
    } else if (win != 1) {
        return `You lost! ${cpu.choice} beats ${playerChoice}`;
    } else if (win === 1) {
        return `You win! ${playerChoice} beats ${cpu.choice}`;
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
    let cpu = computerPlay();
    let player = determineSelection(playerSelection); 

    return determineWinner(player, cpu);

}


function game() {
    for (let i = 0; i < 5; i++) {
       console.log(playRound(prompt('Rock, Paper, or Scissors?'))); 
    }
}
