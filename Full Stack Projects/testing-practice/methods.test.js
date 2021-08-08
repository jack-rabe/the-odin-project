const {
	capitalized,
	reversed,
	calculator,
	cipher,
	analyzeArray,
} = require('./methods.js');

// These tests and the functions in the other file should ideally be separated into separate files to increase readability,
// but I kept them in two files for the sake of convenience
describe('Takes a string and returns it with the first letter capitalized', () => {
	test('single word, all lowercase', () => {
		const str = 'jack';
		expect(capitalized(str)).toEqual('Jack');
	});
	test('single word, all uppercase', () => {
		const str = 'MOUNTAIN';
		expect(capitalized(str)).toEqual('MOUNTAIN');
	});
	test('two words, all lowercase', () => {
		const str = 'fat cat';
		expect(capitalized(str)).toEqual('Fat cat');
	});
	test('single character, lowercase', () => {
		const str = 'a';
		expect(capitalized(str)).toEqual('A');
	});
	test('empty string', () => {
		const str = '';
		expect(capitalized(str)).toEqual('');
	});
});

describe('Reverses a string', () => {
	test('single word', () => {
		const str = 'jack';
		expect(reversed(str)).toEqual('kcaj');
	});
	test('two words', () => {
		const str = 'Amazon rainforest';
		expect(reversed(str)).toEqual('tserofniar nozamA');
	});
	test('empty string', () => {
		const str = '';
		expect(reversed(str)).toEqual('');
	});
});

describe('Performs simple arithmetic', () => {
	test('positive addition', () => {
		const result = calculator.add(5, 4);
		expect(result).toEqual(9);
	});
	test('negative addition', () => {
		const result = calculator.add(-5, 4);
		expect(result).toEqual(-1);
	});
	test('subtraction', () => {
		const result = calculator.subtract(5, 4);
		expect(result).toEqual(1);
	});
	test('multiplication', () => {
		const result = calculator.multiply(5, 4);
		expect(result).toEqual(20);
	});
	test('integer division', () => {
		const result = calculator.divide(20, 4);
		expect(result).toEqual(5);
	});
	test('floating point division', () => {
		const result = calculator.divide(5, 4);
		expect(result).toBeCloseTo(1.25);
	});
});

describe('Encrypts a string with the Caesar Cipher', () => {
	test('single word, all lowercase', () => {
		const str = 'apple';
		const offset = 1;
		expect(cipher(str, offset)).toEqual('bqqmf');
	});
	test('single word, some uppercase', () => {
		const str = 'Man';
		const offset = 2;
		expect(cipher(str, offset)).toEqual('Ocp');
	});
	test('string with space and punctuation', () => {
		const str = 'a, x';
		const offset = 1;
		expect(cipher(str, offset)).toEqual('b, y');
	});
	test('string that will wrap (from z to a)', () => {
		const str = 'xyZ';
		const offset = 3;
		expect(cipher(str, offset)).toEqual('abC');
	});
});

describe('Calculates the average, minimum, maximum, and length of an array of numbers', () => {
	test('average calculation', () => {
		const arr1 = [1, 2, 3, 4, 5];
		const arr2 = [1];
		expect(analyzeArray(arr1).average).toEqual(3);
		expect(analyzeArray(arr2).average).toEqual(1);
	});
	test('min calculation', () => {
		const arr1 = [1, 2, 3, 4, 5];
		const arr2 = [1];
		const arr3 = [-5, 4, -6, 8, 10];
		expect(analyzeArray(arr1).min).toEqual(1);
		expect(analyzeArray(arr2).min).toEqual(1);
		expect(analyzeArray(arr3).min).toEqual(-6);
	});
	test('max calculation', () => {
		const arr1 = [1, 2, 3, 4, 5];
		const arr2 = [1];
		const arr3 = [15, 4, -6, 8, 10];
		expect(analyzeArray(arr1).max).toEqual(5);
		expect(analyzeArray(arr2).max).toEqual(1);
		expect(analyzeArray(arr3).max).toEqual(15);
	});
	test('length calculation', () => {
		const arr1 = [1, 2, 3, 4, 5, 1, 1, 1];
		const arr2 = [1];
		const arr3 = [3, 15, 4, -6, 8, 10];
		expect(analyzeArray(arr1).length).toEqual(8);
		expect(analyzeArray(arr2).length).toEqual(1);
		expect(analyzeArray(arr3).length).toEqual(6);
	});
});
