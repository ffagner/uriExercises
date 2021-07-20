// Tempo de Jogo com Minutos
/*

*/
var input = require('fs').readFileSync('./uri1047/stdin', 'utf8');
const number = input.split(' ');
var a = parseInt(number[0]);
var b = parseInt(number[1]);
var c = parseInt(number[2]);
var d = parseInt(number[3]);

var hours1 = (a * 60 + b)
var hours2 = (c * 60 + d)
if(hours1 === hours2){
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
}else if(hours1 > hours2) {
    var time = 1440 - (hours1 - hours2)
    var timeHour = Math.trunc(time/60)
    var timeMin = time % 60
    console.log('O JOGO DUROU ' + timeHour + ' HORA(S) E ' + timeMin + ' MINUTO(S)')
}else{
    var time = hours2 - hours1
    var timeHour = Math.trunc(time/60)
    var timeMin = time % 60
    console.log('O JOGO DUROU ' + timeHour + ' HORA(S) E ' + timeMin + ' MINUTO(S)')  
}
