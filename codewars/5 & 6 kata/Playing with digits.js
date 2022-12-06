//https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p){
  const num = (`${n}`.split('').map(elem => elem**(p++)).reduce((sum, elem) => sum + elem, 0) / n)
  return Number.isInteger(num) ? num : -1
}