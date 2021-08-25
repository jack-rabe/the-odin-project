import './style.css';
import { boardOne, boardTwo, boardOneTiles } from './domElements';
import createBothPlayers from './player.js';
const { playerOne, playerTwo } = createBothPlayers();

function renderBoard(player, boardElement) {
	// remove old elements
	while (boardElement.firstChild) {
		boardElement.removeChild(boardElement.firstChild);
	}
	// add new elements
	const tiles = player.board.tiles;
	for (let i = 0; i < tiles.length; i++) {
		const row = tiles[i];
		let tileName;

		for (let j = 0; j < row.length; j++) {
			const tile = row[j];

			const newDiv = document.createElement('div');
			newDiv.classList.add('tile');
			newDiv.dataset.idx = i * 10 + j;

			// tile is empty
			if (!tile) {
				tileName = 'no ship';
				newDiv.classList.add('empty');
			}
			// a ship is placed on the tile
			else if (tile.type) {
				tileName = tile.type;
				newDiv.classList.add('ship');
			}
			// tile is either hit or missed
			else {
				tileName = tile;
				newDiv.classList.add(tileName);
			}
			newDiv.textContent = tileName;
			boardElement.appendChild(newDiv);
		}
	}
}

playerTwo.board.placeShip(5, 5, 1);
playerTwo.board.placeShip(3, 25, 10);
playerOne.board.placeShip(5, 5, 1);
playerOne.board.placeShip(3, 25, 10);

renderBoard(playerOne, boardOne);
renderBoard(playerTwo, boardTwo);

boardOneTiles().forEach((tile) => {
	tile.addEventListener('click', () => {
		playerTwo.attack(+tile.dataset.idx);
		renderBoard(playerOne, boardOne);
	});
});
