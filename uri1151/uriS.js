// Fibonacci Fácil

/*
A seguinte sequência de números 0 1 1 2 3 5 8 13 21... 
é conhecida como série de Fibonacci. Nessa sequência, 
cada número, depois dos 2 primeiros, é igual à soma dos 2 anteriores.
Escreva um algoritmo que leia um inteiro N (N < 46) e 
mostre os N primeiros números dessa série.
Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 46).
exemplo de entrada: 5
Exemplo de Saída: 0 1 1 2 3
*/

var input = require('fs').readFileSync('./uri1151/stdin', 'utf8');
var value = parseInt(input);
const arr = [0,1];
var n1 = 0;
var n2 = 1;
var replay = 2;

while (true) {
    var temp = n1 + n2;
    replay++
    if(replay <= value){
        arr.push(temp);
        n1 = n2;
        n2 = temp; 
    }else break;
 } 
console.log(...(arr.slice(0, value)));

