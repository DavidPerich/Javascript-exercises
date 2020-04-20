// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// Examples:

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

// input: number representing a year
// output: string representaton of which century the year.

// The century should end in the appropriate 'st', 'nd', 'rd or 'th' end
// Assume you never get negative numbers or alternate object types
// assume years are always represented as whole numbers.

// rules
  // end in 1 - st
  // end in 2 - nd
  // end in 3 - rd
  // else 'th'
  // EXCEPT 11, 12, 13 which are 'th'

// Datastructure
// input: int
//output: a string

// Algorithm

// declare century variable;
// century = ceiling(year / 100)
// stringCentury = century to String
// if stringCentury ends with 11, 12, 13 then return stringCentury + 'th'
// if stringCentury ends with 1 return stringcentuiry + st
// 2 and nd
// 3 and rd
// else th

function century(year) {
  var stringCentury = String(Math.ceil(year / 100));

  return stringCentury + centurySuffix(stringCentury);
}


function centurySuffix(stringCentury) {
  if (stringCentury.match(/(11|12|13)$/)) return 'th';
  if (stringCentury.endsWith(1)) return 'st';
  if (stringCentury.endsWith(2)) return 'nd';
  if (stringCentury.endsWith(3)) return 'rd';
  return "th"
}
