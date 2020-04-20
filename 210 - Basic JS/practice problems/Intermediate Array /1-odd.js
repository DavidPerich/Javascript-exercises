// Write a function that creates and returns a new array from its array argument. The new array should contain all values from the argument array whose positions have an odd index.

function oddElementsOf(arr) {
  result = [];
  var i;

  for (i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]