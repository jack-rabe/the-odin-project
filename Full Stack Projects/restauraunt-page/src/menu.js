const populateMenuTab = () => {
	const content = document.querySelector('#content');
	const container = document.createElement('div');
	content.appendChild(container);
	container.classList.add('container');

	addItem(container, '../images/burgers.jpg', 'Cheeseburger w/ Fries', 8.0);
	addItem(container, '../images/taco.jpg', 'Vegan Taco', 9.87);
	addItem(container, '../images/fish.jpg', 'Delicious Fish', 7.55);
	addItem(container, '../images/danishPlatter.jpg', 'Danish Platter', 10.0);
	addItem(container, '../images/chilaquiles.jpg', 'Chilaquiles', 7.15);
	addItem(container, '../images/spam.jpg', 'Fresh Spam', 13.99);
};

// adds food items to the grid, (including an image and the price)
function addItem(container, url, name, price) {
	const div = document.createElement('div');
	div.classList.add('menu-item');
	const image = document.createElement('img');
	image.src = url;
	const label = document.createElement('label');
	label.textContent = name + ' $' + price;

	div.appendChild(label);
	div.appendChild(image);
	container.appendChild(div);
}

export default populateMenuTab;
