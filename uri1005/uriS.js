//Média 1

var input = require('fs').readFileSync('./uri1005/stdin', 'utf8');
var test = input.replace(/\r?\n|\r/g, ' ').split(' ');
var a = parseFloat(test[0]) * 3.5;
var b = parseFloat(test[1]) * 7.5;
var media = ((a + b)/11).toFixed(5);
console.log('MEDIA = ' + media);

