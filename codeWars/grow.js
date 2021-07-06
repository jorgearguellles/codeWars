/*
Given a non-empty array of integers, return the result of multiplying 
the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

let numbers = [1, 2, 3, 4,5];

function grow(x){
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
    console.log(x.reduce(reducer));
}
grow(numbers);

/*
Arrow function syntax:
const grow=x=> x.reduce((accumulator, currentValue) => accumulator * currentValue);
*/