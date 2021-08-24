import './style.css';
import createBothPlayers from './player.js';
const { playerOne, playerTwo } = createBothPlayers();
console.log(playerOne.board.tiles);

const boardOne = document.getElementById('board-one');
for (const row of playerOne.board.tiles) {
	for (let tile of row) {
		const newDiv = document.createElement('div');
		console.log(tile);
		if (!tile) {
			tile = 'no ship';
		} else {
			console.log(tile);
		}
		newDiv.textContent = tile;
		boardOne.appendChild(newDiv);
	}
}
