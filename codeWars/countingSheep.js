/*
Consider an array/list of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).
*/

const sheepList = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

function countSheeps(arrayOfSheep) {
  let sheepsTrue = arrayOfSheep.filter(element => element === true);
  console.log(sheepsTrue.length);
}

countSheeps(sheepList);
