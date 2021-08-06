// Médias Ponderadas
/*

*/
var input = require('fs').readFileSync('./uri1079/stdin', 'utf8');
const numbers = input.split('\r\n');
var num = numbers.shift();
function calcular(arr){
    var a = arr[0] * 2;
    var b = arr[1] * 3;
    var c = arr[2] * 5;
    return ((a + b + c) / 10).toFixed(1);
}
for (var i = 0; i < num; i++) {
    const arrTemp = numbers[i].split(' ');
    console.log(calcular(arrTemp))
}

