//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

function findNeedle(haystack) {
  return haystack.includes('needle') ? `found the needle at position ${haystack.indexOf('needle')}` : "Your function didn't return anything"
}