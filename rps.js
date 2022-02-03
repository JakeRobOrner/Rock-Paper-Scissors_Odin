// Randomly return rock, paper, or scissors as the computer play
function computerPlay() {
    const randomNum = Math.floor(Math.random() * 100);

    if (randomNum <= 33){
        return 'rock';
    }
    else if (randomNum > 33 && randomNum <= 66) {
        return 'paper';
    }
    return 'scissors';
}
const computerSelection = computerPlay();
// Request selection from player
const playerSelection = prompt("Please enter rock, paper, or scissors: ", "rock").toLowerCase();

// Compare player and computer selections to determine winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return 'draw';
        }
        else if (computerSelection == 'paper') {
            return 'lose';
        }
        return 'win';
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return 'draw';
        }
        else if (computerSelection == 'scissors') {
            return 'lose';
        }
        return 'win';
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            return 'draw';
        }
        else if (computerSelection == 'rock') {
            return 'lose';
        }
        return 'win';
    }
}
console.log(playRound(playerSelection, computerSelection));
