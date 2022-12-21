/**
 * https://leetcode.com/problems/minimum-falling-path-sum/
 * @param {number[][]} matrix
 * @return {number}
*/

const minFallingPathSum = (matrix) => {
  let memo = matrix[matrix.length - 1];
  for (let row = matrix.length-2; row >= 0 ; row--) {
    const current = [];
    for (let column = 0; column < matrix[row].length; column++) {
      current[column] = matrix[row][column] + Math.min(
        memo[column],
        memo[column - 1] ?? Infinity,
        memo[column + 1] ?? Infinity,
      )
    }
    memo = current   
  }
  return Math.min(...memo)
};

console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]));
console.log(minFallingPathSum([[-19,57],[-40,-5]]));
console.log(minFallingPathSum([[100,-42,-46,-41],[31,97,10,-10],[-58,-51,82,89],[51,81,69,-51]])); //-36