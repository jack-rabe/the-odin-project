export const boardOne = document.getElementById('board-one');
export const boardTwo = document.getElementById('board-two');
// these should be fixed to be more consistent!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const boardOneTiles = () => {
	return Array.from(boardOne.children);
};
export const boardTwoTiles = () => {
	return Array.from(boardTwo.children);
};
