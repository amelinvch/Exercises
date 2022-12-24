/**
 * https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {
  let indS = 0;
  for (let indT = 0; indT < t.length; indT++) {
    if(s[indS] === t[indT]) indS += 1;
  }
  return indS === s.length;
};

console.log(isSubsequence( "abc", "ahbgdc" )); //true
console.log(isSubsequence( "axc", "ahbgdc" )); //false
console.log(isSubsequence( "b", "c" )); //false
console.log(isSubsequence( "abc", "" )); //false
console.log(isSubsequence( "", "" )); //true
console.log(isSubsequence( "", "abc" )); //true
console.log(isSubsequence( "aaaaaa", "bbaaaa" )); //false