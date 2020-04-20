// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every second digit
// For any digit that thus become 10 or more, subtract 9 from the reuslt
// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)

// Add all these digits together

// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

// If the total (the checksum) ends in 0 (put another way, if the total modulus 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. So, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

//PEDAC
// PROBLEM

// INPUT: A number in string format - may have non-numeric characters that should be ignored
// Ouput: Boolean - If number is valid per Luhn forumula return true. Else false.

// validity check - once processed the (total % 10) must equal 0.

// Processing the number:
// Starting from rightmost digit and moving left - double the value of every second digit.
  // if the digit becomes greater than 10 substract 9 // e.g if the digit was 8 it would become (8 * 2) - 9 = 7
  // otherwise just return the doubled digit e.g 1 * 2 becomes 2

// add all the transormed digits together to get the check sum
// Check if this total % 10 === 0;

// Examples:
// console.log(validLuhn('')) // returns true?
console.log(validLuhn('1111')) // returns FALSE
console.log(validLuhn('8763')) // returns TRUE
console.log(validLuhn('87- -asda -- asda 63')) // returns TRUE
console.log(validLuhn('2323 2005 7766 3554')) // returns true
console.log(validLuhn('2323 2005 7766 3555')) // returns False

// data structure
// input is a string
// output is a boolean
// will need to clean the number, but then transform and reduce the numbers it so we will convert to Array.

// Algorithm

// clean string to remove any non digit characters
// split by "" to an array of characters
// reverse the array
// map the array
  // transform every ODD numbered index to be a number which is then doubled
    // if the result of doubling it is greater than 10 return that number - 9
    // else return the double result
  // else just transform it to be a number
// reverse teh resulting array of numbers
// reduce the array of numbers by adding them together.
//  return the result of total % 10  === 0

//


function validLuhn(StringNumber) {
  var cleanNumber = StringNumber.replace(/\D/g, "");
  var numArray = cleanNumber.split("").reverse().map(Number);
  var transformedArray = lunhTransform(numArray);

  var checkSum = transformedArray.reduce(function (total, num) {
    return total + num;
  });

  return checkSum % 10 === 0;
}

function lunhTransform(array) {
  return array.map(function (num, index) {
    if (index % 2 === 1 && num * 2 >= 10) {
      return (num * 2) - 9;
    } else if (index % 2 === 1) {
      return (num * 2);
    } else {
      return num;
    }
  });
}
