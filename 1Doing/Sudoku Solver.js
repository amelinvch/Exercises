/**  https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript
 * Write a function that will solve a 9x9 Sudoku puzzle. 
 * The function will take one argument consisting of the 2D puzzle array,
 * with the value 0 representing an unknown square.
 * 
 * The Sudokus tested against your function will be "easy" 
 * (i.e. determinable; there will be no need to assume and test 
 * possibilities on unknowns) and can be solved with a brute-force approach.
*/

"use strict"

function sudoku(grid) {
  const admis_matrix = admissible_num(grid);
  //console.log(admis_matrix);

  const matrix_admissible = make_matrix_admissible(grid, admis_matrix);
  console.log(matrix_admissible);
  return grid;
}

function make_matrix_admissible(grid, admis_matrix){
  const numbers_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return grid.map(row => {
    return row.map(elem => {
      if(elem === 0) {

        numbers_arr.filter(function(item, pos) {
          return a.indexOf(item) == pos;
        })

      }
    })
  })
}

function admissible_num(grid){
  const grid_len = grid.length,
        admis_matrix = {row: {}, col: {}};
  for(let ind = 0; ind < grid_len; ind++){
    const row_admis = [],
          col_admis = [];
          
    for (let j = ind; j < grid_len; j++) {
      let row_elem = grid[ind][j],
          col_elem = grid[j][ind];
      if(+row_elem !== 0) row_admis.push(row_elem);
      if(+col_elem !== 0) col_admis.push(col_elem);
    }
    admis_matrix.row[ind] = row_admis;
    admis_matrix.col[ind] = col_admis;
  }
  return admis_matrix;
}

(function checkAnswer(){
  const puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

  const solution = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]];

  console.log(JSON.stringify(sudoku(puzzle)) === JSON.stringify(solution));
})()