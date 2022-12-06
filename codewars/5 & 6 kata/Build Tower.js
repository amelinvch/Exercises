//https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  return new Array(nFloors).fill(' ').map((elem, ind) => `${' '.repeat(ind)}${'*'.repeat(nFloors + nFloors - 1 - ind - ind)}${' '.repeat(ind)}`).reverse()
}