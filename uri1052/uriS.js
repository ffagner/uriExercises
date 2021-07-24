// Meses
/*
January
February
March
April
May
June
July
August
September
October
November
December
*/
var input = require('fs').readFileSync('./uri1052/stdin', 'utf8');
const month = parseFloat(input);
const months = [
    'January', 'February', 'March', 
    'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 
    'November', 'December'
];
for (var i = 0; i < months.length; i++) {
    if((i+1) === month){
        console.log(months[i]);
    }
}