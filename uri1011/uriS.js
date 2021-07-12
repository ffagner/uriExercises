//	Esfera

var input = require('fs').readFileSync('./uri1011/stdin', 'utf8');
var raio = parseFloat(input);
var pi =  3.14159;
var volume = ((4/3) * pi * (raio ** 3)).toFixed(3);

console.log('VOLUME = ' + volume);

