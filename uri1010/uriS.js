//Cálculo Simples


var input = require('fs').readFileSync('./uri1010/stdin', 'utf8');
function calcular (x, y){
    var total1 = x[1] * x[2];
    var total2 = y[1] * y[2];
    return (total1 + total2).toFixed(2)
}
var test = input.replace(/\s+/g, ' ').split(' ');
var peca1 = test.slice(0,3);
var peca2 = test.slice(3,6);

console.log('VALOR A PAGAR: R$ ' + calcular( peca1, peca2));



