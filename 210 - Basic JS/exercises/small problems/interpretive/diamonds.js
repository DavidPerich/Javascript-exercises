// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

// problem
// input: a num
// output: log the console a diamond of *which is input rows high
// diamond rules
  // middle row has same number of * values as input
  // moving out from the middle each row 2 stars replaced by 2 spaces
  //  OR - The first row has 1 star - centered in the middle
  // the next row has previous row + 2 stars
  // this happens until you get to the middle row and then the pattern is -2 stars


  // agorithm
  // loop from i = 1 to i = max row
    // log stars
      // where stars equals i
      // spaces = maxRow - i / 2
    // i + 2

    // log max row

    // loop from i = maxRow - 2 to 1
    // log stars
    // i -= 2

  function diamond(maxRow) {
    var i;

    for (i = 1; i < maxRow; i += 2) {
      console.log(generateRow(i, maxRow));
    }

    for (i = maxRow; i >= 1; i -= 2) {
      console.log(generateRow(i, maxRow));
    }

  }

function generateRow(numStars, maxRow) {
  var stars = ('*').repeat(numStars);
  var numSpaces = (maxRow - numStars) / 2;
  var spacesEitherSide = (" ").repeat(numSpaces);

  return spacesEitherSide + stars + spacesEitherSide;
}


// Examples:

diamond(1);
// // logs
// *
diamond(3);
// // logs
//  *
// ***
//  *
diamond(9);
// // logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *