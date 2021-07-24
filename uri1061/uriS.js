// Tempo de um Evento
/*

*/
var input = require('fs').readFileSync('./uri1061/stdin', 'utf8');
const numbers = input.replace(/:|Dia|/g, '').replace(/\s+/g, ' ').split(' ');
numbers.shift();
const day1 = numbers.slice(0,4);
const day2 = numbers.slice(4,8);
var dayToSeconds = 24 * 60 * 60;
var hourToSeconds = 60 * 60;

var a = (day1[0] * dayToSeconds) + (parseInt(day1[1]) * hourToSeconds) + (day1[2] * 60) + parseInt(day1[3])
var b = (day2[0] * dayToSeconds) + (day2[1] * hourToSeconds) + (day2[2] * 60) + parseInt(day2[3])
var deltaTime = b - a;

var temp = deltaTime % dayToSeconds;
var d = Math.trunc(deltaTime / dayToSeconds);
var h = Math.trunc(temp/hourToSeconds);
temp = temp % hourToSeconds;
var m = Math.trunc(temp/60);
var s = temp % 60;
 
console.log(d +' dia(s)');
console.log(h +' hora(s)');
console.log(m +' minuto(s)');
console.log(s +' segundo(s)');
