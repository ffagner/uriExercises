//Distância Entre Dois Pontos

var input = require('fs').readFileSync('./uri1015/stdin', 'utf8');

var test = input.replace(/\s+/g, ' ').split(' ');
var x1 = parseFloat(test[0]);  
var y1 = parseFloat(test[1]); 
var x2 = parseFloat(test[2]); 
var y2 = parseFloat(test[3]);
var calcularDist = (Math.sqrt(((x2-x1)**2) + ((y2-y1)**2))).toFixed(4);
console.log(calcularDist);