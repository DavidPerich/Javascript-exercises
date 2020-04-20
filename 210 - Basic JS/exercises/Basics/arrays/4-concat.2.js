// The concat function from the previous exercise could only concatenate a maximum of two arrays. For this exercise, you are going to extend that functionality. Refactor the concat function to allow for the concatenation of two or more arrays or values.

// Examples:

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]


function concat(array1) {
  var index;
  var i;
  var result = array1.slice();

  for (index = 1; index < arguments.length; index += 1) {
    obj = arguments[index]
    if (Array.isArray(obj)) {
      for (i = 0; i < obj.length; i += 1) {
        result.push((obj[i]));
      }
    } else {
      result[result.length] = obj;
    }
  }
  return result;
}