// Write a function that returns a substring of a string based on a starting index and length.

// Examples
function substr(string, start, length) {
  // loop through teh string starting at the index of start and finishing at length
  // add those elements to a result string
  // if negative strLength - 3.
  // the length is the desired length of the sub string - that is how many times you should iterate.
  // if i = length or equal to length of string then finish looping
  if (length <= 0) return ""
  var i = start < 0 ? (string.length + start) : start
  result = ""

  do {
    if (string[i] === undefined) {
      break;
    }

    result = result + string[i]
    i += 1
  } while ( i < length);

  return result
}

var string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
// The start argument is the starting index. If negative, treat it as strLength + start where strLength is the length of the string. For example, if start is -3, treat it as strLength - 3.
// The length argument is the maximum length of the desired substring. If length exceeds the number of characters available, just use the available characters.
// You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

// var a = 'hello';
// a[0];             // "h"
// a[4];             // "o"
