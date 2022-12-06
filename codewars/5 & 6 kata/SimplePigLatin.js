//https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str){
  const arr = [',', '.', '!', '-', '?']
  return str.split(' ').map(elem => arr.includes(elem)? elem : `${elem.substring(1)}${elem[0]}ay`).join(' ').trim()
}