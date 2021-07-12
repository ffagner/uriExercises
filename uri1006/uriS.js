//Média 2

var input = require('fs').readFileSync('./uri1006/stdin', 'utf8');
var test = input.replace(/\r?\n|\r/g, ' ').split(' ');
var a = parseFloat(test[0]) * 2;
var b = parseFloat(test[1]) * 3;
var c = parseFloat(test[2]) * 5;
var media = ((a + b + c)/10).toFixed(1);
console.log('MEDIA = ' + media);

