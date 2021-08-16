function createShip(length, startingPos, posChange) {
	// add all grid numbers the ship occupies to an array
	const endingPos = startingPos + posChange * length;
	const tiles = [];
	for (let i = startingPos; i !== endingPos; i += posChange) {
		tiles.push(i);
	}
	return {
		length,
		isSunk: () => {
			const regex = /^[0-9]+$/;
			return !tiles.some((char) => regex.test(char));
		},
		hit: (pos) => {
			const idx = tiles.findIndex((val) => val === pos);
			if (idx === -1) {
				throw new Error('This position has already been hit!');
			}
			tiles[idx] = 'X';
		},
	};
}

module.exports = createShip;
