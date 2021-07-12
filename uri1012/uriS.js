//Área
/*
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
*/

var input = require('fs').readFileSync('./uri1012/stdin', 'utf8');
var test = input.replace(/\s+/g, ' ').split(' ');
var a = parseFloat(test[0]);
var b = parseFloat(test[1]);
var c = parseFloat(test[2]);
var pi = 3.14159;
var triangles = ((a * c)/2).toFixed(3); 
var circle = ((c ** 2)*pi).toFixed(3); 
var trapeze = (((a + b) * c)/2).toFixed(3); 
var square = (b**2).toFixed(3); 
var rectangle = (a * b).toFixed(3); 

console.log('TRIANGULO: ' + triangles + '\n');
console.log('CIRCULO: ' + circle + '\n');
console.log('TRAPEZIO: ' + trapeze + '\n');
console.log('QUADRADO: ' + square + '\n');
console.log('RETANGULO: ' + rectangle);


	





