//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  const odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b)
  let ind = 0
  return array.map(elem => elem % 2 !== 0 ? odd[ind++] : elem) 
}