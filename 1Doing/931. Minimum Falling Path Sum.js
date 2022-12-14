/**
 * https://leetcode.com/problems/minimum-falling-path-sum/
 * @param {number[][]} matrix
 * @return {number}
*/

var minFallingPathSum = function(matrix) {
  const variantPath = [];
  const len_matrix = matrix[0].length;

  for (let row_ind = 0; row_ind < len_matrix; row_ind++) {
    for (let col_ind = 0; col_ind < len_matrix; col_ind++) {
      const elem = matrix[row_ind][col_ind];
      console.log(elem)

      if(col_ind === 0) {
        variantPath.push([elem,])
      }
    }
  }
  console.log('\n')
};

minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]])
minFallingPathSum([[-19,57],[-40,-5]])