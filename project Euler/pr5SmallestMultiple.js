'use strict';

const pred = 100;
let sumPow = 0,
    sum = 0,
    razn = 0;

for (let i = 1; i <= pred; i++) {
    sumPow += Math.pow(i, 2);
}

for (let j = 1; j <= 100; j++) {
    sum += j;
}

sum = Math.pow(sum, 2);

razn = sum - sumPow;

console.log(razn);