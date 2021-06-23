//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

function rot13(message) {
    let az = /[a-z]/;
    let AZ = /[A-Z]/;
    let answer = message.split('').map(function(x) {
        if (x.match(az)) {
            if ((x.charCodeAt()) >= 110) {
                return String.fromCharCode(x.charCodeAt() + 13 - 122 + 96);
            } else {
                return String.fromCharCode(x.charCodeAt() + 13);
            }
        }
        if (x.match(AZ)) {
            if (x.charCodeAt() > 78) {
                return String.fromCharCode(x.charCodeAt() + 13 - 90 + 64);
            } else {
                return String.fromCharCode(x.charCodeAt() + 13);
            }
        } else { return x; }
    });
    return answer.join('');
}

console.log(rot13("Ruby is cool!"));
// console.log(rot13("Test"));