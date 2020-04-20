// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This time we reasign the myVar variable that is declared in the outter scope. So it will log "this is local"

// variables with global scope are accessible within the inner scope of function.

