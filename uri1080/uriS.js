// Maior e Posição
/*

*/
var input = require('fs').readFileSync('./uri1080/stdin', 'utf8');
const numbers = input.split('\r\n');
const arrTemp = Array(...numbers);
var position = 0;
arrTemp.sort(function(a, b) {return a - b;});
var num = arrTemp.pop();
for(var i in numbers) {
    if (numbers[i] == num){
        position = parseInt(i) + 1;
    }
}
console.log(num);
console.log(position);