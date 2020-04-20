// The previous exercise mimics the parseInt function to a lesser extent. In this exercise, you're going to extend that function to work with signed numbers.

// Write a function that takes a string of digits, and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

// You may assume the string will always contain a valid number.

Examples:

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100

function stringToSignedInteger(string) {
  var numString = string.slice(1)
  if (string.startsWith('-')) return -stringToInteger(numString)
  if (string.startsWith('+')) return stringToInteger(numString)
  return stringToInteger(string)
}


function stringToInteger(string) {
  var digits = {'0': 0, '1': 1,'2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9 };
  var result = 0;
  var i;
  // then loop through the string for every index add

  for (i = 0; i < string.length; i += 1) {
    value = digits[string[i]];
    result = (result * 10) + value;
  }

  return result;
}