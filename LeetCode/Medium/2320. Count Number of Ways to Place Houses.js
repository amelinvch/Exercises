/**
 * https://leetcode.com/problems/count-number-of-ways-to-place-houses/
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function(n) {
  const mood = BigInt(10**9+7);
  let last = 2n;
  let lastLast = 1n;
  let answer = lastLast;

  for (let ind = 2; ind <= n; ind++) {
    answer = (last+lastLast)% mood;
    lastLast = last;
    last = answer;
  }
  return (answer * answer) % mood;
};

console.log(countHousePlacements( 1 )); //4
console.log(countHousePlacements( 2 )); //9
console.log(countHousePlacements( 3 )); //25
console.log(countHousePlacements( 4 )); //64
console.log(countHousePlacements( 1000 )); //500478595

