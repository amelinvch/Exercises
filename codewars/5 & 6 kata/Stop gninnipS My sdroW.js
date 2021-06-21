//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string) {
    let array = string.split(' ');
    for (let ind in array) {
        if (array[ind].length >= 5) {
            array[ind] = array[ind].split("").reverse().join("");
        }
    }
    return array.join(" ");
}


console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
console.log(spinWords("You are almost to the last test"));
console.log(spinWords("Just kidding there is still one more"));