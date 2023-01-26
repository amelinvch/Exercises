/**
 * https://leetcode.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */

// O(n)
var canJump = function(nums) {
  let max = 0;

  for (let ind = 0; ind < nums.length; ind++) {
    if(ind>max) return false;
    max = Math.max(nums[ind]+ind,max);
  }
  return true;
};

console.log(canJump( [2,3,1,1,1,1,0,4] )); //false
console.log(canJump( [3,2,1,0,4] )); //false
console.log(canJump( [0] )); //true
console.log(canJump( [0, 4] )); //false
console.log(canJump( [1, 0] )); //true


// Var bfs
/*
var canJump = function(nums) {
  const path = new Set().add(0);
  const visited = new Set();
  const numsLen = nums.length-1;

  if(numsLen < 1) return true

  for (let indPath of path) {

    for (let ind = 1; ind <= nums[indPath]; ind++) {
      if(!visited.has()){
        const nextInd = indPath + ind;
        if(nextInd >= numsLen) return true;
        path.add(nextInd);
        visited.add(nextInd);
      }

    }
  }

  return false;
};
*/