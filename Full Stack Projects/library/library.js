class Book {
	constructor(title, author, numPages, haveRead) {
		this.title = title;
		this.author = author;
		this.numPages = numPages;
		this.haveRead = haveRead ? 'Read' : 'Not Read';
	}
}

// returns the key stored in session storage for a given book
function getBookKey(book) {
	return `Book: ${book.title}`;
}

const myLibrary = [];
const storage = window.sessionStorage;

function addBookToLibrary(book) {
	myLibrary.push(book);
	storage.setItem(`Book: ${book.title}`, JSON.stringify(book));
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
	const curStatus = book.haveRead;
	book.haveRead = curStatus === 'Read' ? 'Not Read' : 'Read';
	storage.setItem(getBookKey(book), JSON.stringify(book));
	displayAllBooks();
}

function removeBook(bookIdx) {
	const book = myLibrary[bookIdx];
	delete storage[getBookKey(book)];
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
const form = document.querySelector('#book-form');
form.addEventListener('submit', (e) => {
	// check if the user has read the book
	const readBtn = document.querySelector('#read');
	const isRead = readBtn.checked ? true : false;
	// collect the typed user input in an array
	let input = Array.from(document.querySelectorAll('.long-input'));
	input = input.map((element) => element.value);
	// create the new Book and add to the library if it is valid
	const newBook = new Book(...input, isRead);
	addBookToLibrary(newBook);
});

// loads books already in storage, (by default session storage has one value with live server)
if (storage.length > 1) {
	for (let book in storage) {
		if (book.substring(0, 4) === 'Book') {
			myLibrary.push(JSON.parse(storage[book]));
		}
	}
	displayAllBooks();
}
// add several default books to the library when the page first loads
else if (storage.length <= 1) {
	(() => {
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
	})();
}
