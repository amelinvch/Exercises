/**
 * https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  if(!isValidColls(board) || !isValidRows(board) || !isValidBoxs(board)) return false
  return true;
};

function isValidRows(){
  return true;
}

function isValidColls(){
  return true;
}

function isValidBoxs(board){
  const cordsCheck = [];
  const startCord = 1;

  for (let ind=startCord; ind<board.length; ind = ind+2) {
    for (let jnd=startCord; jnd<board.length; jnd = jnd+2) {
      cordsCheck.push([ind, jnd])
    }    
  }
  
  for (let ind = 0; ind < cordsCheck.length; ind++) {
    const set = new Set();

  }
  console.log(cordsCheck)
  return true;
}

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],
                           ["6",".",".","1","9","5",".",".","."],
                           [".","9","8",".",".",".",".","6","."],
                           ["8",".",".",".","6",".",".",".","3"],
                           ["4",".",".","8",".","3",".",".","1"],
                           ["7",".",".",".","2",".",".",".","6"],
                           [".","6",".",".",".",".","2","8","."],
                           [".",".",".","4","1","9",".",".","5"],
                           [".",".",".",".","8",".",".","7","9"]
                          ] ));
// console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."],
//                            ["6",".",".","1","9","5",".",".","."],
//                            [".","9","8",".",".",".",".","6","."],
//                            ["8",".",".",".","6",".",".",".","3"],
//                            ["4",".",".","8",".","3",".",".","1"],
//                            ["7",".",".",".","2",".",".",".","6"],
//                            [".","6",".",".",".",".","2","8","."],
//                            [".",".",".","4","1","9",".",".","5"],
//                            [".",".",".",".","8",".",".","7","9"]
//                           ]));
