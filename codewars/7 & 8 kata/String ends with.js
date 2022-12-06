//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

function solution(str, ending){
  return str.length >= ending.length ? str.length - ending.length === str.lastIndexOf(ending) : false
}