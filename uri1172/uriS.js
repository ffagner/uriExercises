// Substituição em Vetor I

var input = require('fs').readFileSync('./uri1172/stdin', 'utf8');
const lines = input.split('\r\n');

for(var i = 0; i < 10; i++) {
    var num = parseInt(lines[i] <= 0 ? 1: lines[i]);
    console.log('X[' + i + '] = ' + num);
}



