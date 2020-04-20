// Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].


// PEDAC
// prompt the user 6 times.
// log to the console if the 6th number appaers in the previous 5

//examples
  // what happens if they input a non-numeric string? Validate input so they resubmit, conver to num, OR let the method work with all strings. Go with last one

// Datasctructure - add each returned value from prompt to an array.
//

/// algorithm

// declare  array to store return value of prompts
// declare a final value variable
// loop five times
  // each time prompt the user to submit a value
  // push the returned value to the array
/// prompt user to submit a value and save in final value variable
/// findIndexof final value in array
// if -1 return The number [num] does not appear in [array].
// otherwise if -1 return The number [num] does  appear in [array].


function numberGame() {
  var responses = [];
  var finalValue;
  var i;

  for (i = 0; i < 5; i += 1) {
    responses.push(prompt('Enter the a number:'));
  }

  finalValue = prompt('Enter the last number:');

  if (responses.some((response) => finalValue === response)) {
    console.log('The number ' +  finalValue + ' does appear in ' + responses);
  } else {
    console.log('The number ' +  finalValue + ' does not appear in ' + responses);
  }
}

numberGame()