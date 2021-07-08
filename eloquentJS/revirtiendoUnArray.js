/**
 * Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que aparecen
 * sus elementos. Para este ejercicio, escribe dos funciones, revertirArray y 
 * revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y 
 * produce un nuevo array que tiene los mismos ele- mentos pero en el orden inverso.
 * El segundo, revertirArrayEnSuLugar, hace lo que hace el métodoreverse: modifica el
 * array dado como argumento invirtiendo sus elementos. Ninguno de los dos puede usar el
 * método reverse estándar.
 */

const invertirManual = arreglo => {
  // Guardar de una vez la longitud para hacer más legible el código
  let longitudDelArreglo = arreglo.length;
  // Recorrer arreglo hasta la mitad. Si es impar, se va al entero anterior más 
  // próximo. P. ej. 5 / 2 => 2
  for (let x = 0; x < longitudDelArreglo / 2; x++) {
    // Respaldar el valor actual
    let temporal = arreglo[x];
    console.log("Temporal:",temporal);
    // Calcular el índice contrario, es decir, el del otro lado de la mitad; el cual irá descendiendo
    let indiceContrario = longitudDelArreglo - x - 1;
    console.log("IndiceContrario:",indiceContrario);
    // En el actual ahora está el del otro lado
    arreglo[x] = arreglo[indiceContrario];
    // Y en el otro lado, el que estaba originalmente en el actual
    arreglo[indiceContrario] = temporal;
  }
  console.log(arreglo)
};

invertirManual([1,2,3,4]);