// Pares, Ímpares, Positivos e Negativos
/*

*/
var input = require('fs').readFileSync('./uri1066/stdin', 'utf8');
const numbers = input.replace(/\s+/g, ' ').split(' ');
var contPar = 0;
var contImpar = 0;
var contPositivo = 0;
var contNegativo = 0;

for(var i = 0; i < 5; i++){
    var num = parseInt(numbers[i]);
    if (num > 0) contPositivo++;
    if (num < 0) contNegativo++;
    if (num % 2 === 0)contPar++;
    else contImpar++;
}
// console.log(numbers)
console.log(contPar + ' valor(es) par(es)');
console.log(contImpar + ' valor(es) impar(es)');
console.log(contPositivo + ' valor(es) positivo(s)');
console.log(contNegativo + ' valor(es) negativo(s)');

/*
***************
*** 1,4 ****
  4 valor(es) par(es)
! 2 valor(es) impar(es)
  3 valor(es) positivo(s)
  1 valor(es) negativo(s)
--- 1,4 ----
  4 valor(es) par(es)
! 1 valor(es) impar(es)
  3 valor(es) positivo(s)
  1 valor(es) negativo(s)
 Differences were found
*/

