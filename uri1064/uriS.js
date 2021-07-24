// Positivos e Média
/*

*/
var input = require('fs').readFileSync('./uri1064/stdin', 'utf8');
const numbers = input.replace(/\s+/g, ' ').split(' ');
var cont = 0;
var n = 0;

for(var item of numbers){
    var num = parseFloat(item);
    if (num > 0){
        cont += num;
        n++;
    }
}
console.log(n + ' valores positivos');
console.log((cont/n).toFixed(1));