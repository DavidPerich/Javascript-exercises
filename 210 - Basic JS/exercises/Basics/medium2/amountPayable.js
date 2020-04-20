// What does the following code log? Why is this so?

var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function (item, quantity) {
  return startingBalance + (item * quantity);
};

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 45

// when the totalPayable function is declared it creates a closure. This closure contains the state of all other variables that share that scope (and other functions). If a variable that is included in the closure is reassigned it will be reassigned within teh closure too. It is the same variable.

// This means that a) startingBalance is accessible within teh totalPayable function because it is declared a global scope and b) that the closure 'knows' when startingBalance has been reasigned and uses the new value in when teh function is called.

// You may want to review the concept of closures. Closures have functions "retain access" to variables defined in an "enclosing scope". In the code above, the enclosing scope is the global (window) scope containing the variables startingBalance, chicken, and chickenQuantity. Retaining access means that a variable's value is not fixed at the time when the function is defined or first executed. Instead, the variable's value is dynamically looked up each time the function is called. Therefore, the value of startingBalance on line 6 is not 1; instead, the value is a reference to the value stored in the startingBalance variable in the global scope.