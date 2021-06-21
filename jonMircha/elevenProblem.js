/*
11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, 
  se define como el producto de todos los números enteros positivos desde 1 hasta n),
pe. miFuncion(5) devolverá 120.
 */

const factorial = (numero = undefined) => {
  if(numero === undefined) return console.warn(`No ingresaste un número`);
  if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un número`);
  if(numero === 0) return console.error(`El número no puede ser 0`);
  if(Math.sign(numero) === -1) return console.error(`El número no puede ser negativo`);
  
  let factorial = 1;

  for (let index = numero; index > 1; index--){
    factorial = factorial * index;
  }
  return console.log(`El factorial del número ${numero} es igual a: ${factorial}`)
}

factorial();
factorial("1");
factorial(0);
factorial(-2);
factorial(5);

