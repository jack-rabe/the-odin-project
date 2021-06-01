function computerPlay() {
	// returns the computer's move (lowercase)
	const random = Math.floor(Math.random() * 3); // random number from 0-2 (inclusive)
	if (random === 0) {
		return 'rock';
	} else if (random === 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

// Code from console version:
function userPlay() {
	// returns the player's move (lowercase)
	let input;
	const acceptableMoves = ['rock', 'paper', 'scissors'];

	while (!acceptableMoves.includes(input)) {
		// ensure valid input
		input = prompt('Enter your move').toLowerCase();
	}
	return input;
}

function playRound(computerSelection, playerSelection) {
	// returns a string declaring the winner
	if (computerSelection === playerSelection) {
		// handles all ties
		return `Tie: ${computerSelection} ties ${playerSelection}.`;
	}

	switch (computerSelection) {
		case 'rock':
			if (playerSelection === 'paper') {
				return 'You win: Paper beats Rock';
			} else {
				return 'You lose: Rock beats Scissors';
			}
		case 'paper':
			if (playerSelection === 'scissors') {
				return 'You win: Scissors beats Paper';
			} else {
				return 'You lose: Paper beats Rock';
			}
		case 'scissors':
			if (playerSelection === 'rock') {
				return 'You win: Rock beats Scissors';
			} else {
				return 'You lose: Scissors beats Paper';
			}
	}
}

function game() {
	// plays a five-round game, returning a string declaring the winner at the end
	let userWins = 0;
	let computerWins = 0;

	while (userWins < 5 && computerWins < 5) {
		const userMove = userPlay();
		const computerMove = computerPlay();
		const fullResultString = playRound(computerMove, userMove);
		console.log(fullResultString);

		const result = fullResultString.split(' ')[1]; // determine who won
		if (result === 'win:') {
			userWins++;
		} else if (result === 'lose:') {
			computerWins++;
		}
	}

	return userWins > computerWins ? 'user' : 'computer';
}

const winner = game();
if (winner === 'user') {
	console.log('You won the game!');
} else {
	console.log('You lost to the computer. Better luck next time!');
}
