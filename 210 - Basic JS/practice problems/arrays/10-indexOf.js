// Write a function indexOf that accepts two arguments: an array and a value. The function returns the first index at which the value can be found, or -1 if the value is not present.

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1

function indexOf(array, value) {
  result = -1;
  var i;

  for (i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      result = i;
      break
    }
  }
  return result
}