// In this exercise, you will implement your own version of the Array.prototype.reverse method. Your implementation should differ from the built-in method in the following two ways:

// It should accept either a string or an array as an argument.
// It should return a new string or array.
// Examples:

function reverse(inputForReversal) {
  var result;
  var i;

  if (Array.isArray(inputForReversal)) {
    result = [];
    for (i = inputForReversal.length - 1; i >= 0; i -= 1) {
      result[result.length] = inputForReversal[i];
    }
  } else {
    result = "";
    for (i = inputForReversal.length - 1; i >= 0; i -= 1) {
      result += inputForReversal[i];
    }
  }


  return result;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]