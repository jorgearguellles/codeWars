/*
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

/*  Respuesta de Jon */

const capicua = (numero) => {
	if(!numero) return console.warn("No ingresaste un número");

	if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un número.`)

	numero = numero.toString();
	let alReves = numero.split("").reverse().join("");

	return( numero === alReves)
		? console.info(`Sí es capicúa porque el número ingresado es el mismo al derecho ${numero} y al reves ${alReves}`)
		: console.info(`No es capicúa porque el número ingresado no es el mismo al derecho ${numero} y al reves ${alReves}`);
}

capicua();
capicua("2");
capicua(200);
capicua(202);
