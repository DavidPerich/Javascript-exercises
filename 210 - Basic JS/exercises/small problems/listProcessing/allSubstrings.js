// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

// You may (and should) use the substringsAtStart function you wrote in the previous exercise:

// Example:

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

  // PEDAC
// PROBLEM

// input: a string
// output: an array of strings
  // every possible combination of characters from the input
  // the array should be ordered by where in the input the substring begins. // e.g all substrings that start with 0 index char should come before all substrings that start with 1 index char etc.
  // substrings that start with same char should come in order of shortest to longest.

// ALGORIthm

// for each character in the string push to the results array all substrings from its index position to the end of the array

// iterate through an array of the string chars
  // subarray = string.slice(index)
  // iterate through this subarray with index
    // push to results array  - subarray.slice(0, index)

// return array


function substrings(string) {
  return string.split("").map(function(_, index) {
    return substringsAtStart(string.slice(index))
  }).flat();
}

function substringsAtStart(string) {
  return string.split("").map((_, index) => string.slice(0, index + 1));
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]