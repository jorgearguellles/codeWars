/*
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
*/

let str = "Jorge";

function solution(str){
  let reverse = str.split("").reverse().join("");
  console.log(reverse);
}

solution(str);