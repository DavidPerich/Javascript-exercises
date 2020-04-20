// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// when a function is declared it creates a closure that 'remembers' the scope in which it was created. This means it has access to the variables and functions that are accessible in that scope. In this case logger has access to the status variable.

// The debugIt function defines a local variable named status and a function named logger. logger is an inner (nested) function, so it has access to any variables declared in the scope of its outer (parent) function, debugIt, due to lexical scoping rules.