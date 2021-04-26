// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names,
// which should be separated by an ampersand.

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

function list(names) {
	if (names.length === 0) {
		return console.log("Array vácio:", "...");
	} else if (names.length === 1) {
		return console.log("Nombre:", names[0].name);
	} else if (names.length === 2) {
		let twoNames = names.map(function (name) {
			return name.name;
		});
		console.log(twoNames.join(" & "));
	} else if (names.length > 2) {
		let moreNames = names.map(function (name) {
			return name.name;
		});
		console.log(moreNames.join());
	}
}

list([{ name: "Jorge" }, { name: "Carolina" }, { name: "Carlos" }]);

// let container = [];
// for (var i = 0; i < names.length; i++) {
// 	container.push(names[i].name);
// 	if (container.length < 2) {
// 		let dos = container.join(" & ");
// 		console.log("2", dos);
// 	} else {
// 		let mas = [...container].join();
// 		console.log("A", mas);
// 	}
// }
