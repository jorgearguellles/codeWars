//¿Cómo convertir un Número en cadena de texto?

function numberToString(num) {
	let string = num.toString();
	console.log(
		"El valor del dato es:",
		string,
		"\n",
		"y el tipo de dato es:",
		typeof string
	);
	return string;
}

numberToString(10);
