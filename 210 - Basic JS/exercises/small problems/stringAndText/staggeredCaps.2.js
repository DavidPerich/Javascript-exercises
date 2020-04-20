// Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be upper or lower case. Non-alphabetic characters should still be included in the output string, but should not be counted when determining the appropriate case.

// Examples:

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"

function staggeredCase(string) {
  return string.split("").map((char, index) => swapCaseLogic(char, index, string)).join("");
}

function swapCaseLogic(char, index, string) {
  var NonLettersSoFar = string.slice(0, index).match(/[^A-Z]/ig);
  var numberOfNonLetters = NonLettersSoFar ? NonLettersSoFar.length :  0;
  var newIndex;

  newIndex = index - numberOfNonLetters

  if (newIndex % 2 === 0) return char.toUpperCase();
  return char.toLowerCase();
}

// PEDAC
// non-alphabetic chars don't count towards index