// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

// Example:

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
console.log(cleanUp("                   WA          ---- -- -W")); //'WA W'

//PROBLEM
// Input: A string
// output: A new string
  // Should have replace all non-alphabetic chars with spaces, but
  // should never have more than one space in a row.
// ASsume always a string as input

// DATA structure: Keep as string to use regex and return a string

// Algoritm
// Given string:
  // replace all non-alphabetic chars with a space
  // replace all sets of consecutive spaces with a single space
  // return the new string

function cleanUp(string) {
  return string.replace(/[^A-Z]+/gi, " ");
}