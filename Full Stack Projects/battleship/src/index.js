import './style.css';
import { boardOne, boardTwo } from './domElements';
import createBothPlayers from './player.js';
const { playerOne, playerTwo } = createBothPlayers();

function renderBoard(player, boardElement) {
	const tiles = player.board.tiles;
	for (let i = 0; i < tiles.length; i++) {
		const row = tiles[i];
		let tileName;

		for (let j = 0; j < row.length; j++) {
			const newTile = document.createElement('div');
			player.board.tileElements.push(newTile);
			newTile.classList.add('tile');
			newTile.dataset.idx = i * 10 + j;

			tileName = 'no ship';
			newTile.classList.add('empty');

			newTile.textContent = tileName;
			boardElement.appendChild(newTile);
		}
	}
}
renderBoard(playerOne, boardOne);
renderBoard(playerTwo, boardTwo);

playerTwo.board.placeShip(5, 5, 1);
playerTwo.board.placeShip(3, 25, 10);
playerOne.board.placeShip(5, 5, 1);
playerOne.board.placeShip(3, 25, 10);

// make sure computer doesn't attack the same tiles twice
playerOne.board.tileElements.forEach((tile) => {
	tile.addEventListener('click', () => {
		const attackIdx = +tile.dataset.idx;
		console.log(attackIdx);
		playerTwo.attack(attackIdx);
		const randomIdx = Math.floor(Math.random() * 100);
		console.log(randomIdx);
		playerOne.attack(randomIdx);
	});
});
