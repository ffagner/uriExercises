// Quadrado de Pares
/*

*/
var input = require('fs').readFileSync('./uri1073/stdin', 'utf8');
const number = parseInt(input);

for(var i = 1; i <= number; i++) {
  if(i % 2 === 0){
    console.log(i + '^2' + ' = ' + i**2)
  }
}
