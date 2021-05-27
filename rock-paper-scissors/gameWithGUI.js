let playerScore = 0;
let computerScore = 0;

function computerPlay(){  // returns the computer's move (lowercase)
    const random = Math.floor(Math.random() * 3);  // random number from 0-2 (inclusive)
    if (random === 0){ return "rock"; }
    else if (random === 1){ return "paper"; }
    else { return "scissors"; }
}

// Code from console version:
function userPlay(){  // returns the player's move (lowercase)
    let input;
    const acceptableMoves = ['rock', 'paper', 'scissors'];

    while (!acceptableMoves.includes(input)){  // ensure valid input
        if (input) { input = prompt("Enter your move").toLowerCase(); }
    }
    return input;
}

function playRound(playerSelection){  // returns a string declaring the winner
    const resultTag = document.querySelector('#last-game');
    const playerScoreTag = document.querySelector('#player-score');
    const computerScoreTag = document.querySelector('#computer-score');

    const computerSelection = computerPlay();

    if(computerSelection === playerSelection){ // handles all ties
        resultTag.textContent = `Tie: ${computerSelection} ties ${playerSelection}.`;
    }
    else{
        switch (computerSelection){
            case "rock":
                if (playerSelection === "paper"){ 
                    resultTag.textContent = 'You win: Paper beats Rock'; 
                    playerScore++;
                }
                else{
                    resultTag.textContent = 'You lose: Rock beats Scissors';
                    computerScore++;
                }
                break;
            case "paper":
                if (playerSelection === "scissors"){
                    resultTag.textContent = 'You win: Scissors beats Paper';
                    playerScore++;
                }
                else{
                    resultTag.textContent = 'You lose: Paper beats Rock';
                    computerScore++;          
                    }
                break;
            case "scissors":
            if (playerSelection === "rock"){
                    resultTag.textContent = 'You win: Rock beats Scissors';
                    playerScore++;
            }
            else{
                    resultTag.textContent = 'You lose: Scissors beats Paper';
                    computerScore++;
            }
            break;
        }
}

    playerScoreTag.textContent = `Player: ${playerScore}`;
    computerScoreTag.textContent = `Computer: ${computerScore}`;

    checkForGameOver(resultTag)
}

function checkForGameOver(resultTag){
    if (computerScore >= 5){
        resultTag.textContent = 'You lose!';
    }
    else if (playerScore >= 5){
        resultTag.textContent = 'You Win!';
    }
    else{
        return;
    }

    playerScore = 0;
    computerScore = 0;
}
