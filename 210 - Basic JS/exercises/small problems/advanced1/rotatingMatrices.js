// As we saw in the previous exercises, a matrix can be represented by an array of arrays. For example, the 3x3 matrix shown below:

// 1  5  8
// 4  7  2
// 3  9  6
// is represented by the following array of arrays:

// var matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];
// A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

// 3  4  1
// 9  7  5
// 6  2  8
// A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:

// 3  4  1
// 9  7  5
// its 90-degree rotation is:

// 9  3
// 7  4
// 5  1
// Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.

// Examples:



var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// P
// INPut a two dimensional array
// output a NEW two dimensional array
  // which is the result of rotating the input array 90 degress
  // rotating 90 degrees is really transposing each column AND that new row is reversed in order.
  // for example the first column:
  // so matrix[0][0] becomes [0,2]
  // matrix[1][0] becomes [1, 2]
  // matrix[2][0] becomes [0,0]

// algoritm
// same as transpose, but you reverse the row before pushign it to new array


function rotate90(matrix) {
  var newMatrix = [];
  var numberOfColumns = matrix[0].length;
  var i;

  for (i = 0; i < numberOfColumns; i += 1) {
    newMatrix.push(columnFromMatrix(matrix, i).reverse())
  }

  return newMatrix;
}

function columnFromMatrix(matrix, index) {
  var row = []
  matrix.forEach((array) => row.push(array[index]));
  return row;
}