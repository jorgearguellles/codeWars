function seven() {}
function five() {}
function times() {}
function four() {}
function nine() {}
function plus() {}

seven(times(five()));
four(plus(nine()));

// function times(number) {
// 	return function (numberTwo) {
// 		return number * numberTwo;
// 	};
// }

// function plus(number) {
// 	return function (numberTwo) {
// 		return number + numberTwo;
// 	};
// }

// function five(callback) {
// 	return callback ? callback(5) : 5;
// }

// function four(callback) {
// 	return callback ? callback(4) : 4;
// }

// function nine(callback) {
// 	return callback ? callback(9) : 9;
// }

// function seven(callback) {
// 	return callback ? callback(7) : 7;
// }

// seven(times(five()));
// four(plus(nine()));
