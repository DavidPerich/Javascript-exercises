// Finally, write a function named formatTime that takes a date object as an argument and returns a string formatted with the hours and minutes as "15:30". Make sure you handle the case where the hours or minutes has only one digit: you need to pad the value with a leading zero in such cases, e.g., "03:04". You can use the getHours and getMinutes methods to obtain the hours and minutes.

var today = new Date()



formatTime(today)

function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(value) {
  var timeComponent = String(value);
  return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}