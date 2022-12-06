//https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder=function(iterable){
  return (Array.isArray(iterable) ? iterable : iterable.split('')).filter((elem, ind) => elem !== iterable[ind + 1])
}