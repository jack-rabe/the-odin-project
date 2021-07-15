const form = document.getElementById('form');
// just a few countries are given for the sake of example
const countries = ['United States', 'Canada', 'Spain', 'South Africa'];

form.addEventListener('submit', (e) => {
	console.log('hi');
	const countryTag = document.getElementById('country');
	const passwordTag = document.getElementById('password');
	const passwordConfirmationTag = document.getElementById(
		'password-confirmation'
	);

	// verify the country entered is valid
	if (!countries.includes(countryTag.value)) {
		preventSubmission(e, 'Please enter a real country');
	}

	// verify the password meets all requirements
	const password = passwordTag.value;
	const passwordConfirmation = passwordConfirmationTag.value;
	const uppercaseRegex = /[A-Z]/;
	const lowercaseRegex = /[a-z]/;
	const numberRegex = /[1-9]/;

	if (password.length < 8) {
		preventSubmission(e, 'short');
	} else if (password.search(uppercaseRegex) === -1) {
		preventSubmission(e, 'no uppercase');
	} else if (password.search(lowercaseRegex) === -1) {
		preventSubmission(e, 'no lowercase');
	} else if (password.search(numberRegex) === -1) {
		preventSubmission(e, 'no number');
	}
	// make sure the password confirmation matches the original password
	if (password !== passwordConfirmation) {
		preventSubmission(e, 'Password and confirmation do not match');
	}
});

function preventSubmission(error, errorMessage) {
	console.log(errorMessage);
	error.preventDefault();
}
