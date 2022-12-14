//https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript

var permutations = (nums, memo = [], res = []) => {
  if(!Array.isArray(nums)){
    if(nums.length === 1) return [nums]
    else {nums = nums.split('')}
  }
  if(nums.length === 0) {res.push(memo)}
  else {
    for (let ind = 0; ind < nums.length; ind++) {
      let curr = nums.slice();
      let next = curr.splice(ind, 1);
      permutations(curr.slice(), memo.concat(next), res)
    }
  }
  return [...new Set(res.map(elem => elem.join('')))]
};

console.log(permutations('a'));
console.log(permutations('ab'));
console.log(permutations('abc'));
console.log(permutations('aabb'));
// console.log(permutations('abcd'));
// console.log(permutations('123456'));
// console.log(permutations('12345678'));