const imageNames = [
	'calculator',
	'etch-a-sketch',
	'library',
	'restaurant-page',
	'tic-tac-toe',
];
const images = [];
const dots = [];
let currentImageIdx = 0;
let alreadyAdvanced = false;

// make html elements for each of the images and corresponding dots for the navigation bar
function setUpImagesAndDots() {
	let image;
	let dot;
	for (let i = 0; i < imageNames.length; i++) {
		// add the image
		image = document.createElement('img');
		image.src = `../../../Images/${imageNames[i]}.png`;
		images.push(image);
		// add the dot
		dot = document.createElement('span');
		dot.classList.add('dot');
		const dotsDiv = document.getElementById('dots');
		dotsDiv.appendChild(dot);
		dots.push(dot);
	}
}

// add functionality to the left and right buttons to allow them to switch slides
function setUpButtons() {
	const leftButton = document.getElementById('left');
	const rightButton = document.getElementById('right');
	leftButton.onclick = () => {
		advanceImage(-1);
	};
	rightButton.onclick = () => {
		advanceImage(1);
	};
}

function advanceImage(change) {
	const prev = currentImageIdx;
	wrapIndex(currentImageIdx + change);
	changeDot(prev, currentImageIdx);
	displayImage(prev, currentImageIdx);

	alreadyAdvanced = true;
}

// alters the index if it has to wrap around
function wrapIndex(next) {
	if (next < 0) {
		currentImageIdx = images.length - 1;
	} else if (next === images.length) {
		currentImageIdx = 0;
	} else {
		currentImageIdx = next;
	}
}

// switch the image being displayed to the next image
function displayImage(currentIdx, nextIdx) {
	const pictureDiv = document.getElementById('current-picture');
	const prevImage = images[currentIdx];
	const nextImage = images[nextIdx];

	setTimeout(async () => {
		prevImage.classList.add('previous-image');
		pictureDiv.appendChild(nextImage);
		// wait for 2 seconds before removing the previous image
		await new Promise((r) => setTimeout(r, 2000));
		pictureDiv.removeChild(prevImage);
	}, 100);

	prevImage.classList.remove('previous-image');
}

// update the color of the currently selected dot
function changeDot(currentIdx, nextIdx) {
	dots[currentIdx].style.backgroundColor = 'red';
	dots[nextIdx].style.backgroundColor = 'pink';
}

// display the first image when the page is first loaded
setUpImagesAndDots();
const currentPic = document.getElementById('current-picture');
const firstImage = images[currentImageIdx];
currentPic.appendChild(firstImage);
dots[currentImageIdx].style.backgroundColor = 'pink';
setUpButtons();

setInterval(() => {
	if (!alreadyAdvanced) {
		advanceImage(1);
	}
	alreadyAdvanced = false;
}, 5000);
