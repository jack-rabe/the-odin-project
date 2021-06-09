const turnTag = document.getElementById('turns');

let playerOne;
let playerTwo;

// IIFE that creates a 3x3 2D array to represent the board as well as the two players
const gameBoard = (() => {
	playerOne = createPlayer(true, 'X');
	playerTwo = createPlayer(false, 'O');

	let arr = new Array(3);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(3);
	}

	function startGame() {
		// clear the 2D array
		for (let i = 0; i < 3; i++) {
			gameBoard.arr[i] = new Array(3);
		}
		// clear the html contents of the grid
		const gridSquares = document.getElementsByClassName('grid-square');
		for (let square of gridSquares) {
			square.textContent = '';
		}

		playerOne.isTurn = true;
		turnTag.textContent = ` ${playerOne.name}'s turn!`;
	}

	// switches which player's turn it is and displays the appropriate text
	function switchTurns() {
		playerOne.isTurn = !playerOne.isTurn;
		playerTwo.isTurn = !playerTwo.isTurn;

		const currentPlayer = playerOne.isTurn ? playerOne : playerTwo;
		turnTag.textContent = ` ${currentPlayer.name}'s turn!`;
	}
	return { arr, playerOne, playerTwo, startGame, switchTurns };
})();

// factory function to create both player objects
function createPlayer(isTurn, marker) {
	function tryMove(square) {
		const row = square.id[1];
		const column = square.id[3];
		// invalid move
		if (gameBoard.arr[row][column]) {
			return;
		}

		// add the move to the board
		gameBoard.arr[row][column] = marker;
		square.textContent = marker;
		// check for a potential winner or a full board
		const possibleWinner = checkForGameOver();
		if (possibleWinner === 'full') {
			endGame('Tie');
		} else if (possibleWinner) {
			endGame(`${possibleWinner.name} has won!`);
		} // switch whose turn it is
		else {
			gameBoard.switchTurns();
		}
	}

	function initializeName(playerNum) {
		this.name = prompt(`Please enter the name of ${playerNum}.`);
	}

	return { isTurn, marker, tryMove, initializeName };
}

// returns full if the board is full, a player if somebody has won, or false if neither condiition is true
function checkForGameOver() {
	// create arrays containing each of the columns and the two diagonals
	let colOne = [];
	let colTwo = [];
	let colThree = [];
	const leftDiagonal = [
		gameBoard.arr[0][0],
		gameBoard.arr[1][1],
		gameBoard.arr[2][2],
	];
	const rightDiagonal = [
		gameBoard.arr[0][2],
		gameBoard.arr[1][1],
		gameBoard.arr[2][0],
	];
	for (let row of gameBoard.arr) {
		colOne.push(row[0]);
		colTwo.push(row[1]);
		colThree.push(row[2]);
	}
	// check that no row, column or diagonal has all squares with the same marker
	const winner =
		checkForWinningRow(colOne) ||
		checkForWinningRow(colTwo) ||
		checkForWinningRow(colThree) ||
		checkForWinningRow(gameBoard.arr[0]) ||
		checkForWinningRow(gameBoard.arr[1]) ||
		checkForWinningRow(gameBoard.arr[2]) ||
		checkForWinningRow(leftDiagonal) ||
		checkForWinningRow(rightDiagonal);
	if (winner) {
		return winner;
	}

	// check if the board is completely filled
	if (checkForFullBoard()) {
		return 'full';
	}
}

// makes it neither players turn and outputs the winner to the turn tag text contents
function endGame(msg) {
	playerOne.isTurn = false;
	playerTwo.isTurn = false;
	turnTag.textContent = msg;
}
// takes a 1D array and returns the winner if there is one, false otherwise
function checkForWinningRow(row) {
	const winningMarker = row[0];
	if (winningMarker && winningMarker === row[1] && winningMarker === row[2]) {
		if (playerOne.marker === winningMarker) {
			return playerOne;
		} else {
			return playerTwo;
		}
	}
	return false;
}

// returns true if the board is full, false otherwise
function checkForFullBoard() {
	for (let row of gameBoard.arr) {
		for (let element of row) {
			if (!element) return false;
		}
	}
	return true;
}

// populate the HTML board container w/ a grid in each square
function populateBoard() {
	const board = document.getElementById('board');
	let newDiv;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			// create new div and add it to the grid
			newDiv = document.createElement('div');
			board.appendChild(newDiv);
			// add unique identifiers to the div
			newDiv.id = `R${i}C${j}`;
			newDiv.classList.add('grid-square');

			newDiv.addEventListener('click', (e) => {
				if (playerOne.isTurn) {
					playerOne.tryMove(e.target);
				} else if (playerTwo.isTurn) {
					playerTwo.tryMove(e.target);
				}
			});
		}
	}
}
// adds logic to the restart to button
function addRestartLogic() {
	const restartBtn = document.getElementById('restart-btn');
	restartBtn.addEventListener('click', () => {
		gameBoard.startGame();
	});
}

addRestartLogic();
populateBoard();

playerOne.initializeName('One');
playerTwo.initializeName('Two');

gameBoard.startGame();
