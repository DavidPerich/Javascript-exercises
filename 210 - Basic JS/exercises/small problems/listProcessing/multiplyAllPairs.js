// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// Example:




// PEDAC
// PROBLEM

// INput: two arrays
// output - one array sorted values
  // the values in teh returned array are teh result of multiplying every value from array 1 against every value against array2.
  //  Therefore The new array will always be array1 length * array2 length in length

// rules : need to sort the final array in ascending numerical order.
// neither array will be empty
// assume - it will always be integers

// ALGORITM

// declare result array
// iterate through array1
  // iterate through array2
    // for each value in array1 push the result of array1num * array2num

// sort by with function a - b

function multiplyAllPairs(array1, array2) {
  var results = []
  array1.forEach(function (array1Num) {
    array2.forEach((array2Num) => results.push(array1Num * array2Num));
  });

  return results.sort((a, b) => a - b);
}



console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
console.log(multiplyAllPairs([1], [4, 3, 1, 2])); // [1, 2, 3, 4]