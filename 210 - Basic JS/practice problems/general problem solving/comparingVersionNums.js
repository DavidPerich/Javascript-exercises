// To look at the steps of this problem solving approach in depth, we will work through a problem and see how to apply each step in the process. The problem we will look at compares software version numbers.

// While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation for a more complicated number system. The following are all legal version numbers:

// 1
// 1.0
// 1.2
// 3.2.3
// 3.0.0
// 4.2.3.0
// Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character, we should return null.
// Here is an example of version number ordering:

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

function compareVersions(version1, version2) {
  // ...
}

// PEDAC

// Problem
// Input is two strings
  // - valid input will be in the format of # or #.# (repeated)
// output is -1, 1, or 0
  // if a v1 is greater than v2 return 1
  // if v1 is less than v2 return -1
  // if they are the same return 0

  // A I think string

  // test cases

  console.log(compareVersions('1', '1'));            // 0
  console.log(compareVersions('1.1', '1.0'));        // 1
  console.log(compareVersions('2.3.4', '2.3.5'));    // -1
  console.log(compareVersions('1.a', '1'));          // null
  console.log(compareVersions('.1', '1'));           // null
  console.log(compareVersions('1.', '2'));           // null
  console.log(compareVersions('1..0', '2.0'));       // null
  console.log(compareVersions('1.0', '1.0.0'));      // 0
  console.log(compareVersions('1.0.0', '1.1'));      // -1
  console.log(compareVersions('1.0', '1.0.5'));      // -1




  // data structure

  // initially should be a string to use regex to check that it doesn't include any non-digit or . chars.
  // then an array of integers so that we can compare numbers not strings and use index to compare strings in similar position
  // ouput returns an integer

  // algorithm

  // 1) check if the arguments match the pattern(s) required to be valid version numbers
  // split the strings by the . to get an array of string values
  // map the strings to integer
  // declare variable =  the length of the longer array
  // loop for the length of the longer arrray
  // if v1[index] === undefined then v2 must be longer
  // if v2[index] === undefined then v1 must be longer

  // Otherwise
  //   compare by each index. If the values at the index position are teh same in each array then continue
  // if ever version1 is greater than break and return 1
  // if every version2 num is greater than break and return 1

  // if the loop finishes without returning then the versions must be equal and so return 0.

  function compareVersions(version1, version2) {
    var validChars = /^[0-9]+(\.[0-9]+)*$/;
    var v1Array;
    var v2Array;
    var v1Value;
    var v2Value;
    var i;

    if (!validChars.test(version1) || !validChars.test(version2)) {
      return null;
    }

    var maxLength = Math.max(aParts.length, bParts.length);


    v1Array = version1.split(".").map(Number);
    v2Array = version2.split(".").map(Number);



    for (i = 0; i < maxLength; i += 1) {
      v1Value = v1Array[i] || 0
      v2Value = v2Array[i] || 0

      if (v1Value > v2Value) return 1;
      if (v1Value < v2Value) return -1;
    }

    return 0;
  }
