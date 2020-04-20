// For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

// map the array so that we have area for each array.
// reduce the new array to the sum of all sub-areas

function totalArea(array) {
  var areas = array.map(function (subArray) {
    return area(subArray[0], subArray[1]);
  });

  return areas.reduce((total, currentArea) => sum(total, currentArea))
}

function area(length, width) {
  return length * width;
}

function sum(total, value) {
  return total + value;
}

// addditional work

// Now, write a second Function named totalSquareArea. This Function should calculate the total area of a set of rectangles, just like totalArea. However, it should only include squares in its calculations: it should ignore rectangles that aren't square.

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121

// just need to adda  filter

function isSquare(array) {
  return array[0] === array[1]
}

function totalSquareArea(array) {
  var squares = array.filter(isSquare);

  return totalArea(squares)
}