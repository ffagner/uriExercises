// Imposto de Renda
/*
Renda                   IR
<=2000.00               0
<=3000.00               8
<=4500.00               18
> 4500.00               28
*/
var input = require('fs').readFileSync('./uri1051/stdin', 'utf8');
const salaryValue = parseFloat(input);
var temp = 0;
if(salaryValue > 0 && salaryValue <= 2000){
    temp = 0;
}
else if (salaryValue > 2000 && salaryValue <= 3000){
    temp = ((salaryValue - 2000) * 0.08).toFixed(2);
}
else if (salaryValue > 3000 && salaryValue <= 4500){
    temp = (((salaryValue - 3000) * 0.18) + 80).toFixed(2);   
}
else if (salaryValue > 4500){
    temp = (((salaryValue - 4500) * 0.28) + 80 + 270).toFixed(2);   
}
temp === 0 ? console.log('Isento') : console.log('R$ ' + temp);