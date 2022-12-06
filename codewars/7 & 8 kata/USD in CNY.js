//https://www.codewars.com/kata/5977618080ef220766000022

function usdcny(usd) {
  const course = 6.75
  const currency = 'Chinese Yuan'
  return (usd * course).toFixed(2) + ' ' +currency
}