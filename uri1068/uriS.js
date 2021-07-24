// Números Ímpares
/*

*/
var input = require('fs').readFileSync('./uri1068/stdin', 'utf8');
var x = parseInt(input);
var j = x + 12;

for (var i = x; i < j; i++) {
  if(i % 2 !== 0){
    console.log(i)
  }
}