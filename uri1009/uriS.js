//Salário com Bônus

var input = require('fs').readFileSync('./uri1009/stdin', 'utf8');
var test = input.replace(/\r?\n|\r/g, ' ').split(' ');
var fixedSalary= parseFloat(test[1]);
var sales = parseFloat(test[2]);
var percents = 15/100;
var totalSalary = (fixedSalary + (percents*sales)).toFixed(2);
console.log('TOTAL = R$ ' + totalSalary);


