// Build a program that asks a user for the length and width of a room in meters, and then logs to the console the area of the room in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the prompt() function to collect user input.

// Example:

function bigRoom() {
  var length = prompt("Enter the length of the room in meters:");
  var width = prompt("Enter the width of the room in meters:");
  var area = Number(length) * Number(width);
  return `the area of the room is ${area} square meters ${metersToFeet(area)}`;
}

function metersToFeet(meters) {
  return meters * 10.763857142857143;
}

// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

