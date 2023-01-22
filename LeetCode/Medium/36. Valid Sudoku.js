/**
 * https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  const isValidBoxs = isValidValue(findNumsInBoxs(board));
  const isValidRows = isValidValue(findNumsInRows(board));
  const isValidColls = isValidValue(findNumsInColls(board));

  if(!isValidBoxs || !isValidRows || !isValidColls) return false
  return true;
};

function findNumsInRows(board){
  const valCheck = [];

  for (let ind = 0; ind < board.length; ind++) {
    const row = board[ind];
    const clearRow = filterVal(row);
    valCheck.push(clearRow);
  }

  return valCheck;
};

function findNumsInColls(board){
  const valCheck = [];

  for (let coll = 0; coll < board.length; coll++) {
    const collCheck = []; 
    for (let row = 0; row < board.length; row++) {
      const elem = board[row][coll];
      collCheck.push(elem);
    }    
    const clearColl = filterVal(collCheck);
    valCheck.push(clearColl);
  }

  return valCheck;
};

function findNumsInBoxs(board){
  const cordsCheck = [];
  const valCheck = [];
  const startCord = 1;

  for (let row=startCord; row<board.length; row = row+3) {
    for (let coll=startCord; coll<board.length; coll = coll+3) {
      cordsCheck.push([row, coll])
    }    
  }
  
  for (let ind = 0; ind < cordsCheck.length; ind++) {
    const [row_ch, coll_ch] = cordsCheck[ind];
    const boxCheck = [];
    for (let row = -1; row <= 1; row++) {
      for (let coll = -1; coll <= 1; coll++) {
        boxCheck.push(board[row_ch + row][coll_ch+coll]);   
      }      
    }
    const clearBox = filterVal(boxCheck);
    valCheck.push(clearBox);
  }
  return valCheck;
};

function filterVal(date) {
  return date.filter(elem => +elem);
};

function isValidValue(date){
  for (let ind = 0; ind < date.length; ind++) {
    const elems = date[ind];
    const set = new Set(elems);
    if(set.size != elems.length) { return false; }
  }

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
