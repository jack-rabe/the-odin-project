const populateHomeTab = () => {
	const content = document.querySelector('#content');

	const img = document.createElement('img');
	img.src = ' ../images/restaurant.jpg';
	img.alt = 'restaurant interior';
	img.id = 'restauraunt-interior';
	content.appendChild(img);

	const descriptionAsString = `Charlotte's place has been serving custormers authentic American cuisine
    for over 50 years and never ceases to innovate, while at the same time,
    managing to hold true to the principles declared by its founder. Our
    motto is "The customer is always right!"`;
	const description = document.createElement('p');
	description.textContent = descriptionAsString;
	content.appendChild(description);
};

export default populateHomeTab;
