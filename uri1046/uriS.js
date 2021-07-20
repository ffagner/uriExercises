// Tempo de Jogo
/*

*/
var input = require('fs').readFileSync('./uri1046/stdin', 'utf8');
const number = input.split(' ');
var a = parseInt(number[0]);
var b = parseInt(number[1]);

if(a === b){
    console.log('O JOGO DUROU 24 HORA(S)');
}else if(a > b){
    var hours = 24 - (a - b);
    console.log('O JOGO DUROU ' + hours + ' HORA(S)'); 
}else {
    var hours = (b - a);
    console.log('O JOGO DUROU ' + hours + ' HORA(S)');
}


