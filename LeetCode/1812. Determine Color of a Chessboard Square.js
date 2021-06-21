/**
 * @param {string} coordinates
 * @return {boolean}
 */
// const squareIsWhite = function(coordinates) {
//     const pole = {
//         a: [0, 1, 0, 1, 0, 1, 0, 1],
//         b: [1, 0, 1, 0, 1, 0, 1, 0],
//         c: [0, 1, 0, 1, 0, 1, 0, 1],
//         d: [1, 0, 1, 0, 1, 0, 1, 0],
//         e: [0, 1, 0, 1, 0, 1, 0, 1],
//         f: [1, 0, 1, 0, 1, 0, 1, 0],
//         g: [0, 1, 0, 1, 0, 1, 0, 1],
//         h: [1, 0, 1, 0, 1, 0, 1, 0],
//     };
//     let arrayCoord = coordinates.split('');
//     if (pole[arrayCoord[0]][arrayCoord[1] - 1] === 0) {
//         return false;
//     }
//     return true;
// };

const squareIsWhite = function(coordinates) {
    let arrayCoord = coordinates.split('');
    if (arrayCoord[1] % 2 === 1) {
        if (['a', 'c', 'e', 'g'].includes(arrayCoord[0])) {
            return false;
        }
        return true;
    } else {
        if (['a', 'c', 'e', 'g'].includes(arrayCoord[0])) {
            return true;
        }
        return false;
    }
};

console.log(squareIsWhite('c2'));