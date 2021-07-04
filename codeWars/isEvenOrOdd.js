function even_or_odd(number) {
	number % 2 == 0
		? console.log(`${number} is EVEN`)
		: console.log(`${number} is ODD`);
}

even_or_odd(1);
even_or_odd(2);
even_or_odd(3);
even_or_odd(4);
even_or_odd(5);

// forma valida  para codewars
function even_or_odd1(number) {
	if (number % 2 == 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

//Best practice CodeWars
function even_or_odd0(number) {
	return number % 2 ? "Odd" : "Even";
}
