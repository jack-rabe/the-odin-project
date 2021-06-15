// import your function
import variable, { myName } from './myName';

function component() {
	const element = document.createElement('div');

	// use your function!
	element.innerHTML = myName('Jack');
	return element;
}

document.body.appendChild(component());

console.log(variable); // logs Hello (which is the default export)
