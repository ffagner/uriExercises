// Par ou Ímpar
/*

*/
var input = require('fs').readFileSync('./uri1078/stdin', 'utf8');
const number = parseInt(input);

for(var i = 1; i <= 10; i++){  
    console.log(i + ' x ' + number + ' = ' + i*number)
}
