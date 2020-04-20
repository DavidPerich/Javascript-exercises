// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// The myVar variable is declared at a global scope. Which means it is accessible at the inner scope of the someFunction function.

// When javascript tries to log the value of myVar it checks through the scoping heirachy from bottom to top until it finds a variable with that name.