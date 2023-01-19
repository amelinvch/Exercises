/**
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const req = /[^0-9a-zA-Z]/g;
  const str = s.toLowerCase().replace(req, '');
  const revSrt = str.split('').reverse().join('');

  return str === revSrt
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("0P"))