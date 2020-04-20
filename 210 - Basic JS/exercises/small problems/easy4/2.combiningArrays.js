// Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

// Example:

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

function union(array1, array2) {
  var result = array1.slice();
  var i;

  for (i = 0; i < array2.length; i += 1) {
    if (!result.includes(array2[i])) result.push(array2[i])
  }

  return result;
}
