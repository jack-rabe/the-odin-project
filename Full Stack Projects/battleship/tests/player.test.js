import createBothPlayers from '../src/player.js';
import { getSymbolAtIdx } from '../src/board.js';
test('tests that two players are created with the correct numbers and boards', () => {
	const { playerOne, playerTwo } = createBothPlayers();
	expect(playerOne.number).toEqual(1);
	expect(playerTwo.number).toEqual(2);
	expect(playerOne.board).toBe(playerTwo.enemyBoard);
	expect(playerTwo.board).toBe(playerOne.enemyBoard);
});
test('player one is able to initiate a valid attack on player two', () => {
	const { playerOne, playerTwo } = createBothPlayers();
	const attackIdx = 5;
	playerOne.attack(attackIdx);
	expect(getSymbolAtIdx(attackIdx, playerTwo.board)).toEqual('missed');
	for (let i = 0; i < 100; i++) {
		if (i === attackIdx) {
			continue;
		}
		expect(getSymbolAtIdx(i, playerTwo.board)).toBeUndefined();
	}
});
test('when a player tries an invalid attack, an error is thrown', () => {
	const { playerOne } = createBothPlayers();
	const badAttack = () => {
		playerOne.attack(1000);
	};
	expect(badAttack).toThrow('out of range');
});
