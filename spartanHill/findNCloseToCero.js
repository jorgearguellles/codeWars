let ts = [7, 10, 13, 8, 4, -7.2, -12, -3.7, 3.5, -9.6, 6.5, -1.7, -6.2, 7];

function closesToZero() {
	let absoluteNumbers = ts.map((number) => Math.abs(number));

	let minor = absoluteNumbers.sort(function (a, b) {
		return a - b;
	});

	console.log(minor[0]);
}
closesToZero(ts);
