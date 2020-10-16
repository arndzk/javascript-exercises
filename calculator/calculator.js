function add (x, y) {
	const result = x + y;
	return result;
}

function subtract (x, y) {
	const result = x - y;
	return result;
}

function sum (values) {
	let result = 0;
	for (let i = 0; i < values.length; i++) {
		result += values[i];
	}
	return result;
}

function multiply (values) {
	let result = values[0];
	for(let i = 1; i < values.length; i++) {
		result *= values[i];
	}
	return result;
}

function power(x, y) {
	const result = x ** y;
	return result;
}

function factorial(num) {
	if (num < 0) {
		return -1;
	} else if (num == 0) {
		return 1;
	} else {
		return (num * factorial(num - 1));
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}