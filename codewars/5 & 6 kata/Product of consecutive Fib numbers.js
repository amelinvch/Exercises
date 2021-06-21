//https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

function productFib(prod) {
    let arrFib = [0, 1];
    let num = 1;
    for (let i = 1; num < prod; i++) {
        num = arrFib[i - 1] * arrFib[i];
        arrFib.push(arrFib[i - 1] + arrFib[i]);
        if (num == prod) {
            return [arrFib[arrFib.length - 3], arrFib[arrFib.length - 2], true];
        } else if (num > prod) {
            return [arrFib[arrFib.length - 3], arrFib[arrFib.length - 2], false];
        }
    }
}


console.log(productFib(4895));
console.log(productFib(5895));
// console.log(productFib(74049690));
// console.log(productFib(84049690));
// console.log(productFib(193864606));
// console.log(productFib(447577));
// console.log(productFib(602070));