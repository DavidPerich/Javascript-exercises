// In this exercise, you will implement your own versions of the Array.prototype.shift and Array.prototype.unshift methods. These methods manipulate the contents of an array starting from the first index.

// The shift method removes the first element from an array and returns that element; if the array is empty, shift returns undefined. The unshift method adds one or more elements to the start of an array and returns the new length of the array. Both methods mutate the original array.

// Examples:

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]

function shift(array) {
  var result = array[0];
  var i;

  if (array.length === 0 ) return undefined;

  for (i = 0; i < array.length - 1; i += 1) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1
  return result;
}

function unshift(array, value) {
//  The unshift method adds one or more elements to the start of an array and returns the new length of the array.
  var i;

  for (i = array.length; i > 0; i -= 1) {
    array[i] = array[i - 1];
  }

  array[0] = value;

  return array.length;
}