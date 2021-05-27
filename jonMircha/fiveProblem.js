/*  
5) Programa una función que invierta las palabras de una cadena de texto,
pe.miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

function reverseString(str = "") {
	!str
		? console.warn("No ingresaste una cadena de texto")
		: console.log(str.split("").reverse().join(""));
}

reverseString("Ayer");
