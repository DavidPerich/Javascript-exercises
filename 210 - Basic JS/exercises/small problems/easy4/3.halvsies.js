// Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

// Examples:

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

// if the array length is odd. Then Math.ceeling(array.length / 2) that many elements in one array.
//

function halvsies(array) {
  var middle = Math.ceil(array.length / 2);
  firstHalf = array.slice(0, middle);
  secondHalf = array.slice(middle);

  return [firstHalf, secondHalf]
}