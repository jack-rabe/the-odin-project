import { operate } from './calculations.js';

let operand1;
let operand2;
let operator;
let newButton;
let buttonContent;
let currentDisplay = '';

const screen = document.querySelector('#screen');
const numberButtonGrid = document.querySelector('#number-buttons');
const operateButtonGrid = document.querySelector('#operate-buttons');

// create the number button grid (left side of calculator)
const numberButtonOrder = [7, 8, 9, 4, 5, 6, 1, 2, 3, '+/-', 0, '.'];
for (let i = 0; i < numberButtonOrder.length; i++) {
	buttonContent = numberButtonOrder[i];
	newButton = document.createElement('button');
	newButton.setAttribute('id', buttonContent);
	newButton.textContent = buttonContent;
	numberButtonGrid.appendChild(newButton);
}

// create the operate button grid (right side of calculator)
const operateButtonOrder = ['C', 'AC', '/', 'x', '+', '-', '=', '^'];
for (let i = 0; i < operateButtonOrder.length; i++) {
	buttonContent = operateButtonOrder[i];
	newButton = document.createElement('button');
	newButton.setAttribute('id', buttonContent);
	newButton.textContent = buttonContent;
	operateButtonGrid.appendChild(newButton);
}

// Create an array containing only number buttons
const numberButtons = Array.from(numberButtonGrid.children);
numberButtons[9] = numberButtons[10]; // remove the non-number buttons from array
numberButtons.pop();
numberButtons.pop();
// add numbers to screen when clicked
numberButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		// wipe away existing error messages
		if (currentDisplay.toLowerCase().includes('error')) {
			currentDisplay = '';
		}
		currentDisplay += button.textContent;
	});
});

// Create an array containing the operators (/, x, +, -, and ^)
const operateButtons = Array.from(operateButtonGrid.children);
operateButtons[6] = operateButtons[7]; // remove the non-operator buttons from array
operateButtons.pop();
operateButtons.shift();
operateButtons.shift();
// Make the operate buttons store data when clicked at the right time
operateButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		// an operator has already been selected, so do nothing
		if (operator) {
			return;
		}
		// otherwise store the current number on the screen and the operand
		operand1 = currentDisplay;
		currentDisplay = '';
		operator = button.textContent;
	});
});

// add a decimal when clicked and there isn't already a decimal point
const decimalButton = document.getElementById('.');
decimalButton.addEventListener('click', (e) => {
	if (currentDisplay && !currentDisplay.includes('.')) {
		currentDisplay += '.';
	}
});

// changes the number from positive to negative and vice versa
const plusMinusButton = document.getElementById('+/-');
plusMinusButton.addEventListener('click', (e) => {
	const numberOnScreen = Number(currentDisplay);
	if (numberOnScreen < 0) {
		currentDisplay = currentDisplay.substring(1);
	} else if (numberOnScreen > 0) {
		currentDisplay = '-' + currentDisplay;
	}
});

// performs calculation when equals button is clicked
const equalsButton = document.getElementById('=');
equalsButton.addEventListener('click', (e) => {
	// checks to make sure there are values for both operands and operator
	if (operand1 && operator && !isNaN(+currentDisplay)) {
		let result = operate(operator, +operand1, +currentDisplay);

		currentDisplay = result;
		operand1 = currentDisplay;
		operand2 = null;
		operator = null;

		// handle division by zero separately
		operand1 = null;
	}
});

// clears screen when 'C' button is clicked
const clearScreenButton = document.getElementById('C');
clearScreenButton.addEventListener('click', (e) => {
	currentDisplay = '';
	// clear first operand when an answer has previously been calculated
	if (operand1 && !operator) {
		operand1 = null;
	}
});

// clears memory when 'AC' button is clicked
const clearMemoryButton = document.getElementById('AC');
clearMemoryButton.addEventListener('click', (e) => {
	operand1 = null;
	operand2 = null;
	operator = null;
	currentDisplay = '';
});
// update display after button is clicked (added last to make sure
// other event listeners fire first)
const allButtons = [
	...operateButtonGrid.children,
	...numberButtonGrid.children,
];
allButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		screen.textContent = currentDisplay;
	});
});
