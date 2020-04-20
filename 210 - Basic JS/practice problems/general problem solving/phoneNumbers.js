// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

// PEDAC
// PROBLEM

// input is a string of characters potentially representing a phone number
//  - strings might contain spaces, dashes, dots, parenthesis, leading 1 number
// output is a clean string of 10 digits that can be used as a valid phone number.

// EXAMPLES



console.log(cleanPhoneNumber('123 456 789')); // returns '0000000000'
console.log(cleanPhoneNumber('1234 567 890')); // returns '1234567890'
console.log(cleanPhoneNumber('1234 567 8901')); // returns '2345678901'
console.log(cleanPhoneNumber('2234 567 8901')); // returns 0000000000'
console.log(cleanPhoneNumber('2234 567 890 123')); // returns '0000000000'
console.log(cleanPhoneNumber('1234-567-890')); // returns '1234567890'
console.log(cleanPhoneNumber('1A34-567-890')); // returns '0000000000'
console.log(cleanPhoneNumber('(1234)-   567-890')); // returns '1234567890'
console.log(cleanPhoneNumber(1234567890)); // returns '0000000000'

// data structure

// Want to be matching regex so start with a string
// will need to return a string
// input may not be a string - if so it should be return null

// ALGORITHM

// replace all letters that aren't a digit with any empty string ("")
//  return invalid number ('0000000000') if string.length is less than 10 or greater than 11.
// if string.length === 10 return string.
// if string.length === 11
  // if it starts with 1 then return string.slice(1)
  // if it starts with any other number then return invalid number.

  function cleanPhoneNumber(phoneNumber) {
    var onlyDigits;
    var numberLength;
    var invalidNumber = '0000000000'

    if (typeof (phoneNumber) !== 'string') return invalidNumber;

    onlyDigits = phoneNumber.replace(/\D/g, "");
    numberLength = onlyDigits.length

    if (numberLength <= 9 || numberLength >= 12) return invalidNumber;

    if (numberLength === 10) return onlyDigits;

    if (numberLength === 11 && onlyDigits[0] === `1`) {
      return onlyDigits.slice(1);
    } else {
      return invalidNumber
    }
  }