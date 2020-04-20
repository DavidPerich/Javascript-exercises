// Write a function named checkGoldbach() that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". The function takes as its only parameter, an integer n, and logs all combinations of two prime numbers whose sum is n. Log the prime pairs with the smaller number first. If n is odd or less than 4, your function should log null.

// Your checkGoldbach() function may call the isPrime() function you wrote for a previous practice problem.

// Example
checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

// checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

logic:

function checkGoldbach(num) {
  if (num % 2 === 1 || num < 4 ) console.log( null);

  var i
  for (i = 1; i < num; i += 1) {
    if (isPrime(i)) {
      var x
      for (x = num; x > i; x -= 1) {
        if (isPrime(x) && i + x === num) console.log([i, x])
      }
    }
  }
}

function isPrime(number) {
  var i;

  if (number <= 1) {
    return false;
  }

  for (i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
