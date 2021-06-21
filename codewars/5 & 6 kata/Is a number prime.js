//https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript


function isPrime(num) {
    if (num === 0 || num === 1 || num < 0) { return false; }
    if (num === 2) { return true; } else {
        for (let i = 2; i < Math.sqrt(num) + 1; ++i) {
            if (num % i === 0) {
                console.log(num, i);
                return false;
            }
        }
    }
    return true;
}
//простое - true
console.log(isPrime(0));
console.log(isPrime(4));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(73));
console.log(isPrime(75));
console.log(isPrime(-1));