// Aumento de Salário
/*

DDD             localização
61              Brasilia
71              Salvador
11              Sao Paulo
21              Rio de Janeiro
32              Juiz de Fora
19              Campinas
27              Vitoria
31              Belo Horizonte 

*/
var input = require('fs').readFileSync('./uri1050/stdin', 'utf8');
const number = parseInt(input)
const ddd = [
    [61, 'Brasilia'],
    [71, 'Salvador'],
    [11, 'Sao Paulo'],
    [21, 'Rio de Janeiro'],
    [32, 'Juiz de Fora'],
    [19, 'Campinas'],
    [27, 'Vitoria'],
    [31, 'Belo Horizonte'],
];

function searchDdd(arr, ddd){
    for (var item of arr) {
        if (item[0] === ddd) return item[1];
    }
    return false;
}
var output = searchDdd(ddd, number);
output === false ? console.log('DDD nao cadastrado'): console.log(output);


