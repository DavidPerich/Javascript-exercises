// 3 The code below throws an error:

// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// console.log(sum)

// sum += (function (arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);  // ?

// console.log(sum)

// What kind of problem does this error highlight? Use an IIFE to address it, so that code runs without error.

// 4) Consider the output below:Implement a function countdown that uses an IIFE to generate the desired output.

// function countdown(count) {
//   (function (num) {
//     var i;

//     for (i = num; i >= 0; i -= 1) {
//       console.log(i);
//     }

//     console.log("Done!")
//   })(count);
// }

// countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!


// For an extra challenge, refactor the solution to problem ^^  using recursion, bearing in mind that a named function created in an IIFE can be referenced inside of the IIFE.

function countdown(count) {
  (function (num) {
    if (num === 0) {
      console.log('done!');
      return;
    }

    console.log(num)
    countdown(num - 1)
  })(count);
}

countdown(7);