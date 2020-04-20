// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

// PEDAC
/// PRoblem
// inPUT: an array
// output: an array
  // where the output is a copy of the input array with the first and last elements switched positions
  // input is not mutated
  // undefined if input empty or not an array

  // algoritm

// copy the input with slice
// replace the first index with the last index of input
// replace the last index with teh first index of input
// return copied array

function rotateArray(array) {
  var result;

  if (Array.isArray(array) && array.length === 0) return [];

  if (Array.isArray(array)) {
    result = array.slice(0)
    result.push(result.shift());
    return result;
   }
}