/**
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();

  strs.map(elem => {
    const sortLit = elem.split('').sort((a, b) => {
      return b.charCodeAt() - a.charCodeAt();
    }).join('');

    if(!map.has(sortLit)) map.set(sortLit, []);
    map.set(sortLit, [...map.get(sortLit), elem])
  });

  const answer = [];
  map.forEach(elem => answer.push(elem))
  return answer
};

console.log(groupAnagrams( ["eat","tea","tan","ate","nat","bat"] )); //[["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams( [""] )); //[[""]]
console.log(groupAnagrams( ["a"] )); //[["a"]]