/**
 * https://leetcode.com/problems/find-pivot-index/description/
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {
    let totalSum = nums.reduce((a,b) => a + b);
    let leftSum = 0;
    
    for (let ind = 0; ind < nums.length; ind++) {
      let rightSum = totalSum - nums[ind] - leftSum;
      if (rightSum === leftSum) { return ind; }
      leftSum += nums[ind];
    }
    return -1;
  };

console.log(pivotIndex( [1,7,3,6,5,6] )); //3
console.log(pivotIndex( [1,2,3] ));  //-1
console.log(pivotIndex( [2,1,-1] )); //0