'use strict';

const num = 600851475143;
for (let i = 0; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
        for (let n = 2; n < Math.sqrt(i); n++) {
            if (i % n === 0) {
                return false;
            }
        }
        console.log(i);
    }
}