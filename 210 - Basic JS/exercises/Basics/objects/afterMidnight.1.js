// We can use the number of minutes before or after midnight to represent the time of day. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// The timeOfDay function below takes a time argument using this minute-based format, and returns the time of day in 24-hour format ("hh:mm"). Reimplement the function using JavaScript's Date object.

// Examples:

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"

function timeOfDay(deltaMinutes) {
  var MILLISECONDS_IN_MINUTE = 60000
  var date = new Date('1999, 1,1,00:00');
  deltaMilliseconds = date.getTime() + deltaMinutes * MILLISECONDS_IN_MINUTE

  date.setTime(deltaMilliseconds)

  var hours = padWithZeroes(date.getHours(),2);
  var minutes = padWithZeroes(date.getMinutes(),2);

  return hours + ':' + minutes;
}

// Note: Disregard Daylight Saving Time, Standard Time, and other complications.

// var MINUTES_PER_HOUR = 60;
// var HOURS_PER_DAY = 24;
// var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function timeOfDay(deltaMinutes) {
//   var hours;
//   var minutes;

//   deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   if (deltaMinutes < 0) {
//     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
//   }

//   hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
// }

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}