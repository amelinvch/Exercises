'use strict';

const mass = [1, 2, 3, ];

for (let i = 4; 10001 < mass.length; i++) {
    for (let n = 2; n < Math.sqrt(i); n++) {
        if (i % n === 0) {
            return false;
        }
    }
    console.log(i);
    //mass.push(i);
}

//console.table(mass);