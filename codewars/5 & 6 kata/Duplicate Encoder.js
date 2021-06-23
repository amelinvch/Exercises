//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
    let answer = word.toLowerCase().split('').map(function(x) {
        if (word.toLowerCase().split('').filter(c => c === x).length > 1) {
            return ')';
        } else { return '('; }
    });
    return answer.join('');
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));