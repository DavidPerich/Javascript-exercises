// Write a function that accepts an array as the first argument and an integer value, count, as the second. It should return a new array that contains the first count elements of the array.

function firstNOf(arr, count) {
  var i;
  result = [];
  for (i = 0; i < count; i += 1 ) {
    result.push(arr[i])
  }
  return result;
}

// or their solution
// function firstNOf(arr, count) {
//   return arr.slice(0, count);
// }


var digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]