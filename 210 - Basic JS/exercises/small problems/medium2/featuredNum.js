// A 'featured number' (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// Examples:

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987

//P
// input: integer
// output: integer which represents teh next "featured number"

// featured number rules:
  // is odd
  // is multiple of 7
  // all digits occur exactly once each e.g 133 is NOT a valid number, even though it is odd and divisble by 7 because 33 appears twice.

  // datastructure
  // will need to work as integer for first two rules then convert to string for last value.

  // algoritm
  // if num + 1 is not a "featured number" add 1

  /// featured number
  // if even return false
  // if % 7 != 0 return false
  // if String(num) has the same number twice then return false
    // can split to array and check with unique
    // can use REGEX to see if same value appears twice
    //
  // else - return true .


function featured(num) {

  let nextNum = num;
  do {
    nextNum  += 1
  } while (isNotFeatured(nextNum));

  return nextNum;
}

function isNotFeatured(num) {
    if (num % 2 === 0 || num % 7 != 0) return true;
    if (String(num).split("").filter(unique).length !== String(num).length) return true;
}

function unique(value, index, self) {
  return self.indexOf(value) === index;
}