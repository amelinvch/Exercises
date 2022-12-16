//https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
function sumDigPow(first_num, second_num, digPow = []) {
  const digPow = []
  for (let num = first_num; num < second_num; num++) {
    const numbers = `${num}`.split('')
    let sum = 0;
    numbers.forEach((num, ind_num) => { sum += num ** (ind_num + 1) })
    if(+numbers.join('') === sum ) { digPow.push(num)}
  }
  return digPow
}


sumDigPow(1, 10)//    [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100)//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// sumDigPow(10, 100)//  [89]
sumDigPow(90, 100)//  []
// sumDigPow(90, 150)//  [135]
// sumDigPow(50, 150)//  [89, 135]
// sumDigPow(10, 150)//  [89, 135]