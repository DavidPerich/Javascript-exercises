// The code below is expected to output the following when run:

var helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
// "Good Morning Victor"


function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      var msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += this.morning + ' ' + name;
          break;
        case 'afternoon':
          msg += afternoon + ' ' + name;
          break;
        case 'evening':
          msg += evening + ' ' + name;
          break;
      }

      console.log(msg);
    },
  };
}
// However, it instead results in an error. What is the problem with the code? Why isn't it producing the expected results?


// When we call helloVictor.greet we set the execution context to the HelloVictor object. That means that this is equal to the helloVictor object. In the lexical scope of the function greet object there is no morning variable so on line 18 we get an error.

// To call the property morning - we need to prepend this so we have this.morning.

// We could also do the same to name, but we don't need to. This is because there is a variable called name that is accessible in the greet function scope - the local variable declared by createGreeter is remains in the closure created when the anonymous function saved to greet was declared.