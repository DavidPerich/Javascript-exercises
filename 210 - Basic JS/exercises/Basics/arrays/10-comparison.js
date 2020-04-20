// The array comparison function that we implemented in the Arrays lesson implicitly assumed that when comparing two arrays, any matching values must also have matching index positions. The objective of this exercise is to reimplement the function so that two arrays containing the same values—but in a different order—are considered equal. For example, [1, 2, 3] === [3, 2, 1] should return true.

// Examples:

function areArraysEqual(array1, array2) {
  if (array1.length != array2.length) return false;

  var i;
  var result = true;
  var countArray1 = count(array1);
  var countArray2 = count(array2);

  for (i = 0; i < array1.length; i += 1) {
    if (!(array2.includes(array1[i]))) {
      return false;
    }
  };

  Object.keys(countArray1).forEach(element => {
    if (!(countArray1[element] === countArray2[element])) {
      result = false;
      return;
    }
  });

  return result;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true






function count(array) {
  var object = {}
  var index;

  for (i in array) {
    if (!object[array[i]]) {
      object[array[i]] = 1
    } else {
      object[array[i]] += 1
    }
  }

  return object
}