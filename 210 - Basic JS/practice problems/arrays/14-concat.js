// Write a function named concat that accepts two Array arguments. The function should return a new Array that contains the values from each of the original Arrays.

// You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods.

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

function concat(array1, array2) {
  // iterate through each array and add it to
  result = [];
  var i;

  for (i = 0; i < array1.length; i += 1) {
    push(result, array1[i]);
  }

  for (i = 0; i < array2.length; i += 1) {
    push(result, array2[i]);
  }

  return result;
}

function push(array, value) {
  array[array.length] = value
  return array.length
}