// Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.

// Example
multiplesOfThreeAndFive(500);

// // output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// // ... remainder of output omitted for brevity

function multiplesOfThreeAndFive(limit) {
  for (i = 1; i <= limit; i += 1) {
    if (i % 15 === 0) {
      console.log(i + '!');
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
}