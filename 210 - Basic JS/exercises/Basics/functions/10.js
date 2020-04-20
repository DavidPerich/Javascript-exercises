// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

logValue();

function logValue() {
  console.log('Hello, world!');
}

// function declarations also get hoisted to the top of the scope. Which means you can call functions before they are declared. With function declarations the entire function gets hoisted to the top of the scope.

// so in this case the code will log 'Hello World!'

// When both a variable and a function declaration exist, the function declaration is hoisted first (located above the variable declaration)