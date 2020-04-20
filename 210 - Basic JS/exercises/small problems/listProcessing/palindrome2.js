// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Examples:

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

function isRealPalindrome(string) {
  string = string.replace(/[^A-Z0-9]/ig, "");
  return isPalindrome(string.toLowerCase())
}

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