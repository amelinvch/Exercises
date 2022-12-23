/**
 * https://leetcode.com/problems/running-sum-of-1d-array/description/
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums, sum = 0) {
  return nums.map(num => sum += num);
};