// Create a new date object variable named tomorrow that contains a Date object. Initialize the variable by setting it to the value of today. You can get the value of today using the getTime method. Next, change the date on the tomorrow object to the day after today: you should use setDate to change the date. Finally, log the tomorrow object with your formattedDate function

today = new Date()
var tomorrow = new Date(today.getTime());

tomorrow.setDate(today.getDate() + 1);

tomorrow.setDate(today.getDate() + 1)

console.log(today)
console.log(tomorrow)