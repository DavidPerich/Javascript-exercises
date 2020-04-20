// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will put in numbers.

// Example:

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

function tipCalc() {
  var bill  = Number(prompt('What is the bill?'))
  var tipPercent = parseFloat(prompt('What is the tip percent?'));

  tipAmount = bill * (tipPercent / 100) ;
  total = bill + tipAmount;

  console.log(`The total tip is $${tipAmount}`);
  console.log(`The total is $${total}`)
}