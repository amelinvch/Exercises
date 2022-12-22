/**
 * https://leetcode.com/problems/sort-characters-by-frequency/
 * @param {string} s
 * @return {string}
*/

var frequencySort = function(s) {
  const letterCounter = {};
  s.split('').forEach(elem => {
    letterCounter[elem] = letterCounter[elem] == void 0 ? 1 : letterCounter[elem] + 1;
  });

  const letterQueue = [];
  for (const elem in letterCounter) {
    letterQueue.push({'name':elem, count:letterCounter[elem]});
  }

  letterQueue.sort((a, b) => a.count > b.count ? -1 : 1);

  return letterQueue.map(elem => elem.name.repeat(elem.count)).join('');
};

console.log(frequencySort( "tree" ));
console.log(frequencySort( "acccaaa" ));
console.log(frequencySort( "Aabb" ));