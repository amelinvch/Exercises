//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if ((i != j) && (nums[i] + nums[j] == target)) {
                return [i + 1, j + 1];
            }
        }
    }
};