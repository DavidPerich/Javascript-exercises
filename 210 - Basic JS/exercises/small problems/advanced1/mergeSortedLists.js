// Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

// Examples:


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
// console.log(merge([1, 4, 5], []));             // [1, 4, 5]

// P
// input 2 arrays (could just do it with many)
// output 1 sorted array
  // result array must be built up in a sorted way- not just concat the arrays together and s
  // arrays will nto always be the same length



// while result.length < array1.length + array2.length
  //

  function merge(array1, array2) {
    var copy1 = array1.slice();
    var copy2 = array2.slice();
    var result = [];

    while (copy1.length > 0 && copy2.length > 0) {
      result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
    }

    return result.concat(copy1.length === 0 ? copy2 : copy1);
  }
