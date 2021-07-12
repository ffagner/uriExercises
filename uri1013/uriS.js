//O Maior

var input = require('fs').readFileSync('./uri1013/stdin', 'utf8');
var test = input.split(' ');
var a = parseInt(test[0])
var b = parseInt(test[1])
var c = parseInt(test[2])
var v1 = (a+b+Math.abs(a-b))/2
var v2 = (c+v1+Math.abs(c-v1))/2
console.log(v2 + ' eh o maior')
