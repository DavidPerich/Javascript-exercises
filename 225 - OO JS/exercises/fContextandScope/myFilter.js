// In this exercise we'll update the implementation of myFilter by adding the functionality of accepting an optional thisArg just like the original Array.prototype.filter.

// Here's our original implementation. We also show an example of how we want to call our modified function: the 3rd argument, filter, supplies the desired context (thisArg).

// Modify the original implementation such that the expected result is returned. Don't use the thisArg argument of Array.prototype.forEach.

// PROBLEm
// P -  modify the myFilter function so it can accept a context argument AND use that execution context in the forEach method execution (instead of the array execution context)
  // can't just use thisArg

  // Solution 1 ) You add a call and pass in cnotext

// function myFilter(array, func, context) {
//   var result = [];

//   array.forEach(function(value) {
//     if (func.call(context, value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

/// solution 2 - how can you use bind!
function myFilter(array, func, context) {
  var result = [];

  func = func.bind(context);

  array.forEach(function(value) {
    if (func(value)) {
      result.push(value);
    }
  });

  return result;
}


var filter = {
  allowedValues: [5, 6, 9],
}

var result = myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter); // returns [5, 6, 9]

console.log(result)