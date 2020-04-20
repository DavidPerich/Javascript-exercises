// Read through the following code. Currently, it does not log the expected result. Explain why this happens, then refactor the code so that it works as expected.

var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(person.name === otherPerson.name);    // false -- expected: true

// what you are comparing are the two objects person and otherPerson. when two objects are compared they will only return true if tehy are the same object.

// Strings are comparable as they are primative objects. The name property for each variable contains a String with the value of 'Victor'

// // In JavaScript, every object literal creates a new object. When this object is assigned to a variable, a reference to the object is stored in that variable. In the example above, the only way to ensure that the two variables compare equally is to have them reference the same object.


// Here we're comparing 2 primitive types, which are compared by their value, while objects are compared by their reference.

