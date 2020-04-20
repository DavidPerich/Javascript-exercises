// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

// Examples:

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150


function sumSquareDifference(maxNum) {
  return squareOfSum(maxNum) - sumOfSquares(maxNum)
}

function squareOfSum(num) {
  return range(1, num).reduce((total, value) => total + value) ** 2;
}

function sumOfSquares(num) {
  return range(1, num).map((value) => value ** 2).reduce((total, value) => total + value);
}

function range(start, end) {
  return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}

