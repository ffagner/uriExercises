// Números Ímpares
/*

*/
var input = require('fs').readFileSync('./uri1072/stdin', 'utf8');
const numbers = input.split('\r\n');
var n = numbers.shift();
var contIn = 0;
var contOut = 0;
for (var i = 0; i < n; i++) {
  if (numbers[i] >= 10 && numbers[i] <= 20){
    contIn++; 
  }else{
    contOut++;
  }
}
console.log(contIn + ' in')
console.log(contOut + ' out')
var lines = input.split('\n');