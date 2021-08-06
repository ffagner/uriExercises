// Sequencia IJ 2
/*
I=1 J=7
I=1 J=6
I=1 J=5
I=3 J=7
I=3 J=6
I=3 J=5
...
I=9 J=7
I=9 J=6
I=9 J=5
*/

for(var i = 1; i <= 9; i+=2) {
    for(var j = 7; j >= 5; j--){
        console.log('I=' + i + ' J=' + j);
    }
} 