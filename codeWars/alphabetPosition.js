const alphabet = "abcdefghijklmnopqrstuvwxyz";

function alphabetPosition(text) {
	let char = text.toLowerCase().split("");
	console.log(`El texto ingresado es: ${text}`);
	for (var index = 0; index < char.length; index++) {
		let position = alphabet.indexOf(char[index]);
		if (position >= 0) {
			console.log(
				`Letra ${char[index]} está en la posición Alphabetica:`,
				position
			);
		}
	}
	return text;
}

alphabetPosition("Ayer no comi");

