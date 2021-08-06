// Experiências
/*

*/
var input = require('fs').readFileSync('./uri1094/stdin', 'utf8');
const numbers = input.split('\r\n');
var num = numbers.shift();
const arr = [];
var c = 0;
var r = 0;
var s = 0;
var totalAmos = 0;
numbers.map( x => arr.push(x.split(' ')));
for(var i = 0; i < num; i++) {{
    totalAmos += parseInt(arr[i][0]);
    switch (arr[i][1]) {
        case 'C':
            c += parseInt(arr[i][0]);
            break;
        case 'R':
            r += parseInt(arr[i][0]);
            break;
        case 'S':
            s += parseInt(arr[i][0]);
            break;
    }
}}
console.log('Total: ' + totalAmos + ' cobaias');
console.log('Total de coelhos: ' + c);
console.log('Total de ratos: ' + r);
console.log('Total de sapos: ' + s);
console.log('Percentual de coelhos: ' + ((c/totalAmos)*100).toFixed(2) + ' %');
console.log('Percentual de ratos: ' + ((r/totalAmos)*100).toFixed(2) + ' %');
console.log('Percentual de sapos: ' + ((s/totalAmos)*100).toFixed(2) + ' %');