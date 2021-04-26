// Array multidimensional
// 1:30 hora

let matriz = [];
let matrizSize = 5;

for (let row = 0; row < matrizSize; row++) {
	matriz[row] = [];
	for (let col = 0; col < matrizSize; col++) {
		matriz[row][col] = row + "," + col;
	}
}

console.log(`Matriz ${matrizSize} x ${matrizSize}:`, matriz);
