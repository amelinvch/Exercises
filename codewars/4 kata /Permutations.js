//https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript

function permutations(string) {
    let arrLettes = string.split('');
    let arrApp = [];
    let numRepet = 1;

    for (let i = 1; i < arrLettes.length;) {
        i++;
        numRepet *= i;
    }
    for (let i = 0; i < numRepet; i++) {
        arrLettes[i] = arrLettes[i + 1];
        arrApp.push(arrLettes.join(''));
    }
    return arrApp;
}
//Pn = n·(n−1)·(n−2)

// console.log(permutations('a'));
console.log(permutations('ab'));
console.log(permutations('abc'));
// console.log(permutations('abcd'));
// console.log(permutations('123456'));
// console.log(permutations('12345678'));