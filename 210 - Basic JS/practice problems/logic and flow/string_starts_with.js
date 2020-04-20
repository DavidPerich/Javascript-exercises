// Implement a function that determines whether a string begins with another string. If it does, the function should return true, or false otherwise.

// Examples
function startsWith(string, searchString) {
  // always return true if search string is ""
  // if search_string is longer than string return false
  // loop through the string x number of times where x is the length of the search_String
  // add ecah string[i] to a results string
  // at the end of the loop return teh boolean value of results == string

  if (searchString === "") return true;
  if (searchString.length > string) return false;
  var i
  var results  = ""
  for (i = 0; i < searchString.length; i += 1) {
    results = results + string[i]
  }
  return (results === searchString)
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false

// You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

// 'hello'[0];    // "h"
// 'hello'[4];    // "o"