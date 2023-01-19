/**
 * https://leetcode.com/problems/subarray-sums-divisible-by-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraysDivByK = function(nums, k) {
  let count = 0;
  for (let ind = 0; ind < nums.length; ind++) {
    let sum = nums[ind];
    if(sum%k === 0) count++;
    for (let jnd = ind+1; jnd < nums.length; jnd++) {
      sum += nums[jnd];
      if(sum%k === 0) count++;
    }
  }

  return count;
};


console.log(subarraysDivByK( [4,5,0,-2,-3,1] , 5 ));
console.log(subarraysDivByK( [5] , 9 ));
console.log(subarraysDivByK( [-5] , 5 )); // 1
console.log(subarraysDivByK( [-2, -3] , 5 )); // 1