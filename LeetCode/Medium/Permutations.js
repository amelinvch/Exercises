/**
 * https://leetcode.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = (nums, memo = [], res = []) => {
  if(nums.length === 0) {res.push(memo)}
  else {
    for (let ind = 0; ind < nums.length; ind++) {
      let curr = nums.slice();
      let next = curr.splice(ind, 1);
      permute(curr.slice(), memo.concat(next), res)
    }
  }
  return res
};

console.log(permute([1,2,3]))