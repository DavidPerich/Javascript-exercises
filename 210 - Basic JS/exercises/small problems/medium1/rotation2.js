// Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

// Examples:

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// Problem

// input: two arguments - one number to transform (numToTransform) and one integer representing the number of digits to rotate(digitsToRotate).
// ouput: a new integer
  // the function rotates the last digitsToRotate number in the numToTransform
  // so 123, 1 => 123 -- The last digit rotates itself. AKA nothing happpens
  // 123, 2 => 132 - teh last digit rotates to the left and swaps positions with the 2nd last
  // 123, 3 => 231 - the first digit to rotate is the 1 which moves to the end of the index.


// The first digit that needs to be rotated moves to the end. All other digits just drop index - 1


function rotateRightmostDigits(num, digitsToRotate) {
  var digitsArray = String(num).split("");
  var startingRotation = digitsArray.length - digitsToRotate;
  var rotatedDigit;
  var rotatedNumber;

  rotatedDigit = digitsArray.splice(startingRotation, 1);
  rotatedNumber = digitsArray.concat(rotatedDigit).flat().join("")

  return parseInt(rotatedNumber, 10)
}