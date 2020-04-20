// You have written basic functions to display a random greeting to any number of friends upon each invocation of greet. Upon invoking the greet function, however, the output is not as expected. Figure out why not and fix the code.

// function randomGreeting() {
//   var words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
//                'Greetings', 'Salutations', 'Good to see you'];

//   var idx = Math.floor(Math.random() * words.length);

//   words[idx]; // doesn't return this.
// }

function randomGreeting() {
  var words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  var idx = Math.floor(Math.random() * words.length);

  return words[idx];
}

function greet() {
  var names = Array.prototype.slice.call(arguments);
  var i;

  for (i = 0; i < names.length; i++) {
    var name = names[i];
    var greeting = randomGreeting(); // this wasn't a function call, but just assinging greetings teh actual function randomGreeting.

    console.log(greeting + ', ' + name + '!');
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');