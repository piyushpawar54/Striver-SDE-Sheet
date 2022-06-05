//Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

var setZeroes = function (matrix) {
  let isCol = false; //flag
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    //check if dummy col conatins any 0
    if (matrix[i][0] == 0) {
      isCol = true;
    }
    //setting flag as true

    //traversing rest cols
    for (let j = 1; j < cols; j++) {
      // If an element is zero, we set the first element of the corresponding row and column to 0
      if (matrix[i][j] == 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // Iterate over the array once again and using the first row and first column, update the elements.
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // See if the first row needs to be set to zero as well
  if (matrix[0][0] == 0) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  // See if the first column needs to be set to zero as well
  if (isCol) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
};

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
let x = setZeroes(matrix);

console.log(x);
