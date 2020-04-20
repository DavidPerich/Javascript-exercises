// Write a function named slice that accepts three arguments: an Array, a start index, and an end index. The function should return a new Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index. Do not modify the original Array.

// You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods.

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

function slice(array, start, end) {
  var i;
  result = []

  for (i = start; i < end; i += 1) {
    push(result, array[i])
  }
  return result
}


function push(array, value) {
  array[array.length] = value
  return array.length
}