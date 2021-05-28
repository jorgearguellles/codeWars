/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

function getRandomArbitrary(min, max) {
	console.log(Math.floor(Math.random() * (max - min) + min));
}
getRandomArbitrary(501, 600);
