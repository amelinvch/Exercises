/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 * @param {string} s
 * @return {string}
*/

var reverseVowels = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const str = s.split('');
  const vowel = str.filter(leter => vowels.includes(leter)).reverse()
  let count = 0; 
  return str.map(elem => {
      if(vowels.includes(elem)){
          elem = vowel[count];
          count += 1;
      } 
      return elem;
  }).join('');    
};

console.log(reverseVowels( "hello" ));
console.log(reverseVowels( "leetcode" ));
console.log(reverseVowels( "aA" ));
