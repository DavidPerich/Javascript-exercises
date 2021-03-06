// Consider the following code:

// var name = 'Naveed';
// var greeting = 'Hello';

// var greeter = {
//   message: greeting + ' ' + name + '!',
//   sayGreetings: function() {
//     console.log(this.message);
//   }
// };


// Note that the message property uses the result of concatenation as its value. As a result, we have two global variables: name, and greeting that pollute the global scope. As we already know, we should limit the use of global variables as much as we can. Here we can avoid using the global variables by simply setting the message property to the value "Hello Naveed!". But let's pretend that we must use variables and concatenation to accomplish this. Can you think of a way to refactor this code so we don't have any other variables in the global scope besides greeter?



// var greeter = {
//   message: greeting + ' ' + name + '!',
//   sayGreetings: function() {
//     console.log(this.message);
//   }
// };

var greeter = (function () {
  var name = 'Naveed';
  var greeting = 'Hello';
  return {
    message: greeting + ' ' + name + '!',
    sayGreetings: function() {
      console.log(this.message);
    }
  };
})();

console.log(greeter)