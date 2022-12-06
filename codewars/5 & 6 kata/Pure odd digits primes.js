//https://www.codewars.com/kata/55e0a2af50adf50699000126

function onlyOddDigPrimes(n) {
  const primesNumbers = []
  for(let ind = 3; ind < n; ind++) {
    if(isPrimeNum(ind) && isOddNum(ind)) primesNumbers.push(ind)
  }
  const lenPrimesNumbers = primesNumbers.length
  const maxPrimesNumBeforN = primesNumbers[lenPrimesNumbers-1]
  const nextPrimesNumAfterN = nextPrimeNum(maxPrimesNumBeforN)
  return [lenPrimesNumbers, maxPrimesNumBeforN, nextPrimesNumAfterN]
}

function isPrimeNum(num){
  for (var i = 2; i < num; i++) { if(num%i==0) return false };
  return true;
}

function isOddNum(num){
  return !`${num}`.split('').map(elem => elem % 2 !== 0).includes(false)
}

function nextPrimeNum(num){
  do{
    num += 1;
    if(isPrimeNum(num) && isOddNum(num)) return num
  } while(num < num ** 2)
}