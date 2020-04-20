// Ideally, the suffix on the day number needs to adjust to the proper suffix for days like the 1st, 22nd, and 3rd. Write a function named dateSuffix that takes the day of month as a numeric value and returns the formatted day of month and suffix. Make sure you use the correct suffixes.

var day =  new Date().getDay();
var date = new Date().getDate();
console.log(date)
var digit;

var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

if (date.length === 1 ) {
  digit = date[0];
} else if (date[0] !== '1') {
  digit = date[1];
}


console.log(`Today is ${daysOfWeek[day]} the ${date}${correct_suffix(digit)}`)

function correct_suffix(digit) {
  switch (digit) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
    }
}

//

function dateSuffix(date) {
  var suffix = 'th';
  var dateString = String(date);
  var digit;

  if (dateString.length === 1 ) {
    digit = dateString[0];
  } else if (dateString[0] !== '1') {
    digit = dateString[1];
  }

  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  }

  return String(date) + suffix;
}

console.log("Today's date is " + daysOfWeek[today.getDay()] + ', the ' + dateSuffix(today.getDate()));