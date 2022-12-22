/**
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/
 * @param {string} s
 * @return {boolean}
*/

var halvesAreAlike = function(s) {
  s = s.toLowerCase().split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstStr = s.slice(0, s.length / 2).filter(elem => vowels.includes(elem));
  const secondStr = s.slice(s.length / 2).filter(elem => vowels.includes(elem));

  return firstStr.length === secondStr.length
};

console.log(halvesAreAlike( "book" )); //true
console.log(halvesAreAlike( "textbook" )); //false
console.log(halvesAreAlike( "textBook" )); //false