// Write a function that takes an array argument and returns a new array that contains all the argument's elements in their original order followed by all the argument's elements in reverse order.

function mirroredArray(array) {
  reversed = array.slice().reverse()
  return array.concat(reversed)
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(mirroredArray(digits));  // returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]