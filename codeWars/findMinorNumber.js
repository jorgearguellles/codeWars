var array = [1, 2, 3, 4, 5, 6, 7, 886, 545, 333, 4];

var min = array.map(function (x) {
	let min = Math.min(x, array.length);
	return console.log(min);
});

//1. iterar el arreglo -> forEach
//2. comparr si elemento A es menor que elemento B
//3. guardar en una variable
