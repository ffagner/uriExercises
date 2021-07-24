// Números Pares
/*

*/

for (var i = 1; i <= 100; i++) {
    i % 2 === 0 ? console.log(i):''
}

// usando Recursão
function test(x){
    if ( x >= 101 ) return;
    if (x % 2 === 0) console.log(x);
    return test(x + 1);
}
test(1)