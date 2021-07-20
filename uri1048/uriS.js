// Aumento de Salário
/*

Salário                     Percentual de Reajuste
0 - 400.00                  15%
400.01 - 800.00             12%
800.01 - 1200.00            10%
1200.01 - 2000.00           7%
Acima de 2000.00            4%

Novo salario: 460.00
Reajuste ganho: 60.00
Em percentual: 15 %

*/
var input = require('fs').readFileSync('./uri1048/stdin', 'utf8');
const number = input.split(' ');
var salary = parseFloat(number[0]);
var ajust = 0.00;
var pecents = 0;
    

if (salary <= 400.00){
    pecents = 15;
    ajust = ((pecents / 100) * salary);
} 
else if(salary <= 800.00){
    pecents = 12;
    ajust = ((pecents / 100) * salary); 
}
else if(salary <= 1200.00){
    pecents = 10;
    ajust = ((pecents / 100) * salary);
} 
else if(salary <= 2000.00){
    pecents = 7;
    ajust = ((pecents / 100) * salary);
} 
else if (salary > 2000.00){
    pecents = 4;
    ajust = ((pecents / 100) * salary);
} 
console.log('Novo salario: ' + (ajust + salary).toFixed(2));
console.log('Reajuste ganho: ' + (ajust).toFixed(2));
console.log('Em percentual: ' + pecents + ' %');



