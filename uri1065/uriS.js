// Positivos e Média
/*

*/
var input = require('fs').readFileSync('./uri1065/stdin', 'utf8');
const numbers = input.replace(/\s+/g, ' ').split(' ');
var cont = 0;

for(var item of numbers){
    var num = parseInt(item);
    if (num % 2 === 0){
        cont++
    }
}
console.log(cont + ' valores pares');

