//Notas e Moedas
var input = require('fs').readFileSync('./uri1021/stdin', 'utf8');
const notas = [100,50,20,10,5,2];
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

var valor = parseFloat(input);
console.log('NOTAS:');
for (var i = 0; i < notas.length; i++) {
    var result = Math.floor(valor/notas[i]);
    console.log(result + ' nota(s) de R$ ' + notas[i] + '.00');
    valor = valor % notas[i];

}
console.log('MOEDAS:');
for (var j = 0; j < moedas.length; j++) {
    var result2 = Math.floor(valor/moedas[j]);
    console.log(result2 + ' moeda(s) de R$ ' + (moedas[j]).toFixed(2));
    valor = (valor % moedas[j]).toFixed(2);

}