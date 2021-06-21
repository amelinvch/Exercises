//https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

const binaryArrayToNumber = arr => {
    const binary = arr.join('');
    let popa = parseInt(binary, 2);
    return popa;
};

console.log(binaryArrayToNumber([0, 1, 0, 1]));