//https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return text.toLowerCase().split('').map(elem=>{
    let index = arr.indexOf(elem);
    if(index != -1) { return index + 1 }}).filter(Boolean).join(' ').trim();
}