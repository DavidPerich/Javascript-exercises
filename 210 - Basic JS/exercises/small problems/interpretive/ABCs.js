// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

// Examples:




// input: string
// output: boolean
// PRoblem: Given a string - return true if the word can be spelled using the set of blocks
  // each block can only be used once so...
  // that means since the blocks are pairs of letters if you use one letter - then its pair cannot be used.
  // letters are case-insensitive
  // assume empty string returns true?
  // assume always be string

// data structure

/// need to store the blocks - can either use array of hash
  // hash can store whether it is used or not

  // for each char in string
    // for block in blocks
    // if char in string matches a block and blocks[block]
      // then return fasle
    // else if char in string matches a key switch that key to true

    // if loop completes without returning then return true




function isBlockWord(string) {
  var i;

  var blocks = {
    BO: false,
    XK: false,
    DQ: false,
    CP: false,
    NA: false,
    GT: false,
    RE: false,
    FS: false,
    JW: false,
    HU: false,
    VI: false,
    LY: false,
    ZM: false,
  }


  for (i = 0; i < string.length; i += 1) {
    for (let block in blocks) {
      regex = RegExp(`[${block}]`, 'i')

      if (regex.test(string[i])) {
        if (blocks[block]) return false;
        blocks[block] = true;
      }
    }
  }
  return true;
}



console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BaTCH'));      // true
console.log(isBlockWord('BuTCH'));      // false
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('jjjjjest'));       // false
