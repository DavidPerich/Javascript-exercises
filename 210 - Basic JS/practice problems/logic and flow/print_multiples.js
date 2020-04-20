// Write a function logMultiples that takes one argument number. It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.

// You may assume that number is an integer between 0 and 100.

// Example
logMultiples(17);
// // output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// // output (3x and 1x)
// 63
// 21

function logMultiples(num) {
  // accept one integer argument
  // log any number that is a multiple of the argument that is: less than 100 and odd. Values should be in desending order r
  // iterate down from 100 and check to see whether i % by num === 0 && i % by 2 === 0
  for (i = 100; i >= 1; i -= 1) {
    if (i % num === 0 && i % 2 === 1) {
      console.log(i);
    }
  }

}