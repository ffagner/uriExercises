//Conversão de Tempo
// metodo 1
var input = require('fs').readFileSync('./uri1019/stdin', 'utf8');
var number = parseInt(input);
var temp = 0;
var hours = Math.floor(number / 3600);
temp = number % 3600;
var minutes = Math.floor(temp / 60);
temp = number % 60;
var seconds = temp;
console.log(hours + ':' + minutes + ':' + seconds);