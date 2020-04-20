// Using the function from the previous problem, What happens if you pass a count greater than the length of the array? How can you fix the function so it returns a new instance of the entire array when count is greater than the array length?

function lastNOf(arr, length) {
  var index = arr.length - length;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 8);    // returns [4, 8, 15, 16, 23, 42]


// When you pass a count greater than the array length, the arithmetic in the function becomes a negative value. slice interprets a negative value as a position relative to the end of the array. So, if we pass a count of 9 with our digits array, lastNOf calls slice with an argument of -3. slice thus returns the final three elements of digits.

// To change this behavior, we can calculate the starting position, then adjust it to 0 if it is negative. We can pass the resulting value to slice, which returns a new copy of the array when the value is 0.