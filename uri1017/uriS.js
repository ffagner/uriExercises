//Gasto de Combustível

var input = require('fs').readFileSync('./uri1017/stdin', 'utf8');

var test = input.replace(/\s+/g, ' ').split(' ');
var time = parseInt(test[0]);
var velocity = parseInt(test[1]);
var valueGas = ((time * velocity)/12).toFixed(3);

console.log(valueGas);