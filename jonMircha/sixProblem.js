/* Cuantas A hay en una cadena de texto*/
let cadena = "Cuantas 'A' aparecen en esta cadena.";

let indices = [];
for (let i = 0; i < cadena.length; i++) {
	if (cadena[i].toLowerCase() === "a") indices.push(i);
}

/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

let str =
	"Hola un como están, hoy es un bonito día, así como yer fue una bonita un noche";

function countWordTimes(str, word) {
	let count = [];
	for (let i = 0; i < str.length; i++) {
		let wordStr = str.split(" ");
		if (wordStr[i] === word) {
			count.push(wordStr[i]);
		}
	}
	console.log(
		`La palabra "${word}" esta ${count.length} veces en el texto: "${str}"`
	);
}

countWordTimes(str, "un");
