'use strict';

const lim = 4000000;
let prom = 0;
let two = 2;
let one = 1;
let sum = 0;
while (prom < lim) {
    prom = one + two;
    one = two;
    two = prom;
    if (one % 2 == 0) { sum += one; }
}
console.log(sum);