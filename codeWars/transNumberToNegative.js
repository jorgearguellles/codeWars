//¿Cómo verifico si un número es Negativo o convertirlo (si es positivo)?
// Math.sign() -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
function makeNegative(num) {
	if (Math.sign(num) === 1) {
		let transNegative = num * -1;
		return console.log("A:", transNegative);
	} else {
		return console.log("B:", num);
	}
}

makeNegative(4);
makeNegative(-4);
makeNegative(0);
makeNegative(-0);
makeNegative(40);

//Best practice:
// Math.abs() -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function makeNeg(num) {
	return console.log("A1:", -Math.abs(num));
}

makeNeg(4);
makeNeg(-4);
makeNeg(0);
makeNeg(-0);
makeNeg(40);
