/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = {};

  for (let ind = 0; ind < nums.length; ind++) {
    if(!map[nums[ind]]) map[nums[ind]] = 0
    map[nums[ind]]++;
  }
  return findMaxNums(map, k)
};

function findMaxNums(map, k){
  const maxNums = Object.entries(map).sort((a, b) => b[1] - a[1])
  return maxNums.slice(0, k).map(elem => +elem[0])
}

console.log(topKFrequent( [5,5,5,2,2,3], 2 ));
console.log(topKFrequent( [1], 1 ));