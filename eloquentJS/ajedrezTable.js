/*
Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, 
usando caracteres de nueva línea para separar las líneas. 
En cada posición de la cuadrícula hay un espacio o un carácter "#".
Los caracteres deberían de formar un tablero de ajedrez.

Pasar este string a console.log debería mostrar algo como esto:
_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_

Cuando tengas un programa que genere este patrón, define una vinculación tamaño = 8 y 
cambia el programa para que funcione con cualquier tamaño, dando como salida una 
cuadrícula con el alto y ancho dados.
*/

let width = 7
function ajedrezTable(width){
  let odd = "#",
  pair = "_",
  jump = "\n";
  let row = [];
  for(let indexRow = 1; indexRow <= width ; indexRow++){
    for(let indexItem = 1; indexItem <= width+1 ; indexItem++){
      if(indexItem % (width+1) == 0){
        row.push(jump);
      } else if(indexItem % 2 == 0){
        row.push(indexRow % 2 != 0 ? odd : pair);
      } else{
        row.push(indexRow % 2 == 0 ? odd : pair);
      }
    } 
  }
  console.log(row.join("").toString());
}

ajedrezTable(width);