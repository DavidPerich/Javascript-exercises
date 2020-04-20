// Implement a function that takes a String as an argument and returns an object that contains a count of the repeated characters.

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
// //

// options - count all characters and only return the letters that have count of 2
//
// for each character in the string add += 1 to a lowercase key in an object -
// if the character is not in there set it to 0
// if it is then += 1
// once complete - loop through the array and delete every key/value that is less than 2
//

function repeatedCharacters(string) {
  var result = {};
  var i;
  string = string.toLowerCase()
  var keys;

  for (i = 0; i < string.length; i += 1) {
    if (string[i] in result) {
      result[string[i]] += 1
    } else {
      result[string[i]] = 1
    }
  };

  Object.keys(result).forEach(element => {
    if (result[element] < 2) {
      delete result[element]
    }
  });

  return result
};

