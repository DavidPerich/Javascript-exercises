// Write a function that takes an array, and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  var result = [];
  var i;

  for (i = 0; i < arr.length; i += 1) {
    if (!result.includes(arr[i])) result.push(arr[i]);
  }

  return result;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]