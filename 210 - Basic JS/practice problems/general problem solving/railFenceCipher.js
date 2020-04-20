// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

// In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// Then reads off:

// WECRLTEERDSOEEFEAOCAIVDEN
// To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// The first row has seven spots that can be filled with "WECRLTE".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Now the 2nd row takes "ERDSOEEFEAOC".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Leaving "AIVDEN" for the last row.

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// If you now read along the zig-zag shape you can read the original message.
3 * 


// PEDAC - encrypt
// Input is a string:
// output is a encrypted string following the cipher
  // cipher adds chars at index positions visible by 4 to one row (array)
  // adds all odd index chars to a middle array
  // adds remainding index chars (all divisible by 2) to third array
  // outputted string is flattened version of those arrays joined together
// Assume all chars that aren't A-z are removed?
// Assume you won't get an empty string.

// datastrucutre

// input is string and output is a string.
// need to clean the string so makes sense to just use a string

// algorithm
// declare result array with three nested arrays [[],[],[]]]
// cleanString = input string replace all non /A-Z/gi with empty string.
// loop for cleanString.length
// if i % 4 ===  0 push string[i] to result[0]
// if i % 2 === 1 push string[i] to result[1]
// else push string[i] to result [2]

// return flattened version of those arrays joined to one string



function railCipher(string) {
  var results = [[], [], []];
  var i;
  var cleanString = string.replace(/[^A-Z]/g, "");

  for (i = 0; i < cleanString.length; i += 1){
    if (i % 4 === 0) {
      results[0].push(cleanString[i]);
    } else if (i % 2 === 1) {
      results[1].push(cleanString[i]);
    } else {
      results[2].push(cleanString[i]);
    }
  }
  return results.flat().join("");
}


console.log(railCipher('WE ARE DISCOVERED FLEE AT ONCE')) // WECRLTEERDSOEEFEAOCAIVDEN
console.log(railCipher('WE ARE DONE')) // [['W', 'E', 'E'], ['E', "R", 'D', 'N'], ['A', 'O'] --> WEEERDNAO --> Index of original string [[0,4,8,12], [1,3,5,7,9,11, 13 ], [2,6,10]]
console.log(railCipher('WE---ARE DONE')) // [['W', 'E', 'O'], ['E', "R", 'D', 'N'], ['A', 'I', 'E']] --> WEEERDNAO
console.log(railCipher('WE')) // WE


// PEDAC - decrypt

// input is a encrypted string - we know it is encrypted with the railFence cipher 

// the first of n characters  belong to the top row
// the second set n characters belong to the middle row
// the third set of n characters belongs to the last row 
// 