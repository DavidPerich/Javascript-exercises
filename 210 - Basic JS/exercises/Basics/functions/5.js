// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// because we don't use var = the line is actually creating a global variable from within the method.

// so it should log "this is global. "

// Since it doesn't exist, JavaScript binds myVar to be a "property" of the global object. This is "almost" the same as if myVar was globally declare