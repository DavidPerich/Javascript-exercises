// Write a function that takes a string argument, and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// Examples:



console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('abb'));                          // "a"
console.log(crunch(''));                           // ""

// input is a string which includes repeated characters
// output is a string with all  consecutive duplicate characters collapsed into a single character."

function crunch(string) {
  return string.replace(/(.)\1+/gi, '$1')
}