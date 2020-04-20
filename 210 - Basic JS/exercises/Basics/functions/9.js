// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

console.log(a);

var a = 1;

// It should log undefined. With hoisting the code should actually look like this. So the declaration of a is hoisted to the top of the scope. then we try log the variable without assigning anything to it - so it logs undefined. then we assign 1 to the variable.

// var a ;
// console.log(a);
// a = 1;

// . The JavaScript interpreter doesn't "immediately" execute all of a program's code line by line. Instead, it first goes over the code to find and associate variable declarations with their appropriate scope. Visually, this is as if JavaScript moves (or "hoists") each variable declaration to the top of its scope. The assignment operation, however, is not hoisted.