//https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
  const namesLen = names.length
  let peopleLike = ''
  
  if(namesLen === 0) peopleLike = 'no one likes this'
  if(namesLen === 1) peopleLike = `${names[0]} likes this`
  if(namesLen === 2) peopleLike = `${names[0]} and ${names[1]} like this`
  if(namesLen === 3) peopleLike = `${names[0]}, ${names[1]} and ${names[2]} like this`
  if(namesLen  >  3) peopleLike = `${names[0]}, ${names[1]} and ${namesLen - 2} others like this`
  return peopleLike
}