// Área Superior

var input = require('fs').readFileSync('./uri1187/stdin', 'utf8');
var lines = input.split('\r\n');
var operator = lines.shift();
const arr = [];
var acc = 0;
var totalSum = 0;
var med = 30;
for(var i = 0; i < 12; i++){
    const arrTemp = [];
    for(var j = 0; j < 12; j++) {
        arrTemp.push(lines[acc]);
        acc++;
    }
    arr.push(arrTemp);
}
for(var i = 0; i < 5; i++){
    for(var j = i + 1; j < 12 - (i + 1); j++){
        totalSum += parseFloat(arr[i][j]);
    }
}
switch (operator) {
    case 'S':
        console.log(totalSum.toFixed(1));
        break;
    case 'M':
        console.log((totalSum/med).toFixed(1));
        break;
}



