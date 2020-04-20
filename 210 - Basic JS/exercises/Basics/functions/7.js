// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// The a within the method is a shadow of the outer method. the parameter a is created within the inner scope of the function. The reassignment of the inner scoped a has no effect on the global a.