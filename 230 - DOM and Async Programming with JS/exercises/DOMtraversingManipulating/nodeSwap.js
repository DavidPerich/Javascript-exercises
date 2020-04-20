// Write a function that takes two element ids as arguments and swaps the positions of the elements represented by the ids. The function returns true for valid swaps and undefined for invalid. To put the focus on the node swapping functionality, you can assume that nodes will have a value for the id attribute and two arguments will always be provided. Use the following HTML and sample codes to test your output:

// // at least one of the id attributes doesn't exist
// > nodeSwap(1, 20);
// = undefined

// // at least one of the nodes is a "child" of the other
// > nodeSwap(1, 4);
// = undefined
// > nodeSwap(9, 3);
// = undefined

// > nodeSwap(1, 2);

// // multiple swaps
// > nodeSwap(3, 1);
// > nodeSwap(7, 9);

  // return undefined if node doesn't exist
  // return undefined if node is child of the other
  // otherwise swap and return true
    // insert before and then replace

function nodeSwap(id1, id2) {
  var firstElement = document.getElementById(id1);
  var secondElement = document.getElementById(id2);

  if (!firstElement || !secondElement) return undefined;

  if (firstElement.parentNode === secondElement || secondElement.parentNode === firstElement) {
    return undefined
  }



  secondElement.insertAdjacentElement("beforebegin", firstElement);


  return true;
}
