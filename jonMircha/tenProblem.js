/*
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/
let numToSeparate = 200;

let arr = Array.from(String(numToSeparate), Number);
console.log(arr);

function arrayEquals(numOrdered, numReversed) {
	for (let i = 0; i < numOrdered.length; ++i) {
		if (numOrdered[i] !== numReversed[i])
			return console.log(
				`El texto "${numToSeparate}" no es Palíndromo: ${numReversed.join("")}`
			);
	}
	return console.log(
		`El texto "${numToSeparate}" si es Palíndromo: ${numReversed.join("")}`
	);
}

arrayEquals(arr, arr.reverse());
