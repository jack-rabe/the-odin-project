import createShip from './ship.js';

const getCoordinates = (idx) => {
	const xPos = idx % 10;
	const yPos = Math.floor(idx / 10);
	return { xPos, yPos };
};

const calculateShipTilesIdxs = (length, startingPos, posChange) => {
	// calculate the position that the tiles of the new ship will be on
	const newTilesIdxs = [];
	length--;
	while (length > -1) {
		newTilesIdxs.push(startingPos + length * posChange);
		length--;
	}
	return newTilesIdxs;
};

const allShipsSunk = (tiles) => {
	for (const row of tiles) {
		for (const tile of row) {
			if (tile && tile.hasOwnProperty('hit') && tile.hasOwnProperty('isSunk')) {
				return false;
			}
		}
	}
	return true;
};

export default function createBoard() {
	// create the 2-D array representation of the board
	const tiles = [];
	for (let i = 0; i < 10; i++) {
		tiles.push(new Array(10));
	}

	function checkValidPlacement(length, startingPos, posChange) {
		if (length > 5) {
			throw new Error(`Ships cannot have length ${length}!`);
		} else if (Math.abs(posChange) !== 1 && Math.abs(posChange) !== 10) {
			throw new Error(
				`${posChange} is an invalid number for the difference in ship positions!`
			);
		}
		// calculate the position that the tiles of the new ship will be on
		const newTilesIdxs = calculateShipTilesIdxs(length, startingPos, posChange);
		// make sure none of these positions overlap with already placed ships or go off the board
		newTilesIdxs.forEach((idx) => {
			const { xPos, yPos } = getCoordinates(idx);
			if (idx < 0 || idx > 99) {
				throw new Error(`${idx} is not a valid position!`);
			} else if (tiles[yPos][xPos]) {
				throw new Error(`A ship has already been placed at index ${idx}!`);
			}
		});
		// make sure all indices are on either the same row or the same column
		const startPos = getCoordinates(newTilesIdxs[0]);
		const endPos = getCoordinates(newTilesIdxs[newTilesIdxs.length - 1]);
		if (startPos.xPos !== endPos.xPos && startPos.yPos !== endPos.yPos) {
			throw new Error(
				'Ship must be placed in either the same row or the same column!'
			);
		}
	}

	return {
		tiles,
		placeShip: (length, startingPos, posChange) => {
			checkValidPlacement(length, startingPos, posChange);
			const ship = createShip(length, startingPos, posChange);
			const shipTilesIdxs = calculateShipTilesIdxs(
				length,
				startingPos,
				posChange
			);
			shipTilesIdxs.forEach((idx) => {
				const { xPos, yPos } = getCoordinates(idx);
				tiles[yPos][xPos] = ship;
			});
			return ship;
		},
		receiveAttack: (idx) => {
			if (idx < 0 || idx > 99) {
				throw new Error(`The index ${idx} is out of range!`);
			}
			const { xPos, yPos } = getCoordinates(idx);
			const possibleShip = tiles[yPos][xPos];

			if (possibleShip === 'missed' || possibleShip === 'hit') {
				throw new Error(
					`The tile at row ${yPos} column ${xPos} was already guessed!`
				);
			} else if (possibleShip) {
				possibleShip.hit(idx);
				tiles[yPos][xPos] = 'hit';
			} else {
				tiles[yPos][xPos] = 'missed';
			}
		},
		allShipsSunk: allShipsSunk.bind(null, tiles),
	};
}

export function getSymbolAtIdx(idx, board) {
	const { xPos, yPos } = getCoordinates(idx);
	// for some reason row needs to be converted into an Array
	const row = Array.from(board.tiles[yPos]);
	return row[xPos];
}
