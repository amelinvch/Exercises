//https://www.codewars.com/kata/54c27a33fb7da0db0100040e

var isSquare = function(n){
  return isNaN(Math.sqrt(n)) ? false : Number.isInteger(Math.sqrt(n))
}