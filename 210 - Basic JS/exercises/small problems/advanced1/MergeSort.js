// Give us your feedback
// Merge Sort
// Merge sort is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays, then combining those nested subarrays back together in sorted order. It is best explained with an example. Given the array [9, 5, 7, 1], let's walk through the process of sorting it with merge sort. We'll start off by breaking the array down into nested subarrays:

// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]
// We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:

// [[[9], [5]], [[7], [1]]] -->
// [[5, 9], [1, 7]] -->
// [1, 5, 7, 9]
// Write a function that takes an array, and returns a new array that contains the values from the input array in sorted order. The function should sort the array using the merge sort algorithm as described above. You may assume that every element of the array will be of the same data type—either all numbers or all strings.

// input: an array
// output a sorted array
  // sorted with merge sort
// merge sort rules
  // split the array in two arrays
  // for each half split that in half into two arrays
    // for that new nested array split that in half again
    // keep doing this until you are left with single element arrays.

// for each element in teh array call merge
// Feel free to use the merge function you wrote in the previous exercise.

// if some condition
  //


// Examples:

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));

// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

function mergeSort(array) {
  var middle = array.length / 2;
  var left;
  var right;

  if (array.length === 1) {
    return array;
  }

  left = array.slice(0, middle);
  right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(array1, array2) {
  var clone1 = array1.slice();
  var clone2 = array2.slice();
  var result = [];

  while (clone1.length > 0 && clone2.length > 0) {
    result.push(clone1[0] <= clone2[0] ? clone1.shift() : clone2.shift());
  }

  return result.concat(clone1.length === 0 ? clone2 : clone1);
}
