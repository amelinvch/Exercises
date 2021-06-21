'use strict'

const lim = 1000;
let sum = 0;
for (let i = 0; i < lim; i++) {

    if ((i % 3 == 0) || (i % 5 == 0)) {
        sum += i;
    }
}
console.log(sum);