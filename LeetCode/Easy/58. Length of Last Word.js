/**
 * https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const str = s.trim().split(' ');
    return str[str.length - 1].length;
};

console.log(lengthOfLastWord( "Hello World" )); //5
console.log(lengthOfLastWord( "   fly me   to   the moon  " )); //4
console.log(lengthOfLastWord( "luffy is still joyboy" )); // 6
