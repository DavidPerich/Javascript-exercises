// Write a function that will take a short line of text, and write it to the console log within a box.

// Examples:

logInBox('To boldly go where no one has gone before.' +
'To boldly go where no one has gone before.' +
'To boldly go where no one has gone before.' );

// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+
// You may assume that the output will always fit in your browser window.

// PEDAC
// PROBLEM:

// log the string input surrounded by a string box
//  the top of the box has a top line of +---+ that has a margin of two characters greater than the string length - that is a (+-) plus (-) repeated string.length times)  plus  (-+) on either side.

// there is then an empty line which has ('| ') + (" ") repeated string length times plus (" |")
// then  the string with ('| ') and (' |') on either side
// there is then an empty line which has ('| ') + (" ") repeated string length times plus (" |")
// then the bottom row is the same as the top.

/// assumption is the string will always fit int the browser window

// data structure
// input is a string. Output is a console log
// we just need the string.length to do the work of creating the box

// algorithm
// declare boxWidth variable which is 2 + string.length
// declare headerAndFooter variable which is '+` + ('-')repeat(boxWidth) + '+'
// declare emptyRow variable which is ('|') = (' ').repeat(boxWidth) + ('|')
// declare stringRow var which ('| ') + string + (' |')

// console.log the box structure

function logInBox(string) {
  var internalBoxWidth = 2 + string.length;
  var headerAndFooter =  '+' + ('-').repeat(internalBoxWidth) + '+';
  var emptyRow = ('|') + (' ').repeat(internalBoxWidth) + ('|');
  var stringRow =  ('| ') + string + (' |');

  console.log(headerAndFooter);
  console.log(emptyRow);
  console.log(stringRow);
  console.log(emptyRow);
  console.log(headerAndFooter);
}