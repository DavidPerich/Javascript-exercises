// Take a look at the following code:

var name = 'Bob';
var saveName = name;
name = 'Alice';
console.log(name, saveName);
// What does this code log to the console? Think about it for a moment before continuing.

// If you said that this code logged:

// Alice Bob
// you would be 100% correct, and the answer should come as no surprise. Now let's look at something slightly different:

var name = 'Bob';
var saveName = name;
name.toUpperCase();
console.log(name, saveName);
// What does this code log? Can you explain these results?

'Bob Bob'

We don't save the return value of callin the toUpperCase() method in any variable. Strings are immutable. they are one of the 6 primative types


numbers
booleans
strings
null
undefined
NaN

