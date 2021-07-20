// Múltiplos
/*

*/
var input = require('fs').readFileSync('./uri1044/stdin', 'utf8');
const number = input.split(' ');
number.sort( (a, b) => a - b )
var a = parseInt(number[0])
var b = parseInt(number[1])

b % a === 0 ? console.log('Sao Multiplos') : console.log('Nao sao Multiplos')


