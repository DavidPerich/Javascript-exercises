// Write a function that takes a string as an argument and returns true if the string contains properly balanced parentheses, false otherwise. Parentheses are properly balanced only when '(' and ')' occur in matching pairs, with each pair starting with '('.

// Examples


function isBalanced(string) {
  var count = 0;
  var i;

  for (i = 0; i < string.length; i += 1) {
    if (count < 0) return false;
    if (string[i].match(/[(]/)) {
      count += 1;
    } else if (string[i].match(/[)]/)) {
      count -= 1;
    }
  }
  return count === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
