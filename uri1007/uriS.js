//Diferença

var input = require('fs').readFileSync('./uri1007/stdin', 'utf8');
var test = input.replace(/\r?\n|\r/g, ' ').split(' ');
var a = parseInt(test[0]);
var c = parseInt(test[2]);
var b = parseInt(test[1]);
var d = parseInt(test[3]);
var diferenca = ( a * b ) - ( c * d );
console.log('DIFERENCA = ' + diferenca);

