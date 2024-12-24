/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const arr = [];
  for(let i=0; i<nums.length; i++){
    if(!arr.includes(nums[i])) arr.push(nums[i]);
    else nums[i] = '_';
  }
  return arr.length;
};

console.log(removeDuplicates([1,1,2]));