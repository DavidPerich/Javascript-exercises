// What will the following code snippets log?

// // Code Snippet 1
// var counter;
// function counter(count) {
//   // ...
// }
// var counter = 5;

// var rate = 3;
// console.log('The total value is ' + String(counter * rate)); // The total value is 15

// The function definition gets hoisted and teh declaration of counter variable gets hoisted. But then counter variable is set to 5. So it should work as expected.



// Code Snippet 2
function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate)); // NaN - because the assignment ot 5 is after the console.log

var counter = 5;
var rate = 3;

// Code Snippet 3
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate)); // same as first - it should work