/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
  pe.miFuncion("Hola Mundo", 4) devolverá "Hola". */

const arrayString = [
	"Hola",
	"Hola Sexy",
	"Jorge Alberto",
	"Colombia",
	"Cali",
	"Buenos días",
	"Ayer si dormí",
];
let indexRandom = Math.floor(Math.random() * arrayString.length);
let arrayToWork = arrayString[indexRandom];
let maxString = arrayToWork.length;
let indexToCutRandom = Math.floor(Math.random() * maxString);

function cutString(inputString, indexToCut) {
	let srtCut = inputString.slice(0, indexToCut);
	console.log(
		`Texto inicial "${inputString}" que al cortarlo en el indice ${indexToCut} daría el siguiente texto cortado: "${srtCut}"`
	);
}
cutString(arrayToWork, indexToCutRandom);
