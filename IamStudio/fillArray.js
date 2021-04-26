//Llenar un array con los primeros 10 números pares, iniciando con el número 2 y que lo imprima
// 1 hora

let container = [];
let maxLength = 10;

for (var index = 2; index < 100; index++) {
	if (index % 2 == 0) {
		container.push(index);
		if (container.length === maxLength) {
			return console.log(
				`Array con los primeros ${maxLength} números pares:`,
				container
			);
		}
	}
}
