const populateAboutTab = () => {
	const content = document.querySelector('#content');

	const descriptionAsString =
		"Charlotte's Place is the premier dining location in Fond du Lac, Wisconsin." +
		'We pride ourselves on our fabulous customer service, our attention to detail' +
		', and our scrumptious peppermint brownies. We have been in the business since ' +
		"the late 1930's and we hope to continue for many more years. But we never could've" +
		' done it without you, our amazing, loyal customers! ';
	const description = document.createElement('p');
	description.id = 'full-description';
	description.textContent = descriptionAsString;

	content.appendChild(description);
};

export default populateAboutTab;
