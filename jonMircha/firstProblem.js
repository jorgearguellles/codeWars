/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10. */

let testRandom = Math.floor(Math.random() * 3);

let generate = (testRandom) => {
	let str = "Hola Sexy";
	let number = 12345;
	let array = [6, 7, 8, 9, 0];
	let object = {
		firstName: "Jorge",
		lastName: "Arias",
		city: "Cali",
		country: "Colombia",
	};

	if (testRandom === 1) {
		console.log(str);
	} else if (testRandom === 2) {
		return number;
	} else if (testRandom === 3) {
		return array;
	} else if (testRandom === 4) {
		return object;
	}
};

function countCharacters(generate) {
	return generate;
}
