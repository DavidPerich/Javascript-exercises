
// Give us your feedback
// Right Triangles
// Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

// Examples:

triangle(4);

//     *
//    **
//   ***
//  ****

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// PEDAC

// PROBLEM

// create a right angled triangle of n row. where n is argument to the triangel method
// the row starts with n - 1 spaces  one * and
// the second row is n -2 spaces + one *
// etc

// ALgoritm
// loop from 0 to n argument
// for each loop log a line which is n - i " " + '*'
// increment i

function triangle(maxRowSize) {
  var i;
  var numberOfSpaces;

  for (i = 1; i <= maxRowSize; i += 1) {
    numberOfSpaces = maxRowSize - i
    numberOfStars = i
    console.log(((' ').repeat(numberOfSpaces) + ('*').repeat(numberOfStars)));
  }
}
