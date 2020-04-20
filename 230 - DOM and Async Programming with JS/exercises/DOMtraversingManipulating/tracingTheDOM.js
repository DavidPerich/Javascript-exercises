// Write a JavaScript function that takes an element's id and returns the DOM tree of the element in a two-dimensional array. The first subarray contains the element and its siblings, the second contains the parent of the element and its siblings, so on and so forth, all the way up to the "grandest" parent. Assume that the grandest parent is the element with an id of "1". Use the following HTML and test cases to test your code:

// > domTreeTracer(1);

// = [["ARTICLE"]]
// > domTreeTracer(2);
// = [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
// > domTreeTracer(22);
// = [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]



function domTreeTracer(id) {
  var currentElement = document.getElementById(id);
  var parentElement;
  var children;
  var domTree = [];

  do {
    parentElement = currentElement.parentNode;
    children = getTagNames(parentElement.children);
    domTree.push(children);

    currentElement = parentElement;
  } while (parentElement.tagName !== 'BODY');

  return domTree;
}

function getTagNames(htmlCollection) {
  var elementsArray = Array.prototype.slice.call(htmlCollection);
  return elementsArray.map(function(element) {
    return element.tagName;
  });
}

// given an id for an element (and therefore the element)
  // return a 2d array
    // first array has element and all its siblings
    // second contains the parent of the element and its siblings
    // third contains grandparetn and the siblings
  // assume grandest parent is the element with id of 1.
    // element with id of 1 is article in this case


// first array
// // rephrased it is - all the children of our element's parent.

// // second array rephrased - the childrent of our element's parent's parent.

// // condition is = while parent != grandestParent.

// // algorithm
//   // parent = element.parent
//   // while parent != grandestParent
//     /// push to the result array parent.childen. map tag names
//     parent = parent.parent

//   //
//   return result;