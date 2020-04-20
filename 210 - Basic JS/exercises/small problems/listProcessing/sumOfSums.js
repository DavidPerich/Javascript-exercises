// Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

// Examples:

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
console.log(sumOfSums([1, 2, 3, 4, -5]));  // 25

// PEDAC

// PROBLEM
// input  an array
/// output: an integer
  // which is a result of the addition of each slice of the array.
  // eg if the array contains for elements then the returned value will be a result of array[0] + (arr[0] + arr[1]) + (arr[0] + arr[1] + arr[2]) + (arr[0] + arr[1] + arr[2] + arr[3])
// its a running total problem where the additional value is the total increases by slice(0, nextIndex) each time.
// assume it always is never empty and always just contains integers

// Algoritm
// reduce the array passing in 3 arguments to reduce - total, currentValue, index
  // total + array.slice(0, index).reduce((subTotal + subValue) => subTotal + Value);

function sumOfSums(array) {
  return array.reduce(function(total,_,index) {
    return total + array.slice(0, index + 1).reduce((subTotal, subValue) => subTotal + subValue);
  });
}