import populateHomePage from './home.js';
import populateMenuPage from './menu.js';
import populateAboutPage from './about.js';
import './style.css';

// cause the buttons to change the content to the appropriate setting
const homeBtn = document.querySelector('#home');
homeBtn.onclick = () => {
	removeOldContent();
	populateHomePage();
};
const menuBtn = document.querySelector('#menu');
menuBtn.onclick = () => {
	removeOldContent();
	populateMenuPage();
};
const aboutBtn = document.querySelector('#about');
aboutBtn.onclick = () => {
	removeOldContent();
	populateAboutPage();
};

// remove all elements from content when the user switches tabs
function removeOldContent() {
	const content = document.querySelector('#content');
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
}

// add elements to the home page screen when the website loads
populateHomePage();
