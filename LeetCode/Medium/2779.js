/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
  nums.sort((a, b) => a - b); 
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
      while (nums[right] - nums[left] > 2 * k) {
          left++;
          console.log(nums[right], nums[left])
      }
      maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

// Example usage
console.log(maximumBeauty([4, 6, 1, 2], 2)); // Output: 3
console.log(maximumBeauty([1, 1, 1, 1], 10)); // Output: 4
