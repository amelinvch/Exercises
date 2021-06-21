'use strict';

/*
let x = '';
for (let i = 1; i < 61; i++) {
    x = x + i + ' ';

}console.log(x)
*/


let nY = [];
const ogr = 1000;
for (let i = 100; i < ogr; i++) {
    for (let n = 100; n < ogr; n++) {
        let ni = n * i;
        while (ni > 0) {
            nY.push(ni & 10);
            ni = parseInt(ni / 10);
        }
        let iX = nY.reverse();
        let count = 0;
        for (let r = 0; r >= nY.length; r++) {
            if (iX[r] == nY[r]) {
                count++;
            }
        }

        if (count == nY.length) {
            console.log(n * i);
        }

    }
}