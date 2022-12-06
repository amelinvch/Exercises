//https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
  let count_x = 0;
  let count_o = 0;
  str = str.toLowerCase().split("");

  for(let i = 0; i < str.length; i++) {
      if(str[i] == 'x') count_x++;
      if(str[i] == 'o') count_o++;
  }

  return count_o === count_x;
}