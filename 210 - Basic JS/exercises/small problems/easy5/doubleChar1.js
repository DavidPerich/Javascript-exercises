// Double Char Part 1
// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

// Examples:

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

function repeater(string) {
  var result = "";
  var i;

  for (i = 0; i < string.length; i += 1) {
    result += string[i] + string[i]
  }

  return result;
}