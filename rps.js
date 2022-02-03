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

let win = 0;
let lose = 0;

// Play five rounds
function game() {
    
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        // Request selection from player
        const playerSelection = prompt("Please enter rock, paper, or scissors: ", "rock").toLowerCase();

        const play = playRound(playerSelection, computerSelection);

        if (play == 'draw') {
            console.log("Draw!");
        }
        else if (play == 'lose') {
            console.log("Lose!");
            lose++;
        }
        else if (play == 'win') {
            console.log("Win!");
            win++;
        }
    }
    return [win, lose];
}

let winLose = game();
whoWon(winLose[0], winLose[1]);

function whoWon(wins, losses) {
        // Determine final winner of five rounds
        if (wins > losses) {
            alert("Congratulations! You are the winner!");
        }
        else if (wins < losses) {
            alert("Sorry, you lose.");
        }
        else if (wins == losses) {
            alert("It's a draw!")
        }
}