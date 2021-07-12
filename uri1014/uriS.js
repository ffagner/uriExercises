//Consumo

var input = require('fs').readFileSync('./uri1014/stdin', 'utf8');
var test = input.replace(/\r?\n|\r/g, ' ').split(' ');
var dist = parseInt(test[0]);
var litros = parseFloat(test[1]);
var consumo = (dist / litros).toFixed(3)
console.log(consumo + ' km/l');

