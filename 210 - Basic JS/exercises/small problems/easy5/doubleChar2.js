// Double Char Part 2
// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Examples:

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

function doubleConsonants(string){
  var result = "";
  var i;

  for (i = 0; i < string.length; i += 1) {
    if (string[i].match(/[aeiou \d]/gi)) {
      result += string[i];
    } else {
      result += string[i] +string[i];
    }
  }
  return result;
}