// Implement a function that takes a string and a number times as arguments. The function should return the string repeated times number of times. If times is not a number, return undefined. If it is a negative number, return undefined also. If times is 0, return an empty string. You may ignore the possibility that times is a number that isn't an integer.

function repeat(string, times) {
//  if times not a number return undefined
//  if times < 0 return undefined
//  if times == 0 return ""
//  else loop for times times and add the string a results string.
  if (typeof(times) != 'number' || times < 0) return undefined
  if (times === 0) return ""

  var i
  results = ""
  for (i = 1; i <= times; i += 1) {
    results = results += string
  }
  return results
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined
// You may concatenate strings, but you may not use any other properties or methods from JavaScript's built-in String class.