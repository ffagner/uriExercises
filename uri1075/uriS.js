// Par ou Ímpar
/*

*/
var input = require('fs').readFileSync('./uri1075/stdin', 'utf8');
const number = parseInt(input);

for(var i = 1; i < 100; i++){
  if(i % number === 2){
    console.log(i)
  }
}
