var input = require('fs').readFileSync('./uri1042/stdin', 'utf8');
const number = input.split(' ');
const numberOrder = [...number];
numberOrder.sort(function (a, b) {return a - b});
console.log(parseInt(numberOrder[0]));
console.log(parseInt(numberOrder[1]));
console.log(parseInt(numberOrder[2]));
console.log()
console.log(parseInt(number[0]))
console.log(parseInt(number[1]))
console.log(parseInt(number[2]))
