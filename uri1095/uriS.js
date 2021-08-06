// Sequencia IJ 1
/*
I=1 J=60
I=4 J=55
I=7 J=50
...
I=? J=0
*/

for(var i = 1, j = 60; j >= 0; i+=3, j-=5) {
    console.log('I=' + i + ' J=' + j);
} 