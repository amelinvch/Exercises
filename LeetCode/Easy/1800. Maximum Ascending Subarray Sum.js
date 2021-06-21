/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/maximum-ascending-subarray-sum/
 */

const maxAscendingSum = function(nums) {
    let sumAscend = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[i - 1]) {
            sumAscend += nums[i];
        } else if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
            sumAscend += nums[i];
            return sumAscend;
        } else if (nums[i - 1] === undefined) {
            sumAscend += nums[i];
            return sumAscend;
        }
    }
    return sumAscend;
};

// console.log(maxAscendingSum([100, 10, 1, 2, 3])); //6
// console.log(maxAscendingSum([10, 20, 30, 5, 10, 50])); //65
// console.log(maxAscendingSum([10, 20, 30, 40, 50])); //150
console.log(maxAscendingSum([3, 6, 10, 1, 8, 9, 9, 8, 9])); // 19