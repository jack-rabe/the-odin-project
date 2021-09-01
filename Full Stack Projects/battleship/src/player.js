import createBoard from './board';

export default function createBothPlayers() {
	const boardOne = createBoard();
	const boardTwo = createBoard();
	const playerOne = createPlayer(1, boardOne, boardTwo);
	const playerTwo = createPlayer(2, boardTwo, boardOne);
	return { playerOne, playerTwo };
}

// TODO add computer player functionality
function createPlayer(number, board, enemyBoard) {
	return {
		number,
		board,
		boardElements: [],
		enemyBoard,
		attack: (idx) => {
			enemyBoard.receiveAttack(idx);
		},
	};
}
