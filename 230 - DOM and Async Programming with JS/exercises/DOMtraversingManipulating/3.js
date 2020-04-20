// Write a JavaScript function that takes an element's id and returns the DOM tree of the element in a two-dimensional array. The first subarray contains the element and its siblings, the second contains the parent of the element and its siblings, so on and so forth, all the way up to the "grandest" parent. Assume that the grandest parent is the element with an id of "1". Use the following HTML and test cases to test your code:

// getting childNodes of parent
// getting si

// function domTreeTracer(id) {
//   var element = document.getElementById(id);
//   var siblings = [].slice.call(element.parentElement.children).map((e) => e.nodeName);
//   var children = [].slice.call(element.children).map((e) => e.nodeName);

//   return [element.concat(siblings), children];
// }

// > domTreeTracer(1);
// = [["ARTICLE"]]
// > domTreeTracer(2);
// = [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
// > domTreeTracer(22);
// = [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]