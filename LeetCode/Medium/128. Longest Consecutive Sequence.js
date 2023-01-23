/**
 * https://leetcode.com/problems/longest-consecutive-sequence/ 
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let [maxScore, score] = [1, 1];
  nums.sort((a, b) => a - b);

  if(nums.length === 0) { return 0; }

  for (let ind=1; ind<nums.length; ind++) {
    if(nums[ind] === nums[ind-1]) { continue; }
    if(nums[ind] === nums[ind-1]+1) { score++; }
    else { score = 1; }
    
    if(maxScore < score) { maxScore = score; };
  }

  return maxScore;
};

console.log(longestConsecutive( [100,4,200,1,3,2] )); //4
console.log(longestConsecutive( [0,3,7,2,5,8,4,6,0,1] )); //9
console.log(longestConsecutive( [] )); //0
console.log(longestConsecutive( [1, 2, 0, 1] )); //0