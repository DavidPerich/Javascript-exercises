// Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

var i;

for (i = 1; i <= 100; i += 1) {
  if (i % 2 === 1) console.log(i)
}

// further exploration

// Repeat this exercise with a technique different from the one that you used, and different from the one provided. Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.

var i = 1;
while (i < 100) {
  if (i % 2 === 1) console.log(i)
  i += 1
}