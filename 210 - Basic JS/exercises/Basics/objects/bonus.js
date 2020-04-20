// The calculateBonus function calculates the bonus for a given salary. It makes use of two arguments for determining the bonus: a salary amount and a boolean switch. If the boolean is true, the bonus should be half of the salary; otherwise the bonus should be 0. Fill in the blanks in the function so that it will work, then explain why it works.

// Examples:

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000


// every JS function has an array-like object called arguments which contains any arguments passed into the function - even if there is no parameters listed in teh argument OR if there are excess arguments passed in to the function call.

// we can access elements in arguments with bracket notation. In this case we use the ternery operator to check whether the second argument passed into the method is true or false.

// if the statement before the ? in the ternery operator is true then the statement will return what is between the ? and the :. If it is false it will return what is after the :.

// this value is what is returned by teh calculateBonus method.