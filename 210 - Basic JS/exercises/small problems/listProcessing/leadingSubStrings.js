// Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

// Examples:

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//PROBLEM
// input a string
// output an array of strings
  // ordered by length
  // the strings in the array are the result of slicing the initial string to get all substrings.
  // assume always strings
  // assume not empty string

// DATA structure
// need to return an array and need to sort so need to work in array

// ALgoritm
// Split array to get array of characters
// map the array in which each new value is slice(0 to index + 1)
// shouldn't need to sort as it will autoamtically be in shortest to longest

function substringsAtStart(string) {
  return string.split("").map((_, index) => string.slice(0, index + 1));
}