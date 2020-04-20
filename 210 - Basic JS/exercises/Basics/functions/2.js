// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// will log this is local.
// We delcare a new myVar in the local scope
// thats is what gets logged when ew call  console.log