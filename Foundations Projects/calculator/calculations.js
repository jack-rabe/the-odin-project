function add(a, b) {
	return a + b;
}

function subtract(minuend, subtrahend) {
	return minuend - subtrahend;
}

function multiply(a, b) {
	return a * b;
}

function divide(dividend, divisor) {
	if (divisor === 0) {
		return 'Error: Divison by Zero!';
	}
	return dividend / divisor;
}

function power(base, exponent) {
	return Math.pow(base, exponent);
}

export function operate(operator, operand1, operand2) {
	let result;
	switch (operator) {
		case '+':
			result = add(operand1, operand2);
			break;
		case '-':
			result = subtract(operand1, operand2);
			break;
		case 'x':
			result = multiply(operand1, operand2);
			break;
		case '/':
			result = divide(operand1, operand2);
			break;
		case '^':
			result = power(operand1, operand2);
			break;
	}
	// round floats to three digits
	if (result % 1 > 0) {
		result = result.toFixed(3);
	}

	return result;
}
