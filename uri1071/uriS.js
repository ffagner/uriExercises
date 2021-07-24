// Números Ímpares
/*

*/
var input = require('fs').readFileSync('./uri1071/stdin', 'utf8');
const numbers = input.replace(/\s+/g, ' ').split(' ');

var x = parseInt(numbers[0]);
var y = parseInt(numbers[1]);
var cont = 0;
if (x < y){
  for(var i = x + 1; i < y; i++) {
    if (i % 2 !== 0){
      cont = cont + i;
    }
  }
}else{
  for(var i = y + 1; i < x; i++) {
    if (i % 2 !== 0){
      cont = cont + i;
    }
  }
}
console.log(cont);

// 876204483