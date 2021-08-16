import createShip from '../src/ship.js';

describe('test ship factory function', () => {
	test('ship object has the correct attributes and values', () => {
		const length = 5;
		const ship = createShip(length, 10, -1);
		expect(ship.length).toEqual(length);
		expect(ship.isSunk()).toEqual(false);
		expect(ship.hit).toBeDefined();
	});
	test('ship of length one sinks after a single hit', () => {
		const ship = createShip(1, 0, 1);
		expect(ship.isSunk()).toEqual(false);
		ship.hit(0);
		expect(ship.isSunk()).toEqual(true);
	});
	test("ship of length two doesn't sink after a single hit", () => {
		const ship = createShip(2, 5, 1);
		ship.hit(5);
		expect(ship.isSunk()).toEqual(false);
	});
	test('error is thrown when ship is hit twice in the same position', () => {
		const ship = createShip(2, 0, 1);
		const hitShipTwice = () => {
			ship.hit(0);
			ship.hit(0);
		};
		expect(hitShipTwice).toThrow('This position has already been hit!');
	});
	test('ship of length three is placed on the correct tiles', () => {
		const ship = createShip(3, 0, 2);
		ship.hit(0);
		ship.hit(2);
		ship.hit(4);
		expect(ship.isSunk()).toEqual(true);
	});
	test('ship that has a negative position change is located correctly', () => {
		const ship = createShip(2, 10, -5);
		ship.hit(10);
		ship.hit(5);
		expect(ship.isSunk()).toEqual(true);
	});
});
