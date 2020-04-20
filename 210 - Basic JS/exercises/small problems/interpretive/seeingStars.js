// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

// input: integer (N)
  //  n will always be an odd integer
  //  the smallest n value will be 7
// output: a NxN grid of "*" in a 8 pointed star configuration
  // star height = n rows
  // star width = n
  // the middle row ceil( n / 2 ) is n "*"
  // rows before the middle row and after the middle row all contain 3 "*"
  // first star stars at 0 index and increases until it is middle - 1 index
  // second star is always middle index
  // third star stars at -1 index and decreases until it is middle + 1 index
  // spaces will the rest.

// star(7) example
  // stars are 0, 3, 6 spaces are 1, 2, 4, 5
  // stars are 1, 3, 5 spaces are 0, 2, 4, 6
  // stars are 2, 3, 4 spaces are 0, 1, 4, 5
// Examples:

// datastructure - input is a num, output is a series of strings logged to the console.
// could either work with array and mapping the values or a string which Loop through and space with stars
// might have to repeat less to work with an array as i'll be mapping based on index.

// algorithm

// declare a middleInd variable which will be equal to floor(num / 2)
// declare an array and fill it with num * spaces
// declare startStar and endStar
// loop from 0 to middle
  // startStar = i
  // endStar = num - i - 1
  // Array map index
    //  if index = starStar || endStar || middle "*"
    // else " "
  //console.log(array.join) end loop

  // console.log(middleRow)
    // middle row =  array.map((value => star)).join

  // reverse the loop
  //

  


star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
star(9);
// // logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

