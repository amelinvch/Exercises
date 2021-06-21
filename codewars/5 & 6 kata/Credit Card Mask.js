//https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
    let arr = cc.split('');
    for (let ind = arr.length - 1; ind >= 0; ind--) {
        if (arr.length - 5 >= ind) {
            arr[ind] = '#';
        }
    }
    return arr.join('');
}
console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify('11111'));