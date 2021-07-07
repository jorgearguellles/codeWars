/*
 * Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[ N].
 * El valor devuelto será un string que contiene solo un carácter (por ejemplo, "f").
 * El primer carácter tiene posición cero, lo que hace que el último se encuentre en la 
 * posición string.length - 1. En otras palabras, un string de dos caracteres tiene 
 * una longitud de 2, y sus carácteres tendrán las posiciones 0 y 1.
 * Escribe una función contarFs que tome un string como su único argumento y 
 * devuelva un número que indica cuántos caracteres “F” en mayúsculas haya en el string.
 * Despues, escribe una función llamada contarCaracteres que se comporte como contarFs, 
 * excepto que toma un segundo argumento que indica el carácter que debe ser contado 
 * (en lugar de contar solo caracteres “F” en mayúscula).
 * Reescribe contarFs para que haga uso de esta nueva función.
 */

let test = "Fuerza Ferrea Ferrocarril Fortuna"
function countF(str){
  let counter = 0,
    reference = "F";
  for(let index = 0; index < str.length; index++){
    if(str[index] === reference){
      counter = counter + 1
    } 
  }
  console.log(`${str}
   Tiene: ${counter} ${reference} Mayúsculas`);
};

countF(test);

function countAnyCharacter(str,char){
  let counter = 0;
  for(let index = 0; index < str.length; index++){
    if(str[index] === char){
      counter = counter + 1
    } 
  }
  console.log(`${str}
   Tiene: ${counter} ${char}`);
};

countAnyCharacter(test,"r");