// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

// Examples:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

// PEDAC
// Input is an integer - always greater than 0?
// output is a string of ones and zeros that is always as long as the argument.
// first char is always 1
// second is always 0
// third 1... etc

// so rule is that if i is odd add a 1 if it is even add a 2

/// data structure - return a string. Work with integer to control a loop

// algoritm

// loop from 1 to argument (string length)
// if i is odd add 0
// if i is even add 1
// return result string

function stringy(stringLength) {
  var i;
  var result = "";
  for (i = 1; i <= stringLength; i += 1) {
    if (i % 2 === 1) {
      result += '1';
    } else {
      result += '0'
    }
  }

  console.log(result);
}