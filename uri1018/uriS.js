//notas
// metodo 1
var input = require('fs').readFileSync('./uri1018/stdin', 'utf8');
var number = parseInt(input);
var tempRest = 0;
var n100 = Math.floor(number/100);
tempRest = number%100;
var n50 = Math.floor(tempRest/50);
tempRest = tempRest % 50;
var n20 = Math.floor(tempRest/20);
tempRest = tempRest % 20;
var n10 = Math.floor(tempRest/10);
tempRest = tempRest % 10;
var n5 = Math.floor(tempRest/5);
tempRest = tempRest % 5;
var n2 = Math.floor(tempRest/2);
tempRest = tempRest % 2;
var n1 = tempRest;

console.log(number)
console.log(n100 + ' nota(s) de R$ 100,00')
console.log(n50 + ' nota(s) de R$ 50,00')
console.log(n20 + ' nota(s) de R$ 20,00')
console.log(n10 + ' nota(s) de R$ 10,00')
console.log(n5 + ' nota(s) de R$ 5,00')
console.log(n2 + ' nota(s) de R$ 2,00')
console.log(n1 + ' nota(s) de R$ 1,00')

//metodo 2 (fatorado)
const notas = [100,50,20,10,5,2,1];
var valor = parseInt(input);
console.log(valor);
for (var i = 0; i < notas.length; i++) {
    var result = Math.floor(valor/notas[i]);
    console.log(result + ' nota(s) de R$ ' + notas[i] + ',00');
    valor = valor - result * notas[i];
}
