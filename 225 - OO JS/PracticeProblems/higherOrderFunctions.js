// 3) Implement makeCheckEven below, such that the last line of the code returns an array [2, 4].


// var numbers = [1, 2, 3, 4];
// function makeCheckEven() {
//   return function(number) {
//     return number % 2 === 0
//   } // ... implement this function
// }

// var checkEven = makeCheckEven();

// console.log(numbers.filter(checkEven)); // [2, 4]


// 4)
// Implement execute below, such that the return values for the two function invocations match the commented values.

// function execute(func, operand) {
//   return func(operand); // ... implement this function
// }

// console.log(execute(function(number) {
//   return number * 2;
// }, 10)); // 20

// console.log(execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there buddy')); // "HEY THERE BUDDY"

// 5) Implement makeListTransformer below such that timesTwo's return value matches the commented return value.

function makeListTransformer(func) {
  return function (array) {
    return array.map(func)
  }
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]