
// Write a function that takes a string as an argument, and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

// You may assume that every pair of words in the string will be separated by a single space.

// Examples:

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []

// PEDAC
/// PROBLEM
/// INPUT: A string
// OUTPUT: An array
  // the array will contain the words from the string split by space
  // each  word will have appened to it a " " (a space) and the number of chars in that word. e.g "It" becomes ["it 2"]
  // empty strings or no arguments will return an empty array

  // ALgorithm

  // Split by space
  // map a concatenation of word + " " + "word.length"

  function wordLengths(string) {
    if (string === undefined || string.length === 0) return [];
    return string.split(" ").map((word) => word + " " + word.length);
  }