//Intervalo

/*
1: 4.00
2: 4.50
3: 5.00
4: 2.00
5: 1.50
*/
var input = require('fs').readFileSync('./uri1038/stdin', 'utf8');
var number = input.split(' ');
var a = number[0];
var b = number[1];

const table = {
    1: 4.00,
    2: 4.50,
    3: 5.00,
    4: 2.00,
    5: 1.50 
};
 var total = (table[a] * b).toFixed(2); 
console.log('Total: R$ ' + total);