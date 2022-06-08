// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

//1)Integers in each row are sorted from left to right.
//2)The first integer of each row is greater than the last integer of the previous row.

//This solution is best if 2nd point is not given
//Complexity:O(m + n)
var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  //initially pointer will be at 1st row and last col
  let i = 0;
  let j = cols - 1;
  //we keep searching till pointer does not move out of bounds
  while (i < rows && j >= 0) {
    //if we found the target
    if (matrix[i][j] == target) {
      return true;
    }

    if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};

//Better solution -> Binary Search in Matrix without using extra space (If 2nd condition is given)
//Complexity:O(log(m + n))

var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  if (rows == 0) {
    return false;
  }
  let cols = matrix[0].length;

  //perform binary search
  let low = 0;
  let high = rows * cols - 1; //last imaginary index if matrix was 1D array

  while (low <= high) {
    let mid = parseInt(low + (high - low) / 2);

    //matrix[mid/cols][mid%cols] gives matrix index value from 1D imaginary index
    let x = parseInt(mid / cols);
    let y = parseInt(mid % cols);
    if (matrix[x][y] == target) {
      return true;
    }
    if (matrix[x][y] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
};
