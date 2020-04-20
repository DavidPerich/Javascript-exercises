// Write a function named push that accepts two arguments: an Array and any other value. The function should append the second argument to the end of the Array, and return the new length of the Array.

var count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

function push(array, value) {
  array[array.length] = value
  return array.length
}