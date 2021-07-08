const topButton = document.getElementById('top-button');
topButton.onclick = () => {
	const hiddenButtons = Array.from(
		document.getElementById('hidden-div').children
	);
	hiddenButtons.forEach((button) => {
		if (button.classList.contains('hidden')) {
			button.classList.remove('hidden');
			button.classList.add('under');
		} else {
			button.classList.add('hidden');
			button.classList.remove('under');
		}
	});
};

// make buttons all the same size;
topButton.style.width = '15%';
document.getElementById('hidden-div').style.width = '15%';
