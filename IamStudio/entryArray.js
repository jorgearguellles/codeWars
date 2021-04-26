// Algoritmo que recibe un Array de 3 enteros, entre 1 y 10
//Llene una matriz de 10 columnas y 3 filas que
// cada fila tenga un * según el numero del array de ingreso
//3 horas

let printing = function (numbers) {
	let container = [];
	let row;

	let isBetween = numbers.every((n) => n > 0 && n < 11);

	if (!isBetween) {
		return console.log(`Hay un número menor que 1 y mayor que 10`);
	} else {
		for (let i = 0; i < numbers.length; i++) {
			row = new Array(10 - numbers[i]);
			for (let j = 0; j < numbers[i]; j++) {
				row.unshift("*");
			}
			container.push(row);
		}
	}
	return container;
};
console.log(`Matriz con *:`, printing([6, 4, 5]));
