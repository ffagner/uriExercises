// Área do Círculo

var input = require('fs').readFileSync('./uri1002/stdin', 'utf8');
var raio = parseFloat(input);
const pi = 3.14159;
var area = (pi * (raio*raio)).toFixed(4);
console.log("A=" + area);
