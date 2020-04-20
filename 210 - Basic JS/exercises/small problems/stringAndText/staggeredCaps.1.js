// Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

// Examples:

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"

// PEDAC
// INput: A string. OUTPUT: A string with staggered caps scheme
  // staggard caps rules
  //Every other character should be capitalised (e.g the first should be capitalised. second should be lowercase.
  // Non-Alphabetic characters shouldn't be changed, but count towards what to switch
    // e.g I AM DAVID => I Am dAvId

// ALGORITHM
// split to array
// map the array
  // if char is non-alphanumeric - return char
  // if index is odd return char.toUppperCase()
  // if index is even return char.touppercase()
// join the array

function staggeredCase(string) {
  return string.split("").map(swapCaseLogic).join("");
}

function swapCaseLogic(char, index) {
  if (char.match(/[^A-Z]/i)) return char;
  if (index % 2 === 0) return char.toUpperCase();
  return char.toLowerCase();
}

