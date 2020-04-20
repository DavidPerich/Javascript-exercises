// Nested array of nodes
var nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];


// OR
//
// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]]

var nodes2 = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];

arrayToNodes(nodes);

// ["BODY", [
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", [
//       ["DIV",[]]]]]],
//   ["DIV", []],
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", []],
//     ["DIV", []]]]]]


// input - a nested array of nodes
  // each parent has all its children as the second index in the nested array
  // each child has all its children as the second index in a nested array
  // if the element has no children then it has an empty array in the second index

  // output is html

// loop through the array


//option one
// iterate through the array
// it its a tag then create an element
  // if its an array loop through the array
    // if its a tag create element and add it as child to previous parent

    // how the hell do you keep track of previous parent.

function arrayToNodes(nodes) {
  nodes.forEach(function(pair) {
    
  })
}