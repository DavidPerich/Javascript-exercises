// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// Examples:

console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // "  "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"

function centerOf(string) {
  var middle = Math.floor(string.length / 2);

  if (middle !== string.length / 2) {
    return string[middle];
  } else {
    return string[middle - 1] + string[middle];
  }
}