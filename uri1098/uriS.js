// Sequencia IJ 4
/*	
I=0 J=1
I=0 J=2
I=0 J=3
I=0.2 J=1.2
I=0.2 J=2.2
I=0.2 J=3.2
.....
I=2 J=?
I=2 J=?
I=2 J=?
*/

for(var i = 0; i <= 2; i+=0.2) {
    var n = 1 + i;
    var m = n + 3;
    for(var j = n; j < m; j++) {
        var a = i.toFixed(1)
        var dec = (a - Math.floor(a));
        if (dec === 0){
            console.log('I=' + parseInt(i.toFixed(1)) + ' J=' + parseInt(j.toFixed(1)));
        }else {
            console.log('I=' + i.toFixed(1) + ' J=' + j.toFixed(1));
        }
    }
} 
