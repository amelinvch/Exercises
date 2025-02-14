/**
 * @param {number[]} nums
 * @return {number}
 * 
 * You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits  of the number nums[i] is equal to that of nums[j].

  Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

  Example 1:
  Input: nums = [18,43,36,13,7]
  Output: 54
  Explanation: The pairs (i, j) that satisfy the conditions are:
  - (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
  - (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
  So the maximum sum that we can obtain is 54.

  Example 2:
  Input: nums = [10,12,19,14]
  Output: -1
  Explanation: There are no two numbers that satisfy the conditions, so we return -1.

  */
var maximumSum = function(nums) {
  let groups = {};
  nums.forEach(num => {
    const grNum = num.toString()
             .split('')
             .map(Number)
             .reduce((sum, num) => sum+=num, 0);
    if(!groups[grNum]) { groups[grNum] = [] }
    groups[grNum].push(num);

  });
  console.log(groups)

  let maxSum = -1;

  for (const key in groups) {
    const group = groups[key];
    if (group.length >= 2) {
      group.sort((a, b) => b - a);
      const sumPair = group[0] + group[1];
      maxSum = Math.max(maxSum, sumPair);
    }
  }
  return maxSum;
};

// console.log('1) 54 answer:',maximumSum([18,43,36,13,7]));
// console.log('2) -1 answer:',maximumSum([10,12,19,14]));
// console.log('3) 4 answer:',maximumSum([9,2,2,5]));
// console.log('4) 835 answer:',maximumSum([368,369,307,304,384,138,90,279,35,396,114,328,251,364,300,191,438,467,183]));
console.log('5) 973 answer:',maximumSum([229,398,269,317,420,464,491,218,439,153,482,169,411,93,147,50,347,210,251,366,401]));

