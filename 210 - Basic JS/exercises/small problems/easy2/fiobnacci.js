// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

// Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.

// Examples:

console.log(findFibonacciIndexByLength(2));       // 7  // [1, 1, 2, 3, 5, 8, 13]
console.log(findFibonacciIndexByLength(3));      // 12 // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74


/// PEDAC

// PROBLEM -
// Find the index of the first number in the fibonacci sequence has the same number of digits as teh argument passed in to the function.

// will always be a whole number passed in and will always be greater than 2.
// the first fibonacci number has index of 1 NOT 0.

// FIbonacci definition
// // The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

// First two numbers are [1, 1] by definition
// every subsequent number is the sum of the previous two numbers e.g [1,1] the next number will be 2
// [1,1,2] the next number will be 1 + 2 = 3 then you have [1,1,2,3] so the next will be 2 + 3.

// DATA structure

// will need to use an array to hold all the values and be able to calculate the length
// can slice the last two values

// algoritm

/// need to calculate the next fibonacci number in the sequence and check if it the number of digits (e.g String(num).length) is equal to the digitsLength argument.

// if it is return the array length (array length is last index + 1 which is what our return value should be?)

function findFibonacciIndexByLength(digitsLength, fibonacciArray = ([1, 1])) {
  if (lastDigitLength(fibonacciArray) === digitsLength) {
    return fibonacciArray.length;
  }

  return findFibonacciIndexByLength(digitsLength, updateFibonacci(fibonacciArray));
}

function updateFibonacci(array) {
  var nextNum = array.slice(-2).reduce((total, sum) => total + sum);
  array.push(nextNum);

  return array;
}

function lastDigitLength(array) {
  return String(array.slice(-1)[0]).length;
}