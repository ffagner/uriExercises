//Produto Simples

var input = require('fs').readFileSync('./uri1004/stdin', 'utf8');
var test = input.replace(/\r?\n|\r/g, ' ').split(' ');
var a = parseInt(test[0]);
var b = parseInt(test[1]);
var PROD = a * b;
console.log('PROD = ' + PROD);

