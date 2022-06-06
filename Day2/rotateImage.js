/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 *
 */

var rotate = function (matrix) {
  let n = matrix.length;

  //transpose the matrix (turn rows into cols)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  //reverse each row of matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      //n/2 because we are using 2 pointers and each go till the middle part
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }

  return matrix;
};
