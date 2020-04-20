// Write a function that returns a string of all the values in an array with no intervening content. For example, your function should return '1a4' if the argument is [1, 'a', 4]. Use a for loop to process the array elements in sequence, and coerce each value in the array to a String before concatenating it to the result string.

function join(array) {
  result = "";
  var i;

  for (i = 0; i < array.length; i += 1) {
    result += String(array[i])
  }
  return result
}

test = [1,true, 2,3,4]

console.log(join(test));