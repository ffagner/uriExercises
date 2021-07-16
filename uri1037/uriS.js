//Intervalo

/*
([0,25], (25,50], (50,75], (75,100])

*/
var input = require('fs').readFileSync('./uri1037/stdin', 'utf8');
var number = parseFloat(input);

function verificar(x){
    const intervalo = [[0,25], [25,50], [50,75], [75,100]];
    if(x < 0 || x > 100) return 'Fora de intervalo';
    if(x <= 25) return 'Intervalo [0,25]';
    if(x <= 50) return 'Intervalo (25,50]';
    if(x <= 75) return 'Intervalo (50,75]';
    if(x <= 100) return 'Intervalo (75,100]';
}
console.log(verificar(number));