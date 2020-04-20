// Create a function that finds the first instance of a value in an array and returns the index position of the value, or -1 if the value is not in the array. The function should take two arguments: the value to search for, and the array to search. Use the break keyword to exit the loop immediately when you find the first instance of the value. If you don't find the value, make sure you don't use the final index value as your return value.

function find(array, value) {
  var i;
  var result_index = -1
  for (i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      result_index = i
      break
    }
  }
return result_index
}

test = [1,2,3,4,5]

console.log(find(test, 10))