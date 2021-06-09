let myLibrary = [];

class Book {
	constructor(title, author, numPages, haveRead) {
		this.title = title;
		this.author = author;
		this.numPages = numPages;
		this.haveRead = haveRead ? 'Read' : 'Not Read';
	}
}

function addBookToLibrary(book) {
	// check that the user has entered all of the necessary info
	if (!book.title || !isNaN(+book.title)) {
		alert('Please enter a title.');
		return;
	} else if (!book.author || !isNaN(+book.author)) {
		alert('Please enter an author.');
		return;
	} else if (
		isNaN(+book.numPages) ||
		+book.numPages <= 0 ||
		+book.numPages % 1 !== 0
	) {
		alert('Please enter a positive number.');
		return;
	}

	myLibrary.push(book);
	displayAllBooks();
}

function displayBook(book) {
	const bookTable = document.getElementById('book-table');
	const newRow = document.createElement('tr');
	bookTable.appendChild(newRow);

	// add all of the user input to the table
	for (const key of Object.values(book)) {
		const newElement = document.createElement('td');
		newElement.textContent = key;
		newRow.appendChild(newElement);

		// allow users to select and deselect the read attribute
		if (key === 'Read' || key === 'Not Read') {
			newElement.addEventListener('click', (e) => {
				switchStatus(book);
			});
		}
	}
	// allows users to remove a book from the list by clicking the
	// far right column
	const removeQuasiButton = document.createElement('td');
	removeQuasiButton.textContent = 'X';
	removeQuasiButton.addEventListener('click', (e) => {
		removeBook(myLibrary.indexOf(book));
	});
	newRow.appendChild(removeQuasiButton);
}

function displayAllBooks() {
	// remove previous data and replace it with updated results
	const bookTable = document.getElementById('book-table');
	removeTableData(bookTable);

	myLibrary.forEach((book) => {
		displayBook(book);
	});
}

function switchStatus(book) {
	book.haveRead = book.haveRead === 'Read' ? 'Not Read' : 'Read';
	displayAllBooks();
}

function removeBook(bookIdx) {
	myLibrary.splice(bookIdx, 1);
	displayAllBooks();
}

// remove all of the table data while preserving the headers
function removeTableData(node) {
	const children = Array.from(node.childNodes);

	for (let i = 0; i < children.length; i++) {
		let currentChild = children[i];
		if (currentChild.nodeName == 'TR') {
			node.removeChild(currentChild);
		}
	}
}

// adds logic to the "Add Book" button to allow the user to add more books
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (e) => {
	// check if the user has read the book
	const readBtn = document.querySelector('#read');
	const isRead = readBtn.checked ? true : false;
	// collect the typed user input in an array
	let input = Array.from(document.querySelectorAll('.long-input'));
	input = input.map((element) => element.value);
	// create the new Book and add to the library if it is valid
	const newBook = new Book(...input, isRead);
	const initialLength = myLibrary.length;
	addBookToLibrary(newBook);
	// if book is added, reset the form so more books can be added
	if (myLibrary.length > initialLength) {
		const form = document.querySelector('#book-form');
		form.reset();
	}
});

// add several book to the library at the beginning
const harryPotter = new Book(
	'Harry Potter and the Order of the Phoenix',
	'J.K Rowling',
	870,
	true
);
const artemisFowl = new Book('Artemis Fowl', 'Eoin Colfer', 280, true);
const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 310, false);
addBookToLibrary(harryPotter);
addBookToLibrary(artemisFowl);
addBookToLibrary(theHobbit);
displayAllBooks();
