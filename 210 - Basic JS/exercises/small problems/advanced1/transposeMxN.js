// In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

// Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

// Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.

// Examples:

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

function transpose(matrix) {
  var newMatrix = [];
  var numberOfColumns = matrix[0].length;
  var i;

  for (i = 0; i < numberOfColumns; i += 1) {
    newMatrix.push(columnFromMatrix(matrix, i))
  }

  return newMatrix;
}

function columnFromMatrix(matrix, index) {
  var row = []
  matrix.forEach((array) => row.push(array[index]));
  return row;
}