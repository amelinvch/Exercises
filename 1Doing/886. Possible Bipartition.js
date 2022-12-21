/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
*/

  const fillNumbers = ( n ) => {
    const firstGr = [];
    const secondGr = [];
    for (let ind = 1; ind <= n; ind++) {
      firstGr.push(ind);
      secondGr.push(ind);
    }
    return {firstGr, secondGr}
  };

var possibleBipartition = function(n, dislikes) {
  const {firstGr, secondGr} = fillNumbers(n);
  let flag = true;
  dislikes.forEach(elem => {
    const indFirstVal =
    if(firstGr.includes(elem[0]) && secondGr.includes(elem[0]))

  });
  return firstGr
};

console.log(possibleBipartition( 4, [[1,2],[1,3],[2,4]] )); //true
console.log(possibleBipartition( 3, [[1,2],[1,3],[2,3]] )); //false
console.log(possibleBipartition( 5, [[1,2],[2,3],[3,4],[4,5],[1,5]] )); //false
