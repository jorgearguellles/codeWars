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
let arrayTest = arrayString[indexRandom];

function cutString(arrayTest) {
	let maxString = arrayString[indexRandom].length;
	let indexToCutRandom = Math.floor(Math.random() * maxString);
	let srtCut = arrayTest.slice(0, indexToCutRandom);
	console.log(
		`Texto inicial: "${arrayTest}" que al cortarlo en el indice ${indexToCutRandom} daría este texto cortado: "${srtCut}"`
	);
}
cutString(arrayTest);
