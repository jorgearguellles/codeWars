function alphabetPosition(text) {
	const alphabet = "abcdefghijklmnopqrstuvwxyzáéíóúü";

	let minus = text.toLowerCase();
	let chars = minus.split("");

	for (var index = 0; index < chars.length; index++) {
		let position = alphabet.indexOf(chars[index]);

		if (position >= 0) {
			console.log(
				`Letra ${chars[index]} está en la posición Alphabetica :`,
				position
			);
		}
	}
	return text;
}

alphabetPosition("Jorge día");
