// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

// Examples:

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
console.log(isPalindrome("m ada m"));      // true (all characters matter)
console.log(isPalindrome("m ada m "));      // false (all characters matter -e xtra space at end)
console.log(isPalindrome("A"));      // ?? true
console.log(isPalindrome(""));      // true

// PEDAC
// PROBLEM
  //input - a string. Output - a boolean
  // given a string return true if the characters read the same forward and backward
    // ALL characters including spaces and punctionation matter
  // otherwise return false

  // Algorithm:
//option 1:

// string = string.reverse

function isPalindrome(string) {
  return string === reverse(string);
}

function reverse(string) {
  result = ""
  var i;

  for (i = string.length - 1; i >= 0; i -= 1) {
    result += string[i]
  }
  return result;
}

