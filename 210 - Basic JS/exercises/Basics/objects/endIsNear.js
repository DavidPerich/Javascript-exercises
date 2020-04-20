// The penultimate function takes a string as an argument and returns the next-to-last word in the string. The function assumes that "words" are any sequence of non-whitespace characters. The function also assumes that the input string will always contain at least two words. The penultimate function in the example below does not return the expected result. Run the code below, check the current result, identify the problem, explain what the problem is, and provide a working solution.

// Examples:

function penultimate(string) {
  var array = string.split(' ');
  return array[[array.length - 2]]
}

console.log(penultimate('last word'));                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"

// The problem is that we can't access array index's with negative values like you could in Ruby.
// When we call array[-2] we are actually checking to see if the array has a property with a key of '-2'. This array does not an so it returns undefined.

// We would fix this by changing