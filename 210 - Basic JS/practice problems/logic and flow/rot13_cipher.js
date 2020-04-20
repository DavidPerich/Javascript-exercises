// Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

// For each character in the original String:

// If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. So a becomes n. If you reach the end of the alphabet, return to the beginning. So o becomes b.
// Letter transformations preserve case. A becomes N while a becomes n.
// Don't modify characters that are not letters.
// Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.

console.log(rot13('rs.'));

// Grnpuref

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
// It's worth noting that rot13 applied twice results in the original string:

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.
// This happens since there are 26 characters in the modern English alphabet: 2 sets of 13.

function rot13(string) {
  const ACSII_A = "A".charCodeAt();
  const ACSII_Z = "Z".charCodeAt();
  const ACSII_a = "a".charCodeAt();
  const ACSII_z = "z".charCodeAt();
  const CIPHER = 13;
  var i;
  var charcode;
  var char;
  result = ""

  function isUppercase(charcode) {
    return (charcode >= ACSII_A && charcode <= ACSII_Z);
  }

  function isLowercase(charcode) {
    return (charcode >= ACSII_a && charcode <= ACSII_z);
  }

  function convertLetter(charcode, acsii_start, acsii_end) {
      if (charcode + CIPHER > acsii_end ) {
        var diff =  charcode + CIPHER - acsii_end - 1;
        return(String.fromCharCode(acsii_start + diff));
      } else {
      return(String.fromCharCode(charcode + CIPHER));
      }
    }

  for (i = 0; i <  string.length; i += 1) {
    char = string[i];
    charcode = char.charCodeAt();

    if (isUppercase(charcode)) {
      result += convertLetter(charcode, ACSII_A, ACSII_Z);
    } else if (isLowercase(charcode)) {
      result += convertLetter(charcode, ACSII_a, ACSII_z);
    } else
    result += char;
  }
  return result;
}







