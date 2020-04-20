// // Write a function that takes a sentence string as an argument,
//  and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

// Example:

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// pedac
// p
// input: string
// output: string
  // where each word that represents a number (e.g five) is replaced with the integer version of that number (e.g 5)

// Assumptions? numbers may be upper and lowercase
// won't get an empty string
// will always get a string
// will only ever get digits e.g wont' get 'twenty' as a word

  // split string to array by spaces
  // map array
    // if word matches numPairs then map the numpairs[word]
    // else word


function wordToDigit(string) {
  const numPairs = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return string.split(" ").map((word) => numPairs[word] || word).join(" ");
}


