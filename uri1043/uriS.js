// Triângulo
/*
Só irá existir um triângulo se, somente se, os seus lados obedeceram 
à seguinte regra: um de seus lados deve ser maior que o valor 
absoluto (módulo) da diferença dos outros dois lados e menor que a 
soma dos outros dois lados. Veja o resumo da regra abaixo:

| b - c | < a < b + c
| a - c | < b < a + c
| a - b | < c < a + b
*/
var input = require('fs').readFileSync('./uri1043/stdin', 'utf8');
const number = input.split(' ');
var a = parseFloat(number[0]);
var b = parseFloat(number[1]);
var c = parseFloat(number[2]);

if (((b - c ) < a) && a < (b + c)){
    console.log('Perimetro = ' + (a+b+c).toFixed(1));
}else{
    console.log('Area = ' + (((a + b) * c)/2).toFixed(1));
}