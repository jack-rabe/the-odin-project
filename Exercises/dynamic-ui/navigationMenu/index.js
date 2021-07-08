const topButton = document.getElementById('top-button');
topButton.onclick = () => {
	const triggerDivs = Array.from(document.getElementsByClassName('trigger'));
	const hiddenButtons = [];
	triggerDivs.forEach((trigger) => {
		hiddenButtons.push(trigger.children[0]);
	});
	// make buttons appear and disappear when the top one is clicked
	hiddenButtons.forEach((button) => {
		if (button.style.display === 'block') {
			button.style.display = 'none';
		} else {
			button.style.display = 'block';
		}
	});
};
