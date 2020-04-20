// Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.


function sumOrProduct() {
  var i;
  var num = parseInt(prompt('please enter an integer greater than 0'));
  var operation = prompt('please enter "s" to compute the sum or "p" to compute the product');

  var result = 1;

  for (i = 1; i < num; i += 1) {
    switch (operation) {
    case 'p':
      result *= i;
      break;
    case 's':
      result += i;
      break;
    default:
      sumOrProduct()
    }
  }
  return result
}

sumOrProduct()

// What if the input was an array of integers instead of just a single integer? How would your computeSum and computeProduct functions change? Given that the input is an array, how might you make use of the Array.prototype.reduce() method?


s