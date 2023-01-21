/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return fasle;

  let sMap = {};
  for (let i = 0; i < s.length; i++) {
      if (sMap[s[i]]) {
          sMap[s[i]]++;
      } else {
          sMap[s[i]] = 1;
      }
  }

  for (let i = 0; i < t.length; i++) {
      if (!sMap[t[i]] || sMap[t[i]] < 0) {
          return false;
      }
      sMap[t[i]]--;
  }
  return true; 
};

console.log(isAnagram( "anagram", "nagaram" ));
console.log(isAnagram( "rat", "cat" ));