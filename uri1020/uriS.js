//Conversão de Tempo
// metodo 1
var input = require('fs').readFileSync('./uri1020/stdin', 'utf8');
var daysTime = parseInt(input);
var temp = 0;
var year = Math.floor(daysTime / 365);
temp = daysTime % 365;
var month = Math.floor(temp / 30);
temp = temp % 30;
var days = temp;
console.log( year + ' ano(s)' );
console.log( month + ' mes(es)' );
console.log( days + ' dia(s)' );