// Me dan un número A y un número B (A<B) y tengo que sumar A + Números + B = total

function getSum(a, b) {
	if (a !== b) {
		if (a < b) {
			var container = [];
			const reducer = (accumulator, currentValue) => accumulator + currentValue;

			for (var index = a; index <= b; index++) {
				container.push(index);
			}
			console.log(`Lista de números entre ${a} y ${b}:`, container);
			console.log("Suma total de los números:", container.reduce(reducer));
			return container.reduce(reducer);
		} else {
			var container = [];
			const reducer = (accumulator, currentValue) => accumulator + currentValue;

			for (var index = b; index <= a; index++) {
				container.push(index);
			}
			console.log(`Lista de números entre ${b} y ${a}:`, container);
			console.log("Suma total de los números:", container.reduce(reducer));
			return container.reduce(reducer);
		}
	} else {
		console.log(`Los números ingresados son los mismo: ${b} = ${a}`);
		return a;
	}
}

getSum(-5, 5);
getSum(5, 5);
getSum(-565, 72);
getSum(135, -5);

//Best practice:
const GetSum = (a, b) => {
	let min = Math.min(a, b),
		max = Math.max(a, b);
	return ((max - min + 1) * (min + max)) / 2;
};
