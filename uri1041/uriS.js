//Coordenadas de um Ponto

/*
Leia 2 valores com uma casa decimal (x e y), que devem representar as 
coordenadas de um ponto em um plano. A seguir, determine qual o quadrante 
ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na 
origem (x = y = 0).
q1 = [x, y]
q2 = [-x, y]
q3 = [-x, -y]
q4 = [x, -y]
origem = x=y=0
*/

// var input = require('fs').readFileSync('./uri1041/stdin', 'utf8');
// var number = input.split(' ');
// var x = parseFloat(number[0]);
// var y = parseFloat(number[1]);
// function quadrante(x, y) {
//     if (x === 0 && y === 0) return 'Origem';
//     else if (x === 0 && y !==0) return 'Eixo Y';
//     else if (y === 0 && x !== 0) return'Eixo X';

//     if (x > 0 && y > 0) return 'Q1';
//     else if (x < 0 && y > 0) return 'Q2';
//     else if (x < 0 && y < 0) return 'Q3';
//     else return 'Q4';
// }
// console.log(quadrante(x, y));

var input = require('fs').readFileSync('./uri1041/stdin', 'utf8');
var number = input.split(' ');
var x = parseFloat(number[0]);
var y = parseFloat(number[1]);

function teste (x, y) {
    if (x === 0 && y === 0) return ('Origem'); 
    else if (x === 0 && y !==0) return ('Eixo Y') ;
    else if (y === 0 && x !== 0) return ('Eixo X');

    if (x > 0){
        if (y > 0) return ('q1');
        else return ('q4');
    } else {
        if (y > 0) return ('q2');
        else return ('q3');
    }
}
console.log(teste(x, y))