//Salário

var input = require('fs').readFileSync('./uri1008/stdin', 'utf8');
var test = input.replace(/\r?\n|\r/g, ' ').split(' ');
var number = parseInt(test[0]);
var hour = parseInt(test[1]);
var value = parseFloat(test[2]);

var salary = hour * value;
console.log('NUMBER = ' + number+'\n'+'SALARY = U$ ' + salary.toFixed(2));


