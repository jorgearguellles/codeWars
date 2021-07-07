/*
 * Hemos visto que % (el operador de residuo) se puede usar para probar si un número es par o
 * impar usando % 2 para ver si es divisible entre dos. Aquí hay otra manera de definir 
 * si un número entero positivo es par o impar:
 * • Zero es par.
 * • Uno es impar.
 * • Para cualquier otro número N, su paridad es la misma que N - 2.
 * Define una función recursiva esPar que corresponda a esta descripción.
 * La función debe aceptar un solo parámetro (un número entero, positivo) y 
 * devolver un Booleano.
 * Pruébalo con 50 y 75. Observa cómo se comporta con -1. Por qué?
 * Puedes pensar en una forma de arreglar esto?
 */

function isPair(number){
  if(number < 0){
    console.warn(number, "No es un entero positito")
  } else if(number === 0){
    console.warn(true)
  } else if(number === 1){
    console.warn(false)
  } else {
    isPair(number - 2)
  }
};

isPair(-1);
isPair(0);
isPair(1);
isPair(2);
isPair(3);
isPair(34);
isPair(50);
isPair(75);

