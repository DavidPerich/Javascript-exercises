// Write a program to determine a student’s grade based on the average of three scores you get from the user. Use these rules to compute the grade:

// If the average score is greater than or equal to 90 then the grade is 'A'
// If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
// If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
// If the average score is less than 50 then the grade is 'F'
// You may assume that all input values are valid positive integers.

// Example
// prompts to get the 3 scores
// Enter score 1: 90
// Enter score 2: 50
// Enter score 3: 78

// log to the console
// Based on the average of your 3 scores your letter grade is "B".

var scores = []

for (i = 1; i <= 3; i += 1) {
  score = prompt(`What was the score of test ${i}`)
  scores.push(score);
}

var average_score = average(scores)
var letter_grade = grades(average_score)

console.log(average_score)

console.log(`Based on the average of your 3 scores your letter grade is ${letter_grade}`)


function grades(average_score) {
  if (average_score > 90) return "A"
  if (average_score > 70) return "B"
  if (average_score > 50) return "C"
  return "F"
}

function average(scores) {
  return (sum(scores) / scores.length)
}

function sum(scores) {
  total = 0
  scores.forEach(element => {
    total += Number(element)
  });
  return total;
}