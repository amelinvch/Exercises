/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(nums[i]);
        array.push(nums[n + i]);
    }
    return array;
};

console.log(shuffle([1, 2, 3, 4, 1, 2, 3, 4], 4));