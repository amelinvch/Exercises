//https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript

function validSolution(board) {
    for (let x = 0; x < board[0].length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (lineСheck(x, y, board) === false) { return false; }
        }
    }
    if (boxСheck(board) === false) { return false; }
    return true;
}

function lineСheck(startY, startX, board) {
    let num = board[startY][startX],
        x = startX + 1,
        y = startY + 1,
        arrLen = (board.length - 1);
    if (num == 0) { return false; }
    while (y <= arrLen && x <= arrLen) {
        if ((num == board[y][startX]) || (num == board[startY][x]) || (board[startY][x] == 0) || (board[y][startX] == 0)) {
            //console.log(`False: ${num}: ${board[y][startX]}, ${board[startY][x]}.`);
            return false;
        }
        if (x <= arrLen) { x += 1; }
        if (y <= arrLen) { y += 1; }
    }
    return true;
}

function boxСheck(board) {
    const arr = [
        [0, 0],
        [0, 3],
        [0, 6],
        [3, 0],
        [3, 3],
        [3, 6],
        [6, 0],
        [6, 3],
        [6, 6]
    ];
    for (let ind = 0; ind < arr.length; ind++) {
        let e = arr[ind];
        let startY = e[0],
            startX = e[1],
            numArr = [];
        for (let nowY = startY; nowY < startY + 3; ++nowY) {
            for (let nowX = startX; nowX < startX + 3; ++nowX) {
                numArr.push(board[nowY][nowX]);
            }
        }
        numArr.sort(function(a, b) { return a - b; });
        let arrAn = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < 9; i++) {
            if (numArr[i] !== arrAn[i]) { return false; }
        }
    }
    return true;
}
console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
])); // true

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
])); //false

console.log(validSolution([
    [10, 20, 30, 4, 5, 6, 7, 8, 9],
    [21, 31, 11, 5, 6, 4, 8, 9, 7],
    [32, 12, 22, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
]));