// // Write a function named greet that takes two arguments and logs a greeting:

// greet('howdy', 'Joe');
// // Howdy, Joe!
// greet('good morning', 'Sue');
// // Good morning, Sue!

// function greet(greeting, person) {
//   greeting = greeting[0].toUpperCase() + greeting.slice(1);
//   console.log(greeting + ", " + person + "!");
// }

// // 2 Use the partial function shown above and your solution to problem 1 to create sayHello and sayHi functions that work like this:

// function partial(primary, arg1) {
//   return function(arg2) {
//     return primary(arg1, arg2);
//   };
// }

// var sayHello = partial(greet, "Hello")
// var sayHi = partial(greet, "Hi")


// sayHello('Brandon');
// // Hello, Brandon!
//  sayHi('Sarah');
// // Hi, Sarah!

// 1) Using partial function application implement a function, sub5, that returns the value of a number subtracted by 5.

// function subtract(a, b) {
//   return a - b;
// }

// function sub5(a) {
//   return subtract(a, 5);
// }

// console.log(sub5(10)); // 5
// console.log(sub5(20)); // 15

// 2 This code is a bit limited however, because we can only subtract by 5. Implement the makeSubN function below so that we can supply any value we want to be subtracted from a, and get a new function that will always subtract this value.

// function subtract(a, b) {
//   return a - b;
// }

// function makeSubN(n) {
//   return function (a) {
//     return subtract(a, n)
//   };
// }

// var sub5 = makeSubN(5);
// console.log(sub5(10)); // 5

// 3) Although the solution above is more flexible, we now want to be able to supply any operation, not just subtraction. Implement makePartialFunc below.

// function makePartialFunc(func, b) {
//   return function(a) {
//     return func(a, b);
//   };
// }

// function multiply(a, b) {
//   return a * b;
// }

// function subtract(a, b) {
//     return a - b;
//   }


// var multiplyBy5 = makePartialFunc(multiply, 5);
// var subtract5 = makePartialFunc(subtract, 5);

// console.log(multiplyBy5(100)); // 500
// console.log(subtract5(50)); // 45

// 5) Consider the code below:

var subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall("Math", students);
  }
}

var mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan

// Implement makeMathRollCall such that it returns a partially applied rollCall function, with the subject as 'Math'.

