// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

//PROBLEM
// input: A string and a number
  // string is to be encrypted with Caser CIpher
  // number represents the number of rotations that each character needs to be rotated
  // each character is right-shifted n positions in the alphabet. IF the character exceeds the length of the alphabet (26) then it wraps around and starts from A

// output: An encrypted string

// algoritm
// for each char in input string
  // if char matches a-z
    // replace char with encrypted char

  // if char matches A-Z
    // replace char with encrypted char and reconvert to UPpercase
    // replace char with encrypted char

  // encryption function
    // convert to lowercase
      // if numberOfRotations > alphabetlength
        // call cipher function(char, numberOfRotations - alphabetLength)
      // else if number of rotations would mean that ACSII value of (Char) > alpahbet length
        // replace char with a_ACSII value + (char ACSSI value + rotations - alphabet length)
      // else char


const a_ACSII = "a".charCodeAt(0);
const z_ACSII = "z".charCodeAt(0);
const ALPHABET_LENGTH = 26

function caesarEncrypt(string, rotations) {
  var i;
  var result = "";

  for (i = 0; i < string.length; i += 1) {
    if ((/[a-z]/).test(string[i])) {
      result += encryptChar(string[i], rotations);
    } else if ((/[A-Z]/).test(string[i])) {
      result += encryptChar(string[i], rotations).toUpperCase();
    } else {
      result += string[i];
    }

  }
  return result;
}

function encryptChar(char, rotations) {
  var newCharCode;
  var charAcsii = char.toLowerCase().charCodeAt(0);

  if (rotations > ALPHABET_LENGTH) {
    caesarEncrypt(char, rotations - ALPHABET_LENGTH);
  }

  if ((rotations + charAcsii) > z_ACSII) {
    let newRotations = charAcsii + rotations - z_ACSII - 1;
    newCharCode = a_ACSII + newRotations;
    return String.fromCharCode(newCharCode);
  }

  return String.fromCharCode(charAcsii + rotations);
}



// Examples:

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"
console.log(caesarEncrypt('A', 29));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"