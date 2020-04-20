// }
// Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as backwards. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

// Examples:


// PEDAC
// PROBLEM

//INPUT a string: OUTPUT: An array of substrings that are palindromes of the orignal string
  // palindromes should be sorted by their order of appearance in the strnig
  // order of appearance means position of their first char
  // duplicate substrings should not appear.


// Palindrome rules
  // All characters matter, including punctuation
  //  case matters e.g Did is not a palindrome, but DiD is.
  // single chars are not palindrome.

// algorithm

// OPTION 1
// create array all sub strings
  // filter for real palindrome
  // filter for unique values.

// option 2
// iterate through substrings
  // if value is real palindrome && not in results array - push to results array.
  // can use indexOf


function palindromes(string) {
  return substrings(string).filter(isPalindrome).filter(unique);
}

// substring functions
function substrings(string) {
  return string.split("").map(function(_, index) {
    return substringsAtStart(string.slice(index));
  }).flat();
}

function substringsAtStart(string) {
  return string.split("").map((_, index) => string.slice(0, index + 1));
}

// palindrome functions

function isPalindrome(string) {
  if (string.length === 1) return false;
  return string === reverse(string);

}

function reverse(string) {
  result = ""
  var i;

  for (i = string.length - 1; i >= 0; i -= 1) {
    result += string[i]
  }
  return result;
}

// function to check for unique.

function unique(value, index, self) {
  return self.indexOf(value) === index;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
