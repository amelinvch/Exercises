//https://www.codewars.com/kata/5254ca2719453dcc0b00027d

function permutations(string) {
  let arr_lettes = string.split(''),
      res = [];

  const permute = (arr, memo = []) => {
      if (arr.length === 0) res.push(memo.join(''))
      else {
          for (let i = 0; i < arr.length; i++) {
            let curr = arr.slice();
            let next = curr.splice(i, 1);
            permute(curr.slice(), memo.concat(next))
         }
      }
  }

  permute(arr_lettes);
  return Array.isArray(res) ? [...new Set(res)] : res.slice('');
}

console.log(permutations('a'));
console.log(permutations('ab'));
console.log(permutations('abc'));
console.log(permutations('aabb'));