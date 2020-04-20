// Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

// Examples:

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

// input: an integer representing a year
// output: an integer representing the number of "Friday the 13ths" in that year
  // only for years greater than 1752

// Alorgithm
// from 1/1/yaer to 31/12/year  add to a counter if day = 5 and date = 13
// return counter

// i didn't finish


function fridayThe13ths(year) {
  var startDate = new Date(year, 0, 1);
  var endDate = new Date(year, 11, 31);
  var d;
  var result = 0;

  for (date = startDate; date <= endDate;) {
    console.log(date.getDate(), endDate, date)
    if (date.getDate() === 12 && date.getDay() === 5) {

      result += 1;
      date.setDate(date.getDate() + 1);
    }

  return result;
  }
}