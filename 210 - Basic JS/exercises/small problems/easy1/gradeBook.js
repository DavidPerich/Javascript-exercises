// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

// Examples:

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"

function getGrade(...grades) {
  var score = average(grades);

  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F'
}

function average(grades) {
  return grades.reduce((total, sum) => total + sum) / grades.length
}