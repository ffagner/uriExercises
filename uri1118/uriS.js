// Várias Notas Com Validação

var input = require('fs').readFileSync('./uri1118/stdin', 'utf8');
var lines = input.split('\r\n');

const isValid = value => value <= 10 && value >= 0;
var nota1 = null;
var nota2 = null;
var std = false;
var media = null;
var decision = false;

for(var i = 0; i < lines.length; i++) {
    if(decision) {
            console.log('novo calculo (1-sim 2-nao)')
            if(lines[i] === '1'){
                decision = false;
                continue; 
            }
            else if(lines[i] === '2'){
                break;
            }   
        }else{
        if(!isValid(lines[i])){
            console.log('nota invalida')
            continue;
        }else {
            if (nota1 == null) {
                nota1 = parseFloat(lines[i]);
                continue;
            }else{
                nota2 = parseFloat(lines[i]);
                std = true;
            }
        }if (std){
            media = ((nota1 + nota2)/2).toFixed(2)
            decision = true;
            nota1 = null;
            nota2 = null;
            console.log('media = ' + media)
        }
    }
}
