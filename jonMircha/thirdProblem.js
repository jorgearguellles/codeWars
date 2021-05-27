/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

const arrayString = [
	"Hola buenos días",
	"Hola Sexy",
	"Jorge Alberto",
	"Colombia tierra querida",
	"Cali ciudad verde",
	"Buenos días",
	"Ayer si dormí",
];
let indexRandom = Math.floor(Math.random() * arrayString.length);
let arrayToWork = arrayString[indexRandom];

function div(string, space) {
	let dividida = string.split(space);

	console.log(
		`Texto original: "${string}" dividido por "${space}" queda así: ${dividida}`
	);
}
div(arrayToWork, " ");
