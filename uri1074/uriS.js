// Par ou Ímpar
/*

*/
var input = require('fs').readFileSync('./uri1074/stdin', 'utf8');
const numbers = input.split('\r\n');
var n = numbers.shift();
const temp = []
function verifica(x){
  if(x === 0) return temp.push('NULL')
  if(x % 2 === 0) temp.push('EVEN')
  else temp.push('ODD')
  if(x > 0) temp.push('POSITIVE')
  if(x < 0) temp.push('NEGATIVE')
}

for (var i = 0; i < n; i++) {
  verifica(parseInt(numbers[i]))
  console.log(...temp)
  temp.splice(0,2)
}
