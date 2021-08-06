// Preenchimento de Vetor I

var input = require('fs').readFileSync('./uri1173/stdin', 'utf8');
var num = parseInt(input);
var temp = num;
console.log("N[0] = " + num);
for(var i = 1; i < 10; i++) {
    var cal = temp * 2;
    console.log("N[" + i + "] = " + cal);
    temp = cal;
}



