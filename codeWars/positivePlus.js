/*
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers = [1,2,3,4];
function positiveSum(arr) {
  const isNegative = (currentValue) => currentValue < 0;
  if(arr.every(isNegative)){
    console.log(0);
  } else{
    let positiveNumbers = arr.filter(element => element > 0);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(positiveNumbers.reduce(reducer));
  }
}
positiveSum(numbers);
