// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.

// Examples:

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

function sum(number) {
  var digits = String(number).split("").map(Number);

  return digits.reduce((total, value) => total + value);
}