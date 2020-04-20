// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

// Examples:

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(100000002))        // becomes  21
console.log(maxRotation(8703529146));      // 7321609845


//PEDAC
/// P
// Input: an integer
// output: an integer
  // The output is the result of iterating through the input num and rotating the number once for each "index"
  // starting with the max rotation.
  // for example: 105 => 051 => 15 - The zero will get dropped in that middle rotation.

// algorithm
// for i in number of digits
// call rotateRightMostDigits()
// i - 1


function maxRotation(number) {
  var i;
  var length = String(number).length;

  for (i = length; i >= 0; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }
  return number;
}

function rotateRightmostDigits(num, digitsToRotate) {
  var digitsArray = String(num).split("");
  var startingRotation = digitsArray.length - digitsToRotate;
  var rotatedDigit;
  var rotatedNumber;

  rotatedDigit = digitsArray.splice(startingRotation, 1);
  rotatedNumber = digitsArray.concat(rotatedDigit).flat().join("")

  return parseInt(rotatedNumber, 10);
}

console.log(rotateRightmostDigits(100000002, 7));