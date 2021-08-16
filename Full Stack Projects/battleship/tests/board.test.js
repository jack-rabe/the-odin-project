import createBoard from '../src/board.js';

describe('test valid ship placements on the board', () => {
	test('board has the correct number of tiles (100)', () => {
		const board = createBoard();
		expect(board.tiles.length).toEqual(10);
		for (let i = 0; i < 10; i++) {
			expect(board.tiles[i].length).toEqual(10);
		}
	});
	test('ship can be placed at a given position', () => {
		const board = createBoard();
		const ship = board.placeShip(2, 0, 1);
		expect(board.tiles[0][0]).toEqual(ship);
		expect(board.tiles[0][1]).toEqual(ship);
	});
	test('no errors are thrown when ships are placed in valid positions', () => {
		function createGoodShip(startIdx, posChange) {
			const board = createBoard();
			board.placeShip(3, startIdx, posChange);
		}

		expect(createGoodShip.bind(null, 0, 1)).not.toThrow();
		expect(createGoodShip.bind(null, 15, 1)).not.toThrow();
		expect(createGoodShip.bind(null, 79, 10)).not.toThrow();
		expect(createGoodShip.bind(null, 0, 1)).not.toThrow();
		expect(createGoodShip.bind(null, 99, -10)).not.toThrow();
		expect(createGoodShip.bind(null, 30, 10)).not.toThrow();
	});
});

describe('test error-handling behavior of board when placing ships', () => {
	test('error will be thrown when two ships are placed on the same tile', () => {
		function createOverlappingShips() {
			const board = createBoard();
			board.placeShip(3, 12, -1);
			board.placeShip(3, 12, -1);
		}
		expect(createOverlappingShips).toThrow(
			'A ship has already been placed at index'
		);
	});
	test('error will be thrown when two ships overlap at a single position', () => {
		function createOverlappingShips() {
			const board = createBoard();
			board.placeShip(3, 25, 1);
			board.placeShip(2, 27, 1);
		}
		expect(createOverlappingShips).toThrow(
			'A ship has already been placed at index'
		);
	});
	test('errors will be thrown when placed ship will run off the board', () => {
		const errorMsg = 'is not a valid position!';
		function createBadShip(startIdx, posChange) {
			const board = createBoard();
			board.placeShip(3, startIdx, posChange);
		}
		expect(createBadShip.bind(null, 0, -1)).toThrow(errorMsg);
		expect(createBadShip.bind(null, 100, -1)).toThrow(errorMsg);
		expect(createBadShip.bind(null, 90, 10)).toThrow(errorMsg);
		expect(createBadShip.bind(null, 98, 1)).toThrow(errorMsg);
	});
	test('error wil be thrown when placed ship will span multiple rows and columns', () => {
		const errorMsg =
			'Ship must be placed in either the same row or the same column!';
		function createBadShip(startIdx, posChange) {
			const board = createBoard();
			board.placeShip(4, startIdx, posChange);
		}
		expect(createBadShip.bind(null, 9, 1)).toThrow(errorMsg);
		expect(createBadShip.bind(null, 87, 1)).toThrow(errorMsg);
		expect(createBadShip.bind(null, 90, -1)).toThrow(errorMsg);
		expect(createBadShip.bind(null, 58, 1)).toThrow(errorMsg);
	});
});

describe('tests the receive attack function of the board', () => {
	test('tests several valid attacks that hit ships', () => {
		const board = createBoard();
		const ship = board.placeShip(3, 0, 1);
		board.receiveAttack(0);
		expect(ship.isSunk()).toEqual(false);
		board.receiveAttack(1);
		expect(ship.isSunk()).toEqual(false);
		board.receiveAttack(2);
		expect(ship.isSunk()).toEqual(true);
	});
	test("throws error for attacks that don't hit the board", () => {
		const errorMsg = 'out of range';
		const board = createBoard();
		function badAttack(idx) {
			board.receiveAttack(idx);
		}

		expect(badAttack.bind(null, 500)).toThrow(errorMsg);
		expect(badAttack.bind(null, 100)).toThrow(errorMsg);
		expect(badAttack.bind(null, 200)).toThrow(errorMsg);
	});
	test('throws an error when the same position is attacked twice', () => {
		const errorMsg = 'already guessed';
		const board = createBoard();
		function attackTwice() {
			board.receiveAttack(0);
			board.receiveAttack(0);
		}
		expect(attackTwice).toThrow(errorMsg);
	});
	test('tests that missed shots appear on the board', () => {
		const board = createBoard();
		board.receiveAttack(0);
		board.receiveAttack(1);
		board.receiveAttack(55);

		let shotsMissed = 0;
		for (const row of board.tiles) {
			row.forEach((tile) => {
				if (tile === 'missed') {
					shotsMissed++;
				}
			});
		}
		expect(shotsMissed).toEqual(3);
	});
	test('board is able to properly tell whether all ships have been sunk', () => {
		const board = createBoard();
		expect(board.allShipsSunk()).toEqual(true);
		board.placeShip(2, 0, 1);
		expect(board.allShipsSunk()).toEqual(false);
		board.receiveAttack(0);
		board.receiveAttack(1);
		expect(board.allShipsSunk()).toEqual(true);
	});
});
