//Intervalo

/*
media de 04 valores
N1 p = 2 
N2 p = 3
N3 p = 4
N4 p = 1
*/

var input = require('fs').readFileSync('./uri1040/stdin', 'utf8');
var number = input.replace(/\s+/g, ' ').split(' ');

var [n1, n2, n3, n4] = [...number];
var media = ((n1 * 2 + n2 * 3 + n3 * 4 + n4 *1) / 10).toFixed(1);
console.log('Media: ' + media);
if(media >= 7.0){
    console.log('Aluno aprovado.');
}else if (media >= 5.0){
    console.log('Aluno em exame.');
    console.log('Nota do exame: ' + number[4]);
    var mediaFinal = ((parseFloat(media) + parseFloat(number[4])) / 2);
    if (mediaFinal > 5.0){
        console.log('Aluno aprovado.');
    }else{
        console.log('Aluno reprovado.');
    }
    console.log('Media final: ' + mediaFinal.toFixed(1));
}else{
    console.log('Aluno reprovado.');
}