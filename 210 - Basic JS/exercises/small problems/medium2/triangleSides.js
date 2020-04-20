// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// Examples:

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"


// Problem
// input: three integers representing the lengths of three sides of a triangle
// output: a string
  // output will representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'

  // equilateral = all three sides are equal lengt
  // isoceles = two sides are equal length
  // scalene = all three sides are different lengths
  // invalid = sum of lengths of two shortest sides must be greater than the length of longest side && no side can have length < 0

// data
// need to output in string, but work in integers to conduct calculations

// algorithm
// check if invalid triangle - if yes return "invalid"
  // any values are 0
  // arguments(max) is greater than arguments(sum) - arguments(max)

  // check equiliatoral if valid return equilatoral
    // arguments.all === arguments[0]

  // check scalane
  // arguments[unique].length === arguments.legth

  // else isocleses

  function triangle(...triangleSides) {
    if (invalidTriangle(triangleSides)) return "Invalid";
    if (equilateral(triangleSides))return "equilateral";
    if (scalane(triangleSides)) return "scalane";
    return "Isoceles"
  }

  function scalane(triangleSides) {
    return triangleSides.filter(unique).length === triangleSides.length;
  }

  function equilateral(triangleSides) {
    if (triangleSides.every((side) => side === triangleSides[0])) return true;
  }

  function invalidTriangle(triangleSides) {
    var longestSide = Math.max(...triangleSides);
    var perimeter = triangleSides.reduce((total, side) => total + side);

    if (triangleSides.some((side) => side === 0)) return true;
    if  (longestSide >= (perimeter - longestSide)) return true;
    return false;
  }

  function unique(value, index, self) {
    return self.indexOf(value) === index;
  }