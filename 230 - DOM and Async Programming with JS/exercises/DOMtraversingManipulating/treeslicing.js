// Implement a function, sliceTree, that is "similar" to the Array.prototype.slice method, but this time for a DOM tree. The sliceTree function takes two arguments: the start index which is the parent node's id attribute and, the end index which is the innermost child node's id attribute. The function returns an array of tagNames. Take note of the following when implementing the sliceTree function:

// It's similar to slice but different in the sense that slice isn't inclusive on the right hand side.
// The end index doesn't have to be the id of the "innermost" child node as some of the examples suggest.
// Only consider element nodes.
// Only elements that have body as an ancestor (parent, grandparent, etc.) are sliceable.
// If the id attribute of the start or end index is not in the DOM, return undefined.
// If the slice is not feasible — there's no path connecting the element at the starting index to the ending index — return undefined.
// Use this HTML and sample run to test out your code:>


// takes to arguments
  // the start index -  which is the parent node's id attribute
  // the end index - which is the innermost child node's id attribute
// returns an array of tagNames

// It is more like - what is teh direct path from the parent to the child.
// its not slicing all the siblings on teh way - JUST parent to parent until you get to the child.


// algorithm

// if start or end elements are undefined - return undefined
// if end.parent === start then return result array
// otherwise just keep pushing the tagname of the parent to the resutl array.


function sliceTree(start, end) {
  var currentChild = document.getElementById(end);
  var endParent = document.getElementById(start);

  if (!currentChild || !endParent) return undefined;

  var result = [currentChild.tagName];
  var currentParent = currentChild.parentElement;


  while (currentChild != endParent) {
    result.push(currentParent.tagName);
    currentChild = currentParent;
    currentParent = currentParent.parentElement;
  }

  return result.reverse();
}

// sliceTree(1, 4);
// = ["ARTICLE", "HEADER", "SPAN", "A"]
// > sliceTree(1, 76);
// = undefined
// > sliceTree(2, 5); // siblings
// = undefined
// > sliceTree(5, 4); // not related
// = undefined
// > sliceTree(1, 23);
// = ["ARTICLE", "FOOTER"]
// > sliceTree(1, 22);
// = ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
// > sliceTree(11, 19);
// = ["SECTION", "P", "SPAN", "STRONG", "A"]


