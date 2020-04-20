// Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.

// You may assume that the input is always a non-negative integer.

// Example
console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false

// what is a prime? Number only divisible by 1 and itself.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  var half = (num / 2)

  for (i = 2; i < half; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
