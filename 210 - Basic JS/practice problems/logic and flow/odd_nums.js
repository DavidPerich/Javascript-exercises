// Write a function that takes a positive integer as an argument, and logs all the odd numbers from 1 to the passed in number (inclusive). All numbers should be logged on separate lines.

// Example
 logOddNumbers(19);

// // output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19

// function logOddNumbers(num) {
//   for(i = 1; i <= num; i++) {
//     if (i % 2 === 1) {
//       console.log(i);
//     }
//   }
// }

// further exploration - do it without the if

// function logOddNumbers(num) {
//   for(i = 1; i <= num; i+= 2) {
//       console.log(i);
//   }
// }

// further exploration - do it by checking evens

function logOddNumbers(num) {
  for(i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      continue;
    } else {
      console.log(i);
    }
  }
}