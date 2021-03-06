/**
 * El operador == compara objetos por identidad.
 * Pero a veces preferirias com- parar los valores de sus propiedades reales.
 * Escribe una función igualdadProfunda que toma dos valores y retorne true solo si tienen
 * el mismo valor o son objetos con las mismas propiedades, donde los valores de las
 * propiedades sean iguales cuando comparadas con una llamada recursiva a igualdadProfunda.
 * 
 * Para saber si los valores deben ser comparados directamente (usa el operador == para eso)
 * o si deben tener sus propiedades comparadas, puedes usar el operador typeof.
 * Si produce "object" para ambos valores, deberías hacer una comparación profunda.
 * Pero tienes que tomar una excepción tonta en cuenta: debido a un accidente histórico,
 * typeof null también produce "object".
 * 
 * La función Object.keys será útil para cuando necesites revisar las propiedades de 
 * los objetos para compararlos.
 */

function igualdadProfunda(a,b){
  if(typeof a == "object" && typeof b == "object"){

  } else if(typeof a == typeof b ){
    console.log(`El tipo del valor ${a} es identico al tipo del valor ${b}`)

  }
};

igualdadProfunda(2,3);