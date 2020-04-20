// In the previous exercise, you reimplemented a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. You may, however, use the integerToString function from the previous exercise.

// Examples:

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0)  );       // "0"





function integerToString(number) {
  var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var result = '';
  var remainder;

  do {
    remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(number) {
  if (number < 0) return '-' + integerToString(number);
  if (number > 0) return '+' + integerToString(number);
  return integerToString(number)
}
