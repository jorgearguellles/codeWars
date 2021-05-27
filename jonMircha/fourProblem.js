/* 4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

const arrayString = [
	"Hola buenos días ",
	"Hola Sexy ",
	"Jorge Alberto ",
	"Colombia tierra querida ",
	"Cali ciudad verde ",
	"Buenos días ",
	"Ayer si dormí ",
];
let indexRandom = Math.floor(Math.random() * arrayString.length);
let arrayToWork = arrayString[indexRandom];

function repeatStr(array, times) {
	let srtR = array.repeat(times);
	console.log(`Este texto "${array}" repetido ${times}, se ve así: ${srtR}`);
}

repeatStr(arrayToWork, 3);
