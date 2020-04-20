// Write a function that takes a sorted array of integers as an argument, and returns an array that includes all the missing integers (in order) between the first and last elements of the argument.

Examples:

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []

function missing(array) {
  // loop through the array. For each index loop through from the array[i] to array[i + 1] and add those values to an array
  result = [];
  var i;

  for (i = 0; i < array.length; i += 1) {
    for (x = array[i] + 1; x < array[i + 1]; x += 1) {
      result.push(x);
    }
  }
  return result;
}