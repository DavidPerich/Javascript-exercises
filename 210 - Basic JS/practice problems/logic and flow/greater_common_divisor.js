// Create a function that computes the Greatest Common Divisor of two positive integers.

// Example
console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(20, 50));    // 1

// easiest way - iterate from down from the smaller number to 1. if both numbers are divisble by i then return i else continue

function gcd(num1, num2) {
  var small_num = num1 > num2 ? num1 : num2

  for (i = small_num; i >= 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) return i;
  }
}

