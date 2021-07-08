/*
 * La introducción de este libro aludía a lo siguiente como una buena forma de calcularla 
 * suma de un rango de números: console.log(suma(rango(1, 10)));
 * Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array 
 * que contenga todos los números desde inicio hasta (e in- cluyendo) final.
 * Luego, escribe una función suma que tome un array de números y retorne la suma de estos 
 * números. Ejecuta el programa de ejemplo y ve si realmente retorna 55.
 * Como una misión extra, modifica tu función rango para tomar un tercer argumento 
 * opcional que indique el valor de “paso” utilizado para cuando con- struyas el array.
 * Si no se da ningún paso, los elementos suben en incrementos de uno, correspondiedo al 
 * comportamiento anterior. 
 * La llamada a la función rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9].
 * Asegúrate de que también funcione con valores de pasos negativos para que rango(5, 2, -1)
 *  produzca [5, 4, 3, 2]. 
 */

function rango(n_inicial, n_final){
  let container = [];
  for(let index = n_inicial; index <= n_final; index++){
    container.push(index);
  }
  return container;
};

function sumaArray(arr){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(arr.reduce(reducer));
};

// sumaArray(rango(1,10));

function rangoSalto(n_inicial, n_final,n_salto){
  let container = [];
  if(Math.sign(n_salto) === 1 ){
    for(let index = n_inicial; index <= n_final; index = index + n_salto){
      container.push(index);
    }
    console.log(container);
  } else {
    for(let index = n_inicial; index >= n_final; index = index + n_salto){
      container.push(index);
    }
    console.log(container);
  }
  
};

rangoSalto(1,10,2);
rangoSalto(5,2,-1);