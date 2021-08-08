function capitalized(str) {
	return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}

function reversed(str) {
	const arr = [];
	for (const letter of str) {
		arr.unshift(letter);
	}
	return arr.join('');
}

const calculator = {
	add: (num1, num2) => {
		return num1 + num2;
	},
	subtract: (num1, num2) => {
		return num1 - num2;
	},
	divide: (num1, num2) => {
		return num1 / num2;
	},
	multiply: (num1, num2) => {
		return num1 * num2;
	},
};

function cipher(str, offset) {
	const lowerStr = str.toLowerCase();
	const regex = /[a-z||A-Z]/;
	let newStr = '';
	let charCode;
	for (let i = 0; i < lowerStr.length; i++) {
		// skip punctuation
		const char = lowerStr.charAt(i);
		if (!regex.test(char)) {
			newStr += char;
			continue;
		}
		// calculate the new character to be added using the offset
		charCode = ((lowerStr.charCodeAt(i) + offset - 97) % 26) + 97;
		newStr += String.fromCharCode(charCode);
	}
	// make the letters uppercase again that need to be
	for (const idx of getCapitalIndices(str)) {
		const replacement = newStr.charAt(idx).toUpperCase();
		newStr = newStr.substring(0, idx) + replacement + newStr.substring(idx + 1);
	}
	return newStr;
}

function getCapitalIndices(str) {
	const arr = [];
	let letter;
	const regex = /[A-Z]/;
	for (let i = 0; i < str.length; i++) {
		letter = str.charAt(i);
		if (regex.test(letter)) {
			arr.push(i);
		}
	}
	return arr;
}

function analyzeArray(arr) {
	let min,
		max,
		total = 0;
	for (const num of arr) {
		if (!min || min > num) {
			min = num;
		}
		if (!max || max < num) {
			max = num;
		}
		total += num;
	}
	return {
		average: total / arr.length,
		min,
		max,
		length: arr.length,
	};
}

module.exports = { capitalized, reversed, calculator, cipher, analyzeArray };
