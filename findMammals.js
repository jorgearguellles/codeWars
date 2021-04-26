// Find The Mammals

// Given an array containing a list of animal objects, return a new array containing only the
// animals which are mammals. Each animal object contains an animal name (i.e. dog or
// snake) and a value, mammal, which is a boolean indicating whether the animal is a
// mammal.

// What Skills Does This Test?
// - Iterating through an array
// - Accessing properties of an object

const animals = [
	{
		type: "Dog",
		mammal: true,
	},
	{
		type: "Snake",
		mammal: false,
	},
	{
		type: "Cheetah",
		mammal: true,
	},
];

let mammals = animals.filter((animal) => animal.mammal === true);
console.log("Mammals animals:", mammals);
