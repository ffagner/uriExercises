// Sequencia IJ 3
/*	
I=1 J=7
I=1 J=6
I=1 J=5
I=3 J=9
I=3 J=8
I=3 J=7
...
I=9 J=15
I=9 J=14
I=9 J=13
*/

for(var i = 1; i <= 9; i+=2) {
    var n = 6 + i;
    var m = n - 3;
    for(var j = n; j > m; j--){
        console.log('I=' + i + ' J=' + j);
    }
} 