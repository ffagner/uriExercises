//Teste de Seleção 1

/*
Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C 
e se D for maior do que A, e a soma de C com D for maior que a soma de A e B 
e se C e D, ambos, forem positivos e se a variável A for par escrever a 
mensagem "Valores aceitos", senão escrever "Valores nao aceitos".
*/
var input = require('fs').readFileSync('./uri1022/stdin', 'utf8');
var number = input.split(' ');
var a = parseInt(number[0]);
var b = parseInt(number[1]);
var c = parseInt(number[2]);
var d = parseInt(number[3]);
if (a % 2 === 0 && (c && d > 0) && (c + d > a + b) && (b > c && d > a)){
    console.log('Valores aceitos');
}
else{
    console.log('Valores nao aceitos');
}
