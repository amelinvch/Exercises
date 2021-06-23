//https://www.codewars.com/kata/59d398bb86a6fdf100000031/train/javascript

function stringBreakers(n, string) {
    let str = string.split(' ').join('');
    let arr = [];
    while (str.length > 0) {
        arr.push(str.substr(0, n));
        arr.push('\n');
        str = str.substr(n, str.length);
    }
    arr.splice(arr.length - 1, 1);
    return arr.join('');
}

console.log(stringBreakers(5, 'This is an example string')); // 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'