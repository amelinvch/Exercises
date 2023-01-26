function is_simple_num(num){
  for (let ind = 2; ind < Math.sqrt(num); ind++) {
    if(num % ind === 0) return false
  }
  return true;
}

function reverse_num(num){
  const rev_num = `${num}`.split('').reverse().join('');
  return +rev_num;
}

function perebor(left_num, rigth_num){
  if(left_num > rigth_num || left_num < 0 || rigth_num < 0) {
    console.error('No correct period');
  }

  const answer = [];

  for (let ind = left_num; ind < rigth_num; ind++) {
    const num = ind;
    const rev_num = reverse_num(ind);
    if(is_simple_num(num) && is_simple_num(rev_num)) answer.push(ind);
  }
  return answer
}

console.log(perebor(2, 100));