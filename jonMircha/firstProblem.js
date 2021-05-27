/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10. */

function generateDataTest() {
	let indexRandom = Math.floor(Math.random() * 4);

	const arrayTest = [
		"Hola Sexy",
		10987,
		[1, 2, 3, 4, 5, 6, 7],
		{
			firstName: "Jorge",
			lastName: "Arias",
			city: "Cali",
			country: "Colombia",
		},
	];

	let elementToTest = arrayTest[indexRandom];
	return elementToTest;
}

function countCharacters(dataTest) {
	Object.size = function (dataTest) {
		let size = 0,
			key;
		for (key in dataTest) {
			if (dataTest.hasOwnProperty(key)) size++;
		}
		return size;
	};

	if (typeof dataTest === "string") {
		console.log("Dato de prueba: ", dataTest, "Longitud: ", dataTest.length);
	} else if (typeof dataTest === "number") {
		console.log(
			"Dato de prueba: ",
			dataTest,
			"Longitud: ",
			dataTest.toString().length
		);
	} else if (typeof dataTest === "object") {
		let size = Object.size(dataTest);
		console.log("Dato de prueba: ", dataTest, "Longitud: ", size);
	} else {
		console.log("Dato de prueba: ", dataTest, "Longitud: ", dataTest.length);
	}
}

countCharacters(generateDataTest());
