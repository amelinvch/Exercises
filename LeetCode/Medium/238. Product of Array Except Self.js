/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */

function productExceptSelf(nums) {
  const result = [];
  let prefix = 1;
  let postfix = 1;
  
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    result[i] *= postfix;
  }
  
  return result;
};

// var productExceptSelf = function(nums) {
//   const map = [1];

//   for (let ind = 1; ind < nums.length; ind++) {
//     let mul = 1;
//     for (let jnd = 0; jnd < map.length; jnd++) {
//       mul *= nums[jnd];
//       map[jnd] = map[jnd]*nums[ind];
//     }
//     map.push(mul);
//   }

//   return map;
// };

console.log(productExceptSelf( [1,2,3,4] ));
console.log(productExceptSelf( [-1,1,0,-3,3] ));