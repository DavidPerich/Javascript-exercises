// Write a function lastIndexOf that accepts two arguments: an array and a value. The function returns the last index at which the value can be found in the array, or -1 if the value is not present.

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1

function lastIndexOf(array, value) {
  var i;
  result = -1;

  for (i = array.length; i >= 0; i -= 1) {
    if (array[i] === value) {
      result = i;
      break
    }
  }
  return result
}