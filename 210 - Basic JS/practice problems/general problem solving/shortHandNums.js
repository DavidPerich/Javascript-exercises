// You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]


// PEDAC
// Problem
// given a list of numbers - represented in shorthand as a string return a list of complete numbers - as array?
// Rules -
// numbers will always be increasing and Range limits are always inclusive.


// There are differnt types of shorthand
  // 1) dropping everything except hte value in the ones place - it is implicit when the number will be 12 or 22 based on the previous number because they are always increasing. E.g 1, 2, 3, 7, 2 - the last number will be 12 because it must be greater than 7.
// 2) A range e.g "1-3, 1-2" represents 1, 2, 3, 11, 12 - The second range has to from 11 because the number must be greater than the previous number (3).
    // There can be many different seperates for ranges, but they all work the same "-", ":", ".."

// The first number will be a whole number. That is, it will always accurately represent the number to start from.
// assumption is that you can't combine styles?
// assumptiont that no empty strings.

// the next number needs to match the next number that ends with the same digits. eg 1,2, 2 = 1, 2, 12. But 1, 2, 22 = 1, 2, 22 ?


// data strucutre
// has to be an array. We output an array and we need to iterate through the individual numbers and map.

// algorithm
//
// split the string by `,` to get all the numbers AND the ranges.
// map the array of values
  // if teh number contains any of teh seperators return an array that has the start and end.
  // else return the number.

function converShortHandNumber(shortHandNum) {
  var results;
  var i;
  var numbersAndRanges = shortHandNum.split(",");

  consistentNumbersAndRanges = numbersAndRanges.map(function (value) {
    if (value.match(/[-:.]/) ) {
      return [value[0]]
    }
  })

  console.log(numbersAndRanges);
}

console.log(converShortHandNumber("1, 3, 7, 2, 4, 1")); // --> 1, 3, 7, 12, 14, 21
console.log(converShortHandNumber("1-3, 1-2")); // --> 1, 2, 3, 11, 12
console.log(converShortHandNumber("1:5:2")); // --> 1, 2, 3, 4, 5, 6, ... 12
console.log(converShortHandNumber("104-2")); // --> 104, 105, ... 112
console.log(converShortHandNumber("104-02")); // --> 104, 105, ... 202
console.log(converShortHandNumber("545, 64:11")); // --> 545, 564, 565, .. 611
console.log(converShortHandNumber("545, 64..11")); // --> 545, 564, 565, .. 611