// The productOfSums function shown below is expected to return the product of the sums of two arrays of numbers. Read through the following code. Will it produce the expected result? Why or why not?

function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum;
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

console.log(total([1,2]))
// No, the total method does not return the final value stored in sum. This means that it will return undefined. The productOfSums function therefore wwill return NaN which is the result of undefined * undefined.

// I missed the second problem which was that the sum variable in the the total function is never assigned an initial number after it is declared. So we are tryin to add numbers to a variable that holds undefined. .