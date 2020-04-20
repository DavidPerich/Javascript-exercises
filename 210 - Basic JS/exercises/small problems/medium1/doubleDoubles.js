// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

// Examples:

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
console.log(twice(1));            // What to do with single digits? Should double as there is no pattern to match. // 2


// PEDAC
// PROBLEM

// Input: An integer
// output: If the number is a doubledouble then return the number. Otherwise return the number * 2
  // a double double is a number which, when cut in half, has left and right side digits are exactly the same - e.g 44 = 4 | 4 which is the same
  // // 334433 = 334 || 433 so they aren't the same.
  /// 444 is not as it will be 44 | 4 - Anything odd length cannot by definition
  // Its not an annagram. It has to be the same number in same order.

// assume only get integers and no strings. No validation

// DATA Structure
// lets try to keep it in string, unless we need to double
// to practice regex

// ALGORTIM
// if String(num).length % 2 === 1 then return double number  // aka if it is digits.length is odd return double num (it can never be a double double)
// otherwise
  // declare variable to represent String version of num

  // option 2
  // slice(0, middle) === slice(middle) - that is middle to end.

function twice(num) {
  var stringNum = String(num);
  var middle = (stringNum.length / 2);
  var left = stringNum.slice(0, middle);
  var right = stringNum.slice(middle);

  return left === right ? num : num * 2
}
