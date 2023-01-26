const words = (arr) => {
  const req = /\W/g;
  return arr.replace(req, ' ').split(' ').filter(elem => !!elem);
}

const count_word = (str) => {
  let sum_word = 0;
  str.split(' ').map(elem => {
    console.log(words(elem))
    sum_word += words(elem).length
  })
  return sum_word
}

console.log(count_word('SADS1Dasds, adas dsad, asd hjjkjeas, asd sdk, adaasdj, ,dfs,sda,  , ! adkj, ')); // 11