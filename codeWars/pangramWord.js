/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram.
Return True if it is, False if not. Ignore numbers and punctuation.
*/

/*
1. Pasar la sentence a minusculas
2. Separaría la Sentence por letra
3. Separar el apphabeto pro letra
4. Comparar cada eltra de la sentencia si esta incluida en el alpahebot
*/

function isPangram(sentence) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let sentenceToWork = sentence.toLowerCase().split("");

	sentenceToWork.map((character) => {
		console.log(alphabet.includes(character));
	});
}

isPangram("The quick brown fox jumps over the lazy dog.");
