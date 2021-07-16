//Fórmula de Bhaskara

/*
a, b e c são números reais e a ≠ 0
Se o valor de Δ for menor que zero (Δ<0), a equação não possui raízes reais.

*/
var input = require('fs').readFileSync('./uri1023/stdin', 'utf8');
var number = input.split(' ');
var a = parseFloat(number[0]);
var b = parseFloat(number[1]);
var c = parseFloat(number[2]);
var delta = (b**2) - 4 * a * c;

if (a === 0 || delta < 0){
    console.log('Impossivel calcular');
}else{
    var r1 = ((- b + Math.sqrt(delta))/(2*a)).toFixed(5);  
    var r2 = ((- b - Math.sqrt(delta))/(2*a)).toFixed(5);  
    console.log('R1 = ' + r1)
    console.log('R2 = ' + r2)
}