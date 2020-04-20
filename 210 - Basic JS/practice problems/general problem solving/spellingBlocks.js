// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

// Examples:

isBlockWord('BATCH');      // true
isBlockWord('BB');          // false
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('Bo'); // return false
isBlockWord('Bx'); // return true

// PEDAC
// PROBLEM

// INPUT: A string
// output: a boolean
  // will be true if the input can be created from the blocks - which are pairs of letters

// Rules -
// blocks (and therefore letters) can only be used once.
// this also means the pair cannot be used
// case doesn't matter.
// I assume I dont need to deal with input characters that aren't letters

// data structure
// store blocks as array of strings like 'BO'

// algorithm

// convert string to uppercase

// loop through string  to findIndex() of the block that  matches that character
  // if the block exists
    // delete that block from the array
    // continue
// else return false

// return true if the looop makes it all the way through

function isBlockWord(word) {
  var i;
  var blocks = ['B:O', 'X:K', 'D:Q', 'C:P', 'N:A', 'G:T', 'R:E', 'F:S', 'J:W', 'H:U', 'V:I', 'L:Y', 'Z:M'];
  var blockIndex;

  word = word.toUpperCase();

  for (i = 0; i < word.length; i += 1) {
    blockIndex = blocks.findIndex(function (block) {
      word[i].match(block)
    });

    console.log(blockIndex)
  }


}