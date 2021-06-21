//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
    const arrayStr = str.split(' ');
    for (let ind in arrayStr) {
        if (arrayStr[ind] !== '!' && arrayStr[ind] !== ',' && arrayStr[ind] !== '.' && arrayStr[ind] !== '?') {
            let arrySlovo = arrayStr[ind].split('');
            const firstBukv = arrySlovo.shift();
            arrySlovo.push(firstBukv, 'ay');
            let popa = arrySlovo.join('');
            // arrayStr.splice(ind, 1);
            // arrayStr.splice(ind, 0, popa);
            arrayStr[ind] = popa;
        }
    }
    return arrayStr.join(' ');
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !