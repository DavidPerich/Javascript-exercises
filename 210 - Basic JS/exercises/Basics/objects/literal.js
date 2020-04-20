// Identify the bug in the following code. Don't run the code until after you've tried to answer.

var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;