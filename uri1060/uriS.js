// Números Positivos
/*

*/
var input = require('fs').readFileSync('./uri1060/stdin', 'utf8');
const numbers = input.replace(/\s+/g, ' ').split(' ');
var cont = 0;

function numberPositive(x){
    parseInt(x);
    if (x === 0) return;
    if (x > 0) return cont++
}

for(var item of numbers){
    numberPositive(item);
}
console.log(cont + ' valores positivos');