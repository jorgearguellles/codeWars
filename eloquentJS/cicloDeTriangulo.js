/* 
Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:
#
##
###
####
#####
######
#######
*/


let count = 1;
let num = "#";
while( count < 8){
  console.log(num.repeat(count));
  count = count + 1;
}

for(let index = 1; index < 8; index++){
  console.log(num.repeat(index));
};