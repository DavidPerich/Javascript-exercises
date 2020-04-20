// Write a function named shift that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

var count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]


function shift(array) {
  value = array[0];
  var i;

  if (array.length === 0) return undefined

  for (i = 0; i < array.length; i += 1) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return value;
}