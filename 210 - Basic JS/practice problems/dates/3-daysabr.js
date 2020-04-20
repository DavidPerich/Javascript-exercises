// The getDay method, like many of the get methods on the date object, returns a zero-based index of the current day of week instead of the day name. This enables support for multiple locales and formats. Modify the output message of the previous problem to show the 3-letter day name abbreviation. You may use the following array:


var today =  new Date().getDay()
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log(daysOfWeek[today])