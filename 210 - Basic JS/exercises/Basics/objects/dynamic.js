// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // should log 678
console.log(myObject.prop2); // should log 456

// the variable prop2 stores the string '456' when we run the code myObject[prop2] we create a new property which with the key that is teh value stored in prop2 (the String '456') blah blah

// wghen we use bracket notation we are checking the variable prop2

// when we use dot noation we are checking the property with teh String literal 'prop2'

// Here is another example. What do you think will be logged to the console this time, and why?

var myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);

// we are stor