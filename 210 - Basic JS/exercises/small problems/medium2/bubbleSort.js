// 'Bubble Sort' is one of the simplest sorting algorithms available. Although it is not an efficient algorithm, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

// A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.

// 6	2	7	1	4	Start: compare 6 > 2? Yes
// 2	6	7	1	4	Swap
// 2	6	7	1	4	6 > 7? No (no swap)
// 2	6	7	1	4	7 > 1? Yes
// 2	6	1	7	4	Swap
// 2	6	1	7	4	7 > 4? Yes
// 2	6	1	4	7	Swap
// 2	6	1	4	7	2 > 6? No
// 2	6	1	4	7	6 > 1? Yes
// 2	1	6	4	7	Swap
// 2	1	6	4	7	6 > 4? Yes
// 2	1	4	6	7	Swap
// 2	1	4	6	7	6 > 7? No
// 2	1	4	6	7	2 > 1? Yes
// 1	2	4	6	7	Swap
// 1	2	4	6	7	2 > 4? No
// 1	2	4	6	7	4 > 6? No
// 1	2	4	6	7	6 > 7? No
// 1	2	4	6	7	1 > 2? No
// 1	2	4	6	7	2 > 4? No
// 1	2	4	6	7	4 > 6? No
// 1	2	4	6	7	6 > 7? No
// 1	2	4	6	7	No swaps; all done; sorted
// We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

// For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page.

// Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

// Examples:

var array = [1, 3, 4];
console.log(bubbleSort(array));
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
console.log(bubbleSort(array));
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(bubbleSort(array));
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// P
// input: An array
// output: an sorted array
  // sorted means lowest number first
  // OR lowest AcSii value if words

// BUBBLE SORT
   // while the array is unsorted
      // iterates through the array
      // each pair of consecutive values gets compared
      // if the 1st value is greater than the second then they are swapped indexs
  // when the function iterates through an array without making any swaps then it returns the array (as the array is sorted)

  // the  function mutates the array

  // Algorithm

  // need swapped variable to check if the current iteration has swapped anything

  // while swapped;
  // swapped =  false at top of while loop

  // do
  // loop through the array until length - 2?
    // make sure not to compare the last element in the array against a value outside the index range
    // assign first variable[i], second variable[i + 1] ||
  // if first > second array[i] = second and array[i+1] = first
  // swapped = true
  // else continue

  // return array


function bubbleSort(array) {
  var swapped;
  var leftSide;
  var rightSide;
  var i;

  do {
    swapped = false;

    for (i = 0; i < array.length - 1; i += 1) {
      leftSide = array[i];
      rightSide = array[i + 1];

      if (leftSide > rightSide) {
        array[i] = rightSide;
        array[i + 1] = leftSide;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}
