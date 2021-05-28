/*
7) Programa una función que valide si una palabra o frase dada, 
es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

let str = "salas";

let characters = str.toLocaleLowerCase().split("");

function deleteSpaces(characters) {
	let charactersOrdered = [];
	for (let i = 0; i < characters.length; i++) {
		if (characters[i] != " ") {
			charactersOrdered.push(characters[i]);
		}
	}
	return charactersOrdered;
}

function arrayEquals(charsOrdered, charsReversed) {
	for (var i = 0; i < charsOrdered.length; ++i) {
		if (charsOrdered[i] !== charsReversed[i])
			return console.log(
				`El texto "${str}" no es Palíndromo: ${charsReversed.join("")}`
			);
	}
	return console.log(
		`El texto "${str}" si es Palíndromo: ${charsReversed.join("")}`
	);
}

arrayEquals(deleteSpaces(characters), deleteSpaces(characters).reverse());
