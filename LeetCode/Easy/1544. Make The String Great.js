/**
 * https://leetcode.com/problems/make-the-string-great/
 * @param {string} s 
 * @return {string}
 */

var makeGood = function(s) {
  const deleteBad = (str, ind, jnd) => {
    if(ind >= str.length || jnd >= str.length) { return str;}
    console.log(str.length, str, ind, jnd)
    const diffLetterInd = str[ind].charCodeAt() - str[jnd].charCodeAt();
    if(diffLetterInd === 32 || diffLetterInd === -32){
      str = str.substr(0, ind) + str.substr(jnd+1, str.length);
      ind = ind-1 < 0 ? 0 : ind - 1;
      jnd = jnd-1 < 1 ? 1 : jnd - 1;
    } else {ind += 1; jnd += 1;}
    return deleteBad(str, ind, jnd)
  }

  return deleteBad(s, 0, 1);
};

console.log(makeGood( "leEeetcode" )); //leetcode
console.log(makeGood( "abBAcC" )); // ""
console.log(makeGood( "s" )); // s
