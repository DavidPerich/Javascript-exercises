// Implement a function that converts the DOM, starting from the body, to nested arrays. Each element in the DOM is represented as ["PARENT_TAG_NAME", [children]] where children are elements as well and as such follow the same format. When an element has no children, it's represented as ["PARENT_TAG_NAME", []]. For instance, if the HTML doesn't have any elements inside the body, the result array would be: ["BODY", []]. Likewise, if the HTML only has a div element as its content, the result array would be: ["BODY", [["DIV", []]]].

// Go

// input: none
// output an array of arrays
  // each element of the DOM - starting at the body - has an array with two elements. The parent tag name and then a sub array of all thechildren
    // each child also has the same structure - an array with its tagname and all its children.



// algorithm

function nodesToArr() {
  function getChildren(parent) {
    return [parent.tagName, Array.from(parent.children).map(getChildren)];
  }

  return getChildren(document.body);
}