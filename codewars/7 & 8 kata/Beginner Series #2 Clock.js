//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

function past(h, m, s){
  return (s * 1000) + (m * 1000 * 60) + (h * 1000 * 60 * 60)
}