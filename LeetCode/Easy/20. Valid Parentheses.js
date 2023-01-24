/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (str, stack = []) => {
    const map = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    for (const char of str) {
        const isBracket = (char in map);
        if (!isBracket) { stack.push(char); continue; }
        const isEqual = (stack[stack.length - 1] === map[char])
        if (isEqual) { stack.pop(); continue; }

        return false;
    };

    return (stack.length === 0);
}

/** 
var isValid = function(s) {
    const array = s.split('');
    let array2 = [];
    for (let num of array) {
        if (num === '(' || num === '{' || num === '[') {
            array2.push(num);
        } else {
            let popa = array2.pop();
            switch (num) {
                case ')':
                    if (popa !== '(') { return false; }
                    break;
                case '}':
                    if (popa !== '{') { return false; }
                    break;
                case ']':
                    if (popa !== '[') { return false; }
                    break;
                default:
                    return false;
            }
        }
    }
    return array2.length === 0;
};
*/
console.log(isValid('{[]}'));